import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/tasks";

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get(this.url);
  }

  saveTask(data:any){
    return this.http.post(this.url, data);
  }
}
