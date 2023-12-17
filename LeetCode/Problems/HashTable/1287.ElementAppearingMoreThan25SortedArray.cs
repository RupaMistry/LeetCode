namespace LeetCode.Problems.HashTable
{ 
    public partial class Solution
    {
        //1287. Element Appearing More Than 25% In Sorted Array

        public static int FindSpecialInteger(int[] arr)
        {
            var hash = new Dictionary<int, int>();

            foreach (int x in arr)
            {
                if (hash.ContainsKey(x))
                    hash[x]++;
                else
                    hash.Add(x, 1);
            }

            return hash.MaxBy(h => h.Value).Key;
        } 
    }
}
