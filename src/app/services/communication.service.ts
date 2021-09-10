import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import Constants from '../shared/constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  loginComponentHeaderInfo = new BehaviorSubject({title: 'Sign In' , description: 'Sign in to your account'});
  currentPageHeading = new BehaviorSubject<string>(Constants.DASHBOARD_TITLE);

  constructor(
    private authService: AuthService
  ){}

  getUserProfile(): User | null{
    if(this.authService.isLoggedIn) {
      const user = localStorage.getItem('user');
      if(user) {
        return JSON.parse(user) as User;
      }
    }
    return null;
  }

}
