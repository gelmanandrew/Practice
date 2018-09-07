import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class ParseInt {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String S = in.next();
        try{
          int value = Integer.parseInt(S);
          System.out.println(value);
        }
        catch(Exception e)
        {
          System.out.println("Bad String");
        }
    }
}

/*

input

3

output

3


input

za

output

Bad String
*/
