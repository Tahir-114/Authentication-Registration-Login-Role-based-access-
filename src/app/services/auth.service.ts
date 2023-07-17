import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  GetRole() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/user';
  GetAll(){
    return this.http.get(this.apiurl);
  }
  GetAllRoles(){
    return this.http.get('http://localhost:3000/Role');
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  ProceedRegister(Inputdata:any){
    return this.http.post(this.apiurl, Inputdata);
  }
  updateuser(code:any,Inputdata:any){
    return this.http.put(this.apiurl+'/'+code, Inputdata);
  }
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
}
