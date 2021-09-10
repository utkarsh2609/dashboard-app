import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { WeatherService } from '../services/weather.service';
import Constants from '../shared/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  forecast:any;

  constructor(
    private weatherService: WeatherService,
    private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {
  this.communicationService.currentPageHeading.next(Constants.DASHBOARD_TITLE);
    this.weatherService.getWeatherDataForCity('Kanpur').subscribe(data => {
      this.forecast = data.forecast.forecastday[0];
      console.log('data', this.forecast);
    })
  }

}
