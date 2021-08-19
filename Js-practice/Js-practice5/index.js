function divNum (n) {
    n = n / 2
    return Math.floor(n)
}

console.log(divNum(1235))

function upperFirst(string) {
    return string = string[0].toUpperCase() + string.slice(1)
}

console.log(upperFirst("i love javascript"))

console.log("i love javascript".indexOf('j'))
console.log("i love javascript".indexOf('z'))
console.log("i love javascript".slice(7,20))
console.log("i love javascript".slice(1,6))
console.log("i love javascript".replace("javascript","HTML"))
console.log("i love javascript".split(" "))

let num = 5.56789

function fixedString(num) {
    num = num.toFixed(2)
    return num.toString()
}
console.log(fixedString(num))

let str = "$" + fixedString(num)
console.log(str)

let ageMax = Math.max(24,28)
console.log(ageMax)

let array = [1,2,3,4]
let slicedArray = array.slice(2,4)
slicedArray.push(5, 6)

slicedArray.splice(1,2)
console.log(slicedArray)

var name ="Igor Z"
name.toUpperCase().split(" ")

var alphabet = "abc"
console.log(alphabet.split('').reverse().join(""))

var myNumber = 100
console.log(myNumber.toFixed(2).split(".")[1])


var coachName = "jan frey"
console.log(coachName.split(" ")[1][0].toUpperCase() + " is the last initial")
