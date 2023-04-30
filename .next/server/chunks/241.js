"use strict";
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 18:
/***/ ((module) => {


module.exports = {
    "home": "/",
    "aboutUs": "/about-us",
    // Services Dropdown
    "airportTrans": "/airport-transfers",
    "rentWithDrive": "/rent-driver",
    "tours": "/tours",
    "blog": "/blog",
    "contact": "/contact"
};


/***/ }),

/***/ 241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(442);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_routes__WEBPACK_IMPORTED_MODULE_4__);





const Navigation = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (router.pathname === router.pathname) {
        // console.log(router.pathname)
        }
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "navigation",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: (_config_routes__WEBPACK_IMPORTED_MODULE_4___default().home),
                children: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: (_config_routes__WEBPACK_IMPORTED_MODULE_4___default().aboutUs),
                children: "About us"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ })

};
;