import { Component } from '@angular/core';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  login: any
  login_data: any
  ProfileImg: string = 'https://cdn-icons-png.flaticon.com/256/149/149071.png'
  emp_data :  any
  constructor(
    private _crud: CRUDService,
    private _shared: SharedService
  ) {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data);
    this.getProfile(this.login_data.LoginResponse.EmpId)

    this._shared.base_img_url.subscribe(
      (res: any) => {
        this.ProfileImg =  res+ this.login_data.LoginResponse.Image
      }
    )

  }

  getProfile(id: Number) {
    this._crud.getEmpProfile(id).subscribe(
      (res: any) => {
        console.log(res[0]);
        this.emp_data = res[0]
        console.log(res[0].Sex);
      }
    )
  }

}
