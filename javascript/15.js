let num = [0, 8, 6, 4] 

console.log(num)
num.push(1)
console.log(num)
console.log(`Tem ${num.length} valores`)
num.sort()
console.log(num)

for (let pos = 0; pos < num.length; pos = pos + 1){
    console.log (`A posiçao ${pos} tem o valor ${num[pos]}`)
}

