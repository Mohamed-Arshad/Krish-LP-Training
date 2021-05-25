import java.util.HashMap;
import java.util.Map;

public class Registry {
    
    private Map<String,Dress> registry;

    public Registry() {
        registry=new HashMap<>();
        initialize();
    }
    
    private void initialize(){
        Dress Tshirt=new Tshirt();
        registry.put("Tshirt", Tshirt);
        Dress denim=new Denim();
        registry.put("Denim", denim);
    }
    
    public Dress getclone(String dressType) throws CloneNotSupportedException{
        return (Dress)registry.get(dressType).clone();
    }
}
