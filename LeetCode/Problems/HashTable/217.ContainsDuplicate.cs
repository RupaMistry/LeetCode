namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        public static bool ContainsDuplicate(int[] nums)
        {
            HashSet<int> hashSet = new();
              
            foreach (int num in nums)
            {
                if (hashSet.Contains(num))
                    return true;

                hashSet.Add(num);
            }
            return false;
        }

       
    }
}
