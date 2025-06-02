import java.util.Scanner;

public class EvenOddChecker {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter an integer: ");
        int number = scan.nextInt();

        if (number % 2 == 0)
            System.out.println("Even");
        else
            System.out.println("Odd");

        scan.close();
    }
}

