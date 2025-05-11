package oopdesign;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.HashSet;

/**
 * Created by jeremyhu on 9/17/22.
 */


// Actors
    // Class Theater Kiosk
        // Handles the logic for buying a ticket and updating class theater info

    // Class Theater:
        // Unique ID
        // Class Seats:
        // Two types: handicap, regular

    // Class Movie
        // Name
        // date time
        // Theater ID
        // Cost: [regular, child, veteran, elderly]

// Workflow:
    // Buying a ticket and updating theater data
    // I will assume all the monetary transaction work is done elsewhere

public class MovieTickets {
    HashMap<Integer, Theater> theaters;
    private Integer theaterSizeDefault = 70;

    enum TicketTypes {
        REGULAR, CHILD, VETERAN, ELDER;
    }

    enum SeatTypes {
        HANDICAP, REGULAR;
    }

    class Movie {
        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        private String title;

        public LocalDate getDate() {
            return date;
        }

        public void setDate(LocalDate date) {
            this.date = date;
        }

        private LocalDate date;

        public BigDecimal getRegularPrice() {
            return regularPrice;
        }

        public void setRegularPrice(BigDecimal regularPrice) {
            this.regularPrice = regularPrice;
        }

        private BigDecimal regularPrice;

        public Theater getTheater() {
            return theater;
        }

        public void setTheater(Theater theater) {
            this.theater = theater;
        }

        private Theater theater;

        public Movie(String title, LocalDate date, BigDecimal price, Theater theater) {
            this.title = title;
            this.date = date;
            this.regularPrice = price;
            this.theater = theater;
        }

    }

    class Kiosk {
        public int buyTicket(Movie m, Seat s, TicketTypes tType) {
            // I assume all the money transaction logic is taken care of somewhere else
            processTransaction(m, s, tType);

            Theater theater = m.getTheater();

            if(theater.remainingSeats() <= 0) {
                return -1;
            }

            theater.takeSeat(s.getId());
            return s.getId();
        }

        public void processTransaction(Movie m, Seat s, TicketTypes tType) {
            return;
        }
    }

    class Seat {
        private int id;
        private SeatTypes type;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public Seat(int id, SeatTypes type) {
            this.id = id;
            this.type = type;
        }
    }

    class Theater {
        private HashMap<Integer, Seat> seats;
        private int id;
        public Theater(int id) {
            this.id = id;
            this.seats = new HashMap<Integer, Seat>();
        }

        public int getID() {
            return this.id;
        }

        public void setID(int id) {
            this.id = id;
        }

        public int remainingSeats() {
            return seats.size();
        }

        public int takeSeat(int seatID) {
            seats.remove(seatID);
            return seats.size();
        }

    }

}
