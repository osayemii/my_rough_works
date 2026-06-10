public class Tesla {
    
    String model;
    int wheels;
    long id;
    String color;

    Tesla() {
        wheels = 4;
        id = 0003;
    }

    Tesla(String newModel, String newColor) {
        model = newModel;
        color = newColor;
    }

    public static void main(String[] args) {
        Tesla t1 = new Tesla();
        Tesla t2 = new Tesla("2012 Model", "blue");

        t1.model = "2025 Model";

        System.out.println("Car1 model: "+t1.model);
        System.out.println("Car2 model: "+t2.model);
        System.out.println("Car2 color: "+t2.color);
        System.out.println("Car1 id: "+t1.id);
        System.out.println("Car1 wheels: "+t1.wheels);
    }
}
