import { Component, ViewChild, AfterViewInit,TemplateRef } from '@angular/core';
import { EventService } from './service/event.service';
import { Event } from './service/event.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements AfterViewInit {
  title = 'event-management';
  events: Event[] = [];
  searchText: string = '';
  filteredEvent: Event[] = [];
  pagedEvents: Event[] = [];
  pageSize = 5;
  currentPage = 0;
  eventToDelete: any = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('deleteDialog') deleteDialog!: TemplateRef<any>;

  constructor(private eventService: EventService,public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.events = this.eventService.getEvents();
    this.filteredEvent = [...this.events];
    this.updatePagedEvents();
    this.eventService.filterBarText.subscribe((data)=>{
      this.searchText = data.filterText;
      this.filterEvents();
    })
  }

  ngAfterViewInit() {
    this.updatePagedEvents();
  }
  editEvent(e){

  }
  confirmDelete(){
    if (this.eventToDelete) {
      console.log("eventToDelete::::",this.eventToDelete);
      this.events = this.events.filter(event => event.title !== this.eventToDelete);
      console.log("this.events:::::",this.events);
      this.filteredEvent = [...this.events];
      this.dialog.closeAll();
      this.snackBar.open('Event deleted successfully', '', {
        duration: 3000,
        panelClass: ['success-snackbar'],
          verticalPosition: 'top',
  horizontalPosition: 'right'
      });
      this.eventToDelete = null;
      this.updatePagedEvents();
    }
  }
  deleteEvent(event: any) {
    this.eventToDelete = event;
    this.dialog.open(this.deleteDialog);
    console.log("this.events:::::",this.events);
  }
  filterEvents() {
    if (this.searchText.trim() === '') {
      this.filteredEvent = [...this.events];
    } else {
      this.filteredEvent = this.events.filter(event =>
        event.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        event.location.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.currentPage = 0;
    this.updatePagedEvents();
  }
  addEvent(){

  }
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedEvents();
  }

  updatePagedEvents() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedEvents = this.filteredEvent.slice(startIndex, endIndex);
  }
}
