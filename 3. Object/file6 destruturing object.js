const band = {
    bandName :"led zepplin",
    famousSong : "stairway to heaven",
    year : 1969,
    anotherFamousSong : "kashmir",
}

//destructuring object
let { bandName, famousSong} = band
console.log(bandName)

//remaining ko new object me: aur variable name change krna!
let { bandName:var1, famousSong:var2, ...restProps} = band
console.log(var1)
console.log(restProps)



