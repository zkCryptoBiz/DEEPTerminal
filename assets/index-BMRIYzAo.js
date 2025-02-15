(function () {
  const L = document.createElement("link").relList;
  if (L && L.supports && L.supports("modulepreload")) return;
  for (const O of document.querySelectorAll('link[rel="modulepreload"]')) K(O);
  new MutationObserver((O) => {
    for (const D of O)
      if (D.type === "childList")
        for (const X of D.addedNodes)
          X.tagName === "LINK" && X.rel === "modulepreload" && K(X);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(O) {
    const D = {};
    return (
      O.integrity && (D.integrity = O.integrity),
      O.referrerPolicy && (D.referrerPolicy = O.referrerPolicy),
      O.crossOrigin === "use-credentials"
        ? (D.credentials = "include")
        : O.crossOrigin === "anonymous"
        ? (D.credentials = "omit")
        : (D.credentials = "same-origin"),
      D
    );
  }
  function K(O) {
    if (O.ep) return;
    O.ep = !0;
    const D = m(O);
    fetch(O.href, D);
  }
})();
var Ci = { exports: {} },
  wr = {},
  Ni = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Mf() {
  if (Na) return F;
  Na = 1;
  var E = Symbol.for("react.element"),
    L = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    K = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    D = Symbol.for("react.provider"),
    X = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    ye = Symbol.for("react.memo"),
    pe = Symbol.for("react.lazy"),
    re = Symbol.iterator;
  function b(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (re && c[re]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var Oe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Pe = Object.assign,
    ee = {};
  function Y(c, y, I) {
    (this.props = c),
      (this.context = y),
      (this.refs = ee),
      (this.updater = I || Oe);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function tn() {}
  tn.prototype = Y.prototype;
  function A(c, y, I) {
    (this.props = c),
      (this.context = y),
      (this.refs = ee),
      (this.updater = I || Oe);
  }
  var V = (A.prototype = new tn());
  (V.constructor = A), Pe(V, Y.prototype), (V.isPureReactComponent = !0);
  var Z = Array.isArray,
    ie = Object.prototype.hasOwnProperty,
    ge = { current: null },
    De = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ge(c, y, I) {
    var U,
      H = {},
      W = null,
      ne = null;
    if (y != null)
      for (U in (y.ref !== void 0 && (ne = y.ref),
      y.key !== void 0 && (W = "" + y.key),
      y))
        ie.call(y, U) && !De.hasOwnProperty(U) && (H[U] = y[U]);
    var J = arguments.length - 2;
    if (J === 1) H.children = I;
    else if (1 < J) {
      for (var oe = Array(J), We = 0; We < J; We++) oe[We] = arguments[We + 2];
      H.children = oe;
    }
    if (c && c.defaultProps)
      for (U in ((J = c.defaultProps), J)) H[U] === void 0 && (H[U] = J[U]);
    return {
      $$typeof: E,
      type: c,
      key: W,
      ref: ne,
      props: H,
      _owner: ge.current,
    };
  }
  function zn(c, y) {
    return {
      $$typeof: E,
      type: c.type,
      key: y,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function wn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === E;
  }
  function Xn(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (I) {
        return y[I];
      })
    );
  }
  var dn = /\/+/g;
  function He(c, y) {
    return typeof c == "object" && c !== null && c.key != null
      ? Xn("" + c.key)
      : y.toString(36);
  }
  function rn(c, y, I, U, H) {
    var W = typeof c;
    (W === "undefined" || W === "boolean") && (c = null);
    var ne = !1;
    if (c === null) ne = !0;
    else
      switch (W) {
        case "string":
        case "number":
          ne = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case E:
            case L:
              ne = !0;
          }
      }
    if (ne)
      return (
        (ne = c),
        (H = H(ne)),
        (c = U === "" ? "." + He(ne, 0) : U),
        Z(H)
          ? ((I = ""),
            c != null && (I = c.replace(dn, "$&/") + "/"),
            rn(H, y, I, "", function (We) {
              return We;
            }))
          : H != null &&
            (wn(H) &&
              (H = zn(
                H,
                I +
                  (!H.key || (ne && ne.key === H.key)
                    ? ""
                    : ("" + H.key).replace(dn, "$&/") + "/") +
                  c
              )),
            y.push(H)),
        1
      );
    if (((ne = 0), (U = U === "" ? "." : U + ":"), Z(c)))
      for (var J = 0; J < c.length; J++) {
        W = c[J];
        var oe = U + He(W, J);
        ne += rn(W, y, I, oe, H);
      }
    else if (((oe = b(c)), typeof oe == "function"))
      for (c = oe.call(c), J = 0; !(W = c.next()).done; )
        (W = W.value), (oe = U + He(W, J++)), (ne += rn(W, y, I, oe, H));
    else if (W === "object")
      throw (
        ((y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ne;
  }
  function pn(c, y, I) {
    if (c == null) return c;
    var U = [],
      H = 0;
    return (
      rn(c, U, "", "", function (W) {
        return y.call(I, W, H++);
      }),
      U
    );
  }
  function Ie(c) {
    if (c._status === -1) {
      var y = c._result;
      (y = y()),
        y.then(
          function (I) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = I));
          },
          function (I) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = I));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = y));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var fe = { current: null },
    k = { transition: null },
    R = {
      ReactCurrentDispatcher: fe,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: ge,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (F.Children = {
      map: pn,
      forEach: function (c, y, I) {
        pn(
          c,
          function () {
            y.apply(this, arguments);
          },
          I
        );
      },
      count: function (c) {
        var y = 0;
        return (
          pn(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          pn(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!wn(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (F.Component = Y),
    (F.Fragment = m),
    (F.Profiler = O),
    (F.PureComponent = A),
    (F.StrictMode = K),
    (F.Suspense = $),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (F.act = _),
    (F.cloneElement = function (c, y, I) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var U = Pe({}, c.props),
        H = c.key,
        W = c.ref,
        ne = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((W = y.ref), (ne = ge.current)),
          y.key !== void 0 && (H = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var J = c.type.defaultProps;
        for (oe in y)
          ie.call(y, oe) &&
            !De.hasOwnProperty(oe) &&
            (U[oe] = y[oe] === void 0 && J !== void 0 ? J[oe] : y[oe]);
      }
      var oe = arguments.length - 2;
      if (oe === 1) U.children = I;
      else if (1 < oe) {
        J = Array(oe);
        for (var We = 0; We < oe; We++) J[We] = arguments[We + 2];
        U.children = J;
      }
      return {
        $$typeof: E,
        type: c.type,
        key: H,
        ref: W,
        props: U,
        _owner: ne,
      };
    }),
    (F.createContext = function (c) {
      return (
        (c = {
          $$typeof: X,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: D, _context: c }),
        (c.Consumer = c)
      );
    }),
    (F.createElement = Ge),
    (F.createFactory = function (c) {
      var y = Ge.bind(null, c);
      return (y.type = c), y;
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (c) {
      return { $$typeof: G, render: c };
    }),
    (F.isValidElement = wn),
    (F.lazy = function (c) {
      return { $$typeof: pe, _payload: { _status: -1, _result: c }, _init: Ie };
    }),
    (F.memo = function (c, y) {
      return { $$typeof: ye, type: c, compare: y === void 0 ? null : y };
    }),
    (F.startTransition = function (c) {
      var y = k.transition;
      k.transition = {};
      try {
        c();
      } finally {
        k.transition = y;
      }
    }),
    (F.unstable_act = _),
    (F.useCallback = function (c, y) {
      return fe.current.useCallback(c, y);
    }),
    (F.useContext = function (c) {
      return fe.current.useContext(c);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (c) {
      return fe.current.useDeferredValue(c);
    }),
    (F.useEffect = function (c, y) {
      return fe.current.useEffect(c, y);
    }),
    (F.useId = function () {
      return fe.current.useId();
    }),
    (F.useImperativeHandle = function (c, y, I) {
      return fe.current.useImperativeHandle(c, y, I);
    }),
    (F.useInsertionEffect = function (c, y) {
      return fe.current.useInsertionEffect(c, y);
    }),
    (F.useLayoutEffect = function (c, y) {
      return fe.current.useLayoutEffect(c, y);
    }),
    (F.useMemo = function (c, y) {
      return fe.current.useMemo(c, y);
    }),
    (F.useReducer = function (c, y, I) {
      return fe.current.useReducer(c, y, I);
    }),
    (F.useRef = function (c) {
      return fe.current.useRef(c);
    }),
    (F.useState = function (c) {
      return fe.current.useState(c);
    }),
    (F.useSyncExternalStore = function (c, y, I) {
      return fe.current.useSyncExternalStore(c, y, I);
    }),
    (F.useTransition = function () {
      return fe.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
var Pa;
function Li() {
  return Pa || ((Pa = 1), (Ni.exports = Mf())), Ni.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Of() {
  if (za) return wr;
  za = 1;
  var E = Li(),
    L = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    K = Object.prototype.hasOwnProperty,
    O = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(G, $, ye) {
    var pe,
      re = {},
      b = null,
      Oe = null;
    ye !== void 0 && (b = "" + ye),
      $.key !== void 0 && (b = "" + $.key),
      $.ref !== void 0 && (Oe = $.ref);
    for (pe in $) K.call($, pe) && !D.hasOwnProperty(pe) && (re[pe] = $[pe]);
    if (G && G.defaultProps)
      for (pe in (($ = G.defaultProps), $))
        re[pe] === void 0 && (re[pe] = $[pe]);
    return {
      $$typeof: L,
      type: G,
      key: b,
      ref: Oe,
      props: re,
      _owner: O.current,
    };
  }
  return (wr.Fragment = m), (wr.jsx = X), (wr.jsxs = X), wr;
}
var Ta;
function Df() {
  return Ta || ((Ta = 1), (Ci.exports = Of())), Ci.exports;
}
var M = Df(),
  Ne = Li(),
  Rl = {},
  Pi = { exports: {} },
  Be = {},
  zi = { exports: {} },
  Ti = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function If() {
  return (
    La ||
      ((La = 1),
      (function (E) {
        function L(k, R) {
          var _ = k.length;
          k.push(R);
          e: for (; 0 < _; ) {
            var c = (_ - 1) >>> 1,
              y = k[c];
            if (0 < O(y, R)) (k[c] = R), (k[_] = y), (_ = c);
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function K(k) {
          if (k.length === 0) return null;
          var R = k[0],
            _ = k.pop();
          if (_ !== R) {
            k[0] = _;
            e: for (var c = 0, y = k.length, I = y >>> 1; c < I; ) {
              var U = 2 * (c + 1) - 1,
                H = k[U],
                W = U + 1,
                ne = k[W];
              if (0 > O(H, _))
                W < y && 0 > O(ne, H)
                  ? ((k[c] = ne), (k[W] = _), (c = W))
                  : ((k[c] = H), (k[U] = _), (c = U));
              else if (W < y && 0 > O(ne, _)) (k[c] = ne), (k[W] = _), (c = W);
              else break e;
            }
          }
          return R;
        }
        function O(k, R) {
          var _ = k.sortIndex - R.sortIndex;
          return _ !== 0 ? _ : k.id - R.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var D = performance;
          E.unstable_now = function () {
            return D.now();
          };
        } else {
          var X = Date,
            G = X.now();
          E.unstable_now = function () {
            return X.now() - G;
          };
        }
        var $ = [],
          ye = [],
          pe = 1,
          re = null,
          b = 3,
          Oe = !1,
          Pe = !1,
          ee = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          tn = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function V(k) {
          for (var R = m(ye); R !== null; ) {
            if (R.callback === null) K(ye);
            else if (R.startTime <= k)
              K(ye), (R.sortIndex = R.expirationTime), L($, R);
            else break;
            R = m(ye);
          }
        }
        function Z(k) {
          if (((ee = !1), V(k), !Pe))
            if (m($) !== null) (Pe = !0), Ie(ie);
            else {
              var R = m(ye);
              R !== null && fe(Z, R.startTime - k);
            }
        }
        function ie(k, R) {
          (Pe = !1), ee && ((ee = !1), tn(Ge), (Ge = -1)), (Oe = !0);
          var _ = b;
          try {
            for (
              V(R), re = m($);
              re !== null && (!(re.expirationTime > R) || (k && !Xn()));

            ) {
              var c = re.callback;
              if (typeof c == "function") {
                (re.callback = null), (b = re.priorityLevel);
                var y = c(re.expirationTime <= R);
                (R = E.unstable_now()),
                  typeof y == "function"
                    ? (re.callback = y)
                    : re === m($) && K($),
                  V(R);
              } else K($);
              re = m($);
            }
            if (re !== null) var I = !0;
            else {
              var U = m(ye);
              U !== null && fe(Z, U.startTime - R), (I = !1);
            }
            return I;
          } finally {
            (re = null), (b = _), (Oe = !1);
          }
        }
        var ge = !1,
          De = null,
          Ge = -1,
          zn = 5,
          wn = -1;
        function Xn() {
          return !(E.unstable_now() - wn < zn);
        }
        function dn() {
          if (De !== null) {
            var k = E.unstable_now();
            wn = k;
            var R = !0;
            try {
              R = De(!0, k);
            } finally {
              R ? He() : ((ge = !1), (De = null));
            }
          } else ge = !1;
        }
        var He;
        if (typeof A == "function")
          He = function () {
            A(dn);
          };
        else if (typeof MessageChannel < "u") {
          var rn = new MessageChannel(),
            pn = rn.port2;
          (rn.port1.onmessage = dn),
            (He = function () {
              pn.postMessage(null);
            });
        } else
          He = function () {
            Y(dn, 0);
          };
        function Ie(k) {
          (De = k), ge || ((ge = !0), He());
        }
        function fe(k, R) {
          Ge = Y(function () {
            k(E.unstable_now());
          }, R);
        }
        (E.unstable_IdlePriority = 5),
          (E.unstable_ImmediatePriority = 1),
          (E.unstable_LowPriority = 4),
          (E.unstable_NormalPriority = 3),
          (E.unstable_Profiling = null),
          (E.unstable_UserBlockingPriority = 2),
          (E.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (E.unstable_continueExecution = function () {
            Pe || Oe || ((Pe = !0), Ie(ie));
          }),
          (E.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (zn = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (E.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (E.unstable_getFirstCallbackNode = function () {
            return m($);
          }),
          (E.unstable_next = function (k) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = b;
            }
            var _ = b;
            b = R;
            try {
              return k();
            } finally {
              b = _;
            }
          }),
          (E.unstable_pauseExecution = function () {}),
          (E.unstable_requestPaint = function () {}),
          (E.unstable_runWithPriority = function (k, R) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var _ = b;
            b = k;
            try {
              return R();
            } finally {
              b = _;
            }
          }),
          (E.unstable_scheduleCallback = function (k, R, _) {
            var c = E.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? c + _ : c))
                : (_ = c),
              k)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = _ + y),
              (k = {
                id: pe++,
                callback: R,
                priorityLevel: k,
                startTime: _,
                expirationTime: y,
                sortIndex: -1,
              }),
              _ > c
                ? ((k.sortIndex = _),
                  L(ye, k),
                  m($) === null &&
                    k === m(ye) &&
                    (ee ? (tn(Ge), (Ge = -1)) : (ee = !0), fe(Z, _ - c)))
                : ((k.sortIndex = y), L($, k), Pe || Oe || ((Pe = !0), Ie(ie))),
              k
            );
          }),
          (E.unstable_shouldYield = Xn),
          (E.unstable_wrapCallback = function (k) {
            var R = b;
            return function () {
              var _ = b;
              b = R;
              try {
                return k.apply(this, arguments);
              } finally {
                b = _;
              }
            };
          });
      })(Ti)),
    Ti
  );
}
var Ra;
function Ff() {
  return Ra || ((Ra = 1), (zi.exports = If())), zi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Uf() {
  if (ja) return Be;
  ja = 1;
  var E = Li(),
    L = Ff();
  function m(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var K = new Set(),
    O = {};
  function D(e, n) {
    X(e, n), X(e + "Capture", n);
  }
  function X(e, n) {
    for (O[e] = n, e = 0; e < n.length; e++) K.add(n[e]);
  }
  var G = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $ = Object.prototype.hasOwnProperty,
    ye =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    pe = {},
    re = {};
  function b(e) {
    return $.call(re, e)
      ? !0
      : $.call(pe, e)
      ? !1
      : ye.test(e)
      ? (re[e] = !0)
      : ((pe[e] = !0), !1);
  }
  function Oe(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Pe(e, n, t, r) {
    if (n === null || typeof n > "u" || Oe(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function ee(e, n, t, r, l, u, i) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i);
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Y[e] = new ee(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      Y[n] = new ee(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Y[e] = new ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Y[e] = new ee(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new ee(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new ee(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new ee(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var tn = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(tn, A);
      Y[n] = new ee(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(tn, A);
        Y[n] = new ee(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(tn, A);
      Y[n] = new ee(
        n,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new ee(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function V(e, n, t, r) {
    var l = Y.hasOwnProperty(n) ? Y[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (Pe(n, t, l, r) && (t = null),
      r || l === null
        ? b(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var Z = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ie = Symbol.for("react.element"),
    ge = Symbol.for("react.portal"),
    De = Symbol.for("react.fragment"),
    Ge = Symbol.for("react.strict_mode"),
    zn = Symbol.for("react.profiler"),
    wn = Symbol.for("react.provider"),
    Xn = Symbol.for("react.context"),
    dn = Symbol.for("react.forward_ref"),
    He = Symbol.for("react.suspense"),
    rn = Symbol.for("react.suspense_list"),
    pn = Symbol.for("react.memo"),
    Ie = Symbol.for("react.lazy"),
    fe = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        c = (n && n[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var I = !1;
  function U(e, n) {
    if (!e || I) return "";
    I = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];

        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      (I = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function H(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = U(e.type, !1)), e;
      case 11:
        return (e = U(e.type.render, !1)), e;
      case 1:
        return (e = U(e.type, !0)), e;
      default:
        return "";
    }
  }
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case De:
        return "Fragment";
      case ge:
        return "Portal";
      case zn:
        return "Profiler";
      case Ge:
        return "StrictMode";
      case He:
        return "Suspense";
      case rn:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xn:
          return (e.displayName || "Context") + ".Consumer";
        case wn:
          return (e._context.displayName || "Context") + ".Provider";
        case dn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case pn:
          return (
            (n = e.displayName || null), n !== null ? n : W(e.type) || "Memo"
          );
        case Ie:
          (n = e._payload), (e = e._init);
          try {
            return W(e(n));
          } catch {}
      }
    return null;
  }
  function ne(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return W(n);
      case 8:
        return n === Ge ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function J(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function oe(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function We(e) {
    var n = oe(e) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var l = t.get,
        u = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function Ri(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = oe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function xr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function jl(e, n) {
    var t = n.checked;
    return _({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function ji(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = J(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Mi(e, n) {
    (n = n.checked), n != null && V(e, "checked", n, !1);
  }
  function Ml(e, n) {
    Mi(e, n);
    var t = J(n.value),
      r = n.type;
    if (t != null)
      r === "number"
        ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
        : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Ol(e, n.type, t)
      : n.hasOwnProperty("defaultValue") && Ol(e, n.type, J(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Oi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (t = e.name),
      t !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== "" && (e.name = t);
  }
  function Ol(e, n, t) {
    (n !== "number" || xr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function st(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + J(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Di(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: J(t) };
  }
  function Ii(e, n) {
    var t = J(n.value),
      r = J(n.defaultValue);
    t != null &&
      ((t = "" + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = "" + r);
  }
  function Fi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Ui(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ui(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Er,
    Ai = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          Er = Er || document.createElement("div"),
            Er.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = Er.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var It = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Fa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(It).forEach(function (e) {
    Fa.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (It[n] = It[e]);
    });
  });
  function $i(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : t || typeof n != "number" || n === 0 || (It.hasOwnProperty(e) && It[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function Vi(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0,
          l = $i(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var Ua = _(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Fl(e, n) {
    if (n) {
      if (Ua[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Ul(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Al = null;
  function $l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    at = null,
    ct = null;
  function Bi(e) {
    if ((e = lr(e))) {
      if (typeof Vl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && ((n = Kr(n)), Vl(e.stateNode, e.type, n));
    }
  }
  function Hi(e) {
    at ? (ct ? ct.push(e) : (ct = [e])) : (at = e);
  }
  function Wi() {
    if (at) {
      var e = at,
        n = ct;
      if (((ct = at = null), Bi(e), n)) for (e = 0; e < n.length; e++) Bi(n[e]);
    }
  }
  function Qi(e, n) {
    return e(n);
  }
  function Ki() {}
  var Bl = !1;
  function Yi(e, n, t) {
    if (Bl) return e(n, t);
    Bl = !0;
    try {
      return Qi(e, n, t);
    } finally {
      (Bl = !1), (at !== null || ct !== null) && (Ki(), Wi());
    }
  }
  function Ft(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Kr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Hl = !1;
  if (G)
    try {
      var Ut = {};
      Object.defineProperty(Ut, "passive", {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener("test", Ut, Ut),
        window.removeEventListener("test", Ut, Ut);
    } catch {
      Hl = !1;
    }
  function Aa(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (v) {
      this.onError(v);
    }
  }
  var At = !1,
    _r = null,
    Cr = !1,
    Wl = null,
    $a = {
      onError: function (e) {
        (At = !0), (_r = e);
      },
    };
  function Va(e, n, t, r, l, u, i, o, s) {
    (At = !1), (_r = null), Aa.apply($a, arguments);
  }
  function Ba(e, n, t, r, l, u, i, o, s) {
    if ((Va.apply(this, arguments), At)) {
      if (At) {
        var p = _r;
        (At = !1), (_r = null);
      } else throw Error(m(198));
      Cr || ((Cr = !0), (Wl = p));
    }
  }
  function Gn(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Xi(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Gi(e) {
    if (Gn(e) !== e) throw Error(m(188));
  }
  function Ha(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Gn(e)), n === null)) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Gi(l), e;
          if (u === r) return Gi(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) (t = l), (r = u);
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            (i = !0), (t = l), (r = u);
            break;
          }
          if (o === r) {
            (i = !0), (r = l), (t = u);
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              (i = !0), (t = u), (r = l);
              break;
            }
            if (o === r) {
              (i = !0), (r = u), (t = l);
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Zi(e) {
    return (e = Ha(e)), e !== null ? Ji(e) : null;
  }
  function Ji(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Ji(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var qi = L.unstable_scheduleCallback,
    bi = L.unstable_cancelCallback,
    Wa = L.unstable_shouldYield,
    Qa = L.unstable_requestPaint,
    me = L.unstable_now,
    Ka = L.unstable_getCurrentPriorityLevel,
    Ql = L.unstable_ImmediatePriority,
    eo = L.unstable_UserBlockingPriority,
    Nr = L.unstable_NormalPriority,
    Ya = L.unstable_LowPriority,
    no = L.unstable_IdlePriority,
    Pr = null,
    mn = null;
  function Xa(e) {
    if (mn && typeof mn.onCommitFiberRoot == "function")
      try {
        mn.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ln = Math.clz32 ? Math.clz32 : Ja,
    Ga = Math.log,
    Za = Math.LN2;
  function Ja(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ga(e) / Za) | 0)) | 0;
  }
  var zr = 64,
    Tr = 4194304;
  function $t(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Lr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = $t(o)) : ((u &= i), u !== 0 && (r = $t(u)));
    } else (i = t & ~l), i !== 0 ? (r = $t(i)) : u !== 0 && (r = $t(u));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - ln(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function qa(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ba(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var i = 31 - ln(u),
        o = 1 << i,
        s = l[i];
      s === -1
        ? (!(o & t) || o & r) && (l[i] = qa(o, n))
        : s <= n && (e.expiredLanes |= o),
        (u &= ~o);
    }
  }
  function Kl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function to() {
    var e = zr;
    return (zr <<= 1), !(zr & 4194240) && (zr = 64), e;
  }
  function Yl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - ln(n)),
      (e[n] = t);
  }
  function ec(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - ln(t),
        u = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
    }
  }
  function Xl(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - ln(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var q = 0;
  function ro(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var lo,
    Gl,
    uo,
    io,
    oo,
    Zl = !1,
    Rr = [],
    Tn = null,
    Ln = null,
    Rn = null,
    Bt = new Map(),
    Ht = new Map(),
    jn = [],
    nc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function so(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Bt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ht.delete(n.pointerId);
    }
  }
  function Wt(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        n !== null && ((n = lr(n)), n !== null && Gl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function tc(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return (Tn = Wt(Tn, e, n, t, r, l)), !0;
      case "dragenter":
        return (Ln = Wt(Ln, e, n, t, r, l)), !0;
      case "mouseover":
        return (Rn = Wt(Rn, e, n, t, r, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Bt.set(u, Wt(Bt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Ht.set(u, Wt(Ht.get(u) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function ao(e) {
    var n = Zn(e.target);
    if (n !== null) {
      var t = Gn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Xi(t)), n !== null)) {
            (e.blockedOn = n),
              oo(e.priority, function () {
                uo(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = ql(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (Al = r), t.target.dispatchEvent(r), (Al = null);
      } else return (n = lr(t)), n !== null && Gl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function co(e, n, t) {
    jr(e) && t.delete(n);
  }
  function rc() {
    (Zl = !1),
      Tn !== null && jr(Tn) && (Tn = null),
      Ln !== null && jr(Ln) && (Ln = null),
      Rn !== null && jr(Rn) && (Rn = null),
      Bt.forEach(co),
      Ht.forEach(co);
  }
  function Qt(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Zl ||
        ((Zl = !0),
        L.unstable_scheduleCallback(L.unstable_NormalPriority, rc)));
  }
  function Kt(e) {
    function n(l) {
      return Qt(l, e);
    }
    if (0 < Rr.length) {
      Qt(Rr[0], e);
      for (var t = 1; t < Rr.length; t++) {
        var r = Rr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Tn !== null && Qt(Tn, e),
        Ln !== null && Qt(Ln, e),
        Rn !== null && Qt(Rn, e),
        Bt.forEach(n),
        Ht.forEach(n),
        t = 0;
      t < jn.length;
      t++
    )
      (r = jn[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jn.length && ((t = jn[0]), t.blockedOn === null); )
      ao(t), t.blockedOn === null && jn.shift();
  }
  var ft = Z.ReactCurrentBatchConfig,
    Mr = !0;
  function lc(e, n, t, r) {
    var l = q,
      u = ft.transition;
    ft.transition = null;
    try {
      (q = 1), Jl(e, n, t, r);
    } finally {
      (q = l), (ft.transition = u);
    }
  }
  function uc(e, n, t, r) {
    var l = q,
      u = ft.transition;
    ft.transition = null;
    try {
      (q = 4), Jl(e, n, t, r);
    } finally {
      (q = l), (ft.transition = u);
    }
  }
  function Jl(e, n, t, r) {
    if (Mr) {
      var l = ql(e, n, t, r);
      if (l === null) hu(e, n, r, Or, t), so(e, r);
      else if (tc(l, e, n, t, r)) r.stopPropagation();
      else if ((so(e, r), n & 4 && -1 < nc.indexOf(e))) {
        for (; l !== null; ) {
          var u = lr(l);
          if (
            (u !== null && lo(u),
            (u = ql(e, n, t, r)),
            u === null && hu(e, n, r, Or, t),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else hu(e, n, r, null, t);
    }
  }
  var Or = null;
  function ql(e, n, t, r) {
    if (((Or = null), (e = $l(r)), (e = Zn(e)), e !== null))
      if (((n = Gn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Xi(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Or = e), null;
  }
  function fo(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ka()) {
          case Ql:
            return 1;
          case eo:
            return 4;
          case Nr:
          case Ya:
            return 16;
          case no:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mn = null,
    bl = null,
    Dr = null;
  function po() {
    if (Dr) return Dr;
    var e,
      n = bl,
      t = n.length,
      r,
      l = "value" in Mn ? Mn.value : Mn.textContent,
      u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function mo() {
    return !1;
  }
  function Qe(e) {
    function n(t, r, l, u, i) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Fr
          : mo),
        (this.isPropagationStopped = mo),
        this
      );
    }
    return (
      _(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
      }),
      n
    );
  }
  var dt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eu = Qe(dt),
    Yt = _({}, dt, { view: 0, detail: 0 }),
    ic = Qe(Yt),
    nu,
    tu,
    Xt,
    Ur = _({}, Yt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: lu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Xt &&
              (Xt && e.type === "mousemove"
                ? ((nu = e.screenX - Xt.screenX), (tu = e.screenY - Xt.screenY))
                : (tu = nu = 0),
              (Xt = e)),
            nu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : tu;
      },
    }),
    ho = Qe(Ur),
    oc = _({}, Ur, { dataTransfer: 0 }),
    sc = Qe(oc),
    ac = _({}, Yt, { relatedTarget: 0 }),
    ru = Qe(ac),
    cc = _({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fc = Qe(cc),
    dc = _({}, dt, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    pc = Qe(dc),
    mc = _({}, dt, { data: 0 }),
    yo = Qe(mc),
    hc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    yc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    vc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function gc(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = vc[e])
      ? !!n[e]
      : !1;
  }
  function lu() {
    return gc;
  }
  var wc = _({}, Yt, {
      key: function (e) {
        if (e.key) {
          var n = hc[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? yc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lu,
      charCode: function (e) {
        return e.type === "keypress" ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ir(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    kc = Qe(wc),
    Sc = _({}, Ur, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    vo = Qe(Sc),
    xc = _({}, Yt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lu,
    }),
    Ec = Qe(xc),
    _c = _({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cc = Qe(_c),
    Nc = _({}, Ur, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Pc = Qe(Nc),
    zc = [9, 13, 27, 32],
    uu = G && "CompositionEvent" in window,
    Gt = null;
  G && "documentMode" in document && (Gt = document.documentMode);
  var Tc = G && "TextEvent" in window && !Gt,
    go = G && (!uu || (Gt && 8 < Gt && 11 >= Gt)),
    wo = " ",
    ko = !1;
  function So(e, n) {
    switch (e) {
      case "keyup":
        return zc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xo(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var pt = !1;
  function Lc(e, n) {
    switch (e) {
      case "compositionend":
        return xo(n);
      case "keypress":
        return n.which !== 32 ? null : ((ko = !0), wo);
      case "textInput":
        return (e = n.data), e === wo && ko ? null : e;
      default:
        return null;
    }
  }
  function Rc(e, n) {
    if (pt)
      return e === "compositionend" || (!uu && So(e, n))
        ? ((e = po()), (Dr = bl = Mn = null), (pt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return go && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var jc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Eo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!jc[e.type] : n === "textarea";
  }
  function _o(e, n, t, r) {
    Hi(r),
      (n = Hr(n, "onChange")),
      0 < n.length &&
        ((t = new eu("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Zt = null,
    Jt = null;
  function Mc(e) {
    Bo(e, 0);
  }
  function Ar(e) {
    var n = gt(e);
    if (Ri(n)) return e;
  }
  function Oc(e, n) {
    if (e === "change") return n;
  }
  var Co = !1;
  if (G) {
    var iu;
    if (G) {
      var ou = "oninput" in document;
      if (!ou) {
        var No = document.createElement("div");
        No.setAttribute("oninput", "return;"),
          (ou = typeof No.oninput == "function");
      }
      iu = ou;
    } else iu = !1;
    Co = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Po() {
    Zt && (Zt.detachEvent("onpropertychange", zo), (Jt = Zt = null));
  }
  function zo(e) {
    if (e.propertyName === "value" && Ar(Jt)) {
      var n = [];
      _o(n, Jt, e, $l(e)), Yi(Mc, n);
    }
  }
  function Dc(e, n, t) {
    e === "focusin"
      ? (Po(), (Zt = n), (Jt = t), Zt.attachEvent("onpropertychange", zo))
      : e === "focusout" && Po();
  }
  function Ic(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ar(Jt);
  }
  function Fc(e, n) {
    if (e === "click") return Ar(n);
  }
  function Uc(e, n) {
    if (e === "input" || e === "change") return Ar(n);
  }
  function Ac(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var un = typeof Object.is == "function" ? Object.is : Ac;
  function qt(e, n) {
    if (un(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!$.call(n, l) || !un(e[l], n[l])) return !1;
    }
    return !0;
  }
  function To(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lo(e, n) {
    var t = To(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = To(t);
    }
  }
  function Ro(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Ro(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function jo() {
    for (var e = window, n = xr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = xr(e.document);
    }
    return n;
  }
  function su(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function $c(e) {
    var n = jo(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Ro(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && su(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          "selectionStart" in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = Lo(t, u));
          var i = Lo(t, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(n), e.extend(i.node, i.offset))
              : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Vc = G && "documentMode" in document && 11 >= document.documentMode,
    mt = null,
    au = null,
    bt = null,
    cu = !1;
  function Mo(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    cu ||
      mt == null ||
      mt !== xr(r) ||
      ((r = mt),
      "selectionStart" in r && su(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bt && qt(bt, r)) ||
        ((bt = r),
        (r = Hr(au, "onSelect")),
        0 < r.length &&
          ((n = new eu("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = mt))));
  }
  function $r(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var ht = {
      animationend: $r("Animation", "AnimationEnd"),
      animationiteration: $r("Animation", "AnimationIteration"),
      animationstart: $r("Animation", "AnimationStart"),
      transitionend: $r("Transition", "TransitionEnd"),
    },
    fu = {},
    Oo = {};
  G &&
    ((Oo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ht.animationend.animation,
      delete ht.animationiteration.animation,
      delete ht.animationstart.animation),
    "TransitionEvent" in window || delete ht.transitionend.transition);
  function Vr(e) {
    if (fu[e]) return fu[e];
    if (!ht[e]) return e;
    var n = ht[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in Oo) return (fu[e] = n[t]);
    return e;
  }
  var Do = Vr("animationend"),
    Io = Vr("animationiteration"),
    Fo = Vr("animationstart"),
    Uo = Vr("transitionend"),
    Ao = new Map(),
    $o =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function On(e, n) {
    Ao.set(e, n), D(n, [e]);
  }
  for (var du = 0; du < $o.length; du++) {
    var pu = $o[du],
      Bc = pu.toLowerCase(),
      Hc = pu[0].toUpperCase() + pu.slice(1);
    On(Bc, "on" + Hc);
  }
  On(Do, "onAnimationEnd"),
    On(Io, "onAnimationIteration"),
    On(Fo, "onAnimationStart"),
    On("dblclick", "onDoubleClick"),
    On("focusin", "onFocus"),
    On("focusout", "onBlur"),
    On(Uo, "onTransitionEnd"),
    X("onMouseEnter", ["mouseout", "mouseover"]),
    X("onMouseLeave", ["mouseout", "mouseover"]),
    X("onPointerEnter", ["pointerout", "pointerover"]),
    X("onPointerLeave", ["pointerout", "pointerover"]),
    D(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    D(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    D(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    D(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    D(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Wc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(er)
    );
  function Vo(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Ba(r, n, void 0, e), (e.currentTarget = null);
  }
  function Bo(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped()))
              break e;
            Vo(l, o, p), (u = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            Vo(l, o, p), (u = s);
          }
      }
    }
    if (Cr) throw ((e = Wl), (Cr = !1), (Wl = null), e);
  }
  function le(e, n) {
    var t = n[Su];
    t === void 0 && (t = n[Su] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Ho(n, e, 2, !1), t.add(r));
  }
  function mu(e, n, t) {
    var r = 0;
    n && (r |= 4), Ho(t, e, r, n);
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Br]) {
      (e[Br] = !0),
        K.forEach(function (t) {
          t !== "selectionchange" && (Wc.has(t) || mu(t, !1, e), mu(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Br] || ((n[Br] = !0), mu("selectionchange", !1, n));
    }
  }
  function Ho(e, n, t, r) {
    switch (fo(n)) {
      case 1:
        var l = lc;
        break;
      case 4:
        l = uc;
        break;
      default:
        l = Jl;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Hl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
  }
  function hu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Zn(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Yi(function () {
      var p = u,
        v = $l(t),
        g = [];
      e: {
        var h = Ao.get(e);
        if (h !== void 0) {
          var S = eu,
            C = e;
          switch (e) {
            case "keypress":
              if (Ir(t) === 0) break e;
            case "keydown":
            case "keyup":
              S = kc;
              break;
            case "focusin":
              (C = "focus"), (S = ru);
              break;
            case "focusout":
              (C = "blur"), (S = ru);
              break;
            case "beforeblur":
            case "afterblur":
              S = ru;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = ho;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = sc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Ec;
              break;
            case Do:
            case Io:
            case Fo:
              S = fc;
              break;
            case Uo:
              S = Cc;
              break;
            case "scroll":
              S = ic;
              break;
            case "wheel":
              S = Pc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = pc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = vo;
          }
          var N = (n & 4) !== 0,
            he = !N && e === "scroll",
            f = N ? (h !== null ? h + "Capture" : null) : h;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                f !== null &&
                  ((w = Ft(a, f)), w != null && N.push(tr(a, w, d)))),
              he)
            )
              break;
            a = a.return;
          }
          0 < N.length &&
            ((h = new S(h, C, null, t, v)), g.push({ event: h, listeners: N }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            h &&
              t !== Al &&
              (C = t.relatedTarget || t.fromElement) &&
              (Zn(C) || C[kn]))
          )
            break e;
          if (
            (S || h) &&
            ((h =
              v.window === v
                ? v
                : (h = v.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            S
              ? ((C = t.relatedTarget || t.toElement),
                (S = p),
                (C = C ? Zn(C) : null),
                C !== null &&
                  ((he = Gn(C)), C !== he || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((S = null), (C = p)),
            S !== C)
          ) {
            if (
              ((N = ho),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((N = vo),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (he = S == null ? h : gt(S)),
              (d = C == null ? h : gt(C)),
              (h = new N(w, a + "leave", S, t, v)),
              (h.target = he),
              (h.relatedTarget = d),
              (w = null),
              Zn(v) === p &&
                ((N = new N(f, a + "enter", C, t, v)),
                (N.target = d),
                (N.relatedTarget = he),
                (w = N)),
              (he = w),
              S && C)
            )
              n: {
                for (N = S, f = C, a = 0, d = N; d; d = yt(d)) a++;
                for (d = 0, w = f; w; w = yt(w)) d++;
                for (; 0 < a - d; ) (N = yt(N)), a--;
                for (; 0 < d - a; ) (f = yt(f)), d--;
                for (; a--; ) {
                  if (N === f || (f !== null && N === f.alternate)) break n;
                  (N = yt(N)), (f = yt(f));
                }
                N = null;
              }
            else N = null;
            S !== null && Wo(g, h, S, N, !1),
              C !== null && he !== null && Wo(g, he, C, N, !0);
          }
        }
        e: {
          if (
            ((h = p ? gt(p) : window),
            (S = h.nodeName && h.nodeName.toLowerCase()),
            S === "select" || (S === "input" && h.type === "file"))
          )
            var P = Oc;
          else if (Eo(h))
            if (Co) P = Uc;
            else {
              P = Ic;
              var z = Dc;
            }
          else
            (S = h.nodeName) &&
              S.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (P = Fc);
          if (P && (P = P(e, p))) {
            _o(g, P, t, v);
            break e;
          }
          z && z(e, h, p),
            e === "focusout" &&
              (z = h._wrapperState) &&
              z.controlled &&
              h.type === "number" &&
              Ol(h, "number", h.value);
        }
        switch (((z = p ? gt(p) : window), e)) {
          case "focusin":
            (Eo(z) || z.contentEditable === "true") &&
              ((mt = z), (au = p), (bt = null));
            break;
          case "focusout":
            bt = au = mt = null;
            break;
          case "mousedown":
            cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (cu = !1), Mo(g, t, v);
            break;
          case "selectionchange":
            if (Vc) break;
          case "keydown":
          case "keyup":
            Mo(g, t, v);
        }
        var T;
        if (uu)
          e: {
            switch (e) {
              case "compositionstart":
                var j = "onCompositionStart";
                break e;
              case "compositionend":
                j = "onCompositionEnd";
                break e;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break e;
            }
            j = void 0;
          }
        else
          pt
            ? So(e, t) && (j = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (j = "onCompositionStart");
        j &&
          (go &&
            t.locale !== "ko" &&
            (pt || j !== "onCompositionStart"
              ? j === "onCompositionEnd" && pt && (T = po())
              : ((Mn = v),
                (bl = "value" in Mn ? Mn.value : Mn.textContent),
                (pt = !0))),
          (z = Hr(p, j)),
          0 < z.length &&
            ((j = new yo(j, e, null, t, v)),
            g.push({ event: j, listeners: z }),
            T ? (j.data = T) : ((T = xo(t)), T !== null && (j.data = T)))),
          (T = Tc ? Lc(e, t) : Rc(e, t)) &&
            ((p = Hr(p, "onBeforeInput")),
            0 < p.length &&
              ((v = new yo("onBeforeInput", "beforeinput", null, t, v)),
              g.push({ event: v, listeners: p }),
              (v.data = T)));
      }
      Bo(g, n);
    });
  }
  function tr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Hr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Ft(e, t)),
        u != null && r.unshift(tr(e, u, l)),
        (u = Ft(e, n)),
        u != null && r.push(tr(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function yt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Wo(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = Ft(t, u)), s != null && i.unshift(tr(t, s, o)))
          : l || ((s = Ft(t, u)), s != null && i.push(tr(t, s, o)))),
        (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Qc = /\r\n?/g,
    Kc = /\u0000|\uFFFD/g;
  function Qo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Qc,
        `
`
      )
      .replace(Kc, "");
  }
  function Wr(e, n, t) {
    if (((n = Qo(n)), Qo(e) !== n && t)) throw Error(m(425));
  }
  function Qr() {}
  var yu = null,
    vu = null;
  function gu(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wu = typeof setTimeout == "function" ? setTimeout : void 0,
    Yc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ko = typeof Promise == "function" ? Promise : void 0,
    Xc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ko < "u"
        ? function (e) {
            return Ko.resolve(null).then(e).catch(Gc);
          }
        : wu;
  function Gc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ku(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === "/$")) {
          if (r === 0) {
            e.removeChild(l), Kt(n);
            return;
          }
          r--;
        } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
      t = l;
    } while (t);
    Kt(n);
  }
  function Dn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Yo(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2),
    hn = "__reactFiber$" + vt,
    rr = "__reactProps$" + vt,
    kn = "__reactContainer$" + vt,
    Su = "__reactEvents$" + vt,
    Zc = "__reactListeners$" + vt,
    Jc = "__reactHandles$" + vt;
  function Zn(e) {
    var n = e[hn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[kn] || t[hn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Yo(e); e !== null; ) {
            if ((t = e[hn])) return t;
            e = Yo(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[hn] || e[kn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Kr(e) {
    return e[rr] || null;
  }
  var xu = [],
    wt = -1;
  function In(e) {
    return { current: e };
  }
  function ue(e) {
    0 > wt || ((e.current = xu[wt]), (xu[wt] = null), wt--);
  }
  function te(e, n) {
    wt++, (xu[wt] = e.current), (e.current = n);
  }
  var Fn = {},
    ze = In(Fn),
    Fe = In(!1),
    Jn = Fn;
  function kt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in t) l[u] = n[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ue(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Yr() {
    ue(Fe), ue(ze);
  }
  function Xo(e, n, t) {
    if (ze.current !== Fn) throw Error(m(168));
    te(ze, n), te(Fe, t);
  }
  function Go(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, ne(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Xr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Fn),
      (Jn = ze.current),
      te(ze, e),
      te(Fe, Fe.current),
      !0
    );
  }
  function Zo(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t
      ? ((e = Go(e, n, Jn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ue(Fe),
        ue(ze),
        te(ze, e))
      : ue(Fe),
      te(Fe, t);
  }
  var Sn = null,
    Gr = !1,
    Eu = !1;
  function Jo(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
  }
  function qc(e) {
    (Gr = !0), Jo(e);
  }
  function Un() {
    if (!Eu && Sn !== null) {
      Eu = !0;
      var e = 0,
        n = q;
      try {
        var t = Sn;
        for (q = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (Sn = null), (Gr = !1);
      } catch (l) {
        throw (Sn !== null && (Sn = Sn.slice(e + 1)), qi(Ql, Un), l);
      } finally {
        (q = n), (Eu = !1);
      }
    }
    return null;
  }
  var St = [],
    xt = 0,
    Zr = null,
    Jr = 0,
    Ze = [],
    Je = 0,
    qn = null,
    xn = 1,
    En = "";
  function bn(e, n) {
    (St[xt++] = Jr), (St[xt++] = Zr), (Zr = e), (Jr = n);
  }
  function qo(e, n, t) {
    (Ze[Je++] = xn), (Ze[Je++] = En), (Ze[Je++] = qn), (qn = e);
    var r = xn;
    e = En;
    var l = 32 - ln(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var u = 32 - ln(n) + l;
    if (30 < u) {
      var i = l - (l % 5);
      (u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (xn = (1 << (32 - ln(n) + l)) | (t << l) | r),
        (En = u + e);
    } else (xn = (1 << u) | (t << l) | r), (En = e);
  }
  function _u(e) {
    e.return !== null && (bn(e, 1), qo(e, 1, 0));
  }
  function Cu(e) {
    for (; e === Zr; )
      (Zr = St[--xt]), (St[xt] = null), (Jr = St[--xt]), (St[xt] = null);
    for (; e === qn; )
      (qn = Ze[--Je]),
        (Ze[Je] = null),
        (En = Ze[--Je]),
        (Ze[Je] = null),
        (xn = Ze[--Je]),
        (Ze[Je] = null);
  }
  var Ke = null,
    Ye = null,
    se = !1,
    on = null;
  function bo(e, n) {
    var t = nn(5, null, null, 0);
    (t.elementType = "DELETED"),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function es(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Ke = e), (Ye = Dn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Ke = e), (Ye = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = qn !== null ? { id: xn, overflow: En } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = nn(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (Ke = e),
              (Ye = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pu(e) {
    if (se) {
      var n = Ye;
      if (n) {
        var t = n;
        if (!es(e, n)) {
          if (Nu(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = Ke;
          n && es(e, n)
            ? bo(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Ke = e));
        }
      } else {
        if (Nu(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (se = !1), (Ke = e);
      }
    }
  }
  function ns(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ke = e;
  }
  function qr(e) {
    if (e !== Ke) return !1;
    if (!se) return ns(e), (se = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !gu(e.type, e.memoizedProps))),
      n && (n = Ye))
    ) {
      if (Nu(e)) throw (ts(), Error(m(418)));
      for (; n; ) bo(e, n), (n = Dn(n.nextSibling));
    }
    if ((ns(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ye = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else Ye = Ke ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    for (var e = Ye; e; ) e = Dn(e.nextSibling);
  }
  function Et() {
    (Ye = Ke = null), (se = !1);
  }
  function zu(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  var bc = Z.ReactCurrentBatchConfig;
  function ur(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === u
          ? n.ref
          : ((n = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (n._stringRef = u),
            n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function br(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function rs(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ls(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Kn(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function u(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function o(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = wi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === De
        ? v(f, a, d.props.children, w, d.key)
        : a !== null &&
          (a.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === Ie &&
              rs(P) === a.type))
        ? ((w = l(a, d.props)), (w.ref = ur(f, a, d)), (w.return = f), w)
        : ((w = El(d.type, d.key, d.props, null, f.mode, w)),
          (w.ref = ur(f, a, d)),
          (w.return = f),
          w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = ki(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function v(f, a, d, w, P) {
      return a === null || a.tag !== 7
        ? ((a = ot(d, f.mode, w, P)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = wi("" + a, f.mode, d)), (a.return = f), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case ie:
            return (
              (d = El(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ur(f, null, a)),
              (d.return = f),
              d
            );
          case ge:
            return (a = ki(a, f.mode, d)), (a.return = f), a;
          case Ie:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Ot(a) || R(a))
          return (a = ot(a, f.mode, d, null)), (a.return = f), a;
        br(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return P !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case ie:
            return d.key === P ? s(f, a, d, w) : null;
          case ge:
            return d.key === P ? p(f, a, d, w) : null;
          case Ie:
            return (P = d._init), h(f, a, P(d._payload), w);
        }
        if (Ot(d) || R(d)) return P !== null ? null : v(f, a, d, w, null);
        br(f, d);
      }
      return null;
    }
    function S(f, a, d, w, P) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(d) || null), o(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case ie:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, P)
            );
          case ge:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, P)
            );
          case Ie:
            var z = w._init;
            return S(f, a, d, z(w._payload), P);
        }
        if (Ot(w) || R(w)) return (f = f.get(d) || null), v(a, f, w, P, null);
        br(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (
        var P = null, z = null, T = a, j = (a = 0), Ee = null;
        T !== null && j < d.length;
        j++
      ) {
        T.index > j ? ((Ee = T), (T = null)) : (Ee = T.sibling);
        var Q = h(f, T, d[j], w);
        if (Q === null) {
          T === null && (T = Ee);
          break;
        }
        e && T && Q.alternate === null && n(f, T),
          (a = u(Q, a, j)),
          z === null ? (P = Q) : (z.sibling = Q),
          (z = Q),
          (T = Ee);
      }
      if (j === d.length) return t(f, T), se && bn(f, j), P;
      if (T === null) {
        for (; j < d.length; j++)
          (T = g(f, d[j], w)),
            T !== null &&
              ((a = u(T, a, j)),
              z === null ? (P = T) : (z.sibling = T),
              (z = T));
        return se && bn(f, j), P;
      }
      for (T = r(f, T); j < d.length; j++)
        (Ee = S(T, f, j, d[j], w)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              T.delete(Ee.key === null ? j : Ee.key),
            (a = u(Ee, a, j)),
            z === null ? (P = Ee) : (z.sibling = Ee),
            (z = Ee));
      return (
        e &&
          T.forEach(function (Yn) {
            return n(f, Yn);
          }),
        se && bn(f, j),
        P
      );
    }
    function N(f, a, d, w) {
      var P = R(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var z = (P = null), T = a, j = (a = 0), Ee = null, Q = d.next();
        T !== null && !Q.done;
        j++, Q = d.next()
      ) {
        T.index > j ? ((Ee = T), (T = null)) : (Ee = T.sibling);
        var Yn = h(f, T, Q.value, w);
        if (Yn === null) {
          T === null && (T = Ee);
          break;
        }
        e && T && Yn.alternate === null && n(f, T),
          (a = u(Yn, a, j)),
          z === null ? (P = Yn) : (z.sibling = Yn),
          (z = Yn),
          (T = Ee);
      }
      if (Q.done) return t(f, T), se && bn(f, j), P;
      if (T === null) {
        for (; !Q.done; j++, Q = d.next())
          (Q = g(f, Q.value, w)),
            Q !== null &&
              ((a = u(Q, a, j)),
              z === null ? (P = Q) : (z.sibling = Q),
              (z = Q));
        return se && bn(f, j), P;
      }
      for (T = r(f, T); !Q.done; j++, Q = d.next())
        (Q = S(T, f, j, Q.value, w)),
          Q !== null &&
            (e && Q.alternate !== null && T.delete(Q.key === null ? j : Q.key),
            (a = u(Q, a, j)),
            z === null ? (P = Q) : (z.sibling = Q),
            (z = Q));
      return (
        e &&
          T.forEach(function (jf) {
            return n(f, jf);
          }),
        se && bn(f, j),
        P
      );
    }
    function he(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === De &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case ie:
            e: {
              for (var P = d.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (((P = d.type), P === De)) {
                    if (z.tag === 7) {
                      t(f, z.sibling),
                        (a = l(z, d.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    z.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === Ie &&
                      rs(P) === z.type)
                  ) {
                    t(f, z.sibling),
                      (a = l(z, d.props)),
                      (a.ref = ur(f, z, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  t(f, z);
                  break;
                } else n(f, z);
                z = z.sibling;
              }
              d.type === De
                ? ((a = ot(d.props.children, f.mode, w, d.key)),
                  (a.return = f),
                  (f = a))
                : ((w = El(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = ur(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case ge:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    t(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    t(f, a);
                    break;
                  }
                else n(f, a);
                a = a.sibling;
              }
              (a = ki(d, f.mode, w)), (a.return = f), (f = a);
            }
            return i(f);
          case Ie:
            return (z = d._init), he(f, a, z(d._payload), w);
        }
        if (Ot(d)) return C(f, a, d, w);
        if (R(d)) return N(f, a, d, w);
        br(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (t(f, a), (a = wi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : t(f, a);
    }
    return he;
  }
  var _t = ls(!0),
    us = ls(!1),
    el = In(null),
    nl = null,
    Ct = null,
    Tu = null;
  function Lu() {
    Tu = Ct = nl = null;
  }
  function Ru(e) {
    var n = el.current;
    ue(el), (e._currentValue = n);
  }
  function ju(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function Nt(e, n) {
    (nl = e),
      (Tu = Ct = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (Ae = !0), (e.firstContext = null));
  }
  function qe(e) {
    var n = e._currentValue;
    if (Tu !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Ct === null)) {
        if (nl === null) throw Error(m(308));
        (Ct = e), (nl.dependencies = { lanes: 0, firstContext: e });
      } else Ct = Ct.next = e;
    return n;
  }
  var et = null;
  function Mu(e) {
    et === null ? (et = [e]) : et.push(e);
  }
  function is(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), Mu(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      _n(e, r)
    );
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var An = !1;
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function os(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Cn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function $n(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), B & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        _n(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Mu(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      _n(e, t)
    );
  }
  function tl(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Xl(e, t);
    }
  }
  function ss(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        u = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          u === null ? (l = u = i) : (u = u.next = i), (t = t.next);
        } while (t !== null);
        u === null ? (l = u = n) : (u = u.next = n);
      } else l = u = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  function rl(e, n, t, r) {
    var l = e.updateQueue;
    An = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      (s.next = null), i === null ? (u = p) : (i.next = p), (i = s);
      var v = e.alternate;
      v !== null &&
        ((v = v.updateQueue),
        (o = v.lastBaseUpdate),
        o !== i &&
          (o === null ? (v.firstBaseUpdate = p) : (o.next = p),
          (v.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      (i = 0), (v = p = s = null), (o = u);
      do {
        var h = o.lane,
          S = o.eventTime;
        if ((r & h) === h) {
          v !== null &&
            (v = v.next =
              {
                eventTime: S,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var C = e,
              N = o;
            switch (((h = n), (S = t), N.tag)) {
              case 1:
                if (((C = N.payload), typeof C == "function")) {
                  g = C.call(S, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = N.payload),
                  (h = typeof C == "function" ? C.call(S, g, h) : C),
                  h == null)
                )
                  break e;
                g = _({}, g, h);
                break e;
              case 2:
                An = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (h = l.effects),
            h === null ? (l.effects = [o]) : h.push(o));
        } else
          (S = {
            eventTime: S,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            v === null ? ((p = v = S), (s = g)) : (v = v.next = S),
            (i |= h);
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          (h = o),
            (o = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (v === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = v),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (i |= l.lane), (l = l.next);
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      (rt |= i), (e.lanes = i), (e.memoizedState = g);
    }
  }
  function as(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ir = {},
    yn = In(ir),
    or = In(ir),
    sr = In(ir);
  function nt(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Du(e, n) {
    switch ((te(sr, n), te(or, e), te(yn, ir), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Il(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Il(n, e));
    }
    ue(yn), te(yn, n);
  }
  function Pt() {
    ue(yn), ue(or), ue(sr);
  }
  function cs(e) {
    nt(sr.current);
    var n = nt(yn.current),
      t = Il(n, e.type);
    n !== t && (te(or, e), te(yn, t));
  }
  function Iu(e) {
    or.current === e && (ue(yn), ue(or));
  }
  var ae = In(0);
  function ll(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Fu = [];
  function Uu() {
    for (var e = 0; e < Fu.length; e++)
      Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var ul = Z.ReactCurrentDispatcher,
    Au = Z.ReactCurrentBatchConfig,
    tt = 0,
    ce = null,
    we = null,
    Se = null,
    il = !1,
    ar = !1,
    cr = 0,
    ef = 0;
  function Te() {
    throw Error(m(321));
  }
  function $u(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!un(e[t], n[t])) return !1;
    return !0;
  }
  function Vu(e, n, t, r, l, u) {
    if (
      ((tt = u),
      (ce = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (ul.current = e === null || e.memoizedState === null ? lf : uf),
      (e = t(r, l)),
      ar)
    ) {
      u = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= u)) throw Error(m(301));
        (u += 1),
          (Se = we = null),
          (n.updateQueue = null),
          (ul.current = of),
          (e = t(r, l));
      } while (ar);
    }
    if (
      ((ul.current = al),
      (n = we !== null && we.next !== null),
      (tt = 0),
      (Se = we = ce = null),
      (il = !1),
      n)
    )
      throw Error(m(300));
    return e;
  }
  function Bu() {
    var e = cr !== 0;
    return (cr = 0), e;
  }
  function vn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e), Se;
  }
  function be() {
    if (we === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var n = Se === null ? ce.memoizedState : Se.next;
    if (n !== null) (Se = n), (we = e);
    else {
      if (e === null) throw Error(m(310));
      (we = e),
        (e = {
          memoizedState: we.memoizedState,
          baseState: we.baseState,
          baseQueue: we.baseQueue,
          queue: we.queue,
          next: null,
        }),
        Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e);
    }
    return Se;
  }
  function fr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Hu(e) {
    var n = be(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = we,
      l = r.baseQueue,
      u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = u.next), (u.next = i);
      }
      (r.baseQueue = l = u), (t.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var o = (i = null),
        s = null,
        p = u;
      do {
        var v = p.lane;
        if ((tt & v) === v)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var g = {
            lane: v,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((o = s = g), (i = r)) : (s = s.next = g),
            (ce.lanes |= v),
            (rt |= v);
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? (i = r) : (s.next = o),
        un(r, n.memoizedState) || (Ae = !0),
        (n.memoizedState = r),
        (n.baseState = i),
        (n.baseQueue = s),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (ce.lanes |= u), (rt |= u), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Wu(e) {
    var n = be(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = (l = l.next);
      do (u = e(u, i.action)), (i = i.next);
      while (i !== l);
      un(u, n.memoizedState) || (Ae = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (t.lastRenderedState = u);
    }
    return [u, r];
  }
  function fs() {}
  function ds(e, n) {
    var t = ce,
      r = be(),
      l = n(),
      u = !un(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ae = !0)),
      (r = r.queue),
      Qu(hs.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || u || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        dr(9, ms.bind(null, t, r, l, n), void 0, null),
        xe === null)
      )
        throw Error(m(349));
      tt & 30 || ps(t, n, l);
    }
    return l;
  }
  function ps(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = ce.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ce.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function ms(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ys(n) && vs(e);
  }
  function hs(e, n, t) {
    return t(function () {
      ys(n) && vs(e);
    });
  }
  function ys(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !un(e, t);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var n = _n(e, 1);
    n !== null && fn(n, e, 1, -1);
  }
  function gs(e) {
    var n = vn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = rf.bind(null, ce, e)),
      [n.memoizedState, e]
    );
  }
  function dr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = ce.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ce.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function ws() {
    return be().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = vn();
    (ce.flags |= e),
      (l.memoizedState = dr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function sl(e, n, t, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (we !== null) {
      var i = we.memoizedState;
      if (((u = i.destroy), r !== null && $u(r, i.deps))) {
        l.memoizedState = dr(n, t, u, r);
        return;
      }
    }
    (ce.flags |= e), (l.memoizedState = dr(1 | n, t, u, r));
  }
  function ks(e, n) {
    return ol(8390656, 8, e, n);
  }
  function Qu(e, n) {
    return sl(2048, 8, e, n);
  }
  function Ss(e, n) {
    return sl(4, 2, e, n);
  }
  function xs(e, n) {
    return sl(4, 4, e, n);
  }
  function Es(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function _s(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), sl(4, 4, Es.bind(null, n, e), t)
    );
  }
  function Ku() {}
  function Cs(e, n) {
    var t = be();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && $u(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function Ns(e, n) {
    var t = be();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && $u(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function Ps(e, n, t) {
    return tt & 21
      ? (un(t, n) ||
          ((t = to()), (ce.lanes |= t), (rt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = t));
  }
  function nf(e, n) {
    var t = q;
    (q = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Au.transition;
    Au.transition = {};
    try {
      e(!1), n();
    } finally {
      (q = t), (Au.transition = r);
    }
  }
  function zs() {
    return be().memoizedState;
  }
  function tf(e, n, t) {
    var r = Wn(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ts(e))
    )
      Ls(n, t);
    else if (((t = is(e, n, t, r)), t !== null)) {
      var l = Me();
      fn(t, e, r, l), Rs(t, n, r);
    }
  }
  function rf(e, n, t) {
    var r = Wn(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ts(e)) Ls(n, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var i = n.lastRenderedState,
            o = u(i, t);
          if (((l.hasEagerState = !0), (l.eagerState = o), un(o, i))) {
            var s = n.interleaved;
            s === null
              ? ((l.next = l), Mu(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = is(e, n, l, r)),
        t !== null && ((l = Me()), fn(t, e, r, l), Rs(t, n, r));
    }
  }
  function Ts(e) {
    var n = e.alternate;
    return e === ce || (n !== null && n === ce);
  }
  function Ls(e, n) {
    ar = il = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Rs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Xl(e, t);
    }
  }
  var al = {
      readContext: qe,
      useCallback: Te,
      useContext: Te,
      useEffect: Te,
      useImperativeHandle: Te,
      useInsertionEffect: Te,
      useLayoutEffect: Te,
      useMemo: Te,
      useReducer: Te,
      useRef: Te,
      useState: Te,
      useDebugValue: Te,
      useDeferredValue: Te,
      useTransition: Te,
      useMutableSource: Te,
      useSyncExternalStore: Te,
      useId: Te,
      unstable_isNewReconciler: !1,
    },
    lf = {
      readContext: qe,
      useCallback: function (e, n) {
        return (vn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: qe,
      useEffect: ks,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ol(4194308, 4, Es.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return ol(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return ol(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = vn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = vn();
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = tf.bind(null, ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = vn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: gs,
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        return (vn().memoizedState = e);
      },
      useTransition: function () {
        var e = gs(!1),
          n = e[0];
        return (e = nf.bind(null, e[1])), (vn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = ce,
          l = vn();
        if (se) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = n()), xe === null)) throw Error(m(349));
          tt & 30 || ps(r, n, t);
        }
        l.memoizedState = t;
        var u = { value: t, getSnapshot: n };
        return (
          (l.queue = u),
          ks(hs.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          dr(9, ms.bind(null, r, u, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = vn(),
          n = xe.identifierPrefix;
        if (se) {
          var t = En,
            r = xn;
          (t = (r & ~(1 << (32 - ln(r) - 1))).toString(32) + t),
            (n = ":" + n + "R" + t),
            (t = cr++),
            0 < t && (n += "H" + t.toString(32)),
            (n += ":");
        } else (t = ef++), (n = ":" + n + "r" + t.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: qe,
      useCallback: Cs,
      useContext: qe,
      useEffect: Qu,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: xs,
      useMemo: Ns,
      useReducer: Hu,
      useRef: ws,
      useState: function () {
        return Hu(fr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var n = be();
        return Ps(n, we.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(fr)[0],
          n = be().memoizedState;
        return [e, n];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: zs,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: qe,
      useCallback: Cs,
      useContext: qe,
      useEffect: Qu,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: xs,
      useMemo: Ns,
      useReducer: Wu,
      useRef: ws,
      useState: function () {
        return Wu(fr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var n = be();
        return we === null ? (n.memoizedState = e) : Ps(n, we.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(fr)[0],
          n = be().memoizedState;
        return [e, n];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: zs,
      unstable_isNewReconciler: !1,
    };
  function sn(e, n) {
    if (e && e.defaultProps) {
      (n = _({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Yu(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : _({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = Me(),
        l = Wn(e),
        u = Cn(r, l);
      (u.payload = n),
        t != null && (u.callback = t),
        (n = $n(e, u, l)),
        n !== null && (fn(n, e, l, r), tl(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = Me(),
        l = Wn(e),
        u = Cn(r, l);
      (u.tag = 1),
        (u.payload = n),
        t != null && (u.callback = t),
        (n = $n(e, u, l)),
        n !== null && (fn(n, e, l, r), tl(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = Me(),
        r = Wn(e),
        l = Cn(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = $n(e, l, r)),
        n !== null && (fn(n, e, r, t), tl(n, e, r));
    },
  };
  function js(e, n, t, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : n.prototype && n.prototype.isPureReactComponent
        ? !qt(t, r) || !qt(l, u)
        : !0
    );
  }
  function Ms(e, n, t) {
    var r = !1,
      l = Fn,
      u = n.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = qe(u))
        : ((l = Ue(n) ? Jn : ze.current),
          (r = n.contextTypes),
          (u = (r = r != null) ? kt(e, l) : Fn)),
      (n = new n(t, u)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = cl),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      n
    );
  }
  function Os(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && cl.enqueueReplaceState(n, n.state, null);
  }
  function Xu(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Ou(e);
    var u = n.contextType;
    typeof u == "object" && u !== null
      ? (l.context = qe(u))
      : ((u = Ue(n) ? Jn : ze.current), (l.context = kt(e, u))),
      (l.state = e.memoizedState),
      (u = n.getDerivedStateFromProps),
      typeof u == "function" && (Yu(e, n, u, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((n = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && cl.enqueueReplaceState(l, l.state, null),
        rl(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "",
        r = n;
      do (t += H(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Gu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Zu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var sf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ds(e, n, t) {
    (t = Cn(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        vl || ((vl = !0), (fi = r)), Zu(e, n);
      }),
      t
    );
  }
  function Is(e, n, t) {
    (t = Cn(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Zu(e, n);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (t.callback = function () {
          Zu(e, n),
            typeof r != "function" &&
              (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
          var i = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      t
    );
  }
  function Fs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sf();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = xf.bind(null, e, n, t)), n.then(e, e));
  }
  function Us(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function As(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = Cn(-1, 1)), (n.tag = 2), $n(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var af = Z.ReactCurrentOwner,
    Ae = !1;
  function je(e, n, t, r) {
    n.child = e === null ? us(n, null, t, r) : _t(n, e.child, t, r);
  }
  function $s(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return (
      Nt(n, l),
      (r = Vu(e, n, t, r, u, l)),
      (t = Bu()),
      e !== null && !Ae
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Nn(e, n, l))
        : (se && t && _u(n), (n.flags |= 1), je(e, n, r, l), n.child)
    );
  }
  function Vs(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" &&
        !gi(u) &&
        u.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = u), Bs(e, n, u, r, l))
        : ((e = El(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var i = u.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : qt), t(i, r) && e.ref === n.ref)
      )
        return Nn(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Kn(u, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Bs(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (qt(u, r) && e.ref === n.ref)
        if (((Ae = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ae = !0);
        else return (n.lanes = e.lanes), Nn(e, n, l);
    }
    return Ju(e, n, t, r, l);
  }
  function Hs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          te(Lt, Xe),
          (Xe |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            te(Lt, Xe),
            (Xe |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : t),
          te(Lt, Xe),
          (Xe |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
        te(Lt, Xe),
        (Xe |= r);
    return je(e, n, l, t), n.child;
  }
  function Ws(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Ju(e, n, t, r, l) {
    var u = Ue(t) ? Jn : ze.current;
    return (
      (u = kt(n, u)),
      Nt(n, l),
      (t = Vu(e, n, t, r, u, l)),
      (r = Bu()),
      e !== null && !Ae
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Nn(e, n, l))
        : (se && r && _u(n), (n.flags |= 1), je(e, n, t, l), n.child)
    );
  }
  function Qs(e, n, t, r, l) {
    if (Ue(t)) {
      var u = !0;
      Xr(n);
    } else u = !1;
    if ((Nt(n, l), n.stateNode === null))
      dl(e, n), Ms(n, t, r), Xu(n, t, r, l), (r = !0);
    else if (e === null) {
      var i = n.stateNode,
        o = n.memoizedProps;
      i.props = o;
      var s = i.context,
        p = t.contextType;
      typeof p == "object" && p !== null
        ? (p = qe(p))
        : ((p = Ue(t) ? Jn : ze.current), (p = kt(n, p)));
      var v = t.getDerivedStateFromProps,
        g =
          typeof v == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Os(n, i, r, p)),
        (An = !1);
      var h = n.memoizedState;
      (i.state = h),
        rl(n, r, i, l),
        (s = n.memoizedState),
        o !== r || h !== s || Fe.current || An
          ? (typeof v == "function" && (Yu(n, t, v, r), (s = n.memoizedState)),
            (o = An || js(n, t, o, r, h, s, p))
              ? (g ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (i = n.stateNode),
        os(e, n),
        (o = n.memoizedProps),
        (p = n.type === n.elementType ? o : sn(n.type, o)),
        (i.props = p),
        (g = n.pendingProps),
        (h = i.context),
        (s = t.contextType),
        typeof s == "object" && s !== null
          ? (s = qe(s))
          : ((s = Ue(t) ? Jn : ze.current), (s = kt(n, s)));
      var S = t.getDerivedStateFromProps;
      (v =
        typeof S == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && Os(n, i, r, s)),
        (An = !1),
        (h = n.memoizedState),
        (i.state = h),
        rl(n, r, i, l);
      var C = n.memoizedState;
      o !== g || h !== C || Fe.current || An
        ? (typeof S == "function" && (Yu(n, t, S, r), (C = n.memoizedState)),
          (p = An || js(n, t, p, r, h, C, s) || !1)
            ? (v ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, C, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, C, s)),
              typeof i.componentDidUpdate == "function" && (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = C)),
          (i.props = r),
          (i.state = C),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return qu(e, n, t, r, u, l);
  }
  function qu(e, n, t, r, l, u) {
    Ws(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Zo(n, t, !1), Nn(e, n, u);
    (r = n.stateNode), (af.current = n);
    var o =
      i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && i
        ? ((n.child = _t(n, e.child, null, u)), (n.child = _t(n, null, o, u)))
        : je(e, n, o, u),
      (n.memoizedState = r.state),
      l && Zo(n, t, !0),
      n.child
    );
  }
  function Ks(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Xo(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Xo(e, n.context, !1),
      Du(e, n.containerInfo);
  }
  function Ys(e, n, t, r, l) {
    return Et(), zu(l), (n.flags |= 256), je(e, n, t, r), n.child;
  }
  var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, n, t) {
    var r = n.pendingProps,
      l = ae.current,
      u = !1,
      i = (n.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((u = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      te(ae, l & 1),
      e === null)
    )
      return (
        Pu(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = _l(i, r, 0, null)),
                (e = ot(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = ei(t)),
                (n.memoizedState = bu),
                e)
              : ni(n, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return cf(e, n, i, r, o, l, t);
    if (u) {
      (u = r.fallback), (i = n.mode), (l = e.child), (o = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = Kn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Kn(o, u)) : ((u = ot(u, i, t, null)), (u.flags |= 2)),
        (u.return = n),
        (r.return = n),
        (r.sibling = u),
        (n.child = r),
        (r = u),
        (u = n.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? ei(t)
            : {
                baseLanes: i.baseLanes | t,
                cachePool: null,
                transitions: i.transitions,
              }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~t),
        (n.memoizedState = bu),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Kn(u, { mode: "visible", children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function ni(e, n) {
    return (
      (n = _l({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function fl(e, n, t, r) {
    return (
      r !== null && zu(r),
      _t(n, e.child, null, t),
      (e = ni(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function cf(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Gu(Error(m(422)))), fl(e, n, i, r))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((u = r.fallback),
          (l = n.mode),
          (r = _l({ mode: "visible", children: r.children }, l, 0, null)),
          (u = ot(u, l, i, null)),
          (u.flags |= 2),
          (r.return = n),
          (u.return = n),
          (r.sibling = u),
          (n.child = r),
          n.mode & 1 && _t(n, e.child, null, i),
          (n.child.memoizedState = ei(i)),
          (n.memoizedState = bu),
          u);
    if (!(n.mode & 1)) return fl(e, n, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o), (u = Error(m(419))), (r = Gu(u, r, void 0)), fl(e, n, i, r)
      );
    }
    if (((o = (i & e.childLanes) !== 0), Ae || o)) {
      if (((r = xe), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), _n(e, l), fn(r, e, l, -1));
      }
      return vi(), (r = Gu(Error(m(421)))), fl(e, n, i, r);
    }
    return l.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = Ef.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = u.treeContext),
        (Ye = Dn(l.nextSibling)),
        (Ke = n),
        (se = !0),
        (on = null),
        e !== null &&
          ((Ze[Je++] = xn),
          (Ze[Je++] = En),
          (Ze[Je++] = qn),
          (xn = e.id),
          (En = e.overflow),
          (qn = n)),
        (n = ni(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Gs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), ju(e.return, n, t);
  }
  function ti(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = t),
        (u.tailMode = l));
  }
  function Zs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((je(e, n, r.children, t), (r = ae.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Gs(e, t, n);
          else if (e.tag === 19) Gs(e, t, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((te(ae, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && ll(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            ti(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          ti(n, !0, t, null, u);
          break;
        case "together":
          ti(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function dl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Nn(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (rt |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Kn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Kn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function ff(e, n, t) {
    switch (n.tag) {
      case 3:
        Ks(n), Et();
        break;
      case 5:
        cs(n);
        break;
      case 1:
        Ue(n.type) && Xr(n);
        break;
      case 4:
        Du(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        te(el, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (te(ae, ae.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
            ? Xs(e, n, t)
            : (te(ae, ae.current & 1),
              (e = Nn(e, n, t)),
              e !== null ? e.sibling : null);
        te(ae, ae.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Zs(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          te(ae, ae.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Hs(e, n, t);
    }
    return Nn(e, n, t);
  }
  var Js, ri, qs, bs;
  (Js = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }),
    (ri = function () {}),
    (qs = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), nt(yn.current);
        var u = null;
        switch (t) {
          case "input":
            (l = jl(e, l)), (r = jl(e, r)), (u = []);
            break;
          case "select":
            (l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = Dl(e, l)), (r = Dl(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Qr);
        }
        Fl(t, r);
        var i;
        t = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (O.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === "style")
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (t || (t = {}), (t[i] = ""));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    o[i] !== s[i] &&
                    (t || (t = {}), (t[i] = s[i]));
              } else t || (u || (u = []), u.push(p, t)), (t = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (u = u || []).push(p, "" + s)
                : p !== "suppressContentEditableWarning" &&
                  p !== "suppressHydrationWarning" &&
                  (O.hasOwnProperty(p)
                    ? (s != null && p === "onScroll" && le("scroll", e),
                      u || o === s || (u = []))
                    : (u = u || []).push(p, s));
        }
        t && (u = u || []).push("style", t);
        var p = u;
        (n.updateQueue = p) && (n.flags |= 4);
      }
    }),
    (bs = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function pr(e, n) {
    if (!se)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Le(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function df(e, n, t) {
    var r = n.pendingProps;
    switch ((Cu(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Le(n), null;
      case 1:
        return Ue(n.type) && Yr(), Le(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Pt(),
          ue(Fe),
          ue(ze),
          Uu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), on !== null && (mi(on), (on = null)))),
          ri(e, n),
          Le(n),
          null
        );
      case 5:
        Iu(n);
        var l = nt(sr.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          qs(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Le(n), null;
          }
          if (((e = nt(yn.current)), qr(n))) {
            (r = n.stateNode), (t = n.type);
            var u = n.memoizedProps;
            switch (((r[hn] = n), (r[rr] = u), (e = (n.mode & 1) !== 0), t)) {
              case "dialog":
                le("cancel", r), le("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) le(er[l], r);
                break;
              case "source":
                le("error", r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", r), le("load", r);
                break;
              case "details":
                le("toggle", r);
                break;
              case "input":
                ji(r, u), le("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  le("invalid", r);
                break;
              case "textarea":
                Di(r, u), le("invalid", r);
            }
            Fl(t, u), (l = null);
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : O.hasOwnProperty(i) &&
                    o != null &&
                    i === "onScroll" &&
                    le("scroll", r);
              }
            switch (t) {
              case "input":
                Sr(r), Oi(r, u, !0);
                break;
              case "textarea":
                Sr(r), Fi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Qr);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ui(t)),
              e === "http://www.w3.org/1999/xhtml"
                ? t === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = i.createElement(t, { is: r.is }))
                  : ((e = i.createElement(t)),
                    t === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, t)),
              (e[hn] = n),
              (e[rr] = r),
              Js(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((i = Ul(t, r)), t)) {
                case "dialog":
                  le("cancel", e), le("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  le("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) le(er[l], e);
                  l = r;
                  break;
                case "source":
                  le("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  le("error", e), le("load", e), (l = r);
                  break;
                case "details":
                  le("toggle", e), (l = r);
                  break;
                case "input":
                  ji(e, r), (l = jl(e, r)), le("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    le("invalid", e);
                  break;
                case "textarea":
                  Di(e, r), (l = Dl(e, r)), le("invalid", e);
                  break;
                default:
                  l = r;
              }
              Fl(t, l), (o = l);
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Vi(e, s)
                    : u === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Ai(e, s))
                    : u === "children"
                    ? typeof s == "string"
                      ? (t !== "textarea" || s !== "") && Dt(e, s)
                      : typeof s == "number" && Dt(e, "" + s)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (O.hasOwnProperty(u)
                        ? s != null && u === "onScroll" && le("scroll", e)
                        : s != null && V(e, u, s, i));
                }
              switch (t) {
                case "input":
                  Sr(e), Oi(e, r, !1);
                  break;
                case "textarea":
                  Sr(e), Fi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + J(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? st(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        st(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Le(n), null;
      case 6:
        if (e && n.stateNode != null) bs(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (((t = nt(sr.current)), nt(yn.current), qr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[hn] = n),
              (u = r.nodeValue !== t) && ((e = Ke), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[hn] = n),
              (n.stateNode = r);
        }
        return Le(n), null;
      case 13:
        if (
          (ue(ae),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (se && Ye !== null && n.mode & 1 && !(n.flags & 128))
            ts(), Et(), (n.flags |= 98560), (u = !1);
          else if (((u = qr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[hn] = n;
            } else
              Et(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Le(n), (u = !1);
          } else on !== null && (mi(on), (on = null)), (u = !0);
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || ae.current & 1 ? ke === 0 && (ke = 3) : vi())),
            n.updateQueue !== null && (n.flags |= 4),
            Le(n),
            null);
      case 4:
        return (
          Pt(),
          ri(e, n),
          e === null && nr(n.stateNode.containerInfo),
          Le(n),
          null
        );
      case 10:
        return Ru(n.type._context), Le(n), null;
      case 17:
        return Ue(n.type) && Yr(), Le(n), null;
      case 19:
        if ((ue(ae), (u = n.memoizedState), u === null)) return Le(n), null;
        if (((r = (n.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) pr(u, !1);
          else {
            if (ke !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((i = ll(e)), i !== null)) {
                  for (
                    n.flags |= 128,
                      pr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (u = t),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return te(ae, (ae.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              me() > Rt &&
              ((n.flags |= 128), (r = !0), pr(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(i)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                pr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !i.alternate &&
                  !se)
              )
                return Le(n), null;
            } else
              2 * me() - u.renderingStartTime > Rt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), pr(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = n.child), (n.child = i))
            : ((t = u.last),
              t !== null ? (t.sibling = i) : (n.child = i),
              (u.last = i));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = me()),
            (n.sibling = null),
            (t = ae.current),
            te(ae, r ? (t & 1) | 2 : t & 1),
            n)
          : (Le(n), null);
      case 22:
      case 23:
        return (
          yi(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? Xe & 1073741824 &&
              (Le(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Le(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function pf(e, n) {
    switch ((Cu(n), n.tag)) {
      case 1:
        return (
          Ue(n.type) && Yr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Pt(),
          ue(Fe),
          ue(ze),
          Uu(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Iu(n), null;
      case 13:
        if (
          (ue(ae), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return ue(ae), null;
      case 4:
        return Pt(), null;
      case 10:
        return Ru(n.type._context), null;
      case 22:
      case 23:
        return yi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    Re = !1,
    mf = typeof WeakSet == "function" ? WeakSet : Set,
    x = null;
  function Tt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          de(e, n, r);
        }
      else t.current = null;
  }
  function li(e, n, t) {
    try {
      t();
    } catch (r) {
      de(e, n, r);
    }
  }
  var ea = !1;
  function hf(e, n) {
    if (((yu = Mr), (e = jo()), su(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              v = 0,
              g = e,
              h = null;
            n: for (;;) {
              for (
                var S;
                g !== t || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (S = g.firstChild) !== null;

              )
                (h = g), (g = S);
              for (;;) {
                if (g === e) break n;
                if (
                  (h === t && ++p === l && (o = i),
                  h === u && ++v === r && (s = i),
                  (S = g.nextSibling) !== null)
                )
                  break;
                (g = h), (h = g.parentNode);
              }
              g = S;
            }
            t = o === -1 || s === -1 ? null : { start: o, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      vu = { focusedElem: e, selectionRange: t }, Mr = !1, x = n;
      x !== null;

    )
      if (((n = x), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (x = e);
      else
        for (; x !== null; ) {
          n = x;
          try {
            var C = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (C !== null) {
                    var N = C.memoizedProps,
                      he = C.memoizedState,
                      f = n.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? N : sn(n.type, N),
                        he
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            de(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (x = e);
            break;
          }
          x = n.return;
        }
    return (C = ea), (ea = !1), C;
  }
  function mr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && li(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next);
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ui(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function na(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), na(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[hn],
          delete n[rr],
          delete n[Su],
          delete n[Zc],
          delete n[Jc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ta(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ra(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ta(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ii(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = Qr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, n, t), e = e.sibling; e !== null; )
        ii(e, n, t), (e = e.sibling);
  }
  function oi(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oi(e, n, t), e = e.sibling; e !== null; )
        oi(e, n, t), (e = e.sibling);
  }
  var _e = null,
    an = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) la(e, n, t), (t = t.sibling);
  }
  function la(e, n, t) {
    if (mn && typeof mn.onCommitFiberUnmount == "function")
      try {
        mn.onCommitFiberUnmount(Pr, t);
      } catch {}
    switch (t.tag) {
      case 5:
        Re || Tt(t, n);
      case 6:
        var r = _e,
          l = an;
        (_e = null),
          Vn(e, n, t),
          (_e = r),
          (an = l),
          _e !== null &&
            (an
              ? ((e = _e),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : _e.removeChild(t.stateNode));
        break;
      case 18:
        _e !== null &&
          (an
            ? ((e = _e),
              (t = t.stateNode),
              e.nodeType === 8
                ? ku(e.parentNode, t)
                : e.nodeType === 1 && ku(e, t),
              Kt(e))
            : ku(_e, t.stateNode));
        break;
      case 4:
        (r = _e),
          (l = an),
          (_e = t.stateNode.containerInfo),
          (an = !0),
          Vn(e, n, t),
          (_e = r),
          (an = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Re &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            (u = u.tag),
              i !== void 0 && (u & 2 || u & 4) && li(t, n, i),
              (l = l.next);
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (
          !Re &&
          (Tt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (o) {
            de(t, n, o);
          }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((Re = (r = Re) || t.memoizedState !== null), Vn(e, n, t), (Re = r))
          : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function ua(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new mf()),
        n.forEach(function (r) {
          var l = _f.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function cn(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e,
            i = n,
            o = i;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                (_e = o.stateNode), (an = !1);
                break e;
              case 3:
                (_e = o.stateNode.containerInfo), (an = !0);
                break e;
              case 4:
                (_e = o.stateNode.containerInfo), (an = !0);
                break e;
            }
            o = o.return;
          }
          if (_e === null) throw Error(m(160));
          la(u, i, l), (_e = null), (an = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          de(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) ia(n, e), (n = n.sibling);
  }
  function ia(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((cn(n, e), gn(e), r & 4)) {
          try {
            mr(3, e, e.return), ml(3, e);
          } catch (N) {
            de(e, e.return, N);
          }
          try {
            mr(5, e, e.return);
          } catch (N) {
            de(e, e.return, N);
          }
        }
        break;
      case 1:
        cn(n, e), gn(e), r & 512 && t !== null && Tt(t, t.return);
        break;
      case 5:
        if (
          (cn(n, e),
          gn(e),
          r & 512 && t !== null && Tt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (N) {
            de(e, e.return, N);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = t !== null ? t.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              o === "input" && u.type === "radio" && u.name != null && Mi(l, u),
                Ul(o, i);
              var p = Ul(o, u);
              for (i = 0; i < s.length; i += 2) {
                var v = s[i],
                  g = s[i + 1];
                v === "style"
                  ? Vi(l, g)
                  : v === "dangerouslySetInnerHTML"
                  ? Ai(l, g)
                  : v === "children"
                  ? Dt(l, g)
                  : V(l, v, g, p);
              }
              switch (o) {
                case "input":
                  Ml(l, u);
                  break;
                case "textarea":
                  Ii(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var S = u.value;
                  S != null
                    ? st(l, !!u.multiple, S, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? st(l, !!u.multiple, u.defaultValue, !0)
                        : st(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[rr] = u;
            } catch (N) {
              de(e, e.return, N);
            }
        }
        break;
      case 6:
        if ((cn(n, e), gn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (N) {
            de(e, e.return, N);
          }
        }
        break;
      case 3:
        if (
          (cn(n, e), gn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Kt(n.containerInfo);
          } catch (N) {
            de(e, e.return, N);
          }
        break;
      case 4:
        cn(n, e), gn(e);
        break;
      case 13:
        cn(n, e),
          gn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ci = me())),
          r & 4 && ua(e);
        break;
      case 22:
        if (
          ((v = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((Re = (p = Re) || v), cn(n, e), (Re = p)) : cn(n, e),
          gn(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !v && e.mode & 1)
          )
            for (x = e, v = e.child; v !== null; ) {
              for (g = x = v; x !== null; ) {
                switch (((h = x), (S = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, h, h.return);
                    break;
                  case 1:
                    Tt(h, h.return);
                    var C = h.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      (r = h), (t = h.return);
                      try {
                        (n = r),
                          (C.props = n.memoizedProps),
                          (C.state = n.memoizedState),
                          C.componentWillUnmount();
                      } catch (N) {
                        de(r, t, N);
                      }
                    }
                    break;
                  case 5:
                    Tt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      aa(g);
                      continue;
                    }
                }
                S !== null ? ((S.return = h), (x = S)) : aa(g);
              }
              v = v.sibling;
            }
          e: for (v = null, g = e; ; ) {
            if (g.tag === 5) {
              if (v === null) {
                v = g;
                try {
                  (l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (o.style.display = $i("display", i)));
                } catch (N) {
                  de(e, e.return, N);
                }
              }
            } else if (g.tag === 6) {
              if (v === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (N) {
                  de(e, e.return, N);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              (g.child.return = g), (g = g.child);
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              v === g && (v = null), (g = g.return);
            }
            v === g && (v = null),
              (g.sibling.return = g.return),
              (g = g.sibling);
          }
        }
        break;
      case 19:
        cn(n, e), gn(e), r & 4 && ua(e);
        break;
      case 21:
        break;
      default:
        cn(n, e), gn(e);
    }
  }
  function gn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ta(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), (r.flags &= -33));
            var u = ra(e);
            oi(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = ra(e);
            ii(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        de(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function yf(e, n, t) {
    (x = e), oa(e);
  }
  function oa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; x !== null; ) {
      var l = x,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || pl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Re;
          o = pl;
          var p = Re;
          if (((pl = i), (Re = s) && !p))
            for (x = l; x !== null; )
              (i = x),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? ca(l)
                  : s !== null
                  ? ((s.return = i), (x = s))
                  : ca(l);
          for (; u !== null; ) (x = u), oa(u), (u = u.sibling);
          (x = l), (pl = o), (Re = p);
        }
        sa(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (x = u)) : sa(e);
    }
  }
  function sa(e) {
    for (; x !== null; ) {
      var n = x;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Re || ml(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Re)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : sn(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = n.updateQueue;
                u !== null && as(n, u, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  as(n, i, t);
                }
                break;
              case 5:
                var o = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var v = p.memoizedState;
                    if (v !== null) {
                      var g = v.dehydrated;
                      g !== null && Kt(g);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          Re || (n.flags & 512 && ui(n));
        } catch (h) {
          de(n, n.return, h);
        }
      }
      if (n === e) {
        x = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (x = t);
        break;
      }
      x = n.return;
    }
  }
  function aa(e) {
    for (; x !== null; ) {
      var n = x;
      if (n === e) {
        x = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (x = t);
        break;
      }
      x = n.return;
    }
  }
  function ca(e) {
    for (; x !== null; ) {
      var n = x;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              ml(4, n);
            } catch (s) {
              de(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                de(n, l, s);
              }
            }
            var u = n.return;
            try {
              ui(n);
            } catch (s) {
              de(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ui(n);
            } catch (s) {
              de(n, i, s);
            }
        }
      } catch (s) {
        de(n, n.return, s);
      }
      if (n === e) {
        x = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        (o.return = n.return), (x = o);
        break;
      }
      x = n.return;
    }
  }
  var vf = Math.ceil,
    hl = Z.ReactCurrentDispatcher,
    si = Z.ReactCurrentOwner,
    en = Z.ReactCurrentBatchConfig,
    B = 0,
    xe = null,
    ve = null,
    Ce = 0,
    Xe = 0,
    Lt = In(0),
    ke = 0,
    hr = null,
    rt = 0,
    yl = 0,
    ai = 0,
    yr = null,
    $e = null,
    ci = 0,
    Rt = 1 / 0,
    Pn = null,
    vl = !1,
    fi = null,
    Bn = null,
    gl = !1,
    Hn = null,
    wl = 0,
    vr = 0,
    di = null,
    kl = -1,
    Sl = 0;
  function Me() {
    return B & 6 ? me() : kl !== -1 ? kl : (kl = me());
  }
  function Wn(e) {
    return e.mode & 1
      ? B & 2 && Ce !== 0
        ? Ce & -Ce
        : bc.transition !== null
        ? (Sl === 0 && (Sl = to()), Sl)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fo(e.type))),
          e)
      : 1;
  }
  function fn(e, n, t, r) {
    if (50 < vr) throw ((vr = 0), (di = null), Error(m(185)));
    Vt(e, t, r),
      (!(B & 2) || e !== xe) &&
        (e === xe && (!(B & 2) && (yl |= t), ke === 4 && Qn(e, Ce)),
        Ve(e, r),
        t === 1 && B === 0 && !(n.mode & 1) && ((Rt = me() + 500), Gr && Un()));
  }
  function Ve(e, n) {
    var t = e.callbackNode;
    ba(e, n);
    var r = Lr(e, e === xe ? Ce : 0);
    if (r === 0)
      t !== null && bi(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && bi(t), n === 1))
        e.tag === 0 ? qc(da.bind(null, e)) : Jo(da.bind(null, e)),
          Xc(function () {
            !(B & 6) && Un();
          }),
          (t = null);
      else {
        switch (ro(r)) {
          case 1:
            t = Ql;
            break;
          case 4:
            t = eo;
            break;
          case 16:
            t = Nr;
            break;
          case 536870912:
            t = no;
            break;
          default:
            t = Nr;
        }
        t = ka(t, fa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function fa(e, n) {
    if (((kl = -1), (Sl = 0), B & 6)) throw Error(m(327));
    var t = e.callbackNode;
    if (jt() && e.callbackNode !== t) return null;
    var r = Lr(e, e === xe ? Ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = xl(e, r);
    else {
      n = r;
      var l = B;
      B |= 2;
      var u = ma();
      (xe !== e || Ce !== n) && ((Pn = null), (Rt = me() + 500), ut(e, n));
      do
        try {
          kf();
          break;
        } catch (o) {
          pa(e, o);
        }
      while (!0);
      Lu(),
        (hl.current = u),
        (B = l),
        ve !== null ? (n = 0) : ((xe = null), (Ce = 0), (n = ke));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (n = pi(e, l)))),
        n === 1)
      )
        throw ((t = hr), ut(e, 0), Qn(e, r), Ve(e, me()), t);
      if (n === 6) Qn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !gf(l) &&
            ((n = xl(e, r)),
            n === 2 && ((u = Kl(e)), u !== 0 && ((r = u), (n = pi(e, u)))),
            n === 1))
        )
          throw ((t = hr), ut(e, 0), Qn(e, r), Ve(e, me()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            it(e, $e, Pn);
            break;
          case 3:
            if (
              (Qn(e, r),
              (r & 130023424) === r && ((n = ci + 500 - me()), 10 < n))
            ) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Me(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = wu(it.bind(null, e, $e, Pn), n);
              break;
            }
            it(e, $e, Pn);
            break;
          case 4:
            if ((Qn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - ln(r);
              (u = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~u);
            }
            if (
              ((r = l),
              (r = me() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * vf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wu(it.bind(null, e, $e, Pn), r);
              break;
            }
            it(e, $e, Pn);
            break;
          case 5:
            it(e, $e, Pn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ve(e, me()), e.callbackNode === t ? fa.bind(null, e) : null;
  }
  function pi(e, n) {
    var t = yr;
    return (
      e.current.memoizedState.isDehydrated && (ut(e, n).flags |= 256),
      (e = xl(e, n)),
      e !== 2 && ((n = $e), ($e = t), n !== null && mi(n)),
      e
    );
  }
  function mi(e) {
    $e === null ? ($e = e) : $e.push.apply($e, e);
  }
  function gf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!un(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Qn(e, n) {
    for (
      n &= ~ai,
        n &= ~yl,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - ln(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function da(e) {
    if (B & 6) throw Error(m(327));
    jt();
    var n = Lr(e, 0);
    if (!(n & 1)) return Ve(e, me()), null;
    var t = xl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Kl(e);
      r !== 0 && ((n = r), (t = pi(e, r)));
    }
    if (t === 1) throw ((t = hr), ut(e, 0), Qn(e, n), Ve(e, me()), t);
    if (t === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      it(e, $e, Pn),
      Ve(e, me()),
      null
    );
  }
  function hi(e, n) {
    var t = B;
    B |= 1;
    try {
      return e(n);
    } finally {
      (B = t), B === 0 && ((Rt = me() + 500), Gr && Un());
    }
  }
  function lt(e) {
    Hn !== null && Hn.tag === 0 && !(B & 6) && jt();
    var n = B;
    B |= 1;
    var t = en.transition,
      r = q;
    try {
      if (((en.transition = null), (q = 1), e)) return e();
    } finally {
      (q = r), (en.transition = t), (B = n), !(B & 6) && Un();
    }
  }
  function yi() {
    (Xe = Lt.current), ue(Lt);
  }
  function ut(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Yc(t)), ve !== null))
      for (t = ve.return; t !== null; ) {
        var r = t;
        switch ((Cu(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Yr();
            break;
          case 3:
            Pt(), ue(Fe), ue(ze), Uu();
            break;
          case 5:
            Iu(r);
            break;
          case 4:
            Pt();
            break;
          case 13:
            ue(ae);
            break;
          case 19:
            ue(ae);
            break;
          case 10:
            Ru(r.type._context);
            break;
          case 22:
          case 23:
            yi();
        }
        t = t.return;
      }
    if (
      ((xe = e),
      (ve = e = Kn(e.current, null)),
      (Ce = Xe = n),
      (ke = 0),
      (hr = null),
      (ai = yl = rt = 0),
      ($e = yr = null),
      et !== null)
    ) {
      for (n = 0; n < et.length; n++)
        if (((t = et[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            u = t.pending;
          if (u !== null) {
            var i = u.next;
            (u.next = l), (r.next = i);
          }
          t.pending = r;
        }
      et = null;
    }
    return e;
  }
  function pa(e, n) {
    do {
      var t = ve;
      try {
        if ((Lu(), (ul.current = al), il)) {
          for (var r = ce.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          il = !1;
        }
        if (
          ((tt = 0),
          (Se = we = ce = null),
          (ar = !1),
          (cr = 0),
          (si.current = null),
          t === null || t.return === null)
        ) {
          (ke = 1), (hr = n), (ve = null);
          break;
        }
        e: {
          var u = e,
            i = t.return,
            o = t,
            s = n;
          if (
            ((n = Ce),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              v = o,
              g = v.tag;
            if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = v.alternate;
              h
                ? ((v.updateQueue = h.updateQueue),
                  (v.memoizedState = h.memoizedState),
                  (v.lanes = h.lanes))
                : ((v.updateQueue = null), (v.memoizedState = null));
            }
            var S = Us(i);
            if (S !== null) {
              (S.flags &= -257),
                As(S, i, o, u, n),
                S.mode & 1 && Fs(u, p, n),
                (n = S),
                (s = p);
              var C = n.updateQueue;
              if (C === null) {
                var N = new Set();
                N.add(s), (n.updateQueue = N);
              } else C.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Fs(u, p, n), vi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (se && o.mode & 1) {
            var he = Us(i);
            if (he !== null) {
              !(he.flags & 65536) && (he.flags |= 256),
                As(he, i, o, u, n),
                zu(zt(s, o));
              break e;
            }
          }
          (u = s = zt(s, o)),
            ke !== 4 && (ke = 2),
            yr === null ? (yr = [u]) : yr.push(u),
            (u = i);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var f = Ds(u, s, n);
                ss(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Bn === null || !Bn.has(d))))
                ) {
                  (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                  var w = Is(u, o, n);
                  ss(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ya(t);
      } catch (P) {
        (n = P), ve === t && t !== null && (ve = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = hl.current;
    return (hl.current = al), e === null ? al : e;
  }
  function vi() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
      xe === null || (!(rt & 268435455) && !(yl & 268435455)) || Qn(xe, Ce);
  }
  function xl(e, n) {
    var t = B;
    B |= 2;
    var r = ma();
    (xe !== e || Ce !== n) && ((Pn = null), ut(e, n));
    do
      try {
        wf();
        break;
      } catch (l) {
        pa(e, l);
      }
    while (!0);
    if ((Lu(), (B = t), (hl.current = r), ve !== null)) throw Error(m(261));
    return (xe = null), (Ce = 0), ke;
  }
  function wf() {
    for (; ve !== null; ) ha(ve);
  }
  function kf() {
    for (; ve !== null && !Wa(); ) ha(ve);
  }
  function ha(e) {
    var n = wa(e.alternate, e, Xe);
    (e.memoizedProps = e.pendingProps),
      n === null ? ya(e) : (ve = n),
      (si.current = null);
  }
  function ya(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = pf(t, n)), t !== null)) {
          (t.flags &= 32767), (ve = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ke = 6), (ve = null);
          return;
        }
      } else if (((t = df(t, n, Xe)), t !== null)) {
        ve = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        ve = n;
        return;
      }
      ve = n = e;
    } while (n !== null);
    ke === 0 && (ke = 5);
  }
  function it(e, n, t) {
    var r = q,
      l = en.transition;
    try {
      (en.transition = null), (q = 1), Sf(e, n, t, r);
    } finally {
      (en.transition = l), (q = r);
    }
    return null;
  }
  function Sf(e, n, t, r) {
    do jt();
    while (Hn !== null);
    if (B & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = t.lanes | t.childLanes;
    if (
      (ec(e, u),
      e === xe && ((ve = xe = null), (Ce = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        gl ||
        ((gl = !0),
        ka(Nr, function () {
          return jt(), null;
        })),
      (u = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || u)
    ) {
      (u = en.transition), (en.transition = null);
      var i = q;
      q = 1;
      var o = B;
      (B |= 4),
        (si.current = null),
        hf(e, t),
        ia(t, e),
        $c(vu),
        (Mr = !!yu),
        (vu = yu = null),
        (e.current = t),
        yf(t),
        Qa(),
        (B = o),
        (q = i),
        (en.transition = u);
    } else e.current = t;
    if (
      (gl && ((gl = !1), (Hn = e), (wl = l)),
      (u = e.pendingLanes),
      u === 0 && (Bn = null),
      Xa(t.stateNode),
      Ve(e, me()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vl) throw ((vl = !1), (e = fi), (fi = null), e);
    return (
      wl & 1 && e.tag !== 0 && jt(),
      (u = e.pendingLanes),
      u & 1 ? (e === di ? vr++ : ((vr = 0), (di = e))) : (vr = 0),
      Un(),
      null
    );
  }
  function jt() {
    if (Hn !== null) {
      var e = ro(wl),
        n = en.transition,
        t = q;
      try {
        if (((en.transition = null), (q = 16 > e ? 16 : e), Hn === null))
          var r = !1;
        else {
          if (((e = Hn), (Hn = null), (wl = 0), B & 6)) throw Error(m(331));
          var l = B;
          for (B |= 4, x = e.current; x !== null; ) {
            var u = x,
              i = u.child;
            if (x.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (x = p; x !== null; ) {
                    var v = x;
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, v, u);
                    }
                    var g = v.child;
                    if (g !== null) (g.return = v), (x = g);
                    else
                      for (; x !== null; ) {
                        v = x;
                        var h = v.sibling,
                          S = v.return;
                        if ((na(v), v === p)) {
                          x = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = S), (x = h);
                          break;
                        }
                        x = S;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var N = C.child;
                  if (N !== null) {
                    C.child = null;
                    do {
                      var he = N.sibling;
                      (N.sibling = null), (N = he);
                    } while (N !== null);
                  }
                }
                x = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) (i.return = u), (x = i);
            else
              e: for (; x !== null; ) {
                if (((u = x), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  (f.return = u.return), (x = f);
                  break e;
                }
                x = u.return;
              }
          }
          var a = e.current;
          for (x = a; x !== null; ) {
            i = x;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (x = d);
            else
              e: for (i = a; x !== null; ) {
                if (((o = x), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, o);
                    }
                  } catch (P) {
                    de(o, o.return, P);
                  }
                if (o === i) {
                  x = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  (w.return = o.return), (x = w);
                  break e;
                }
                x = o.return;
              }
          }
          if (
            ((B = l), Un(), mn && typeof mn.onPostCommitFiberRoot == "function")
          )
            try {
              mn.onPostCommitFiberRoot(Pr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (q = t), (en.transition = n);
      }
    }
    return !1;
  }
  function va(e, n, t) {
    (n = zt(t, n)),
      (n = Ds(e, n, 1)),
      (e = $n(e, n, 1)),
      (n = Me()),
      e !== null && (Vt(e, 1, n), Ve(e, n));
  }
  function de(e, n, t) {
    if (e.tag === 3) va(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          va(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Bn === null || !Bn.has(r)))
          ) {
            (e = zt(t, e)),
              (e = Is(n, e, 1)),
              (n = $n(n, e, 1)),
              (e = Me()),
              n !== null && (Vt(n, 1, e), Ve(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function xf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = Me()),
      (e.pingedLanes |= e.suspendedLanes & t),
      xe === e &&
        (Ce & t) === t &&
        (ke === 4 || (ke === 3 && (Ce & 130023424) === Ce && 500 > me() - ci)
          ? ut(e, 0)
          : (ai |= t)),
      Ve(e, n);
  }
  function ga(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Tr), (Tr <<= 1), !(Tr & 130023424) && (Tr = 4194304))
        : (n = 1));
    var t = Me();
    (e = _n(e, n)), e !== null && (Vt(e, n, t), Ve(e, t));
  }
  function Ef(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), ga(e, t);
  }
  function _f(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), ga(e, t);
  }
  var wa;
  wa = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Fe.current) Ae = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (Ae = !1), ff(e, n, t);
        Ae = !!(e.flags & 131072);
      }
    else (Ae = !1), se && n.flags & 1048576 && qo(n, Jr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        dl(e, n), (e = n.pendingProps);
        var l = kt(n, ze.current);
        Nt(n, t), (l = Vu(null, n, r, e, l, t));
        var u = Bu();
        return (
          (n.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Ue(r) ? ((u = !0), Xr(n)) : (u = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ou(n),
              (l.updater = cl),
              (n.stateNode = l),
              (l._reactInternals = n),
              Xu(n, r, e, t),
              (n = qu(null, n, r, !0, u, t)))
            : ((n.tag = 0), se && u && _u(n), je(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (dl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = Nf(r)),
            (e = sn(r, e)),
            l)
          ) {
            case 0:
              n = Ju(null, n, r, e, t);
              break e;
            case 1:
              n = Qs(null, n, r, e, t);
              break e;
            case 11:
              n = $s(null, n, r, e, t);
              break e;
            case 14:
              n = Vs(null, n, r, sn(r.type, e), t);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : sn(r, l)),
          Ju(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : sn(r, l)),
          Qs(e, n, r, l, t)
        );
      case 3:
        e: {
          if ((Ks(n), e === null)) throw Error(m(387));
          (r = n.pendingProps),
            (u = n.memoizedState),
            (l = u.element),
            os(e, n),
            rl(n, r, null, t);
          var i = n.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              (l = zt(Error(m(423)), n)), (n = Ys(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = zt(Error(m(424)), n)), (n = Ys(e, n, r, t, l));
              break e;
            } else
              for (
                Ye = Dn(n.stateNode.containerInfo.firstChild),
                  Ke = n,
                  se = !0,
                  on = null,
                  t = us(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((Et(), r === l)) {
              n = Nn(e, n, t);
              break e;
            }
            je(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          cs(n),
          e === null && Pu(n),
          (r = n.type),
          (l = n.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          gu(r, l) ? (i = null) : u !== null && gu(r, u) && (n.flags |= 32),
          Ws(e, n),
          je(e, n, i, t),
          n.child
        );
      case 6:
        return e === null && Pu(n), null;
      case 13:
        return Xs(e, n, t);
      case 4:
        return (
          Du(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = _t(n, null, r, t)) : je(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : sn(r, l)),
          $s(e, n, r, l, t)
        );
      case 7:
        return je(e, n, n.pendingProps, t), n.child;
      case 8:
        return je(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return je(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (u = n.memoizedProps),
            (i = l.value),
            te(el, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (un(u.value, i)) {
              if (u.children === l.children && !Fe.current) {
                n = Nn(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        (s = Cn(-1, t & -t)), (s.tag = 2);
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var v = p.pending;
                          v === null
                            ? (s.next = s)
                            : ((s.next = v.next), (v.next = s)),
                            (p.pending = s);
                        }
                      }
                      (u.lanes |= t),
                        (s = u.alternate),
                        s !== null && (s.lanes |= t),
                        ju(u.return, t, n),
                        (o.lanes |= t);
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  (i.lanes |= t),
                    (o = i.alternate),
                    o !== null && (o.lanes |= t),
                    ju(i, t, n),
                    (i = u.sibling);
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      (u.return = i.return), (i = u);
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          je(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          Nt(n, t),
          (l = qe(l)),
          (r = r(l)),
          (n.flags |= 1),
          je(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = sn(r, n.pendingProps)),
          (l = sn(r.type, l)),
          Vs(e, n, r, l, t)
        );
      case 15:
        return Bs(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : sn(r, l)),
          dl(e, n),
          (n.tag = 1),
          Ue(r) ? ((e = !0), Xr(n)) : (e = !1),
          Nt(n, t),
          Ms(n, r, l),
          Xu(n, r, l, t),
          qu(null, n, r, !0, e, t)
        );
      case 19:
        return Zs(e, n, t);
      case 22:
        return Hs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ka(e, n) {
    return qi(e, n);
  }
  function Cf(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function nn(e, n, t, r) {
    return new Cf(e, n, t, r);
  }
  function gi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Nf(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === dn)) return 11;
      if (e === pn) return 14;
    }
    return 2;
  }
  function Kn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = nn(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    );
  }
  function El(e, n, t, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case De:
          return ot(t.children, l, u, n);
        case Ge:
          (i = 8), (l |= 8);
          break;
        case zn:
          return (
            (e = nn(12, t, n, l | 2)), (e.elementType = zn), (e.lanes = u), e
          );
        case He:
          return (e = nn(13, t, n, l)), (e.elementType = He), (e.lanes = u), e;
        case rn:
          return (e = nn(19, t, n, l)), (e.elementType = rn), (e.lanes = u), e;
        case fe:
          return _l(t, l, u, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wn:
                i = 10;
                break e;
              case Xn:
                i = 9;
                break e;
              case dn:
                i = 11;
                break e;
              case pn:
                i = 14;
                break e;
              case Ie:
                (i = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = nn(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
    );
  }
  function ot(e, n, t, r) {
    return (e = nn(7, e, r, n)), (e.lanes = t), e;
  }
  function _l(e, n, t, r) {
    return (
      (e = nn(22, e, r, n)),
      (e.elementType = fe),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wi(e, n, t) {
    return (e = nn(6, e, null, n)), (e.lanes = t), e;
  }
  function ki(e, n, t) {
    return (
      (n = nn(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function Pf(e, n, t, r, l) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Si(e, n, t, r, l, u, i, o, s) {
    return (
      (e = new Pf(e, n, t, o, s)),
      n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
      (u = nn(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ou(u),
      e
    );
  }
  function zf(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ge,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function Sa(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Gn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Ue(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Ue(t)) return Go(e, t, n);
    }
    return n;
  }
  function xa(e, n, t, r, l, u, i, o, s) {
    return (
      (e = Si(t, r, !0, e, l, u, i, o, s)),
      (e.context = Sa(null)),
      (t = e.current),
      (r = Me()),
      (l = Wn(t)),
      (u = Cn(r, l)),
      (u.callback = n ?? null),
      $n(t, u, l),
      (e.current.lanes = l),
      Vt(e, l, r),
      Ve(e, r),
      e
    );
  }
  function Cl(e, n, t, r) {
    var l = n.current,
      u = Me(),
      i = Wn(l);
    return (
      (t = Sa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = Cn(u, i)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = $n(l, n, i)),
      e !== null && (fn(e, l, i, u), tl(e, l, i)),
      i
    );
  }
  function Nl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ea(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function xi(e, n) {
    Ea(e, n), (e = e.alternate) && Ea(e, n);
  }
  var _a =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ei(e) {
    this._internalRoot = e;
  }
  (Pl.prototype.render = Ei.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(m(409));
      Cl(e, n, null, null);
    }),
    (Pl.prototype.unmount = Ei.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          lt(function () {
            Cl(null, e, null, null);
          }),
            (n[kn] = null);
        }
      });
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = io();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < jn.length && n !== 0 && n < jn[t].priority; t++);
      jn.splice(t, 0, e), t === 0 && ao(e);
    }
  };
  function _i(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ca() {}
  function Tf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = Nl(i);
          u.call(p);
        };
      }
      var i = xa(n, r, e, 0, null, !1, !1, "", Ca);
      return (
        (e._reactRootContainer = i),
        (e[kn] = i.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        lt(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = Nl(s);
        o.call(p);
      };
    }
    var s = Si(e, 0, !1, null, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[kn] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      lt(function () {
        Cl(n, s, t, r);
      }),
      s
    );
  }
  function Tl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = Nl(i);
          o.call(s);
        };
      }
      Cl(n, i, e, l);
    } else i = Tf(t, n, e, l, r);
    return Nl(i);
  }
  (lo = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = $t(n.pendingLanes);
          t !== 0 &&
            (Xl(n, t | 1), Ve(n, me()), !(B & 6) && ((Rt = me() + 500), Un()));
        }
        break;
      case 13:
        lt(function () {
          var r = _n(e, 1);
          if (r !== null) {
            var l = Me();
            fn(r, e, 1, l);
          }
        }),
          xi(e, 1);
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var n = _n(e, 134217728);
        if (n !== null) {
          var t = Me();
          fn(n, e, 134217728, t);
        }
        xi(e, 134217728);
      }
    }),
    (uo = function (e) {
      if (e.tag === 13) {
        var n = Wn(e),
          t = _n(e, n);
        if (t !== null) {
          var r = Me();
          fn(t, e, n, r);
        }
        xi(e, n);
      }
    }),
    (io = function () {
      return q;
    }),
    (oo = function (e, n) {
      var t = q;
      try {
        return (q = e), n();
      } finally {
        q = t;
      }
    }),
    (Vl = function (e, n, t) {
      switch (n) {
        case "input":
          if ((Ml(e, t), (n = t.name), t.type === "radio" && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = Kr(r);
                if (!l) throw Error(m(90));
                Ri(r), Ml(r, l);
              }
            }
          }
          break;
        case "textarea":
          Ii(e, t);
          break;
        case "select":
          (n = t.value), n != null && st(e, !!t.multiple, n, !1);
      }
    }),
    (Qi = hi),
    (Ki = lt);
  var Lf = { usingClientEntryPoint: !1, Events: [lr, gt, Kr, Hi, Wi, hi] },
    gr = {
      findFiberByHostInstance: Zn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Rf = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Zi(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: gr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        (Pr = Ll.inject(Rf)), (mn = Ll);
      } catch {}
  }
  return (
    (Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lf),
    (Be.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_i(n)) throw Error(m(200));
      return zf(e, n, null, t);
    }),
    (Be.createRoot = function (e, n) {
      if (!_i(e)) throw Error(m(299));
      var t = !1,
        r = "",
        l = _a;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = Si(e, 1, !1, null, null, t, !1, r, l)),
        (e[kn] = n.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new Ei(n)
      );
    }),
    (Be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = Zi(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (Be.flushSync = function (e) {
      return lt(e);
    }),
    (Be.hydrate = function (e, n, t) {
      if (!zl(n)) throw Error(m(200));
      return Tl(null, e, n, !0, t);
    }),
    (Be.hydrateRoot = function (e, n, t) {
      if (!_i(e)) throw Error(m(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        u = "",
        i = _a;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = xa(n, null, e, 1, t ?? null, l, !1, u, i)),
        (e[kn] = n.current),
        nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new Pl(n);
    }),
    (Be.render = function (e, n, t) {
      if (!zl(n)) throw Error(m(200));
      return Tl(null, e, n, !1, t);
    }),
    (Be.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (lt(function () {
            Tl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[kn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Be.unstable_batchedUpdates = hi),
    (Be.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!zl(t)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Tl(e, n, t, !1, r);
    }),
    (Be.version = "18.3.1-next-f1338f8080-20240426"),
    Be
  );
}
var Ma;
function Af() {
  if (Ma) return Pi.exports;
  Ma = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (L) {
        console.error(L);
      }
  }
  return E(), (Pi.exports = Uf()), Pi.exports;
}
var Oa;
function $f() {
  if (Oa) return Rl;
  Oa = 1;
  var E = Af();
  return (Rl.createRoot = E.createRoot), (Rl.hydrateRoot = E.hydrateRoot), Rl;
}
var Vf = $f();
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = (E) => E.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ia = (...E) =>
    E.filter((L, m, K) => !!L && L.trim() !== "" && K.indexOf(L) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = Ne.forwardRef(
  (
    {
      color: E = "currentColor",
      size: L = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: K,
      className: O = "",
      children: D,
      iconNode: X,
      ...G
    },
    $
  ) =>
    Ne.createElement(
      "svg",
      {
        ref: $,
        ...Hf,
        width: L,
        height: L,
        stroke: E,
        strokeWidth: K ? (Number(m) * 24) / Number(L) : m,
        className: Ia("lucide", O),
        ...G,
      },
      [
        ...X.map(([ye, pe]) => Ne.createElement(ye, pe)),
        ...(Array.isArray(D) ? D : [D]),
      ]
    )
);
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mt = (E, L) => {
  const m = Ne.forwardRef(({ className: K, ...O }, D) =>
    Ne.createElement(Wf, {
      ref: D,
      iconNode: L,
      className: Ia(`lucide-${Bf(E)}`, K),
      ...O,
    })
  );
  return (m.displayName = `${E}`), m;
};
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = [
    [
      "rect",
      {
        width: "16",
        height: "10",
        x: "2",
        y: "7",
        rx: "2",
        ry: "2",
        key: "1w10f2",
      },
    ],
    ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ],
  Kf = Mt("Battery", Qf);
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ],
  Xf = Mt("Clock", Yf);
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = [
    [
      "rect",
      { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" },
    ],
    [
      "rect",
      { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" },
    ],
    ["path", { d: "M15 2v2", key: "13l42r" }],
    ["path", { d: "M15 20v2", key: "15mkzm" }],
    ["path", { d: "M2 15h2", key: "1gxd5l" }],
    ["path", { d: "M2 9h2", key: "1bbxkp" }],
    ["path", { d: "M20 15h2", key: "19e6y8" }],
    ["path", { d: "M20 9h2", key: "19tzq7" }],
    ["path", { d: "M9 2v2", key: "165o2o" }],
    ["path", { d: "M9 20v2", key: "i2bqo8" }],
  ],
  Zf = Mt("Cpu", Gf);
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = [
    ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
  ],
  qf = Mt("GitBranch", Jf);
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
  ],
  ed = Mt("Terminal", bf);
/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ],
  td = Mt("Wifi", nd),
  rd = "/api/",
  kr = async ({ url: E, method: L, body: m, headers: K }) => {
    const O = {
      method: L ?? "GET",
      headers: new Headers(K ?? { Accept: "application/json" }),
    };
    L === "POST" &&
      (m instanceof FormData
        ? (O.body = m)
        : (O.headers.append("Content-Type", "application/json"),
          (O.body = JSON.stringify(m)))),
      console.log("Request:", {
        url: E,
        method: L,
        headers: O.headers,
        body: m,
      });
    const D = await fetch(`${rd}${E}`, O);
    if (D.ok)
      return D.headers.get("Content-Type") === "audio/mpeg"
        ? D.blob()
        : D.json();
    const X = await D.text();
    console.error("Response Error:", X);
    let G = "An error occurred.";
    try {
      G = JSON.parse(X).message || G;
    } catch {
      G = X || G;
    }
    throw new Error(G);
  },
  Da = {
    sendMessage: (E, L, m) => {
      const K = new FormData();
      return (
        K.append("text", L),
        K.append("user", "user"),
        m && K.append("file", m),
        kr({ url: `/${E}/message`, method: "POST", body: K })
      );
    },
    getAgents: () => kr({ url: "/agents" }),
    getAgent: (E) => kr({ url: `/agents/${E}` }),
    tts: (E, L) =>
      kr({
        url: `/${E}/tts`,
        method: "POST",
        body: { text: L },
        headers: { Accept: "audio/mpeg", "Transfer-Encoding": "chunked" },
      }),
    whisper: (E, L) => {
      const m = new FormData();
      return (
        m.append("file", L, "recording.wav"),
        kr({ url: `/${E}/whisper`, method: "POST", body: m })
      );
    },
  },
  ld = () => {
    const [E, L] = Ne.useState(""),
      [m, K] = Ne.useState([]),
      [O, D] = Ne.useState(new Date()),
      X = Ne.useRef(null),
      G = Ne.useRef(!1),
      [$, ye] = Ne.useState(!1),
      [pe, re] = Ne.useState(null),
      b = {
        help: `Available Commands:
> aideep
> clear
> dexs
> dext
> ca
> tg
> X

You can type your message directly to chat with AI.`,
        aideep: `
         .-'
     '--./ /     _.---.
     '-,  (__..-'       \\
        \\          .     |
         ',.__.   ,__.--/
           '._/_.'___.-'
                 |
     ▀▄    ▄▀   |   ▄▀▄     ▄▀▄
    ▄▀▀▀▄▄▀▀▀▄  |  ▀   ▀   ▀   ▀
    █▄▄█   █▄▄█ |  AIDEEP TERMINAL
          SECURE SYSTEMS`,
        clear: "CLEAR_COMMAND",
        dexs: "https://dexscreener.com/solana/Y7wCy1xy1cNNEwLjHJi4gWyngiryFaoCBmqaAX88HGs",
        dext: "https://www.dextools.io/app/en/solana/pair-explorer/BgmirZ1ym285UthpfbhBX3VgT2y14wNJ5nmX82bCuF4c",
        ca: "Y7wCy1xy1cNNEwLjHJi4gWyngiryFaoCBmqaAX88HGs",
        tg: "t.me/AIDeepTerminal",
        x: "x.com/AIDeepTerminal"
      };
    Ne.useEffect(() => {
      const A = setInterval(() => {
        D(new Date());
      }, 1e3);
      return () => clearInterval(A);
    }, []),
      Ne.useEffect(() => {
        (async () => {
          try {
            const V = await Da.getAgents();
            V.agents &&
              V.agents.length > 0 &&
              (re(V.agents[0].id), console.log("Agent ID ok:", V.agents[0].id));
          } catch (V) {
            console.error("Agent ID no:", V);
          }
        })();
      }, []);
    const Oe = async (A) => {
        var V;
        if (!pe) return "Agent not processed";
        try {
          const Z = await Da.sendMessage(pe, A),
            ie = typeof Z == "string" ? JSON.parse(Z) : Z;
          return Array.isArray(ie)
            ? ((V = ie[0]) == null ? void 0 : V.text) || "No response received"
            : ie.text || "No response received";
        } catch (Z) {
          return `Error: ${Z.message}`;
        }
      },
      Pe = async (A) => {
        const V = A.trim(),
          Z = V.toLowerCase();
        let ie;
        if (Z === "clear") {
          K([]);
          return;
        }
        ye(!0);
        try {
          b[Z] ? (ie = b[Z]) : V === "" ? (ie = "") : (ie = await Oe(V));
        } catch (ge) {
          ie = `Error: ${ge.message}`;
        }
        ye(!1),
          K((ge) => [
            ...ge,
            { type: "input", content: A },
            { type: "output", content: ie },
          ]);
      },
      ee = (A) => {
        A.preventDefault(), Pe(E), L("");
      };
    Ne.useEffect(() => {
      X.current && (X.current.scrollTop = X.current.scrollHeight);
    }, [m]),
      Ne.useEffect(() => {
        G.current || (Pe("aideep"), Pe("help"), (G.current = !0));
      }, []);
    const Y = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890".split(
        ""
      ),
      tn = () => {
        const A = [];
        for (let V = 0; V < 50; V++) {
          const Z = [];
          for (let ie = 0; ie < 25; ie++)
            Z.push({
              char: Y[Math.floor(Math.random() * Y.length)],
              speed: 1.5 + Math.random() * 2,
              delay: Math.random() * 5,
              x: `${(100 / 50) * V}%`,
              opacity: Math.random() * 0.3 + 0.4,
            });
          A.push(Z);
        }
        return A.flat();
      };
    return M.jsxs("div", {
      className:
        "h-screen bg-black text-green-500 p-8 font-mono relative overflow-hidden flex flex-col items-center justify-center",
      children: [
        M.jsxs("div", {
          className: "absolute top-4 left-4 flex gap-3 z-30",
          children: [
            M.jsx("button", {
              onClick: () =>
                window.open("https://x.com/AIDeepTerminal", "_blank"),
              className:
                "px-4 py-1.5 bg-green-500 text-black rounded text-sm hover:bg-green-400 transition-colors font-bold",
              children: "X/Twitter",
            }),
            M.jsx("button", {
              onClick: () =>
                window.open(
                  "https://dexscreener.com/solana/Y7wCy1xy1cNNEwLjHJi4gWyngiryFaoCBmqaAX88HGs",
                  "_blank"
                ),
              className:
                "px-4 py-1.5 bg-black text-green-500 border border-green-500 rounded text-sm hover:bg-green-500 hover:text-black transition-colors font-bold",
              children: "DexScreener",
            }),
          ],
        }),
        M.jsx("div", {
          className: "fixed inset-0 overflow-hidden pointer-events-none",
          children: tn().map((A, V) =>
            M.jsx(
              "div",
              {
                className: "absolute text-green-500 text-xl animate-fall",
                style: {
                  left: A.x,
                  animationDuration: `${A.speed}s`,
                  animationDelay: `${A.delay}s`,
                  opacity: A.opacity,
                },
                children: A.char,
              },
              V
            )
          ),
        }),
        M.jsxs("div", {
          className:
            "w-[1200px] h-[600px] mx-auto bg-black/90 rounded-lg border border-green-500/30 backdrop-blur-sm shadow-lg shadow-green-500/20 relative z-20",
          children: [
            M.jsxs("div", {
              className:
                "border-b border-green-500/30 p-2 flex items-center justify-between bg-black/80",
              children: [
                M.jsx("div", {
                  className: "flex items-center gap-2",
                  children: M.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      M.jsx("div", {
                        className: "w-3 h-3 rounded-full bg-red-500",
                      }),
                      M.jsx("div", {
                        className: "w-3 h-3 rounded-full bg-yellow-500",
                      }),
                      M.jsx("div", {
                        className: "w-3 h-3 rounded-full bg-green-500",
                      }),
                    ],
                  }),
                }),
                M.jsxs("div", {
                  className: "flex items-center gap-2 text-xs",
                  children: [
                    M.jsx(ed, { size: 12 }),
                    M.jsx("span", { children: "AI-DEEP-TERMINAL" }),
                  ],
                }),
                M.jsx("div", { className: "w-16" }),
              ],
            }),
            M.jsx("div", {
              className: "border-b border-green-500/30 bg-green-900/20 p-1",
              children: M.jsxs("div", {
                className: "flex items-center justify-between text-xs px-2",
                children: [
                  M.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      M.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [M.jsx(Zf, { size: 12 }), " CPU: 87%"],
                      }),
                      M.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [M.jsx(td, { size: 12 }), " NET: 999Mb/s"],
                      }),
                      M.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [M.jsx(Kf, { size: 12 }), " PWR: 95%"],
                      }),
                    ],
                  }),
                  M.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      M.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [M.jsx(qf, { size: 12 }), " ai-connected"],
                      }),
                      M.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [
                          M.jsx(Xf, { size: 12 }),
                          " ",
                          O.toLocaleTimeString(),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            M.jsxs("div", {
              ref: X,
              className:
                "p-4 h-[calc(100%-6rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent",
              children: [
                M.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    m.map((A, V) =>
                      M.jsx(
                        "div",
                        {
                          className: "leading-relaxed",
                          children:
                            A.type === "input"
                              ? M.jsxs("div", {
                                  className: "flex items-center gap-2 text-sm",
                                  children: [
                                    M.jsx("span", {
                                      className: "text-green-400",
                                      children: "[AIDEEP]$",
                                    }),
                                    M.jsx("span", { children: A.content }),
                                  ],
                                })
                              : M.jsx("div", {
                                  className:
                                    "whitespace-pre-wrap pl-4 text-sm opacity-90",
                                  children: A.content,
                                }),
                        },
                        V
                      )
                    ),
                    $ &&
                      M.jsx("div", {
                        className: "pl-4 text-sm opacity-90",
                        children: "Processing...",
                      }),
                  ],
                }),
                M.jsxs("form", {
                  onSubmit: ee,
                  className: "mt-4 flex items-center gap-2",
                  children: [
                    M.jsx("span", {
                      className: "text-green-400 text-sm",
                      children: "[AIDEEP]$",
                    }),
                    M.jsx("input", {
                      type: "text",
                      value: E,
                      onChange: (A) => L(A.target.value),
                      className: "flex-1 bg-transparent outline-none text-sm",
                      autoFocus: !0,
                      disabled: $,
                      placeholder: "Type your message...",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        M.jsx("style", {
          jsx: !0,
          children: `
        @keyframes fall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `,
        }),
      ],
    });
  };
function ud() {
  return M.jsx(ld, {});
}
Vf.createRoot(document.getElementById("root")).render(
  M.jsx(Ne.StrictMode, { children: M.jsx(ud, {}) })
);
