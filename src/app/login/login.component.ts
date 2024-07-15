import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from '../Servies/crud.service';
import { SharedService } from '../Servies/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  disableSelect = new FormControl(false);
  login_form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _crud: CRUDService,
    private _shared: SharedService
  ) {
    localStorage.removeItem
    localStorage.clear()
  }

  ngOnInit() {
    this.login_form = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    }
    )
  }
  
  onLogin() {
    const fromdata =  new FormData()
    fromdata.append('UserName', this.login_form.get('UserName')?.value)
    fromdata.append('Password', this.login_form.get('Password')?.value)

    this._crud.login(fromdata).subscribe(
      (res:any)=>{
        console.log(res);
        if (res.LoginResponse.Type == 'Admin') {
            this._router.navigate(['admin'])
            localStorage.setItem('logindata',JSON.stringify(res))
            this._shared.tostSuccessTop('Login Success')
        } else if (res.LoginResponse.Type > 0) {
          this._router.navigate(['employee'])
          localStorage.setItem('logindata',JSON.stringify(res))
          this._shared.tostSuccessTop('Login Success')
        } else {
          this._shared.tostErrorTop('Username or Password incorrect')

        }
      
      }, (error: any) => {
        console.error('Login error:', error);
        this._shared.tostErrorTop('Login failed');
      }
    )

  }

}
