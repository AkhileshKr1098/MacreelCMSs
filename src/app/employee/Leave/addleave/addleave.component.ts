import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent {
  leave_form!: FormGroup
  document_url: any
  update_data: any
  curDate = new Date();
  act_btn: boolean = false
  actiontext: string = 'date'
  actionredonly: boolean = false
  loginas: any
  login_data: any
  leaveAssign: any
  leaveType: any

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _crud: CRUDService,
    private _shared: SharedService

  ) {
    this.update_data = this.router.getCurrentNavigation()?.extras
    console.log(this.update_data)

    // for get data localStorage 
    this.loginas = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.loginas)
    console.log(this.login_data.LoginResponse.EmpId)
  }

  ngOnInit(): void {
    this.leave_form = this.fb.group({
      FromDate: ['', Validators.required],
      ToDate: ['', Validators.required],
      Description: ['',],
      LeaveType: ['', Validators.required],
    })


    this._crud.getAssignLeave(this.login_data.LoginResponse.EmpId).subscribe(
      (res: any) => {
        this.leaveAssign = res
      }
    )
    this._crud.getLeaveType(this.login_data.LoginResponse.EmpId).subscribe(
      (res: any) => {
        this.leaveType = res
      }
    )
  }



  onSubmit() {
    console.log(this.leave_form.value);

    if (!this.leave_form.valid) {
      this._shared.tostErrorTop('Please fill all required fields')
      return
    } else {
      const fromdata = new FormData()
      fromdata.append('FromDate', this.leave_form.get('FromDate')?.value)
      fromdata.append('ToDate', this.leave_form.get('ToDate')?.value)
      fromdata.append('LeaveType', this.leave_form.get('LeaveType')?.value)
      fromdata.append('Description', this.leave_form.get('Description')?.value)
      fromdata.append('EmployeeId', this.login_data.LoginResponse.EmpId)
      fromdata.append('EmployeeName', this.login_data.LoginResponse.EmployeeName)

      this._crud.ApplyLeave(fromdata).subscribe(
        (res: any) => {
          console.log(res);
          if (res == "Leave Appply") {
            this.router.navigate(['/employee/myleavelist'])
            this._shared.tostSuccessTop('Leave Appply Success')
          }
        }
      )
    }
  }
}
