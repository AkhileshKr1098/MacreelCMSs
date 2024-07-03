import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', component: LoginComponent},
  {path:'admin',
  loadChildren :() => import('../app/admin/admin.module').then((a)=>a.AdminModule) },
  {path:'employee',
    loadChildren :() => import('../app/employee/employee.module').then((e)=>e.EmployeeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
