function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const mapST = new Map<string, string>();
    const mapTS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if character in 's' has already been mapped
        if (mapST.has(charS) && mapST.get(charS) !== charT) {
            return false;
        }

        // Check if character in 't' has already been mapped to something else
        if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
            return false;
        }

        // Establish the bidirectional mapping
        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
}