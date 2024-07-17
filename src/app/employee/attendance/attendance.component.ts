import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CRUDService } from 'src/app/Servies/crud.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  cur_year: any
  pri_year: any
  form!: FormGroup;
  currentMonth!: number;
  months!: string[];
  idd: any = 2
  login: any
  login_data: any
  attendanceData: any
  constructor(
    private fb: FormBuilder,
    private _crud: CRUDService,
    private http: HttpClient
  ) {
    this.cur_year = new Date().getFullYear();
    this.pri_year = this.cur_year - 1;

    this.months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data);
    console.log(this.login_data.LoginResponse.EmployeeCode);
  }


  ngOnInit(): void {
    console.log(this.cur_year);

    this.currentMonth = new Date().getMonth(); // getMonth() returns month from 0-11
    this.form = this.fb.group({
      month: [this.currentMonth],
      year: [this.cur_year],
    });

    this.gteA(this.currentMonth, this.cur_year)
  }

  getMonthBy(data: any) {
    console.log(data);
    this.gteA(data, this.form.get('year')?.value)
  }
  
  getYearBy(data: any) {
    console.log(data);
    this.gteA(this.form.get('month')?.value, data)
  }

  gteA(month: any, year: any) {
    console.log(month, year, this.login_data.LoginResponse.EmployeeCode);

    const formda = new FormData()
    formda.append('EmployeeCode', this.login_data.LoginResponse.EmployeeCode)
    formda.append('Month', month)
    formda.append('Year', year)

    this._crud.attendance(formda).subscribe(
      (res: any) => {
        console.log(res);
        this.attendanceData = res
      }
    )
  }

}