import Calculator from './calculator';

// ============ Constants ============
const CALCULATOR = new Calculator()
const PREVIOUS = "previous"
const RESULT = "result"


// ============ Variables ============
let operation = []
let availableOperations = '='
let previousDisplay = document.getElementById(PREVIOUS)
let resultDisplay = document.getElementById(RESULT)


// ============ Functions ============
function setOperationListeners() {
    Array.from(document.getElementsByClassName("operation")).forEach((element) => {
        element.addEventListener("click", (e) => {
                //Si viene lleno con un valor anterior no se pone otro, que causaria repeticion y que hubiera 4 valores en el array en vez de 3
                // es para las operaciones encadenadas
                if (!operation[0]) {
                    operation.push(resultDisplay.value)
                }

                // let [num1, operationSymbol, num2] = getOperationData()

                let num1 = parseFloat(operation[0])
                let result
                let operationDisplay
                let finishedOperation = true

                switch (e.target.id) {
                    case "√":
                        result = CALCULATOR.squareRoot(num1)
                        operationDisplay = "√" + num1
                        break

                    case "e":
                        result = CALCULATOR.exponential(num1)
                        operationDisplay = "e^" + num1
                        break

                    default:
                        // aqui se ponen el resto de simbolos en el array operation y en el campo previous (pasa mucha cosa por aqui modificar con cuidado)
                        result = 0
                        operationDisplay = parseFloat(operation[0]) + e.target.id
                        operation.push(e.target.id)
                        finishedOperation = false
                        break
                }

                updateDisplay(operationDisplay, result, finishedOperation)
            }
        )
    })
}

function updateDisplay(stringOperation, result, addEqual=true) {
    if (addEqual) {
        stringOperation += " ="
        operation = [result]
    }
    console.log(operation)
    previousDisplay.value = stringOperation
    resultDisplay.value = result
}


function setBasicOperationsListener() {
    document.getElementById("=").addEventListener("click", () => {
        if (!Array.from(previousDisplay.value).some((letter) => letter === '=')) {
            let [num1, operationSymbol, num2] = getOperationData()
            let result;
            switch (operationSymbol) {
                case "+":
                    result = CALCULATOR.aggregation(num1, num2)
                    break
                case "-":
                    result = CALCULATOR.subtraction(num1, num2)
                    break
                case "*":
                    result = CALCULATOR.multiplication(num1, num2)
                    break
                case "/":
                    result = CALCULATOR.division(num1, num2)
                    break
            }
            updateDisplay("" + num1 + operationSymbol + num2, result)
        }
    })

}

function getOperationData() {
    // [num1, operationSymbol, num2]
    operation.push(resultDisplay.value)
    return [parseFloat(operation[0]), operation[1], parseFloat(operation[2])]
}

// Inicio funciones de limpieza
function setCleanListeners() {
    Array.from(document.getElementsByClassName("clean")).forEach((element) => {
        element.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "⌫":
                    removeLast()
                    break
                case "clear" :
                    clearAll()
                    break
            }
        })
    })
}

function removeLast() {
    let result = resultDisplay.value
    if (result.length === 1) {
        resultDisplay.value = 0
    } else {
        resultDisplay.value = result.slice(0, result.length - 1)
    }
}

function clearAll() {
    previousDisplay.value = ''
    resultDisplay.value = '0'
    operation = []
}


// Fin funciones de limpieza
function setChangeSymbolListener() {
    document.getElementById("+/-").addEventListener("click", () => {
        cleanPreviousDisplay()

        let result = resultDisplay.value

        if (result.charAt(0) !== '-') {
            resultDisplay.value = '-' + result
        } else {
            resultDisplay.value = result.slice(1, result.length)
        }
    })
}

function setNumbersListeners() {
    Array.from(document.getElementsByClassName("number")).forEach((element) => {
        element.addEventListener("click", (e) => {
            cleanPreviousDisplay()

            let currentValue = resultDisplay.value

            if ((currentValue === '0' || currentValue === '-0') && e.target.id !== '.') {
                resultDisplay.value = currentValue.replaceAll('0', e.target.id)
            } else {
                resultDisplay.value += e.target.id
            }
        })
    })
}

function cleanPreviousDisplay() {
    let previous = previousDisplay.value
    if (Array.from(previous).some((letter) => Array.from(availableOperations).some((symbol) => symbol === letter))) {
        previousDisplay.value = ''
        operation = []
        resultDisplay.value = '0'
    }
}


// ============ Listeners ============
setCleanListeners()
setBasicOperationsListener()
setOperationListeners()
setChangeSymbolListener()
setNumbersListeners()
