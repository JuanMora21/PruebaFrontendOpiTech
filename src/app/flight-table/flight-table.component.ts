import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../services/flight-data.service';

@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.css']
})
export class FlightTableComponent implements OnInit {
  flights: any[] = [];
  filteredFlights: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 10;
  searchText: string = '';

  constructor(private flightDataService: FlightDataService) {}

  ngOnInit(): void {
    this.flightDataService.getFlightData().subscribe((data: any) => {
      this.flights = data.data;
      this.filteredFlights = this.flights;
    });
  }

  nextPage(): void {
    this.currentPage++;
  }

  prevPage(): void {
    this.currentPage--;
  }

  filterFlights(): void {
    this.currentPage = 0;
    this.filteredFlights = this.flights.filter(flight =>
      (flight.flight_date && flight.flight_date.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (flight.flight_status && flight.flight_status.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (flight.departure.airport && flight.departure.airport.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (flight.arrival.airport && flight.arrival.airport.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (flight.airline.name && flight.airline.name.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (flight.flight.iata && flight.flight.iata.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
}
