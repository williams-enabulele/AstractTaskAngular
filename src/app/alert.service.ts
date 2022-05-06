import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  alertWithSuccess(msg: any){
    Swal.fire( msg, 'success' )
  }
  
  alertWithError(msg:any){
    Swal.fire('Oops...', msg, 'error')
  }
}
