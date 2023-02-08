import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private guardservice:GuardService,private route :Router){}
  canActivate( ) {
   if( this.guardservice.IsLoggedIn())
   {
    return true;
   }
   alert("You have not logged in")
   this.route.navigate(["/login"])
   return false
  }
  
}
