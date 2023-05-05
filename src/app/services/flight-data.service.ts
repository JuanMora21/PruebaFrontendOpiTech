import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightDataService {
  private jsonUrl = 'assets/flights.json';

  constructor(private http: HttpClient) {}

  getFlightData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
