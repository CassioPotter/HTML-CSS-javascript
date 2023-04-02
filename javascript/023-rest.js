function soma(n1, n2)
{
    return n1 + n2
}

console.log(soma(2, 2))
console.log ("Rest podde colocar quantos valores quiser")

function soma2(...valores)
{
    let tam = valores.length
    let res = 0
    for (let i = 0; i < tam; i++)
    { 
        res += valores[i]
    }
    return res
}

console.log(soma2(2, 2, 2, 2, 2))