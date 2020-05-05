
function anagrams(word, words) {
    let anagramList = [];
    for (let i = 0; i < words.length; i++) {
       const guess = words[i];
       console.log(word, '??', guess);
        
       if (isItAnagram(word, guess) {
            anagramList.push( guess);
        }
    }
    return anagramList;
}

function isItAnagram(word1, word2) {
    return true / false;
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); //'->[aabb, bbaa]'));

//reikia cikle pagal zodzio ilgi patikrinti ar kiekviena zodzio raide
// yra masyvo zodyje, jei taip ta zodi ideti i nauja masyva, 
// jei ne praleisti 


// What is an anagram? Well, two words are anagrams 
// of each other if they both contain the same letters.
// For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list.
//  You will be given two inputs a word and an array with words. 
//  You should return an array of all the anagrams 
//  or an empty array if there are none. 
//  For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []