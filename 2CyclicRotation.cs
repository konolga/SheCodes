using System;
using System.Linq;


namespace Codility
{
    class _2CyclicRotation
    {
        static void Main(string[] args)
        {
            int[] Arr = new int[] { 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 };
            int[] res = CyclicRotation(Arr, 7);
            for (int i = 0; i < res.Length; i++)
            {
                Console.WriteLine(res[i]);
            }
            Console.ReadKey();
        }
        private static int[] CyclicRotation(int[] A, int K)
        {

            //This solutions gives 75% score...
            if (A.Length == 0 || K == 0 || A.Length == 1 || A.Length == K) //if empty array or no rotations require
            {
                return A;
            }

            else {

                K = A.Length < K ? A.Length % K : K; //if array is shorter than K rotations
                return A.Skip(A.Length - K).Take(K).Concat(A.Take(A.Length - K)).ToArray();

            }



        }

   }
}
