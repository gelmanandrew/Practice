/*
Stacks
- A stack is a data structure that uses a principle called Last-In-First-Out (LIFO),
meaning that the last object added to the stack must be the first object removed
from it.
- At minimum, any stack, s, should be able to perform the following three
operations:
    Peek: Return the object at the top of the stack (without removing it).
    Push: Add an object passed as an argument to the top of the stack.
    Pop: Remove the object at the top of the stack and return it.
- The java.util package has a Stack class that implements these methods; check
out the documentation (linked above) on the peek(), push(object), and pop()
methods.

Queues
- A queue is a data structure that uses a principle called First-In-First-Out
(FIFO), meaning that the first object added to the queue must be the first object
removed from it. You can analogize this to a checkout line at a store where the
line only moves forward when the person at the head of it has been helped, and
each person in the line is directly behind the person whose arrival immediately
preceded theirs.
- At minimum, any queue, q, should be able to perform the following two operations:
    Enqueue: Add an object to the back of the line.
    Dequeue: Remove the object at the head of the line and return it; the element
    that was previously second in line is now at the head of the line.
- The java.util package has a Queue interface that can be implemented by a number
of classes, including LinkedList. Much like abstract classes, interfaces cannot
be instantiated so we must declare a variable of type Queue and initialize it to
reference a new LinkedList object. Check out the documentation (linked above) on
the add(object) (enqueue) and remove() (dequeue) methods. You'll learn more about
interfaces tomorrow! */
import java.io.*;
import java.util.*;
public class QueueStack {
    // Write your code here.
    Stack<Character> stack = new Stack<>();
    Queue<Character> queue = new LinkedList<>();

    void pushCharacter(char ch){
        stack.push(ch);
    }

    void enqueueCharacter(char ch){
        queue.add(ch);
    }

    char popCharacter(){
        return stack.pop();
    }

    char dequeueCharacter(){
        return queue.remove();
    }

// all below was provided
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        scan.close();

        // Convert input String to an array of characters:
        char[] s = input.toCharArray();

        // Create a Solution object:
        QueueStack p = new QueueStack();

        // Enqueue/Push all chars to their respective data structures:
        for (char c : s) {
            p.pushCharacter(c);
            p.enqueueCharacter(c);
        }

        // Pop/Dequeue the chars at the head of both data structures and compare them:
        boolean isPalindrome = true;
        for (int i = 0; i < s.length/2; i++) {
            if (p.popCharacter() != p.dequeueCharacter()) {
                isPalindrome = false;
                break;
            }
        }

        //Finally, print whether string s is palindrome or not.
        System.out.println( "The word, " + input + ", is "
                           + ( (!isPalindrome) ? "not a palindrome." : "a palindrome." ) );
    }
}
