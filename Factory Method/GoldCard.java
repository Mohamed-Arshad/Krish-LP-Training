public class GoldCard extends CardType{
    public GoldCard() {
        setCreditLimit();
    } 
    @Override
    public void setCreditLimit() {
        CreditLimit=250000;
    } 
}
