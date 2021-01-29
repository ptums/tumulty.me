webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-sanity-image */ "./node_modules/next-sanity-image/dist/index.js");
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_sanity_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_sanity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/sanity */ "./utils/sanity.js");
/* harmony import */ var styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/Post.module.css */ "./styles/Post.module.css");
/* harmony import */ var styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "C:\\Users\\ptumulty\\Desktop\\TumultyWebServices\\tumulty.me\\web\\pages\\post\\[slug].js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function urlFor(source) {
  _s();

  return Object(next_sanity_image__WEBPACK_IMPORTED_MODULE_8__["useNextSanityImage"])(utils_sanity__WEBPACK_IMPORTED_MODULE_9__["default"], source);
}

_s(urlFor, "zhJAGl9+PHspTMcyiaNQqXf+1OA=", false, function () {
  return [next_sanity_image__WEBPACK_IMPORTED_MODULE_8__["useNextSanityImage"]];
});

var __N_SSG = true;
function Post(_ref) {
  _s2();

  var post = _ref.post;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var featuredImage = urlFor(post.image);

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_6___default.a, {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: post.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_3__["ArticleJsonLd"], {
      url: "https://tumulty.me".concat(router.asPath),
      title: post.title,
      images: [featuredImage.width(620).height(240).url(), featuredImage.width(300).height(116).url(), featuredImage.width(100).height(39).url()],
      datePublished: post.date,
      dateModified: post.date,
      authorName: ['Peter F. Tumulty'],
      publisherName: "Peter F. Tumulty",
      publisherLogo: "/me.png",
      description: post.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: post.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, imageProps), {}, {
        sizes: "(max-width: 620px) 100vw, 620px",
        layout: "intrinsic",
        alt: post.title
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
        blocks: post.body,
        className: styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s2(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Post;

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwidXNlTmV4dFNhbml0eUltYWdlIiwiY2xpZW50IiwiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZWF0dXJlZEltYWdlIiwiaW1hZ2UiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhc1BhdGgiLCJ3aWR0aCIsImhlaWdodCIsInVybCIsImRhdGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJpbWFnZVByb3BzIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUFBOztBQUN2QixTQUFPQyw0RUFBa0IsQ0FDekJDLG9EQUR5QixFQUV6QkYsTUFGeUIsQ0FBekI7QUFJRDs7R0FMUUQsTTtVQUNBRSxvRTs7OztBQU1NLFNBQVNFLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLGFBQWEsR0FBR1IsTUFBTSxDQUFDSyxJQUFJLENBQUNJLEtBQU4sQ0FBNUI7O0FBRUEsTUFBSSxDQUFDSCxNQUFNLENBQUNJLFVBQVIsSUFBc0IsRUFBQ0wsSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRU0sSUFBUCxDQUExQixFQUF1QztBQUNyQyx3QkFBTyxxRUFBQyxpREFBRDtBQUFXLGdCQUFVLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFOLElBQUksQ0FBQ087QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRVAsSUFBSSxDQUFDUTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxzREFBRDtBQUNJLFNBQUcsOEJBQXVCUCxNQUFNLENBQUNRLE1BQTlCLENBRFA7QUFFSSxXQUFLLEVBQUVULElBQUksQ0FBQ08sS0FGaEI7QUFHSSxZQUFNLEVBQUUsQ0FDTkosYUFBYSxDQUFDTyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCQyxNQUF6QixDQUFnQyxHQUFoQyxFQUFxQ0MsR0FBckMsRUFETSxFQUVOVCxhQUFhLENBQUNPLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLENBQWdDLEdBQWhDLEVBQXFDQyxHQUFyQyxFQUZNLEVBR05ULGFBQWEsQ0FBQ08sS0FBZCxDQUFvQixHQUFwQixFQUF5QkMsTUFBekIsQ0FBZ0MsRUFBaEMsRUFBb0NDLEdBQXBDLEVBSE0sQ0FIWjtBQVFJLG1CQUFhLEVBQUVaLElBQUksQ0FBQ2EsSUFSeEI7QUFTSSxrQkFBWSxFQUFFYixJQUFJLENBQUNhLElBVHZCO0FBVUksZ0JBQVUsRUFBRSxDQUFDLGtCQUFELENBVmhCO0FBV0ksbUJBQWEsRUFBQyxrQkFYbEI7QUFZSSxtQkFBYSxFQUFDLFNBWmxCO0FBYUksaUJBQVcsRUFBRWIsSUFBSSxDQUFDUTtBQWJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFvQkU7QUFBSyxlQUFTLEVBQUVNLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsOEJBQ0E7QUFBQSxrQkFBS2YsSUFBSSxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUEsa0JBQUtQLElBQUksQ0FBQ1E7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFHQSxxRUFBQyxpREFBRCxrQ0FDS1EsVUFETDtBQUNpQixhQUFLLEVBQUMsaUNBRHZCO0FBRUMsY0FBTSxFQUFDLFdBRlI7QUFHQyxXQUFHLEVBQUVoQixJQUFJLENBQUNPO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLGVBUUEscUVBQUMscUVBQUQ7QUFBYyxjQUFNLEVBQUVQLElBQUksQ0FBQ2lCLElBQTNCO0FBQWlDLGlCQUFTLEVBQUVILDhEQUFNLENBQUNkO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0lBekN1QkQsSTtVQUNQRyxxRDs7O0tBRE9ILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uZWYzYzZjYjRhNWQyNDBjMDIxNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBBcnRpY2xlSnNvbkxkIH0gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcidcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXHJcbmltcG9ydCB7IHVzZU5leHRTYW5pdHlJbWFnZSB9IGZyb20gJ25leHQtc2FuaXR5LWltYWdlJztcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdHNXaXRoU2x1ZywgZ2V0UG9zdEFuZE1vcmVQb3N0cyB9IGZyb20gJ3V0aWxzL2FwaSdcclxuaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9zYW5pdHknXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL1Bvc3QubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgcmV0dXJuIHVzZU5leHRTYW5pdHlJbWFnZShcclxuXHRcdGNsaWVudCxcclxuXHRcdHNvdXJjZVxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmZWF0dXJlZEltYWdlID0gdXJsRm9yKHBvc3QuaW1hZ2UpO1xyXG5cclxuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XHJcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5kZXNjcmlwdGlvbn0gLz4gICAgICAgIFxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcnRpY2xlSnNvbkxkXHJcbiAgICAgICAgICB1cmw9e2BodHRwczovL3R1bXVsdHkubWUke3JvdXRlci5hc1BhdGh9YH1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgaW1hZ2VzPXtbXHJcbiAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uud2lkdGgoNjIwKS5oZWlnaHQoMjQwKS51cmwoKSxcclxuICAgICAgICAgICAgZmVhdHVyZWRJbWFnZS53aWR0aCgzMDApLmhlaWdodCgxMTYpLnVybCgpLFxyXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlLndpZHRoKDEwMCkuaGVpZ2h0KDM5KS51cmwoKSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBkYXRlUHVibGlzaGVkPXtwb3N0LmRhdGV9XHJcbiAgICAgICAgICBkYXRlTW9kaWZpZWQ9e3Bvc3QuZGF0ZX1cclxuICAgICAgICAgIGF1dGhvck5hbWU9e1snUGV0ZXIgRi4gVHVtdWx0eSddfVxyXG4gICAgICAgICAgcHVibGlzaGVyTmFtZT1cIlBldGVyIEYuIFR1bXVsdHlcIlxyXG4gICAgICAgICAgcHVibGlzaGVyTG9nbz1cIi9tZS5wbmdcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPGgyPntwb3N0LmRlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgey4uLmltYWdlUHJvcHN9IHNpemVzPVwiKG1heC13aWR0aDogNjIwcHgpIDEwMHZ3LCA2MjBweFwiXHJcbiAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxyXG4gICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8QmxvY2tDb250ZW50IGJsb2Nrcz17cG9zdC5ib2R5fSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdEFuZE1vcmVQb3N0cyhwYXJhbXMuc2x1ZylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDogZGF0YSB8fCBudWxsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHNXaXRoU2x1ZygpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGFsbFBvc3RzLm1hcCgocG9zdCkgPT4gYC9wb3N0LyR7cG9zdC5zbHVnfWApIHx8IFtdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9