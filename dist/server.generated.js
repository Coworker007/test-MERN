module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! exports provided: userId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userId\", function() { return userId; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* harmony import */ var _adminPage_adminPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adminPage/adminPage */ \"./client/adminPage/adminPage.js\");\n/* harmony import */ var _userPage_userPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userPage/userPage */ \"./client/userPage/userPage.js\");\n/* harmony import */ var _userPage_MyAppoint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userPage/MyAppoint */ \"./client/userPage/MyAppoint.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst userId = \"\";\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _core_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/users\",\n    component: _user_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    path: \"/user\",\n    component: _userPage_userPage__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/signup\",\n    component: _user_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/signin\",\n    component: _auth_Signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/admin\",\n    component: _adminPage_adminPage__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    path: \"/myappointment\",\n    component: _userPage_MyAppoint__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    path: \"/user/edit/:userId\",\n    component: _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/user/:userId\",\n    component: _user_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  })));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(userId, \"userId\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\MainRouter.js\");\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/adminPage/adminPage.js":
/*!***************************************!*\
  !*** ./client/adminPage/adminPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return adminPage; });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user_api_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _appointTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointTable */ \"./client/adminPage/appointTable.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(theme => ({\n  card: {\n    marginTop: theme.spacing(6)\n  }\n}));\nfunction adminPage() {\n  const classes = useStyles();\n  const [selectedFile, setSelectedFile] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const [isFilePicked, setIsFilePicked] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const [isSelected, setIsSelected] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const [csvData, setCsvData] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const [appoints, setAppoints] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_user_api_user__WEBPACK_IMPORTED_MODULE_2__[\"getCsv\"])(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        console.log(\"data===\", data);\n        setCsvData(data);\n      }\n    });\n    Object(_user_api_user__WEBPACK_IMPORTED_MODULE_2__[\"getAppointments\"])(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        console.log(\"data===\", data);\n        setAppoints(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n\n  const handleUpload = () => {\n    const formData = new FormData();\n    formData.append(\"File\", selectedFile);\n    fetch(\"/api/upload\", {\n      method: \"POST\",\n      body: formData\n    }).then(response => response.json()).then(result => {\n      console.log(\"Success:\", result);\n      setIsSelected(false);\n      alert(\"Upload is successful\");\n    }).catch(error => {\n      console.error(\"Error:\", error);\n    });\n  };\n\n  const handleSelected = e => {\n    setSelectedFile(e.target.files[0]);\n    setIsSelected(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"space-around\",\n    alignItems: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    variant: \"contained\",\n    component: \"label\"\n  }, \"Choose CSV file.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"file\",\n    name: \"file\",\n    hidden: true,\n    accept: \".csv\",\n    onChange: handleSelected\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true\n  }, isSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Filename: \", selectedFile.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Filetype: \", selectedFile.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Size in bytes: \", selectedFile.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"lastModifiedDate:\", \" \", selectedFile.lastModifiedDate.toLocaleDateString())) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Select a file to show details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    variant: \"contained\",\n    onClick: handleUpload\n  }, \"Upload\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Card\"], {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appointTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: appoints\n  }))));\n}\n\n__signature__(adminPage, \"useStyles{classes}\\nuseState{[selectedFile, setSelectedFile]}\\nuseState{[isFilePicked, setIsFilePicked](false)}\\nuseState{[isSelected, setIsSelected](false)}\\nuseState{[csvData, setCsvData]}\\nuseState{[appoints, setAppoints]([])}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\adminPage\\\\adminPage.js\");\n  reactHotLoader.register(adminPage, \"adminPage\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\adminPage\\\\adminPage.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/adminPage/adminPage.js?");

/***/ }),

/***/ "./client/adminPage/appointTable.js":
/*!******************************************!*\
  !*** ./client/adminPage/appointTable.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppointTable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"@material-ui/core/Table\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"@material-ui/core/TableBody\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"@material-ui/core/TableCell\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"@material-ui/core/TableContainer\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"@material-ui/core/TableHead\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"@material-ui/core/TableRow\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(theme => ({\n  head: {\n    backgroundColor: theme.palette.common.black,\n    color: theme.palette.common.white\n  },\n  body: {\n    fontSize: 14\n  }\n}))(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a);\nconst StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(theme => ({\n  root: {\n    \"&:nth-of-type(odd)\": {\n      backgroundColor: theme.palette.action.hover\n    }\n  }\n}))(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a);\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  table: {\n    minWidth: 700\n  }\n});\nfunction AppointTable(props) {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.table,\n    \"aria-label\": \"customized table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, null, \"No\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, \"Mentor Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, \"Weekday\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, \"Appointment Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, \"Timezone\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, \"Created Time\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3___default.a, null, props.data.length > 0 && props.data.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableRow, {\n    key: index\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    component: \"th\",\n    scope: \"row\"\n  }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, row.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, row.mentorName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, row.week), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, row.appointmentTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, row.Timezone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {\n    align: \"center\"\n  }, moment__WEBPACK_IMPORTED_MODULE_9___default()(row.createdTime).format(\"MM.DD dddd hh:mm\")))))));\n}\n\n__signature__(AppointTable, \"useStyles{classes}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(StyledTableCell, \"StyledTableCell\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\adminPage\\\\appointTable.js\");\n  reactHotLoader.register(StyledTableRow, \"StyledTableRow\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\adminPage\\\\appointTable.js\");\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\adminPage\\\\appointTable.js\");\n  reactHotLoader.register(AppointTable, \"AppointTable\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\adminPage\\\\appointTable.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/adminPage/appointTable.js?");

/***/ }),

