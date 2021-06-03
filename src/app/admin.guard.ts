import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';

export class User {
  constructor(

    public role: string,


  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user: User;
constructor(private auth :AuthService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.auth.isLoggedIn()){
        localStorage.setItem("role", this.user.role);

        if (localStorage.getItem("role")==="Administrateur"){

        return this.router.parseUrl("/admin");

        }
      }else{
  window.alert('You don\'t have permission to view this page');
  return this.router.parseUrl("/");
}
}

}
