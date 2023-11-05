//Danielle Taplin
//app.component.ts
//11/5/23
//sign-in guard

//imports from Angular and rxjs
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

//create sign-in guard class using CanActivate
export class SignInGuard implements CanActivate {

  //create constructor using router
  constructor(private router: Router){

  }

  //create CanActivate route guard
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //set is logged in equal to the boolean value of the next query params
    let isLoggedIn = next.queryParams.isLoggedIn;

    //ff isLoggedIn is true:
    if(isLoggedIn){
      //return true
      return true;
    } else {
      //otherwise navigate to default route and return false
      this.router.navigate(['/'])
      return false
    }
  }
}
