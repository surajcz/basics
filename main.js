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


// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
class Solution {
    getPairsCount(arr,n,k){
        let result = 0;
        arr.sort(function(a, b){return a-b})
        for (let i=0;i<n;i++) {
            let findElem = k - arr[i];
            if (findElem < 0) {
                break;
            }
            for (let j=i+1;j<n;j++) {
                if (arr[j] == findElem) {
                    result++;
                } else if (arr[j] > findElem) {
                    break;
                }
            }
        }
       return result;
    }
}

class Solution {
    getPairsCount(arr,n,k){
        let result = 0;
        let tally = {};
        for (let i=0;i<n;i++) {
            if (tally[arr[i].toString()]) {
                tally[arr[i].toString()] += 1;
            } else {
                tally[arr[i].toString()] = 1;
            }
        }
        for (let i = 0;i<n;i++) {
            let elemNeeded = k - arr[i];
            if (arr[i] == elemNeeded) {
                result += tally[elemNeeded.toString()] - 1;
            } else if (tally[elemNeeded.toString()]) {
                result += tally[elemNeeded.toString()];
            }
        }
       return result/2;
    }
}


// Given an array nums[] of size n, construct a Product Array P (of same size n) such that P[i] is equal to the product of all the elements of nums except nums[i]. Note: Try to solve this problem without using the division operation.
class Solution {
    productExceptSelf(nums,n){
      //code here
      let resultArr = [];
      let productAll = 1;
      let countZero = 0;
      for(let i=0;i<n;i++){
          if(nums[i]==0){
              countZero++;
              continue;
          }
          productAll = productAll * nums[i];
      }
      for(let i=0;i<n;i++){
          if(nums[i]==0 && countZero==1){
              resultArr[i]=productAll;
          } 
          else if(countZero>1 || (nums[i]!=0 && countZero==1)) {
              resultArr[i]=0;
          }
          else {
                 resultArr[i]=productAll/nums[i];
          }

      }
      
      return resultArr;
    }
}


// Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers. Note: Array should start with a positive number and 0 (zero) should be considered a positive element.
class Solution{
    rearrange(arr,n){
        //code here
        let resultArr = [];
        let posArr = [];
        let negArr = [];
        for(let i=0;i<n;i++){
            if(arr[i]<0){
                negArr.push(arr[i]);
                
            } else {
                posArr.push(arr[i]);
            }
        }
        
        if(posArr.length >= negArr.length){
            let j = 1;
            for(let i=0;i<negArr.length;i++){
                posArr.splice(j,0,negArr[i])
                j+=2;
            }
            resultArr = posArr;
        } else {
            let j = 0;
            for(let i=0;i<posArr.length;i++){
                negArr.splice(j,0,posArr[i])
                j+=2;
            }
            resultArr=negArr;
        }
        
        return resultArr;
    }
}


// Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts. 1) All elements smaller than a come first. 2) All elements in range a to b come next. 3) All elements greater than b appear in the end. The individual elements of three sets can appear in any order. You are required to return the modified array.

class Solution {
    threeWayPartition(array, a, b) {
        //your code here
        let front = [];
        let mid = [];
        let last = [];

        for (let elem of array) {
            if (elem < a) {
                front.push(elem);
            } else if (a <= elem && elem <= b) {
                mid.push(elem);
            } else if (elem > b) {
                last.push(elem);
            }
        }

        const resultArray = [...front, ...mid, ...last];
        for (let i = 0; i < array.length; i++) {
            array[i] = resultArray[i];
        }

        return array;
    }
}

// slower solution
class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(array, a, b)
    {
        //your code here
        let resultArr=[];
        let smallerIndex = 0;
        for(let i=0;i<array.length;i++){
            if(array[i]<a){
                resultArr.splice(smallerIndex,0,array[i]);
                smallerIndex++;
            } else if(array[i]>=a && array[i]<=b){
                resultArr.splice(smallerIndex,0,array[i]);
            } else {
                resultArr.splice(resultArr.length,0,array[i]);
            }
        }
        
        for (let i = 0; i < array.length; i++) {
            array[i] = resultArr[i];
        }
        
        return array;
    }
}


//Smallest subarray with sum greater than x
//Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value. If such a subarray do not exist return 0 in that case.
class Solution {

    smallestSubWithSum(a,n,x){
        // Initialize current sum and minimum length
        let curr_sum = 0, min_len = n+1;
     
        // Initialize starting and ending indexes
        let start = 0, end = 0;
        while (end < n)
        {
            // Keep adding array elements while current sum
            // is smaller than x
            while (curr_sum <= x && end < n)
                curr_sum += a[end++];
     
            // If current sum becomes greater than x.
            while (curr_sum > x && start < n)
            {
                // Update minimum length if needed
                if (end - start < min_len)
                    min_len = end - start;
     
                curr_sum -= a[start++];
            }
        }
        
        if(min_len>n)
        return 0;
        return min_len;
    }
}


//Count More than n/k Occurences
//Given an array arr of size N and an element k. The task is to find the count of elements in the array that appear more than n/k times.
class Solution
{
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k)
    {
        //your code here
        let greaterThan = n/k;
        let resultArr = [];
        let tally = {}
        
        for(let i=0;i<n;i++){
            
            if(tally[arr[i]]){
                tally[arr[i]] += 1;
            } else{
                tally[arr[i]] = 1;
            }
            // if(tally[arr[i]] > greaterThan && resultArr.indexOf(arr[i])<0){
            //         resultArr.push(arr[i]);
            // }
        }
        Object.keys(tally).forEach((value)=>{
            if(tally[value] > greaterThan){
                resultArr.push(value);
            }
        })
        return resultArr.length;
    
    }
}


//Maximize sum after K negations
//Given an array of integers of size N and a number K., You must modify array arr[] exactly K number of times. Here modify array means in each operation you can replace any array element either arr[i] by -arr[i] or -arr[i] by arr[i]. You need to perform this operation in such a way that after K operations, the sum of the array must be maximum.
class Solution {
    maximizeSum(arr,n,k){
       //code here
       arr.sort(function(a, b){return a-b});
       for(let i=0;i<n;i++){
           if(k==0){
               break;
           }
           if(arr[i]<0){
               arr[i] = -arr[i];
               k--;
           } else{
               break;
           }
       }
       
       arr.sort(function(a, b){return a-b});
       
       while(k>0){
           arr[0] = -arr[0];
           k--;
       }
       
       return arr.reduce((accumulator, currentValue)=> {
            return accumulator + currentValue;
        }, 0)
    }
}

