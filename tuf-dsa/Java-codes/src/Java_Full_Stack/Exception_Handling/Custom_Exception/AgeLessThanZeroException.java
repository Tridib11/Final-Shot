package Java_Full_Stack.Exception_Handling.Custom_Exception;

public class AgeLessThanZeroException extends Exception{
    public AgeLessThanZeroException(String message){
        super(message);
    }
}
