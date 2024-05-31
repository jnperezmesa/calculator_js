/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/calculator.js":
/*!*******************************!*\
  !*** ./scripts/calculator.js ***!
  \*******************************/
/***/ ((module) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _Calculator_brand = /*#__PURE__*/new WeakSet();\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n    _classPrivateMethodInitSpec(this, _Calculator_brand);\n  }\n  return _createClass(Calculator, [{\n    key: \"aggregation\",\n    value: function aggregation(firstNumber, secondNumber) {\n      try {\n        _assertClassBrand(_Calculator_brand, this, _validateNumbers).call(this, firstNumber, secondNumber);\n        return _assertClassBrand(_Calculator_brand, this, _getResult).call(this, firstNumber + secondNumber);\n      } catch (error) {\n        return error.message;\n      }\n    }\n  }, {\n    key: \"subtraction\",\n    value: function subtraction(firstNumber, secondNumber) {\n      try {\n        _assertClassBrand(_Calculator_brand, this, _validateNumbers).call(this, firstNumber, secondNumber);\n        return _assertClassBrand(_Calculator_brand, this, _getResult).call(this, firstNumber - secondNumber);\n      } catch (error) {\n        return error.message;\n      }\n    }\n  }, {\n    key: \"multiplication\",\n    value: function multiplication(firstNumber, secondNumber) {\n      try {\n        _assertClassBrand(_Calculator_brand, this, _validateNumbers).call(this, firstNumber, secondNumber);\n        return _assertClassBrand(_Calculator_brand, this, _getResult).call(this, firstNumber * secondNumber);\n      } catch (error) {\n        return error.message;\n      }\n    }\n  }, {\n    key: \"division\",\n    value: function division(firstNumber, secondNumber) {\n      try {\n        _assertClassBrand(_Calculator_brand, this, _validateNumbers).call(this, firstNumber, secondNumber);\n        _assertClassBrand(_Calculator_brand, this, _isZeroDivision).call(this, secondNumber);\n        return _assertClassBrand(_Calculator_brand, this, _getResult).call(this, firstNumber / secondNumber);\n      } catch (error) {\n        return error.message;\n      }\n    }\n  }, {\n    key: \"squareRoot\",\n    value: function squareRoot(number) {\n      try {\n        _assertClassBrand(_Calculator_brand, this, _validateNumbers).call(this, number);\n        _assertClassBrand(_Calculator_brand, this, _isLessThanZero).call(this, number);\n        var initialValue = 600;\n        var result = 0;\n        if (number !== 0) {\n          result = _assertClassBrand(_Calculator_brand, this, _approximateSquareRoot).call(this, number, initialValue);\n        }\n        return _assertClassBrand(_Calculator_brand, this, _getResult).call(this, result);\n      } catch (error) {\n        return error.message;\n      }\n    }\n  }, {\n    key: \"exponential\",\n    value: function exponential(number) {\n      try {\n        _assertClassBrand(_Calculator_brand, this, _validateNumbers).call(this, number);\n        var isNegative = _assertClassBrand(_Calculator_brand, this, _isNegative).call(this, number);\n        if (isNegative) {\n          number = -number;\n        }\n        var result = _assertClassBrand(_Calculator_brand, this, _calculateExponential).call(this, number, isNegative);\n        return _assertClassBrand(_Calculator_brand, this, _getResult).call(this, result);\n      } catch (error) {\n        return error.message;\n      }\n    }\n  }]);\n}();\nfunction _isZeroDivision(divisor) {\n  if (divisor === 0) {\n    throw new Error('Not possible');\n  }\n}\nfunction _approximateSquareRoot(number, previousApproximation) {\n  var newApproximation = 0.5 * (previousApproximation + number / previousApproximation);\n  if (newApproximation.toFixed(3) === previousApproximation.toFixed(3)) {\n    return newApproximation;\n  } else {\n    return _assertClassBrand(_Calculator_brand, this, _approximateSquareRoot).call(this, number, newApproximation);\n  }\n}\nfunction _isLessThanZero(number) {\n  if (_assertClassBrand(_Calculator_brand, this, _isNegative).call(this, number)) {\n    throw new Error('Not possible');\n  }\n}\nfunction _calculateExponential(number, isNegative) {\n  var sumOfSeries = 1.0;\n  var term = 1.0;\n  for (var n = 1; term > 1e-3; n++) {\n    term *= number / n;\n    sumOfSeries += term;\n  }\n  return isNegative ? 1.0 / sumOfSeries : sumOfSeries;\n}\nfunction _validateNumbers() {\n  var _this = this;\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n  var hasInvalidNumber = numbers.some(function (number) {\n    return !_assertClassBrand(_Calculator_brand, _this, _isNumber).call(_this, number);\n  });\n  if (hasInvalidNumber) {\n    throw new Error('Invalid number');\n  }\n}\nfunction _isNegative(number) {\n  return number < 0;\n}\nfunction _isNumber(number) {\n  return typeof number == 'number';\n}\nfunction _getResult(result) {\n  if (_assertClassBrand(_Calculator_brand, this, _isFloat).call(this, result)) {\n    return _assertClassBrand(_Calculator_brand, this, _fixedPrecision).call(this, result);\n  } else {\n    return result;\n  }\n}\nfunction _isFloat(number) {\n  return number % 1 !== 0;\n}\nfunction _fixedPrecision(number) {\n  return parseFloat(number.toFixed(3));\n}\nmodule.exports = Calculator;\n\n//# sourceURL=webpack://calculator/./scripts/calculator.js?");

/***/ }),

