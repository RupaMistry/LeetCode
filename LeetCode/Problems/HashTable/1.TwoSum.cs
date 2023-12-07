namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        public static int[] TwoSum(int[] nums, int target)
        {
            Dictionary<int, int> dictionary = new();

            int[] result = new int[2];

            for (int i = 0; i < nums.Length; i++)
            {
                int difference = target - nums[i];

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


