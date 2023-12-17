namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        // 1662. Check If Two String Arrays are Equivalent
        // A string is represented by an array if the array elements concatenated in order forms the string.
        public bool ArrayStringsAreEqual(string[] word1, string[] word2)
        {
            string sb1 = "";
            string sb2 = "";

            foreach (var word in word1)
                sb1 += word;

            foreach (var word in word2)
                sb2 += word;

            return sb1 == sb2;
        }
    }
}
