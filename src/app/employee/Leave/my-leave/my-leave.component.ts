import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit {
  leaveData :  any
  loginas: any
  login_data: any
  filter_data:any
  constructor(
    private _shared: SharedService,
    private _crud : CRUDService
  ) {
    this.loginas = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.loginas)
    console.log(this.login_data.LoginResponse.EmpId)  
  }
  ngOnInit() {
   this._crud.getApplyLeave(this.login_data.LoginResponse.EmpId).subscribe(
    (res:any)=>{
      console.log(res);
      this.leaveData =  res
      this.filter_data =  res
    }
   )
  }

  OnSearch(filter: String) {
    this.leaveData = this.filter_data.filter((item: any) => {
      if (item.EmployeeName.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }

      if (item.FromDate.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }

      if (item.ToDate.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;

      }
      if (item.LeaveType.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;

      }
      if (item.Description.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;

      }
      if (item.Status.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;

      }
      return false;

    }
    );

  }
}
