/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        this.printTime();\n\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        // if (this.hours < 10 && this.minutes < 10 && this.seconds < 10) {\n        //     console.log(`0${this.hours}:0${this.minutes}:0${this.seconds}`)\n        // } else if (this.minutes < 10 && this.seconds < 10) {\n        //     console.log(`${this.hours}:0${this.minutes}:0${this.seconds}`)\n        // } else if (this.seconds < 10) {\n        //     console.log(`${this.hours}:${this.minutes}:0${this.seconds}`)\n        // } else {\n        //     console.log(`${this.hours}:${this.minutes}:${this.seconds}`)\n        // }\n        // Use console.log to print it.\n        Object(_warmup_js__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clockElement)\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        this.printTime();\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\nconst clockElement = document.getElementById(\"clock\");\nconst clock = new Clock();\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nconst dogLinkCreator = (dogs) => {\n  const keys = Object.keys(dogs);\n  const completed = [];\n  keys.forEach(key=>{\n    let aTag = document.createElement('a');\n    aTag.innerHTML = key;\n    aTag.href = dogs[key];\n    let liTag = document.createElement('li');\n    liTag.className = 'dog-link';\n    liTag.appendChild(aTag);\n    completed.push(liTag);\n  })\n  return completed;\n}\n\nconst AttachDogLinks = () => {\n  const dogLinks = dogLinkCreator(dogs);\n  let ulTag = document.querySelector('.drop-down-dog-list')\n  dogLinks.forEach(el => {\n    ulTag.appendChild(el);\n  })\n}\n\nAttachDogLinks();\n\nconst handleEnter = () => {\n  let dogliTag = document.querySelectorAll('.dog-link')\n  dogliTag.forEach(dog => dog.className = \"dog-show\");\n}\n\n\nconst handleLeave = () => {\n  let dogliTag = document.querySelectorAll('.dog-show');\n  dogliTag.forEach(dog => dog.className = \"dog-link\");\n}\n\nconst dogUl = document.querySelector('.drop-down-dog-nav');\ndogUl.addEventListener('mouseenter', handleEnter);\ndogUl.addEventListener('mouseleave', handleLeave);\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\n// const todos = localStorage.getItem('todos', JSON.parse(todos))|| [];\nconst todoForm = document.querySelector(\".add-todo-form\");\nconst todoUl = document.querySelector(\".todos\")\n\nconsole.log(todos);\n\n// window.localStorage = localStorage;\n\nfunction addTodo(event) {\n    event.preventDefault();\n    \n    const values = document.querySelector(\"input[name='add-todo']\").value\n    const todoObj = {\n        value: values,\n        done: false\n    }\n    \n    todos.push(todoObj);\n    todoForm.reset();\n    \n    populateList([todoObj]);\n    \n    localStorage.setItem('todos', JSON.stringify(todos))\n    // localStorage.clear();\n}   \n\n\n\nfunction populateList(todos) {\n    let liTag = document.createElement('li');\n    \n    todos.forEach(todo => {\n        let labelTag = document.createElement('label');\n        labelTag.innerHTML = todo.value;\n\n        let inputTag = document.createElement('input');\n        inputTag.setAttribute('type', 'checkbox');\n        inputTag.setAttribute('value', todo.done);\n\n        let brTag = document.createElement('br');\n\n        liTag.appendChild(labelTag);\n        liTag.appendChild(inputTag);\n        liTag.appendChild(brTag)\n    });\n    todoUl.appendChild(liTag);\n}\n\nfunction checked(event) {\n    event.preventDefault();\n    \n    \n    todos.forEach(obj => obj.done = true);\n}\n\n\npopulateList(todos);\n\nconst submit = todoForm.addEventListener('submit', addTodo); \n// const checkd = todos.addEventListener('checkbox', checked);\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n\n    if (htmlElement.children) {\n        Array.from(htmlElement.children).forEach(el=>{\n            htmlElement.removeChild(el)\n        });\n    }\n\n    let pTag = document.createElement('p');\n    pTag.innerHTML = string;\n    htmlElement.appendChild(pTag);\n\n};\n\nhtmlGenerator('Party Time.', partyHeader);\nhtmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });