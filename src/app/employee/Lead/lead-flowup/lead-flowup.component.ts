import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-lead-flowup',
  templateUrl: './lead-flowup.component.html',
  styleUrls: ['./lead-flowup.component.css']
})
export class LeadFlowupComponent implements OnInit {

  leadData : any
  constructor(
    private _shared: SharedService,
    private _crud: CRUDService,

  ) { }

  ngOnInit() {
    this._shared.LeadFlowup.subscribe(
      (res:any)=>{
        this.leadData =  res
      }
    )
  }

}
