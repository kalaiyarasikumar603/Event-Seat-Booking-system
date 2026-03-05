# Event Seat Booking System

A Full Stack Web Application for booking seats for events.

## Technologies Used
- React.js
- Node.js
- Express.js
- MongoDB
- CSS

## Features
- User Authentication
- Venue Listing
- Seat Selection
- Ticket Booking
- Ticket Cancellation

## Project Structure
event-seat-booking
│
├── backend
│   ├── models
│   │     Booking.js
│   │     Seat.js
│   │     Venue.js
│   │
│   ├── routes
│   │     bookings.js
│   │     seats.js
│   │     venues.js
│   │
│   ├── db.js
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │    ├── components
│   │    │      VenueList.js
│   │    │      SeatSelection.js
│   │    │      MyTickets.js
│   │
│   │    ├── App.js
│   │    └── index.js
│
└── README.md

## How it Works
1. User selects an event venue
2. Seat layout is displayed
3. User selects available seats
4. Booking request is sent to backend API
5. MongoDB stores booking details
6. User can view or cancel tickets

## How to Run

Backend:
cd backend
npm install
node server.js

Frontend:
cd frontend
npm install
npm start
