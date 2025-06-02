
public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2; // Multiplication happens before addition
        System.out.println("Result: " + result); // 10 + (5*2) = 20

        int complex = (10 + 5) * 2;
        System.out.println("Complex Result: " + complex); // (10+5)*2 = 30
    }
}

