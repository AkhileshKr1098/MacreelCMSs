import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';


import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ClientListComponent } from './Client/client-list/client-list.component';
import { ViewClientComponent } from './Client/view-client/view-client.component';
import { ClientUpdateComponent } from './Client/client-update/client-update.component';
import { AddLeadComponent } from './Lead/add-lead/add-lead.component';
import { LeadListComponent } from './Lead/lead-list/lead-list.component';
import { LeadUpdateComponent } from './Lead/lead-update/lead-update.component';
import { AddEmpComponent } from './Employee/add-emp/add-emp.component';
import { ListEmpComponent } from './Employee/list-emp/list-emp.component';
import { EmpViewComponent } from './Employee/emp-view/emp-view.component';
import { EmpUpdateComponent } from './Employee/emp-update/emp-update.component';
import { AssignLeadComponent } from './Lead/assign-lead/assign-lead.component';
import { MyLeadComponent } from './Lead/my-lead/my-lead.component';
import { AssignedListComponent } from './Lead/assigned-list/assigned-list.component';
import { AddleaveComponent } from './Leave/addleave/addleave.component';
import { MyLeaveComponent } from './Leave/my-leave/my-leave.component';
import { ApprovedLeaveComponent } from './Leave/approved-leave/approved-leave.component';
import { ApplyLeaveRequstComponent } from './Leave/apply-leave-requst/apply-leave-requst.component';
import { LeadFlowupComponent } from './Lead/lead-flowup/lead-flowup.component';
import { UpdateLeaveComponent } from './Leave/update-leave/update-leave.component';
import { StatusUpdateLeadComponent } from './Lead/status-update-lead/status-update-lead.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TodayFlowLeadComponent } from './Lead/today-flow-lead/today-flow-lead.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashbordComponent,
    AddClientComponent,
    ClientListComponent,
    ViewClientComponent,
    ClientUpdateComponent,
    AddLeadComponent,
    LeadListComponent,
    LeadUpdateComponent,
    AddEmpComponent,
    ListEmpComponent,
    EmpViewComponent,
    EmpUpdateComponent,
    AssignLeadComponent,
    MyLeadComponent,
    AssignedListComponent,
    AddleaveComponent,
    MyLeaveComponent,
    ApprovedLeaveComponent,
    ApplyLeaveRequstComponent,
    LeadFlowupComponent,
    UpdateLeaveComponent,
    StatusUpdateLeadComponent,
    AttendanceComponent,
    TodayFlowLeadComponent,

  
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule
  ]
})
export class EmployeeModule { }
