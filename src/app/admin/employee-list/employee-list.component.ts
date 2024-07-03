import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  title_name = 'Employee List'
  get_emp: any
  ImagePath: string = ''
  base_url: any;
  emp_filter_data: any
  profile_img :string ='../../../assets/icons/demoprofile.avif'
  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private _crud: CRUDService,
    private _shared: SharedService
  ) {

  }
  ngOnInit(): void {
    this._shared.base_img_url.subscribe(
      (res: any) => {
        this.base_url = res
      }
    )
    this._crud.get_employee().subscribe(
      (res: any) => {
        console.log(res);
        this.get_emp = res;
        this.emp_filter_data = res;
        this.ImagePath = res.ImagePath;
      }
    )
  }
 

  viewDetails(data: any) {
    this._shared.emp_data.next(data);
    console.log(data);
    this._router.navigate(['/admin/empview'])
  }

  AddEmp(){
    this._router.navigate(['/admin/empadd'])
  }


  empSearch
    (filter: String) {
    this.get_emp = this.emp_filter_data.filter((data: any) => {
      if (data.EmployeeName.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      if (data.Designation.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    }
    );
  }
}
