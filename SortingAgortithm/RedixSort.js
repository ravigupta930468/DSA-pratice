/**
-----------------What is the Redix sort ?---------------------------
readix sort is a fascinating , non-comparios-based orting algorithm . like Countinh Sort it completely 
avoids comparing numbers directly,  allowing it to sort elements in Liner times: O(n.k) 

the word Radix means the baseof a number system (for example decimal numbers have a radix of 10, becuase there are 10 digits for m0 to 9) 
radix sorkt works by orting numbers diggits y digit, starting form the least significant digit ( the  units plaec) to the  most signoficant digit 
( thje higest place value). 
  

the core Cconcept: how it worksL 
 instead of looking at whole number loike 457 , radix sort break it down. to maker work. 
 it uses a stable sorting algorithm (almost always counting sort) as a hepler eninge to sort the number based on each digit position. 

  find the maximum number in  the array to knpw many total digts we need to process. 
  Set up 10 "buckets" (labeletd 0hrough 9)  becuase we are dealing with base -10 numbers. 
  
  Phase: -1 Sort the numbers based on their  1s digit (Units place)
  Phase:  2 Sort the resulting list baed on their 10s diggt (Tens Place)
  phase : 3 Sort base on their 100s digit (Hunders place) and so on.

  by the time you finish sorting the higest digit the entire array is perfectly sorted ! 

  A step-by-step Example: 
  let's sort the array: [170,45,90,802,24,2,66] 
  
  Step 1: Sort the 1st digit (Least Ssiginificent Digit)
       Look at the least digit of each umber 170:45,90,802, 24, 2 ,66 

  Step 2: Sort by the 10s digit 
       Look at the middel digit(Pad woth 0 if tthere isn't one): 170: 90, 802,02,24
       45,75,66 
       Grouping them into buvkets 0-9 and pulling them out gives
       Array becomes : [802,2,24,45,66,170,75,90] 
  
  Step 3: Sort by the 100s digit (Most singnificat Digit) 
       Look at the first digit: 802 ,002, 024 ,045, 066, 170, 075, 090 
       Grouping them into bukcest 0-9 and pulling them out gives:
       Array becomes :[2,24,45,66,75,90,170,802] (fully sorted)

Time Complexity: O(n.d) or O(n.k) is the number of digt in the maximum number  if te number of digit is relatively small /constant compared to the size of the array, this effectively function as a linear O(n) algorithm. 
.

Soace Complexity: O(n+b) 
where n is the space  for the output array and b is the base of the number sysyem (for decimal , b=10) 

Stability: Strictly Stable 
Radix sort  must use a stable sorting algorithm (like Counting Sort) as its inner loop if the wasn/t stable the 10s digit would completely destory the correct ordering established bt the 1st digit pass. 

the Interview Takway 
if an interviewer you a collection of fiexed-length keys-- ssuch as Phone Numbers , Zip Coeds , Employee
 IDs or Date Strings (YYYYMMDD) and ask for an optimal sorting strategy , Radix sort is 
 the golf stanard anwer it systemically processes data of consistent structure without ever needing costly
element-to-elemt comparions. 

 */
function countingSortForRadix(arr,exp){ 
     let n=arr.length ; 
     let output= new Array(n) 
     let count = new Array(10).fill(0) // 10 buckets for  0-9 
     //Store count of occurance of eachh digit in count [] 

     for (let i=0 ; i<n; i++)
     {
          let digit = Math.floor(arr[i]/exp)%10 
          count[digit]++
     }
     //  Change count[i] so that  it contains the actual position of 
     //  this digit in output  [] 
     for (let i=1 ; i<10 ; i++)
     {
          count[i]+=count[i-1]; 
     }
     // Build the output array by iterating backwards (maintain atabilbity )
     for( let i = n-1 ; i>=0 ; i--)
     {
          let digit = Math.floor(arr[i]/exp)%10
          output[count[digit]-1]=arr[i]; 
          count[digit]-- 
     }
     // Copy the  output array to arr[] ,so that the arr[] now 
     // contains sorted numbers according to current digit 
     for (let i =0 ; i<n ; i++)
     {
          arr[i]=output[i]
     }
}

// Main Radix sort function 
function radixSort(arr){
     if(arr.length<=1) return arr 
     // Find the maximum number to know y the number of digits 
     let max = Math.max(...arr)
     // Do counting sort for every digit : instead of passing digit number, 
     // exp  is passed exp is 10 ^i where i  is current digit number 
     for (let exp =1 ; Math.floor(max/exp)>0; exp*=10)
     { 
          countingSortForRadix(arr,exp)

     }
     return arr ; 

}
 const unsorted = [170,45,67,30,20,67,2,66]
 console.log(radixSort(unsorted))