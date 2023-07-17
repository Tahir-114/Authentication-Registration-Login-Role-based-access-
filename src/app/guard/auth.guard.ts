import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService, private route: Router, private toastr: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service.IsLoggedIn()) {
        if (route.url.length > 0) {
          let menu = route.url[0].path;
          if (menu == 'user') {
            if (this.service.getrole() == 'admin') {
              return true;
            } else {
              this.route.navigate(['']);
                this.toastr.warning('You dont have access.')
              return false;
            }
          }else{
            return true;
          }
        } else {
          return true;
        }
      }
      else {
        this.route.navigate(['login']);
        return false;
      }
    }
  
}
