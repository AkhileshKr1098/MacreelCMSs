import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-lead-view',
  templateUrl: './lead-view.component.html',
  styleUrls: ['./lead-view.component.css']
})
export class LeadViewComponent {
  leadform !: FormGroup
  servies_data: any
  login: any
  login_data: any
  lead: any
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
    this._shared.lead_data.subscribe(
      (res: any) => {
        console.log(res);
        this.lead = res
      }
    )
  }


}
