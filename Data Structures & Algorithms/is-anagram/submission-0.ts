class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

    
        const countS = new Map<string,number>();
        const countT = new Map<string, number>();
        for(const char of  s ){
             if(countS.has(char)){
              countS.set(char, countS.get(char)!+1);
           
        } else {
      countS.set(char,1);
        } }
        // -----------------------------
        for(const char of t){
            if(countT.has(char)){
                countT.set(char, countT.get(char)! +1);
            }else{
                countT.set(char,1);
            }
        }
  
   if(s.length !== t.length) return false;
for (const char of s){
if(countS.get(char)!==countT.get(char) ){
    return false;
}
}
return true;
}
}
