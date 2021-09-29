const moeda = {
    Dolar: {
        valor: 5.10,
        type: 'USD'
    },
    Real: {
        valor: 1.0,
        type: 'BRL'
    },

};

const entrada = document.getElementById("moeda-entrada");
const saida = document.getElementById("moeda-saida");

function calculateCambio() {
    const valueToConvert = (document.getElementById("input-value")).value;
    const convertedValue = document.getElementById("converted-value");
    const conversionRatio = moeda[entrada.value].valor / moeda[saida.value].valor;
    convertedValue.value = (valueToConvert * conversionRatio).toFixed(2)
};

 function invertedCurrency() {
    var aux;    
    aux = entrada.value;
    entrada.value = saida.value;
    saida.value = aux; 
    calculateCambio()
 };