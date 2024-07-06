import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {
  leadform !: FormGroup
  services_data: any
  login: any
  login_data: any

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
        this.services_data = res

      }
    )
  }

  onSubmit() {
    console.log(this.leadform.value);    
    const formdata = new FormData()
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
        if (res == 'Success') {
          this.router.navigate(['admin/leadlist'])
          this._shared.tostSuccessTop('Lead add Successfully..')
        }
      }
    )
  }
}
