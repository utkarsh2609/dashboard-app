import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent {
  revenueData = [
    {label: 'Total Revenues', value: '$2,129,430', colorCode: '#DDEFE0', icon: '../../../assets/images/total_revenue.svg'},
    {label: 'Total Transactions', value: '1,520', colorCode: '#F4ECDD', icon: '../../../assets/images//total_transaction.svg'},
    {label: 'Total Likes', value: '9,721', colorCode: '#EFDADA', icon: '../../../assets/images/likes.svg'},
    {label: 'Total Users', value: '892', colorCode: '#DEE0EF', icon: '../../../assets/images/users.svg'},
  ]

}
