import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}
  beginTime: number = 1527832800;
  endTime: number = 1527834600;

  getFlightsByTimeInterval() {
    return this.http.get(
      `https://opensky-network.org/api/flights/all?begin=${this.beginTime}&end=${this.endTime}`
    );
  }

  getArrivalsByAirport(airport: string) {
    return this.http.get(
      `https://opensky-network.org/api/flights/arrival?airport=${airport}&begin=${this.beginTime}&end=${this.endTime}`
    );
  }

  getDeparturesByAirport(airport: string) {
    return this.http.get(
      `https://opensky-network.org/api/flights/departure?airport=${airport}&begin=${this.beginTime}&end=${this.endTime}`
    );
  }
}
