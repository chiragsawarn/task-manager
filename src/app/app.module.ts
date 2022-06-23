import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { WeekdaysComponent } from './weekdays/weekdays.component';
import { MonthdaysComponent } from './monthdays/monthdays.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlankComponent } from './blank/blank.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTaskCardComponent } from './view-task-card/view-task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTasksComponent,
    ViewTasksComponent,
    WeekdaysComponent,
    MonthdaysComponent,
    BlankComponent,
    ViewTaskCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
