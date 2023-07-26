// Write a function that takes in the string and the list of of dog names,
// loops through the list and check that the current name is in the string passed in.
// The output should be: "Matched dog_name" if the name is in the string. 
// If no matches are present, console.log "No Matches"


let dog_names = ['Max', 'HAS', 'PuRple', 'dog'];
let string = "Hello Max, my name is Dog, and I have purple eyes!";

function findWords() {
    for (dog_name of dog_names) {
        if (string.includes(dog_name)) {
            console.log(`Matched ${dog_name}`)
        } else {
            console.log('No Matches')
        }
    }
}
console.log(findWords())

// Write a function that takes in an array and remove every even index with a splice,
// and replace it with the string 'even index'


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEven() {
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            arr.splice(i, 1, 'replace even');
        } else {
            continue
        }
    }
    return arr
}

console.log(replaceEven())