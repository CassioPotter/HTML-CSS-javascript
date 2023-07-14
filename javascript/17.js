
let amigo = {
    nome: 'cassio',
    sexo: 'm',
    peso: 92,
    engordar(p = 0) {
        console.log('engordou')
        this.peso += p
    }
}

amigo.engordar(5)
console.log(amigo.peso)