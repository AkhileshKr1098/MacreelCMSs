import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent {
  panelOpenState = false;
  emp_data:any
  base_url:any
  profile_img :string ='../../../assets/icons/demoprofile.avif'

  constructor(
    private _shared:SharedService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this._shared.base_img_url.subscribe(
      (res: any) => {
        this.base_url = res
      }
    )
    this._shared.emp_data.subscribe(
      (res: any) => {
        this.emp_data = res
        
      }
    )
  }

  OnEdit(){
    this._shared.emp_data.next(this.emp_data)
    this._router.navigate(['/admin/empupdate'])
  }
}
