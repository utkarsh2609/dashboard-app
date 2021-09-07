import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  forecast:any;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeatherDataForCity('Kanpur').subscribe(data => {
      this.forecast = data.forecast.forecastday[0];
      console.log('data', this.forecast);
    })
  }

}
