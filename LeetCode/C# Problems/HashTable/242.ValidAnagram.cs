namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        public static bool IsAnagram(string s, string t)
        {
            bool result = true;

            if (s.Length != t.Length)
                return false;

            Dictionary<char, int> dictionaryS = new();
            Dictionary<char, int> dictionaryT = new();

            for (int i = 0; i < s.Length; i++)
            {
                if (dictionaryS.ContainsKey(s[i]))
                    dictionaryS[s[i]] += 1;
                else
                    dictionaryS.Add(s[i], 1);

                if (dictionaryT.ContainsKey(t[i]))
                    dictionaryT[t[i]] += 1;
                else
                    dictionaryT.Add(t[i], 1);
            }

            foreach (var d in dictionaryS)
            {
                if (!dictionaryT.ContainsKey(d.Key))
                    return false;

                if (dictionaryS[d.Key] != dictionaryT[d.Key])
                    return false;
                else
                {
                    result = true;
                    continue;
                }
            }


            return result;
        }
    }
}
