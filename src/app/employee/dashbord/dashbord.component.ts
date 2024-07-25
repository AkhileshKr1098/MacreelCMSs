import { Component } from '@angular/core';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  dashboard_data: any
  login: any
  login_data: any
  role_permission:any
  TodayFollowup: any = 0
  constructor(
    private _shared: SharedService,
    private _crud: CRUDService
  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);
    this.get_role()
  }

  get_role() {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data);
    this.role_permission = this.login_data.RolePermissions

  }

  ngOnInit(): void {
    this._crud.getDasboard(this.login_data.LoginResponse.EmpId).subscribe(
      (res: any) => {
        console.log(res);
        this.dashboard_data = res
      }
    )
  }
}

