//optional chaining:

const user = {
    fName : "Krishna",
    // address : {houseNumber : '1234'}
}

console.log(user?.fName)

//error ke place me undefine aaye!!

console.log(user?.address?.houseNumber) //optional chaining!!