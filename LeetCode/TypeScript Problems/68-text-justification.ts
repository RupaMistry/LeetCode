function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let i = 0;

    while (i < words.length) {
        let j = i + 1;
        let lineLength = words[i].length;

        // 1. Greedy approach: see how many words fit in one line
        // We add 1 for each space that *must* exist between words
        while (j < words.length && lineLength + 1 + words[j].length <= maxWidth) {
            lineLength += 1 + words[j].length;
            j++;
        }

        const lineWords = words.slice(i, j);
        const isLastLine = j === words.length;
        const numGaps = lineWords.length - 1;

        let formattedLine = "";

        // 2. Format the line based on the three scenarios
        if (isLastLine || numGaps === 0) {
            // Left-justified: Single word or the final line
            formattedLine = lineWords.join(" ");
            const padding = maxWidth - formattedLine.length;
            formattedLine += " ".repeat(padding);
        } else {
            // Fully-justified: Distribute spaces evenly
            const totalSpaces = maxWidth - lineWords.reduce((acc, w) => acc + w.length, 0);
            const spacePerGap = Math.floor(totalSpaces / numGaps);
            const extraSpaces = totalSpaces % numGaps;

            for (let k = 0; k < numGaps; k++) {
                // Apply the base space count + one extra if we are in the "remainder" zone
                const spacesToAdd = spacePerGap + (k < extraSpaces ? 1 : 0);
                formattedLine += lineWords[k] + " ".repeat(spacesToAdd);
            }
            formattedLine += lineWords[numGaps]; // Add the last word of the line
        }

        result.push(formattedLine);
        i = j; // Move to the next set of words
    }

    return result;
}