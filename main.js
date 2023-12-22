// JS script

class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    add(elem) {
        let newNode = new node(elem);
        
        if (!this.head) {
            this.head = newNode;
            this.size++;
            console.log("After adding", newNode, ", size of linked list", this.size)
            return;
        } 
        
        let curr = this.head;
        let prev = null;
        
        while (curr) {
            prev = curr;
            curr = curr.next;
        }
        
        this.size++;
        prev.next = newNode;
        
        console.log("After adding", newNode, ", size of linked list", this.size)
    }
    
    printList() {
        let display = "";
        let curr = null;
        
        if (!this.head) {
            console.log('List is empty!');
            return;
        }
        
        curr = this.head;
        
        while (curr) {
            display += curr.data + " ";
            curr = curr.next;
        }
        
        console.log(display);
    }
    
    firstOccur(elem) {
        let count = 0;
        let curr = null;
        
        if (!this.head) {
            console.log('Not present in the list');
            return;
        }
        
        curr = this.head;
        
        while (curr) {
            if (curr.data == elem) {
                console.log(elem, "occurs for the first time at", count);
                break;
            }
            count++;
            curr = curr.next;
        }
    }
    
    insertAt(elem, index) {
        let prev = null;
        let curr = null;
        let count = 0;
        let newNode = new node(elem);
        
        if (index < 0 || index >= this.size) {
            console.log('Enter a valid index');
            return;
        }
        
        curr = this.head;
        
        while (curr) {
            if (count == index) {
                if (index == 0) {
                    newNode.next = this.head;
                    this.head = newNode;
                    break;
                }
                prev.next = newNode;
                newNode.next = curr;
                break;
            }
            
            prev = curr;
            curr = curr.next;
            count++;
        }
        
        this.size++;
        console.log('After inserting, length', this.size);
    }
    
    length() {
        console.log(this.size);
    }
    
    isEmpty() {
        console.log(this.size == 0);
    }
}

let ll = new linkedList();

ll.printList();
ll.length();
ll.isEmpty();
ll.add(10);
ll.insertAt(101, 0);
ll.printList();
ll.add(20);
ll.isEmpty();
ll.add(50);
ll.add(20);
ll.length();
ll.printList();
ll.firstOccur(10);
ll.firstOccur(50);
ll.insertAt(55, 3);
ll.printList();




// Palindrome checker
class Solution {
    
    PalinArray(arr,n){
        let palin = 1;
        for(let i=0;i<n;i++) {
            let toCheck = arr[i].toString().split('');
            if (toCheck.length%2 == 0) {
                let j = 0;
                do {
                    if (!(toCheck[j] == (toCheck[toCheck.length-j-1]))) {
                        
                        palin = 0;
                        break;
                    }
                    j++;
                }
                while (j<(toCheck.length/2));
            } else {
                for (let j=0;j<((toCheck.length-1)/2);j++) {
                    if (!(toCheck[j] == (toCheck[toCheck.length-j-1]))) {
                        palin = 0;
                        break;
                    }
                }
            }
            
            if (palin == 0) {
                break;
            }
        }
        return palin;
    }
}


// Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted. There can be duplicate elements.
class Solution{
    isSubset(a1, a2, n, m){
        let result = "Yes";
        for(let i=0;i<m;i++) {
            let elem = a2[i];
            let isIndex = a1.indexOf(elem);
            if(isIndex == -1) {
                result = "No";
                break;
            } else {
                a1.splice(isIndex, 1);
            }

        }
        return result;
    }
}



