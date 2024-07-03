import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
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
import { DashbordComponent } from './dashbord/dashbord.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ClientListComponent } from './Client/client-list/client-list.component';
import { ClientUpdateComponent } from './Client/client-update/client-update.component';
import { ClientViewComponent } from './Client/client-view/client-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashbordComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    EmpViewComponent,
    AddClientComponent,
    ClientListComponent,
    ClientUpdateComponent,
    ClientViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule { }
