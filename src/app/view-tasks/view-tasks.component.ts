import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  // tasks:any;
  // constructor(private api:ApiService) {
  //   api.getTasks().subscribe((data:any)=>{
  //     alert(data.results);
  //     this.tasks = data.results;
  //   });
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
