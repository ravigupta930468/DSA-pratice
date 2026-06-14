/**
Selection Sort is another steraightforward compariosn-based sorting algorithm, its main 
idea es exactly waht the name suggests  it repeatdaly selects the smallest (or largest) element from the unsorted portion if the arrayand mives it to its correct 
position 

Instead of shfiting elements around like insertion Sort, Selection Sort finds the absolute minimum elements in a single pass ans swaps it once. 

the real-world Analogy  (organinzing books by height)
Imagine you have a messy row of books on a shelf and you want to sort them from shortest to tallest: 

 1 you scan the entire shelf form left to right to find the absoute shortest book. 
 2 Open you find it , you swap it with the boom currently sitting in the very first position. 
 3 Now, the first position is swaped , you move to the second position , scan  the rest of the  shelf  for next shortest book, 
 and swap it with the second position. 
 4 you keep moving position-by-position until  you reach end of the shelf. 

 How it works step-by-step on an Array 
 Let's trace Selection sort on the array [29,10,14,37]: 
 
 Pass 1 (Looknig for  the 1st position element): 
  Scan the whole array: 29,10,14,37 , the minimum value is 10. 
  swap 10 with the element at index 0 (29)
  Array becomes : [10| 29 , 14, 37] ( 1o is now in the sorted zone)

Pass 2 (Looking for  the 2nd position element): 
 Scan the ubnsorted zone: 29 ,14 ,37 the minimum vaue is 14. 
 Swap 14 with the element at index 1 (29)
 Array becomes: [10 14 |29 37] 

 Pass3 (Looking for the 3rd position element): 
  Scan the unsorted Zone : 29,37 the minimum vaue is 29 
  It;s already in the right spot so no swap is needed (or its sswaps with iself). 
  Array becomes: [10,14,29 | 37] 

the remainging element 37 is automaticall in the correct spot the array i fully sorted ! 

Interview -level Complexity  breakdown 
you need to know selection Sort behavior inside out becuase it  has some very disticnt properites compared to bubble and indertion sort: 

time Complexity (all  Cases= Best , average, worst): O(n^2)
why ? Slection sort has no early-exist mechanisma Even if they array is already perfectly sorted the inner loop must scan all remaining elements to confirm 
that no smaller number exists. it will always make n(n-1)/2 comparisons. 

Soace Complexity: 0(n1) 
it is an in-palce algorithm modifying the original input array with zero extra memroy arrays required. 

Stability :Unstalbe 
by deafult it can change the relative order of duplicate elements due to long-distance swaps ( for example , sorting [4,4,2] will swap the first 4 with 2 
pushing it behind the second 4 )

The Big Interview Takeaway
If an interviewer asks: "Why would anyone ever use Selection Sort if it's always $O(n^2)$ even in the best case?"

Your answer should be: It minimizes memory writes.
 While Bubble Sort and Insertion Sort write to memory constantly while
  shifting or bubbling elements, Selection Sort does a maximum of $\mathcal{O}(n)$ swaps. 
  If writing data to a memory drive or flash storage is significantly more expensive or taxing than reading it, 
Selection Sort becomes highly valuable.
* */

const selectionSort=(arr)=>{
    const arrLength=arr.length 
    // Move the boundary of the unsorted aubarray one be one 
    for(let i =0 ; i<arrLength-1; i++ )
    {
      // Assume the current position 'i' holds the minimum element
      let currentIndex=i
      // Test the rest of the array to find the true minium
      for(let j=0; j<navigation; j++)
      {
        if(arr[j]<arr[currentIndex])
        {
         currentIndex=j // update index of the smallest element
        }
      }
      // If the true minium isn't already at position 'i' swap them 
      if(currentIndex!==i)
      {
        [arr[i],arr[currentIndex]]=[arr[currentIndex],arr[i]]
      }

    }
          return arr
}
const ar =[12,6,43,8,34,98,12]
console.log(selectionSort(ar))