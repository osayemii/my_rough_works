public class Rectangle {

    int width;
    int height;

    Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public static void main(String[] args) {
        Rectangle rect1 = new Rectangle(10, 20);
        Rectangle rect2 = new Rectangle(6, 9);

        String rectName = "rectA";
        System.out.println(rectName);

        System.out.println("Rectangle 1 -> Width: " + rect1.width + ", Height: " +rect1.height);
        System.out.println("Rectangle 2 -> Width: " + rect2.width + ", Height: " +rect2.height);
    }
}