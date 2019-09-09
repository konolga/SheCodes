using System;

namespace Csharp
{
    //88. Merge Sorted Array
    public  class Searching
    {
       public static void Merge(int[] nums1, int m, int[] nums2, int n) {
       Console.Write(nums2.Length);
        if(nums1 == null || nums2.Length == 0|| nums2 == null || nums2.Length == 0) return;
         
        int merLen = nums1.Length-1;// index for merged array
        int i1 = m-1;// index for nums2
        int i2 = n-1; // index for nums1
        while(i1 >= 0 && i2 >= 0) {
                    if(nums2[i2]>nums1[i1]){
                        nums1[merLen--] = nums2[i2--];
                        }
                            else {nums1[merLen--] = nums1[i1--];                   
                            }
        };
            while(i2 >= 0 && merLen>=0)
            {
                nums1[merLen--] = nums2[i2--]; 
            }
        foreach (var item in nums1)
        {
            Console.Write(item);
        }    
    }
}
}