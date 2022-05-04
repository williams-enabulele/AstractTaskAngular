import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { Response } from './types/Response';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(
    private route: Router,
    private http: HttpClient
  ) { }


  getTasks(){
    return this.http.get<Response>(`${environment.BASE_URL}/task/getalltask`)
  } 
}
