let isRepetitive = (str) =>{
    let obj = {}
    for(let i=0; i<str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]] = 1
        }else{
            return true
        }
    }
    return false
}

var lengthOfLongestSubstring = function(s) {
    if(s.length==0) return 0
    let max = 0;
    for(let i=0; i<s.length; i++){
        let bag = s[i]
        for(let j=i+1; j<s.length; j++){
            bag+=s[j]
            if(isRepetitive(bag)==false){
                if(max<bag.length) {max = bag.length}
            }
        }
    }
    if(max==0) return 1
    return max
};
console.log(lengthOfLongestSubstring("abcabcbb"))