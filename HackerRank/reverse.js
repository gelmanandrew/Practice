// Interview Preparation Kit -> Linked Lists -> Reverse a doubly
function reverse(head) {
    var temp = null;
    var current = head;
    while(current !== null){
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }
    if(temp !== null){
        head = temp.prev;
    }
    return head;
}
