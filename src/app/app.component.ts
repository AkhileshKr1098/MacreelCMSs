import { Component, OnInit } from '@angular/core';
import { BackButtonService } from './Servies/back-button.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MacreelCMS';
  login: any
  login_data: any
  constructor(
    private _backBtn: BackButtonService,
    private location: Location,
    private _router: Router
  ) {

  }
  ngOnInit() {
    this._backBtn.back(this.location.path())
    this.isLogin()
  }

  isLogin() {
    this.login = localStorage.getItem('logindata')
    this.login_data = JSON.parse(this.login)

    if (this.login_data) {
      if (this.location.path() == '') {
        if (this.login_data.LoginResponse.Type == 'Admin') {
          this._router.navigate(['/admin'])
        }

        if (this.login_data.LoginResponse.Type > 0) {
          this._router.navigate(['/employee'])
        }
      } else {

      }
    }
  }
}
