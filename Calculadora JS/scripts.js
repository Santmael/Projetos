/*
  Codigo escrito por Ismael de Sousa Santos - 2022
  Trabalho desenvolvido ao acompanhamento de aula de JavaScript 2022
*/ 


// Seleciona os inputs e saidas do HTML 
const numberbutton = document.querySelectorAll('[data-Number]')
const operationbutton = document.querySelectorAll('[data-operator]')
const equalbutton = document.querySelector('[data-equals]')
const clearbutton = document.querySelector('[data-all-clear]')
const deletebutton = document.querySelector('[data-delete]')
const previoustext = document.querySelector('[data-previous-operand]')
const currenttext = document.querySelector('[data-current-operand]')

//Cria Classe para realizar os calculos
class Calculator {
  constructor(previoustext,currenttext ){
    this.previoustext = previoustext;
    this.currenttext = currenttext;
    this.clear();
  }

  
  // Função calcular
   calcular(){
     //Convertendo os valores para float e armazendo em uma variavel.
     const currentoperandfloat = parseFloat(this.currentoperand);
     const previousoperandfloat = parseFloat(this.previousoperand);
     let result;
    // Função de condição para testar se os valores são numeros.
     if(isNaN(currentoperandfloat) || isNaN(previousoperandfloat))return;
    //Entra na operação de acordo com o sinal passado no butão;
     switch(this.operation){
       case '+':
         result = currentoperandfloat + previousoperandfloat;
         break;
        case '-':
          result = currentoperandfloat - previousoperandfloat;
          break;
         case "*":
           result = currentoperandfloat * previousoperandfloat;
         break;
         case "/":
           result = currentoperandfloat / previousoperandfloat;
           break;
           default: return;
     }

     // Set o retorno na variavel result e coloca para ser mostrado na tela.
    this.currentoperand = result;
    // Operação fica em branco para entrar uma nova operação.
    this.operation = "";
    this.previousoperand ="";
  }

  //Função para pegar o valor da operação e passar para outra função calcular.
  chooseoperantion(operation){
    
    if (this.currentoperand == "") return;
    //Testa se o campo previusoperand é vazio, se for diferente de vazio chama a função calcular.
    if(this.previousoperand != ""){
      this.calcular()
    }
  // Armazena operação em uma variavel 
    this.operation = operation;
    this.previousoperand = this.currentoperand;
    this.currentoperand = '';
  }

  //Função para adicionar numeros em sequência.
  appendnumber(number){
    // Condição para adicionar apenas 1 ponto.
    if(this.currentoperand.includes(".") && number === '.')return;
        this.currentoperand = `${this.currentoperand}${number.toString()}`;
  }

  //Função de limpar a tela. define as variaveis vazias.
  clear(){
    this.currentoperand = "";
    this.previousoperand = "";
    this.operation = undefined;
  }

  // Função para atualizar a tela
  updateDisplay(){
    this.currenttext.innerText = this.currentoperand
    this.previoustext.innerText = `${this.previousoperand} ${this.operation || ""}` 
  }
  //função para deletar o ultimo valor digitado.
  delete(){
    this.currentoperand = this.currentoperand.toString().slice(0, -1);
  }
  
}

//Instâcia da classe Calculator
const calculator = new Calculator(previoustext,currenttext);

//Laço de repetição para adicionar os valores na tela ao ser digitados.
for (const nButton of numberbutton){
  nButton.addEventListener('click', ()=>{
    calculator.appendnumber(nButton.innerText);
    calculator.updateDisplay();
   
  })
}

//chama a Função de limpar e atualizar a tela.
clearbutton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();  
})

//Laço de reptição para adicionar qual operação será realizada na tela.
for(const chooseop of operationbutton){
  chooseop.addEventListener('click',()=>{
    calculator.chooseoperantion(chooseop.innerText);
    calculator.updateDisplay();
   
    } 
  )
}

//Chama a função calcular e atualizar a tela.
equalbutton.addEventListener('click', ()=>{
  calculator.calcular();
  calculator.updateDisplay();
})

//chama a função de deletar e atualizara tela.
deletebutton.addEventListener('click', ()=>{
  calculator.delete();
  calculator.updateDisplay();
})


