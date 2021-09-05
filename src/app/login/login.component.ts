import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Constants from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appTitle = Constants.APP_TITLE;
  title = 'Sign In';
  description = 'Sign in to your account';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // Set current form title here
    // this.title = this.route.url.
    // this.route.url.subscribe(u => console.log('curr', u))
    // this.title = this.router.url;
    // console.log('title', this.title)
  }

}
