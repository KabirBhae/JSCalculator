let valueButton = document.getElementsByClassName('valueButton');
let operator = document.getElementsByClassName('operatorButton');
let allClear = document.getElementsByClassName('allClearButton');
let deleteButton = document.getElementsByClassName('deleteButton');
let equalsButton = document.getElementsByClassName('equalsButton');
let previousOperand = document.getElementById('previous-operand');
let nextOperand = document.getElementById('next-operand');

function operation(operand1,operand2,symbol){
    let result;

    if (symbol == '+'){
        result = operand1 + operand2;
        return result;
    }
    else if (symbol == '-'){
        result = operand1 - operand2;
        return result;
    }
    else if (symbol == '*'){
        result = operand1 * operand2;
        return result;
    }
    else if (symbol == '÷'){
        result = operand1 / operand2;
        return result;
    }
}


for(let i = 0; i < valueButton.length; i++){
    valueButton[i].addEventListener('click',function(){
        nextOperand.innerText = nextOperand.innerText + valueButton[i].innerText;
    })
}

   
equalsButton[0].addEventListener('click',function(){

        if (nextOperand.innerText != '') {                          /*nextOperand is not empty*/
    
            if(previousOperand.innerText != ''){                    /*previousOperand is not empty*/
                    let variable1 = parseFloat(previousOperand.innerText);
                    let variable2 = parseFloat(nextOperand.innerText);
                    let lastCharacter = previousOperand.innerText[previousOperand.innerText.length-1];
                    let result = operation(variable1,variable2,lastCharacter); /*operation function is a custom function*/
                    previousOperand.innerText = '';
                    nextOperand.innerText = result;
            }
            else{                                                   /*previousOperand is empty*/
                //does nothing
            }
        }
        else{                                                       /*nextOperand is empty*/
            // does nothing
        }
})


for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        
        if (nextOperand.innerHTML != ''){                   /*nextOperand is not empty*/

            if(previousOperand.innerHTML==''){
                previousOperand.innerText = nextOperand.innerText + operator[i].innerText;
                nextOperand.innerHTML = '';
            }
            else{
                let variable1 = parseFloat(previousOperand.innerText);
                let variable2 = parseFloat(nextOperand.innerText);
                let lastCharacter = previousOperand.innerText[previousOperand.innerText.length-1];
                let result = operation(variable1,variable2,lastCharacter);
                nextOperand.innerText = '';
                previousOperand.innerText = result + operator[i].innerHTML;
                
            }
        }
        else{                                               /*nextOperand is empty*/
            if (previousOperand.innerText != ''){
                // console.log(previousOperand.innerText);
                // console.log(previousOperand.innerText[previousOperand.innerText.length-1]);
                // console.log(operator[i].innerHTML);

                // previousOperand.innerText[previousOperand.innerText.length-1] = operator[i].innerHTML;
                // console.log(previousOperand.innerText);

                
            }
            else{
                //do nothing
            }
        }
    })
}


allClear[0].addEventListener('click',function(){
    previousOperand.innerText = '';
    nextOperand.innerText = '';
})

deleteButton[0].addEventListener('click',function(){
    nextOperand.innerHTML = nextOperand.innerHTML.substring(0,nextOperand.innerHTML.length-1);
})
