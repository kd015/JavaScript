const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key1 : "valueUnuique",
    key3 : "value3",
    key4 : "value4",
}

const newObject = {...obj2, ...obj1, key69: "value69"}  //yha me obj1 baad me hai to: key1 ka value obj1 wala hoga i.e. key1 : value1
console.log(newObject)

const newObject1 = {...["Item1","Item2"]}  // ye index ko key man lega: i.e. 0 : Item1 so on
console.log(newObject1)