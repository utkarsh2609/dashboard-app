import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getWeatherDataForCity(city: string) : Observable<any> {
    return this.httpClient.get<Observable<any>>('https://api.weatherapi.com/v1/history.json?key=5129b6a663fc40469f555655210709&q=Kanpur&dt=2021-09-06')
  }

  getUsers() : Observable<any> {
    return this.httpClient.get<Observable<any>>('https://jsonplaceholder.typicode.com/users');
  }
}
