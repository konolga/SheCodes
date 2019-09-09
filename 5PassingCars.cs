using System;
namespace Codility
{
    public class _PassingCars
    {
        static void Main(string[] args)
        {
            int[] Arr = new int[] { 0, 1, 0, 1, 1 };
            Console.WriteLine(PassingCars(Arr));
            Console.ReadKey();
        }


        public static int PassingCars(int[] A )
        {
            int totalCount = 0;
            int currentCount = 0;


                for (int i = A.Length - 1; i >= 0 && totalCount <= 1000000000; i--)
                {
                    if (A[i] == 1)
                    {
                        currentCount++;
                    }
                    else totalCount = totalCount + currentCount;
                }

            return totalCount > 1000000000 ? -1 : totalCount;
        }
    }
}
