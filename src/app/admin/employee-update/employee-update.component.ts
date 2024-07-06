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
export class EmployeeUpdateComponent implements AfterViewInit{
  title_name = 'Update Employee'
  onBtn = 'Submit'
  empReg!: FormGroup;
  department_data: any;
  designation_data: any;
  state_data: any;
  city_data: any;
  ReportingManager: any;
  RolePermission: any;

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
      (res:any)=>{
        console.log(res);
        this.empReg.patchValue(res)
        this.empReg.get('ReportingManager')?.setValue(res.reportmanager)
      }
    )
  }

  
  get_city(data: any) {
    console.log(data.Id);
    
    this._crud.get_city_by_state_id(data.Id).subscribe(
      (res: any) => {
        console.log(res);
        this.city_data =  res
      }
    )
  }

  ngOnInit(): void {
    this.empReg = this._fb.group({
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


  // Function to handle form submission
  onSubmit() {
    
    const formdata = new FormData()
    formdata.append('Role', this.empReg.get('Role')?.value);
    formdata.append('EmployeeCode', this.empReg.get('EmployeeCode')?.value);
    formdata.append('EmployeeName', this.empReg.get('EmployeeName')?.value);
    formdata.append('Department', this.empReg.get('Department')?.value);
    formdata.append('Designation', this.empReg.get('Designation')?.value);
    formdata.append('ReportingManager', this.empReg.get('ReportingManager')?.value);
    formdata.append('Image', this.empReg.get('Image')?.value);
    formdata.append('EmailId', this.empReg.get('EmailId')?.value);
    formdata.append('AdharNo', this.empReg.get('AdharNo')?.value);
    formdata.append('PanNo', this.empReg.get('PanNo')?.value);
    formdata.append('Mobile', this.empReg.get('Mobile')?.value);
    formdata.append('DOJ', this.empReg.get('DOJ')?.value);
    formdata.append('Passport', this.empReg.get('Passport')?.value);
    formdata.append('Salary', this.empReg.get('PasspSalaryort')?.value);
    formdata.append('UserName', this.empReg.get('UserName')?.value);
    formdata.append('Password', this.empReg.get('Password')?.value);

    //Bank Details
    formdata.append('BankName', this.empReg.get('BankName')?.value);
    formdata.append('AccountNo', this.empReg.get('AccountNo')?.value);
    formdata.append('IFSC', this.empReg.get('IFSC')?.value);
    formdata.append('BankBranch', this.empReg.get('BankBranch')?.value);

    //Health Data
    formdata.append('BloodGroup', this.empReg.get('BloodGroup')?.value);
    formdata.append('IdMarks', this.empReg.get('IdMarks')?.value);

    //Biographical Details
    formdata.append('DOB', this.empReg.get('DOB')?.value);
    formdata.append('Age', this.empReg.get('Age')?.value);
    formdata.append('Sex', this.empReg.get('Sex')?.value);
    formdata.append('Nationality', this.empReg.get('Nationality')?.value);
    formdata.append('Religion', this.empReg.get('Religion')?.value);
    formdata.append('MaritalStatus', this.empReg.get('MaritalStatus')?.value);

    //Present Address
    formdata.append('PresentAddress', this.empReg.get('PresentAddress')?.value);
    formdata.append('State',this.empReg.get('State')?.value?.State_Name);
    formdata.append('City', this.empReg.get('City')?.value);
    formdata.append('Pin', this.empReg.get('Pin')?.value);

    //In Case Emergency
    formdata.append('EmergencyContactPerson', this.empReg.get('EmergencyContactPerson')?.value);
    formdata.append('EmergencyContactNumber', this.empReg.get('EmergencyContactNumber')?.value);
    formdata.append('EmergencyContectAddress', this.empReg.get('EmergencyContectAddress')?.value);

    //Refrences
    formdata.append('ReferencesName', this.empReg.get('ReferencesName')?.value);
    formdata.append('ContactNo', this.empReg.get('ContactNo')?.value);
    formdata.append('CompanyName', this.empReg.get('CompanyName')?.value);
    formdata.append('CemailId', this.empReg.get('CemailId')?.value);

    //Last Three Employment Details
    formdata.append('PreviousEmployer', this.empReg.get('PreviousEmployer')?.value);
    formdata.append('Fromt', this.empReg.get('Fromt')?.value);
    formdata.append('ToT', this.empReg.get('ToT')?.value);

    //Professional Qualification
    formdata.append('Degree', this.empReg.get('Degree')?.value)
    formdata.append('ProfessionalInstitution', this.empReg.get('ProfessionalInstitution')?.value)
    formdata.append('ProfessionalPassingYear', this.empReg.get('ProfessionalPassingYear')?.value)
    formdata.append('ProfessionalSpecilization', this.empReg.get('ProfessionalSpecilization')?.value)

    //Academic Qualification 10th
    formdata.append('Board10', this.empReg.get('Board10')?.value)
    formdata.append('Institution10', this.empReg.get('Institution10')?.value)
    formdata.append('PassingYear10', this.empReg.get('PassingYear10')?.value)
    formdata.append('Specilization10', this.empReg.get('Specilization10')?.value)

    //Academic Qualification 12th
    formdata.append('Board12', this.empReg.get('Board12')?.value)
    formdata.append('Institution12', this.empReg.get('Institution12')?.value)
    formdata.append('PassingYear12', this.empReg.get('PassingYear12')?.value)
    formdata.append('Specilization12', this.empReg.get('Specilization12')?.value)

    if (this.empReg.valid) {
      this._crud.post_emp_reg(formdata).subscribe(
        (res: any) => {
          console.log(res);
          this._shared.tostSuccessTop('Registration Successfully...')
        },
        (error: any) => {
          console.log(error);
          this._shared.tostErrorTop('Something went wrong.')
        }
      )
    } else {
      this._shared.tostErrorTop('Please fill all the required fildes')
    }
  }


  updateEmp() {
    const updatedata = new FormData();
    updatedata.append('Id', this.empReg.get('Id')?.value);
    updatedata.append('EmployeeCode', this.empReg.get('EmployeeCode')?.value);
    updatedata.append('EmployeeName', this.empReg.get('EmployeeName')?.value);
    updatedata.append('Department', this.empReg.get('Department')?.value);
    updatedata.append('Designation', this.empReg.get('Designation')?.value);
    updatedata.append('ReportingManager', this.empReg.get('ReportingManager')?.value);
    updatedata.append('Image', this.empReg.get('Image')?.value);
    updatedata.append('EmailId', this.empReg.get('EmailId')?.value);
    updatedata.append('AdharNo', this.empReg.get('AdharNo')?.value);
    updatedata.append('PanNo', this.empReg.get('PanNo')?.value);
    updatedata.append('Mobile', this.empReg.get('Mobile')?.value);
    updatedata.append('DOJ', this.empReg.get('DOJ')?.value);
    updatedata.append('Passport', this.empReg.get('Passport')?.value);
    updatedata.append('UserName', this.empReg.get('UserName')?.value);
    updatedata.append('Password', this.empReg.get('Password')?.value);

    //Bank Details
    updatedata.append('BankName', this.empReg.get('BankName')?.value);
    updatedata.append('AccountNo', this.empReg.get('AccountNo')?.value);
    updatedata.append('IFSC', this.empReg.get('IFSC')?.value);
    updatedata.append('BankBranch', this.empReg.get('BankBranch')?.value);

    //Health Data
    updatedata.append('BloodGroup', this.empReg.get('BloodGroup')?.value);
    updatedata.append('IdMarks', this.empReg.get('IdMarks')?.value);

    //Biographical Details
    updatedata.append('DOB', this.empReg.get('DOB')?.value);
    updatedata.append('Age', this.empReg.get('Age')?.value);
    updatedata.append('Sex', this.empReg.get('Sex')?.value);
    updatedata.append('Nationality', this.empReg.get('Nationality')?.value);
    updatedata.append('Religion', this.empReg.get('Religion')?.value);
    updatedata.append('MaritalStatus', this.empReg.get('MaritalStatus')?.value);

    //Present Address
    updatedata.append('PresentAddress', this.empReg.get('PresentAddress')?.value);
    updatedata.append('State', this.empReg.get('State')?.value?.State_Name);
    updatedata.append('City', this.empReg.get('City')?.value);
    updatedata.append('Pin', this.empReg.get('Pin')?.value);

    //In Case Emergency
    updatedata.append('EmergencyContactPerson', this.empReg.get('EmergencyContactPerson')?.value);
    updatedata.append('EmergencyContactNumber', this.empReg.get('EmergencyContactNumber')?.value);
    updatedata.append('EmergencyContectAddress', this.empReg.get('EmergencyContectAddress')?.value);

    //Refrences
    updatedata.append('ReferencesName', this.empReg.get('ReferencesName')?.value);
    updatedata.append('ContactNo', this.empReg.get('ContactNo')?.value);
    updatedata.append('CompanyName', this.empReg.get('CompanyName')?.value);
    updatedata.append('CemailId', this.empReg.get('CemailId')?.value);

    //Last Three Employment Details
    updatedata.append('PreviousEmployer', this.empReg.get('PreviousEmployer')?.value);
    updatedata.append('Fromt', this.empReg.get('Fromt')?.value);
    updatedata.append('ToT', this.empReg.get('ToT')?.value);

    //Professional Qualification
    updatedata.append('Degree', this.empReg.get('Degree')?.value)
    updatedata.append('ProfessionalInstitution', this.empReg.get('ProfessionalInstitution')?.value)
    updatedata.append('ProfessionalPassingYear', this.empReg.get('ProfessionalPassingYear')?.value)
    updatedata.append('ProfessionalSpecilization', this.empReg.get('ProfessionalSpecilization')?.value)

    //Academic Qualification 10th
    updatedata.append('Board10', this.empReg.get('Board10')?.value)
    updatedata.append('Institution10', this.empReg.get('Institution10')?.value)
    updatedata.append('PassingYear10', this.empReg.get('PassingYear10')?.value)
    updatedata.append('Specilization10', this.empReg.get('Specilization10')?.value)

    //Academic Qualification 12th
    updatedata.append('Board12', this.empReg.get('Board12')?.value)
    updatedata.append('Institution12', this.empReg.get('Institution12')?.value)
    updatedata.append('PassingYear12', this.empReg.get('PassingYear12')?.value)
    updatedata.append('Specilization12', this.empReg.get('Specilization12')?.value)
    console.log(this.empReg.get('Id')?.value);

    this._crud.put_emp_reg(this.empReg.get('Id')?.value, updatedata).subscribe({
      next: (res: any) => {
        console.log(res);
        this._shared.tostSuccessTop('Update Successfully...');
      },
      error: (error: any) => {
        console.log(error);
        this._shared.tostErrorTop('Update Failed');
      }
    });
  }
}
