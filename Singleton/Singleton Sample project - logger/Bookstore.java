import java.util.ArrayList;

public class Bookstore {
    private ArrayList<Books> books;

    public Bookstore() {
        books=new ArrayList<>();
    }
    
    public void addBook(Books book){
        books.add(book);
        String log="Id: "+book.getId()+" book is added. Book Name: "+book.getName();
        Logger.getLogger().setLog(log);
    }
    
    public void removeBook(int id){
        for(int i=0;i<books.size();i++){
            if(books.get(i).getId()==id){
                Books book=books.remove(i);
                String log="Id: "+book.getId()+" book is removed";
                Logger.getLogger().setLog(log);
            }
        }
    }
    
    public void updateBook(int id,String name){
        for(int i=0;i<books.size();i++){
            if(books.get(i).getId()==id){
                Books book=books.get(i);
                String oldName=book.getName();
                book.setName(name);
                String log="Id: "+book.getId()+" book is updated. old name: "+oldName+" New name: "+name;
                Logger.getLogger().setLog(log);
            }
        }
    }
    
    public void viewAvailableBooks(){
        for(int i=0;i<books.size();i++){
            System.out.println("Book ID: "+books.get(i).getId()+" Book Name: "+books.get(i).getName());
        }
    }
}
