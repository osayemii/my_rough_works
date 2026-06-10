import java.util.Scanner;

public class GenericClass<T, F> {
    
    T name;
    F age;

    public static void main(String[] args) {
        GenericClass<String, Integer> number = new GenericClass<>();
        
        Scanner scanner = new Scanner(System.in);

        number.name = scanner.nextLine();
        number.age = 10;
        
        var newName = number.name;
        var newAge = number.age;

        System.out.println(newName + " is " + newAge + " years old.");

        scanner.close();
    }
}
