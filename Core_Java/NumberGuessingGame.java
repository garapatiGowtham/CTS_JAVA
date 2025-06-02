
import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rand = new Random();

        int secretNumber = rand.nextInt(100) + 1;
        int guess = 0;

        System.out.println("Guess the number between 1 and 100:");

        while (guess != secretNumber) {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();

            if (guess < secretNumber)
                System.out.println("Too low!");
            else if (guess > secretNumber)
                System.out.println("Too high!");
            else
                System.out.println("Congratulations! You guessed it!");
        }

        sc.close();
    }
}
