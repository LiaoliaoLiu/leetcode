import java.util.*;

/*
 * @lc app=leetcode id=242 lang=java
 *
 * [242] Valid Anagram
 */

// @lc code=start
class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> sMap = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            sMap.put(curr, sMap.getOrDefault(curr, 0) + 1);
        }


        for (int i = 0; i < t.length(); i++) {
            char curr = t.charAt(i);
            if (sMap.containsKey(curr)) {
                sMap.put(curr, sMap.get(curr)-1);
            } else {
                return false;
            }
        }

        for (Map.Entry<Character, Integer> entry : sMap.entrySet()) {
            if (entry.getValue() != 0) return false;
        }
        return true;
    }
}
// @lc code=end

