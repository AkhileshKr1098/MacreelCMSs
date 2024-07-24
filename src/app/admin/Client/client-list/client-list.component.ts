import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  title_name = 'Employee List'
  client_data: any
  ImagePath: string = ''
  base_url: any;
  client_filter_data: any
  profile_img: string = '../../../assets/icons/demoprofile.avif'
  login: any
  login_data: any
  constructor(
    private _router: Router,
    private _crud: CRUDService,
    private _shared: SharedService
  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.LoginResponse);
  }


  ngOnInit(): void {
    this._shared.base_img_url.subscribe(
      (res: any) => {
        this.base_url = res
      }
    )

    this._crud.get_client(this.login_data.LoginResponse.Type, this.login_data.EmpId).subscribe(
      (res: any) => {
        console.log(res.reverse());
        this.client_data = res.reverse();
        this.client_filter_data = res.reverse();
        this.ImagePath = res.ImagePath;
      }
    )


  }


  viewDetails(data: any) {
    this._shared.emp_data.next(data);
    console.log(data);
    this._router.navigate(['/admin/clientview'])
  }

  OnAdd() {
    this._router.navigate(['/admin/clientadd'])
  }


  OnSearch(filter: String) {
    this.client_data = this.client_filter_data.filter((data: any) => {
      if (data.CompanyName.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      if (data.ContactPerson.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      if (data.ContactNo.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      if (data.Address.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    }
    )
  }

  OnUpdate(data: any) {
    this._shared.client_data.next(data)
    this._router.navigate(['/admin/clientview'])

  }

  
}
