/*

What is the merger sort  ? 
merge sort is a  highly efficient  comparision-based asorting alogrithm , it is based on the Divide and conquer paradiagm it sovles
a big problem by breaking it down into smaller , easier-to-solve sub-problems. 
unlike bubble insertion or sletion sort which  all take O(n^2) time in the worst case Merge sort gurantees a much faster time complexity of O(n log n) in all situations. 

 the core Concept : Divide and conquer 
 merge sort breaks the sortung process into two distinct pahses: 
 
   Divide: split the unsorted array in half repeeadtly until you have sub-array that contiat only a single element ( A single element is naturally sorted)
   Conquer(Merge): Takes those tiny sorted sub array and merge them back togher in the correct sorte order, building them up unti you have the fina; fully ssorted array. 

A step by  step example 
let's look at how merge sort handles the array [38,27,43,3]: 
Divide Phase: 
Split [38, 27, 43, 3] into [38, 27] and [43, 3].

Split [38, 27] into [38] and [27].

Split [43, 3] into [43] and [3].
Now every element is an individual, single-element array.

Conquer / Merge Phase:
Merge [38] and [27] in order ---> [27, 38]
Merge [43] and [3] in order ----> [3, 43]

Merge the two sorted pairs [27, 38] and [3, 43] together by
Comparing their fornt element one by one --> [3,27,43,38]->[3,27,38,43]

 */

const merge=(left,right)=>{
    let result=[]; 
    let j=0
    let i=0 
    while(i<left.length && j<right.length)
    {
        if(left[i]<=right[j])
        {
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}
const mergeSort=(arr)=>{
     if (arr.length<=1) return arr 
     let mid=Math.floor(arr.length/2)
     let left = mergeSort(arr.slice(0,mid))
     let right=mergeSort(arr.slice(mid))
     return merge(left,right)
}
const arr=[12,34,6,43,18,31,88]
console.log(mergeSort(arr))