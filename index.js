//Missing number in array
//Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
class Solution{
    missingNumber(array,n){
        //code here
        let arrSum = n*(n+1)/2;
        
        for(let i=0;i<array.length;i++){
            arrSum-=array[i];
        }    
            
        // array.sort((a,b)=>a-b)
        // for(let i=0;i<n;i++){
        //     if(array[i]!=i+1){
        //         result =i+1;
        //         break;
        //     }
            
        // }
        return arrSum;
    }
}

//Equilibrium Point
//Given an array A of n non negative numbers. The task is to find the first equilibrium point in an array. Equilibrium point in an array is an index (or position) such that the sum of all elements before that index is same as sum of elements after it. Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 
class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        //your code here
        let result = -1;
        let sumFromRight = a.reduce((total,elem)=>{
            return total+elem;
        },0);
        let sumFromLeft = 0;
        
        for(let i=0;i<a.length;i++){
            sumFromRight-=a[i];
            if(i==0 && sumFromRight==0){
                result = i+1;
                break;
            } else if(i==0){
                continue;
            }
            sumFromLeft+=a[i-1];
            if(sumFromLeft==sumFromRight){
                result = i+1;
                break;
            }
        }
        
        return result;
    }
}

//Leaders in an array
//Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is a leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 
class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
        let resultArr =[];
        let max=arr[n-1];
        
        for(let i=n-1;i>=0;i--){
            if(arr[i]>=max){
                resultArr.push(arr[i]);
                max=arr[i];
            }
        }
        
        return resultArr.reverse();
    }
}


//Maximize sum(arr[i]*i) of an Array
//Given an array A of N integers. Your task is to write a program to find the maximum value of ∑arr[i]*i, where i = 0, 1, 2,., n 1. You are allowed to rearrange the elements of the array. Note: Since output could be large, hence module 109+7 and then print answer.
class Solution {
    Maximize(arr,n){
       //code here
       let maxValue = 0;
       arr.sort((a,b)=>a-b);
       for(let i=0;i<arr.length;i++){
           maxValue+=arr[i]*i;
       }
       return maxValue%(10**9+7);
    }
}