/***/ "./client/assets/images/unicornbike.jpg":
/*!**********************************************!*\
  !*** ./client/assets/images/unicornbike.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"08179a3b58e30f3c8c4fed34a9a3e2f8.jpg\");\n\n//# sourceURL=webpack:///./client/assets/images/unicornbike.jpg?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst PrivateRoute = ({\n  component: Component,\n  ...rest\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, {\n  render: props => _auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: {\n      pathname: '/signin',\n      state: {\n        from: props.location\n      }\n    }\n  })\n}));\n\nconst _default = PrivateRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\PrivateRoute.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\PrivateRoute.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Signin; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    textAlign: \"center\",\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: \"middle\"\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: \"auto\",\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction Signin(props) {\n  const classes = useStyles();\n  const [userEmail, setUserEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    email: \"\",\n    password: \"\",\n    error: \"\",\n    role: \"User\",\n    redirectToReferrer: false,\n    redirectToAdminReferrer: false\n  });\n\n  const clickSubmit = () => {\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_11__[\"signin\"])(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].authenticate(data, () => {\n          console.log(\"username=\", data);\n          setUserEmail(data.user.email);\n          data.user.role === \"Admin\" ? setValues({ ...values,\n            error: \"\",\n            redirectToAdminReferrer: true\n          }) : setValues({ ...values,\n            error: \"\",\n            redirectToReferrer: true\n          });\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  }; // const { from } = props.location.state || {\n  //   from: {\n  //     pathname: \"/\",\n  //   },\n  // };\n\n\n  const {\n    redirectToReferrer\n  } = values;\n\n  if (values.redirectToAdminReferrer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Redirect\"], {\n      to: \"/admin\"\n    });\n  } else {\n    if (redirectToReferrer) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Redirect\"], {\n        to: {\n          pathname: \"/user\",\n          data: userEmail\n        }\n      });\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\")));\n}\n\n__signature__(Signin, \"useStyles{classes}\\nuseState{[userEmail, setUserEmail]}\\nuseState{[values, setValues]({\\n    email: \\\"\\\",\\n    password: \\\"\\\",\\n    error: \\\"\\\",\\n    role: \\\"User\\\",\\n    redirectToReferrer: false,\\n    redirectToAdminReferrer: false,\\n  })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\Signin.js\");\n  reactHotLoader.register(Signin, \"Signin\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\Signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! exports provided: signin, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst signin = async user => {\n  try {\n    let response = await fetch('/auth/signin/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      credentials: 'include',\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst signout = async () => {\n  try {\n    let response = await fetch('/auth/signout/', {\n      method: 'GET'\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  clearJWT(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb(); //optional\n\n    Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_0__[\"signout\"])().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n\n};\nconst _default = auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\auth\\\\auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_unicornbike_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assets/images/unicornbike.jpg */ \"./client/assets/images/unicornbike.jpg\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    marginTop: theme.spacing(5),\n    marginBottom: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  media: {\n    minHeight: 400\n  },\n  credit: {\n    padding: 10,\n    textAlign: \"right\",\n    backgroundColor: \"#ededed\",\n    borderBottom: \"1px solid #d0d0d0\",\n    \"& a\": {\n      color: \"#3f4771\"\n    }\n  }\n}));\nfunction Home() {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: classes.media,\n    image: _assets_images_unicornbike_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: \"Unicorn Bicycle\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body2\",\n    component: \"p\",\n    className: classes.credit,\n    color: \"textSecondary\"\n  }, \"Photo by\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://unsplash.com/@boudewijn_huysmans\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, \"Boudewijn Huysmans\"), \" \", \"on Unsplash\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body1\",\n    component: \"p\"\n  }, \"Welcome to the Booking home page.\")));\n}\n\n__signature__(Home, \"useStyles{classes}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\core\\\\Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\core\\\\Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst isActive = (history, path) => {\n  if (history.location.pathname == path) return {\n    color: \"#ff4081\"\n  };else return {\n    color: \"#ffffff\"\n  };\n};\n\nconst Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"withRouter\"])(({\n  history\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  position: \"static\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n  variant: \"h6\",\n  color: \"inherit\"\n}, \"Booking Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n  to: \"/\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  \"aria-label\": \"Home\",\n  style: isActive(history, \"/\")\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n  to: \"/users\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n  style: isActive(history, \"/users\")\n}, \"Users\")), !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n  to: \"/signup\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n  style: isActive(history, \"/signup\")\n}, \"Sign up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n  to: \"/signin\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n  style: isActive(history, \"/signin\")\n}, \"Sign In\"))), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n  color: \"inherit\",\n  onClick: () => {\n    _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].clearJWT(() => history.push(\"/\"));\n  }\n}, \"Sign out\")))));\nconst _default = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, \"isActive\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\core\\\\Menu.js\");\n  reactHotLoader.register(Menu, \"Menu\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\core\\\\Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\core\\\\Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: '#5c67a3',\n      main: '#3f4771',\n      dark: '#2e355b',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ff79b0',\n      main: '#ff4081',\n      dark: '#c60055',\n      contrastText: '#000'\n    },\n    openTitle: '#3f4771',\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"pink\"]['400'],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\theme.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/theme.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeleteUser; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DeleteUser(props) {\n  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [redirect, setRedirect] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__[\"default\"].isAuthenticated();\n\n  const clickButton = () => {\n    setOpen(true);\n  };\n\n  const deleteAccount = () => {\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_11__[\"remove\"])({\n      userId: props.userId\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__[\"default\"].clearJWT(() => console.log('deleted'));\n        setRedirect(true);\n      }\n    });\n  };\n\n  const handleRequestClose = () => {\n    setOpen(false);\n  };\n\n  if (redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[\"Redirect\"], {\n      to: \"/\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    \"aria-label\": \"Delete\",\n    onClick: clickButton,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default.a, null, \"Delete Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default.a, null, \"Confirm to delete your account.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onClick: deleteAccount,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n}\n\n__signature__(DeleteUser, \"useState{[open, setOpen](false)}\\nuseState{[redirect, setRedirect](false)}\");\n\nDeleteUser.propTypes = {\n  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, \"DeleteUser\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\DeleteUser.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditProfile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  title: {\n    margin: theme.spacing(2),\n    color: theme.palette.protectedTitle\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction EditProfile({\n  match\n}) {\n  const classes = useStyles();\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: '',\n    password: '',\n    email: '',\n    open: false,\n    error: '',\n    redirectToProfile: false\n  });\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isAuthenticated();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_10__[\"read\"])({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          name: data.name,\n          email: data.email\n        });\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_10__[\"update\"])({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, user).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          userId: data._id,\n          redirectToProfile: true\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  if (values.redirectToProfile) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[\"Redirect\"], {\n      to: '/user/' + values.userId\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Edit Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"name\",\n    label: \"Name\",\n    className: classes.textField,\n    value: values.name,\n    onChange: handleChange('name'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\")));\n}\n\n__signature__(EditProfile, \"useStyles{classes}\\nuseState{[values, setValues]({\\n    name: '',\\n    password: '',\\n    email: '',\\n    open: false,\\n    error: '',\\n    redirectToProfile: false\\n  })}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\EditProfile.js\");\n  reactHotLoader.register(EditProfile, \"EditProfile\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\EditProfile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_17__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: theme.mixins.gutters({\n    maxWidth: 600,\n    margin: 'auto',\n    padding: theme.spacing(3),\n    marginTop: theme.spacing(5)\n  }),\n  title: {\n    marginTop: theme.spacing(3),\n    color: theme.palette.protectedTitle\n  }\n}));\nfunction Profile({\n  match\n}) {\n  const classes = useStyles();\n  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [redirectToSignin, setRedirectToSignin] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_16__[\"read\"])({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setUser(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n\n  if (redirectToSignin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__[\"Redirect\"], {\n      to: \"/signin\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    dense: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    primary: user.name,\n    secondary: user.email\n  }), \" \", _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated().user._id == user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__[\"Link\"], {\n    to: \"/user/edit/\" + user._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    \"aria-label\": \"Edit\",\n    color: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    userId: user._id\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    primary: \"Joined: \" + new Date(user.created).toDateString()\n  }))));\n}\n\n__signature__(Profile, \"useStyles{classes}\\nuseState{[user, setUser]({})}\\nuseState{[redirectToSignin, setRedirectToSignin](false)}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Signup; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    textAlign: \"center\",\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: \"middle\"\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  checkField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 200\n  },\n  submit: {\n    margin: \"auto\",\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction Signup() {\n  const classes = useStyles();\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: \"\",\n    password: \"\",\n    email: \"\",\n    open: false,\n    error: \"\",\n    role: false\n  });\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const handleCheckChange = e => {\n    setValues({ ...values,\n      role: e.target.checked\n    });\n  };\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined,\n      role: values.role ? \"Admin\" : \"User\" || false\n    };\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_9__[\"create\"])(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          error: \"\",\n          open: true\n        });\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"name\",\n    label: \"Name\",\n    className: classes.textField,\n    value: values.name,\n    onChange: handleChange(\"name\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__[\"FormControlLabel\"], {\n    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__[\"Checkbox\"], {\n      className: classes.checkField,\n      checked: values.role,\n      onChange: handleCheckChange,\n      name: \"checkedA\"\n    }),\n    label: \"Admin\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    open: values.open,\n    disableBackdropClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default.a, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13___default.a, null, \"New account successfully created.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__[\"Link\"], {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\")))));\n}\n\n__signature__(Signup, \"useStyles{classes}\\nuseState{[values, setValues]({\\n    name: \\\"\\\",\\n    password: \\\"\\\",\\n    email: \\\"\\\",\\n    open: false,\\n    error: \\\"\\\",\\n    role: false,\\n  })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\Signup.js\");\n  reactHotLoader.register(Signup, \"Signup\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\Signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Users; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"@material-ui/icons/ArrowForward\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing(1),\n    margin: theme.spacing(5)\n  }),\n  title: {\n    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  }\n}));\nfunction Users() {\n  const classes = useStyles();\n  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_14__[\"list\"])(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        console.log(\"data=\", data);\n        setUsers(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"All Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    dense: true\n  }, users.map((item, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__[\"Link\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      button: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      primary: item.name,\n      secondary: \"(\" + `${item.role}` + \")\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default.a, null)))));\n  })));\n}\n\n__signature__(Users, \"useStyles{classes}\\nuseState{[users, setUsers]([])}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! exports provided: create, list, read, update, remove, getCsv, getListInfo, addTime, getAppointments, getMyAppoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCsv\", function() { return getCsv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListInfo\", function() { return getListInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTime\", function() { return addTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAppointments\", function() { return getAppointments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMyAppoint\", function() { return getMyAppoint; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst create = async user => {\n  try {\n    let response = await fetch(\"/api/users/\", {\n      method: \"POST\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst list = async signal => {\n  try {\n    let response = await fetch(\"/api/users/\", {\n      method: \"GET\",\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch(\"/api/users/\" + params.userId, {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst update = async (params, credentials, user) => {\n  try {\n    let response = await fetch(\"/api/users/\" + params.userId, {\n      method: \"PUT\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch(\"/api/users/\" + params.userId, {\n      method: \"DELETE\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst getCsv = async signal => {\n  try {\n    let response = await fetch(\"/api/getCsv\", {\n      method: \"GET\",\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst getListInfo = async (userName, signal) => {\n  try {\n    let response = await fetch(\"/api/mentorInfo/\" + userName, {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst addTime = async val => {\n  try {\n    let response = await fetch(\"/api/addTime\", {\n      method: \"POST\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(val)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst getAppointments = async signal => {\n  try {\n    let response = await fetch(\"/api/getAppointment\", {\n      method: \"GET\",\n      heheaders: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      },\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst getMyAppoint = async (val, signal) => {\n  try {\n    let response = await fetch(\"/api/getMyAppoint/\" + val, {\n      method: \"GET\",\n      signal: signal,\n      heheaders: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(getCsv, \"getCsv\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(getListInfo, \"getListInfo\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(addTime, \"addTime\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(getAppointments, \"getAppointments\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(getMyAppoint, \"getMyAppoint\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\user\\\\api-user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./client/userPage/MyAppoint.js":
/*!**************************************!*\
  !*** ./client/userPage/MyAppoint.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyAppoint; });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _adminPage_appointTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adminPage/appointTable */ \"./client/adminPage/appointTable.js\");\n/* harmony import */ var _user_api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/api-user */ \"./client/user/api-user.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nfunction MyAppoint(props) {\n  const [myAppoint, setMyAppoint] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    data\n  } = props.location;\n  console.log(\"email==\", data);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_user_api_user__WEBPACK_IMPORTED_MODULE_3__[\"getMyAppoint\"])(data, signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        console.log(\"data===\", data);\n        setMyAppoint(data); // setAppoints(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    onClick: () => props.history.goBack()\n  }, \"Back\"), myAppoint.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_adminPage_appointTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: myAppoint\n  }));\n}\n\n__signature__(MyAppoint, \"useState{[myAppoint, setMyAppoint]([])}\\nuseEffect{}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MyAppoint, \"MyAppoint\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\MyAppoint.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/userPage/MyAppoint.js?");

/***/ }),

/***/ "./client/userPage/timeUtil.js":
/*!*************************************!*\
  !*** ./client/userPage/timeUtil.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nfunction timeCalculate(startTime, endTime) {\n  console.log(\"start==\", startTime);\n  console.log(\"end==\", endTime); // let fromtime = \"09:00:00\";\n\n  let fromtimeH = 0;\n  let fromtimeM = 0;\n  let fromtime = \"\";\n  let endtimeH = 0;\n  let endtimeM = 0;\n  let endtime = \"\";\n\n  if (startTime[startTime.length - 2] == \"P\") {\n    fromtimeH = parseInt(startTime.split(\":\")[0]);\n    fromtimeM = parseInt(startTime.split(\":\")[1].slice(0, -2));\n    fromtimeH = fromtimeH + 12;\n    fromtime = `${fromtimeH}` + \":\" + `${fromtimeM}`;\n  } else {\n    fromtimeH = parseInt(startTime.split(\":\")[0]);\n    fromtimeM = parseInt(startTime.split(\":\")[1].slice(0, -2));\n    fromtime = `${fromtimeH}` + \":\" + `${fromtimeM}`;\n  }\n\n  if (endTime[endTime.length - 2] == \"P\") {\n    endtimeH = parseInt(endTime.split(\":\")[0]);\n    endtimeM = parseInt(endTime.split(\":\")[1].slice(0, -2));\n    endtimeH = endtimeH + 12;\n    endtime = `${endtimeH}` + \":\" + `${endtimeM}`;\n  } else {\n    endtimeH = parseInt(endTime.split(\":\")[0]);\n    endtimeM = parseInt(endTime.split(\":\")[1].slice(0, -2));\n    endtime = `${endtimeH}` + \":\" + `${endtimeM}`;\n  } // let totime = \"21:00:00\";\n\n\n  console.log(\"from time==\", fromtime);\n  console.log(\"end time==\", endtime);\n  return returnTimesInBetween(fromtime, endtime);\n}\n\nlet getGenTime = timeString => {\n  let H = +timeString.substr(0, 2);\n  let h = H % 12 || 12;\n  let ampm = H < 12 ? \" AM\" : \" PM\";\n  return timeString = h + timeString.substr(2, 3) + ampm;\n};\n\nfunction returnTimesInBetween(start, end) {\n  var timesInBetween = [];\n  var startH = parseInt(start.split(\":\")[0]);\n  var startM = parseInt(start.split(\":\")[1]);\n  var endH = parseInt(end.split(\":\")[0]);\n  var endM = parseInt(end.split(\":\")[1]);\n  if (startM == 30) startH++;\n\n  for (var i = startH; i < endH; i++) {\n    timesInBetween.push(i < 10 ? \"0\" + i + \":00\" : i + \":00\");\n    timesInBetween.push(i < 10 ? \"0\" + i + \":30\" : i + \":30\");\n  }\n\n  timesInBetween.push(endH + \":00\");\n  if (endM == 30) timesInBetween.push(endH + \":30\");\n  return timesInBetween.map(getGenTime);\n}\n\nconst _default = timeCalculate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(timeCalculate, \"timeCalculate\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\timeUtil.js\");\n  reactHotLoader.register(getGenTime, \"getGenTime\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\timeUtil.js\");\n  reactHotLoader.register(returnTimesInBetween, \"returnTimesInBetween\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\timeUtil.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\timeUtil.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/userPage/timeUtil.js?");

/***/ }),

