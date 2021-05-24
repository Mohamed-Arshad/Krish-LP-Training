public class School {
    public static void main(String[] args) throws InterruptedException{
        
        Thread t1=new Thread(new AppThreads());
        Thread t2=new Thread(new AppThreads());
        
        t1.start(); //exectes t1 thread
        t2.start(); //exectes t2 thread
        
        //if main thread creating 1st singleton instance, then object creation time may high
        //if either t1 or t2 created 1st singleton instance, then object return time should  low
        long start_time=System.currentTimeMillis();
        Principal p = Principal.getPrincipal();
        long end_time=System.currentTimeMillis();
       
        System.out.println(p+"---This is Object 'p', Object creation time: "+(end_time-start_time));
        
        t1.join(); //t1 ends & joins with main
        t2.join(); //t2 ends & joins with main
        
        //now only main thread is active, singleton instance is already created above, object return time should low
        long start_time1=System.currentTimeMillis();
        Principal q = Principal.getPrincipal();
        long end_time1=System.currentTimeMillis();
       
        System.out.println(q+"---This is Object 'q', Object creation time: "+(end_time1-start_time1));
    }
}