import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent {
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
    this._router.navigate(['/employee/clientupdate'])
  }
}
