import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly BASE_API_ENDPOINT: string = 'https://timelyapp.time.ly/api/calendars';
    public readonly HEADERS = { 'content-type': 'application/json' };
}