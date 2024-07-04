import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  base_url = ''

  constructor(
    private _http: HttpClient,
    private _shared: SharedService
  ) {
    this._shared.base_url.subscribe(
      (res: any) => {
        console.log(res);
        this.base_url = res
      }
    )
  }


  login(data: any) {
    return this._http.post(`${this.base_url}CheckLogin`, data);
  }

  get_designation() {
    return this._http.get<[]>(`${this.base_url}Designation`)
  }

  get_department() {
    return this._http.get<[]>(`${this.base_url}DepartmentandDesignation`)
  }

  get_ReportingManager() {
    return this._http.get<[]>(`${this.base_url}ReportingManager`)
  }

  get_RolePermission() {
    return this._http.get<[]>(`${this.base_url}RolePermission`)
  }

  get_state() {
    return this._http.get<[]>(`${this.base_url}GetState`)
  }

  get_city_by_state_id(id: any) {
    return this._http.get<[]>(`${this.base_url}GetCityByStateId?id=${id}`)
  }

  get_servies() {
    return this._http.get(`${this.base_url}Service`)
  }
  
  //for employee registration
  post_emp_reg(data: any) {
    return this._http.post(`${this.base_url}Registration`, data)
  }

  get_employee() {
    return this._http.get(`${this.base_url}Registration`)
  }


  put_emp_reg(Id: string, data: any) {
    return this._http.post(`${this.base_url}Registration?Id=${Id}`, data)
  }


  // for client crud 

  get_client(roletype: any, id: any) {
    return this._http.get(`${this.base_url}Client?Roletype=${roletype}&created_by=${id}`)
  }

  ClientAdd(data: any, id: any) {
    return this._http.post(`${this.base_url}Client?login_id=${id}`, data)
  }


  // for lead crud 

  get_lead_for_admin() {
    return this._http.get(`${this.base_url}Lead`)
  }

  get_lead_for_emp(id: any) {
    return this._http.get(`${this.base_url}Lead?created_by=${id}`)
  }







}