/***/ "./scripts/ui.js":
/*!***********************!*\
  !*** ./scripts/ui.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./scripts/calculator.js\");\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calculator__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n// ============ Constants ============\nvar CALCULATOR = new (_calculator__WEBPACK_IMPORTED_MODULE_0___default())();\nvar PREVIOUS = \"previous\";\nvar RESULT = \"result\";\n\n// ============ Variables ============\nvar operation = [];\nvar availableOperations = '=';\nvar previousDisplay = document.getElementById(PREVIOUS);\nvar resultDisplay = document.getElementById(RESULT);\n\n// ============ Functions ============\nfunction setBasicOperationsListener() {\n  document.getElementById(\"=\").addEventListener(\"click\", function () {\n    if (!Array.from(previousDisplay.value).some(function (letter) {\n      return letter === '=';\n    })) {\n      var _getOperationData = getOperationData(),\n        _getOperationData2 = _slicedToArray(_getOperationData, 3),\n        num1 = _getOperationData2[0],\n        operationSymbol = _getOperationData2[1],\n        num2 = _getOperationData2[2];\n      var result;\n      switch (operationSymbol) {\n        case \"+\":\n          result = CALCULATOR.aggregation(num1, num2);\n          break;\n        case \"-\":\n          result = CALCULATOR.subtraction(num1, num2);\n          break;\n        case \"*\":\n          result = CALCULATOR.multiplication(num1, num2);\n          break;\n        case \"/\":\n          result = CALCULATOR.division(num1, num2);\n          break;\n      }\n      updateDisplay(\"\" + num1 + operationSymbol + num2, result);\n    }\n  });\n}\nfunction getOperationData() {\n  // [num1, operationSymbol, num2]\n  operation.push(resultDisplay.value);\n  return [parseFloat(operation[0]), operation[1], parseFloat(operation[2])];\n}\nfunction setOperationListeners() {\n  Array.from(document.getElementsByClassName(\"operation\")).forEach(function (element) {\n    element.addEventListener(\"click\", function (e) {\n      if (!operation[0]) {\n        operation.push(resultDisplay.value);\n      }\n\n      // let [num1, operationSymbol, num2] = getOperationData()\n\n      var num1 = parseFloat(operation[0]);\n      var result;\n      var operationDisplay;\n      var finishedOperation = true;\n      switch (e.target.id) {\n        case \"√\":\n          result = CALCULATOR.squareRoot(num1);\n          operationDisplay = \"√\" + num1;\n          break;\n        case \"e\":\n          result = CALCULATOR.exponential(num1);\n          operationDisplay = \"e^\" + num1;\n          break;\n        default:\n          result = 0;\n          operationDisplay = parseFloat(operation[0]) + e.target.id;\n          operation.push(e.target.id);\n          finishedOperation = false;\n          break;\n      }\n      updateDisplay(operationDisplay, result, finishedOperation);\n    });\n  });\n}\nfunction updateDisplay(stringOperation, result) {\n  var addEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  if (addEqual) {\n    stringOperation += \" =\";\n    operation = [result];\n  }\n  console.log(operation);\n  previousDisplay.value = stringOperation;\n  resultDisplay.value = result;\n}\nfunction setCleanListeners() {\n  Array.from(document.getElementsByClassName(\"clean\")).forEach(function (element) {\n    element.addEventListener(\"click\", function (e) {\n      switch (e.target.id) {\n        case \"⌫\":\n          removeLast();\n          break;\n        case \"clear\":\n          clearAll();\n          break;\n      }\n    });\n  });\n}\nfunction removeLast() {\n  var result = resultDisplay.value;\n  if (result.length === 1) {\n    resultDisplay.value = 0;\n  } else {\n    resultDisplay.value = result.slice(0, result.length - 1);\n  }\n}\nfunction clearAll() {\n  previousDisplay.value = '';\n  resultDisplay.value = '0';\n  operation = [];\n}\nfunction setChangeSymbolListener() {\n  document.getElementById(\"+/-\").addEventListener(\"click\", function () {\n    removePrevious();\n    var result = resultDisplay.value;\n    if (result.charAt(0) !== '-') {\n      resultDisplay.value = '-' + result;\n    } else {\n      resultDisplay.value = result.slice(1, result.length);\n    }\n  });\n}\nfunction setNumbersListeners() {\n  Array.from(document.getElementsByClassName(\"number\")).forEach(function (element) {\n    element.addEventListener(\"click\", function (e) {\n      removePrevious();\n      var temp = resultDisplay.value;\n      if ((temp === '0' || temp === '-0') && e.target.id !== '.') {\n        resultDisplay.value = temp.replaceAll('0', e.target.id);\n      } else {\n        resultDisplay.value += e.target.id;\n      }\n    });\n  });\n}\nfunction removePrevious() {\n  var result = previousDisplay.value;\n  if (Array.from(result).some(function (letter) {\n    return Array.from(availableOperations).some(function (symbol) {\n      return symbol === letter;\n    });\n  })) {\n    previousDisplay.value = '';\n    operation = [];\n    resultDisplay.value = '0';\n  }\n}\n\n// ============ Listeners ============\nsetCleanListeners();\nsetBasicOperationsListener();\nsetOperationListeners();\nsetChangeSymbolListener();\nsetNumbersListeners();\n\n//# sourceURL=webpack://calculator/./scripts/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./scripts/calculator.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/ui.js");
/******/ 	
/******/ })()
;