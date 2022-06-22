import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.css']
})
export class WeekdaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  days:string[] = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
  
  weekdaysForm = new FormGroup({
    monday: new FormControl(false),
    tuesday: new FormControl(false),
    wednesday: new FormControl(false),
    thursday: new FormControl(false),
    friday: new FormControl(false),
    saturday: new FormControl(false),
    sunday: new FormControl(false)
  })

  @Output() collectDaysEvent = new EventEmitter<string>();


} 
