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
function setBasicOperationsListener() {
    document.getElementById("=").addEventListener("click", () => {
        if (!Array.from(previousDisplay.value).some((letter) => letter === '=')) {
            let {num1, operationSymbol, num2} = getOperationData()
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

            updateDisplay(num1 + operationSymbol + num2, result)
        }
    })

}


function getOperationData() {
    // let [num1, operationSymbol, num2] = operation
    operation.push(resultDisplay.value)
    return [parseFloat(operation[0]), operation[1], parseFloat(operation[2])]
}


function updateDisplay(string_operation, result) {
    previousDisplay.value = string_operation + " ="
    resultDisplay.value = result
    operation = [result]
}

function setRemoveListener() {
    document.getElementById("⌫").addEventListener("click", () => {
        removeLast()
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

function setClearListener() {
    document.getElementById("clear").addEventListener("click", () => {
       clearAll()
    })
}

function clearAll() {
    previousDisplay.value = ''
    resultDisplay.value = '0'
    operation = []
}





function setOperationListeners() {
    Array.from(document.getElementsByClassName("operation")).forEach((element) => {

        element.addEventListener("click", (e) => {
                if (!operation[0]) {
                    operation.push(resultDisplay.value)
                }

                let num1 = parseFloat(operation[0])
                let result
                let previousDisplay2

                switch (e.target.id) {
                    case "√":
                        result = CALCULATOR.squareRoot(num1)
                        previousDisplay2 = "√" + num1
                        break

                    case "e":
                        result = CALCULATOR.exponential(num1)
                        previousDisplay2 = "e^" + num1
                        break

                    default:
                        replaceResultField(e)
                        break
                }

                updateDisplay(previousDisplay2, result)

            }
        )
    })
}

function replaceResultField(e) {
   previousDisplay.value = parseFloat(operation[0]) + e.target.id
    resultDisplay.value = 0
    operation.push(e.target.id)
}

function setChangeSymbolListener() {
    document.getElementById("+/-").addEventListener("click", () => {
        removePrevious()

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
            removePrevious()

            let temp = resultDisplay.value

            if ((temp === '0' || temp === '-0') && e.target.id !== '.') {
                resultDisplay.value = temp.replaceAll('0', e.target.id)
            } else {
                resultDisplay.value += e.target.id
            }
        })
    })
}

function removePrevious() {
    let result = previousDisplay.value
    if (Array.from(result).some((letter) => Array.from(availableOperations).some((symbol) => symbol === letter))) {
       previousDisplay.value = ''
        operation = []
        resultDisplay.value = '0'
    }
}

// ============ Listeners ============
setBasicOperationsListener()
setOperationListeners()
setRemoveListener()
setChangeSymbolListener()
setClearListener()
setNumbersListeners()
