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
    this._monthdaysMessageSource.next(message);
  }
}
 