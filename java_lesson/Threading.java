import java.util.Scanner;

public class Threading {
    
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);

        System.out.println("You have 5 seconds to enter your name!");
        
        RunnableThread myRunnable = new RunnableThread();
        Thread thread = new Thread(myRunnable);
        thread.setDaemon(true);
        thread.start();
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Welcome " + name);

        scanner.close();
    }
}
