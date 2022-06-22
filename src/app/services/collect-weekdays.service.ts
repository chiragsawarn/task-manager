import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectWeekdaysService {

  constructor() { }

  private _weekdaysMessageSource = new Subject<string>();
  weekdaysMessage$ = this._weekdaysMessageSource.asObservable();

  sendMessage(message:string){
    this._weekdaysMessageSource.next(message);
  }
}
