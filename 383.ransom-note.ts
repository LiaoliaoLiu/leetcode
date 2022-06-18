/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */


// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    // char - quantity
    const magazineTable = new Map<string, number>();
    for (let i = 0; i < magazine.length; i += 1) {
        const char = magazine.charAt(i);
        if (magazineTable.has(char)) {
            magazineTable.set(char, magazineTable.get(char) + 1);
        } else {
            magazineTable.set(char, 1);
        }
    }


    for (let i = 0; i < ransomNote.length; i += 1) {
        const char = ransomNote.charAt(i);
        if (magazineTable.has(char)) {
            magazineTable.set(char, magazineTable.get(char) - 1);
            if (magazineTable.get(char) < 0) return false;
        } else {
            return false;
        }
    }

    return true;
};
// @lc code=end

