using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Codility
{
    class _1BinaryGap
    {

        static void Main1(string[] args)
        {
            int res = FindGap(1041);
            Console.WriteLine(res);
            Console.ReadKey();
        }

        private static int FindGap(int N)
        {
            int maxGap = 0;
            int currentGap = 0;
            bool hasGaps = false;
            string binary = Convert.ToString(N, 2);
            for (int i = binary.Length - 1; i >= 0; i--)
            {
                if (!hasGaps && binary[i] == '1')
                {
                    hasGaps = true;
                }

                if (hasGaps && (binary[i] == '0'))
                {
                    currentGap += 1;
                }

                if (hasGaps && (binary[i] == '1'))
                {
                    if (maxGap < currentGap)
                    {
                        maxGap = currentGap;
                    }
                    currentGap = 0;
                }
            }
            return maxGap;
        }
    }
}
