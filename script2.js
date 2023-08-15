document.getElementById('btn-tripple').addEventListener('click',function(){
    const userInput = document.getElementById('user-input');
    const userInputValueString = userInput.value ;
    const userInputValue = parseFloat(userInputValueString);

    const trippleOutput = userInputValue*3;

    const outputDisplayTripple = document.getElementById('output-display');
    const outputDisplayValueString = outputDisplayTripple.innerText;
    const outputDisplayValue = parseFloat(outputDisplayValueString);
    outputDisplayTripple.innerText=trippleOutput;
    userInput.value = '';
    document.getElementById('reset').addEventListener('click',function(){
        outputDisplayTripple.innerText = '0';
    })
})