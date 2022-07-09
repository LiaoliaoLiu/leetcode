/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    function prefixFunction(s: string): number[] {
        // the process is to match the template string against itself.
        // a.k.a. the haystack is the needle.

        // pi array stores the length of the longest proper prefix that is also the suffix of s[:q]
        let pi: number[] = [];
        pi[0] = 0;
        // k has multiple meaning:
        // 1. the length of the longest *proper* prefix that is the suffix of s[:q], which is also
        // 2. the number of matched characters, because we are using s to match against itself.
        // 3. the index of current testing char of the template string
        let k = 0; 
        for (let q = 1; q < s.length; q += 1) {
            while (k > 0 && s.charAt(k) !== s.charAt(q)) { // using the 3rd meaning.
                k = pi[k-1] // the left k keeps using the 1st/2nd, whereas the right k uses the 3rd. 
            }

            if (s.charAt(k) === s.charAt(q)) { // using the 3rd meaning.
                k += 1; // the 1st meaning
            }
            pi[q] = k; // the 2nd meaning
        }
        return pi;
    }

    let pi: number[] = prefixFunction(needle); // index i stores the longest proper prefix that is also the suffix of needle[:i]
    let numberOfMatch = 0; // which is also the index of current testing char of the needle
    for (let i = 0; i < haystack.length; i += 1) {
        while (numberOfMatch > 0 && needle.charAt(numberOfMatch) !== haystack.charAt(i)) {
            numberOfMatch = pi[numberOfMatch-1];
        }
        if (needle.charAt(numberOfMatch) === haystack.charAt(i)) {
            numberOfMatch += 1;
        }

        if (numberOfMatch === needle.length) return i + 1 - needle.length;
    }

    return -1;
};
// @lc code=end

