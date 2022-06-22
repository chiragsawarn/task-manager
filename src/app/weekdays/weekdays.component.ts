import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CollectWeekdaysService } from '../services/collect-weekdays.service';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.css']
})
export class WeekdaysComponent implements OnInit {

  constructor(private _collectWeekdaysService:CollectWeekdaysService) { }

  sendWeekdays(){
    this._collectWeekdaysService.sendMessage(this.weekdaysForm.value);
  }

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

  


} 