/***/ "./client/userPage/userPage.js":
/*!*************************************!*\
  !*** ./client/userPage/userPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @date-io/date-fns */ \"@date-io/date-fns\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/pickers */ \"@material-ui/pickers\");\n/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/en-US */ \"date-fns/locale/en-US\");\n/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _user_api_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _timeUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeUtil */ \"./client/userPage/timeUtil.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      light: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_6___default.a[300],\n      main: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_6___default.a[500],\n      dark: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_6___default.a[700]\n    }\n  }\n});\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])(theme => ({\n  root: {\n    marginTop: theme.spacing(5),\n    width: \"100%\",\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper\n  },\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    marginTop: theme.spacing(5),\n    marginBottom: theme.spacing(5)\n  },\n  timeCard: {\n    overflow: \"scroll\",\n    padding: 20,\n    maxHeight: 500,\n    margin: \"auto\",\n    marginTop: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  media: {\n    minHeight: 400\n  },\n  credit: {\n    padding: 10,\n    textAlign: \"right\",\n    backgroundColor: \"#ededed\",\n    borderBottom: \"1px solid #d0d0d0\",\n    \"& a\": {\n      color: \"#3f4771\"\n    },\n    calendar: {\n      width: 400,\n      height: 300\n    }\n  }\n})); // let mentorList = [];\n\nfunction userPage(props) {\n  const {\n    data\n  } = props.location;\n  console.log(\"datatatatata===\", data);\n  const [selectedDate, setSelectedDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Date());\n  const [csvData, setCsvData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [mentorList, setMentorList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [selectedMentorInfo, setSelectedMentorInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    Name: \"Ivan\"\n  }]);\n  const [selectedIndex, setSelectedIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const [availableTime, setAvailableTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [timeList, setTimeList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_user_api_user__WEBPACK_IMPORTED_MODULE_7__[\"getCsv\"])(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        console.log(\"data===\", data);\n        const uniqueObjects = [...new Map(data.map(item => [item.Name, item])).values()];\n        console.log(\"name=\", uniqueObjects);\n        setMentorList(uniqueObjects);\n        setCsvData(data);\n      }\n    }); // availableTime.length > 0 &&\n    //   timeCalculate(availableTime.startTime, availableTime.endTime);\n\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  console.log(\"time=\", timeList);\n\n  const handleDateChange = date => {\n    console.log(\"date==\", date.getDay());\n    let tempDay = \"\";\n\n    switch (date.getDay()) {\n      case 0:\n        tempDay = \"Sunday\";\n        break;\n\n      case 1:\n        tempDay = \"Monday\";\n        break;\n\n      case 2:\n        tempDay = \"Tuesday\";\n        break;\n\n      case 3:\n        tempDay = \"Wednesday\";\n        break;\n\n      case 4:\n        tempDay = \"Thursday\";\n        break;\n\n      case 5:\n        tempDay = \"Friday\";\n        break;\n\n      case 6:\n        tempDay = \"Saturday\";\n        break;\n\n      default:\n        break;\n    }\n\n    let tempStatus = false;\n    let stTime = \"\";\n    let enTime = \"\";\n    selectedMentorInfo.map((item, index) => {\n      console.log(\"week===\", item.Day_of_Week);\n      console.log(\"temp=\", tempDay);\n\n      if (item.Day_of_Week == tempDay) {\n        console.log(\"item.av==\", item);\n        stTime = item.Available_at;\n        enTime = item.Available_until;\n        setAvailableTime({\n          startTime: item.Available_at,\n          endTime: item.Available_until\n        });\n        tempStatus = true;\n        console.log(tempStatus);\n      } else {}\n    });\n    console.log(\"-----\", tempStatus);\n\n    if (tempStatus == false) {\n      setTimeList([]);\n    } else {\n      setTimeList(Object(_timeUtil__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(stTime, enTime));\n    } // console.log(\"time=\", availableTime);\n    // availableTime.length > 0 &&\n    //   timeCalculate(availableTime.startTime, availableTime.endTime);\n\n\n    setSelectedDate(date);\n  };\n\n  const handleListClick = (item, index) => {\n    setSelectedIndex(index);\n    console.log(\"item===\", item);\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_user_api_user__WEBPACK_IMPORTED_MODULE_7__[\"getListInfo\"])(item.Name, signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        console.log(\"user===\", data);\n        setSelectedMentorInfo(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  };\n\n  const handleTimeClick = item => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    let value = {\n      mentor: selectedMentorInfo,\n      appointmentTIme: item,\n      email: data,\n      date: selectedDate\n    };\n    Object(_user_api_user__WEBPACK_IMPORTED_MODULE_7__[\"addTime\"])(value).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        console.log(\"appoint===\", data);\n        setStatus(true);\n        alert(\"Appointment is successfull.\");\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  };\n\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"space-around\",\n    alignItems: \"stretch\",\n    spacing: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    elevation: 3,\n    style: {\n      marginTop: \"5vh\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardHeader\"], {\n    style: {\n      paddingBottom: 0\n    },\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Mentor List\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    style: {\n      marginTop: 0\n    },\n    component: \"nav\",\n    \"aria-labelledby\": \"nested-list-subheader\",\n    className: classes.root\n  }, mentorList && mentorList.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    selected: selectedIndex === index,\n    button: true,\n    key: index,\n    onClick: () => handleListClick(item, index)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItemAvatar\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItemText\"], {\n    primary: item.Name\n  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    elevation: 3,\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardHeader\"], {\n    style: {\n      paddingBottom: 0\n    },\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"space-around\",\n      alignItems: \"center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      item: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      item: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, selectedMentorInfo[0].Name)))),\n    subheader: \"Timezone:\" + `${selectedMentorInfo[0].Timezone}`\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"MuiThemeProvider\"], {\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__[\"MuiPickersUtilsProvider\"], {\n    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2___default.a,\n    locale: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_4___default.a\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__[\"Calendar\"], {\n    className: classes.calendar,\n    date: selectedDate,\n    onChange: handleDateChange\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"], null, console.log(\"hellelel===\", data), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n    to: {\n      pathname: \"/myappointment\",\n      data: data\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\"\n  }, \" My Appointment\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    elevation: 3,\n    className: classes.timeCard\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardHeader\"], {\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, selectedMentorInfo[0].Name),\n    subheader: moment__WEBPACK_IMPORTED_MODULE_9___default()(selectedDate).format(\"MM.DD\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    style: {\n      marginTop: 0\n    },\n    component: \"nav\",\n    \"aria-labelledby\": \"nested-list-subheader\",\n    className: classes.root\n  }, timeList.length > 0 && timeList.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    button: true,\n    key: index\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    size: \"large\",\n    onClick: () => handleTimeClick(item)\n  }, item)))))))));\n}\n\n__signature__(userPage, \"useState{[selectedDate, setSelectedDate](new Date())}\\nuseState{[csvData, setCsvData]}\\nuseState{[mentorList, setMentorList]}\\nuseState{[selectedMentorInfo, setSelectedMentorInfo]([\\r\\n    { Name: \\\"Ivan\\\" },\\r\\n  ])}\\nuseState{[selectedIndex, setSelectedIndex](0)}\\nuseState{[availableTime, setAvailableTime]([])}\\nuseState{[timeList, setTimeList]([])}\\nuseState{[status, setStatus](false)}\\nuseEffect{}\\nuseStyles{classes}\", () => [useStyles]);\n\nconst _default = userPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\userPage.js\");\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\userPage.js\");\n  reactHotLoader.register(userPage, \"userPage\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\userPage.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\client\\\\userPage\\\\userPage.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/userPage/userPage.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      email: req.body.email\n    });\n    if (!user) return res.status(\"401\").json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(\"401\").send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email,\n        role: user.role\n      }\n    });\n  } catch (err) {\n    return res.status(\"401\").json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status(\"200\").json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: \"auth\"\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_csv_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/csv.model */ \"./server/models/csv.model.js\");\n/* harmony import */ var _models_appointment_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/appointment.model */ \"./server/models/appointment.model.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst csvtojson = __webpack_require__(/*! csvtojson */ \"csvtojson\");\n\nconst create = async (req, res) => {\n  console.log(\"reqbody=\", req.body);\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\n * Load user and append to req.\n */\n\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!user) return res.status(\"400\").json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(\"400\").json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select(\"name email role updated created\");\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst fileUpload = async (req, res) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n  form.keepExtensions = true;\n  let tempCsv = [];\n  _models_csv_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove({}).then(del => console.log(\"del==\", del)).catch(err => console.log(err)); // appointmentModel\n  //   .remove({})\n  //   .then((del) => console.log(\"delete=\", del))\n  //   .catch((err) => console.log(err));\n\n  form.parse(req, async (err, fields, files) => {\n    console.log(\"fiels=\", files.File.path);\n    csvtojson().fromFile(files.File.path).then(csvData => {\n      console.log(csvData);\n      csvData.map((item, index) => {\n        const csv = new _models_csv_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        console.log(\"item=\", item);\n        csv.Name = item.Name;\n        csv.Timezone = item.Timezone;\n        csv.Day_of_Week = item[\"Day of Week\"];\n        csv.Available_at = item[\"Available at\"];\n        csv.Available_until = item[\"Available until\"];\n        csv.save().then(csv => {\n          console.log(csv); // tempCsv.push(csv);\n\n          res.json(\"Success\");\n        }).catch(err => {\n          console.log(err);\n          res.status(400).json({\n            message: \"Error is caused\"\n          });\n        });\n      }); // res.status(200).json(tempCsv);\n    }); // csvModel\n    //   .find()\n    //   .then((csvs) => res.status(200).json(csvs))\n    //   .catch((err) => res.status(400).json(err));\n  }); // tempCsv.map((item, index) => {\n  // });\n  // console.log(\"fields==\", fields);\n  // if (err) {\n  //   return res.status(400).json({\n  //     error: \"Flie could not be uploaded\",\n  //   });\n  // }\n  // // let post = new Post(fields);\n  // post.postedBy = req.profile;\n  // if (files.photo) {\n  //   post.photo.data = fs.readFileSync(files.photo.path);\n  //   post.photo.contentType = files.photo.type;\n  // }\n  // try {\n  //   let result = await post.save();\n  //   res.json(result);\n  // } catch (err) {\n  //   return res.status(400).json({\n  //     error: errorHandler.getErrorMessage(err),\n  //   });\n  // }\n};\n\nconst getCsv = async (req, res) => {\n  try {\n    let csvs = await _models_csv_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find();\n    res.json(csvs);\n  } catch (err) {\n    return res.status(400).json({\n      error: \"there is not csv\"\n    });\n  }\n};\n\nconst getMentorInfo = async (req, res) => {\n  // console.log(\"req===\", req);\n  try {\n    let user = req.params.userName;\n    let users = await _models_csv_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find({\n      Name: user\n    });\n    res.json(users);\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst addTime = async (req, res) => {\n  try {\n    console.log(\"time=======\", moment__WEBPACK_IMPORTED_MODULE_6___default()(req.body.date).format(\"dddd\"));\n    let appoint = new _models_appointment_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    appoint.email = req.body.email;\n    appoint.Timezone = req.body.mentor[0].Timezone;\n    appoint.week = moment__WEBPACK_IMPORTED_MODULE_6___default()(req.body.date).format(\"dddd\");\n    appoint.appointmentTime = req.body.appointmentTIme;\n    appoint.mentorName = req.body.mentor[0].Name;\n    let appoints = await appoint.save();\n    res.json(appoints);\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst getAppointment = async (req, res) => {\n  try {\n    let appoints = await _models_appointment_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].find();\n    res.json(appoints);\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst getMyAppoint = async (req, res) => {\n  console.log(\"my====\", req.params.val);\n\n  try {\n    let appoints = await _models_appointment_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].find({\n      email: req.params.val\n    });\n    res.json(appoints);\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst _default = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update,\n  fileUpload,\n  getCsv,\n  getMentorInfo,\n  addTime,\n  getAppointment,\n  getMyAppoint\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(fileUpload, \"fileUpload\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(getCsv, \"getCsv\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(getMentorInfo, \"getMentorInfo\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(addTime, \"addTime\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(getAppointment, \"getAppointment\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(getMyAppoint, \"getMyAppoint\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n // modules for server side rendering\n\n\n\n\n\n\n //end\n//comment out before building for production\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_16__[\"default\"].compile(app); // parse body params and attache them to req.body\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()()); // secure apps by setting various HTTP headers\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()()); // enable CORS - Cross Origin Resource Sharing\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist'))); // mount routes\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.get('*', (req, res) => {\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__[\"ServerStyleSheets\"]();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__[\"ThemeProvider\"], {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_15__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const css = sheets.toString();\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    markup: markup,\n    css: css\n  }));\n}); // Catch unauthorised errors\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\express.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {\n/**\n * Get unique error field name\n */\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/appointment.model.js":
/*!********************************************!*\
  !*** ./server/models/appointment.model.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst AppointmentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: {\n    type: String,\n    required: true\n  },\n  Timezone: {\n    type: String,\n    required: true\n  },\n  week: {\n    type: String,\n    required: true\n  },\n  appointmentTime: {\n    type: String,\n    required: true\n  },\n  mentorName: {\n    type: String,\n    required: true\n  },\n  createdTime: {\n    type: Date,\n    default: new Date()\n  } //   Day_of_Week: {\n  //     type: String,\n  //     required: true,\n  //   },\n  //   Available_at: {\n  //     type: String,\n  //     required: true,\n  //   },\n  //   Available_until: {\n  //     type: String,\n  //     required: true,\n  //   },\n\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Appontment\", AppointmentSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AppointmentSchema, \"AppointmentSchema\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\models\\\\appointment.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\models\\\\appointment.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/appointment.model.js?");

/***/ }),

