using System.Collections.Generic;
using System;

namespace Csharp

{
    public class firstUniqChar
    {
        public int FirstUniqChar(string str) {
        Dictionary<char, int> count = new Dictionary<char, int>();
        for (int i = 0; i < str.Length; i++) {
            if(count.ContainsKey(str[i]))
                count[str[i]]++;
            else count.Add(str[i], 1);    
        }
        // find the index
        for (int i = 0; i < str.Length; i++) {
            if (count[str[i]] == 1) 
                return i;
        }
        return -1;
    }
    }
}