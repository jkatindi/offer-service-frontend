import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ActionEvent} from "../state/offer.state";

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

 sourceEventSubject: Subject<ActionEvent>=new Subject<ActionEvent>();
 sourceSubjectObservable=this.sourceEventSubject.asObservable();

  constructor() { }

  publishEvent(event: ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
