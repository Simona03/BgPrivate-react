"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);





const CustomLink = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { href , as , title , className , rel , target , children , onClick , shallow , style , forwardRef  } = props;
    const linkProps = {
        className,
        title
    };
    if (!as) as = href;
    if (rel) linkProps.rel = rel;
    if (target) linkProps.target = target;
    if (onClick) linkProps.onClick = onClick;
    if (style) linkProps.style = style;
    if (forwardRef) linkProps.ref = forwardRef;
    if (router.asPath === as && !onClick) linkProps.onClick = router.reload;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        as: as,
        shallow: shallow,
        prefetch: false,
        ...linkProps,
        children: children
    });
};
CustomLink.propTypes = {
    href: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    as: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    rel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    lang: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),
    shallow: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    forwardRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CustomLink));


/***/ })

};
;