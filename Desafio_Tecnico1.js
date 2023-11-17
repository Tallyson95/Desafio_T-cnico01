const somarDivisores = (num) => {
    var soma = 0;
    for(var i = 1; i< num; i++){
        if( (i % 3 == 0) || (i % 5 == 0) ){
            soma+=i;
        }
    }
    return soma;
}
// para todos os valores inseridos em N, a função retornará os valores divisíveis por 3 ou 5 inferiores a N
// para testar outros valores é só alterar o N
var n = 10;
var result = somarDivisores(n);
console.log(`O resultado da soma dos divisores de 3 e  5 inferiores a ${n} é: ${result}`);