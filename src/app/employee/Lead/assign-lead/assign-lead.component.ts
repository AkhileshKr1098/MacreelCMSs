import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CRUDService } from 'src/app/Servies/crud.service';

@Component({
  selector: 'app-assign-lead',
  templateUrl: './assign-lead.component.html',
  styleUrls: ['./assign-lead.component.css']
})
export class AssignLeadComponent implements OnInit {
  ReportingManager: any
  assignTo :any
  login :any
  constructor(
    private dilogRef: MatDialogRef<AssignLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _crud: CRUDService
  ) { }

  ngOnInit(): void {
    console.log(this.data);

    this._crud.get_ReportingManager().subscribe(
      (res: any) => {
        console.log(res);
        this.ReportingManager = res
      })
  }

  ValueGet(data: any) {
    console.log(data);
    this.assignTo = data

  }
  OnSubmit() {
    this.login = localStorage.getItem('logindata')
    const logindata =  JSON.parse(this.login)
    console.log(logindata.LoginResponse.Type);
    
    console.log(this.data);
    const formdata = new FormData()
    formdata.append('LeadId', this.data.Id)
    formdata.append('EmployeeId', this.assignTo.EmpId)
    formdata.append('EmployeeName', this.assignTo.EmployeeName)
    
    this._crud.leadAssign(formdata,logindata.LoginResponse.Type).subscribe(
      (res:any)=>{
        console.log(res);
        
      }
    )
  }

  onClose(){
    
  }
}
