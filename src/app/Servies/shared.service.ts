import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(
    private _snacker: MatSnackBar
  ) { }

  base_url = new BehaviorSubject<string>('https://macreel.in/api/')
  base_img_url = new BehaviorSubject<string>('https://macreel.in/')
  emp_data = new BehaviorSubject<object>({})

  lead_data = new BehaviorSubject<object>({})
  client_data =  new BehaviorSubject<object>({})
  LeadFlowup =  new BehaviorSubject<object>({})

  // for toast

  tostSuccessTop(title: any) {
    this._snacker.open(title, '',
      {
        duration: 1000, verticalPosition: 'top', horizontalPosition: 'end',
        panelClass: ['tostSuccess']
      });
  }

  tostSuccessBottom(title: any) {
    this._snacker.open(title, '',
      {
        duration: 1000, verticalPosition: 'bottom', horizontalPosition: 'end',
        panelClass: ['tostSuccess']
      });
  }

  tostErrorTop(title: any) {
    this._snacker.open(title, '',
      {
        duration: 1000, verticalPosition: 'top', horizontalPosition: 'end',
        panelClass: ['tostError']
      });
  }

  tostErrorBottom(title: any) {
    this._snacker.open(title, '',
      {
        duration: 1000, verticalPosition: 'bottom', horizontalPosition: 'end',
        panelClass: ['tostError']
      });
  }

  tostWarningTop(title: any) {
    this._snacker.open(title, '',
      {
        duration: 1000, verticalPosition: 'top', horizontalPosition: 'end',
        panelClass: ['tostWarning']
      });
  }

}