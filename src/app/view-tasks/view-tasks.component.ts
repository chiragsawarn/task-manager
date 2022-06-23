import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  tasks:any;
  visibilityList = new Map();
  filter(data:any){
    if(data.freqency == 'weekly') data.weekdays = JSON.parse(data.weekdays);
    if(data.freqency == 'monthly') data.monthdays = JSON.parse(data.monthdays);
  }
  constructor(private api:ApiService) {
    api.getTasks().subscribe((data:any)=>{
      // alert(JSON.stringify(data,null,2));
      // this.filter(data);
      this.tasks = data;
      for(let task of this.tasks){
        this.visibilityList.set(task._id, true);
      }
    });
  }

  
  deleteTask_util(id:string){
    this.visibilityList.delete(id);
    this.api.deleteTask(id).subscribe((data)=>{
      alert(JSON.stringify(data,null,2));
    })
  }

  ngOnInit(): void {
  }

}
