using System;
namespace Csharp
{
    public class ReverseString
    {
       public void ReverseString(char[] s) {
        char temp;
        
        int i = s.Length-1;
        int j = 0; 
        while(i>j)
            {
                temp = s[i];
                s[i]=s[j];
                s[j]=temp;
                j++;
                i--;
            }
        }
     
    }
}