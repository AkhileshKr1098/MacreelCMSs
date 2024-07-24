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
  stateName: any
  cityName: any
  constructor(
    private _fb: FormBuilder,
    private _crud: CRUDService,
    private _shared: SharedService,
    private _routing: Router
  ) {
    this.get_adr_data()
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

    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
  }

  ngAfterViewInit() {
    this._shared.client_data.subscribe(
      (res: any) => {
        this.get_city_up(res.State)
        this.addClient.patchValue(res)
        this.update_data = res
        this.addClient.get('State')?.setValue(Number(res.State))
        this.addClient.get('City')?.setValue(Number(res.City))
      }
    )

  }





  get_adr_data() {
    this._crud.get_state().subscribe(
      (res: any) => {
        console.log(res);
        this.state_data = res

      }
    )
  }

  get_city_up(id: any) {
    console.log(id);

    this._crud.get_city_by_state_id(id).subscribe(
      (res: any) => {
        console.log(res);
        this.city_data = res
        console.log(this.update_data.City);
      }
    )
  }

  getCityData(data: any) {
    console.log(data);
    this.cityName = this.city_data.filter((c: any) => c.Id == data)
    console.log(this.cityName);
  }

  get_city(data: any) {
    this.stateName = this.state_data.filter((s: any) => s.Id == data)
    console.log(this.stateName);

    this._crud.get_city_by_state_id(data).subscribe(
      (res: any) => {
        console.log(res);

        this.city_data = res
      }
    )
  }

  onAdd() {

    const formdata = new FormData()
    formdata.append('Id', this.update_data.Id)
    formdata.append('CompanyName', this.addClient.get('CompanyName')?.value)
    formdata.append('ContactPerson', this.addClient.get('ContactPerson')?.value)
    formdata.append('Designation', this.addClient.get('Designation')?.value)
    formdata.append('ContactNo', this.addClient.get('ContactNo')?.value)
    formdata.append('EmailId', this.addClient.get('EmailId')?.value)
    formdata.append('Pincode', this.addClient.get('Pincode')?.value)
    formdata.append('GSTNo', this.addClient.get('GSTNo')?.value)
    formdata.append('PanNo', this.addClient.get('PanNo')?.value)
    formdata.append('Address', this.addClient.get('Address')?.value)
    formdata.append('Statecode', this.addClient.get('Statecode')?.value)

    if (!this.stateName) {
      formdata.append('StateName', this.update_data.StateName)
      formdata.append('CityName', this.update_data.CityName)
      formdata.append('State', this.update_data.State)
      formdata.append('City', this.update_data.City)

    } else {
      console.log(this.cityName[0]?.City_Name);
      formdata.append('StateName', this.stateName[0]?.State_Name)
      formdata.append('CityName', this.cityName[0]?.City_Name)
      formdata.append('State', this.stateName[0]?.Id)
      formdata.append('City', this.cityName[0]?.Id)
    }

    if (this.addClient.valid) {
      this._crud.ClientAdd(formdata, this.login_data.LoginResponse.EmpId).subscribe(
        (res: any) => {
          console.log(res);
          if (res == 'updated') {
            this._shared.tostSuccessTop('Update Successfully...')
            this._routing.navigate(['/employee/clientlist'])
          }
        },
        (error: any) => {
          console.log(error);
          this._shared.tostErrorTop('Not Update')
        }
      )
    } else {
      this._shared.tostErrorTop('Please fill all the required fields.')
    }
  }

  onBack() {
    this._routing.navigate(['/employee/clientview'])
  }
}
