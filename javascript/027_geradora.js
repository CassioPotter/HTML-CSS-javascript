console.log("Função geradora tem *, com varios console ela devolve o proximo")

function* cores()
{
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)