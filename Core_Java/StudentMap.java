
import java.util.HashMap;
import java.util.Scanner;

public class StudentMap {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner sc = new Scanner(System.in);

        students.put(1, "Alice");
        students.put(2, "Bob");

        System.out.print("Enter student ID to search: ");
        int id = sc.nextInt();

        if (students.containsKey(id)) {
            System.out.println("Student: " + students.get(id));
        } else {
            System.out.println("Student not found.");
        }
        sc.close();
    }
}

