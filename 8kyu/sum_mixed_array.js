// Получив массив целых чисел в виде строк и чисел, 
// верните сумму значений массива, 
// как если бы все они были числами. Верните свой ответ в виде числа

function sumMix(x){
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        let num = Number(x[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum
}


console.log(sumMix([9, 3, '7', '3']));
