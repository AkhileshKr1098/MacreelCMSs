import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent {
  leaveData: any
  loginas: any
  login_data: any
  filter_data: any

  dateRanges: any[] = [];

  constructor(
    private _shared: SharedService,
    private _crud: CRUDService,
    private _routing: Router
  ) {
    this.loginas = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.loginas)
    console.log(this.login_data.LoginResponse.EmpId)
  }

  ngOnInit() {
    this._crud.getLeaveAdmin().subscribe(
      (res: any) => {
        console.log(res);
        this.leaveData = res.map((leave: any) => ({
          ...leave,
          LeaveCount: leave.LeaveCount || this.calculateLeaveCount(leave.FromDate, leave.ToDate) // Ensure LeaveCount is set
        }));
        this.filter_data = this.leaveData;
        console.log(this.filter_data);

      }
    )
  }

  calculateLeaveCount(fromDate: string, toDate: string): number {
    const start = new Date(fromDate);
    const end = new Date(toDate);
    return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }


  onUpdate(data: any) {
    console.log(data);
    this._shared.leaveUpdatedata.next(data)
    this._routing.navigate(['/admin/leaveupdaet'])
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