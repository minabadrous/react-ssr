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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

var FETCH_USERS = exports.FETCH_USERS = "fetch_users";
var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, _getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get("/users");

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "fetch_current_user";
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, _getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get("/current_user");

                        case 2:
                            res = _context2.sent;

                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = "fetch_admins";
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, _getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get("/admins");

                        case 2:
                            res = _context3.sent;

                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _Homepage = __webpack_require__(15);

var _Homepage2 = _interopRequireDefault(_Homepage);

var _UsersListPage = __webpack_require__(16);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _PageNotFound = __webpack_require__(17);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _AdminsListPage = __webpack_require__(18);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _Homepage2.default, {
        path: "/",
        exact: true
    }), _extends({}, _UsersListPage2.default, { path: "/users" }), _extends({}, _AdminsListPage2.default, { path: "/admins" }), _extends({}, _PageNotFound2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var DataList = function DataList(_ref) {
    var head = _ref.head,
        title = _ref.title,
        data = _ref.data;

    return _react2.default.createElement("div", null, head, _react2.default.createElement("h1", null, title), _react2.default.createElement("ul", null, data.map(function (instance) {
        return _react2.default.createElement("li", { key: instance.id }, instance.name);
    })));
};

exports.default = DataList;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(11);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(21);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(28);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

var app = (0, _express2.default)();

app.use("/api", (0, _expressHttpProxy2.default)("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers["x-Forwarded-host"] = "localhost:3000";
        return opts;
    }
}));

app.use(_express2.default.static("public"));

app.get("*", function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var store, wrapAndExecPromises, promises;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        store = (0, _createStore2.default)(req);

                        wrapAndExecPromises = function wrapAndExecPromises(loadData) {
                            return new Promise(function (resolve) {
                                loadData(store).then(resolve).catch(resolve);
                            });
                        };

                        promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {
                            var route = _ref2.route;
                            return route.loadData ? wrapAndExecPromises(route.loadData) : null;
                        });

                        Promise.all(promises).then(function () {
                            var context = {};
                            var content = (0, _renderer2.default)(req, store, context);

                            if (context.url) return res.redirect(301, "/");
                            if (context.pageNotFound) res.status(404);

                            res.send(content);
                        });

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

app.listen(3000, function () {
    console.log("running on port 3000");
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(20);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(29);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouterDom.StaticRouter, { context: context, location: req.path }, _react2.default.createElement("div", null, (0, _reactRouterConfig.renderRoutes)(_Routes2.default)))));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return "\n        <html>\n            <head>\n            " + helmet.title.toString() + "\n            " + helmet.meta.toString() + "\n            </head>\n            <body>\n                <div id=\"root\">" + content + "</div>\n                <script>\n                    window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n                </script>\n                <script src=\"bundle.js\"></script>\n            </body>\n        </html>\n    ";
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(14);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement("div", null, _react2.default.createElement(_Header2.default, null), _react2.default.createElement("div", null, (0, _reactRouterConfig.renderRoutes)(route.routes)));
};

var loadData = function loadData(store) {
    return store.dispatch((0, _actions.fetchCurrentUser)());
};

exports.default = {
    loadData: loadData,
    component: App
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Header = function Header(_ref) {
    var auth = _ref.auth,
        fetchCurrentUser = _ref.fetchCurrentUser;

    (0, _react.useEffect)(function () {
        fetchCurrentUser();
    }, []);

    return _react2.default.createElement("div", { className: "nav-wrapper" }, _react2.default.createElement(_reactRouterDom.Link, { className: "brand-logo", to: "/" }, "React SSR"), _react2.default.createElement("ul", { className: "flex gap-10" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouterDom.Link, { to: "/users" }, "Users")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouterDom.Link, { to: "/admins" }, "Admins")), _react2.default.createElement("li", null, !auth && auth !== null ? _react2.default.createElement("a", { href: "/api/auth/google" }, "login") : _react2.default.createElement("a", { href: "/api/logout" }, "Logout"))));
};

var mapStateToProps = function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchCurrentUser: _actions.fetchCurrentUser })(Header);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Home = function Home() {
    return _react2.default.createElement("div", null, _react2.default.createElement("h3", null, "I'm the SMART NEW new home component"));
};

exports.default = { component: Home };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _dataList = __webpack_require__(6);

var _dataList2 = _interopRequireDefault(_dataList);

var _reactHelmet = __webpack_require__(29);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var UsersList = function UsersList(_ref) {
    var users = _ref.users,
        fetchUsers = _ref.fetchUsers;

    (0, _react.useEffect)(function () {
        fetchUsers();
    }, []);

    var head = _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement("title", null, users.length + " Users Loaded"), _react2.default.createElement("meta", { property: "og:title", content: "Users List" }));

    return _react2.default.createElement(_dataList2.default, { head: head, title: "Users List", data: users });
};

var mapStateToProps = function mapStateToProps(state) {
    return { users: state.users };
};

var loadData = function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList),
    loadData: loadData
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var PageNotFound = function PageNotFound(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.pageNotFound = true;

    return _react2.default.createElement("h1", null, "Ops, page is not found");
};

exports.default = {
    component: PageNotFound
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataList = __webpack_require__(6);

var _dataList2 = _interopRequireDefault(_dataList);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _requireAuth = __webpack_require__(19);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var AdminsListPage = function AdminsListPage(_ref) {
    var admins = _ref.admins,
        fetchAdmins = _ref.fetchAdmins;

    (0, _react.useEffect)(function () {
        fetchAdmins();
    }, []);

    return _react2.default.createElement(_dataList2.default, { title: "$Protected Admins List", data: admins });
};

var mapStateToProps = function mapStateToProps(_ref2) {
    var admins = _ref2.admins;

    return { admins: admins };
};

var loadData = function loadData(store) {
    return store.dispatch((0, _actions.fetchAdmins)());
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
    loadData: loadData
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (ChildComponent) {
    var RequireAuth = function RequireAuth(props) {
        switch (props.auth) {
            case false:
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });

            case null:
                return _react2.default.createElement("div", null, "Loading...");

            default:
                return _react2.default.createElement(ChildComponent, props);
        }
    };

    var mapStateToProps = function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    };

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(7);

var _reducers = __webpack_require__(22);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(26);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: "http://react-ssr-api.herokuapp.com",
        headers: { cookie: req.get("cookie") || "" }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
    return store;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(7);

var _usersReducer = __webpack_require__(23);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(24);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(25);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _redux.combineReducers)({
    users: _usersReducer2.default,
    auth: _authReducer2.default,
    admins: _adminsReducer2.default
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);