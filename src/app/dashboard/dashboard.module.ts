import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RevenueComponent } from './revenue/revenue.component';
import { GraphComponent } from './graph/graph.component';
import { TopProductComponent } from './top-product/top-product.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RevenueComponent,
    GraphComponent,
    TopProductComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
