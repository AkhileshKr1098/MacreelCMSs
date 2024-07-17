import { Component } from '@angular/core';
import { CRUDService } from 'src/app/Servies/crud.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  totalEmp = 0
  total_lead = 0
  total_client = 0
  login: any
  login_data: any
  constructor(
    private _crud: CRUDService
  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);
  }
  ngOnInit() {
    this._crud.get_employee().subscribe(
      (res: any) => {
        console.log(res);
        this.totalEmp = res.length
      }
    )
    this._crud.get_lead_for_admin().subscribe(
      (res: any) => {
        this.total_lead = res.length
        console.log(res);

      }
    )

    this._crud.ClientAdd(this.login_data.LoginResponse.Type, this.login_data.EmpId).subscribe(
      (res: any) => {
        console.log(res);
        this.total_client = res.length
      }
    )
  }

}
