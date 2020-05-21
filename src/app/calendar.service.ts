import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  baseURL:string='https://timelyapp.time.ly/api/calendars/info';
  constructor(
    private http: HttpClient,
  ) { }

  getCalendarSettings(): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body={url:'https://calendar.time.ly/ficceyp4'};
    console.log(body);
    return this.http.post(this.baseURL, body,{'headers':headers})
  }

  getEventsList(id:string):Observable<any>{
    let params = new HttpParams().set('id',id);
    return this.http.get<any>(`https://timelyapp.time.ly/api/calendars/${id}/events`);
  }
}
