function preenchervisor(num) {
    const visor = document.querySelector(".visor");
    const selectedNumber = document.createElement("span");
    selectedNumber.innerHTML = num;
    window.operationsArray.push(num);
    visor.append(selectedNumber);
  }
  
function calcular() {
  const operacoes = window.operationsArray.join("");
  const resultado = eval(operacoes);
  window.operationsArray = [resultado];
  const visor = document.querySelector(".visor");
  visor.innerHTML = resultado;
}

  const createNumber = (num) => {
    const div = document.createElement("div");
    div.className = "number";
    div.innerHTML = `
          <span> ${num} </span>
      `;
    div.onclick = () => preenchervisor(num);
    return div;
  };
  
  const createNumbers = (reference) => {
    const divCalculadora = document.getElementById(reference);
  
    const divNumbers = document.createElement("div");
    divNumbers.className = "numbers";
  
    divCalculadora.append(divNumbers);
  
    let lin = document.createElement("div");
    lin.className = "row";
    divNumbers.appendChild(lin);
  
    for (let index = 9; index > 0; index--) {
      const btn = createNumber(index);
      if (index % 3 == 0) {
        lin = document.createElement("div");
        lin.className = "row";
        divNumbers.appendChild(lin);
      }
  
      lin.prepend(btn);
    }
    
  const btnMais = createNumber("+");
  const btnMenos = createNumber("-");
  const btnVezes = createNumber("*");
  const btnDividir = createNumber("/");
  divNumbers.appendChild(btnMais);
  divNumbers.appendChild(btnMenos);
  divNumbers.appendChild(btnVezes);
  divNumbers.appendChild(btnDividir);

  const btnIgual = createNumber("=");
  btnIgual.onclick = calcular;
  divNumbers.appendChild(btnIgual);
  };

  const createVisor = (reference) => {
    const divCalculadora = document.getElementById(reference);
    let visor = document.createElement("div");
    visor.className = "visor";
    divCalculadora.appendChild(visor);
  };
  
  const executar = (reference) => {
    console.log("carregando coisas aqui..... aguarde");
    createVisor(reference);
    createNumbers(reference);
    window.operationsArray = [];
  };
  
  executar("calculadora");
  