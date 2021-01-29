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
      title: post.title // images={[
      //   featuredImage.width(620).height(240).url(),
      //   featuredImage.width(300).height(116).url(),
      //   featuredImage.width(100).height(39).url(),
      // ]}
      ,
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, featuredImage), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwidXNlTmV4dFNhbml0eUltYWdlIiwiY2xpZW50IiwiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZWF0dXJlZEltYWdlIiwiaW1hZ2UiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhc1BhdGgiLCJkYXRlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUFBOztBQUN2QixTQUFPQyw0RUFBa0IsQ0FDekJDLG9EQUR5QixFQUV6QkYsTUFGeUIsQ0FBekI7QUFJRDs7R0FMUUQsTTtVQUNBRSxvRTs7OztBQU1NLFNBQVNFLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLGFBQWEsR0FBR1IsTUFBTSxDQUFDSyxJQUFJLENBQUNJLEtBQU4sQ0FBNUI7O0FBRUEsTUFBSSxDQUFDSCxNQUFNLENBQUNJLFVBQVIsSUFBc0IsRUFBQ0wsSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRU0sSUFBUCxDQUExQixFQUF1QztBQUNyQyx3QkFBTyxxRUFBQyxpREFBRDtBQUFXLGdCQUFVLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFOLElBQUksQ0FBQ087QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRVAsSUFBSSxDQUFDUTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxzREFBRDtBQUNJLFNBQUcsOEJBQXVCUCxNQUFNLENBQUNRLE1BQTlCLENBRFA7QUFFSSxXQUFLLEVBQUVULElBQUksQ0FBQ08sS0FGaEIsQ0FHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEo7QUFRSSxtQkFBYSxFQUFFUCxJQUFJLENBQUNVLElBUnhCO0FBU0ksa0JBQVksRUFBRVYsSUFBSSxDQUFDVSxJQVR2QjtBQVVJLGdCQUFVLEVBQUUsQ0FBQyxrQkFBRCxDQVZoQjtBQVdJLG1CQUFhLEVBQUMsa0JBWGxCO0FBWUksbUJBQWEsRUFBQyxTQVpsQjtBQWFJLGlCQUFXLEVBQUVWLElBQUksQ0FBQ1E7QUFidEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBb0JFO0FBQUssZUFBUyxFQUFFRyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNBO0FBQUEsa0JBQUtaLElBQUksQ0FBQ087QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFBLGtCQUFLUCxJQUFJLENBQUNRO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0EscUVBQUMsaURBQUQsa0NBQ0tMLGFBREw7QUFDb0IsYUFBSyxFQUFDLGlDQUQxQjtBQUVDLGNBQU0sRUFBQyxXQUZSO0FBR0MsV0FBRyxFQUFFSCxJQUFJLENBQUNPO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLGVBUUEscUVBQUMscUVBQUQ7QUFBYyxjQUFNLEVBQUVQLElBQUksQ0FBQ2EsSUFBM0I7QUFBaUMsaUJBQVMsRUFBRUYsOERBQU0sQ0FBQ1g7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDs7SUF6Q3VCRCxJO1VBQ1BHLHFEOzs7S0FET0gsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5jM2JkYmI1MGQ2MGMxY2RkOGIxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEFydGljbGVKc29uTGQgfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJ1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IHsgdXNlTmV4dFNhbml0eUltYWdlIH0gZnJvbSAnbmV4dC1zYW5pdHktaW1hZ2UnO1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0c1dpdGhTbHVnLCBnZXRQb3N0QW5kTW9yZVBvc3RzIH0gZnJvbSAndXRpbHMvYXBpJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJ3V0aWxzL3Nhbml0eSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvUG9zdC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICByZXR1cm4gdXNlTmV4dFNhbml0eUltYWdlKFxyXG5cdFx0Y2xpZW50LFxyXG5cdFx0c291cmNlXHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZlYXR1cmVkSW1hZ2UgPSB1cmxGb3IocG9zdC5pbWFnZSk7XHJcblxyXG4gIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIXBvc3Q/LnNsdWcpIHtcclxuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmRlc2NyaXB0aW9ufSAvPiAgICAgICAgXHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFydGljbGVKc29uTGRcclxuICAgICAgICAgIHVybD17YGh0dHBzOi8vdHVtdWx0eS5tZSR7cm91dGVyLmFzUGF0aH1gfVxyXG4gICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAvLyBpbWFnZXM9e1tcclxuICAgICAgICAgIC8vICAgZmVhdHVyZWRJbWFnZS53aWR0aCg2MjApLmhlaWdodCgyNDApLnVybCgpLFxyXG4gICAgICAgICAgLy8gICBmZWF0dXJlZEltYWdlLndpZHRoKDMwMCkuaGVpZ2h0KDExNikudXJsKCksXHJcbiAgICAgICAgICAvLyAgIGZlYXR1cmVkSW1hZ2Uud2lkdGgoMTAwKS5oZWlnaHQoMzkpLnVybCgpLFxyXG4gICAgICAgICAgLy8gXX1cclxuICAgICAgICAgIGRhdGVQdWJsaXNoZWQ9e3Bvc3QuZGF0ZX1cclxuICAgICAgICAgIGRhdGVNb2RpZmllZD17cG9zdC5kYXRlfVxyXG4gICAgICAgICAgYXV0aG9yTmFtZT17WydQZXRlciBGLiBUdW11bHR5J119XHJcbiAgICAgICAgICBwdWJsaXNoZXJOYW1lPVwiUGV0ZXIgRi4gVHVtdWx0eVwiXHJcbiAgICAgICAgICBwdWJsaXNoZXJMb2dvPVwiL21lLnBuZ1wiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICA8aDI+e3Bvc3QuZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICB7Li4uZmVhdHVyZWRJbWFnZX0gc2l6ZXM9XCIobWF4LXdpZHRoOiA2MjBweCkgMTAwdncsIDYyMHB4XCJcclxuICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCbG9ja0NvbnRlbnQgYmxvY2tzPXtwb3N0LmJvZHl9IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0QW5kTW9yZVBvc3RzKHBhcmFtcy5zbHVnKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0OiBkYXRhIHx8IG51bGxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c1dpdGhTbHVnKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogYWxsUG9zdHMubWFwKChwb3N0KSA9PiBgL3Bvc3QvJHtwb3N0LnNsdWd9YCkgfHwgW10sXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=