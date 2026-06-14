/**
What is the bubble sorting ? 
bubble sort is one of the simplest sorting alogirthms  it works by repeatedly stepping through the list , comparing adjacent
elements, an swapping them if they are in the wrong order. 

think of  it like bubbles in a soda , the largest elements bubble up to the end of the array with each pass. 

how Bubble Sorts works ( the visual idea) 

imagine you hanve an unsorted array: [5,1,4,2]

First pass: 
Compare 5 and 1 Since  5 > 1 swap them --> [1,5,4,2]
comare 5 and 4 Ssince 5 > 4 swap them ---> [1,4,5,2] 
Compare 5 and 2 Since 5 > 2 Swap them ---> [1,4,2,5]

the largest number (5) has now bubbles up tpo its correct final position at the very end. 

Second Pass : 
Compare 1 and 4 Correct order no Swap > [1,4,2,5]
Compare 4 and 2 Since 4> 2 swap them -> [1,2,4,5]
(We don't need to check 5 again becuase its already sorted)

the array is now fully sorted [1,2,4,5]

 */

const bubbleSort=(arr)=>{
    let arrLenghtn = arr.length 
    let  swapped ;

    // Inner loop: Compares adjacent elements 
    // (arrLength-i-1) ignonres the elements that have already bubbled to the  end 
    for (let i =0 ; i<arrLenghtn; i++)
    {
        swapped = false // reset 
        for (let j=0; j<arrLenghtn-i-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                //swaped the elements using destructuring assigment 
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swapped=true // mark that a swapred occured 
            }
        }
        // optimization : if noe two elmements were swapped in the innder loop 
        /// then the array is already completely sorted ! break early 
        if (!swapped) break  
    }
    return arr
}

const arr=[45,23,67,28,5,12,78]
console.log(bubbleSort(arr))