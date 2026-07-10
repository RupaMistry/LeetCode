function findRepeatedDnaSequences(s: string): string[] {
    const seen = new Set<string>();
    const repeated = new Set<string>();

    // Slide a 10-character window across the entire length of the DNA sequence
    for (let i = 0; i <= s.length - 10; i++) {
        const currentSequence = s.substring(i, i + 10);

        if (seen.has(currentSequence)) {
            // If we've encountered this exact sequence before, it's a confirmed repeat
            repeated.add(currentSequence);
        } else {
            // Otherwise, document its presence for future reference
            seen.add(currentSequence);
        }
    }

    // Convert the unique repeats set back into an array structure
    return Array.from(repeated);
}