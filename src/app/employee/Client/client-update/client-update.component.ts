import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent {
  addClient!: FormGroup;
  title_name = 'Add Client'
  onBtn = 'Add'
  myForm: any;
  state_data: any
  city_data: any
  login: any
  login_data: any
  update_data: any
  constructor(
    private _fb: FormBuilder,
    private _crud: CRUDService,
    private _shared: SharedService,
    private _routing: Router
  ) {

  }

  ngAfterViewInit() {
    this._shared.client_data.subscribe(
      (res: any) => {
        console.log(res);
        this.addClient.patchValue(res)
        this.update_data = res
      }
    )

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

  }



  get_adr_data() {
    this._crud.get_state().subscribe(
      (res: any) => {
        this.state_data = res

      }
    )
  }

  get_city(data: any) {
    this._crud.get_city_by_state_id(data.Id).subscribe(
      (res: any) => {
        this.city_data = res
      }
    )
  }
  onAdd() {

    const formdata = new FormData()
    formdata.append('Id', this.update_data.Id)
    formdata.append('ContactPerson', this.addClient.get('ContactPerson')?.value)
    formdata.append('Designation', this.addClient.get('Designation')?.value)
    formdata.append('ContactNo', this.addClient.get('ContactNo')?.value)
    formdata.append('EmailId', this.addClient.get('EmailId')?.value)
    formdata.append('Pincode', this.addClient.get('Pincode')?.value)
    formdata.append('GSTNo', this.addClient.get('GSTNo')?.value)
    formdata.append('PanNo', this.addClient.get('PanNo')?.value)
    formdata.append('StateName', this.addClient.get('State')?.value?.State_Name)
    formdata.append('CityName', this.addClient.get('City')?.value?.City_Name)
    formdata.append('Address', this.addClient.get('Address')?.value)
    formdata.append('Statecode', this.addClient.get('Statecode')?.value)
    formdata.append('State', this.addClient.get('State')?.value?.Id)
    formdata.append('City', this.addClient.get('City')?.value?.Id)


    if (this.addClient.valid) {
      this._crud.ClientAdd(formdata, this.login_data.LoginResponse.EmpId).subscribe(
        (res: any) => {
          console.log(res);
          if (res == 'updated') {
            this._shared.tostSuccessTop('Update Successfully...')
            this.onBack()
          }
        },
        (error: any) => {
          console.log(error);
          this._shared.tostErrorTop('Not Update')
        }
      )
    }
  }

  onBack() {
    this._routing.navigate(['/employee/clientlist'])
  }
}
