import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from 'src/app/Servies/crud.service';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {
  leadform !: FormGroup
  servies_data: any
  constructor(
    private _crud: CRUDService,
    private FB: FormBuilder
  ) {

  }

  ngOnInit() {
    this.leadform = this.FB.group({
      Servies: ['', Validators.required],
      LeadType: ['', Validators.required],
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
        this.servies_data =  res

      }
    )
  }

  onSubmit() {
    const formdata = new FormData()
    formdata.append('Servies', this.leadform.get('Servies')?.value)
    this._crud.ClientAdd(formdata, 2).subscribe(
      (res: any) => {
        console.log(res);

      }
    )
  }
}
