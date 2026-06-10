public class Toyota {
    // Toyota instance variables
    String model;
    float lenght;
    float width;
    float height;
    String color;

    // No-Argument Constructor
    Toyota (){
        model = "Camry";
        lenght = 54.5f;
        width = 18.2f;
        height = 15.0f;
    }

    Toyota (String newColor, float newLenght, float newWidth, float newHeight){
        color = newColor;
        if (lenght < 50) {
            model = "Corolla Midi";
        }
    }

    public static void main (String[] args) {
        // create a new toyota cars
        Toyota car1 = new Toyota();
        Toyota car2 = new Toyota("blue", 45, 145, 42);
        Toyota car3 = new Toyota("blue", 45, 145, 42);
        
        //Re-assign the model variable to corolla
        car2.model = "Corolla";
        
        // print car properties
        System.out.println("Car Model: " + car1.model);
        System.out.println("Car Color: " + car1.color);
        System.out.println("Car Length: " + car1.lenght);
        System.out.println("Car2 Model: " + car2.model);
        System.out.println("Car3 Model: " + car3.model);
    }
}