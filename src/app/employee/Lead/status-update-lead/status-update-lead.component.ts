import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-status-update-lead',
  templateUrl: './status-update-lead.component.html',
  styleUrls: ['./status-update-lead.component.css']
})
export class StatusUpdateLeadComponent {
  status: any
  login: any
  constructor(
    private dilogRef: MatDialogRef<StatusUpdateLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _crud: CRUDService,
    private _shared: SharedService
  ) { }

  ngOnInit(): void {

  }

  ValueGet(data: any) {
    console.log(data);
    this.status = data


  }

  OnSubmit() {
    this.login = localStorage.getItem('logindata')
    const logindata = JSON.parse(this.login)
    console.log("LeadId" + this.data.Id);
    console.log("status" + this.status);

    console.log(this.data);
    const formdata = new FormData()
    formdata.append('LeadId', this.data.Id)
    formdata.append('status', this.status)
    this._crud.LeadFlowupStatus(formdata).subscribe(
      (res: any) => {
        console.log(res);
        if (res == 'Status updated successfully') {
          this._shared.tostSuccessTop('Status updated successfully.')
          this.dilogRef.close(this.data)
        }
      }
    )
  }

  onClose() {

  }
}
