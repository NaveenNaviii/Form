import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  employeeVal:any;
  employeeArr: any=[]
  
    first:any= "^[a-zA-Z0-9]+$";
  desi:any="^[a-zA-Z0-9]+$";
  salary1:any='^[0-9]+$';
    loginForm= new FormGroup({
  
      fname: new FormControl("", [Validators.required, Validators.pattern(this.first)]),
  
      fdesig:new  FormControl("", [Validators.required, Validators.pattern(this.desi)]),
  
      fsalary: new FormControl("", [Validators.required, Validators.pattern(this.salary1)]),
  
    fage: new FormControl("", [Validators.required, Validators.min(18), Validators.max(150)]),
  
    })
  
    get fname(){
      return this.loginForm.get('fname')
    }
  
    get fdesig(){
      return this.loginForm.get('fdesig')
    }
  
  get fsalary(){
    return this.loginForm.get('fsalary')
  }
  
  get fage(){
    return this.loginForm.get('fage')
  }
  
   login(){
    // console.log(this.loginForm.value)
    this.employeeVal={
      getFullName: this.fname.value,
      getDesignation:this.fdesig.value,
      getSalary:this.fsalary.value,
      getAge:this.fage.value
    }
  
    this.employeeArr.push(this.employeeVal)
    console.log(this.employeeArr);
   
  }


  constructor() { }

  ngOnInit(): void {
  }

}
