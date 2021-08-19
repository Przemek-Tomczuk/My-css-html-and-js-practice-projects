var nums = [1,2,3,4]

const isPositive = num => num > 0
console.log(nums.every(isPositive))

const isBiggerThanThree = (num) => num > 3
console.log(nums.some(isBiggerThanThree))

nums.forEach(element => console.log(element + " sheep"))

var doubleNums = nums.map(num => (num*2) * 2)
console.log(doubleNums)

var dollars = nums.map(element => '$' + element.toFixed(2))
console.log(dollars)

function whetherPositive(num) {
    if (num > 0) {
        return true
    } else {
        return false
    }
}
var booleans = nums.map(element => whetherPositive(element))
console.log(booleans)

var negatives = nums.filter(element => element < 0)
console.log(negatives)

var evens = nums.filter(element => (element % 2) === 0)
console.log(evens)

const reducer = (num, num1) => num + num1
var sum = nums.reduce(reducer)
console.log(sum)

const stringReducer = (num, num1) => (num) + (num1 + " sheep ")
var sumSheep = nums.reduce(stringReducer, "")
console.log(sumSheep)

var coach = 'aaron'
console.log(coach.split('').filter(element => element != 'a').join(''))

var tripleNums = nums.map(element => element*3).reduce(reducer)
console.log(tripleNums)

var printHelloName = function(firstName) {
    return console.log("Hello, " + firstName + "!")
  }

  var getInitials = function(name) {
    let splitName = name.split(" ")
    return splitName[0][0].toUpperCase() + "." + splitName[1][0].toUpperCase()
}
console.log(getInitials("aaron jack"))

var sumOfPositive = function(nums) {
    let i = 0
    let sum = 0
    while (i < nums.length) {
        if (nums[i] > 0) {
            sum = sum + nums[i]
            i++} 
        else {
            i++}}
    return sum
  }

  let numerki = [1,-1,2,3]
  console.log(sumOfPositive(numerki))

var multiplyNumbers = function(num1, num2) {
    let sum = 0
    while (num2 > 0) {
        sum += num1
        num2 = num2 - 1 
    }
    return sum
}
  
var repeatString = function(s, n) {
    let string = ""
    while (n--) {
    string += s}
    return string
  }

var isPalindrome = function(str) {
    let i = 0
    let j = str.length - 1
    while (i != j){
        if (str[i] != str[j]){
            return false}
        else {
            i++
            j--
        }}
    return true
  }  
console.log(isPalindrome("xsz"))

var countOdd = function(n) {
    let sum = 0
    while (n--) {
    if (n % 2 != 0) {
    sum += 1}}
    return sum
  }

  var sumMultiples = function(n) {
    let sum = 0
    while (n--) {
    if (n % 3 === 0 || n % 5 === 0) {
    sum += n}}
    return sum
  }

var unbalancedArray = function (nums) {
    var absNum = nums.map(num => Math.abs(num))
    console.log(absNum)
    var sortNum = absNum.sort()
    console.log(sortNum)
    let i = 0
    let j = i+1
    let n = nums.length
    while (n--) {
        if (sortNum[i] === sortNum[j]) {
            sortNum.shift()
            sortNum.shift()
            sortNum
        }
    }
    var result = sortNum.shift()
    return result
}

let numereczki = [-1, 4, 1, 5, -4]
console.log(numereczki)
console.log(unbalancedArray(numereczki))

var countVowels = function(s) {
    function isVowel(char) {
        let vowels = "aeiouy"
        console.log(vowels[0])
        let n = vowels.length
        console.log(n)
        while (n--) {
            if (char === vowels[n]) {
                return true
            } else {
                continue
            }
        }
        return false
    }
    let stringLength = s.length
    console.log(stringLength)
    let sum = 0
    while (stringLength--) {
        if (isVowel(s[stringLength])) {
            sum += 1
        }
    }
    return sum 
}

let litereczki = "charakter"
console.log(countVowels(litereczki))