package Bank_App;

import java.util.ArrayList;
import java.util.Scanner;

public class Bank implements TransactionHistory{
    private double balance;
    private double depositAmount;
    private double withdrawalAmount;

    public Bank() {
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void setDepositAmount(double depositAmount) {
        this.depositAmount = depositAmount;
    }

    public void setWithdrawalAmount(double withdrawalAmount) {
        this.withdrawalAmount = withdrawalAmount;
    }

    public double getBalance() {
        return balance;
    }

    public double getDepositAmount() {
        return depositAmount;
    }

    public double getWithdrawalAmount() {
        return withdrawalAmount;
    }

    @Override
    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Sorry, you cannot deposit that amount");
        } else {
            balance += amount;
            System.out.println("Deposited: $" + amount + ", Balance: $" + balance);
        }
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Sorry, you cannot withdraw a negative amount!!");
        } else {
            if (amount > balance) {
                System.out.println("Insuffucient Funds!!");
            } else {
                balance -= amount;
                System.out.println("Withdrawed: $" + amount + ", Balance: $" + balance);
            }
        }
    }

    @Override
    public void balance() {
        System.out.println("Your balance is $" + balance);
    }

    @Override
    public void transactionHistory() {
        ArrayList<String> lists = new ArrayList<>();
        lists.add("Nothing");
        for (String list : lists) {
            System.out.println(list);
        }
    }

    public void bankingTime() {
        while (balance > 0) {
            System.out.println("Welcome back to our bank!");
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. View Balance");
            System.out.println("4. Show transaction history");
            System.out.println("5. Exit");
            System.out.print("Please select a choice: ");

            Scanner scanner = new Scanner(System.in);
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter amount: ");
                    int amount = scanner.nextInt();
                    deposit(amount);
                    break;

                case 2:
                    System.out.print("Enter amount: ");
                    int amounts = scanner.nextInt();
                    withdraw(amounts);
                    break;

                case 3:
                    balance();
                    break;

                case 4:
                    break;

                case 5:
                    System.exit(0);
                    break;

                default:
                    System.out.println("Nothing here");
                    break;
            }

            scanner.close();

        }
    }

}
