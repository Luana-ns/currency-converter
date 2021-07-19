function onClickConverter() {
    
    const valueToConvert = (document.getElementById("input-value")).value;
    const convertedValue = document.getElementById("converted-value");
    
    
    convertedValue.value = (valueToConvert * 5.10).toFixed(2)
};
