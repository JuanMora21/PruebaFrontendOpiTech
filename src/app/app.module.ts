import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightTableComponent } from './flight-table/flight-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlightDataService } from './services/flight-data.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, FlightTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [FlightDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
