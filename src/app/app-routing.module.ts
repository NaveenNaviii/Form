import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeeGuard } from './employee.guard';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'emp',component:EmployeeComponent},
  {path:"addEmp",component:AddEmployeesComponent},
  {path:"editEmp",component:EditEmployeesComponent,canActivate:[EmployeeGuard]},
  {path:"login",component:LoginComponent},
  {path:"regn",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
