/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    let sMap = new Map<string, number>();
    for (let i = 0; i < s.length; i+= 1) {
        let char = s.charAt(i);
        if (sMap.has(char)) {
            sMap.set(char, sMap.get(char)+1);
        } else {
            sMap.set(char, 1);
        }
    }

    for(let i = 0; i < t.length; i += 1) {
        let char = t.charAt(i);
        if (sMap.has(char)) {
            sMap.set(char, sMap.get(char)-1);
        } else {
            return false;
        }
    }

    for (let [key, value] of sMap) {
        if (value !== 0) return false;
    }

    return true;
};
// @lc code=end

