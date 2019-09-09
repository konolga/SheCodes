using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Codility
{
    class _3FrogJmp
    {
        public int solution(int X, int Y, int D)
        {
            // write your code in C# 6.0 with .NET 4.5 (Mono)
            //position X - start
            //position >= Y - finish
            //fixed distance D - jump

            return (int)Math.Ceiling(((double)Y - X) / D); //Math.Ceiling: smallest greater than or equal integer

        }
    }
}
