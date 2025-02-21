# Event Management Application

## Overview

The Event Management Application is a web-based platform built using Angular. It allows users to create, edit, and manage events efficiently with features like dynamic filtering, validation, and a user-friendly interface.

## Features Implemented

### 1. Event Listing Page

- Displays a list of all events.
- Implements pagination for easy navigation.
- Search functionality to filter events by title.
- Responsive UI using Angular Material.

### 2. Event Details Page

- Shows full details of an event.
- Provides an option to edit or delete the event.
- Displays event title, date & time, location, and description.

### 3. Event Creation and Editing

- Users can create a new event with the following fields:
  - Title
  - Date & Time (with validation for future dates)
  - Location
  - Description
- Editing an event allows users to modify event details.
- Form validation to ensure input correctness.
- Duplicate event name check before saving.
- Confirmation dialog for event updates.

### 4. Validation

- Event title should be between 10-40 characters and should not start with a space or number.
- Location should be between 10-100 characters.
- Description should be between 20-500 characters.
- Date & Time should be in the future.
- Form submission is enabled only when all validations pass.
- Displays appropriate error messages.

### 5. UI & UX Enhancements

- Used Angular Material for a modern UI.
- Snackbar notifications for success/error messages.
- Confirmation dialog for event updates.
- Fully responsive design for mobile and desktop views.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/kajal1698/event_management.git
   ```
2. Navigate to the project directory:
   ```sh
   cd event-management
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   ng serve
   ```
5. Open the application in the browser:
   ```
   http://localhost:4200/
   ```

## Technologies Used

- **Frontend:** Angular, TypeScript, Angular Material, Bootstrap
- **State Management:** Services
- **Styling:** SCSS
- **Routing:** Angular Router

## Author

**Kajal Soni**

For any issues or contributions, feel free to create a pull request or raise an issue in the repository!

