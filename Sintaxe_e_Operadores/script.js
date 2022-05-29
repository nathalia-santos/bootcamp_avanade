function comparaNumero(num1, num2) {
    if (!num1 || !num2) return 'Defina dois números!';

    let simOuNao = num1 === num2 ? 'são iguais':'não são iguais';
    let soma = num1 + num2;
    let menor20 = soma <= 20 ? 'é menor que 20':'é maior que 20';
    let maior10 = soma >= 10 ? 'é maior que 10':'é menor que 10';
    console.log(`Os números ${num1} e ${num2} ${simOuNao}. Sua soma é ${soma}, que ${maior10} e ${menor20}.`);
}

console.log(comparaNumero(0, 2))