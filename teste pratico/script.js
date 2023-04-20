/* Questão 1 */

var INDICE = 13;
var SOMA = 0;
var K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("A soma dos números de 1 a 13 é: " + SOMA);

/* questão 2 */
function verificaNumeroDaSequencia(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
  
    while (num3 < num) {
      num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
    }
  
    if (num3 === num) {
      console.log(num + " pertence à sequência de Fibonacci.");
    } else {
      console.log(num + " não pertence à sequência de Fibonacci.");
    }
  }
  
  verificaNumeroDaSequencia(13);

  /* questao 3 */

/* 
a) A lógica é acrescentar 2 ao número anterior. Portanto, o próximo elemento será 9.

b) A lógica é multiplicar o número anterior por 2. Portanto, o próximo elemento será 128.

c) A lógica é elevar o índice da posição ao quadrado. Portanto, o próximo elemento será 49.

d) A lógica é elevar o índice da posição ao quadrado e, em seguida, multiplicar por 4. Portanto, o próximo elemento será 100.

e) A lógica é somar os dois números anteriores para obter o próximo. Portanto, o próximo elemento será 13.

f)não consegui identificar uma logica por traz dessa sequencia*/

/* questão 4 */

 /*  não consegui resolver a questao pedida */

  /* questao 5 */

  function inverterString(str) {
    let strInvertida = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
  
    return strInvertida;
  }
  
  let minhaString = "Eu quero essa vaga";
  let minhaStringInvertida = inverterString(minhaString);
  
  console.log(minhaStringInvertida);

  