var canConstruct = function (ransomNote, magazine) {
  let magazineObj = {};
  let ransomNoteObj = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!magazineObj[magazine[i]]) {
      magazineObj[magazine[i]] = 1;
    } else {
      magazineObj[magazine[i]]++;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!ransomNoteObj[ransomNote[i]]) {
      ransomNoteObj[ransomNote[i]] = 1;
    } else {
      ransomNoteObj[ransomNote[i]]++;
    }
  }
  let count = 0;
  for (let key in magazineObj) {
    for (let key2 in ransomNoteObj) {
      if (key == key2 && magazineObj[key] >= ransomNoteObj[key2]) {
        count++;
      }
    }
  }
  if (count == Object.keys(ransomNoteObj).length) {
    return true;
  } else {
    return false;
  }
  //   console.log(Object.keys(magazineObj).length);
  //   console.log(ransomNoteObj);
  //   console.log(magazineObj);
};
console.log(canConstruct("aa", "aab"));
