import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService } from '../services/communication.service';
import Constants from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appTitle = Constants.APP_TITLE;
  title = '';
  description = '';

  constructor(
    private communicationService: CommunicationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Set current form title here
    this.communicationService.loginComponentHeaderInfo.subscribe(info => {
      this.title = info.title;
      this.description = info.description;
    });
    // this.cdr.detectChanges();
  }

}
