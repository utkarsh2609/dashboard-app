import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentPageTitle = 'Dashboard';
  profilePicture: string | undefined;

  constructor(
    public authService: AuthService,
    private communicationService: CommunicationService
  ) {}

  ngOnInit(){
    this.communicationService.currentPageHeading.subscribe(heading => {
      this.currentPageTitle = heading;
      this.profilePicture = this.communicationService.getUserProfile()?.photoURL;
      console.log('app', this.currentPageTitle, this.profilePicture)
    });
  }
}
