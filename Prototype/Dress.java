public abstract class Dress implements Cloneable{
    private int quantity=0;
    private double unitPrice=0;

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice){
        this.unitPrice=unitPrice;
    }
    
    public double calculateBill(){
        return unitPrice*quantity;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    public String toString() {
        return this.getClass().getSimpleName();
    }
}
