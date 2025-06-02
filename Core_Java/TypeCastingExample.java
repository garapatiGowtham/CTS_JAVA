
public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.78;
        int myInt = (int) myDouble;  // Narrowing casting

        int num = 10;
        double newDouble = num;      // Widening casting

        System.out.println("Double to int: " + myInt);
        System.out.println("Int to double: " + newDouble);
    }
}

