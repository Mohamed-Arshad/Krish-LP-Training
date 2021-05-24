public class Principal {
    private static Principal principal;
    //Instance will created when required 

    private Principal() {
        if(principal!=null){
            throw new RuntimeException("Please use getPrincipal method");
        }
    }

    public static Principal getPrincipal() {
        if(principal==null){
            synchronized(Principal.class){
                if(principal==null){
                    principal=new Principal();
                }
            }
        }
        return principal;
    }
}