import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  title = 'angapp';
  ismenurequired=false;
  isadminuser=false;
  constructor(private route:Router, private service:AuthService){

  }
  ngDoCheck(): void {
    let currenturl =this.route.url;
    if (currenturl=='/login' || currenturl=='/register'){
      this.ismenurequired=false;
    }else{
      this.ismenurequired=true;
    }
    if(this.service.GetUserRole()==='admin'){
      this.isadminuser=true;
    }else{
      this.isadminuser=false;
    }
  }
}


