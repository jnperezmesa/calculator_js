import Calculator from './calculator';

// ============ Variables ============
const CALCULATOR = new Calculator()
let operation = []
let availableOperations = '='


// ============ Functions ============
function setEqualListener() {
    document.getElementById("=").addEventListener("click", () => {
        let result = document.getElementById("previous").value
        if (!Array.from(result).some((letter) => letter === '=')) {
            operation.push(document.getElementById("result").value)
            let num1 = parseFloat(operation[0])
            let operationSymbol = operation[1]
            let num2 = parseFloat(operation[2])
            let result;
            switch (operationSymbol) {
                case "+":
                    result = CALCULATOR.aggregation(num1, num2)
                    document.getElementById("previous").value = num1 + '+' + num2 + " ="
                    document.getElementById("result").value = result
                    operation = [result]
                    break
                case "-":
                    result = CALCULATOR.subtraction(num1, num2)
                    document.getElementById("previous").value = num1 + '-' + num2 + " ="
                    document.getElementById("result").value = result
                    operation = [result]
                    break
                case "*":
                    result = CALCULATOR.multiplication(num1, num2)
                    document.getElementById("previous").value = num1 + '*' + num2 + " ="
                    document.getElementById("result").value = result
                    operation = [result]
                    break
                case "/":
                    result = CALCULATOR.division(num1, num2)
                    document.getElementById("previous").value = num1 + '/' + num2 + " ="
                    document.getElementById("result").value = result
                    operation = [result]
                    break
            }
        }
    })

}

function setRemoveListener() {
    document.getElementById("⌫").addEventListener("click", () => {
        let result = document.getElementById("result").value
        if (result.length === 1) {
            document.getElementById("result").value = 0
        } else {
            document.getElementById("result").value = result.slice(0, result.length - 1)

        }
    })

}

function setChangeSymbolListener() {
    document.getElementById("+/-").addEventListener("click", () => {
        removePrevious()

        let result = document.getElementById("result").value

        if (result.charAt(0) !== '-') {
            document.getElementById("result").value = '-' + result
        } else {
            document.getElementById("result").value = result.slice(1, result.length)
        }
    })

}

function setClearListener() {
    document.getElementById("clear").addEventListener("click", () => {
        document.getElementById("previous").value = ''
        document.getElementById("result").value = '0'
        operation = []
    })
}

function setNumbersListeners() {
    Array.from(document.getElementsByClassName("number")).forEach((element) => {
        element.addEventListener("click", (e) => {
            removePrevious()

            let temp = document.getElementById("result").value

            if ((temp === '0' || temp === '-0') && e.target.id !== '.') {
                document.getElementById("result").value = temp.replaceAll('0', e.target.id)
            } else {
                document.getElementById("result").value += e.target.id
            }
        })
    })
}

function setOperationListeners() {
    Array.from(document.getElementsByClassName("operation")).forEach((element) => {

        element.addEventListener("click", (e) => {

                if (!operation[0]) {
                    operation.push(document.getElementById("result").value)
                }

                let num1 = parseFloat(operation[0])
                let result
                switch (e.target.id) {
                    case "√":
                        result = CALCULATOR.squareRoot(num1)
                        document.getElementById("previous").value = "√" + num1 + " ="
                        document.getElementById("result").value = result
                        operation = [result]
                        break

                    case "e":
                        result = CALCULATOR.exponential(num1)
                        document.getElementById("previous").value = "e^" + num1 + " ="
                        document.getElementById("result").value = result
                        operation = [result]
                        break

                    default:
                        replaceResultField(e)
                        break
                }

            }
        )
    })
}

function replaceResultField(e) {
    document.getElementById("previous").value = parseFloat(operation[0]) + e.target.id
    document.getElementById("result").value = 0
    operation.push(e.target.id)
}

function removePrevious() {
    let result = document.getElementById("previous").value
    if (Array.from(result).some((letter) => Array.from(availableOperations).some((symbol) => symbol === letter))) {
        document.getElementById("previous").value = ''
        operation = []
        document.getElementById("result").value = '0'
    }
}

// ============ Listeners ============
setEqualListener()
setRemoveListener()
setChangeSymbolListener()
setClearListener()
setNumbersListeners()
setOperationListeners()