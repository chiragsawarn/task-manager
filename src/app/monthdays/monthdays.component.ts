import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-monthdays',
  templateUrl: './monthdays.component.html',
  styleUrls: ['./monthdays.component.css']
})
export class MonthdaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  days: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

  monthdaysForm = new FormGroup({
    '1': new FormControl(false),
    '2': new FormControl(false),
    '3': new FormControl(false),
    '4': new FormControl(false),
    '5': new FormControl(false),
    '6': new FormControl(false),
    '7': new FormControl(false),
    '8': new FormControl(false),
    '9': new FormControl(false),
    '10': new FormControl(false),
    '11': new FormControl(false),
    '12': new FormControl(false),
    '13': new FormControl(false),
    '14': new FormControl(false),
    '15': new FormControl(false),
    '16': new FormControl(false),
    '17': new FormControl(false),
    '18': new FormControl(false),
    '19': new FormControl(false),
    '20': new FormControl(false),
    '21': new FormControl(false),
    '22': new FormControl(false),
    '23': new FormControl(false),
    '24': new FormControl(false),
    '25': new FormControl(false),
    '26': new FormControl(false),
    '27': new FormControl(false),
    '28': new FormControl(false),
    '29': new FormControl(false),
    '30': new FormControl(false),
  })
}
