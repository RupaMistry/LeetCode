
namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    { 
        public static IList<IList<string>> GroupAnagrams(string[] strs)
        {
            var dictionary = new Dictionary<string, IList<string>>();

            foreach (var str in strs)
            {
                var key = GetDictionaryKey(str);

                if (dictionary.ContainsKey(key))
                {
                    dictionary[key].Add(str);
                }
                else
                {
                    dictionary.Add(key, new List<string> { str });
                }
            }

            IList<IList<string>> result = dictionary.Values.ToList();
            return result;
        }

        private static string GetDictionaryKey(string str)
        {
            var charKey = new char[26];

            foreach (var c in str)
            {
                var ascii = Convert.ToInt32(c) - 'a';
                charKey[ascii]++;
            }

            return new string(charKey);
        }
    }
}
