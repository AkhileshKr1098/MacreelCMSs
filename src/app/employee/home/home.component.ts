import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
login:any;
login_data :any
role_permission : any
  constructor(
  ) {
    this.get_role()
  }

  get_role(){
    this.login =  localStorage.getItem('logindata')
    this.login_data =  JSON.parse(this.login)
    console.log(this.login_data);
    console.log(this.login_data.RolePermissions);
    this.role_permission = this.login_data.RolePermissions
    
  }
  ImgUrl: string = '../assets/images/macreel.png'
  onProjectMenu: boolean = false
  onLeaveMenu: boolean = false
  onTaskMenu: boolean = false
  onLeadMenu: boolean = false
  onTaskReportMenu: boolean = false

  onProfile() {

  }

  ProjectMenu() {
    this.onProjectMenu = !this.onProjectMenu;
    this.onLeaveMenu = false;
    this.onTaskMenu = false;
    this.onLeadMenu = false;
    this.onTaskReportMenu = false;
  }
  LeaveMenu() {
    this.onLeaveMenu = !this.onLeaveMenu;
    this.onProjectMenu = false;
    this.onTaskMenu = false;
    this.onLeadMenu = false;
    this.onTaskReportMenu = false;
  }
  
  TaskMenu() {
    this.onTaskMenu = !this.onTaskMenu;
    this.onLeaveMenu = false;
    this.onProjectMenu = false;
    this.onLeadMenu = false;
    this.onTaskReportMenu = false;
  }
  LeadMenu() {
    this.onLeadMenu = !this.onLeadMenu;
    this.onLeaveMenu = false;
    this.onTaskMenu = false;
    this.onProjectMenu = false;
    this.onTaskReportMenu = false;
  }
  TaskReportMenu() {
    this.onTaskReportMenu = !this.onTaskReportMenu;
    this.onProjectMenu = false;
    this.onLeaveMenu = false;
    this.onTaskMenu = false;
    this.onLeadMenu = false;
  }
}
