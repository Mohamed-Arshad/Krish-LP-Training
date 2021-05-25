public class Logger {

    private static Logger logger;
    private String log = "";

    private Logger() {
        if (logger != null) {
            throw new RuntimeException("Please use getLog method");
        }
    }

    public static Logger getLogger() {
        if (logger == null) {
            synchronized (Logger.class) {
                if (logger == null) {
                    logger = new Logger();
                }
            }
        }
        return logger;
    }
    public void setLog(String log){
        this.log+=log+"\n";
    }

    public String getLog() {
        return log;
    }
}
