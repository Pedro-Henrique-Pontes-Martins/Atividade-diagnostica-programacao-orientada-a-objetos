//Variável
console.log('Variável');
var A = 6;
console.log(A);
//constante
console.log('Constante');
const B = 7;
console.log(B);
//Operações Aritiméricas
console.log('Operações Aritiméricas');
console.log(2 + 2);
//Operações Lógica
console.log('Operações Lógica');
console.log(2 >= 2);
//Estrutua de Decisão
console.log('Estrutua de Decisão');
let V = 2
if(V = 2){
    console.log(V + " é igual a 2")
}
//Estrutua de Repetição
console.log('Estrutua de Repetição');

while(V < 6){
    V++
    console.log(V)
}
//Vetores
console.log('Vetor');
let vetor = [1, 2, 3, 4, 5];
console.log(vetor)
//Matriz
console.log('Matriz');
let matriz = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
console.log(matriz);

//Código Limpo
console.log('Código Limpo');
valoresParaMedia = [10, 10, 9]
function calcularMédia(vetorComNúmeros){
    let quantidadeDeNumeros = vetorComNúmeros.length
    let somaDosNumeros = 0
    for(let i in vetorComNúmeros){
        somaDosNumeros += vetorComNúmeros[i] 
    }
    return somaDosNumeros/quantidadeDeNumeros
}
console.log(calcularMédia(valoresParaMedia))
/*O código acima é limpo, direto e legível*/
