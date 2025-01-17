import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';
import { AssignLeadComponent } from '../assign-lead/assign-lead.component';
import { StatusUpdateLeadComponent } from '../status-update-lead/status-update-lead.component';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent {
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
  get_data(){
    this._crud.get_lead_for_emp(this.loginData.LoginResponse.EmpId).subscribe(
      (res: any) => {
        console.log(res);
        this.lead_data = res
        this.lead_filter_data = res
      }
    )
  }

  OnAdd() {
    this._router.navigate(['/employee/leadadd'])
  }

  Flowup(data: any) {
    this._shared.LeadFlowup.next(data)
    this._router.navigate(['/employee/leadflowup'])
  }

  onUpdate(lead: any) {
    if (lead.AssignBy != '') {
        console.log('nhii')
        return
    }else{
      this._shared.lead_data.next(lead)
      this._router.navigate(['/employee/leadupdate'])
  
    }
 

  }

  StatusUpdate(data: any) {
    const dialogRef = this._dilog.open(StatusUpdateLeadComponent, {
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
