function groupAnagrams(strs: string[]): string[][] {
    // A map to store the canonical (sorted) string as key 
    // and the list of matching original strings as value
    const map = new Map<string, string[]>();

    for (const s of strs) {
        // 1. Sort the string to create a key
        // We split into chars, sort them, and join them back
        const sortedKey = s.split('').sort().join('');

        // 2. Group the original string under the sorted key
        if (!map.has(sortedKey)) {
            map.set(sortedKey, []);
        }
        map.get(sortedKey)!.push(s);
    }

    // 3. Return all the grouped arrays
    return Array.from(map.values());
}