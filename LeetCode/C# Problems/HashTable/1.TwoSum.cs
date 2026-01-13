namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        // 1.Two Sum
        // Return indices of the two numbers such that they add up to target:k

        public static int[] TwoSum(int[] nums, int target)
        {
            // dictionary<num,index>
            Dictionary<int, int> dictionary = new();

            int[] result = new int[2];

            for (int i = 0; i < nums.Length; i++)
            {
                int difference = target - nums[i];

                // If the difference with the current element exists in dictionary then return both indexes
                if (dictionary.ContainsKey(difference))
                    result = new[] { dictionary[difference], i };
                else
                {
                    if (!dictionary.ContainsKey(nums[i]))
                        dictionary.Add(nums[i], i);
                }
            }

            return result;
        }
    }
}


