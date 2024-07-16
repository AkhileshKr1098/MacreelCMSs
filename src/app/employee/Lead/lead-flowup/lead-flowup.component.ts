import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-lead-flowup',
  templateUrl: './lead-flowup.component.html',
  styleUrls: ['./lead-flowup.component.css']
})
export class LeadFlowupComponent implements OnInit {
  leadform !: FormGroup
  flowupdata: any
  leadData: any
  login: any
  login_data: any
  constructor(
    private _shared: SharedService,
    private _crud: CRUDService,
    private FB: FormBuilder

  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);
  }

  ngOnInit() {
    // this.leadform =  new this.fb.group(())
    this.leadform = this.FB.group({
      response: ['', Validators.required],
      nextfollow_up_date: ['', Validators.required],
    })

    this._shared.LeadFlowup.subscribe(
      (res: any) => {
        this.leadData = res
        this.getFlowup(res.Id)

      }
    )
  }

  getFlowup(id: any) {
    this._crud.getLeadeFlowup(id).subscribe(
      (res: any) => {
        this.flowupdata = res
      }
    )
  }

  onSubmit() {
    console.log(`Loginid', ${this.login_data.LoginResponse.EmpId}`);
    console.log(`LeadId', ${this.leadData.Id}`);
    console.log(`response', ${this.leadform.get('response')?.value}`);
    console.log(`nextfollow_up_date', ${this.leadform.get('nextfollow_up_date')?.value}`);

    const fromdata = new FormData()
    fromdata.append('LeadId', this.leadData.Id)
    fromdata.append('response', this.leadform.get('response')?.value)
    fromdata.append('nextfollow_up_date', this.leadform.get('nextfollow_up_date')?.value)

    this._crud.LeadFlowup(fromdata, this.login_data.LoginResponse.EmpId).subscribe(
      (res: any) => {
        console.log(res);
        if (res == 'Success') {
          this._shared.tostSuccessTop(`Follow up update`)
          this.getFlowup(this.leadData.Id)

        }
      }
    )

  }

}
