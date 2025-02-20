import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from '../service/event.service';
import { Event } from '../service/event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  event: Event | null = null;
  isEdit = false;
  dialogRef!: MatDialogRef<any>;
  minDate: string = ''; 
  formValid: boolean = false;
  // Reference the Update Confirmation Dialog
  @ViewChild('updateDialog') updateDialog!: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');

    if (eventId) {
      this.isEdit = true;
      const existingEvent = this.eventService.getEventById(Number(eventId));
      if (existingEvent) {
        this.event = { ...existingEvent };
      }
    }

    // Initialize event object if creating a new event
    if (!this.event) {
      this.event = { id: 0, title: '', date: '', location: '', description: '' };
    }
    this.minDate = new Date().toISOString().slice(0, 16);
    console.log("isLocationValid",this.isLocationValid(),"isDescriptionValid",this.isDescriptionValid(),"isDateValid",this.isDateValid());

  }
  isEventNameValid(): boolean {
    return this.event.title && /^[^\s\d][a-zA-Z0-9 -]{9,39}$/.test(this.event.title);
  }

  isLocationValid(): boolean {
    return this.event.location && /^[^\s][a-zA-Z0-9 ,]{9,99}$/.test(this.event.location);
  }

  isDescriptionValid(): boolean {
    return this.event.description && /^[^\s][a-zA-Z0-9 ,.]{19,499}$/.test(this.event.description);
  }

  isDateValid(): boolean {
    return !!this.event.date;
  }

  isFormValid(): boolean {
    this.formValid = this.isEventNameValid() && this.isLocationValid() && this.isDescriptionValid() && this.isDateValid();
    return this.formValid;
  }
  onSubmit() {
    if (this.isEdit) {
      this.dialogRef = this.dialog.open(this.updateDialog);
    } else {
      if (this.eventService.checkDuplicateEvent(this.event.title)) {
        this.showToast('Event name already exists! Choose a different name.','error');
        return; // Prevent saving
      }
      
      this.eventService.addEvent(this.event);
      this.showToast('Event added successfully!','success');
      this.router.navigate(['/events']);
    }
  }
  

  confirmUpdate() {
    this.eventService.updateEvent(this.event);
    this.dialogRef.close();
    this.showToast('Event updated successfully!','success');
    this.router.navigate(['/events']);
  }
  showToast(message: string,type:string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: type == 'success' ? ['success-snackbar'] : ['error-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
