import { Component, OnInit } from '@angular/core';
import {EventDriverService} from "../services/event-driver.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  counter: number=0;
  constructor(private eventDriver: EventDriverService) { }

  ngOnInit(): void {
    this.eventDriver.sourceSubjectObservable.subscribe(evnt=>{
      ++this.counter
    })
  }

}
