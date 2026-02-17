function countAndSay(n: number): string {
    if (n === 1) return "1";

    let current = "1";

    // Generate the sequence from 2 to n
    for (let i = 2; i <= n; i++) {
        let nextStr = "";
        let j = 0;

        while (j < current.length) {
            let count = 1;
            const digit = current[j];

            // Count consecutive identical characters
            while (j + 1 < current.length && current[j] === current[j + 1]) {
                count++;
                j++;
            }

            // Append "count" + "digit"
            nextStr += count.toString() + digit;
            j++;
        }

        current = nextStr;
    }

    return current;
}