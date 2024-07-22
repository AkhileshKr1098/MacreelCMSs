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
import { ClientUpdateComponent } from './Client/client-update/client-update.component';
import { AssignLeadComponent } from './Lead/assign-lead/assign-lead.component';
import { AssignedListComponent } from './Lead/assigned-list/assigned-list.component';
import { AddleaveComponent } from './Leave/addleave/addleave.component';
import { LeadFlowupComponent } from './Lead/lead-flowup/lead-flowup.component';
import { MyLeaveComponent } from './Leave/my-leave/my-leave.component';
import { ApplyLeaveRequstComponent } from './Leave/apply-leave-requst/apply-leave-requst.component';
import { UpdateLeaveComponent } from './Leave/update-leave/update-leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TodayFlowLeadComponent } from './Lead/today-flow-lead/today-flow-lead.component';
import { ProfilePageComponent } from './Profile/profile-page/profile-page.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: DashbordComponent },
      { path: 'leadlist', component: LeadListComponent },
      { path: 'leadadd', component: AddLeadComponent },
      { path: 'leadupdate', component: LeadUpdateComponent },
      { path: 'todayleadflow', component: TodayFlowLeadComponent },
      { path: 'leadflowup', component: LeadFlowupComponent },
      { path: 'assigedlist', component: AssignedListComponent },
      { path: 'clientadd', component: AddClientComponent },
      { path: 'clientlist', component: ClientListComponent },
      { path: 'clientupdate', component: ClientUpdateComponent },
      { path: 'emplist', component: ListEmpComponent },
      { path: 'empadd', component: AddEmpComponent },
      { path: 'empupdate', component: EmpUpdateComponent },

      // for leave 
      { path: 'levaeadd', component: AddleaveComponent },
      { path: 'myleavelist', component: MyLeaveComponent },
      { path: 'applyLeaveRequst', component: ApplyLeaveRequstComponent },
      { path: 'updateleave', component: UpdateLeaveComponent },

      // for Attendance
      { path: 'attendance', component: AttendanceComponent },

      // for about 

      

    ],
    
  },
  { path: 'profile', component: ProfilePageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
