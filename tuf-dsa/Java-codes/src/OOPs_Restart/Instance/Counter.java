package OOPs_Restart.Instance;

public class Counter {
    int instanceCount = 0;        // instance variable -> new copy for every object
    static int staticCount = 0;   // static variable -> one copy shared across all

    public void increment() {
        instanceCount++;
        staticCount++;
        System.out.println("instanceCount: " + instanceCount + ", staticCount: " + staticCount);
    }

    public static void main(String[] args) {
        Counter a = new Counter(); // Object 1
        Counter b = new Counter(); // Object 2

        System.out.println("Calling increment on object 'a'");
        a.increment(); // instanceCount: 1, staticCount: 1

        System.out.println("Calling increment on object 'b'");
        b.increment(); // instanceCount: 1, staticCount: 2

        System.out.println("Calling increment on object 'a' again");
        a.increment(); // instanceCount: 2, staticCount: 3
    }
}

