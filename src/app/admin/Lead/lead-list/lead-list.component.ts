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
  lead_filter_data: any
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
        this.lead_filter_data =  res
      }
    )
  }

  OnAdd() {
    this._router.navigate(['/admin/leadadd'])
  }

  onUpdate(lead:any){
    this._shared.lead_data.next(lead)
    this._router.navigate(['/admin/leadview'])
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
