import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Servies/crud.service';
import { SharedService } from 'src/app/Servies/shared.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements AfterViewInit {
  title_name = 'Update Employee'
  onBtn = 'Submit'
  empReg!: FormGroup;
  department_data: any;
  designation_data: any;
  state_data: any;
  city_data: any;
  ReportingManager: any;
  RolePermission: any;
  profile_img: any
  profile_url: any = "../../../assets/icons/demoprofile.avif";

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _crud: CRUDService
    ,
    private _shared: SharedService,
  ) {


    this._crud.get_department().subscribe(
      (res: any) => {
        this.department_data = res
      })
    this._crud.get_designation().subscribe(
      (res: any) => {
        this.designation_data = res
      })

    this._crud.get_ReportingManager().subscribe(
      (res: any) => {
        console.log(res);
        this.ReportingManager = res
      })

    this._crud.get_RolePermission().subscribe(
      (res: any) => {
        this.RolePermission = res
      }
    )

    this._crud.get_state().subscribe(
      (res: any) => {
        this.state_data = res

      }
    )

  }

  ngAfterViewInit() {
    this._shared.emp_data.subscribe(
      (res: any) => {
        console.log(res);
        this.empReg.patchValue(res)
      }
    )
  }


  get_city(data: any) {
    console.log(data.Id);

    this._crud.get_city_by_state_id(data.Id).subscribe(
      (res: any) => {
        console.log(res);
        this.city_data = res
      }
    )
  }

  ngOnInit(): void {
    this.empReg = this._fb.group({
      Id: ['', Validators.required],
      Role: ['', Validators.required],
      EmployeeCode: ['', Validators.required],
      EmployeeName: ['', Validators.required],
      Department: ['', Validators.required],
      Designation: ['', Validators.required],
      ReportingManager: ['', Validators.required],
      Image: [''],
      EmailId: ['', Validators.required],
      AdharNo: [Validators.required],
      PanNo: [''],
      Mobile: ['', Validators.required],
      DOJ: ['', Validators.required],
      Passport: [''],
      Salary: [''],
      UserName: ['', Validators.required],
      Password: ['', Validators.required],

      //Bank Details
      BankName: ['', Validators.required],
      AccountNo: ['', Validators.required],
      IFSC: ['', Validators.required],
      BankBranch: ['', Validators.required],
      BloodGroup: [''],
      IdMarks: [''],
      DOB: ['', Validators.required],
      Age: ['', Validators.required],
      Sex: ['', Validators.required],
      Nationality: ['', Validators.required],
      Religion: ['', Validators.required],
      MaritalStatus: ['', Validators.required],

      //Present Address
      PresentAddress: [''],
      State: [''],
      City: [''],
      Pin: [''],

      //In Case Emergency
      EmergencyContactPerson: [''],
      EmergencyContactNumber: [''],
      EmergencyContectAddress: [''],

      //Refrences
      ReferencesName: [''],
      ContactNo: [''],
      CompanyName: [''],
      CemailId: [''],

      //Last Three Employment Details
      PreviousEmployer: [''],
      Fromt: [''],
      ToT: [''],

      //Professional Qualification
      Degree: ['', Validators.required],
      ProfessionalInstitution: ['', Validators.required],
      ProfessionalPassingYear: ['', Validators.required],
      ProfessionalSpecilization: ['', Validators.required],

      //Academic Qualification 10th
      Board10: ['', Validators.required],
      Institution10: ['', Validators.required],
      PassingYear10: ['', Validators.required],
      Specilization10: ['', Validators.required],

      //Academic Qualification 12th
      Board12: ['', Validators.required],
      Institution12: ['', Validators.required],
      PassingYear12: ['', Validators.required],
      Specilization12: ['', Validators.required],

    });

  }



  updateEmp() {
    if (!this.empReg.valid) {
      this._shared.tostErrorTop('Please fill in all the fields.')
      return
    } else {
      const formdata = new FormData();
      formdata.append('Id', this.empReg.get('Id')?.value);
      formdata.append('Role', this.empReg.get('Role')?.value);
      formdata.append('EmployeeCode', this.empReg.get('EmployeeCode')?.value);
      formdata.append('EmployeeName', this.empReg.get('EmployeeName')?.value);
      formdata.append('Department', this.empReg.get('Department')?.value);
      formdata.append('Designation', this.empReg.get('Designation')?.value);
      formdata.append('EmailId', this.empReg.get('EmailId')?.value);
      formdata.append('DOJ', this.empReg.get('DOJ')?.value);
      formdata.append('PanNo', this.empReg.get('PanNo')?.value);
      formdata.append('Passport', this.empReg.get('Passport')?.value);
      formdata.append('Mobile', this.empReg.get('Mobile')?.value);
      formdata.append('UserName', this.empReg.get('UserName')?.value);
      formdata.append('Password', this.empReg.get('Password')?.value);
      formdata.append('BankName', this.empReg.get('BankName')?.value);
      formdata.append('AccountNo', this.empReg.get('AccountNo')?.value);
      formdata.append('IFSC', this.empReg.get('IFSC')?.value);
      formdata.append('BankBranch', this.empReg.get('BankBranch')?.value);
      formdata.append('BloodGroup', this.empReg.get('BloodGroup')?.value);
      formdata.append('IdMarks', this.empReg.get('IdMarks')?.value);
      formdata.append('DOB', this.empReg.get('DOB')?.value);
      formdata.append('Age', this.empReg.get('Age')?.value);
      formdata.append('Sex', this.empReg.get('Sex')?.value);
      formdata.append('Nationality', this.empReg.get('Nationality')?.value);
      formdata.append('Religion', this.empReg.get('Religion')?.value);
      formdata.append('MaritalStatus', this.empReg.get('MaritalStatus')?.value);
      formdata.append('PresentAddress', this.empReg.get('PresentAddress')?.value);
      formdata.append('State', this.empReg.get('State')?.value?.State_Name);
      formdata.append('City', this.empReg.get('City')?.value);
      formdata.append('Pin', this.empReg.get('Pin')?.value);
      formdata.append('EmergencyContactPerson', this.empReg.get('EmergencyContactPerson')?.value);
      formdata.append('EmergencyContactNumber', this.empReg.get('EmergencyContactNumber')?.value);
      formdata.append('EmergencyContectAddress', this.empReg.get('EmergencyContectAddress')?.value);
      formdata.append('ReferencesName', this.empReg.get('ReferencesName')?.value);
      formdata.append('ContactNo', this.empReg.get('ContactNo')?.value);
      formdata.append('CompanyName', this.empReg.get('CompanyName')?.value);
      formdata.append('CemailId', this.empReg.get('CemailId')?.value);
      formdata.append('PreviousEmployer', this.empReg.get('PreviousEmployer')?.value);
      formdata.append('Fromt', this.empReg.get('Fromt')?.value);
      formdata.append('ToT', this.empReg.get('ToT')?.value);
      formdata.append('Degree', this.empReg.get('Degree')?.value)
      formdata.append('ProfessionalInstitution', this.empReg.get('ProfessionalInstitution')?.value)
      formdata.append('ProfessionalPassingYear', this.empReg.get('ProfessionalPassingYear')?.value)
      formdata.append('ProfessionalSpecilization', this.empReg.get('ProfessionalSpecilization')?.value)
      formdata.append('Board10', this.empReg.get('Board10')?.value)
      formdata.append('Institution10', this.empReg.get('Institution10')?.value)
      formdata.append('PassingYear10', this.empReg.get('PassingYear10')?.value)
      formdata.append('Specilization10', this.empReg.get('Specilization10')?.value)
      formdata.append('Board12', this.empReg.get('Board12')?.value)
      formdata.append('Institution12', this.empReg.get('Institution12')?.value)
      formdata.append('PassingYear12', this.empReg.get('PassingYear12')?.value)
      formdata.append('Specilization12', this.empReg.get('Specilization12')?.value)
      formdata.append('AdharNo', this.empReg.get('AdharNo')?.value);
      formdata.append('ReportingManager', this.empReg.get('ReportingManager')?.value);
      formdata.append('Salary', this.empReg.get('Salary')?.value);


      formdata.append('ImagePath', this.profile_img);


      this._crud.put_emp_reg(this.empReg.get('Id')?.value, formdata).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res == 'Updated Successfully') {
            this._shared.tostSuccessTop('Update Successfully...');
            this.onBack()
          }
        },
        error: (error: any) => {
          console.log(error);
          this._shared.tostErrorTop('Update Failed');
        }
      });
    }
  }
  onProfile(files: any) {
    if (files.length === 0) {
      return;
    }
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    this.profile_img = files[0];
    reader.onload = () => {
      this.profile_url = reader.result;
      // console.log(this.profile_img)

    };

    reader.readAsDataURL(this.profile_img);
    // this.emp_form.get('profile_img')?.setValue(this.profile_img)
  }
  onBack() {
    this._router.navigate(['/admin/emplist'])
  }
}
