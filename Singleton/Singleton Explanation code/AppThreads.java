public class AppThreads implements Runnable{
    @Override
    public void run() {
        Principal p = Principal.getPrincipal();
        
        System.out.println(p+"---This is from "+Thread.currentThread().getName());
    } 
}