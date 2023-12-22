var gcdOfStrings = function(str1,str2) {
    if(str1.length > str2.length){
        str1 = str1.split("")
        for(let i=0; i<str2.length; i++){
            str1.shift()
        }
        return str1.join("")
    }else if(str1.length < str2.length){
        str2 = str2.split("")
        for(let i=0; i<str1.length; i++){
            str2.shift()
        }
        return str2.join("")

    }
    return ""
}

console.log(gcdOfStrings("ABCABC", "ABC"))