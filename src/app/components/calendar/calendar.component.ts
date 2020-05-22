import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Event } from './event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events: Event[] = [];
  constructor(
    private calendarService: CalendarService,
  ) { }

  ngOnInit() {
    this.calendarService.getCalendarEvents()
      .then(res => {
        this.events = res["items"].map(item => {
          const event = {
            title: item.title,
            startTime: new Date(item.start_datetime),
            endTime: new Date(item.end_datetime),
            timezone: item.timezone,
            description: item.description_short,
            mediumImage: item.images[0].sizes.medium.url,
            costType: item.cost_type,
          }
          return event;
        })
      });
  }
}
