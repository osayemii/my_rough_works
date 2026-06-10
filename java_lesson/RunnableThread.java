public class RunnableThread implements Runnable {
    
    @Override
    public void run() {
        for (int i = 0; i <= 5; i++) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.err.println("Error: "+ e.getMessage());
            }

            if (i == 5) {
                System.out.println("Times up!!");
                System.exit(0);
            }
        }
        
    }
}
