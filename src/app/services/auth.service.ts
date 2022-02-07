import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  local(){
    let a=localStorage.getItem("email")
    let b=localStorage.getItem('password')
   let c= localStorage.getItem("loginMail")
     let d= localStorage.getItem("loginpass")
     if(a===c && b===d && a!=null && b!=null)
     {
  return true
     }
     else{
       return false
     }
     return false
   }
  }

