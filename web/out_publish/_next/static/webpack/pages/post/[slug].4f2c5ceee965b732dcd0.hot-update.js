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

  console.log(featuredImage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwidXNlTmV4dFNhbml0eUltYWdlIiwiY2xpZW50IiwiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZWF0dXJlZEltYWdlIiwiaW1hZ2UiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXNQYXRoIiwiZGF0ZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBT0MsNEVBQWtCLENBQ3pCQyxvREFEeUIsRUFFekJGLE1BRnlCLENBQXpCO0FBSUQ7O0dBTFFELE07VUFDQUUsb0U7Ozs7QUFNTSxTQUFTRSxJQUFULE9BQXdCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3JDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxhQUFhLEdBQUdSLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDSSxLQUFOLENBQTVCOztBQUVBLE1BQUksQ0FBQ0gsTUFBTSxDQUFDSSxVQUFSLElBQXNCLEVBQUNMLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVNLElBQVAsQ0FBMUIsRUFBdUM7QUFDckMsd0JBQU8scUVBQUMsaURBQUQ7QUFBVyxnQkFBVSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsYUFBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRSCxJQUFJLENBQUNTO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVULElBQUksQ0FBQ1U7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsc0RBQUQ7QUFDSSxTQUFHLDhCQUF1QlQsTUFBTSxDQUFDVSxNQUE5QixDQURQO0FBRUksV0FBSyxFQUFFWCxJQUFJLENBQUNTLEtBRmhCLENBR0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBKO0FBUUksbUJBQWEsRUFBRVQsSUFBSSxDQUFDWSxJQVJ4QjtBQVNJLGtCQUFZLEVBQUVaLElBQUksQ0FBQ1ksSUFUdkI7QUFVSSxnQkFBVSxFQUFFLENBQUMsa0JBQUQsQ0FWaEI7QUFXSSxtQkFBYSxFQUFDLGtCQVhsQjtBQVlJLG1CQUFhLEVBQUMsU0FabEI7QUFhSSxpQkFBVyxFQUFFWixJQUFJLENBQUNVO0FBYnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQW9CRTtBQUFLLGVBQVMsRUFBRUcsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDQTtBQUFBLGtCQUFLZCxJQUFJLENBQUNTO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBQSxrQkFBS1QsSUFBSSxDQUFDVTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBLHFFQUFDLGlEQUFELGtDQUNLUCxhQURMO0FBQ29CLGFBQUssRUFBQyxpQ0FEMUI7QUFFQyxjQUFNLEVBQUMsV0FGUjtBQUdDLFdBQUcsRUFBRUgsSUFBSSxDQUFDUztBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQVFBLHFFQUFDLHFFQUFEO0FBQWMsY0FBTSxFQUFFVCxJQUFJLENBQUNlLElBQTNCO0FBQWlDLGlCQUFTLEVBQUVGLDhEQUFNLENBQUNiO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0lBekN1QkQsSTtVQUNQRyxxRDs7O0tBRE9ILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uNGYyYzVjZWVlOTY1YjczMmRjZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBBcnRpY2xlSnNvbkxkIH0gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcidcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXHJcbmltcG9ydCB7IHVzZU5leHRTYW5pdHlJbWFnZSB9IGZyb20gJ25leHQtc2FuaXR5LWltYWdlJztcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdHNXaXRoU2x1ZywgZ2V0UG9zdEFuZE1vcmVQb3N0cyB9IGZyb20gJ3V0aWxzL2FwaSdcclxuaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9zYW5pdHknXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL1Bvc3QubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgcmV0dXJuIHVzZU5leHRTYW5pdHlJbWFnZShcclxuXHRcdGNsaWVudCxcclxuXHRcdHNvdXJjZVxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmZWF0dXJlZEltYWdlID0gdXJsRm9yKHBvc3QuaW1hZ2UpO1xyXG5cclxuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XHJcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGZlYXR1cmVkSW1hZ2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZGVzY3JpcHRpb259IC8+ICAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXJ0aWNsZUpzb25MZFxyXG4gICAgICAgICAgdXJsPXtgaHR0cHM6Ly90dW11bHR5Lm1lJHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgIC8vIGltYWdlcz17W1xyXG4gICAgICAgICAgLy8gICBmZWF0dXJlZEltYWdlLndpZHRoKDYyMCkuaGVpZ2h0KDI0MCkudXJsKCksXHJcbiAgICAgICAgICAvLyAgIGZlYXR1cmVkSW1hZ2Uud2lkdGgoMzAwKS5oZWlnaHQoMTE2KS51cmwoKSxcclxuICAgICAgICAgIC8vICAgZmVhdHVyZWRJbWFnZS53aWR0aCgxMDApLmhlaWdodCgzOSkudXJsKCksXHJcbiAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgZGF0ZVB1Ymxpc2hlZD17cG9zdC5kYXRlfVxyXG4gICAgICAgICAgZGF0ZU1vZGlmaWVkPXtwb3N0LmRhdGV9XHJcbiAgICAgICAgICBhdXRob3JOYW1lPXtbJ1BldGVyIEYuIFR1bXVsdHknXX1cclxuICAgICAgICAgIHB1Ymxpc2hlck5hbWU9XCJQZXRlciBGLiBUdW11bHR5XCJcclxuICAgICAgICAgIHB1Ymxpc2hlckxvZ289XCIvbWUucG5nXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgIDxoMj57cG9zdC5kZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgIHsuLi5mZWF0dXJlZEltYWdlfSBzaXplcz1cIihtYXgtd2lkdGg6IDYyMHB4KSAxMDB2dywgNjIwcHhcIlxyXG4gICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCJcclxuICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPEJsb2NrQ29udGVudCBibG9ja3M9e3Bvc3QuYm9keX0gY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBvc3RBbmRNb3JlUG9zdHMocGFyYW1zLnNsdWcpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IGRhdGEgfHwgbnVsbFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzV2l0aFNsdWcoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBhbGxQb3N0cy5tYXAoKHBvc3QpID0+IGAvcG9zdC8ke3Bvc3Quc2x1Z31gKSB8fCBbXSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==