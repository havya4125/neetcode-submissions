class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(ch) {
        return (ch >='a' && ch <='z') || (ch >='A' && ch <='Z') || (ch>='0' && ch <='9')
    }

    isPalindrome(s) {
        const len = s.length;
        let left = 0;
        let right = len - 1;

        while(left < right) {
            if(!this.isAlphaNumeric(s[left])) left++;
            else if(!this.isAlphaNumeric(s[right])) right --;
            else {
                if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
                left++;
                right--;
            }
        }
        return true;  
    }
}
