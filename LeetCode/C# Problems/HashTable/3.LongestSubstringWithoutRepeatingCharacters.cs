using System.Data.SqlTypes;
using System.Text;

namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        // 3. Longest Substring Without Repeating Characters
        // find the length of the longest substring without repeating characters.

        public static int LengthOfLongestSubstring(string s)
        {
            int result = 0;
            int fRes = 0;
            HashSet<char> list = new(); 

            StringBuilder subStr = new();
            foreach (char c in s)
            {
                if (list.Contains(c))
                {
                    list = new();
                    result = 0;
                    subStr = new();
                }

                list.Add(c);
                subStr.Append(c);
                result++;
                fRes = Math.Max(result, fRes);
            }
            return fRes;
        }
    }
}