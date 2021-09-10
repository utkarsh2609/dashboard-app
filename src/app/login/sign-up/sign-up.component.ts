import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private communicationService: CommunicationService
    ) { }

  ngOnInit(): void {
    this.communicationService.loginComponentHeaderInfo.next({title: 'Create an account' , description: 'Create an account to use dashboard'});
  }

}
