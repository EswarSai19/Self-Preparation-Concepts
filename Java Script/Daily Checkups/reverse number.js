var reverse = function(x) {
    
    let str = ""
    str = str+x
    str = str.split("")
    let left = 0, right = str.length-1
    if(str[0]=="-") left=1
    while(left<right){
        
        let temp = str[left]
        str[left] = str[right]
        str[right] = temp
        left++
        right--
        console.log(str)
    }
    str = str.join("")
    str= +str
    if(str<=(-(2 ** 31)) || str>= ((2 ** 31)-1)) return 0
    return str
};
console.log(reverse(-90100))
