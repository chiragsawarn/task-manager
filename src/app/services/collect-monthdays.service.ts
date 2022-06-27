import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectMonthdaysService {

  constructor() { }
  
  private _monthdaysMessageSource = new Subject<string>();
  monthdaysMessage$ = this._monthdaysMessageSource.asObservable();

  sendMessage(message:string){
    console.log(message);
    this._monthdaysMessageSource.next(message);
  }
}
 