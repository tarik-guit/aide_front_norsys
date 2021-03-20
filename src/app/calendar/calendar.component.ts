import { Component, OnInit } from '@angular/core';
import {CalendarView, IViewDateChangeEventArgs} from "igniteui-angular";





@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSelection(date: Date) {
    console.log(date);
  }
  public viewDateChanged(event: IViewDateChangeEventArgs) {
    // use event.previousValue to get previous month/year that was presented.
    // use event.currentValue to get current month/year that is presented.
  }

  public activeViewChanged(event: CalendarView) {
    // use CalendarView[event] to get the current active view (DEFAULT, YEAR or DECADE)
  }



}
