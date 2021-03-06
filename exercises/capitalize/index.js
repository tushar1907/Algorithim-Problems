// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++){
        if(str[i-1] === ' '){
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result; 
    
}

module.exports = capitalize;


// function capitalize(str) {

//     let str1 = []

//     for(let char of str.split(' ')){
//         char1 = char.split('')        
//         char1[0] = char1[0].toUpperCase();
//         char = char1.join('');        
//         str1.push(char)
//     }

    
//     return str1.join(' ');
// }