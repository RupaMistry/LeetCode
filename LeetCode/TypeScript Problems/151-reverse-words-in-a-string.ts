function reverseWords(s: string): string {
    let result = '';
    let i = s.length - 1;

    // Scan the string backward from the tail end
    while (i >= 0) {
        // Step A: Skip any trailing or intermediate spaces
        while (i >= 0 && s[i] === ' ') {
            i--;
        }

        // If we hit the beginning of the string, we are fully done
        if (i < 0) break;

        // 'i' is now pointing to the last letter of a valid word
        let wordEnd = i;

        // Step B: Find the beginning of this word by scanning backward for a space
        while (i >= 0 && s[i] !== ' ') {
            i--;
        }

        // 'i' is now sitting on the space right before the word (or at -1)
        // Extract the word using the boundaries we locked down
        const word = s.slice(i + 1, wordEnd + 1);

        // Step C: Append the word to our result
        if (result.length === 0) {
            result += word; // The very first word added has no leading space
        } else {
            result += ' ' + word; // Subsequent words get a single space separator
        }
    }

    return result;
}