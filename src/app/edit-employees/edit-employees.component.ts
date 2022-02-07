import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  firstName:any= "^[a-zA-Z0-9]+$";
  design:any="^[a-zA-Z0-9]+$";
  
  salary:any='/^(\d{1,2})(,\d{2})*(,\d{1,3}){1}(\.\d{1,})?$/g'
    
  addForm= new FormGroup({
    uname:new FormControl("", Validators.required, Validators.pattern['firstName']),
  
    desig:new  FormControl("", Validators.required, Validators.pattern['design']),
  
    usalary: new FormControl("", Validators.required, Validators.pattern['salary']),
  
    uage: new FormControl("", [Validators.required, Validators.min(18), Validators.max(150)]),
  
  })
  
  get uname(){
    return this.addForm.get('uname')
  }
  
  get desig(){
    return this.addForm.get('desig')
  }
  
  get usalary(){
    return this.addForm.get('usalary')
  }
  
  get uage(){
    return this.addForm.get('uage')
  }
  
  add(){
    console.log(this.addForm.value);
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
