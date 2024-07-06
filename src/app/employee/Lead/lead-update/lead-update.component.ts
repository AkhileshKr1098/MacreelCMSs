import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-lead-update',
  templateUrl: './lead-update.component.html',
  styleUrls: ['./lead-update.component.css']
})
export class LeadUpdateComponent {
  leadform !: FormGroup
  servies_data: any
  login: any
  login_data: any
  lead_id: any = 0
  constructor(
    private _crud: CRUDService,
    private FB: FormBuilder,
    private router: Router,
    private _shared: SharedService
  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);
  }

  ngOnInit() {
    this.leadform = this.FB.group({
      Service: ['', Validators.required],
      LeadType: ['Hot', Validators.required],
      LeadDescription: ['', Validators.required],
      ClientName: ['', Validators.required],
      ClientEmail: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Address: ['', Validators.required],
      ContectPerson: ['', Validators.required]
    }
    )

    this._crud.get_servies().subscribe(
      (res: any) => {
        console.log(res);
        this.servies_data = res

      }
    )

    this._shared.lead_data.subscribe(
      (res: any) => {
        console.log(res);
        this.leadform.patchValue(res)
        this.lead_id = res.Id
      }
    )
  }

  onSubmit() {
    const formdata = new FormData()
    formdata.append('Id', this.lead_id)
    formdata.append('Service', this.leadform.get('Service')?.value)
    formdata.append('LeadType', this.leadform.get('LeadType')?.value)
    formdata.append('LeadDescription', this.leadform.get('LeadDescription')?.value)
    formdata.append('ClientName', this.leadform.get('ClientName')?.value)
    formdata.append('ClientEmail', this.leadform.get('ClientEmail')?.value)
    formdata.append('MobileNo', this.leadform.get('MobileNo')?.value)
    formdata.append('Address', this.leadform.get('Address')?.value)
    formdata.append('ContectPerson', this.leadform.get('ContectPerson')?.value)
    this._crud.leadAdd(formdata, this.login_data.LoginResponse.EmpId).subscribe(
      (res: any) => {
        console.log(res);
        if (res == 'Data Updated') {
          this.router.navigate(['/employee/leadlist'])
          this._shared.tostSuccessTop('Lead Update Successfully..')
        }
      }
    )
  }

}
