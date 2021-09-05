import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Constants from '../constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  appTitle = Constants.APP_TITLE;
  routes = [
    {name: 'Dashboard', icon:'../../../assets/images/dashboard_icon.svg', path: './dashboard'},
    {name: 'Transactions', icon:'../../../assets/images/transaction_icon.svg', path: './dashboard'},
    {name: 'Schedules', icon:'../../../assets/images/schedule_icon.svg', path: './dashboard'},
    {name: 'Users', icon:'../../../assets/images/user_icon.svg', path: './users'},
    {name: 'Settings', icon:'../../../assets/images/setting_icon.svg', path: './settings'},
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
