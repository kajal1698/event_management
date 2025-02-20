import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EventService } from 'src/components/service/event.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isEventsPage = false;
  searchText = '';

  constructor(private router: Router,private eventService:EventService) {
    // Detect Route Change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isEventsPage = event.url === '/events'; // Show only on /events
      }
    });
  }

  filterEvents() {
    console.log('Filtering events for:', this.searchText);
    this.eventService.filterBarText.next({filterText : this.searchText})
  }
}
