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

function calculateCambio() {
    
    const valueToConvert = (document.getElementById("input-value")).value;
    const convertedValue = document.getElementById("converted-value");
    const saida = document.getElementById("moeda-saida").value;
    const entrada = document.getElementById("moeda-entrada").value;
    const conversionRatio = moeda[entrada].valor / moeda[saida].valor;
    
    convertedValue.value = (valueToConvert * conversionRatio).toFixed(2)

};

 function invertedCurrency() {
    const entrada = document.getElementById("moeda-entrada");
    const saida = document.getElementById("moeda-saida");
    var aux;    
    aux = entrada.value;
    entrada.value = saida.value;
    saida.value = aux; 
    calculateCambio()
 };
