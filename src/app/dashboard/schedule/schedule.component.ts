import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  events = [
    {purpose: 'Meeting with suppliers from Kuta Bali ', time: '14.00-15.00', location: 'at Sunset Road, Kuta, Bali', eventColorCode: '#9BDD7C'},
    {purpose: 'Check operation at Giga Factory 1 ', time: '18.00-20.00', location: 'at Central Jakarta ', eventColorCode: '#6972C4'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
