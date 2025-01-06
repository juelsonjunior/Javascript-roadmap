//ParseFloat -Transforma um string em um numero decimal
console.log("----------ParseFloat----------"); 
console.log(parseFloat('12.898'));
console.log(Number.parseFloat('100.89'));

//ParseInt -Transforma um string em um numero inteiro
console.log("----------ParseInt----------");
console.log(parseInt('1000.9'));
console.log(parseInt(10.0));

//toFixed -Limita a quantidade de casas decimais
console.log("----------toFixed----------");
console.log(20.5090.toFixed(1))
console.log(15.200.toFixed(2))

//isNaN -Verifia se é um numero
console.log("----------isNaN----------");
console.log(isNaN('10'))
console.log(isNaN(30))
console.log(isNaN("teste"))

//MAX_VALUE AND MIN_VALUE
console.log("----------MAX_VALUE AND MIN_VALUE----------");
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(2.7976931348623157e+308)
