import { Component } from '@angular/core';
import { CRUDService } from 'src/app/Servies/crud.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  login: any
  login_data: any
  dashboard_data :any
  constructor(
    private _crud: CRUDService
  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);
  }
  ngOnInit() {
    this.get_data()
  }

  get_data() {
    this._crud.getDasboardAdmin().subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.TodayLeave);
        this.dashboard_data =  res
      }
    )
  }

}
