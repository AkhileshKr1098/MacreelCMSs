import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LeadListComponent } from './Lead/lead-list/lead-list.component';
import { AddLeadComponent } from './Lead/add-lead/add-lead.component';
import { LeadUpdateComponent } from './Lead/lead-update/lead-update.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ClientListComponent } from './Client/client-list/client-list.component';
import { EmpUpdateComponent } from './Employee/emp-update/emp-update.component';
import { ListEmpComponent } from './Employee/list-emp/list-emp.component';
import { AddEmpComponent } from './Employee/add-emp/add-emp.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: DashbordComponent },
      { path: 'leadlist', component: LeadListComponent },
      { path: 'leadadd', component: AddLeadComponent },
      { path: 'leadupdate', component: LeadUpdateComponent },
      { path: 'clientadd', component: AddClientComponent },
      { path: 'clientlist', component: ClientListComponent },
      { path: 'emplist', component: ListEmpComponent },
      { path: 'empadd', component: AddEmpComponent },
      { path: 'empupdate', component: EmpUpdateComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
