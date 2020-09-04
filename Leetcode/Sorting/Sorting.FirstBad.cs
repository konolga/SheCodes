/* Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
 */
/* The isBadVersion API is defined in the parent class VersionControl.
      bool IsBadVersion(int version); */

public class Solution : VersionControl {
    public int FirstBadVersion(int n) {
    int left = 0;
    int right = n;

        while (left<right)
        {
            int mid = (left + (right-left)/2);
            if (IsBadVersion(mid))
        {
            right = mid;
        }
        else left = mid+1;         
        }
        return left;
    }
}