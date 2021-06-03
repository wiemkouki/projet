import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

constructor(private auth :AuthService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.auth.isLoggedIn()){
       let role =localStorage.getItem("role");
        if (role==="Administrateur"){

        return this.router.parseUrl("/admin");

        }

      }else{
  window.alert('You don\'t have permission to view this page');
  return this.router.parseUrl("/");
}
}

}
