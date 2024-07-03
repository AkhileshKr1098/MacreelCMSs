import { Component } from '@angular/core';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
  panelOpenState = false;
  emp_data: any
  constructor(
    private _shared: SharedService
  ) { }

  ngOnInit(): void {
    this._shared.emp_data.subscribe(
      (res: any) => {
        this.emp_data = res
      }
    )
  }
}
