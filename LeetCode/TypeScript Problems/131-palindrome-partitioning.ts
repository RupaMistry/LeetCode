function partition(s: string): string[][] {
    const result: string[][] = [];
    const currentPath: string[] = [];

    // Helper function to check if a substring is a palindrome
    function isPalindrome(str: string, left: number, right: number): boolean {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function explore(startIndex: number) {
        // Base Case: If our starting index has reached the end of the string,
        // it means the entire string has been successfully partitioned into palindromes.
        if (startIndex === s.length) {
            result.push([...currentPath]);
            return;
        }

        // Try making a cut at every possible position from startIndex to the end
        for (let i = startIndex; i < s.length; i++) {
            // Check if the component from startIndex to i is a palindrome
            if (isPalindrome(s, startIndex, i)) {
                // If valid, take the substring and add it to our current path
                const substring = s.slice(startIndex, i + 1);
                currentPath.push(substring);

                // Move our starting point past this cut and explore further
                explore(i + 1);

                // Backtrack: remove the last piece so we can try a different cut size
                currentPath.pop();
            }
        }
    }

    explore(0);
    return result;
}