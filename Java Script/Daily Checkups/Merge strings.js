let word1 = "abc"
let word2 = "prye"
let length1 = word1.length
let length2 = word2.length
let len = Math.max(length1,length2)
let bag = ""
for(let i=0; i<len; i++){
    if(word1[i] == undefined){
        bag+=word2[i]
    }else if(word2[i] == undefined){
        bag+=word1[i]
    }else{
        bag+=word1[i]+word2[i]
    }
    
}
console.log(bag.trim())

// desired output : apbrcye
