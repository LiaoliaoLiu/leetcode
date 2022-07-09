/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
function reverseWords(s: string): string {
    function removeExtraSpace(arr: string[]): void {
        // '   hello   world    '
        // 'h  he..
        //   l  r
        let left = 0, right = 0;
        while (right < arr.length && arr[right] === ' ') {
            right += 1;
        }
        while (right < arr.length) {
            while (arr[right] === ' ' && arr[right-1] === ' ') {
                right += 1;
            }

            if (right < arr.length) {
                arr[left] = arr[right];
                left += 1;
                right += 1;
            }
        }
        // '   hello   world    '
        //                       r
        // 'hello world_o  '
        //              l 
        if (arr[left-1] === ' ') {
            arr.length = left-1;
        } else {
            // '   hello   world'
            //                  r
            // 'hello worldworld'
            //             l      
            arr.length = left;
        }
    }

    function reverseStr(arr: string[], start: number, end: number): void {
        while (start < end) {
            let tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start += 1;
            end -= 1;
        }
    }

    let arr = s.split('');
    removeExtraSpace(arr);
    // reverse the whole string: 'hello world' -> 'dlrow olleh'
    reverseStr(arr, 0, arr.length-1);
    // reverse word by word: 'dlrow olleh' -> 'world hello'
    let wordStart = 0,
        wordEndPlus1 = 0;
    while (wordStart < arr.length) {
        while (arr[wordEndPlus1] !== ' ' && wordEndPlus1 < arr.length) {
            wordEndPlus1 += 1;
        }
        reverseStr(arr, wordStart, wordEndPlus1 - 1);
        wordStart = wordEndPlus1 + 1;
        wordEndPlus1 = wordStart;
    }
    return arr.join('');
};
// @lc code=end

