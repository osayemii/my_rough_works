public class AreaOfRect {
    double width;
    double height;

    void displayDimension(double width, double height) {
        System.out.println("Width: " + width);
        System.out.println("Height: " + height);

        calculateArea(width, height);
        calculatePerimeter(width, height);
    }

    void calculateArea(double width, double height) {
       System.out.println("Area: " + width * height);
    }

    void calculatePerimeter(double width, double height) {
        double perimeter = 2 * (width + height);
        System.out.println("Perimeter: " + perimeter);
    }

    public static void main(String[] args) {
        AreaOfRect rectangle1 = new AreaOfRect();

        rectangle1.displayDimension(10, 5);
    }
}
