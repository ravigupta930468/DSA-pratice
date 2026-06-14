/**
What is the insertion sort ?? 
insertion sort is a simple , intuitive sorting algorithm that works similary to the way you might sort playing card in your hands
instead of looking at the the whole array at one , it buikd the final sorted array one element at a time . 

the real world Analogy ( sorting card)
Imagine you are playing cards and you hold a pile of unsorted cards in your hand. 
 1 you pick up the first card, Since it;s only card it is already "sorted".
 2 you pick up the second card, you compare it with the first . if its maller , you insert it ot the left; if it's larger you leave it to the right. 
 3 you pick uo the third card and scan your sorted hand form right to left until you findits exact right position then insert it there. 

you repeat this shifting and inserting process for all cards until your entire hand is sorted. 

how it works Step-by-step on an array 
let's look at how insertion srot processes the array [5,2,4,6] the algorithm splits the array into a virtual sorted part( on the left) and an unsorted part ( on tyhe right)

 Initial State: [5 | 2,4,6]( the first element 5 is considered sorted)
 Step 1 look at Since 2< 5 shift 5 to the right and insert 2 at the fornt 
     Array becomes [2,5 | 4,6]
 Step 2 Look at 4 scan Background through the sorted sie ( 5 then 2). Since 4 is smaller than 5 but bigger than 2 , shift 5 to the right and insert 4 between them 
 step 3 Look at 6 Scan backwards Since 6 is already greater than 5 , no sgifting is needed it statys wherer it is: 
 Array becomes [2,4,5,6] 


While insertion sort isn't efficient for large dataseets it has unique traits that make it a favorite choice for very specific scenarios in DSA interviews: 

Time Complexity ( worst and aVERAGE): O(n)
   Occurs if the array is sorted in exact reverse order becasue every single element has to be shifted all the way to  the fornt. 

Time Complexity (Bestrt Case): O(n) 
this is insertion Sort's superpower: if the array is already sorted or nearly sorted the inner while loop condition (arr[j]>current) fails instantly
 on every pass . the  Algorithm just scans the array lineraly once. 

Space  Complexity: O(1)
it perates in-palce it modies the original array and doesn't requires ant extra memory array. 

Stabiblity :Stable 
 it doesn't swap the realtive positions of elements with equeal values, '

if an interviews asks you  " how owuld you sort a stream of live data where elements arrives sorted , or you are continually adding just a few elements to an already srotes list"

 */

const insertionSort=(arr)=>{
 let arrLength=arr.length 
 for (let i=0; i<arrLength; i++ ) 
 { 
    let current=arr[i]
    let j=i-1 
    while(j>=0 && arr[j]>current)
    {
        arr[j+1]=arr[j]
        j=j-1
    }
    arr[j+1]=current
 }
 return arr 
}
const arr=[67,34,2,90,43,12,65,33]
console.log(insertionSort(arr))