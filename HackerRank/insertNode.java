// Day 15: Linked List 
public static  Node insert(Node head, int data) {
        //Complete this method
        Node n = new Node(data);
        if(head == null){
            head = n;
            return head;
        }
        Node temp = head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = n;
        return head;
    }
