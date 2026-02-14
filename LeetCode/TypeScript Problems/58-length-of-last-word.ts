function lengthOfLastWord(s: string): number {
    let length = 0;
    let i = s.length - 1;

    // 1. Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // 2. Count characters until the next space or start of string
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}