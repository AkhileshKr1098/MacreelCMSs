import { Component, OnInit } from '@angular/core';
import { BackButtonService } from './Servies/back-button.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MacreelCMS';

  constructor(
    private _backBtn: BackButtonService,
    private location: Location,
  ) {

  }
  ngOnInit() {
     this._backBtn.back(this.location.path())
  }
}
