import java.util.Scanner;

public class Application {
    public static void main(String[] args) throws CloneNotSupportedException {
        Registry reg=new Registry();
        Scanner sc=new Scanner(System.in);
        
        System.out.println("Enter your Order Type:");
        String type=sc.next();
        System.out.println("Enter your Quantity");
        int quantity=sc.nextInt();
        
        Dress order=reg.getclone(type);
        order.setQuantity(quantity);
        
        System.out.println("Your Order is "+order.getQuantity()+" "+order.toString());
        System.out.println("The unit price of a "+order.toString()+" is "+order.getUnitPrice()+" LKR");
        System.out.println("Your Total price is: "+order.calculateBill()+" LKR");
    }
}
