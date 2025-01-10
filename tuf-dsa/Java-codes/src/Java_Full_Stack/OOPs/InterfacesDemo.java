package Java_Full_Stack.OOPs;
/*

Interface - Blueprint of the class used by the (Implements) keyword

- All methods are public,abstract and without implementation
- Used to achieve total abstraction
- Variables in the interface are final,public and Static

Multiple Inheritance

To acheive 100% abstraction

 */
public class InterfacesDemo {
    public static void main(String[] args) {
        Queen q=new Queen();
        q.moves();
    }
}

interface chessPlayer{
    void moves();
}

class Queen implements chessPlayer{
    public void moves(){
        System.out.println("up,down,left,right, diagonal in all 4 directions");
    }
}

class Rook implements chessPlayer{
    public void moves(){
        System.out.println("up,down,left,right");
    }
}

class King implements chessPlayer{
    public void moves(){
        System.out.println("Moves by 1 place in all direction");
    }
}