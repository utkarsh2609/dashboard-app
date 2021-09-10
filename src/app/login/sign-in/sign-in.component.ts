import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private communicationService: CommunicationService
    ) { }

  ngOnInit(): void {
    this.communicationService.loginComponentHeaderInfo.next({title: 'Sign In' , description: 'Sign in to your account'});
  }

}
