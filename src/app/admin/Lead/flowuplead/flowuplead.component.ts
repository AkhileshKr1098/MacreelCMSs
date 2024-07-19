import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-flowuplead',
  templateUrl: './flowuplead.component.html',
  styleUrls: ['./flowuplead.component.css']
})
export class FlowupleadComponent {
  flowupdata: any
  leadData: any
  login: any
  login_data: any
  constructor(
    private _shared: SharedService,
    private _crud: CRUDService,

  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);
  }

  ngOnInit() {
   
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

  

}
