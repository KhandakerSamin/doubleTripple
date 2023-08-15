document.getElementById('btn-double').addEventListener('click',function(){
    const userInput = document.getElementById('user-input');
    const userInputValueString = userInput.value ;
    const userInputValue = parseFloat(userInputValueString);

    const doubleOutput = userInputValue*2;

    const outputDisplayDouble = document.getElementById('output-display');
    const outputDisplayValueString = outputDisplayDouble.innerText;
    const outputDisplayValue = parseFloat(outputDisplayValueString);
    outputDisplayDouble.innerText=doubleOutput;
    userInput.value = '';
    document.getElementById('reset').addEventListener('click',function(){
        outputDisplayDouble.innerText = '0';
    })
    
})