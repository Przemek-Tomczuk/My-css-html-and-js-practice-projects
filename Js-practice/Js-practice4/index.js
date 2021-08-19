let myName = "Przemysław"

for (j = 0; j < myName.length; j++) {
    console.log(myName[j])
}

let names = ['Dagmara', 'Weronika', 'Tomasz', 'Przemysław']

for (element of names) {
    console.log(element + ' Tomczuk')
}

let i = 0

while (i < 10) {
    console.log(i)
    i++
}

let n = ""

while (n.length < 10) {
    console.log(n)
    n = n + "a"
}

let computer = {
    ram: "8gb",
    cpu: "quad core",
    storage: "1tb",
}


for (key in computer) {
    console.log(key + " spec is " + computer[key])
}