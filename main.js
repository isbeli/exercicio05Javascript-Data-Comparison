let pessoa1 = prompt('Nome pessoa 1:');
let pessoa2 = prompt('Nome pessoa 2:');
const idadePessoa1 = parseInt(prompt('Qual é sua idade pessoa 1:'));
const idadePessoa2 = parseInt(prompt('Qual é sua idade pessoa 2:'));
let corFavoritoPessoa1 = prompt("Cor favorito pessoa 1:");
let corFavoritoPessoa2 = prompt("Cor favorito pessoa 2:");


if (idadePessoa1 > 18) {
  console.log(`${pessoa1} é mais velho que ${pessoa2} `)
}
if (idadePessoa1 === idadePessoa2) {
  console.log(`${pessoa1} e ${pessoa2} tem a mesma idade. `)
} else {
  console.log(`${pessoa2} é menor que ${pessoa1}. `)
}

if (corFavoritoPessoa1 === corFavoritoPessoa2) {
  console.log(`A cor favorito de ${pessoa1} é a mesma de ${pessoa2}. `)
} else {
  console.log(` A cor de ${pessoa1} e diferente de ${pessoa2}. `)

}