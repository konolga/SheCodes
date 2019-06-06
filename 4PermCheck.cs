using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Codility
{
    class _4PermCheck
    {

        static void Main(string[] args)
        {
            int[] Arr = new int[] { 4, 1, 3, 2 };
            Console.WriteLine(Solution(Arr));
            Console.ReadKey();
        }


        public static int Solution(int[] A)
        {

            A = A.OrderByDescending(el => el).ToArray();
            if (A.Length == 0 || A[0] != A.Length || A[A.Length - 1] != 1 )
            {
                return 0;
            }

            else
            {
                for (int i = 0; i < A.Length - 1; i++)
                {
                    if (A[i] - A[i + 1] != 1) //compare two numbers
                    {
                        return 0;
                    }

                }
                return 1;
            }
        }
           
    }
}
