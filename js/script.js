const moedas = {

    Dólar: {
        valor: 5.10,
        type: 'USD'
    },

    Real: {
        valor: 1.0,
        type: 'BRL'
    },

}

function onClickConverter() {
    
    const valueToConvert = (document.getElementById("input-value")).value;
    const convertedValue = document.getElementById("converted-value");
    
    
    convertedValue.value = (valueToConvert * 5.10).toFixed(2)
};

 function onClickSwap() {
    const entrada = document.getElementById("moeda-entrada");
    const saida = document.getElementById("moeda-saida");
    var aux;
    aux = entrada.value;
    entrada.value = saida.value;
    saida.value = aux; 
 }
