import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventListComponent } from 'src/components/event-list.component';
import { EventDetailComponent } from 'src/components/event-details/event-detail.component';
import { EventFormComponent } from 'src/components/event-form/event-form.component';
import { RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' }, // Default Route
  { path: 'events', component: EventListComponent, }, // Load Event List
  { path: 'event/add', component: EventFormComponent }, // Event Add Page
  { path: 'event/:id', component: EventDetailComponent }, // Event Details Page
  { path: 'event/edit/:id', component: EventFormComponent },  // Edit Event (Pass ID)
  { path: '**', redirectTo: '/events' } // Redirect invalid routes
];
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
