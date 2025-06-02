
import java.sql.*;

public class BankTransaction {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection("jdbc:sqlite:bank.db")) {
            conn.setAutoCommit(false);

            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");

            debit.setDouble(1, 100);
            debit.setInt(2, 1);
            credit.setDouble(1, 100);
            credit.setInt(2, 2);

            debit.executeUpdate();
            credit.executeUpdate();

            conn.commit();
            System.out.println("Transfer successful.");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

