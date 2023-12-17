namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        // 1160. Find Words That Can Be Formed by Characters
        // A string is good if it can be formed by characters from chars (each character can only be used once).
        public static int CountCharacters(string[] words, string chars)
        {
            int count = 0;

            Dictionary<char, int> dict = new();

            foreach (var c in chars)
            {
                if (dict.ContainsKey(c))
                    dict[c]++;
                else
                    dict.Add(c, 1);
            }

            foreach (var word in words)
            {
                Dictionary<char, int> wordDict = new();
                bool exists = true;

                foreach (var c in word)
                {
                    if (!dict.ContainsKey(c))
                    {
                        exists = false;
                        break;
                    }

                    if (wordDict.ContainsKey(c))
                        wordDict[c]++;
                    else
                        wordDict.Add(c, 1);
                }

                foreach (var d in wordDict.Keys)
                {
                    if (wordDict[d] <= dict[d])
                        continue;
                    else
                    {
                        exists = false;
                        break;
                    }
                }

                if (exists)
                    count += word.Length;
            }

            return count;
        }
    }
}
