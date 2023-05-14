import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AirportComponent } from './airport/airport.component';

@NgModule({
  declarations: [DashboardComponent, AirportComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
