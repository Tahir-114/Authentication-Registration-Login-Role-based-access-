import { Component, OnInit, Inject, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css'],
})
export class UpdatepopupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toaster:ToastrService,
    private dialog:MatDialogRef<UpdatepopupComponent>
  ) {}
  editdata: any;
  ngOnInit(): void {
    this.service.GetAllRoles().subscribe((res) => {
      this.rolelist = res;
    });
    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.GetUserbyCode(this.data.usercode).subscribe((res) => {
        this.editdata = res;
        this.registerform.setValue({
          id: this.editdata.id,
          name: this.editdata.name,
          email: this.editdata.email,
          password: this.editdata.password,
          role: this.editdata.role,
          gender: this.editdata.gender,
          isactive: this.editdata.isactive,
        });
      });
    }
  }
  rolelist: any;
  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control('', Validators.required),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.required),
    isactive: this.builder.control(false),
  });
  updateuser() {
    if(this.registerform.valid){
      this.service.updateuser(this.registerform.value.id,this.registerform.value).subscribe(res=>{
        this.toaster.success('Update Successfully');
        this.dialog.close();
      })
    }else{
      this.toaster.warning('Please Select Role')
    }
  }
}
