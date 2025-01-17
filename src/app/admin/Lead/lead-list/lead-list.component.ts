import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignLeadComponent } from 'src/app/employee/Lead/assign-lead/assign-lead.component';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  lead_data: any
  lead_filter_data: any
  login: any
  loginData: any
  constructor(
    private _crud: CRUDService,
    private _shared: SharedService,
    private _router: Router,
    private _dilog: MatDialog
  ) {

    this.login = localStorage.getItem('logindata')
    this.loginData = JSON.parse(this.login)
    console.log(this.loginData.LoginResponse.EmpId)
  }


  ngOnInit() {
    this.get_data()
  }
  get_data() {
    this._crud.get_lead_for_admin().subscribe(
      (res: any) => {
        console.log(res);
        this.lead_data = res
        this.lead_filter_data = res
      }
    )
  }

  OnAdd() {
    this._router.navigate(['/admin/leadadd'])
  }

  Flowup(data: any) {
    this._shared.LeadFlowup.next(data)
    this._router.navigate(['/admin/leadflowup'])
  }

  onUpdate(lead: any) {
    this._shared.lead_data.next(lead)
    this._router.navigate(['/admin/leadview'])
  }

  OnAssign(data: any) {
    const dialogRef = this._dilog.open(AssignLeadComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '30%',
      width: '80%',
      data: data
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.get_data()

    })

  }

  OnSearch(filter: String) {
    this.lead_data = this.lead_filter_data.filter((data: any) => {
      if (data.ClientName.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      if (data.ContectPerson.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      if (data.MobileNo.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      if (data.ClientEmail.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }

      return false;
    }
    );
  }

}
