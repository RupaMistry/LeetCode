using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeetCode.Problems.HashTable
{
    public partial class Solution
    {
        public int[] TwoSum2(int[] nums, int target)
        {

            var foundDictionary = new Dictionary<int, int>();

            for (int i = 0; i < nums.Length; i++)
            {
                int difference = target - nums[i];

                if (foundDictionary.ContainsValue(difference))
                {
                    return new int[] {
                        foundDictionary[difference], i
                    };
                }

                if (!foundDictionary.ContainsKey(nums[i]))
                    foundDictionary.Add(nums[i], i);
            }

            

            return Array.Empty<int>();
        }

        public static int RemoveDuplicates(int[] nums)
        {
            var hashSet = new HashSet<int>();
            var expectedNums = new int[nums.Length];

            foreach (int num in nums)
            {
                if (!hashSet.Contains(num))
                {
                    hashSet.Add(num);

                }
            }
            expectedNums = hashSet.ToArray<int>();
            return hashSet.Count();
        }

        public static IList<IList<int>> FourSum(int[] nums, int target)
        {

            var result = new List<IList<int>>();

            if (nums.Length == 0 || nums.Length < 4)
                return result;

            int i = 0; int j = nums.Length - 1;

            int left = i + 1;

            int right = j - 1;

            while (i < nums.Length && left < right)
            {
                int sum = nums[i] + nums[left] + nums[right] + nums[j];

                if (sum == target)
                {

                    i++; left++;
                    right--;
                    j--;
                    var entry = new List<int>() { nums[i], nums[left], nums[right], nums[j] };

                    if (result.Exists(a=>a == entry)) continue;

                    result.Add(entry);

                }


                else if (sum < target)
                {
                    i++; left++;
                }
                else if (sum > target)
                {
                    right--;
                    j--;
                }

            }

            return result;
        } 

        private bool PractiseStack()
        {
            var str = "{[()]}";

            var stack = new Stack<char>();

            foreach (var c in str)
            {
                if (c == '{' || c == '[' || c == '(')
                {
                    stack.Push(c);
                }
                else
                {
                    if (stack.Count == 0) return false;

                    var currentChar = stack.Pop();

                    if (c == ')' && currentChar == '(' ) return false;
                    if (c == '}' && currentChar == '{') return false;
                    if (c == ']' && currentChar == '[') return false;
                }
            } 

            return stack.Count == 0;
        }

        public IList<IList<int>> ThreeSum1(int[] nums)
        {
            PractiseStack();
            var res = new List<IList<int>>();
            var dict = new Dictionary<int, IList<int>>();
             
            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = i + 1; j < nums.Length; j++)
                {
                    for (int k = j + 1; k < nums.Length; k++)
                    {
                        if (((nums[i] + nums[j] + nums[k]) == 0)
            && (i != j && i != k && j != k))
                        {
                            var triplets = new List<int>() { nums[i], nums[j], nums[k] };

                            triplets.Sort();

                            if (!dict.ContainsValue(triplets))
                            {
                                dict.Add(i, triplets);
                            }
                        }
                    }
                }
            }

            return dict.Values.ToList();
        }


        public IList<IList<int>> ThreeSum(int[] nums)
        {
            var res = new List<IList<int>>();

            Array.Sort(nums);

            for (int i = 0; i < nums.Length - 2; i++)
            {
                if (i > 0 && nums[i] == nums[i + 1]) continue;

                int left = i + 1;
                int right = nums.Length - 1;

                while (left < right)
                {
                    int sum = nums[i] + nums[left] + nums[right];

                    if (sum == 0)
                        res.Add(new List<int>() { nums[i], nums[left], nums[right] });

                    if (sum < 0) left++;
                    if (sum > 0) right--;
                     
                }
            }

            return res;
        }
    }
}
