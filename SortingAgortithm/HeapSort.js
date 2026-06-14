/**
What is the heap sort ? 
Heap sort is a higly efficient , compaersion-based sorting alogirthim that uses a special tree-based data strucutre called a binary heap. 
think if is an evolution of selection Sort. while selection sort spends time scanning the entire unsorted array to find the minum or maximum element (O(n)) time per element), heap 
sort uses a heap structure to find that elementy instantly (O (1) time). reducing the overall sortinh time drastically. 

1 Understanding the Core Concept: what is a heap ? 
a binary heap is a complete binary tree ( all leaves aare completely filled exacpt possibly  the last level. which filled 
from left to right) that satisfies the heap property: 
   max Heap: the value of the parent node is always grester than  or equal to the  values of its children, this means the largest element in the entire strcuture is  always at the absolute 
   top ( the root )

Representing a Tree inside an array: 
even though we visualize a heap as a stree it is stored sequrntially in a stadard falt array we can easily finds any nodes's parent or children using simply arrat math formuas:

 if a parent node is at indes i : 
      its left child is at index : 2i+1 
      its right child is at indec: 2i+2

how heap sort Works step-by-step 
heap sort runs in two main phases: 
  Phase 1: Build a Max-Heap 
  Rearrange the unsorted array into a Max-Heap structure. Now the largest value sits at index 0. 
  
  Phase 2: Extract and sort 
    1  Swap the element at index 0  ( the largest element) with the last element of the array 
    2  Reduce the heap sizew by 1 (eefeitvely locking that largest elements into its final sorted position at the end of the array)
    3  The new root element might violate the heap property so we run a function called heapify to shift it down its correct spot and restore the Max-Heao struvutre
    4  Repeat this process until the heap size is 0. 


Interview-level Complexity Breakdown 
heap sort has incredibly unique time and space properties that makes it a favorite faaback algorithm during system designs. 

Time Complexity ( all cases Best , average wors) : 0(nlogn) 
why: Bouilding a heap takes o(n) time Extracting n element and running heapfy on them takes O(n log n) time. it never degrades to O(n^2) like Quick Sort can

Space Complexity: O(1)
the Big Win: unlike Meerge sort which needs ectra arrays (O(n)space), Heap sort sorts entirely in-place. 

Stability : Unstable 
Because it moves elements across long distance across the array / tree, it  doesn't maintain the original realtive position of duplicate values. 

the Big Interview Takeway 
if an interviewer aks you: I need a sorting algorithm that absolutely gurantees O(n log n) time complexity in the absolute worst case but iam running on a deeplay embeddes sysyem with zero extra Ram spare : -- heap Sort is the only 
correct anser it mathces merge sort's speed and beasts it on memorty usuage. 


JavaScript Impelemenatation: 
wirting 

 */

const heapify=(arr,size,index)=>{
    let largest=index 
    let left = 2* index+1 
    let right = 2*index+2
    // if  left child is largetr than troot 
    if(left<size && ar[left]>arr[largest]) { 
        largest = left ; 
    }
    // if right child is larger than the largest so 
    if(right<size && arr[right]>arr[largest] )
    {
        largest= right
    }
// if the largest is not the root swap and continue heapifying  down 
if(largest!==index)
{
    [arr[index],arr[largest]]=[arr[largest],arr[index]]
    // recursively heapfyin the affecte sub-tree 
    heapify(arr,size,largest)
}
}

// main function performs heap sort 
function heapSort(arr){ 
    let n =arr.length 
 // step 1 : Build the max-heap (rearrange array)
 for( let i=0; ) 
}