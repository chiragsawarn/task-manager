import { Component, OnInit } from '@angular/core';
import { MonthdaysComponent } from '../monthdays/monthdays.component';
import { WeekdaysComponent } from '../weekdays/weekdays.component';
import { BlankComponent } from '../blank/blank.component';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';
import { CollectWeekdaysService } from '../services/collect-weekdays.service';
import { CollectMonthdaysService } from '../services/collect-monthdays.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})

export class AddTasksComponent implements OnInit {
  addTaskForm:FormGroup;

  constructor(private fb:FormBuilder, private _collectWeekdaysService: CollectWeekdaysService, private _collectMonthdaysService: CollectMonthdaysService) { }

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      task:['',[Validators.required]],
      frequency:['once',[Validators.required]],
      startTime:['',[Validators.required]],
      durationHours:['',[Validators.required]],
      durationMinutes:['',[Validators.required]],
      type:['',[Validators.required]],
      subtasks:this.fb.array([]),
      weekdays:[''],
      monthdays:[''],
    })

    this._collectWeekdaysService.weekdaysMessage$.subscribe((message)=>{
      this.addTaskForm.controls.weekdays.setValue(message);
    })

    this._collectMonthdaysService.monthdaysMessage$.subscribe((message)=>{
      this.addTaskForm.controls.monthdays.setValue(message);
    })
  }

  collectDays(weekdaysForm:any){
    console.log(weekdaysForm);
    // this.addTaskForm.addControl("weekdays",weekdaysForm);
  }

  get subtasks(){
    return this.addTaskForm.get('subtasks') as FormArray;
  }

  addSubtask(){
    this.subtasks.push(this.fb.control(''));
  }

  addTask(){
    console.log(this.addTaskForm.value);
  }

  freq:any;

  onWeekdays(){
    this.freq = WeekdaysComponent;
  }
  onMonthdays(){
    this.freq = MonthdaysComponent;
  }
  onOtherdays(){
    this.freq = BlankComponent;
  }

}
