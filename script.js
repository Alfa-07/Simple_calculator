let currentOperation ='';
let currentNumber='';
let operation='';

function appendNumber(number){
    currentNumber +=number;
    document.getElementById('display').value = currentNumber;
}

function setOperation(op){
    if(currentNumber==='') return;
    operation =op;
    currentOperation = currentNumber + ''+op+' ';
    currentNumber ='';
}
function clearDisplay() {
    currentNumber = '';
    currentOperation = '';
    operation = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (currentNumber === '') return;
    currentOperation += currentNumber;
    document.getElementById('display').value = eval(currentOperation);
    currentNumber = '';
    currentOperation = '';
}