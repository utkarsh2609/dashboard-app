import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { CommunicationService } from '../services/communication.service';
import Constants from '../shared/constants';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  userDetails : User | undefined | null;
  firstName: string | undefined;
  lastName: string | undefined;

  constructor(
    private communicationService: CommunicationService
    ) { }

  ngOnInit(): void {
  this.communicationService.currentPageHeading.next(Constants.SETTINGS_TITLE);
  this.userDetails = this.communicationService.getUserProfile();
  this.firstName = this.communicationService.getUserProfile()?.displayName.split(' ')[0];
  this.lastName = this.communicationService.getUserProfile()?.displayName.split(' ')[1];
  }

}
