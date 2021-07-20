// const loadCurrencyOptions = () => {
//     document.getElementById("entrada").innerHTML = generateHtmlOptions(
//       "Dolar"
//     );
//     document.getElementById("saida").innerHTML = generateHtmlOptions(
//       "Real"
//     );
// };
//   loadCurrencyOptions();

function onClickConverter() {
    
    const valueToConvert = (document.getElementById("input-value")).value;
    const convertedValue = document.getElementById("converted-value");
    
    
    convertedValue.value = (valueToConvert * 5.10).toFixed(2)
};

// function onClickSwap() {
//     const entrada = document.getElementById('entrada');
//     const saida = document.getElementById('saida');

//     entrada = innerHtml(saida)
//     saida = innerHtml(entrada)

