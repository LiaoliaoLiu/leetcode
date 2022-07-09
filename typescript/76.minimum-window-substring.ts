/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
type Char = string;
type Quantity = number;

function isSubWindow(sMap: Map<Char, Quantity>, tMap: Map<Char, Quantity>): boolean{
    for (let [key, value] of tMap) {
        if (!sMap.has(key) || sMap.get(key) < value) {
            return false;
        }
    }

    return true;
}

function minWindow(s: string, t: string): string {
    const tMap = new Map<Char, Quantity>();
    
    [...t].forEach((c) => {
        if (tMap.has(c)) tMap.set(c, tMap.get(c) + 1);
        else {
            tMap.set(c, 1);
        }
    })

    let minLeft = 0, minRight = 0;
    let minWindowLength = Number.MAX_SAFE_INTEGER;
    const sMap = new Map<Char, Quantity>();
    let left = 0;
    for (let right = 0; right < s.length; right += 1) {
        let currentChar = s.charAt(right);
        if (sMap.has(currentChar)) {
            sMap.set(currentChar, sMap.get(currentChar) + 1);
        } else {
            sMap.set(currentChar, 1);
        }

        while (isSubWindow(sMap, tMap)) {
            let currentWindowLength = right - left + 1;
            if (currentWindowLength < minWindowLength) {
                minLeft = left;
                minRight = right;
                minWindowLength = currentWindowLength;
            }
            let leftChar = s.charAt(left);
            sMap.set(leftChar, sMap.get(leftChar) - 1);
            left += 1;
        }
    }

    return minWindowLength == Number.MAX_SAFE_INTEGER ? "" : s.slice(minLeft, minRight+1)
};
// @lc code=end

