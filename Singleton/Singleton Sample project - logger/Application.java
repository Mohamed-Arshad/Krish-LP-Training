import java.util.Scanner;

public class Application {
    public static Scanner sc=new Scanner(System.in);
    public static Bookstore bs=new Bookstore();
    
    public static void main(String[] args) {
        int ans;
        boolean exit=false;
        
        while(!exit){
            System.out.println("------------------------------------");
            System.out.println("What do you want to do?");
            System.out.println("Add a book press 1");
            System.out.println("Remove a book press 2");
            System.out.println("Update a book press 3");
            System.out.println("view all available books press 4");
            System.out.println("view Log press 5");
            System.out.println("To exit press 0");
            System.out.println("Enter your answer: ");
            
            try{
                ans=sc.nextInt();
            }catch(Exception e){
                ans=10;
                sc.nextLine(); //this line will skip & avoid the above mis match charecter
            }
            
            switch(ans){
                case 0: exit=true;
                    break;
                case 1: addBook();
                    break;
                case 2: removeBook();
                    break;
                case 3: updateBook();
                    break;
                case 4: bs.viewAvailableBooks();
                    break;
                case 5: System.out.println(Logger.getLogger().getLog());
                    break;
                default:
            }
            System.out.println("------------------------------------");
        }
    }

    private static void addBook() {
        System.out.println("Enter Book ID: ");
        int id=sc.nextInt();
        System.out.println("Enter Book Name: ");
        sc.nextLine(); //this line will skip (it take \n above)
        String name=sc.nextLine();
        bs.addBook(new Books(id, name));
    }

    private static void removeBook() {
        System.out.println("Enter book ID that you want to remove: ");
        bs.removeBook(sc.nextInt());
    }

    private static void updateBook() {
        System.out.println("Enter book ID that you want to update: ");
        int id=sc.nextInt();
        System.out.println("Enter New name of the book: ");
        sc.nextLine(); //this line will skip (it take \n above)
        String newName=sc.nextLine();
        bs.updateBook(id, newName);
    }
}
