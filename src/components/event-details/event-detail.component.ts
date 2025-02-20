import { Component } from '@angular/core';
import { Event } from '../service/event.model';
import { EventService } from '../service/event.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {
  event!: Event;

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    if (eventId) {
      this.event = this.eventService.getEventById(eventId);
    }
  }
  
}
