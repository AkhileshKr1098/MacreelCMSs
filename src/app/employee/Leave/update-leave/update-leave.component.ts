import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-update-leave',
  templateUrl: './update-leave.component.html',
  styleUrls: ['./update-leave.component.css']
})
export class UpdateLeaveComponent {
  leave_form!: FormGroup
  update_data: any
  loginas: any
  login_data: any


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _crud: CRUDService,
    private _shared: SharedService

  ) {


    // for get data localStorage 
    this.loginas = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.loginas)
    console.log(this.login_data.LoginResponse.EmpId)
  }

  ngOnInit(): void {
    this.leave_form = this.fb.group({
      Id: [''],
      FromDate: [''],
      ToDate: [''],
      Description: ['',],
      LeaveType: [''],
      LeaveCount: ['', Validators.required],
      Status: ['', Validators.required],
      Remark: [''],
    })


    this._shared.leaveUpdatedata.subscribe(
      (res: any) => {
        this.leave_form.patchValue(res)
        console.log(res);

      }
    )


  }



  onSubmit() {
    console.log(this.leave_form.value);

    if (!this.leave_form.valid) {
      this._shared.tostErrorTop('Please fill all required fields')
      return
    } else {
      console.log(this.leave_form.get('Id')?.value);
      console.log(this.leave_form.get('Status')?.value);
      console.log(this.leave_form.get('LeaveCount')?.value);
      console.log(this.leave_form.get('Remark')?.value);
      
      const fromdata = new FormData()
      fromdata.append('Id', this.leave_form.get('Id')?.value)
      fromdata.append('Status', this.leave_form.get('Status')?.value)
      fromdata.append('Description', this.leave_form.get('Remark')?.value)
      fromdata.append('LeaveCount', this.leave_form.get('LeaveCount')?.value)

      this._crud.UpdateLeave(fromdata).subscribe(
        (res: any) => {
          console.log(res);
         if (res == 'Sucess') {
            this._shared.tostSuccessTop(`Leave Update Success`)
         }
        }
      )
    }
  }
}