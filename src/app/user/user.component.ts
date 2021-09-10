import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { WeatherService } from '../services/weather.service';
import Constants from '../shared/constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users = Array<any>();

  constructor(
    private weatherService: WeatherService,
    private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {
  this.communicationService.currentPageHeading.next(Constants.USERS_TITLE);
  this.getUserList();
  }


  getUserList() {
    this.weatherService.getUsers().subscribe(userList => {
      this.users = userList;
      this.users.map(user => {
        user.imgUrl = `https://robohash.org/${user.id}?set=set4&size=180x180`;
        user.gender = (user.id%2 === 0 )? 'Male' : 'Female';
        user.role = (user.id === 1 )? 'Admin' : 'User'
      });
      console.log('USERSSSS', this.users);
    });
  }
}
