 namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        public static int[] TopKFrequent(int[] nums, int k)
        {
            // dict<number,count of occurrence>
            var dict = new Dictionary<int, int>();

            // loop and create required array structure
            foreach (int n in nums)
            {
                if (dict.ContainsKey(n))
                    dict[n]++;
                else
                    dict.Add(n, 1);
            }

            // sort by desc and then select top k elements(only key)
            var result = dict
                .OrderByDescending(x => x.Value)
                .Select(x => x.Key)
                .Take(k);

            return result.ToArray();
        } 
    }
}
