import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string;
  private corsHeaders: HttpHeaders;
  
  constructor(private http:HttpClient) {
    this.url = "http://localhost:3000/tasks";
    this.corsHeaders = new HttpHeaders().set('access-control-allow-origin',"http://localhost:3000/");
  }

  getTasks(){
    return this.http.get(this.url);
  }

  saveTask(data:any){
    return this.http.post(this.url, data);
  }
}
