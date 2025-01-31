package Java_Full_Stack.OOPs;

import java.util.Scanner;

class Ticket {
    private int ticketid;
    private int price;
    private static int availableTickets;

    public int getTicketid() {
        return ticketid;
    }

    public void setTicketid(int ticketid) {
        this.ticketid = ticketid;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public static int getAvailableTickets() {
        return availableTickets;
    }

    public static void setAvailableTickets(int availableTickets) {
        Ticket.availableTickets = availableTickets;
    }

    public int calculateTicketCost(int nooftickets) {
        if (availableTickets <= 0) {
            return -1; // House full or no tickets
        }
        if (availableTickets < nooftickets) {
            return -1; // Not enough tickets
        } else {
            int totalAmount = nooftickets * price;
            availableTickets -= nooftickets;
            return totalAmount;
        }
    }
}

 class UserInterface {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter movie name");
        String movieName = scanner.nextLine();

        System.out.println("Enter no of bookings");
        int noOfBookings = scanner.nextInt();

        System.out.println("Enter the available tickets");
        int availableTickets = scanner.nextInt();
        Ticket.setAvailableTickets(availableTickets);
        scanner.nextLine(); // Consume newline

        for (int i = 0; i < noOfBookings; i++) {
            System.out.println("Enter the ticketid");
            int ticketId = scanner.nextInt();

            System.out.println("Enter the price");
            int price = scanner.nextInt();

            System.out.println("Enter the no of tickets");
            int noOfTickets = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            Ticket ticket = new Ticket(); // Use default constructor
            ticket.setTicketid(ticketId);
            ticket.setPrice(price);


            System.out.println("Available tickets: " + Ticket.getAvailableTickets());

            int totalAmount = ticket.calculateTicketCost(noOfTickets);

            if (totalAmount == -1 && Ticket.getAvailableTickets() <= 0) {
                System.out.println("House full");
                return; // Stop processing further bookings if house full
            } else if (totalAmount == -1) {
                System.out.println("Tickets are not available");
            } else {
                System.out.println("Total amount: " + totalAmount);
                System.out.println("Available ticket after booking: " + Ticket.getAvailableTickets());
            }
        }

        scanner.close();
    }
}
