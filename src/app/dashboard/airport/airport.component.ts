import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css'],
})
export class AirportComponent implements OnInit {
  @Input() airport!: string;
  @Input() date!: Date;
  arrivals!: number;
  departures!: number;
  time: Date = new Date()

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightService
      .getArrivalsByAirport(this.airport)
      .subscribe((arrivals: any) => {
        this.arrivals = arrivals.length;
      });
    this.flightService
      .getDeparturesByAirport(this.airport)
      .subscribe((departures: any) => {
        this.departures = departures.length;
      });
  }
}
