import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
  client: any
  constructor(
    private _shared: SharedService,
    private _router: Router
  ) { }
  ngOnInit() {
    this._shared.client_data.subscribe(
      (res: any) => {
        console.log(res);
        this.client = res
      }
    )
  }



  OnUpdate(data: any) {
    this._shared.client_data.next(data)
    this._router.navigate(['/admin/clientupdate'])

  }
}
