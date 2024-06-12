//rest paramter

function myFunc(a,b, ...c){
    console.log(`a is {a}`)
    console.log(`b is {b}`)
    console.log(`c is `, c)
}
myFunc(2,3,4,5,6,7,8)

function addAll(...numbers){
    let total = 0
    for (let number of numbers){
        total = total + number
    }
    return total
}
const ans = addAll(4,5,6,7,2)
console.log(ans)
