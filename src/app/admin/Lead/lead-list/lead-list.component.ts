import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  lead_data: any
  constructor(
    private _crud: CRUDService,
    private _shared: SharedService,
    private _router: Router
  ) { }


  ngOnInit() {
    this._crud.get_lead_for_admin().subscribe(
      (res: any) => {
        console.log(res);
        this.lead_data = res
      }
    )
  }

  onAdd(){
    this._router.navigate(['admin/leadadd'])
  }

}
