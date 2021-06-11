import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

export class User {
  constructor(public role: string )
    {}
}

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  user: User;
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.auth.isLoggedIn()){
        let role =localStorage.getItem("role");
         if (role==="Client"){

         return this.router.parseUrl("/profil");

         }

       }else{

   window.alert('You don\'t have permission to view this page');
   return this.router.parseUrl("/");
 }
  }

}
