import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  constructor(private authguard:AuthService){}
  canActivate()
    {
      if(this.authguard.local()){
        alert('you are successfully logged in')
        
        return true
      }
      else{
        window.alert('you need to login to visit this page')
      return false
      }
  }
  
}
