import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FlightService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  airports: any[] = [];
  date = new Date(this.flightService.beginTime);
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightService
      .getFlightsByTimeInterval()
      .pipe(
        map((flight: any) => {
          return flight.map((flight: any) => ({
            estDepartureAirport: flight.estDepartureAirport,
            estArrivalAirport: flight.estArrivalAirport,
          }));
        })
      )
      .subscribe((flights: any) => {
        const airportsSet = new Set();
        flights.forEach((flight: any) => {
          airportsSet.add(flight.estDepartureAirport);
          airportsSet.add(flight.estArrivalAirport);
        });
        airportsSet.delete(null);
        this.airports = Array.from(airportsSet);
      });
  }
}
