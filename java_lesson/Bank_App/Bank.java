package Bank_App;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.NoSuchElementException;

public class Bank implements TransactionHistory {
    private double balance;
    private double depositAmount;
    private double withdrawalAmount;
    ArrayList<String> lists = new ArrayList<>();

    // Colors
    private static final String DEFAULT = "\u001B[0m";
    private static final String RED = "\u001B[31m";
    private static final String GREEN = "\u001B[32m";
    private static final String YELLOW = "\u001B[33m";
    private static final String BLUE = "\u001B[34m";

    public Bank() {
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void setDepositAmount(double depositAmount) {
        this.depositAmount = depositAmount;
        lists.add("Deposited: " + depositAmount);
    }

    public void setWithdrawalAmount(double withdrawalAmount) {
        this.withdrawalAmount = withdrawalAmount;
        lists.add("Withdrawed: " + withdrawalAmount);
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
            System.out.println(YELLOW + "Sorry, you cannot deposit that amount" + DEFAULT);
        } else {
            balance += amount;
            System.out.println(GREEN + "You have successfully deposited: $" + amount + DEFAULT);
            lists.add("Deposited: $" + amount);
        }
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println(YELLOW + "Sorry, you cannot withdraw a negative amount!!" + DEFAULT);
        } else {
            if (amount > balance) {
                System.out.println(YELLOW + "Insuffucient Funds!!" + DEFAULT);
                lists.add("Insufficient funds of " + amount);
            } else {
                balance -= amount;
                System.out.println(GREEN + "You have successfully withdrawed: $" + amount + DEFAULT);
                lists.add("Withdrawed: $" + amount);
            }
        }
    }

    @Override
    public void balance() {
        System.out.println(GREEN + "Your balance is $" + balance + DEFAULT);
    }

    @Override
    public void transactionHistory() {
        // lists.add("Nothing");
        if (lists.size() == 0) {
            System.out.println(YELLOW + "No transaction to view yet" + DEFAULT);
        } else {
            for (String list : lists) {
                System.out.println(GREEN + ". "+ list + DEFAULT);
            }
        }
    }

    public void bankingTime() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println(BLUE + "======= WELCOME BACK =======");
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. View Balance");
            System.out.println("4. Show transaction history");
            System.out.println("5. Exit");
            System.out.println(BLUE + "============================");
            
            System.out.print("Please select a choice: " + DEFAULT);

            try {
                int choice = scanner.nextInt();
                switch (choice) {
                    case 1:
                        System.out.print(GREEN + "Enter amount: " + DEFAULT);
                        double amount = scanner.nextDouble();
                        deposit(amount);
                        break;

                    case 2:
                        System.out.print(GREEN + "Enter amount: " + DEFAULT);
                        double amounts = scanner.nextDouble();
                        withdraw(amounts);
                        break;

                    case 3:
                        balance();
                        break;

                    case 4:
                        transactionHistory();
                        break;

                    case 5:
                        System.out.println(GREEN + "Closing system..." + DEFAULT);
                        try {
                            Thread.sleep(500);
                        } catch (InterruptedException e) {
                            System.out.println(RED + "Error: " + e.getMessage() + DEFAULT);
                        }
                        System.exit(0);
                        scanner.close();
                        break;

                    default:
                        System.out.println(YELLOW + "Please enter a valid choice!" + DEFAULT);
                        break;
                }

            } catch (NoSuchElementException e) {
                System.out.println(RED + "Error: " + e.getMessage() + DEFAULT);
            }

        }
    }

}
