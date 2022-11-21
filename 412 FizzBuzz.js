/* 
    https://leetcode.com/problems/fizz-buzz/
*/



 var fizzBuzz = function(n) {
    let response = []
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            response.push("FizzBuzz")
        } else if (i % 3 == 0) {
            response.push("Fizz")
        } else if ( i % 5 == 0) {
            response.push("Buzz")
        } else {
            response.push(String(i))
        }
    }
    
    return response //Mais rapido que 45% dos códigos
};

//Fiz essa versão mais otimizada, trocando os ifs por ternários

var fizzBuzz = function(n) {
    let response = []
    for(let i = 1; i <= n; i++) {      
        i % 3 == 0 && i % 5 == 0 ?  response.push("FizzBuzz") : i % 3 == 0 ? response.push("Fizz") : i % 5 == 0 ? response.push("Buzz") : response.push(String(i))   
    }  
    return response //Mais rápido que 79% dos códigos
};