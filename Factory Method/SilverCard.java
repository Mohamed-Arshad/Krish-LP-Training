public class SilverCard extends CardType{
    public SilverCard() {
        setCreditLimit();
    } 
    @Override
    public void setCreditLimit() {
       CreditLimit=100000;
    }   
}
