import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '@environments/environment';
import { Response } from './types/Response';
import { Task } from './types/Task';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  read(userId:string) {
    return this.http.get<Response>(`${environment.BASE_URL}/task/gettask/${userId}`);
  }

  update(id: string, data:Task) {
    return this.http.put<Response>(`${environment.BASE_URL}/task/updatetask/${id}`, data);
  }

  create(data:Task){
    return this.http.post<any>(`${environment.BASE_URL}/task/addtask`, data);
  }
  
  delete(id:string){
    return this.http.delete<any>(`${environment.BASE_URL}/task/deletetask/${id}`);
  }

  getCategories(){
    return this.http.get<any>(`${environment.BASE_URL}/taskcategory/getcategories`);
  }


}
