const coins = {
    Dolar: {
        value: 5.10,
        type: 'USD'
    },

    Real: {
        value: 1.00,
        type: 'BRL'
    }
};

function onClickConverter() {

    const entryCurrency =
        coins[document.getElementById("entrada")];
    const exitCurrency =
        coins[document.getElementById("saida")];
    const valueToConvert = Number(document.getElementById("input-value"));

    //conversão
    const conversionRatio = entryCurrency.value / exitCurrency.value;
    const convertedValue = valueToConvert * conversionRatio;

    //convertion ratio: taxa de conversão
    let conversionDisplay = convertedValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: exitCurrency.type
    });
    console.log(convertedValue);
    document.getElementById("converted-value").innerHTML = conversionDisplay;
};

onClickConverter(coins) 

//tentei chamar a função mas mesmo assim não deu certo... 