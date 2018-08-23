import java.io.*;
import java.util.*;

public class Day6 {
    //printing the even-indexed and odd-indexed characters of a string
    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();           // the first integer in the input
        sc.nextLine();

        for(int i = 0; i < N; i++){              // loops through the words under the integer
            String word = sc.nextLine();
            char[] letters = word.toCharArray(); // turns the word into an array of chars

            for(int j = 0; j < letters.length; j++){
                if(j % 2 == 0){                    // even
                    System.out.print(letters[j]);
                }
            }
            System.out.print(" ");

            for(int j = 0; j < letters.length; j++){
                if(j % 2 != 0){
                    System.out.print(letters[j]);
                }
            }
            System.out.println();
        }
        sc.close();
    }
}
