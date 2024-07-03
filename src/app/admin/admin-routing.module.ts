import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { ClientListComponent } from './Client/client-list/client-list.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ClientViewComponent } from './Client/client-view/client-view.component';
import { ClientUpdateComponent } from './Client/client-update/client-update.component';





const routes: Routes = [
  {path:'', component: HomeComponent, 
    children :[
      {path:'', component: DashbordComponent},
      {path:'emplist', component: EmployeeListComponent},
      {path:'empadd', component: EmployeeAddComponent},
      {path:'empupdate', component: EmployeeUpdateComponent},
      {path:'empview', component: EmpViewComponent},
      {path:'clientlist', component:ClientListComponent},
      {path:'clientadd', component:AddClientComponent},
      {path:'clientview', component:ClientViewComponent },
      {path:'clientupdate', component:ClientUpdateComponent },
    ]
  },
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
 
  ],
  exports: [
    RouterModule,  ]
})
export class AdminRoutingModule { }
