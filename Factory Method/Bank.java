import java.util.Scanner;

public class Bank {
    public static void main(String[] args) {
        String cardtype="";
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your salary :");
        double salary=sc.nextDouble();
        
        if(salary<50000){
            cardtype="Silver";
        }else if(salary <100000){
            cardtype="Gold";
        }else{
            cardtype="Platinum";
        }
        
        CardType mycard=Factory.getcard(cardtype);
        System.out.println(mycard);
    }  
}
