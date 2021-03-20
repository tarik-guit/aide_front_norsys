import {BrowserModule, HammerModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";

import { CalendarComponent } from './calendar/calendar.component';
import {IgxCalendarModule, IgxDatePickerModule, IgxDialogModule, IgxSnackbarModule} from "igniteui-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DailyeventComponent } from './dailyevent/dailyevent.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";



@NgModule({
  declarations: [
    AppComponent,

    CalendarComponent,

    DailyeventComponent
  ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      IgxCalendarModule,
      IgxDialogModule,
      MDBBootstrapModule.forRoot(),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
