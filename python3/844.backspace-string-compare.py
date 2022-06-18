#
# @lc app=leetcode id=844 lang=python3
#
# [844] Backspace String Compare
#

# @lc code=start
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def skip(idx, s):
            skip = 0
            while idx >= 0:
                if s[idx] == '#':
                    skip += 1
                    idx -= 1
                elif skip > 0:
                    skip -= 1
                    idx -= 1
                else:
                    return idx
            return idx

        i, j = len(s)-1, len(t)-1
        while i>=0 or j>=0:
            i = skip(i, s)
            j = skip(j, t)
            
            if i>=0 and j>=0:
                if s[i] != t[j]:
                    return False
            elif (i>=0) != (j>=0):
                return False
            i -= 1
            j -= 1
        return True
        
# @lc code=end