/***/ "./server/models/csv.model.js":
/*!************************************!*\
  !*** ./server/models/csv.model.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst CsvSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  Name: {\n    type: String,\n    required: true\n  },\n  Timezone: {\n    type: String,\n    required: true\n  },\n  Day_of_Week: {\n    type: String,\n    required: true\n  },\n  Available_at: {\n    type: String,\n    required: true\n  },\n  Available_until: {\n    type: String,\n    required: true\n  }\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Csv\", CsvSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CsvSchema, \"CsvSchema\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\models\\\\csv.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\models\\\\csv.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/csv.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  role: {\n    type: String,\n    default: \"user\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return \"\";\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (err) {\n      return \"\";\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\models\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\routes\\\\auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/api/users\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route(\"/api/users/:userId\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.route(\"/api/upload\").post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fileUpload);\nrouter.route(\"/api/getCsv\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCsv);\nrouter.route(\"/api/mentorInfo/:userName\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMentorInfo);\nrouter.route(\"/api/addTime\").post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTime);\nrouter.route(\"/api/getAppointment\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAppointment);\nrouter.route(\"/api/getMyAppoint/:val\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMyAppoint);\nrouter.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // Connection URL\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <meta\n            name=\"viewport\"\n            content=\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\"\n          >\n          <title>Booking Home</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n          <style>\n              a{\n                text-decoration: none;\n                color: #061d95\n              }\n          </style>\n        </head>\n        <body style=\"margin:0\">\n          <div id=\"root\">${markup}</div>\n          <style id=\"jss-server-side\">${css}</style>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Admin\\\\Downloads\\\\mern-skeleton-second-edition\\\\mern-skeleton-second-edition\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Admin\\Downloads\\mern-skeleton-second-edition\\mern-skeleton-second-edition\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "@date-io/date-fns":
/*!************************************!*\
  !*** external "@date-io/date-fns" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@date-io/date-fns\");\n\n//# sourceURL=webpack:///external_%22@date-io/date-fns%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContentText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContentText%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Divider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List%22?");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemAvatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemAvatar%22?");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemSecondaryAction\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemSecondaryAction%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Table\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Table%22?");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableBody\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableBody%22?");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableCell\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableCell%22?");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableContainer\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableContainer%22?");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableHead\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableHead%22?");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableRow\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableRow%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/green\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/green%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons%22?");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ArrowForward%22?");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Delete\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Delete%22?");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Edit\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Person\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Person%22?");

/***/ }),

/***/ "@material-ui/pickers":
/*!***************************************!*\
  !*** external "@material-ui/pickers" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/pickers\");\n\n//# sourceURL=webpack:///external_%22@material-ui/pickers%22?");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/styles%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csvtojson\");\n\n//# sourceURL=webpack:///external_%22csvtojson%22?");

/***/ }),

/***/ "date-fns/locale/en-US":
/*!****************************************!*\
  !*** external "date-fns/locale/en-US" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale/en-US\");\n\n//# sourceURL=webpack:///external_%22date-fns/locale/en-US%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/extend\");\n\n//# sourceURL=webpack:///external_%22lodash/extend%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });