import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl("",[Validators.required,Validators.pattern("(?=^.{8,}$)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]) 
  })
  get email(){
    return this.loginForm.get("email")
  }
  get password(){
    return this.loginForm.get("password")
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    
    let  c=this.loginForm.value.email
    let  d=this.loginForm.value.password
localStorage.setItem('loginMail',c)
localStorage.setItem('loginpass',d)

    return console.log(this.loginForm.value);
  

  }

}
























