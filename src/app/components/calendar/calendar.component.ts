import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarSetting;
  events;
  items;
  constructor(
    private calendarService: CalendarService
  ) { }

  ngOnInit() {

    this.calendarService.getCalendarSettings()
    .subscribe(data=>{
      this.calendarSetting=data.data;
    })
    
    setTimeout(() => {
      this.calendarService.getEventsList(this.calendarSetting.id)
      .subscribe(data=>{
        this.events=data.data;
        this.items=data.data.items;
      });
    }, 2000);
  }
  
}
