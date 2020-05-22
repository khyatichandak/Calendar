import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/configs/constants';
import { Calendar } from '../components/calendar/calendar';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  calendar = new Calendar();
  
  constructor(
    private http: HttpClient,
    private constants: Constants,
  ) { }

  getCalendarEvents(){
    let promise = new Promise((resolve, reject) => {
      const calendarApiURL = this.constants.BASE_API_ENDPOINT + '/info';  
      const body = { url : 'https://calendar.time.ly/ficceyp4' };
      this.http.post(calendarApiURL, body, {'headers': this.constants.HEADERS})
      .toPromise()
      .then(
        res => { // Success
          this.calendar.id = res["data"].id;
          const eventsApiURL = this.constants.BASE_API_ENDPOINT + '/' + this.calendar.id + '/events';
          this.http.get(eventsApiURL)
          .toPromise()
          .then(
            data => {
              resolve(data["data"]);
            },
            err => {
              reject("Can not get events data" + err);
            }
          )
        },
        err => { // Error
          reject("Can not get calendar response" + err);
        }
      );
    });
    return promise;
  }
}
