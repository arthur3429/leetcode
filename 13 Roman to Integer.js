
// https://leetcode.com/problems/roman-to-integer/

// O array validate serve para validar os possíveis números romanos e impedir que o usuario introduza caracteres aleatorios
const validate = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
// Numbers armazena os valores dos algarismos romanos
const numbers = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
}

let validator = 0


function  romanToInt(s) {
    let result = 0
    let arr = []
    // o parâmetro S armazena a string de entrada da função ('LVIII'), e a variavel r divide os elementos num vetor ['L','V','I','I','I']
    const r = s.split('')

    // O try catch valida os elementos de R e se tiver algo de errado ele interrompe a execução do script e retorna um erro
    try {
        r.forEach(el => {
            validator = validate.indexOf(el)
            if (validator == -1) throw err
        }) 
    } catch (err) {
        return console.log('Erro um dos caracteres que você inseriu não corresponde a um número romano.')
    }

    
    // E como eu não podia trabalhar com a variavel r do jeito que estava, pois em alguns casos especiais um número é representado por dois algarismos romanos, eu usei esse loop para filtrar esses casos especiais e armazenar os dados corretos num vetor diferente, o arr
    for(let i = 0; i < r.length; i++) {
        if(r[i] + r[i+1] == 'IV') {
            arr.push(r[i]+r[i+1])
             r.splice(r[i], 1)
        } else if (r[i] + r[i+1] == 'IX'){
            arr.push(r[i]+r[i+1])
             r.splice(r[i], 1)
        } else if (r[i] + r[i+1] == 'XL'){
            arr.push(r[i]+r[i+1])
             r.splice(r[i], 1)
        } else if (r[i] + r[i+1] == 'XC'){
            arr.push(r[i]+r[i+1])
             r.splice(r[i], 1)
        } else if (r[i] + r[i+1] == 'CD'){
            arr.push(r[i]+r[i+1])
             r.splice(r[i], 1)
        } else if (r[i] + r[i+1] == 'CM'){
            arr.push(r[i]+r[i+1])
            r.splice(r[i], 1)
        }
        else {
            arr.push(r[i])
        }
    }

    // Com o vetor purificado, basta iterar sobre os elementos dele e ir convertendo cada um para número e somando nessa variavel result
    arr.forEach(el => {
        result += numbers[el]
    })

    console.log(result)

};

romanToInt('III') // 3
romanToInt('LVIII') // 58
romanToInt('MCMXCIV') // 1994
romanToInt('DCXVII') // 618