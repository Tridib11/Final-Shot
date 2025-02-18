package Java_Full_Stack.Exception_Handling.Custom_Exception;

public class ValidateAge {
    public static void main(String[] args) throws AgeLessThanZeroException {
        validate_Age(-1);
    }
    private static void validate_Age(int age) throws AgeLessThanZeroException{
        if(age<0){
            throw new AgeLessThanZeroException("Age cannot be less than zero");
        }
    }
}
