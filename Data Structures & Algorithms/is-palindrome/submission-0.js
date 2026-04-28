class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(ch) {
        return (ch >='a' && ch <='z') || (ch >='A' && ch <='Z') || (ch>='0' && ch <='9')
    }

    isPalindrome(s) {
        let newStr = '';

        for(let c of s ) {
            if(this.isAlphaNumeric(c)){
                newStr+= c.toLowerCase();
            }
        }

        return newStr === newStr.split('').reverse().join('')
    }
}
