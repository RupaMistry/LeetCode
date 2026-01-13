using System.Text;

namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        // 217. Contains Duplicate
        // If any value appears at least twice in the array, and return false if every element is distinct.

        public static bool ContainsDuplicate(int[] nums)
        {
            // hashSet<num> 
            HashSet<int> hashSet = new();

            foreach (int num in nums)
            {
                // if item appears more than once, return true and exit.
                if (hashSet.Contains(num))
                    return true;

                hashSet.Add(num);
            }
            return false;
        } 
    }
}
