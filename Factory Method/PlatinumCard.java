public class PlatinumCard extends CardType{
    public PlatinumCard() {
        setCreditLimit();
    } 
    @Override
    public void setCreditLimit() {
        CreditLimit=500000;
    } 
}
