import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  addClient!: FormGroup;
  title_name = 'Add Client'
  onBtn = 'Add'
  myForm: any;
  state_data: any
  city_data: any
  login: any
  login_data: any
  constructor(
    private _fb: FormBuilder,
    private _crud: CRUDService,
    private _shared: SharedService,
    private _routing: Router
  ) {

  }

  ngOnInit(): void {
    this.addClient = this._fb.group({
      CompanyName: ['', Validators.required],
      ContactPerson: ['', Validators.required],
      Designation: ['', Validators.required],
      ContactNo: ['', [Validators.required]],
      EmailId: ['', Validators.required],
      Pincode: ['', Validators.required],
      GSTNo: ['', Validators.required],
      PanNo: ['', Validators.required],
      State: [''],
      City: [''],
      Address: ['', Validators.required],
      Statecode: ['', Validators.required],
    })

    this.get_adr_data()
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);

  }

  get_adr_data() {
    this._crud.get_state().subscribe(
      (res: any) => {
        console.log(res);
        this.state_data = res

      }
    )
  }

  get_city(data: any) {
    console.log(data.Id);

    this._crud.get_city_by_state_id(data.Id).subscribe(
      (res: any) => {
        console.log(res);
        this.city_data = res
      }
    )
  }
  onAdd() {
    console.log(this.myForm.value);

    const formdata = new FormData()
    formdata.append('CompanyName', this.addClient.get('CompanyName')?.value)
    formdata.append('ContactPerson', this.addClient.get('ContactPerson')?.value)
    formdata.append('Designation', this.addClient.get('Designation')?.value)
    formdata.append('ContactNo', this.addClient.get('ContactNo')?.value)
    formdata.append('EmailId', this.addClient.get('EmailId')?.value)
    formdata.append('Pincode', this.addClient.get('Pincode')?.value)
    formdata.append('GSTNo', this.addClient.get('GSTNo')?.value)
    formdata.append('PanNo', this.addClient.get('PanNo')?.value)
    formdata.append('State', this.addClient.get('State')?.value?.State_Name)
    formdata.append('City', this.addClient.get('City')?.value)
    formdata.append('Address', this.addClient.get('Address')?.value)
    formdata.append('Statecode', this.addClient.get('Statecode')?.value)


    if (this.addClient.valid) {
      this._crud.ClientAdd(formdata, this.login_data.LoginResponse.EmpId).subscribe(
        (res: any) => {
          console.log(res);
          if (res == 'Success') {
            this._shared.tostSuccessTop('Save Successfully...')
            this._routing.navigate(['/admin/clientlist'])
          }
        },
        (error: any) => {
          console.log(error);
          this._shared.tostErrorTop('Not Insert')
        }
      )
    }
  }

  onBack() {
    this._routing.navigate(['/admin/clientlist'])
  }

}
