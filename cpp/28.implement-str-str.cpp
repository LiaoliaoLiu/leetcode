#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int strStr(string haystack, string needle) {
        vector<int> prefixFunction(needle.size());
        getPrefixFuncion(prefixFunction, needle);

        int q = 0;

        for (int i = 0; i < haystack.size(); i++) {
            while (q > 0 && haystack[i] != needle[q])
                q = prefixFunction[q-1];

            if (haystack[i] == needle[q])
                q++;
            
            if (q == needle.size())
                return i - q + 1;
        }

        return -1;
    }

private:
    void getPrefixFuncion(vector<int> &prefixFunction, const string &s) {
        prefixFunction[0] = 0;
        int k = 0;

        for (int i = 1; i < s.size(); i++) {
            while (k > 0 && (s[i] != s[k]))
                k = prefixFunction[k-1];

            if (s[i] == s[k])
                k++;

            prefixFunction[i] == k;
        }
    }
};