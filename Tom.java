import java.util.Scanner;

public class Tom{
public static void main(String args[]){
	int noof_hop=0;
	int rest_duration=0;
	int hop_length[]={5,3,1};
	int hop_rest[]={1,2,5};
	int length=0;
	
	Scanner s=new Scanner(System.in);

	System.out.print("Enter The Length: ");
	try{
		length=s.nextInt();
	}catch(Exception e){
		System.out.println("Please Enter a valid length next time");
		return;
	}

	while(true){
		length-=hop_length[noof_hop++%3];
		if(length<=0)break;
		rest_duration+=hop_rest[(noof_hop-1)%3];
		
	}
	
	System.out.println("No of hops: "+noof_hop);
	System.out.println("Total rest duration: "+rest_duration);
}}