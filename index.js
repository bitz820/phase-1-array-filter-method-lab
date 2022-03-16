// Code your solution here

// filter((arr) => {
//     let string = string.toLowerCase();
//     (arrNames === string)
// }
// return arrNames
// )

// const findMatching = arrNames.filter(arrName => (arrName.toLowerCase() === string.toLowerCase()))

function findMatching(arrNames, string){
   return arrNames.filter(arrName => arrName.toLowerCase() === string.toLowerCase())}
    
    
function fuzzyMatch (arrNames, string){
    return arrNames.filter(arrName => arrName.charAt(0) === string.charAt(0))
}

function matchName(arrNames, string){
    return arrNames.filter(arrName => arrName.name === string)
}