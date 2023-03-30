function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(5, 2))

function qua(n) {
    return n*n
}

console.log(qua(5))

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat*=c
    }
    return fat
}

console.log(fatorial(5))
