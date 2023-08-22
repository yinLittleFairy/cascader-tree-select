import Vue, { computed, ref, watch, nextTick, defineComponent, onMounted, onUnmounted, reactive } from "vue";
import { Input, Col, Checkbox, Button, Form, FormItem, RadioGroup, Radio, Row } from "element-ui";
(function() {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload"))
    return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
    a(r);
  new MutationObserver((r) => {
    for (const u of r)
      if (u.type === "childList")
        for (const o of u.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(r) {
    const u = {};
    return r.integrity && (u.integrity = r.integrity), r.referrerPolicy && (u.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? u.credentials = "include" : r.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
  }
  function a(r) {
    if (r.ep)
      return;
    r.ep = !0;
    const u = e(r);
    fetch(r.href, u);
  }
})();
const style = "";
Vue.use(Input);
Vue.use(Col);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Row);
const useSelect = (n) => ({
  handleSelectAll: (a, r) => {
    a.forEach((u) => {
      u.onCheckedClick(r);
    });
  },
  handleSelectChange: (a, r) => {
    r.onCheckedClick(a), n && n("clickMenuItem", r);
  }
});
function getInternetExplorerVersion() {
  var n = window.navigator.userAgent, l = n.indexOf("MSIE ");
  if (l > 0)
    return parseInt(n.substring(l + 5, n.indexOf(".", l)), 10);
  var e = n.indexOf("Trident/");
  if (e > 0) {
    var a = n.indexOf("rv:");
    return parseInt(n.substring(a + 3, n.indexOf(".", a)), 10);
  }
  var r = n.indexOf("Edge/");
  return r > 0 ? parseInt(n.substring(r + 5, n.indexOf(".", r)), 10) : -1;
}
var isIE = void 0;
function initCompat() {
  initCompat.init || (initCompat.init = !0, isIE = getInternetExplorerVersion() !== -1);
}
var ResizeObserver$1 = {
  render: function() {
    var l = this, e = l.$createElement, a = l._self._c || e;
    return a("div", { staticClass: "resize-observer", attrs: { tabindex: "-1" } });
  },
  staticRenderFns: [],
  _scopeId: "data-v-b329ee4c",
  name: "resize-observer",
  methods: {
    compareAndNotify: function() {
      (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.$emit("notify"));
    },
    addResizeHandlers: function() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers: function() {
      this._resizeObject && this._resizeObject.onload && (!isIE && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload);
    }
  },
  mounted: function() {
    var l = this;
    initCompat(), this.$nextTick(function() {
      l._w = l.$el.offsetWidth, l._h = l.$el.offsetHeight;
    });
    var e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", isIE && this.$el.appendChild(e), e.data = "about:blank", isIE || this.$el.appendChild(e);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  }
};
function install$1(n) {
  n.component("resize-observer", ResizeObserver$1), n.component("ResizeObserver", ResizeObserver$1);
}
var plugin$2 = {
  // eslint-disable-next-line no-undef
  version: "0.4.5",
  install: install$1
}, GlobalVue$2 = null;
typeof window < "u" ? GlobalVue$2 = window.Vue : typeof global < "u" && (GlobalVue$2 = global.Vue);
GlobalVue$2 && GlobalVue$2.use(plugin$2);
function _typeof(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(l) {
    return typeof l;
  } : _typeof = function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, _typeof(n);
}
function _classCallCheck(n, l) {
  if (!(n instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(n, l) {
  for (var e = 0; e < l.length; e++) {
    var a = l[e];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function _createClass(n, l, e) {
  return l && _defineProperties(n.prototype, l), e && _defineProperties(n, e), n;
}
function _toConsumableArray(n) {
  return _arrayWithoutHoles(n) || _iterableToArray(n) || _nonIterableSpread();
}
function _arrayWithoutHoles(n) {
  if (Array.isArray(n)) {
    for (var l = 0, e = new Array(n.length); l < n.length; l++)
      e[l] = n[l];
    return e;
  }
}
function _iterableToArray(n) {
  if (Symbol.iterator in Object(n) || Object.prototype.toString.call(n) === "[object Arguments]")
    return Array.from(n);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function processOptions(n) {
  var l;
  return typeof n == "function" ? l = {
    callback: n
  } : l = n, l;
}
function throttle(n, l) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, r, u, o = function(f) {
    for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
      p[g - 1] = arguments[g];
    if (u = p, !(a && f === r)) {
      var _ = e.leading;
      typeof _ == "function" && (_ = _(f, r)), (!a || f !== r) && _ && n.apply(void 0, [f].concat(_toConsumableArray(u))), r = f, clearTimeout(a), a = setTimeout(function() {
        n.apply(void 0, [f].concat(_toConsumableArray(u))), a = 0;
      }, l);
    }
  };
  return o._clear = function() {
    clearTimeout(a), a = null;
  }, o;
}
function deepEqual(n, l) {
  if (n === l)
    return !0;
  if (_typeof(n) === "object") {
    for (var e in n)
      if (!deepEqual(n[e], l[e]))
        return !1;
    return !0;
  }
  return !1;
}
var VisibilityState = /* @__PURE__ */ function() {
  function n(l, e, a) {
    _classCallCheck(this, n), this.el = l, this.observer = null, this.frozen = !1, this.createObserver(e, a);
  }
  return _createClass(n, [{
    key: "createObserver",
    value: function(e, a) {
      var r = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = processOptions(e), this.callback = function(d, f) {
          r.options.callback(d, f), d && r.options.once && (r.frozen = !0, r.destroyObserver());
        }, this.callback && this.options.throttle) {
          var u = this.options.throttleOptions || {}, o = u.leading;
          this.callback = throttle(this.callback, this.options.throttle, {
            leading: function(f) {
              return o === "both" || o === "visible" && f || o === "hidden" && !f;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(d) {
          var f = d[0];
          if (d.length > 1) {
            var c = d.find(function(g) {
              return g.isIntersecting;
            });
            c && (f = c);
          }
          if (r.callback) {
            var p = f.isIntersecting && f.intersectionRatio >= r.threshold;
            if (p === r.oldResult)
              return;
            r.oldResult = p, r.callback(p, f);
          }
        }, this.options.intersection), a.context.$nextTick(function() {
          r.observer && r.observer.observe(r.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]), n;
}();
function bind(n, l, e) {
  var a = l.value;
  if (a)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var r = new VisibilityState(n, a, e);
      n._vue_visibilityState = r;
    }
}
function update(n, l, e) {
  var a = l.value, r = l.oldValue;
  if (!deepEqual(a, r)) {
    var u = n._vue_visibilityState;
    if (!a) {
      unbind(n);
      return;
    }
    u ? u.createObserver(a, e) : bind(n, {
      value: a
    }, e);
  }
}
function unbind(n) {
  var l = n._vue_visibilityState;
  l && (l.destroyObserver(), delete n._vue_visibilityState);
}
var ObserveVisibility = {
  bind,
  update,
  unbind
};
function install(n) {
  n.directive("observe-visibility", ObserveVisibility);
}
var plugin$1 = {
  // eslint-disable-next-line no-undef
  version: "0.4.6",
  install
}, GlobalVue$1 = null;
typeof window < "u" ? GlobalVue$1 = window.Vue : typeof global < "u" && (GlobalVue$1 = global.Vue);
GlobalVue$1 && GlobalVue$1.use(plugin$1);
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var scrollparent = { exports: {} };
(function(n) {
  (function(l, e) {
    n.exports ? n.exports = e() : l.Scrollparent = e();
  })(commonjsGlobal, function() {
    function l(a) {
      var r = getComputedStyle(a, null).getPropertyValue("overflow");
      return r.indexOf("scroll") > -1 || r.indexOf("auto") > -1;
    }
    function e(a) {
      if (a instanceof HTMLElement || a instanceof SVGElement) {
        for (var r = a.parentNode; r.parentNode; ) {
          if (l(r))
            return r;
          r = r.parentNode;
        }
        return document.scrollingElement || document.documentElement;
      }
    }
    return e;
  });
})(scrollparent);
var scrollparentExports = scrollparent.exports;
const ScrollParent = /* @__PURE__ */ getDefaultExportFromCjs(scrollparentExports);
var config = {
  itemsLimit: 1e3
};
const props = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (n) => ["vertical", "horizontal"].includes(n)
  },
  listTag: {
    type: String,
    default: "div"
  },
  itemTag: {
    type: String,
    default: "div"
  }
};
function simpleArray() {
  return this.items.length && typeof this.items[0] != "object";
}
let supportsPassive = !1;
if (typeof window < "u") {
  supportsPassive = !1;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassive = !0;
      }
    });
    window.addEventListener("test", null, opts);
  } catch {
  }
}
let uid = 0;
var script$2 = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: ResizeObserver$1
  },
  directives: {
    ObserveVisibility
  },
  props: {
    ...props,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    },
    skipHover: {
      type: Boolean,
      default: !1
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    }
  },
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const n = {
          "-1": {
            accumulator: 0
          }
        }, l = this.items, e = this.sizeField, a = this.minItemSize;
        let r = 1e4, u = 0, o;
        for (let d = 0, f = l.length; d < f; d++)
          o = l[d][e] || a, o < r && (r = o), u += o, n[d] = {
            accumulator: u,
            size: o
          };
        return this.$_computedMinItemSize = r, n;
      }
      return [];
    },
    simpleArray
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  activated() {
    const n = this.$_lastUpdateScrollPosition;
    typeof n == "number" && this.$nextTick(() => {
      this.scrollToPosition(n);
    });
  },
  beforeDestroy() {
    this.removeListeners();
  },
  methods: {
    addView(n, l, e, a, r) {
      const u = {
        item: e,
        position: 0
      }, o = {
        id: uid++,
        index: l,
        used: !0,
        key: a,
        type: r
      };
      return Object.defineProperty(u, "nr", {
        configurable: !1,
        value: o
      }), n.push(u), u;
    },
    unuseView(n, l = !1) {
      const e = this.$_unusedViews, a = n.nr.type;
      let r = e.get(a);
      r || (r = [], e.set(a, r)), r.push(n), l || (n.nr.used = !1, n.position = -9999, this.$_views.delete(n.nr.key));
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(n) {
      this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(() => {
        this.$_scrollDirty = !1;
        const {
          continuous: l
        } = this.updateVisibleItems(!1, !0);
        l || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, 100));
      }));
    },
    handleVisibilityChange(n, l) {
      this.ready && (n || l.boundingClientRect.width !== 0 || l.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(n, l = !1) {
      const e = this.itemSize, a = this.gridItems || 1, r = this.itemSecondarySize || e, u = this.$_computedMinItemSize, o = this.typeField, d = this.simpleArray ? null : this.keyField, f = this.items, c = f.length, p = this.sizes, g = this.$_views, _ = this.$_unusedViews, x = this.pool;
      let m, v, y, C, P;
      if (!c)
        m = v = C = P = y = 0;
      else if (this.$_prerender)
        m = C = 0, v = P = Math.min(this.prerender, f.length), y = null;
      else {
        const T = this.getScroll();
        if (l) {
          let D = T.start - this.$_lastUpdateScrollPosition;
          if (D < 0 && (D = -D), e === null && D < u || D < e)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = T.start;
        const w = this.buffer;
        T.start -= w, T.end += w;
        let j = 0;
        if (this.$refs.before && (j = this.$refs.before.scrollHeight, T.start -= j), this.$refs.after) {
          const D = this.$refs.after.scrollHeight;
          T.end += D;
        }
        if (e === null) {
          let D, B = 0, V = c - 1, F = ~~(c / 2), q;
          do
            q = F, D = p[F].accumulator, D < T.start ? B = F : F < c - 1 && p[F + 1].accumulator > T.start && (V = F), F = ~~((B + V) / 2);
          while (F !== q);
          for (F < 0 && (F = 0), m = F, y = p[c - 1].accumulator, v = F; v < c && p[v].accumulator < T.end; v++)
            ;
          for (v === -1 ? v = f.length - 1 : (v++, v > c && (v = c)), C = m; C < c && j + p[C].accumulator < T.start; C++)
            ;
          for (P = C; P < c && j + p[P].accumulator < T.end; P++)
            ;
        } else {
          m = ~~(T.start / e * a);
          const D = m % a;
          m -= D, v = Math.ceil(T.end / e * a), C = Math.max(0, Math.floor((T.start - j) / e * a)), P = Math.floor((T.end - j) / e * a), m < 0 && (m = 0), v > c && (v = c), C < 0 && (C = 0), P > c && (P = c), y = Math.ceil(c / a) * e;
        }
      }
      v - m > config.itemsLimit && this.itemsLimitError(), this.totalSize = y;
      let $;
      const z = m <= this.$_endIndex && v >= this.$_startIndex;
      if (this.$_continuous !== z) {
        if (z) {
          g.clear(), _.clear();
          for (let T = 0, w = x.length; T < w; T++)
            $ = x[T], this.unuseView($);
        }
        this.$_continuous = z;
      } else if (z)
        for (let T = 0, w = x.length; T < w; T++)
          $ = x[T], $.nr.used && (n && ($.nr.index = f.indexOf($.item)), ($.nr.index === -1 || $.nr.index < m || $.nr.index >= v) && this.unuseView($));
      const I = z ? null : /* @__PURE__ */ new Map();
      let M, S, O, N;
      for (let T = m; T < v; T++) {
        M = f[T];
        const w = d ? M[d] : M;
        if (w == null)
          throw new Error(`Key is ${w} on item (keyField is '${d}')`);
        if ($ = g.get(w), !e && !p[T].size) {
          $ && this.unuseView($);
          continue;
        }
        $ ? ($.nr.used = !0, $.item = M) : (T === f.length - 1 && this.$emit("scroll-end"), T === 0 && this.$emit("scroll-start"), S = M[o], O = _.get(S), z ? O && O.length ? ($ = O.pop(), $.item = M, $.nr.used = !0, $.nr.index = T, $.nr.key = w, $.nr.type = S) : $ = this.addView(x, T, M, w, S) : (N = I.get(S) || 0, (!O || N >= O.length) && ($ = this.addView(x, T, M, w, S), this.unuseView($, !0), O = _.get(S)), $ = O[N], $.item = M, $.nr.used = !0, $.nr.index = T, $.nr.key = w, $.nr.type = S, I.set(S, N + 1), N++), g.set(w, $)), e === null ? ($.position = p[T - 1].accumulator, $.offset = 0) : ($.position = Math.floor(T / a) * e, $.offset = T % a * r);
      }
      return this.$_startIndex = m, this.$_endIndex = v, this.emitUpdate && this.$emit("update", m, v, C, P), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: z
      };
    },
    getListenerTarget() {
      let n = ScrollParent(this.$el);
      return window.document && (n === window.document.documentElement || n === window.document.body) && (n = window), n;
    },
    getScroll() {
      const {
        $el: n,
        direction: l
      } = this, e = l === "vertical";
      let a;
      if (this.pageMode) {
        const r = n.getBoundingClientRect(), u = e ? r.height : r.width;
        let o = -(e ? r.top : r.left), d = e ? window.innerHeight : window.innerWidth;
        o < 0 && (d += o, o = 0), o + d > u && (d = u - o), a = {
          start: o,
          end: o + d
        };
      } else
        e ? a = {
          start: n.scrollTop,
          end: n.scrollTop + n.clientHeight
        } : a = {
          start: n.scrollLeft,
          end: n.scrollLeft + n.clientWidth
        };
      return a;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, supportsPassive ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(n) {
      let l;
      this.itemSize === null ? l = n > 0 ? this.sizes[n - 1].accumulator : 0 : l = Math.floor(n / this.gridItems) * this.itemSize, this.scrollToPosition(l);
    },
    scrollToPosition(n) {
      const l = this.direction === "vertical" ? {
        scroll: "scrollTop",
        start: "top"
      } : {
        scroll: "scrollLeft",
        start: "left"
      };
      let e, a, r;
      if (this.pageMode) {
        const u = ScrollParent(this.$el), o = u.tagName === "HTML" ? 0 : u[l.scroll], d = u.getBoundingClientRect(), c = this.$el.getBoundingClientRect()[l.start] - d[l.start];
        e = u, a = l.scroll, r = n + o + c;
      } else
        e = this.$el, a = l.scroll, r = n;
      e[a] = r;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((n, l) => n.nr.index - l.nr.index);
    }
  }
};
function normalizeComponent$1(n, l, e, a, r, u, o, d, f, c) {
  typeof o != "boolean" && (f = d, d = o, o = !1);
  const p = typeof e == "function" ? e.options : e;
  n && n.render && (p.render = n.render, p.staticRenderFns = n.staticRenderFns, p._compiled = !0, r && (p.functional = !0)), a && (p._scopeId = a);
  let g;
  if (u ? (g = function(_) {
    _ = _ || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), l && l.call(this, f(_)), _ && _._registeredComponents && _._registeredComponents.add(u);
  }, p._ssrRegister = g) : l && (g = o ? function(_) {
    l.call(this, c(_, this.$root.$options.shadowRoot));
  } : function(_) {
    l.call(this, d(_));
  }), g)
    if (p.functional) {
      const _ = p.render;
      p.render = function(m, v) {
        return g.call(v), _(m, v);
      };
    } else {
      const _ = p.beforeCreate;
      p.beforeCreate = _ ? [].concat(_, g) : [g];
    }
  return e;
}
const __vue_script__$2 = script$2;
var __vue_render__$1 = function() {
  var n, l, e = this, a = e.$createElement, r = e._self._c || a;
  return r(
    "div",
    {
      directives: [
        {
          name: "observe-visibility",
          rawName: "v-observe-visibility",
          value: e.handleVisibilityChange,
          expression: "handleVisibilityChange"
        }
      ],
      staticClass: "vue-recycle-scroller",
      class: (n = {
        ready: e.ready,
        "page-mode": e.pageMode
      }, n["direction-" + e.direction] = !0, n),
      on: {
        "&scroll": function(u) {
          return e.handleScroll.apply(null, arguments);
        }
      }
    },
    [
      e.$slots.before ? r(
        "div",
        { ref: "before", staticClass: "vue-recycle-scroller__slot" },
        [e._t("before")],
        2
      ) : e._e(),
      e._v(" "),
      r(
        e.listTag,
        {
          ref: "wrapper",
          tag: "component",
          staticClass: "vue-recycle-scroller__item-wrapper",
          class: e.listClass,
          style: (l = {}, l[e.direction === "vertical" ? "minHeight" : "minWidth"] = e.totalSize + "px", l)
        },
        [
          e._l(e.pool, function(u) {
            return r(
              e.itemTag,
              e._g(
                {
                  key: u.nr.id,
                  tag: "component",
                  staticClass: "vue-recycle-scroller__item-view",
                  class: [
                    e.itemClass,
                    {
                      hover: !e.skipHover && e.hoverKey === u.nr.key
                    }
                  ],
                  style: e.ready ? {
                    transform: "translate" + (e.direction === "vertical" ? "Y" : "X") + "(" + u.position + "px) translate" + (e.direction === "vertical" ? "X" : "Y") + "(" + u.offset + "px)",
                    width: e.gridItems ? (e.direction === "vertical" && e.itemSecondarySize || e.itemSize) + "px" : void 0,
                    height: e.gridItems ? (e.direction === "horizontal" && e.itemSecondarySize || e.itemSize) + "px" : void 0
                  } : null
                },
                e.skipHover ? {} : {
                  mouseenter: function() {
                    e.hoverKey = u.nr.key;
                  },
                  mouseleave: function() {
                    e.hoverKey = null;
                  }
                }
              ),
              [
                e._t("default", null, {
                  item: u.item,
                  index: u.nr.index,
                  active: u.nr.used
                })
              ],
              2
            );
          }),
          e._v(" "),
          e._t("empty")
        ],
        2
      ),
      e._v(" "),
      e.$slots.after ? r(
        "div",
        { ref: "after", staticClass: "vue-recycle-scroller__slot" },
        [e._t("after")],
        2
      ) : e._e(),
      e._v(" "),
      r("ResizeObserver", { on: { notify: e.handleResize } })
    ],
    1
  );
}, __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = !0;
const __vue_inject_styles__$2 = void 0, __vue_scope_id__$2 = void 0, __vue_module_identifier__$2 = void 0, __vue_is_functional_template__$2 = !1, __vue_component__$2 = /* @__PURE__ */ normalizeComponent$1(
  { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
  __vue_inject_styles__$2,
  __vue_script__$2,
  __vue_scope_id__$2,
  __vue_is_functional_template__$2,
  __vue_module_identifier__$2,
  !1,
  void 0,
  void 0,
  void 0
);
var script$1 = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: __vue_component__$2
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((n) => {
      requestAnimationFrame(() => {
        if (Array.isArray(n)) {
          for (const l of n)
            if (l.target) {
              const e = new CustomEvent("resize", {
                detail: {
                  contentRect: l.contentRect
                }
              });
              l.target.dispatchEvent(e);
            }
        }
      });
    })), {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  inheritAttrs: !1,
  props: {
    ...props,
    minItemSize: {
      type: [Number, String],
      required: !0
    }
  },
  data() {
    return {
      vscrollData: {
        active: !0,
        sizes: {},
        validSizes: {},
        keyField: this.keyField,
        simpleArray: !1
      }
    };
  },
  computed: {
    simpleArray,
    itemsWithSize() {
      const n = [], {
        items: l,
        keyField: e,
        simpleArray: a
      } = this, r = this.vscrollData.sizes, u = l.length;
      for (let o = 0; o < u; o++) {
        const d = l[o], f = a ? o : d[e];
        let c = r[f];
        typeof c > "u" && !this.$_undefinedMap[f] && (c = 0), n.push({
          item: d,
          id: f,
          size: c
        });
      }
      return n;
    },
    listeners() {
      const n = {};
      for (const l in this.$listeners)
        l !== "resize" && l !== "visible" && (n[l] = this.$listeners[l]);
      return n;
    }
  },
  watch: {
    items() {
      this.forceUpdate(!1);
    },
    simpleArray: {
      handler(n) {
        this.vscrollData.simpleArray = n;
      },
      immediate: !0
    },
    direction(n) {
      this.forceUpdate(!0);
    },
    itemsWithSize(n, l) {
      const e = this.$el.scrollTop;
      let a = 0, r = 0;
      const u = Math.min(n.length, l.length);
      for (let d = 0; d < u && !(a >= e); d++)
        a += l[d].size || this.minItemSize, r += n[d].size || this.minItemSize;
      const o = r - a;
      o !== 0 && (this.$el.scrollTop += o);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {};
  },
  activated() {
    this.vscrollData.active = !0;
  },
  deactivated() {
    this.vscrollData.active = !1;
  },
  methods: {
    onScrollerResize() {
      this.$refs.scroller && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible() {
      this.$emit("vscroll:update", {
        force: !1
      }), this.$emit("visible");
    },
    forceUpdate(n = !0) {
      (n || this.simpleArray) && (this.vscrollData.validSizes = {}), this.$emit("vscroll:update", {
        force: !0
      });
    },
    scrollToItem(n) {
      const l = this.$refs.scroller;
      l && l.scrollToItem(n);
    },
    getItemSize(n, l = void 0) {
      const e = this.simpleArray ? l ?? this.items.indexOf(n) : n[this.keyField];
      return this.vscrollData.sizes[e] || 0;
    },
    scrollToBottom() {
      if (this.$_scrollingToBottom)
        return;
      this.$_scrollingToBottom = !0;
      const n = this.$el;
      this.$nextTick(() => {
        n.scrollTop = n.scrollHeight + 5e3;
        const l = () => {
          n.scrollTop = n.scrollHeight + 5e3, requestAnimationFrame(() => {
            n.scrollTop = n.scrollHeight + 5e3, this.$_undefinedSizes === 0 ? this.$_scrollingToBottom = !1 : requestAnimationFrame(l);
          });
        };
        requestAnimationFrame(l);
      });
    }
  }
};
const __vue_script__$1 = script$1;
var __vue_render__ = function() {
  var n = this, l = n.$createElement, e = n._self._c || l;
  return e(
    "RecycleScroller",
    n._g(
      n._b(
        {
          ref: "scroller",
          attrs: {
            items: n.itemsWithSize,
            "min-item-size": n.minItemSize,
            direction: n.direction,
            "key-field": "id",
            "list-tag": n.listTag,
            "item-tag": n.itemTag
          },
          on: { resize: n.onScrollerResize, visible: n.onScrollerVisible },
          scopedSlots: n._u(
            [
              {
                key: "default",
                fn: function(a) {
                  var r = a.item, u = a.index, o = a.active;
                  return [
                    n._t("default", null, null, {
                      item: r.item,
                      index: u,
                      active: o,
                      itemWithSize: r
                    })
                  ];
                }
              }
            ],
            null,
            !0
          )
        },
        "RecycleScroller",
        n.$attrs,
        !1
      ),
      n.listeners
    ),
    [
      n._v(" "),
      e("template", { slot: "before" }, [n._t("before")], 2),
      n._v(" "),
      e("template", { slot: "after" }, [n._t("after")], 2),
      n._v(" "),
      e("template", { slot: "empty" }, [n._t("empty")], 2)
    ],
    2
  );
}, __vue_staticRenderFns__ = [];
__vue_render__._withStripped = !0;
const __vue_inject_styles__$1 = void 0, __vue_scope_id__$1 = void 0, __vue_module_identifier__$1 = void 0, __vue_is_functional_template__$1 = !1, __vue_component__$1 = /* @__PURE__ */ normalizeComponent$1(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__$1,
  __vue_script__$1,
  __vue_scope_id__$1,
  __vue_is_functional_template__$1,
  __vue_module_identifier__$1,
  !1,
  void 0,
  void 0,
  void 0
);
var script = {
  name: "DynamicScrollerItem",
  inject: ["vscrollData", "vscrollParent", "vscrollResizeObserver"],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: !0
    },
    watchData: {
      type: Boolean,
      default: !1
    },
    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: !0
    },
    index: {
      type: Number,
      default: void 0
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    id() {
      if (this.vscrollData.simpleArray)
        return this.index;
      if (this.item.hasOwnProperty(this.vscrollData.keyField))
        return this.item[this.vscrollData.keyField];
      throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
    },
    size() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    },
    finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: "updateWatchData",
    id() {
      this.size || this.onDataUpdate();
    },
    finalActive(n) {
      this.size || (n ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? n ? this.observeSize() : this.unobserveSize() : n && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created() {
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      for (const n in this.sizeDependencies)
        this.$watch(() => this.sizeDependencies[n], this.onDataUpdate);
      this.vscrollParent.$on("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$on("vscroll:update-size", this.onVscrollUpdateSize);
    }
  },
  mounted() {
    this.vscrollData.active && (this.updateSize(), this.observeSize());
  },
  beforeDestroy() {
    this.vscrollParent.$off("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$off("vscroll:update-size", this.onVscrollUpdateSize), this.unobserveSize();
  },
  methods: {
    updateSize() {
      this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
    },
    updateWatchData() {
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", () => {
        this.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate({
      force: n
    }) {
      !this.finalActive && n && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || n || !this.size) && this.updateSize();
    },
    onDataUpdate() {
      this.updateSize();
    },
    computeSize(n) {
      this.$nextTick(() => {
        if (this.id === n) {
          const l = this.$el.offsetWidth, e = this.$el.offsetHeight;
          this.applySize(l, e);
        }
        this.$_pendingSizeUpdate = null;
      });
    },
    applySize(n, l) {
      const e = ~~(this.vscrollParent.direction === "vertical" ? l : n);
      e && this.size !== e && (this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.$set(this.vscrollData.sizes, this.id, e), this.$set(this.vscrollData.validSizes, this.id, !0), this.emitResize && this.$emit("resize", this.id));
    },
    observeSize() {
      !this.vscrollResizeObserver || !this.$el.parentNode || (this.vscrollResizeObserver.observe(this.$el.parentNode), this.$el.parentNode.addEventListener("resize", this.onResize));
    },
    unobserveSize() {
      this.vscrollResizeObserver && (this.vscrollResizeObserver.unobserve(this.$el.parentNode), this.$el.parentNode.removeEventListener("resize", this.onResize));
    },
    onResize(n) {
      const {
        width: l,
        height: e
      } = n.detail.contentRect;
      this.applySize(l, e);
    }
  },
  render(n) {
    return n(this.tag, this.$slots.default);
  }
};
const __vue_script__ = script, __vue_inject_styles__ = void 0, __vue_scope_id__ = void 0, __vue_module_identifier__ = void 0, __vue_is_functional_template__ = void 0, __vue_component__ = /* @__PURE__ */ normalizeComponent$1(
  {},
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  !1,
  void 0,
  void 0,
  void 0
);
function registerComponents(n, l) {
  n.component(`${l}recycle-scroller`, __vue_component__$2), n.component(`${l}RecycleScroller`, __vue_component__$2), n.component(`${l}dynamic-scroller`, __vue_component__$1), n.component(`${l}DynamicScroller`, __vue_component__$1), n.component(`${l}dynamic-scroller-item`, __vue_component__), n.component(`${l}DynamicScrollerItem`, __vue_component__);
}
const plugin = {
  // eslint-disable-next-line no-undef
  version: "1.1.2",
  install(n, l) {
    const e = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, l);
    for (const a in e)
      typeof e[a] < "u" && (config[a] = e[a]);
    e.installComponents && registerComponents(n, e.componentsPrefix);
  }
};
let GlobalVue = null;
typeof window < "u" ? GlobalVue = window.Vue : typeof global < "u" && (GlobalVue = global.Vue);
GlobalVue && GlobalVue.use(plugin);
const vueVirtualScroller = "";
function normalizeComponent(n, l, e, a, r, u, o, d) {
  var f = typeof n == "function" ? n.options : n;
  l && (f.render = l, f.staticRenderFns = e, f._compiled = !0), a && (f.functional = !0), u && (f._scopeId = "data-v-" + u);
  var c;
  if (o ? (c = function(_) {
    _ = _ || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), r && r.call(this, _), _ && _._registeredComponents && _._registeredComponents.add(o);
  }, f._ssrRegister = c) : r && (c = d ? function() {
    r.call(
      this,
      (f.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), c)
    if (f.functional) {
      f._injectStyles = c;
      var p = f.render;
      f.render = function(x, m) {
        return c.call(m), p(x, m);
      };
    } else {
      var g = f.beforeCreate;
      f.beforeCreate = g ? [].concat(g, c) : [c];
    }
  return {
    exports: n,
    options: f
  };
}
const _sfc_main$5 = {
  __name: "cascader-panel",
  props: {
    isResultPanel: {
      type: Boolean,
      default: !1
    },
    showResultSearch: {
      type: Boolean,
      default: !0
    },
    showResultCount: {
      // 展示已选数量
      type: Boolean,
      default: !0
    },
    curPanelLevel: {
      type: Number,
      default: 0
    },
    cascaderMaxLevel: {
      type: Number,
      default: 2
    },
    panelMenuTitle: {
      // 当前面板标题
      type: String,
      default: ""
    },
    emptyText: {
      // 当前面板无数据时展示的文本
      type: String,
      default: "暂无数据"
    },
    panelOptions: {
      // 当前面板展示的条目
      type: Array,
      default: () => []
    },
    multiple: {
      // 当前面板是否支持多选
      type: Boolean,
      default: !0
    },
    supportSelectAll: {
      // 当前面板是否支持全选
      type: Boolean,
      default: !0
    },
    panelActiveList: {
      type: Array,
      default: () => []
    },
    globalSearchWord: {
      type: String,
      default: ""
    },
    colorDangerField: {
      type: String,
      default: ""
    }
  },
  emits: ["clickMenuItem", "removeSelectedCate"],
  setup(n, { emit: l }) {
    const e = n, a = computed(() => {
      var g;
      const c = u.value.length, p = (g = u.value.filter((_) => _.checked)) == null ? void 0 : g.length;
      return {
        indeterminate: !!p && p !== c,
        checked: !!p && p === c
      };
    }), r = ref(""), u = computed(() => {
      var c;
      return (c = e.panelOptions) == null ? void 0 : c.filter((p) => !r.value || p.label.includes(r.value));
    }), { handleSelectAll: o, handleSelectChange: d } = useSelect(l);
    return { __sfc: !0, emit: l, props: e, panelStatus: a, resultSearchKey: r, panelShowOptions: u, handleSelectAll: o, handleSelectChange: d, highLightLabel: (c) => {
      let p = e.isResultPanel ? r.value : e.globalSearchWord;
      return p ? c.split(p).join(`<span style="color: #266BF6">${p}</span>`) : c;
    }, RecycleScroller: __vue_component__$2 };
  }
};
var _sfc_render$5 = function() {
  var l = this, e = l._self._c, a = l._self._setupProxy;
  return e("div", { staticClass: "cascader-panel", style: { width: `calc(100% / ${a.props.cascaderMaxLevel})` } }, [e("div", { staticClass: "cascader-panel__head" }, [l.supportSelectAll ? e("div", [e("el-checkbox", { attrs: { value: a.panelStatus.checked, indeterminate: a.panelStatus.indeterminate, disabled: !a.panelShowOptions.length }, on: { change: (r) => a.handleSelectAll(a.props.panelOptions, r) } }), l._v(" 全选 ")], 1) : l._e(), l.panelMenuTitle ? e("label", [l._v(l._s(a.props.panelMenuTitle))]) : l._e(), l.isResultPanel && l.showResultSearch ? e("el-input", { staticStyle: { width: "160px" }, attrs: { placeholder: "请输入", size: "small", clearable: "", "suffix-icon": "el-icon-search" }, model: { value: a.resultSearchKey, callback: function(r) {
    a.resultSearchKey = typeof r == "string" ? r.trim() : r;
  }, expression: "resultSearchKey" } }) : l._e()], 1), e("div", { staticClass: "cascader-panel__menu" }, [l.isResultPanel && l.showResultCount ? e("div", { staticClass: "cascader-panel__menu__operate" }, [e("span", [l._v("已添加(" + l._s(l.panelOptions.length) + "条)")]), e("el-button", { attrs: { type: "text", disabled: !a.panelStatus.checked && !a.panelStatus.indeterminate }, on: { click: function(r) {
    return a.emit("removeSelectedCate");
  } } }, [l._v("移除")])], 1) : l._e(), a.panelShowOptions.length ? e("div", [e(a.RecycleScroller, { style: { height: l.isResultPanel && l.showResultSearch ? "289px" : "325px" }, attrs: { items: a.panelShowOptions, "item-size": 32, "key-field": "value", buffer: 100 }, scopedSlots: l._u([{ key: "default", fn: function({ item: r, index: u }) {
    return [e("div", { staticClass: "cascader-panel__menu__item" }, [e("el-checkbox", { attrs: { value: r.checked, indeterminate: r.indeterminate, disabled: r.disabled }, on: { change: (o) => a.handleSelectChange(o, r) } }), e("div", { staticClass: "menu-item", class: { "menu-item__danger": a.props.colorDangerField && r[a.props.colorDangerField], "menu-item__active": l.panelActiveList[a.props.curPanelLevel] && r.value === l.panelActiveList[a.props.curPanelLevel].value }, attrs: { title: r.label }, domProps: { innerHTML: l._s(a.highLightLabel(r.label)) }, on: { click: function(o) {
      return a.emit("clickMenuItem", r);
    } } })], 1)];
  } }], null, !1, 742864597) })], 1) : e("div", { staticClass: "cascader-panel__menu__empty" }, [l._v(l._s(a.props.emptyText))])])]);
}, _sfc_staticRenderFns$5 = [], __component__$5 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  !1,
  null,
  null,
  null,
  null
);
const CascaderPanel = __component__$5.exports, cascaderSelect_vue_vue_type_style_index_0_scoped_0937b566_lang = "", _sfc_main$4 = {
  __name: "cascader-select",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    cascaderMaxLevel: {
      type: Number,
      default: 3
    },
    globalSearchWord: {
      type: String,
      default: ""
    },
    panelTitleList: {
      type: Array,
      default: () => []
    }
  },
  setup(n, { expose: l }) {
    const e = n, a = ref([]), r = (o) => {
      var f, c, p;
      if (o === 0)
        return (f = e.options) == null ? void 0 : f.filter((g) => g.menuNodeShow);
      let d = (c = a.value) == null ? void 0 : c[o - 1];
      return ((p = d == null ? void 0 : d.children) == null ? void 0 : p.filter((g) => g.menuNodeShow)) || [];
    }, u = (o) => {
      var p;
      const d = (o == null ? void 0 : o.level) || 0, f = (p = a.value) == null ? void 0 : p.slice(0, d);
      f.push(o);
      let c = o;
      for (; c && c.children; ) {
        const g = c == null ? void 0 : c.getVisibleChild();
        c = (g == null ? void 0 : g.find((_) => _.checked || _.indeterminate)) || (g == null ? void 0 : g[0]), f.push(c);
      }
      a.value = f;
    };
    return watch(() => e.options, (o) => {
      (!Array.isArray(o) || !o.length) && (a.value = []);
      let d = o == null ? void 0 : o.find((f) => f.checked || f.indeterminate);
      u(d || (o == null ? void 0 : o[0]));
    }), l({ convertActive: u }), { __sfc: !0, props: e, panelActiveNode: a, getPanelOptions: r, convertActive: u, CascaderPanel };
  }
};
var _sfc_render$4 = function() {
  var l = this, e = l._self._c, a = l._self._setupProxy;
  return e("div", { staticClass: "cascader-select" }, l._l(a.props.cascaderMaxLevel + 1, function(r) {
    return e(a.CascaderPanel, { key: r, attrs: { "cur-panel-level": r - 1, "cascader-max-level": a.props.cascaderMaxLevel, "panel-options": a.getPanelOptions(r - 1), "panel-menu-title": l.panelTitleList[r - 1], "panel-active-list": a.panelActiveNode, "global-search-word": l.globalSearchWord }, on: { clickMenuItem: a.convertActive } });
  }), 1);
}, _sfc_staticRenderFns$4 = [], __component__$4 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  !1,
  null,
  "0937b566",
  null,
  null
);
const CascaderSelect = __component__$4.exports, cascaderResult_vue_vue_type_style_index_0_scoped_b2705c62_lang = "", _sfc_main$3 = {
  __name: "cascader-result",
  props: {
    resultOptions: {
      type: Array,
      default: () => []
    },
    showResultSearch: {
      type: Boolean,
      default: !0
    },
    showResultCount: {
      type: Boolean,
      default: !0
    }
  },
  setup(n) {
    return { __sfc: !0, props: n, CascaderPanel };
  }
};
var _sfc_render$3 = function() {
  var l = this, e = l._self._c, a = l._self._setupProxy;
  return e("div", { staticClass: "cascader-result" }, [e(a.CascaderPanel, l._g({ attrs: { "is-result-panel": "", cascaderMaxLevel: 1, "show-result-search": a.props.showResultSearch, "show-rsult-count": a.props.showResultCount, "panel-options": a.props.resultOptions, "cur-panel-level": 0 } }, l.$listeners))], 1);
}, _sfc_staticRenderFns$3 = [], __component__$3 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  !1,
  null,
  "b2705c62",
  null,
  null
);
const CascaderResult = __component__$3.exports;
var jsShortid = { exports: {} };
(function(n) {
  (function(l, e) {
    if (n.exports)
      n.exports = e();
    else {
      var a = l.shortid, r = e();
      r.noConflict = function() {
        return l.shortid = a, r;
      }, l.shortid = r;
    }
  })(commonjsGlobal, function() {
    var l = 14603328e5, e = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ], a = 62, r = function(o, d) {
      return (o + d).slice(-o.length);
    }, u = function(o) {
      this._opt = o || {};
    };
    return u.prototype = {
      _toBase: function(o, d) {
        var f = this._opt, c = f.symbols || e, p = "";
        if (d > c.length || d <= 1)
          return !1;
        for (; o >= 1; )
          p = c[o - d * Math.floor(o / d)] + p, o = Math.floor(o / d);
        return d < 11 ? parseInt(p) : p;
      },
      _salts: function() {
        for (var o = this, d = o._opt, f = d.salts || 2, c = "", p = 0; p < f; p++) {
          var g = Math.floor(Math.random() * 3844);
          c += r("00", o._toBase(g, a));
        }
        return c;
      },
      gen: function() {
        var o = this, d = o._opt, f = d.interval || 1, c = d.initTime || l, p = f > 0 ? Math.floor(((/* @__PURE__ */ new Date()).getTime() - c) / f) : 0, g = o._salts();
        return p === 0 ? g : o._toBase(p, a) + g;
      }
    }, {
      inst: function(o) {
        return new u(o);
      },
      gen: function(o) {
        return new u(o).gen();
      },
      uuid: function() {
        return new u({ salts: 4 }).gen();
      }
    };
  });
})(jsShortid);
var jsShortidExports = jsShortid.exports;
const shortid = /* @__PURE__ */ getDefaultExportFromCjs(jsShortidExports), spliter = ",";
class MenuNode {
  constructor({
    data: l = {},
    level: e = 0,
    leaf: a = !1,
    parent: r = null,
    children: u = [],
    store: o,
    indeterminate: d,
    checked: f
  }) {
    this.uid = shortid.gen(), this.value = l.value, this.label = l.label, this.level = e, this.leaf = a, this.parent = r, this.children = u, this.disabled = !!l.disabled, this.path = l.path || this.formatPath(), this.pathName = l.pathName || this.formatLabel(), this.store = o, this.leafNodesNum = 0, this.checked = f, this.indeterminate = d, this.sensitiveFlag = l.sensitiveFlag, this.menuNodeShow = !0;
  }
  formatKeyFromParent(l) {
    const e = [this == null ? void 0 : this[l]];
    let a = this.parent;
    for (; a; )
      e.unshift(a == null ? void 0 : a[l]), a = a == null ? void 0 : a.parent;
    return e;
  }
  formatPath() {
    return this.formatKeyFromParent("value");
  }
  formatLabel() {
    return this.formatKeyFromParent("label");
  }
  getVisibleChild() {
    return (this.children || []).filter((e) => e.menuNodeShow);
  }
  changeCheckVal(l) {
    this.checked = l, this.indeterminate = !1;
  }
  changeCompStatus(l) {
    l && (l === "checked" ? (this.checked = !0, this.indeterminate = !1) : l === "indeterminate" ? (this.checked = !1, this.indeterminate = !0) : l === "empty" && (this.checked = !1, this.indeterminate = !1));
  }
  changeChildrenVal(l) {
    this.children = Array.isArray(l) ? l : null;
  }
  changeNodeShow(l) {
    this.menuNodeShow = l;
  }
  changeShowStatus(l, e = !1) {
    const a = (o) => o ? o.label.includes(l) ? !0 : !!a(o.parent) : !1, r = (o) => {
      if (!l)
        return !0;
      if (!o || !(o != null && o.label))
        return !1;
      if (o.label.includes(l))
        return !0;
      if (e)
        return !!a(o.parent);
    }, u = (o) => {
      if (!o)
        return 0;
      if (o.leaf) {
        const d = r(o);
        return this.changeNodeShow(d), d ? 1 : 0;
      }
      if (o.children && o.children.length) {
        let d = 0;
        return o.children.forEach((f) => {
          d += u(f);
        }), this.changeNodeShow(!!d), d;
      }
    };
    u(this);
  }
  onCheckedClick(l) {
    var e;
    this.changeCheckVal(l), this.changeChildStatus(l), this.changeParentStatus(l), typeof ((e = this.store) == null ? void 0 : e.onNodeChange) == "function" && this.store.onNodeChange(this);
  }
  changeChildStatus(l) {
    if (!this.leaf)
      for (let e of this.getVisibleChild())
        e == null || e.changeCheckVal(l), e == null || e.changeChildStatus(l);
  }
  findSiblings() {
    if (!this.parent)
      return [];
    const l = this.parent.children;
    return Array.isArray(l) ? l : [];
  }
  findLeafs(l = !1) {
    const e = [], a = (r) => {
      r && (r.leaf && (!l || r.menuNodeShow) && e.push(r), r != null && r.children && (r != null && r.children.length) && r.children.forEach((u) => a(u)));
    };
    return a(this), e;
  }
  changeParentStatus() {
    var u, o;
    if (!this.parent)
      return;
    const l = ((u = this.findSiblings()) == null ? void 0 : u.filter((d) => d.menuNodeShow)) || [], e = (o = l.filter((d) => d.checked)) == null ? void 0 : o.length, a = l.some((d) => d.indeterminate), r = e ? e === l.length ? "checked" : "indeterminate" : a ? "indeterminate" : "empty";
    this.parent.changeCompStatus(r), this.parent.changeParentStatus();
  }
}
const emitsEnum = {
  resultChange: "resultChange",
  checkedNode: "checkedNode"
};
class MenuStore {
  constructor(l = [], e = [], a = 2) {
    this.nodesTree = [], this.result = /* @__PURE__ */ new Map(), this.callbacks = {}, this.initLists(l, e, a);
  }
  onNodeChange(l) {
    l.checked ? this.onChecked(l) : this.onCancelCheck(l), this.emitChange(emitsEnum.checkedNode, this.result);
  }
  hasParentKeyInEdit(l, e) {
    return !l || !e ? !1 : e.some((a) => l.join(spliter).startsWith(a + spliter));
  }
  listenChange(l, e) {
    typeof e == "function" && (this.callbacks[l] || (this.callbacks[l] = []), this.callbacks[l].push(e));
  }
  emitChange(l, e) {
    const a = this.callbacks[l];
    a && a.forEach((r) => r(e));
  }
  delKeysFromResult(l = []) {
    l.forEach((e) => {
      this.result.delete(e);
    }), this.emitChange(emitsEnum.resultChange, this.result);
  }
  insetKeyInResult(l, e) {
    this.result.set(l.join(spliter), e), this.emitChange(emitsEnum.resultChange, this.result);
  }
  onChecked(l) {
    const { path: e, leafNodesNum: a } = l;
    let r = l.findLeafs(!0) || [];
    if (r.length === a) {
      this.insetKeyInResult(e, l);
      const o = (f) => {
        if (!f.parent)
          return;
        const c = f.findSiblings();
        let p = !0;
        for (let g of c)
          if (!g.checked) {
            p = !1;
            break;
          }
        if (p) {
          let g = c.map((_) => _.path.join(spliter));
          this.delKeysFromResult(g), this.insetKeyInResult(f.parent.path, f.parent), o(f.parent);
        }
      };
      o(l);
      const d = this.getChildKeysFromResult(l.path);
      this.delKeysFromResult(d);
      return;
    }
    r.forEach((o) => this.onChecked(o));
  }
  getChildKeysFromResult(l) {
    if (!l)
      return [];
    let e = l.join(spliter);
    if (!e)
      return [];
    const a = [], r = new RegExp(`^${e}${spliter}.+$`);
    for (const u of this.result.keys())
      r.test(u) && a.push(u);
    return a;
  }
  onCancelCheck(l) {
    if (!l.path)
      return;
    const e = (r) => {
      if (!r.parent)
        return;
      const u = r.findSiblings(), o = u == null ? void 0 : u.filter((f) => f.path.join(spliter) !== r.path.join(spliter));
      let d = !0;
      for (let f of o)
        if (!f.checked) {
          d = !1;
          break;
        }
      d && (o.forEach((f) => {
        this.insetKeyInResult(f.path, f);
      }), this.delKeysFromResult([r.parent.path.join(spliter)]), e(r.parent));
    };
    e(l), this.delKeysFromResult([l.path.join(spliter)]);
    const a = this.getChildKeysFromResult(l.path);
    this.delKeysFromResult(a);
  }
  initLists(l = [], e, a) {
    const r = (u = [], o = 0, d = null) => u == null ? void 0 : u.map((f) => {
      var _;
      const c = !((_ = f == null ? void 0 : f.children) != null && _.length) || o === a, p = {
        data: f,
        level: o,
        leaf: c,
        parent: d,
        checked: !1,
        indeterminate: !1,
        children: (f == null ? void 0 : f.children) || null,
        store: this
      }, g = new MenuNode(p);
      if (f != null && f.children && g.changeChildrenVal(r(f.children, o + 1, g)), g.leafNodesNum = g.leaf ? 1 : g.children.reduce((x, m) => x + m.leafNodesNum, 0), e.length) {
        let x = e.filter((y) => y.startsWith(g.path.join(","))).length, m = e.some((y) => g.path.join(",").startsWith(y)), v = e.find((y) => y === g.path.join(","));
        g.checked = m || x === g.leafNodesNum, g.indeterminate = !!x && x < g.leafNodesNum && !v, g.checked && !this.hasParentKeyInEdit(g.path, e) && this.insetKeyInResult(g.path, g);
      }
      return g;
    });
    this.nodesTree = r(l);
  }
  getNodesTree() {
    return this.nodesTree;
  }
  getNodeByPath(l) {
    if (!l || !Array.isArray(l))
      return null;
    let e = this.nodesTree, a = null;
    for (let r in l) {
      if (a = e.find((u) => u.value === l[r]), !a)
        return null;
      e = a.children;
    }
    return a;
  }
}
var FUNC_ERROR_TEXT = "Expected a function", NAN = 0 / 0, symbolTag = "[object Symbol]", reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt, freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), objectProto = Object.prototype, objectToString = objectProto.toString, nativeMax = Math.max, nativeMin = Math.min, now = function() {
  return root.Date.now();
};
function debounce(n, l, e) {
  var a, r, u, o, d, f, c = 0, p = !1, g = !1, _ = !0;
  if (typeof n != "function")
    throw new TypeError(FUNC_ERROR_TEXT);
  l = toNumber(l) || 0, isObject(e) && (p = !!e.leading, g = "maxWait" in e, u = g ? nativeMax(toNumber(e.maxWait) || 0, l) : u, _ = "trailing" in e ? !!e.trailing : _);
  function x(M) {
    var S = a, O = r;
    return a = r = void 0, c = M, o = n.apply(O, S), o;
  }
  function m(M) {
    return c = M, d = setTimeout(C, l), p ? x(M) : o;
  }
  function v(M) {
    var S = M - f, O = M - c, N = l - S;
    return g ? nativeMin(N, u - O) : N;
  }
  function y(M) {
    var S = M - f, O = M - c;
    return f === void 0 || S >= l || S < 0 || g && O >= u;
  }
  function C() {
    var M = now();
    if (y(M))
      return P(M);
    d = setTimeout(C, v(M));
  }
  function P(M) {
    return d = void 0, _ && a ? x(M) : (a = r = void 0, o);
  }
  function $() {
    d !== void 0 && clearTimeout(d), c = 0, a = f = r = d = void 0;
  }
  function z() {
    return d === void 0 ? o : P(now());
  }
  function I() {
    var M = now(), S = y(M);
    if (a = arguments, r = this, f = M, S) {
      if (d === void 0)
        return m(f);
      if (g)
        return d = setTimeout(C, l), x(f);
    }
    return d === void 0 && (d = setTimeout(C, l)), o;
  }
  return I.cancel = $, I.flush = z, I;
}
function isObject(n) {
  var l = typeof n;
  return !!n && (l == "object" || l == "function");
}
function isObjectLike(n) {
  return !!n && typeof n == "object";
}
function isSymbol(n) {
  return typeof n == "symbol" || isObjectLike(n) && objectToString.call(n) == symbolTag;
}
function toNumber(n) {
  if (typeof n == "number")
    return n;
  if (isSymbol(n))
    return NAN;
  if (isObject(n)) {
    var l = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = isObject(l) ? l + "" : l;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(reTrim, "");
  var e = reIsBinary.test(n);
  return e || reIsOctal.test(n) ? freeParseInt(n.slice(2), e ? 2 : 8) : reIsBadHex.test(n) ? NAN : +n;
}
var lodash_debounce = debounce;
const debounce$1 = /* @__PURE__ */ getDefaultExportFromCjs(lodash_debounce), useStore = ({
  options: n = [],
  cascaderMaxLevel: l = 2,
  value: e = [],
  needResultPanel: a = !0,
  resultLabelJoiner: r = " > "
}, u) => {
  const o = ref(null), d = ref(null), f = ref(null), c = () => {
    let x = [];
    e.length && (x = e == null ? void 0 : e.map((v) => v.join(","))), o.value = new MenuStore(n, x, l);
    const m = debounce$1((v) => {
      let y = [];
      for (let [, C] of v)
        y.push(C.path);
      u && u("change", y);
    }, 300);
    if (o.value.listenChange(emitsEnum.checkedNode, m), a) {
      const v = debounce$1((y) => {
        p(y);
      });
      o.value.listenChange(emitsEnum.resultChange, v), x && x.length && p(o.value.result);
    }
    f.value = o.value.getNodesTree();
  }, p = (x) => {
    let m = [];
    if (x)
      for (let [, y] of x)
        m.push(y);
    const v = (y) => y.reduce((C, P) => [...C, ...P.findLeafs().map(($) => ({
      ...$,
      value: $.path.join(","),
      label: $.pathName.join(r)
    }))], []);
    d.value = new MenuStore(v(m));
  };
  return {
    formatOptions: f,
    resultStore: d,
    initMenuStore: c,
    handleDestroyed: () => {
      o.value = null, d.value = null;
    },
    removeSelectedCate: () => {
      if (!d.value)
        return;
      const m = d.value.getNodesTree().filter((y) => y.checked);
      let v = o.value;
      m.forEach((y) => {
        const C = v.getNodeByPath(y.path);
        C && C.onCheckedClick(!1);
      });
    }
  };
}, useSearch = (n = null) => ({
  handleSearch: (e, a, r = !0) => {
    const u = (o) => {
      for (let d of o)
        d.changeShowStatus(a, r), d.children && d.children.length && u(d.children);
    };
    u(e), e.forEach((o) => {
      var f;
      ((f = o.findLeafs(!0)) == null ? void 0 : f.filter((c) => c.checked)).forEach((c) => {
        c.onCheckedClick(!0);
      });
    }), nextTick(() => {
      var d;
      let o = e.filter((f) => !!f.menuNodeShow);
      (d = n.value) == null || d.convertActive(o.find((f) => f.checked || f.indeterminate) || (o == null ? void 0 : o[0]));
    });
  }
}), __default__ = defineComponent({
  name: "CascaderTreeSelect"
}), _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    needSearch: {
      type: Boolean,
      default: !0
    },
    needResultPanel: {
      type: Boolean,
      default: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "请输入关键词进行搜索"
    },
    size: {
      type: String,
      default: "small"
    },
    cascaderMaxLevel: {
      type: Number,
      default: 2
      // 从0开始
    },
    resultLabelJoiner: {
      type: String,
      default: " > "
    },
    panelTitleList: {
      type: Array,
      default: () => ["一级", "二级", "三级", "四级"]
    },
    ancestorHitShow: {
      // 祖先元素命中，子元素中不包含搜索词也展示即展示
      type: Boolean,
      default: !0
    }
  },
  emits: ["change"],
  setup(n, { emit: l }) {
    const e = n, a = ref(""), r = ref(null), { initMenuStore: u, formatOptions: o, resultStore: d, handleDestroyed: f, removeSelectedCate: c } = useStore(e, l), { handleSearch: p } = useSearch(r);
    return watch(() => a.value, () => {
      p(o.value, a.value, e.ancestorHitShow);
    }), onMounted(() => {
      u();
    }), onUnmounted(() => {
      f();
    }), { __sfc: !0, props: e, searchKey: a, cascaderSelectRef: r, emit: l, initMenuStore: u, formatOptions: o, resultStore: d, handleDestroyed: f, removeSelectedCate: c, handleSearch: p, CascaderSelect, CascaderResult };
  }
});
var _sfc_render$2 = function() {
  var l = this, e = l._self._c, a = l._self._setupProxy;
  return e("div", { staticClass: "cascader-tree-select", attrs: { id: "app" } }, [l.needSearch ? e("div", { staticClass: "cascader-tree-select__search" }, [e("el-input", { staticStyle: { width: "240px" }, attrs: { size: a.props.size, clearable: "", placeholder: a.props.placeholder }, model: { value: a.searchKey, callback: function(r) {
    a.searchKey = typeof r == "string" ? r.trim() : r;
  }, expression: "searchKey" } })], 1) : l._e(), e("div", { staticClass: "cascader-tree-select__main" }, [e(a.CascaderSelect, { ref: "cascaderSelectRef", attrs: { options: a.formatOptions, "cascader-max-level": a.props.cascaderMaxLevel, "global-search-word": a.searchKey, "panel-title-list": a.props.panelTitleList } }), a.props.needResultPanel ? e(a.CascaderResult, l._b({ attrs: { "result-options": a.resultStore ? a.resultStore.getNodesTree() : [] }, on: { removeSelectedCate: a.removeSelectedCate } }, "cascader-result", l.$props, !1)) : l._e()], 1)]);
}, _sfc_staticRenderFns$2 = [], __component__$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  !1,
  null,
  null,
  null,
  null
);
const CascaderTreeSelect = __component__$2.exports, _sfc_main$1 = {
  __name: "prop-form",
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup(n) {
    const l = n, e = computed(() => l.value);
    return { __sfc: !0, props: l, model: e };
  }
};
var _sfc_render$1 = function() {
  var l = this, e = l._self._c, a = l._self._setupProxy;
  return e("div", { staticClass: "cascader-tree-select__demo__module" }, [e("div", { staticStyle: { "margin-bottom": "20px" } }, [l._v("自定义props")]), e("el-form", { attrs: { model: a.model } }, [e("el-row", [e("el-col", { attrs: { span: 12 } }, [e("el-form-item", { attrs: { label: "needSearch(是否需要搜索功能)：" } }, [e("el-radio-group", { model: { value: a.model.needSearch, callback: function(r) {
    l.$set(a.model, "needSearch", r);
  }, expression: "model.needSearch" } }, [e("el-radio", { attrs: { label: !0 } }, [l._v("是")]), e("el-radio", { attrs: { label: !1 } }, [l._v("否")])], 1)], 1)], 1), e("el-col", { attrs: { span: 12 } }, [e("el-form-item", { attrs: { label: "needResultPanel(是否需要结果面板)：" } }, [e("el-radio-group", { model: { value: a.model.needResultPanel, callback: function(r) {
    l.$set(a.model, "needResultPanel", r);
  }, expression: "model.needResultPanel" } }, [e("el-radio", { attrs: { label: !0 } }, [l._v("是")]), e("el-radio", { attrs: { label: !1 } }, [l._v("否")])], 1)], 1)], 1)], 1), e("el-row", [e("el-col", { attrs: { span: 12 } }, [e("el-form-item", { attrs: { label: "cascaderMaxLevel(级联面板最大层级: 第一级为0)：" } }, [e("el-radio-group", { model: { value: a.model.cascaderMaxLevel, callback: function(r) {
    l.$set(a.model, "cascaderMaxLevel", r);
  }, expression: "model.cascaderMaxLevel" } }, [e("el-radio", { attrs: { label: 1 } }, [l._v("1")]), e("el-radio", { attrs: { label: 2 } }, [l._v("2")]), e("el-radio", { attrs: { label: 3 } }, [l._v("3")])], 1)], 1)], 1), e("el-col", { attrs: { span: 12 } }, [e("el-form-item", { attrs: { label: "ancestorHitShow(当前节点命中，子节点无论命中与否全部展示)：" } }, [e("el-radio-group", { model: { value: a.model.ancestorHitShow, callback: function(r) {
    l.$set(a.model, "ancestorHitShow", r);
  }, expression: "model.ancestorHitShow" } }, [e("el-radio", { attrs: { label: !0 } }, [l._v("是")]), e("el-radio", { attrs: { label: !1 } }, [l._v("否(如果节点本身命中，但子节点无一命中，则当前节点不展示)")])], 1)], 1)], 1)], 1)], 1)], 1);
}, _sfc_staticRenderFns$1 = [], __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  !1,
  null,
  null,
  null,
  null
);
const PropForm = __component__$1.exports, index = "";
var mock = { exports: {} };
(function(module, exports) {
  (function(l, e) {
    module.exports = e();
  })(commonjsGlobal, function() {
    return (
      /******/
      function(n) {
        var l = {};
        function e(a) {
          if (l[a])
            return l[a].exports;
          var r = l[a] = {
            /******/
            exports: {},
            /******/
            id: a,
            /******/
            loaded: !1
            /******/
          };
          return n[a].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
        }
        return e.m = n, e.c = l, e.p = "", e(0);
      }([
        /* 0 */
        /***/
        function(n, l, e) {
          var a = e(1), r = e(3), u = e(5), o = e(20), d = e(23), f = e(25), c;
          typeof window < "u" && (c = e(27));
          /*!
              Mock - 模拟请求 & 模拟数据
              https://github.com/nuysoft/Mock
              墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
          */
          var p = {
            Handler: a,
            Random: u,
            Util: r,
            XHR: c,
            RE: o,
            toJSONSchema: d,
            valid: f,
            heredoc: r.heredoc,
            setup: function(g) {
              return c.setup(g);
            },
            _mocked: {}
          };
          p.version = "1.0.1-beta3", c && (c.Mock = p), p.mock = function(g, _, x) {
            return arguments.length === 1 ? a.gen(g) : (arguments.length === 2 && (x = _, _ = void 0), c && (window.XMLHttpRequest = c), p._mocked[g + (_ || "")] = {
              rurl: g,
              rtype: _,
              template: x
            }, p);
          }, n.exports = p;
        },
        /* 1 */
        /***/
        function(module, exports, __webpack_require__) {
          var Constant = __webpack_require__(2), Util = __webpack_require__(3), Parser = __webpack_require__(4), Random = __webpack_require__(5), RE = __webpack_require__(20), Handler = {
            extend: Util.extend
          };
          Handler.gen = function(n, l, e) {
            l = l == null ? "" : l + "", e = e || {}, e = {
              // 当前访问路径，只有属性名，不包括生成规则
              path: e.path || [Constant.GUID],
              templatePath: e.templatePath || [Constant.GUID++],
              // 最终属性值的上下文
              currentContext: e.currentContext,
              // 属性值模板的上下文
              templateCurrentContext: e.templateCurrentContext || n,
              // 最终值的根
              root: e.root || e.currentContext,
              // 模板的根
              templateRoot: e.templateRoot || e.templateCurrentContext || n
            };
            var a = Parser.parse(l), r = Util.type(n), u;
            return Handler[r] ? (u = Handler[r]({
              // 属性值类型
              type: r,
              // 属性值模板
              template: n,
              // 属性名 + 生成规则
              name: l,
              // 属性名
              parsedName: l && l.replace(Constant.RE_KEY, "$1"),
              // 解析后的生成规则
              rule: a,
              // 相关上下文
              context: e
            }), e.root || (e.root = u), u) : n;
          }, Handler.extend({
            array: function(n) {
              var l = [], e, a;
              if (n.template.length === 0)
                return l;
              if (n.rule.parameters)
                if (n.rule.min === 1 && n.rule.max === void 0)
                  n.context.path.push(n.name), n.context.templatePath.push(n.name), l = Random.pick(
                    Handler.gen(n.template, void 0, {
                      path: n.context.path,
                      templatePath: n.context.templatePath,
                      currentContext: l,
                      templateCurrentContext: n.template,
                      root: n.context.root || l,
                      templateRoot: n.context.templateRoot || n.template
                    })
                  ), n.context.path.pop(), n.context.templatePath.pop();
                else if (n.rule.parameters[2])
                  n.template.__order_index = n.template.__order_index || 0, n.context.path.push(n.name), n.context.templatePath.push(n.name), l = Handler.gen(n.template, void 0, {
                    path: n.context.path,
                    templatePath: n.context.templatePath,
                    currentContext: l,
                    templateCurrentContext: n.template,
                    root: n.context.root || l,
                    templateRoot: n.context.templateRoot || n.template
                  })[n.template.__order_index % n.template.length], n.template.__order_index += +n.rule.parameters[2], n.context.path.pop(), n.context.templatePath.pop();
                else
                  for (e = 0; e < n.rule.count; e++)
                    for (a = 0; a < n.template.length; a++)
                      n.context.path.push(l.length), n.context.templatePath.push(a), l.push(
                        Handler.gen(n.template[a], l.length, {
                          path: n.context.path,
                          templatePath: n.context.templatePath,
                          currentContext: l,
                          templateCurrentContext: n.template,
                          root: n.context.root || l,
                          templateRoot: n.context.templateRoot || n.template
                        })
                      ), n.context.path.pop(), n.context.templatePath.pop();
              else
                for (e = 0; e < n.template.length; e++)
                  n.context.path.push(e), n.context.templatePath.push(e), l.push(
                    Handler.gen(n.template[e], e, {
                      path: n.context.path,
                      templatePath: n.context.templatePath,
                      currentContext: l,
                      templateCurrentContext: n.template,
                      root: n.context.root || l,
                      templateRoot: n.context.templateRoot || n.template
                    })
                  ), n.context.path.pop(), n.context.templatePath.pop();
              return l;
            },
            object: function(n) {
              var l = {}, e, a, r, u, o, d;
              if (n.rule.min != null)
                for (e = Util.keys(n.template), e = Random.shuffle(e), e = e.slice(0, n.rule.count), d = 0; d < e.length; d++)
                  r = e[d], u = r.replace(Constant.RE_KEY, "$1"), n.context.path.push(u), n.context.templatePath.push(r), l[u] = Handler.gen(n.template[r], r, {
                    path: n.context.path,
                    templatePath: n.context.templatePath,
                    currentContext: l,
                    templateCurrentContext: n.template,
                    root: n.context.root || l,
                    templateRoot: n.context.templateRoot || n.template
                  }), n.context.path.pop(), n.context.templatePath.pop();
              else {
                e = [], a = [];
                for (r in n.template)
                  (typeof n.template[r] == "function" ? a : e).push(r);
                for (e = e.concat(a), d = 0; d < e.length; d++)
                  r = e[d], u = r.replace(Constant.RE_KEY, "$1"), n.context.path.push(u), n.context.templatePath.push(r), l[u] = Handler.gen(n.template[r], r, {
                    path: n.context.path,
                    templatePath: n.context.templatePath,
                    currentContext: l,
                    templateCurrentContext: n.template,
                    root: n.context.root || l,
                    templateRoot: n.context.templateRoot || n.template
                  }), n.context.path.pop(), n.context.templatePath.pop(), o = r.match(Constant.RE_KEY), o && o[2] && Util.type(n.template[r]) === "number" && (n.template[r] += parseInt(o[2], 10));
              }
              return l;
            },
            number: function(n) {
              var l, e;
              if (n.rule.decimal) {
                for (n.template += "", e = n.template.split("."), e[0] = n.rule.range ? n.rule.count : e[0], e[1] = (e[1] || "").slice(0, n.rule.dcount); e[1].length < n.rule.dcount; )
                  e[1] += // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
                  e[1].length < n.rule.dcount - 1 ? Random.character("number") : Random.character("123456789");
                l = parseFloat(e.join("."), 10);
              } else
                l = n.rule.range && !n.rule.parameters[2] ? n.rule.count : n.template;
              return l;
            },
            boolean: function(n) {
              var l;
              return l = n.rule.parameters ? Random.bool(n.rule.min, n.rule.max, n.template) : n.template, l;
            },
            string: function(n) {
              var l = "", e, a, r, u;
              if (n.template.length) {
                for (n.rule.count == null && (l += n.template), e = 0; e < n.rule.count; e++)
                  l += n.template;
                for (a = l.match(Constant.RE_PLACEHOLDER) || [], e = 0; e < a.length; e++) {
                  if (r = a[e], /^\\/.test(r)) {
                    a.splice(e--, 1);
                    continue;
                  }
                  if (u = Handler.placeholder(r, n.context.currentContext, n.context.templateCurrentContext, n), a.length === 1 && r === l && typeof u != typeof l) {
                    l = u;
                    break;
                  }
                  l = l.replace(r, u);
                }
              } else
                l = n.rule.range ? Random.string(n.rule.count) : n.template;
              return l;
            },
            function: function(n) {
              return n.template.call(n.context.currentContext, n);
            },
            regexp: function(n) {
              var l = "";
              n.rule.count == null && (l += n.template.source);
              for (var e = 0; e < n.rule.count; e++)
                l += n.template.source;
              return RE.Handler.gen(
                RE.Parser.parse(
                  l
                )
              );
            }
          }), Handler.extend({
            _all: function() {
              var n = {};
              for (var l in Random)
                n[l.toLowerCase()] = l;
              return n;
            },
            // 处理占位符，转换为最终值
            placeholder: function(placeholder, obj, templateContext, options) {
              Constant.RE_PLACEHOLDER.exec("");
              var parts = Constant.RE_PLACEHOLDER.exec(placeholder), key = parts && parts[1], lkey = key && key.toLowerCase(), okey = this._all()[lkey], params = parts && parts[2] || "", pathParts = this.splitPathToArray(key);
              try {
                params = eval("(function(){ return [].splice.call(arguments, 0 ) })(" + params + ")");
              } catch (n) {
                params = parts[2].split(/,\s*/);
              }
              if (obj && key in obj)
                return obj[key];
              if (key.charAt(0) === "/" || pathParts.length > 1)
                return this.getValueByKeyPath(key, options);
              if (templateContext && typeof templateContext == "object" && key in templateContext && placeholder !== templateContext[key])
                return templateContext[key] = Handler.gen(templateContext[key], key, {
                  currentContext: obj,
                  templateCurrentContext: templateContext
                }), templateContext[key];
              if (!(key in Random) && !(lkey in Random) && !(okey in Random))
                return placeholder;
              for (var i = 0; i < params.length; i++)
                Constant.RE_PLACEHOLDER.exec(""), Constant.RE_PLACEHOLDER.test(params[i]) && (params[i] = Handler.placeholder(params[i], obj, templateContext, options));
              var handle = Random[key] || Random[lkey] || Random[okey];
              switch (Util.type(handle)) {
                case "array":
                  return Random.pick(handle);
                case "function":
                  handle.options = options;
                  var re = handle.apply(Random, params);
                  return re === void 0 && (re = ""), delete handle.options, re;
              }
            },
            getValueByKeyPath: function(n, l) {
              var e = n, a = this.splitPathToArray(n), r = [];
              n.charAt(0) === "/" ? r = [l.context.path[0]].concat(
                this.normalizePath(a)
              ) : a.length > 1 && (r = l.context.path.slice(0), r.pop(), r = this.normalizePath(
                r.concat(a)
              ));
              try {
                n = a[a.length - 1];
                for (var u = l.context.root, o = l.context.templateRoot, d = 1; d < r.length - 1; d++)
                  u = u[r[d]], o = o[r[d]];
                if (u && n in u)
                  return u[n];
                if (o && typeof o == "object" && n in o && e !== o[n])
                  return o[n] = Handler.gen(o[n], n, {
                    currentContext: u,
                    templateCurrentContext: o
                  }), o[n];
              } catch {
              }
              return "@" + a.join("/");
            },
            // https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
            normalizePath: function(n) {
              for (var l = [], e = 0; e < n.length; e++)
                switch (n[e]) {
                  case "..":
                    l.pop();
                    break;
                  case ".":
                    break;
                  default:
                    l.push(n[e]);
                }
              return l;
            },
            splitPathToArray: function(n) {
              var l = n.split(/\/+/);
              return l[l.length - 1] || (l = l.slice(0, -1)), l[0] || (l = l.slice(1)), l;
            }
          }), module.exports = Handler;
        },
        /* 2 */
        /***/
        function(n, l) {
          n.exports = {
            GUID: 1,
            RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
            RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
            RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g
            // /\\*@([^@#%&()\?\s\/\.]+)(?:\((.*?)\))?/g
            // RE_INDEX: /^index$/,
            // RE_KEY: /^key$/
          };
        },
        /* 3 */
        /***/
        function(n, l) {
          var e = {};
          e.extend = function() {
            var r = arguments[0] || {}, u = 1, o = arguments.length, d, f, c, p, g;
            for (o === 1 && (r = this, u = 0); u < o; u++)
              if (d = arguments[u], !!d)
                for (f in d)
                  c = r[f], p = d[f], r !== p && p !== void 0 && (e.isArray(p) || e.isObject(p) ? (e.isArray(p) && (g = c && e.isArray(c) ? c : []), e.isObject(p) && (g = c && e.isObject(c) ? c : {}), r[f] = e.extend(g, p)) : r[f] = p);
            return r;
          }, e.each = function(r, u, o) {
            var d, f;
            if (this.type(r) === "number")
              for (d = 0; d < r; d++)
                u(d, d);
            else if (r.length === +r.length)
              for (d = 0; d < r.length && u.call(o, r[d], d, r) !== !1; d++)
                ;
            else
              for (f in r)
                if (u.call(o, r[f], f, r) === !1)
                  break;
          }, e.type = function(r) {
            return r == null ? String(r) : Object.prototype.toString.call(r).match(/\[object (\w+)\]/)[1].toLowerCase();
          }, e.each("String Object Array RegExp Function".split(" "), function(a) {
            e["is" + a] = function(r) {
              return e.type(r) === a.toLowerCase();
            };
          }), e.isObjectOrArray = function(a) {
            return e.isObject(a) || e.isArray(a);
          }, e.isNumeric = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
          }, e.keys = function(a) {
            var r = [];
            for (var u in a)
              a.hasOwnProperty(u) && r.push(u);
            return r;
          }, e.values = function(a) {
            var r = [];
            for (var u in a)
              a.hasOwnProperty(u) && r.push(a[u]);
            return r;
          }, e.heredoc = function(r) {
            return r.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "");
          }, e.noop = function() {
          }, n.exports = e;
        },
        /* 4 */
        /***/
        function(n, l, e) {
          var a = e(2), r = e(5);
          n.exports = {
            parse: function(u) {
              u = u == null ? "" : u + "";
              var o = (u || "").match(a.RE_KEY), d = o && o[3] && o[3].match(a.RE_RANGE), f = d && d[1] && parseInt(d[1], 10), c = d && d[2] && parseInt(d[2], 10), p = d ? d[2] ? r.integer(f, c) : parseInt(d[1], 10) : void 0, g = o && o[4] && o[4].match(a.RE_RANGE), _ = g && g[1] && parseInt(g[1], 10), x = g && g[2] && parseInt(g[2], 10), m = g ? !g[2] && parseInt(g[1], 10) || r.integer(_, x) : void 0, v = {
                // 1 name, 2 inc, 3 range, 4 decimal
                parameters: o,
                // 1 min, 2 max
                range: d,
                min: f,
                max: c,
                // min-max
                count: p,
                // 是否有 decimal
                decimal: g,
                dmin: _,
                dmax: x,
                // dmin-dimax
                dcount: m
              };
              for (var y in v)
                if (v[y] != null)
                  return v;
              return {};
            }
          };
        },
        /* 5 */
        /***/
        function(n, l, e) {
          var a = e(3), r = {
            extend: a.extend
          };
          r.extend(e(6)), r.extend(e(7)), r.extend(e(8)), r.extend(e(10)), r.extend(e(13)), r.extend(e(15)), r.extend(e(16)), r.extend(e(17)), r.extend(e(14)), r.extend(e(19)), n.exports = r;
        },
        /* 6 */
        /***/
        function(n, l) {
          n.exports = {
            // 返回一个随机的布尔值。
            boolean: function(e, a, r) {
              return r !== void 0 ? (e = typeof e < "u" && !isNaN(e) ? parseInt(e, 10) : 1, a = typeof a < "u" && !isNaN(a) ? parseInt(a, 10) : 1, Math.random() > 1 / (e + a) * e ? !r : r) : Math.random() >= 0.5;
            },
            bool: function(e, a, r) {
              return this.boolean(e, a, r);
            },
            // 返回一个随机的自然数（大于等于 0 的整数）。
            natural: function(e, a) {
              return e = typeof e < "u" ? parseInt(e, 10) : 0, a = typeof a < "u" ? parseInt(a, 10) : 9007199254740992, Math.round(Math.random() * (a - e)) + e;
            },
            // 返回一个随机的整数。
            integer: function(e, a) {
              return e = typeof e < "u" ? parseInt(e, 10) : -9007199254740992, a = typeof a < "u" ? parseInt(a, 10) : 9007199254740992, Math.round(Math.random() * (a - e)) + e;
            },
            int: function(e, a) {
              return this.integer(e, a);
            },
            // 返回一个随机的浮点数。
            float: function(e, a, r, u) {
              r = r === void 0 ? 0 : r, r = Math.max(Math.min(r, 17), 0), u = u === void 0 ? 17 : u, u = Math.max(Math.min(u, 17), 0);
              for (var o = this.integer(e, a) + ".", d = 0, f = this.natural(r, u); d < f; d++)
                o += // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
                d < f - 1 ? this.character("number") : this.character("123456789");
              return parseFloat(o, 10);
            },
            // 返回一个随机字符。
            character: function(e) {
              var a = {
                lower: "abcdefghijklmnopqrstuvwxyz",
                upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                number: "0123456789",
                symbol: "!@#$%^&*()[]"
              };
              return a.alpha = a.lower + a.upper, a.undefined = a.lower + a.upper + a.number + a.symbol, e = a[("" + e).toLowerCase()] || e, e.charAt(this.natural(0, e.length - 1));
            },
            char: function(e) {
              return this.character(e);
            },
            // 返回一个随机字符串。
            string: function(e, a, r) {
              var u;
              switch (arguments.length) {
                case 0:
                  u = this.natural(3, 7);
                  break;
                case 1:
                  u = e, e = void 0;
                  break;
                case 2:
                  typeof arguments[0] == "string" ? u = a : (u = this.natural(e, a), e = void 0);
                  break;
                case 3:
                  u = this.natural(a, r);
                  break;
              }
              for (var o = "", d = 0; d < u; d++)
                o += this.character(e);
              return o;
            },
            str: function() {
              return this.string.apply(this, arguments);
            },
            // 返回一个整型数组。
            range: function(e, a, r) {
              arguments.length <= 1 && (a = e || 0, e = 0), r = arguments[2] || 1, e = +e, a = +a, r = +r;
              for (var u = Math.max(Math.ceil((a - e) / r), 0), o = 0, d = new Array(u); o < u; )
                d[o++] = e, e += r;
              return d;
            }
          };
        },
        /* 7 */
        /***/
        function(n, l) {
          var e = {
            yyyy: "getFullYear",
            yy: function(a) {
              return ("" + a.getFullYear()).slice(2);
            },
            y: "yy",
            MM: function(a) {
              var r = a.getMonth() + 1;
              return r < 10 ? "0" + r : r;
            },
            M: function(a) {
              return a.getMonth() + 1;
            },
            dd: function(a) {
              var r = a.getDate();
              return r < 10 ? "0" + r : r;
            },
            d: "getDate",
            HH: function(a) {
              var r = a.getHours();
              return r < 10 ? "0" + r : r;
            },
            H: "getHours",
            hh: function(a) {
              var r = a.getHours() % 12;
              return r < 10 ? "0" + r : r;
            },
            h: function(a) {
              return a.getHours() % 12;
            },
            mm: function(a) {
              var r = a.getMinutes();
              return r < 10 ? "0" + r : r;
            },
            m: "getMinutes",
            ss: function(a) {
              var r = a.getSeconds();
              return r < 10 ? "0" + r : r;
            },
            s: "getSeconds",
            SS: function(a) {
              var r = a.getMilliseconds();
              return r < 10 && "00" + r || r < 100 && "0" + r || r;
            },
            S: "getMilliseconds",
            A: function(a) {
              return a.getHours() < 12 ? "AM" : "PM";
            },
            a: function(a) {
              return a.getHours() < 12 ? "am" : "pm";
            },
            T: "getTime"
          };
          n.exports = {
            // 日期占位符集合。
            _patternLetters: e,
            // 日期占位符正则。
            _rformat: new RegExp(function() {
              var a = [];
              for (var r in e)
                a.push(r);
              return "(" + a.join("|") + ")";
            }(), "g"),
            // 格式化日期。
            _formatDate: function(a, r) {
              return r.replace(this._rformat, function u(o, d) {
                return typeof e[d] == "function" ? e[d](a) : e[d] in e ? u(o, e[d]) : a[e[d]]();
              });
            },
            // 生成一个随机的 Date 对象。
            _randomDate: function(a, r) {
              return a = a === void 0 ? /* @__PURE__ */ new Date(0) : a, r = r === void 0 ? /* @__PURE__ */ new Date() : r, new Date(Math.random() * (r.getTime() - a.getTime()));
            },
            // 返回一个随机的日期字符串。
            date: function(a) {
              return a = a || "yyyy-MM-dd", this._formatDate(this._randomDate(), a);
            },
            // 返回一个随机的时间字符串。
            time: function(a) {
              return a = a || "HH:mm:ss", this._formatDate(this._randomDate(), a);
            },
            // 返回一个随机的日期和时间字符串。
            datetime: function(a) {
              return a = a || "yyyy-MM-dd HH:mm:ss", this._formatDate(this._randomDate(), a);
            },
            // 返回当前的日期和时间字符串。
            now: function(a, r) {
              arguments.length === 1 && (/year|month|day|hour|minute|second|week/.test(a) || (r = a, a = "")), a = (a || "").toLowerCase(), r = r || "yyyy-MM-dd HH:mm:ss";
              var u = /* @__PURE__ */ new Date();
              switch (a) {
                case "year":
                  u.setMonth(0);
                case "month":
                  u.setDate(1);
                case "week":
                case "day":
                  u.setHours(0);
                case "hour":
                  u.setMinutes(0);
                case "minute":
                  u.setSeconds(0);
                case "second":
                  u.setMilliseconds(0);
              }
              switch (a) {
                case "week":
                  u.setDate(u.getDate() - u.getDay());
              }
              return this._formatDate(u, r);
            }
          };
        },
        /* 8 */
        /***/
        function(n, l, e) {
          (function(a) {
            a.exports = {
              // 常见的广告宽高
              _adSize: [
                "300x250",
                "250x250",
                "240x400",
                "336x280",
                "180x150",
                "720x300",
                "468x60",
                "234x60",
                "88x31",
                "120x90",
                "120x60",
                "120x240",
                "125x125",
                "728x90",
                "160x600",
                "120x600",
                "300x600"
              ],
              // 常见的屏幕宽高
              _screenSize: [
                "320x200",
                "320x240",
                "640x480",
                "800x480",
                "800x480",
                "1024x600",
                "1024x768",
                "1280x800",
                "1440x900",
                "1920x1200",
                "2560x1600"
              ],
              // 常见的视频宽高
              _videoSize: ["720x480", "768x576", "1280x720", "1920x1080"],
              /*
              		        生成一个随机的图片地址。
              
              		        替代图片源
              		            http://fpoimg.com/
              		        参考自 
              		            http://rensanning.iteye.com/blog/1933310
              		            http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
              		    */
              image: function(r, u, o, d, f) {
                return arguments.length === 4 && (f = d, d = void 0), arguments.length === 3 && (f = o, o = void 0), r || (r = this.pick(this._adSize)), u && ~u.indexOf("#") && (u = u.slice(1)), o && ~o.indexOf("#") && (o = o.slice(1)), "http://dummyimage.com/" + r + (u ? "/" + u : "") + (o ? "/" + o : "") + (d ? "." + d : "") + (f ? "&text=" + f : "");
              },
              img: function() {
                return this.image.apply(this, arguments);
              },
              /*
              		        BrandColors
              		        http://brandcolors.net/
              		        A collection of major brand color codes curated by Galen Gidman.
              		        大牌公司的颜色集合
              
              		        // 获取品牌和颜色
              		        $('h2').each(function(index, item){
              		            item = $(item)
              		            console.log('\'' + item.text() + '\'', ':', '\'' + item.next().text() + '\'', ',')
              		        })
              		    */
              _brandColors: {
                "4ormat": "#fb0a2a",
                "500px": "#02adea",
                "About.me (blue)": "#00405d",
                "About.me (yellow)": "#ffcc33",
                Addvocate: "#ff6138",
                Adobe: "#ff0000",
                Aim: "#fcd20b",
                Amazon: "#e47911",
                Android: "#a4c639",
                "Angie's List": "#7fbb00",
                AOL: "#0060a3",
                Atlassian: "#003366",
                Behance: "#053eff",
                "Big Cartel": "#97b538",
                bitly: "#ee6123",
                Blogger: "#fc4f08",
                Boeing: "#0039a6",
                "Booking.com": "#003580",
                Carbonmade: "#613854",
                Cheddar: "#ff7243",
                "Code School": "#3d4944",
                Delicious: "#205cc0",
                Dell: "#3287c1",
                Designmoo: "#e54a4f",
                Deviantart: "#4e6252",
                "Designer News": "#2d72da",
                Devour: "#fd0001",
                DEWALT: "#febd17",
                "Disqus (blue)": "#59a3fc",
                "Disqus (orange)": "#db7132",
                Dribbble: "#ea4c89",
                Dropbox: "#3d9ae8",
                Drupal: "#0c76ab",
                Dunked: "#2a323a",
                eBay: "#89c507",
                Ember: "#f05e1b",
                Engadget: "#00bdf6",
                Envato: "#528036",
                Etsy: "#eb6d20",
                Evernote: "#5ba525",
                "Fab.com": "#dd0017",
                Facebook: "#3b5998",
                Firefox: "#e66000",
                "Flickr (blue)": "#0063dc",
                "Flickr (pink)": "#ff0084",
                Forrst: "#5b9a68",
                Foursquare: "#25a0ca",
                Garmin: "#007cc3",
                GetGlue: "#2d75a2",
                Gimmebar: "#f70078",
                GitHub: "#171515",
                "Google Blue": "#0140ca",
                "Google Green": "#16a61e",
                "Google Red": "#dd1812",
                "Google Yellow": "#fcca03",
                "Google+": "#dd4b39",
                Grooveshark: "#f77f00",
                Groupon: "#82b548",
                "Hacker News": "#ff6600",
                HelloWallet: "#0085ca",
                "Heroku (light)": "#c7c5e6",
                "Heroku (dark)": "#6567a5",
                HootSuite: "#003366",
                Houzz: "#73ba37",
                HTML5: "#ec6231",
                IKEA: "#ffcc33",
                IMDb: "#f3ce13",
                Instagram: "#3f729b",
                Intel: "#0071c5",
                Intuit: "#365ebf",
                Kickstarter: "#76cc1e",
                kippt: "#e03500",
                Kodery: "#00af81",
                LastFM: "#c3000d",
                LinkedIn: "#0e76a8",
                Livestream: "#cf0005",
                Lumo: "#576396",
                Mixpanel: "#a086d3",
                Meetup: "#e51937",
                Nokia: "#183693",
                NVIDIA: "#76b900",
                Opera: "#cc0f16",
                Path: "#e41f11",
                "PayPal (dark)": "#1e477a",
                "PayPal (light)": "#3b7bbf",
                Pinboard: "#0000e6",
                Pinterest: "#c8232c",
                PlayStation: "#665cbe",
                Pocket: "#ee4056",
                Prezi: "#318bff",
                Pusha: "#0f71b4",
                Quora: "#a82400",
                "QUOTE.fm": "#66ceff",
                Rdio: "#008fd5",
                Readability: "#9c0000",
                "Red Hat": "#cc0000",
                Resource: "#7eb400",
                Rockpack: "#0ba6ab",
                Roon: "#62b0d9",
                RSS: "#ee802f",
                Salesforce: "#1798c1",
                Samsung: "#0c4da2",
                Shopify: "#96bf48",
                Skype: "#00aff0",
                Snagajob: "#f47a20",
                Softonic: "#008ace",
                SoundCloud: "#ff7700",
                "Space Box": "#f86960",
                Spotify: "#81b71a",
                Sprint: "#fee100",
                Squarespace: "#121212",
                StackOverflow: "#ef8236",
                Staples: "#cc0000",
                "Status Chart": "#d7584f",
                Stripe: "#008cdd",
                StudyBlue: "#00afe1",
                StumbleUpon: "#f74425",
                "T-Mobile": "#ea0a8e",
                Technorati: "#40a800",
                "The Next Web": "#ef4423",
                Treehouse: "#5cb868",
                Trulia: "#5eab1f",
                Tumblr: "#34526f",
                "Twitch.tv": "#6441a5",
                Twitter: "#00acee",
                TYPO3: "#ff8700",
                Ubuntu: "#dd4814",
                Ustream: "#3388ff",
                Verizon: "#ef1d1d",
                Vimeo: "#86c9ef",
                Vine: "#00a478",
                Virb: "#06afd8",
                "Virgin Media": "#cc0000",
                Wooga: "#5b009c",
                "WordPress (blue)": "#21759b",
                "WordPress (orange)": "#d54e21",
                "WordPress (grey)": "#464646",
                Wunderlist: "#2b88d9",
                XBOX: "#9bc848",
                XING: "#126567",
                "Yahoo!": "#720e9e",
                Yandex: "#ffcc00",
                Yelp: "#c41200",
                YouTube: "#c4302b",
                Zalongo: "#5498dc",
                Zendesk: "#78a300",
                Zerply: "#9dcc7a",
                Zootool: "#5e8b1d"
              },
              _brandNames: function() {
                var r = [];
                for (var u in this._brandColors)
                  r.push(u);
                return r;
              },
              /*
              		        生成一段随机的 Base64 图片编码。
              
              		        https://github.com/imsky/holder
              		        Holder renders image placeholders entirely on the client side.
              
              		        dataImageHolder: function(size) {
              		            return 'holder.js/' + size
              		        },
              		    */
              dataImage: function(r, u) {
                var o;
                if (typeof document < "u")
                  o = document.createElement("canvas");
                else {
                  var d = a.require("canvas");
                  o = new d();
                }
                var f = o && o.getContext && o.getContext("2d");
                if (!o || !f)
                  return "";
                r || (r = this.pick(this._adSize)), u = u !== void 0 ? u : r, r = r.split("x");
                var c = parseInt(r[0], 10), p = parseInt(r[1], 10), g = this._brandColors[this.pick(this._brandNames())], _ = "#FFF", x = 14, m = "sans-serif";
                return o.width = c, o.height = p, f.textAlign = "center", f.textBaseline = "middle", f.fillStyle = g, f.fillRect(0, 0, c, p), f.fillStyle = _, f.font = "bold " + x + "px " + m, f.fillText(u, c / 2, p / 2, c), o.toDataURL("image/png");
              }
            };
          }).call(l, e(9)(n));
        },
        /* 9 */
        /***/
        function(n, l) {
          n.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {
            }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e;
          };
        },
        /* 10 */
        /***/
        function(n, l, e) {
          var a = e(11), r = e(12);
          n.exports = {
            // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
            color: function(u) {
              return u || r[u] ? r[u].nicer : this.hex();
            },
            // #DAC0DE
            hex: function() {
              var u = this._goldenRatioColor(), o = a.hsv2rgb(u), d = a.rgb2hex(o[0], o[1], o[2]);
              return d;
            },
            // rgb(128,255,255)
            rgb: function() {
              var u = this._goldenRatioColor(), o = a.hsv2rgb(u);
              return "rgb(" + parseInt(o[0], 10) + ", " + parseInt(o[1], 10) + ", " + parseInt(o[2], 10) + ")";
            },
            // rgba(128,255,255,0.3)
            rgba: function() {
              var u = this._goldenRatioColor(), o = a.hsv2rgb(u);
              return "rgba(" + parseInt(o[0], 10) + ", " + parseInt(o[1], 10) + ", " + parseInt(o[2], 10) + ", " + Math.random().toFixed(2) + ")";
            },
            // hsl(300,80%,90%)
            hsl: function() {
              var u = this._goldenRatioColor(), o = a.hsv2hsl(u);
              return "hsl(" + parseInt(o[0], 10) + ", " + parseInt(o[1], 10) + ", " + parseInt(o[2], 10) + ")";
            },
            // http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
            // https://github.com/devongovett/color-generator/blob/master/index.js
            // 随机生成一个有吸引力的颜色。
            _goldenRatioColor: function(u, o) {
              return this._goldenRatio = 0.618033988749895, this._hue = this._hue || Math.random(), this._hue += this._goldenRatio, this._hue %= 1, typeof u != "number" && (u = 0.5), typeof o != "number" && (o = 0.95), [
                this._hue * 360,
                u * 100,
                o * 100
              ];
            }
          };
        },
        /* 11 */
        /***/
        function(n, l) {
          n.exports = {
            rgb2hsl: function(a) {
              var r = a[0] / 255, u = a[1] / 255, o = a[2] / 255, d = Math.min(r, u, o), f = Math.max(r, u, o), c = f - d, p, g, _;
              return f == d ? p = 0 : r == f ? p = (u - o) / c : u == f ? p = 2 + (o - r) / c : o == f && (p = 4 + (r - u) / c), p = Math.min(p * 60, 360), p < 0 && (p += 360), _ = (d + f) / 2, f == d ? g = 0 : _ <= 0.5 ? g = c / (f + d) : g = c / (2 - f - d), [p, g * 100, _ * 100];
            },
            rgb2hsv: function(a) {
              var r = a[0], u = a[1], o = a[2], d = Math.min(r, u, o), f = Math.max(r, u, o), c = f - d, p, g, _;
              return f === 0 ? g = 0 : g = c / f * 1e3 / 10, f == d ? p = 0 : r == f ? p = (u - o) / c : u == f ? p = 2 + (o - r) / c : o == f && (p = 4 + (r - u) / c), p = Math.min(p * 60, 360), p < 0 && (p += 360), _ = f / 255 * 1e3 / 10, [p, g, _];
            },
            hsl2rgb: function(a) {
              var r = a[0] / 360, u = a[1] / 100, o = a[2] / 100, d, f, c, p, g;
              if (u === 0)
                return g = o * 255, [g, g, g];
              o < 0.5 ? f = o * (1 + u) : f = o + u - o * u, d = 2 * o - f, p = [0, 0, 0];
              for (var _ = 0; _ < 3; _++)
                c = r + 1 / 3 * -(_ - 1), c < 0 && c++, c > 1 && c--, 6 * c < 1 ? g = d + (f - d) * 6 * c : 2 * c < 1 ? g = f : 3 * c < 2 ? g = d + (f - d) * (2 / 3 - c) * 6 : g = d, p[_] = g * 255;
              return p;
            },
            hsl2hsv: function(a) {
              var r = a[0], u = a[1] / 100, o = a[2] / 100, d, f;
              return o *= 2, u *= o <= 1 ? o : 2 - o, f = (o + u) / 2, d = 2 * u / (o + u), [r, d * 100, f * 100];
            },
            hsv2rgb: function(a) {
              var r = a[0] / 60, u = a[1] / 100, o = a[2] / 100, d = Math.floor(r) % 6, f = r - Math.floor(r), c = 255 * o * (1 - u), p = 255 * o * (1 - u * f), g = 255 * o * (1 - u * (1 - f));
              switch (o = 255 * o, d) {
                case 0:
                  return [o, g, c];
                case 1:
                  return [p, o, c];
                case 2:
                  return [c, o, g];
                case 3:
                  return [c, p, o];
                case 4:
                  return [g, c, o];
                case 5:
                  return [o, c, p];
              }
            },
            hsv2hsl: function(a) {
              var r = a[0], u = a[1] / 100, o = a[2] / 100, d, f;
              return f = (2 - u) * o, d = u * o, d /= f <= 1 ? f : 2 - f, f /= 2, [r, d * 100, f * 100];
            },
            // http://www.140byt.es/keywords/color
            rgb2hex: function(e, a, r) {
              return "#" + ((256 + e << 8 | a) << 8 | r).toString(16).slice(1);
            },
            hex2rgb: function(e) {
              return e = "0x" + e.slice(1).replace(e.length > 4 ? e : /./g, "$&$&") | 0, [e >> 16, e >> 8 & 255, e & 255];
            }
          };
        },
        /* 12 */
        /***/
        function(n, l) {
          n.exports = {
            // name value nicer
            navy: {
              value: "#000080",
              nicer: "#001F3F"
            },
            blue: {
              value: "#0000ff",
              nicer: "#0074D9"
            },
            aqua: {
              value: "#00ffff",
              nicer: "#7FDBFF"
            },
            teal: {
              value: "#008080",
              nicer: "#39CCCC"
            },
            olive: {
              value: "#008000",
              nicer: "#3D9970"
            },
            green: {
              value: "#008000",
              nicer: "#2ECC40"
            },
            lime: {
              value: "#00ff00",
              nicer: "#01FF70"
            },
            yellow: {
              value: "#ffff00",
              nicer: "#FFDC00"
            },
            orange: {
              value: "#ffa500",
              nicer: "#FF851B"
            },
            red: {
              value: "#ff0000",
              nicer: "#FF4136"
            },
            maroon: {
              value: "#800000",
              nicer: "#85144B"
            },
            fuchsia: {
              value: "#ff00ff",
              nicer: "#F012BE"
            },
            purple: {
              value: "#800080",
              nicer: "#B10DC9"
            },
            silver: {
              value: "#c0c0c0",
              nicer: "#DDDDDD"
            },
            gray: {
              value: "#808080",
              nicer: "#AAAAAA"
            },
            black: {
              value: "#000000",
              nicer: "#111111"
            },
            white: {
              value: "#FFFFFF",
              nicer: "#FFFFFF"
            }
          };
        },
        /* 13 */
        /***/
        function(n, l, e) {
          var a = e(6), r = e(14);
          function u(o, d, f, c) {
            return f === void 0 ? a.natural(o, d) : (
              // ()
              c === void 0 ? f : (
                // ( len )
                a.natural(parseInt(f, 10), parseInt(c, 10))
              )
            );
          }
          n.exports = {
            // 随机生成一段文本。
            paragraph: function(o, d) {
              for (var f = u(3, 7, o, d), c = [], p = 0; p < f; p++)
                c.push(this.sentence());
              return c.join(" ");
            },
            // 
            cparagraph: function(o, d) {
              for (var f = u(3, 7, o, d), c = [], p = 0; p < f; p++)
                c.push(this.csentence());
              return c.join("");
            },
            // 随机生成一个句子，第一个单词的首字母大写。
            sentence: function(o, d) {
              for (var f = u(12, 18, o, d), c = [], p = 0; p < f; p++)
                c.push(this.word());
              return r.capitalize(c.join(" ")) + ".";
            },
            // 随机生成一个中文句子。
            csentence: function(o, d) {
              for (var f = u(12, 18, o, d), c = [], p = 0; p < f; p++)
                c.push(this.cword());
              return c.join("") + "。";
            },
            // 随机生成一个单词。
            word: function(o, d) {
              for (var f = u(3, 10, o, d), c = "", p = 0; p < f; p++)
                c += a.character("lower");
              return c;
            },
            // 随机生成一个或多个汉字。
            cword: function(o, d, f) {
              var c = "的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞", p;
              switch (arguments.length) {
                case 0:
                  o = c, p = 1;
                  break;
                case 1:
                  typeof arguments[0] == "string" ? p = 1 : (p = o, o = c);
                  break;
                case 2:
                  typeof arguments[0] == "string" ? p = d : (p = this.natural(o, d), o = c);
                  break;
                case 3:
                  p = this.natural(d, f);
                  break;
              }
              for (var g = "", _ = 0; _ < p; _++)
                g += o.charAt(this.natural(0, o.length - 1));
              return g;
            },
            // 随机生成一句标题，其中每个单词的首字母大写。
            title: function(o, d) {
              for (var f = u(3, 7, o, d), c = [], p = 0; p < f; p++)
                c.push(this.capitalize(this.word()));
              return c.join(" ");
            },
            // 随机生成一句中文标题。
            ctitle: function(o, d) {
              for (var f = u(3, 7, o, d), c = [], p = 0; p < f; p++)
                c.push(this.cword());
              return c.join("");
            }
          };
        },
        /* 14 */
        /***/
        function(n, l, e) {
          var a = e(3);
          n.exports = {
            // 把字符串的第一个字母转换为大写。
            capitalize: function(r) {
              return (r + "").charAt(0).toUpperCase() + (r + "").substr(1);
            },
            // 把字符串转换为大写。
            upper: function(r) {
              return (r + "").toUpperCase();
            },
            // 把字符串转换为小写。
            lower: function(r) {
              return (r + "").toLowerCase();
            },
            // 从数组中随机选取一个元素，并返回。
            pick: function(u, o, d) {
              return a.isArray(u) ? (o === void 0 && (o = 1), d === void 0 && (d = o)) : (u = [].slice.call(arguments), o = 1, d = 1), o === 1 && d === 1 ? u[this.natural(0, u.length - 1)] : this.shuffle(u, o, d);
            },
            /*
            			    打乱数组中元素的顺序，并返回。
            			    Given an array, scramble the order and return it.
            
            			    其他的实现思路：
            			        // https://code.google.com/p/jslibs/wiki/JavascriptTips
            			        result = result.sort(function() {
            			            return Math.random() - 0.5
            			        })
            			*/
            shuffle: function(u, o, d) {
              u = u || [];
              for (var f = u.slice(0), c = [], p = 0, g = f.length, _ = 0; _ < g; _++)
                p = this.natural(0, f.length - 1), c.push(f[p]), f.splice(p, 1);
              switch (arguments.length) {
                case 0:
                case 1:
                  return c;
                case 2:
                  d = o;
                case 3:
                  return o = parseInt(o, 10), d = parseInt(d, 10), c.slice(0, this.natural(o, d));
              }
            },
            /*
            			    * Random.order(item, item)
            			    * Random.order([item, item ...])
            
            			    顺序获取数组中的元素
            
            			    [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)
            
            			    不支持单独调用！
            			*/
            order: function r(u) {
              r.cache = r.cache || {}, arguments.length > 1 && (u = [].slice.call(arguments, 0));
              var o = r.options, d = o.context.templatePath.join("."), f = r.cache[d] = r.cache[d] || {
                index: 0,
                array: u
              };
              return f.array[f.index++ % f.array.length];
            }
          };
        },
        /* 15 */
        /***/
        function(n, l) {
          n.exports = {
            // 随机生成一个常见的英文名。
            first: function() {
              var e = [
                // male
                "James",
                "John",
                "Robert",
                "Michael",
                "William",
                "David",
                "Richard",
                "Charles",
                "Joseph",
                "Thomas",
                "Christopher",
                "Daniel",
                "Paul",
                "Mark",
                "Donald",
                "George",
                "Kenneth",
                "Steven",
                "Edward",
                "Brian",
                "Ronald",
                "Anthony",
                "Kevin",
                "Jason",
                "Matthew",
                "Gary",
                "Timothy",
                "Jose",
                "Larry",
                "Jeffrey",
                "Frank",
                "Scott",
                "Eric"
              ].concat([
                // female
                "Mary",
                "Patricia",
                "Linda",
                "Barbara",
                "Elizabeth",
                "Jennifer",
                "Maria",
                "Susan",
                "Margaret",
                "Dorothy",
                "Lisa",
                "Nancy",
                "Karen",
                "Betty",
                "Helen",
                "Sandra",
                "Donna",
                "Carol",
                "Ruth",
                "Sharon",
                "Michelle",
                "Laura",
                "Sarah",
                "Kimberly",
                "Deborah",
                "Jessica",
                "Shirley",
                "Cynthia",
                "Angela",
                "Melissa",
                "Brenda",
                "Amy",
                "Anna"
              ]);
              return this.pick(e);
            },
            // 随机生成一个常见的英文姓。
            last: function() {
              var e = [
                "Smith",
                "Johnson",
                "Williams",
                "Brown",
                "Jones",
                "Miller",
                "Davis",
                "Garcia",
                "Rodriguez",
                "Wilson",
                "Martinez",
                "Anderson",
                "Taylor",
                "Thomas",
                "Hernandez",
                "Moore",
                "Martin",
                "Jackson",
                "Thompson",
                "White",
                "Lopez",
                "Lee",
                "Gonzalez",
                "Harris",
                "Clark",
                "Lewis",
                "Robinson",
                "Walker",
                "Perez",
                "Hall",
                "Young",
                "Allen"
              ];
              return this.pick(e);
            },
            // 随机生成一个常见的英文姓名。
            name: function(e) {
              return this.first() + " " + (e ? this.first() + " " : "") + this.last();
            },
            /*
                随机生成一个常见的中文姓。
                [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
                [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
             */
            cfirst: function() {
              var e = "王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文".split(" ");
              return this.pick(e);
            },
            /*
                随机生成一个常见的中文名。
                [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
             */
            clast: function() {
              var e = "伟 芳 娜 秀英 敏 静 丽 强 磊 军 洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 平 刚 桂英".split(" ");
              return this.pick(e);
            },
            // 随机生成一个常见的中文姓名。
            cname: function() {
              return this.cfirst() + this.clast();
            }
          };
        },
        /* 16 */
        /***/
        function(n, l) {
          n.exports = {
            /*
            		        随机生成一个 URL。
            
            		        [URL 规范](http://www.w3.org/Addressing/URL/url-spec.txt)
            		            http                    Hypertext Transfer Protocol 
            		            ftp                     File Transfer protocol 
            		            gopher                  The Gopher protocol 
            		            mailto                  Electronic mail address 
            		            mid                     Message identifiers for electronic mail 
            		            cid                     Content identifiers for MIME body part 
            		            news                    Usenet news 
            		            nntp                    Usenet news for local NNTP access only 
            		            prospero                Access using the prospero protocols 
            		            telnet rlogin tn3270    Reference to interactive sessions
            		            wais                    Wide Area Information Servers 
            		    */
            url: function(e, a) {
              return (e || this.protocol()) + "://" + // protocol?
              (a || this.domain()) + // host?
              "/" + this.word();
            },
            // 随机生成一个 URL 协议。
            protocol: function() {
              return this.pick(
                // 协议簇
                "http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais".split(" ")
              );
            },
            // 随机生成一个域名。
            domain: function(e) {
              return this.word() + "." + (e || this.tld());
            },
            /*
                随机生成一个顶级域名。
                国际顶级域名 international top-level domain-names, iTLDs
                国家顶级域名 national top-level domainnames, nTLDs
                [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
            */
            tld: function() {
              return this.pick(
                // 域名后缀
                "com net org edu gov int mil cn com.cn net.cn gov.cn org.cn 中国 中国互联.公司 中国互联.网络 tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw".split(" ")
              );
            },
            // 随机生成一个邮件地址。
            email: function(e) {
              return this.character("lower") + "." + this.word() + "@" + (e || this.word() + "." + this.tld());
            },
            // 随机生成一个 IP 地址。
            ip: function() {
              return this.natural(0, 255) + "." + this.natural(0, 255) + "." + this.natural(0, 255) + "." + this.natural(0, 255);
            }
          };
        },
        /* 17 */
        /***/
        function(n, l, e) {
          var a = e(18), r = ["东北", "华北", "华东", "华中", "华南", "西南", "西北"];
          n.exports = {
            // 随机生成一个大区。
            region: function() {
              return this.pick(r);
            },
            // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
            province: function() {
              return this.pick(a).name;
            },
            // 随机生成一个（中国）市。
            city: function(u) {
              var o = this.pick(a), d = this.pick(o.children);
              return u ? [o.name, d.name].join(" ") : d.name;
            },
            // 随机生成一个（中国）县。
            county: function(u) {
              var o = this.pick(a), d = this.pick(o.children), f = this.pick(d.children) || {
                name: "-"
              };
              return u ? [o.name, d.name, f.name].join(" ") : f.name;
            },
            // 随机生成一个邮政编码（六位数字）。
            zip: function(u) {
              for (var o = "", d = 0; d < (u || 6); d++)
                o += this.natural(0, 9);
              return o;
            }
            // address: function() {},
            // phone: function() {},
            // areacode: function() {},
            // street: function() {},
            // street_suffixes: function() {},
            // street_suffix: function() {},
            // states: function() {},
            // state: function() {},
          };
        },
        /* 18 */
        /***/
        function(n, l) {
          var e = {
            11e4: "北京",
            110100: "北京市",
            110101: "东城区",
            110102: "西城区",
            110105: "朝阳区",
            110106: "丰台区",
            110107: "石景山区",
            110108: "海淀区",
            110109: "门头沟区",
            110111: "房山区",
            110112: "通州区",
            110113: "顺义区",
            110114: "昌平区",
            110115: "大兴区",
            110116: "怀柔区",
            110117: "平谷区",
            110228: "密云县",
            110229: "延庆县",
            110230: "其它区",
            12e4: "天津",
            120100: "天津市",
            120101: "和平区",
            120102: "河东区",
            120103: "河西区",
            120104: "南开区",
            120105: "河北区",
            120106: "红桥区",
            120110: "东丽区",
            120111: "西青区",
            120112: "津南区",
            120113: "北辰区",
            120114: "武清区",
            120115: "宝坻区",
            120116: "滨海新区",
            120221: "宁河县",
            120223: "静海县",
            120225: "蓟县",
            120226: "其它区",
            13e4: "河北省",
            130100: "石家庄市",
            130102: "长安区",
            130103: "桥东区",
            130104: "桥西区",
            130105: "新华区",
            130107: "井陉矿区",
            130108: "裕华区",
            130121: "井陉县",
            130123: "正定县",
            130124: "栾城县",
            130125: "行唐县",
            130126: "灵寿县",
            130127: "高邑县",
            130128: "深泽县",
            130129: "赞皇县",
            130130: "无极县",
            130131: "平山县",
            130132: "元氏县",
            130133: "赵县",
            130181: "辛集市",
            130182: "藁城市",
            130183: "晋州市",
            130184: "新乐市",
            130185: "鹿泉市",
            130186: "其它区",
            130200: "唐山市",
            130202: "路南区",
            130203: "路北区",
            130204: "古冶区",
            130205: "开平区",
            130207: "丰南区",
            130208: "丰润区",
            130223: "滦县",
            130224: "滦南县",
            130225: "乐亭县",
            130227: "迁西县",
            130229: "玉田县",
            130230: "曹妃甸区",
            130281: "遵化市",
            130283: "迁安市",
            130284: "其它区",
            130300: "秦皇岛市",
            130302: "海港区",
            130303: "山海关区",
            130304: "北戴河区",
            130321: "青龙满族自治县",
            130322: "昌黎县",
            130323: "抚宁县",
            130324: "卢龙县",
            130398: "其它区",
            130400: "邯郸市",
            130402: "邯山区",
            130403: "丛台区",
            130404: "复兴区",
            130406: "峰峰矿区",
            130421: "邯郸县",
            130423: "临漳县",
            130424: "成安县",
            130425: "大名县",
            130426: "涉县",
            130427: "磁县",
            130428: "肥乡县",
            130429: "永年县",
            130430: "邱县",
            130431: "鸡泽县",
            130432: "广平县",
            130433: "馆陶县",
            130434: "魏县",
            130435: "曲周县",
            130481: "武安市",
            130482: "其它区",
            130500: "邢台市",
            130502: "桥东区",
            130503: "桥西区",
            130521: "邢台县",
            130522: "临城县",
            130523: "内丘县",
            130524: "柏乡县",
            130525: "隆尧县",
            130526: "任县",
            130527: "南和县",
            130528: "宁晋县",
            130529: "巨鹿县",
            130530: "新河县",
            130531: "广宗县",
            130532: "平乡县",
            130533: "威县",
            130534: "清河县",
            130535: "临西县",
            130581: "南宫市",
            130582: "沙河市",
            130583: "其它区",
            130600: "保定市",
            130602: "新市区",
            130603: "北市区",
            130604: "南市区",
            130621: "满城县",
            130622: "清苑县",
            130623: "涞水县",
            130624: "阜平县",
            130625: "徐水县",
            130626: "定兴县",
            130627: "唐县",
            130628: "高阳县",
            130629: "容城县",
            130630: "涞源县",
            130631: "望都县",
            130632: "安新县",
            130633: "易县",
            130634: "曲阳县",
            130635: "蠡县",
            130636: "顺平县",
            130637: "博野县",
            130638: "雄县",
            130681: "涿州市",
            130682: "定州市",
            130683: "安国市",
            130684: "高碑店市",
            130699: "其它区",
            130700: "张家口市",
            130702: "桥东区",
            130703: "桥西区",
            130705: "宣化区",
            130706: "下花园区",
            130721: "宣化县",
            130722: "张北县",
            130723: "康保县",
            130724: "沽源县",
            130725: "尚义县",
            130726: "蔚县",
            130727: "阳原县",
            130728: "怀安县",
            130729: "万全县",
            130730: "怀来县",
            130731: "涿鹿县",
            130732: "赤城县",
            130733: "崇礼县",
            130734: "其它区",
            130800: "承德市",
            130802: "双桥区",
            130803: "双滦区",
            130804: "鹰手营子矿区",
            130821: "承德县",
            130822: "兴隆县",
            130823: "平泉县",
            130824: "滦平县",
            130825: "隆化县",
            130826: "丰宁满族自治县",
            130827: "宽城满族自治县",
            130828: "围场满族蒙古族自治县",
            130829: "其它区",
            130900: "沧州市",
            130902: "新华区",
            130903: "运河区",
            130921: "沧县",
            130922: "青县",
            130923: "东光县",
            130924: "海兴县",
            130925: "盐山县",
            130926: "肃宁县",
            130927: "南皮县",
            130928: "吴桥县",
            130929: "献县",
            130930: "孟村回族自治县",
            130981: "泊头市",
            130982: "任丘市",
            130983: "黄骅市",
            130984: "河间市",
            130985: "其它区",
            131e3: "廊坊市",
            131002: "安次区",
            131003: "广阳区",
            131022: "固安县",
            131023: "永清县",
            131024: "香河县",
            131025: "大城县",
            131026: "文安县",
            131028: "大厂回族自治县",
            131081: "霸州市",
            131082: "三河市",
            131083: "其它区",
            131100: "衡水市",
            131102: "桃城区",
            131121: "枣强县",
            131122: "武邑县",
            131123: "武强县",
            131124: "饶阳县",
            131125: "安平县",
            131126: "故城县",
            131127: "景县",
            131128: "阜城县",
            131181: "冀州市",
            131182: "深州市",
            131183: "其它区",
            14e4: "山西省",
            140100: "太原市",
            140105: "小店区",
            140106: "迎泽区",
            140107: "杏花岭区",
            140108: "尖草坪区",
            140109: "万柏林区",
            140110: "晋源区",
            140121: "清徐县",
            140122: "阳曲县",
            140123: "娄烦县",
            140181: "古交市",
            140182: "其它区",
            140200: "大同市",
            140202: "城区",
            140203: "矿区",
            140211: "南郊区",
            140212: "新荣区",
            140221: "阳高县",
            140222: "天镇县",
            140223: "广灵县",
            140224: "灵丘县",
            140225: "浑源县",
            140226: "左云县",
            140227: "大同县",
            140228: "其它区",
            140300: "阳泉市",
            140302: "城区",
            140303: "矿区",
            140311: "郊区",
            140321: "平定县",
            140322: "盂县",
            140323: "其它区",
            140400: "长治市",
            140421: "长治县",
            140423: "襄垣县",
            140424: "屯留县",
            140425: "平顺县",
            140426: "黎城县",
            140427: "壶关县",
            140428: "长子县",
            140429: "武乡县",
            140430: "沁县",
            140431: "沁源县",
            140481: "潞城市",
            140482: "城区",
            140483: "郊区",
            140485: "其它区",
            140500: "晋城市",
            140502: "城区",
            140521: "沁水县",
            140522: "阳城县",
            140524: "陵川县",
            140525: "泽州县",
            140581: "高平市",
            140582: "其它区",
            140600: "朔州市",
            140602: "朔城区",
            140603: "平鲁区",
            140621: "山阴县",
            140622: "应县",
            140623: "右玉县",
            140624: "怀仁县",
            140625: "其它区",
            140700: "晋中市",
            140702: "榆次区",
            140721: "榆社县",
            140722: "左权县",
            140723: "和顺县",
            140724: "昔阳县",
            140725: "寿阳县",
            140726: "太谷县",
            140727: "祁县",
            140728: "平遥县",
            140729: "灵石县",
            140781: "介休市",
            140782: "其它区",
            140800: "运城市",
            140802: "盐湖区",
            140821: "临猗县",
            140822: "万荣县",
            140823: "闻喜县",
            140824: "稷山县",
            140825: "新绛县",
            140826: "绛县",
            140827: "垣曲县",
            140828: "夏县",
            140829: "平陆县",
            140830: "芮城县",
            140881: "永济市",
            140882: "河津市",
            140883: "其它区",
            140900: "忻州市",
            140902: "忻府区",
            140921: "定襄县",
            140922: "五台县",
            140923: "代县",
            140924: "繁峙县",
            140925: "宁武县",
            140926: "静乐县",
            140927: "神池县",
            140928: "五寨县",
            140929: "岢岚县",
            140930: "河曲县",
            140931: "保德县",
            140932: "偏关县",
            140981: "原平市",
            140982: "其它区",
            141e3: "临汾市",
            141002: "尧都区",
            141021: "曲沃县",
            141022: "翼城县",
            141023: "襄汾县",
            141024: "洪洞县",
            141025: "古县",
            141026: "安泽县",
            141027: "浮山县",
            141028: "吉县",
            141029: "乡宁县",
            141030: "大宁县",
            141031: "隰县",
            141032: "永和县",
            141033: "蒲县",
            141034: "汾西县",
            141081: "侯马市",
            141082: "霍州市",
            141083: "其它区",
            141100: "吕梁市",
            141102: "离石区",
            141121: "文水县",
            141122: "交城县",
            141123: "兴县",
            141124: "临县",
            141125: "柳林县",
            141126: "石楼县",
            141127: "岚县",
            141128: "方山县",
            141129: "中阳县",
            141130: "交口县",
            141181: "孝义市",
            141182: "汾阳市",
            141183: "其它区",
            15e4: "内蒙古自治区",
            150100: "呼和浩特市",
            150102: "新城区",
            150103: "回民区",
            150104: "玉泉区",
            150105: "赛罕区",
            150121: "土默特左旗",
            150122: "托克托县",
            150123: "和林格尔县",
            150124: "清水河县",
            150125: "武川县",
            150126: "其它区",
            150200: "包头市",
            150202: "东河区",
            150203: "昆都仑区",
            150204: "青山区",
            150205: "石拐区",
            150206: "白云鄂博矿区",
            150207: "九原区",
            150221: "土默特右旗",
            150222: "固阳县",
            150223: "达尔罕茂明安联合旗",
            150224: "其它区",
            150300: "乌海市",
            150302: "海勃湾区",
            150303: "海南区",
            150304: "乌达区",
            150305: "其它区",
            150400: "赤峰市",
            150402: "红山区",
            150403: "元宝山区",
            150404: "松山区",
            150421: "阿鲁科尔沁旗",
            150422: "巴林左旗",
            150423: "巴林右旗",
            150424: "林西县",
            150425: "克什克腾旗",
            150426: "翁牛特旗",
            150428: "喀喇沁旗",
            150429: "宁城县",
            150430: "敖汉旗",
            150431: "其它区",
            150500: "通辽市",
            150502: "科尔沁区",
            150521: "科尔沁左翼中旗",
            150522: "科尔沁左翼后旗",
            150523: "开鲁县",
            150524: "库伦旗",
            150525: "奈曼旗",
            150526: "扎鲁特旗",
            150581: "霍林郭勒市",
            150582: "其它区",
            150600: "鄂尔多斯市",
            150602: "东胜区",
            150621: "达拉特旗",
            150622: "准格尔旗",
            150623: "鄂托克前旗",
            150624: "鄂托克旗",
            150625: "杭锦旗",
            150626: "乌审旗",
            150627: "伊金霍洛旗",
            150628: "其它区",
            150700: "呼伦贝尔市",
            150702: "海拉尔区",
            150703: "扎赉诺尔区",
            150721: "阿荣旗",
            150722: "莫力达瓦达斡尔族自治旗",
            150723: "鄂伦春自治旗",
            150724: "鄂温克族自治旗",
            150725: "陈巴尔虎旗",
            150726: "新巴尔虎左旗",
            150727: "新巴尔虎右旗",
            150781: "满洲里市",
            150782: "牙克石市",
            150783: "扎兰屯市",
            150784: "额尔古纳市",
            150785: "根河市",
            150786: "其它区",
            150800: "巴彦淖尔市",
            150802: "临河区",
            150821: "五原县",
            150822: "磴口县",
            150823: "乌拉特前旗",
            150824: "乌拉特中旗",
            150825: "乌拉特后旗",
            150826: "杭锦后旗",
            150827: "其它区",
            150900: "乌兰察布市",
            150902: "集宁区",
            150921: "卓资县",
            150922: "化德县",
            150923: "商都县",
            150924: "兴和县",
            150925: "凉城县",
            150926: "察哈尔右翼前旗",
            150927: "察哈尔右翼中旗",
            150928: "察哈尔右翼后旗",
            150929: "四子王旗",
            150981: "丰镇市",
            150982: "其它区",
            152200: "兴安盟",
            152201: "乌兰浩特市",
            152202: "阿尔山市",
            152221: "科尔沁右翼前旗",
            152222: "科尔沁右翼中旗",
            152223: "扎赉特旗",
            152224: "突泉县",
            152225: "其它区",
            152500: "锡林郭勒盟",
            152501: "二连浩特市",
            152502: "锡林浩特市",
            152522: "阿巴嘎旗",
            152523: "苏尼特左旗",
            152524: "苏尼特右旗",
            152525: "东乌珠穆沁旗",
            152526: "西乌珠穆沁旗",
            152527: "太仆寺旗",
            152528: "镶黄旗",
            152529: "正镶白旗",
            152530: "正蓝旗",
            152531: "多伦县",
            152532: "其它区",
            152900: "阿拉善盟",
            152921: "阿拉善左旗",
            152922: "阿拉善右旗",
            152923: "额济纳旗",
            152924: "其它区",
            21e4: "辽宁省",
            210100: "沈阳市",
            210102: "和平区",
            210103: "沈河区",
            210104: "大东区",
            210105: "皇姑区",
            210106: "铁西区",
            210111: "苏家屯区",
            210112: "东陵区",
            210113: "新城子区",
            210114: "于洪区",
            210122: "辽中县",
            210123: "康平县",
            210124: "法库县",
            210181: "新民市",
            210184: "沈北新区",
            210185: "其它区",
            210200: "大连市",
            210202: "中山区",
            210203: "西岗区",
            210204: "沙河口区",
            210211: "甘井子区",
            210212: "旅顺口区",
            210213: "金州区",
            210224: "长海县",
            210281: "瓦房店市",
            210282: "普兰店市",
            210283: "庄河市",
            210298: "其它区",
            210300: "鞍山市",
            210302: "铁东区",
            210303: "铁西区",
            210304: "立山区",
            210311: "千山区",
            210321: "台安县",
            210323: "岫岩满族自治县",
            210381: "海城市",
            210382: "其它区",
            210400: "抚顺市",
            210402: "新抚区",
            210403: "东洲区",
            210404: "望花区",
            210411: "顺城区",
            210421: "抚顺县",
            210422: "新宾满族自治县",
            210423: "清原满族自治县",
            210424: "其它区",
            210500: "本溪市",
            210502: "平山区",
            210503: "溪湖区",
            210504: "明山区",
            210505: "南芬区",
            210521: "本溪满族自治县",
            210522: "桓仁满族自治县",
            210523: "其它区",
            210600: "丹东市",
            210602: "元宝区",
            210603: "振兴区",
            210604: "振安区",
            210624: "宽甸满族自治县",
            210681: "东港市",
            210682: "凤城市",
            210683: "其它区",
            210700: "锦州市",
            210702: "古塔区",
            210703: "凌河区",
            210711: "太和区",
            210726: "黑山县",
            210727: "义县",
            210781: "凌海市",
            210782: "北镇市",
            210783: "其它区",
            210800: "营口市",
            210802: "站前区",
            210803: "西市区",
            210804: "鲅鱼圈区",
            210811: "老边区",
            210881: "盖州市",
            210882: "大石桥市",
            210883: "其它区",
            210900: "阜新市",
            210902: "海州区",
            210903: "新邱区",
            210904: "太平区",
            210905: "清河门区",
            210911: "细河区",
            210921: "阜新蒙古族自治县",
            210922: "彰武县",
            210923: "其它区",
            211e3: "辽阳市",
            211002: "白塔区",
            211003: "文圣区",
            211004: "宏伟区",
            211005: "弓长岭区",
            211011: "太子河区",
            211021: "辽阳县",
            211081: "灯塔市",
            211082: "其它区",
            211100: "盘锦市",
            211102: "双台子区",
            211103: "兴隆台区",
            211121: "大洼县",
            211122: "盘山县",
            211123: "其它区",
            211200: "铁岭市",
            211202: "银州区",
            211204: "清河区",
            211221: "铁岭县",
            211223: "西丰县",
            211224: "昌图县",
            211281: "调兵山市",
            211282: "开原市",
            211283: "其它区",
            211300: "朝阳市",
            211302: "双塔区",
            211303: "龙城区",
            211321: "朝阳县",
            211322: "建平县",
            211324: "喀喇沁左翼蒙古族自治县",
            211381: "北票市",
            211382: "凌源市",
            211383: "其它区",
            211400: "葫芦岛市",
            211402: "连山区",
            211403: "龙港区",
            211404: "南票区",
            211421: "绥中县",
            211422: "建昌县",
            211481: "兴城市",
            211482: "其它区",
            22e4: "吉林省",
            220100: "长春市",
            220102: "南关区",
            220103: "宽城区",
            220104: "朝阳区",
            220105: "二道区",
            220106: "绿园区",
            220112: "双阳区",
            220122: "农安县",
            220181: "九台市",
            220182: "榆树市",
            220183: "德惠市",
            220188: "其它区",
            220200: "吉林市",
            220202: "昌邑区",
            220203: "龙潭区",
            220204: "船营区",
            220211: "丰满区",
            220221: "永吉县",
            220281: "蛟河市",
            220282: "桦甸市",
            220283: "舒兰市",
            220284: "磐石市",
            220285: "其它区",
            220300: "四平市",
            220302: "铁西区",
            220303: "铁东区",
            220322: "梨树县",
            220323: "伊通满族自治县",
            220381: "公主岭市",
            220382: "双辽市",
            220383: "其它区",
            220400: "辽源市",
            220402: "龙山区",
            220403: "西安区",
            220421: "东丰县",
            220422: "东辽县",
            220423: "其它区",
            220500: "通化市",
            220502: "东昌区",
            220503: "二道江区",
            220521: "通化县",
            220523: "辉南县",
            220524: "柳河县",
            220581: "梅河口市",
            220582: "集安市",
            220583: "其它区",
            220600: "白山市",
            220602: "浑江区",
            220621: "抚松县",
            220622: "靖宇县",
            220623: "长白朝鲜族自治县",
            220625: "江源区",
            220681: "临江市",
            220682: "其它区",
            220700: "松原市",
            220702: "宁江区",
            220721: "前郭尔罗斯蒙古族自治县",
            220722: "长岭县",
            220723: "乾安县",
            220724: "扶余市",
            220725: "其它区",
            220800: "白城市",
            220802: "洮北区",
            220821: "镇赉县",
            220822: "通榆县",
            220881: "洮南市",
            220882: "大安市",
            220883: "其它区",
            222400: "延边朝鲜族自治州",
            222401: "延吉市",
            222402: "图们市",
            222403: "敦化市",
            222404: "珲春市",
            222405: "龙井市",
            222406: "和龙市",
            222424: "汪清县",
            222426: "安图县",
            222427: "其它区",
            23e4: "黑龙江省",
            230100: "哈尔滨市",
            230102: "道里区",
            230103: "南岗区",
            230104: "道外区",
            230106: "香坊区",
            230108: "平房区",
            230109: "松北区",
            230111: "呼兰区",
            230123: "依兰县",
            230124: "方正县",
            230125: "宾县",
            230126: "巴彦县",
            230127: "木兰县",
            230128: "通河县",
            230129: "延寿县",
            230181: "阿城区",
            230182: "双城市",
            230183: "尚志市",
            230184: "五常市",
            230186: "其它区",
            230200: "齐齐哈尔市",
            230202: "龙沙区",
            230203: "建华区",
            230204: "铁锋区",
            230205: "昂昂溪区",
            230206: "富拉尔基区",
            230207: "碾子山区",
            230208: "梅里斯达斡尔族区",
            230221: "龙江县",
            230223: "依安县",
            230224: "泰来县",
            230225: "甘南县",
            230227: "富裕县",
            230229: "克山县",
            230230: "克东县",
            230231: "拜泉县",
            230281: "讷河市",
            230282: "其它区",
            230300: "鸡西市",
            230302: "鸡冠区",
            230303: "恒山区",
            230304: "滴道区",
            230305: "梨树区",
            230306: "城子河区",
            230307: "麻山区",
            230321: "鸡东县",
            230381: "虎林市",
            230382: "密山市",
            230383: "其它区",
            230400: "鹤岗市",
            230402: "向阳区",
            230403: "工农区",
            230404: "南山区",
            230405: "兴安区",
            230406: "东山区",
            230407: "兴山区",
            230421: "萝北县",
            230422: "绥滨县",
            230423: "其它区",
            230500: "双鸭山市",
            230502: "尖山区",
            230503: "岭东区",
            230505: "四方台区",
            230506: "宝山区",
            230521: "集贤县",
            230522: "友谊县",
            230523: "宝清县",
            230524: "饶河县",
            230525: "其它区",
            230600: "大庆市",
            230602: "萨尔图区",
            230603: "龙凤区",
            230604: "让胡路区",
            230605: "红岗区",
            230606: "大同区",
            230621: "肇州县",
            230622: "肇源县",
            230623: "林甸县",
            230624: "杜尔伯特蒙古族自治县",
            230625: "其它区",
            230700: "伊春市",
            230702: "伊春区",
            230703: "南岔区",
            230704: "友好区",
            230705: "西林区",
            230706: "翠峦区",
            230707: "新青区",
            230708: "美溪区",
            230709: "金山屯区",
            230710: "五营区",
            230711: "乌马河区",
            230712: "汤旺河区",
            230713: "带岭区",
            230714: "乌伊岭区",
            230715: "红星区",
            230716: "上甘岭区",
            230722: "嘉荫县",
            230781: "铁力市",
            230782: "其它区",
            230800: "佳木斯市",
            230803: "向阳区",
            230804: "前进区",
            230805: "东风区",
            230811: "郊区",
            230822: "桦南县",
            230826: "桦川县",
            230828: "汤原县",
            230833: "抚远县",
            230881: "同江市",
            230882: "富锦市",
            230883: "其它区",
            230900: "七台河市",
            230902: "新兴区",
            230903: "桃山区",
            230904: "茄子河区",
            230921: "勃利县",
            230922: "其它区",
            231e3: "牡丹江市",
            231002: "东安区",
            231003: "阳明区",
            231004: "爱民区",
            231005: "西安区",
            231024: "东宁县",
            231025: "林口县",
            231081: "绥芬河市",
            231083: "海林市",
            231084: "宁安市",
            231085: "穆棱市",
            231086: "其它区",
            231100: "黑河市",
            231102: "爱辉区",
            231121: "嫩江县",
            231123: "逊克县",
            231124: "孙吴县",
            231181: "北安市",
            231182: "五大连池市",
            231183: "其它区",
            231200: "绥化市",
            231202: "北林区",
            231221: "望奎县",
            231222: "兰西县",
            231223: "青冈县",
            231224: "庆安县",
            231225: "明水县",
            231226: "绥棱县",
            231281: "安达市",
            231282: "肇东市",
            231283: "海伦市",
            231284: "其它区",
            232700: "大兴安岭地区",
            232702: "松岭区",
            232703: "新林区",
            232704: "呼中区",
            232721: "呼玛县",
            232722: "塔河县",
            232723: "漠河县",
            232724: "加格达奇区",
            232725: "其它区",
            31e4: "上海",
            310100: "上海市",
            310101: "黄浦区",
            310104: "徐汇区",
            310105: "长宁区",
            310106: "静安区",
            310107: "普陀区",
            310108: "闸北区",
            310109: "虹口区",
            310110: "杨浦区",
            310112: "闵行区",
            310113: "宝山区",
            310114: "嘉定区",
            310115: "浦东新区",
            310116: "金山区",
            310117: "松江区",
            310118: "青浦区",
            310120: "奉贤区",
            310230: "崇明县",
            310231: "其它区",
            32e4: "江苏省",
            320100: "南京市",
            320102: "玄武区",
            320104: "秦淮区",
            320105: "建邺区",
            320106: "鼓楼区",
            320111: "浦口区",
            320113: "栖霞区",
            320114: "雨花台区",
            320115: "江宁区",
            320116: "六合区",
            320124: "溧水区",
            320125: "高淳区",
            320126: "其它区",
            320200: "无锡市",
            320202: "崇安区",
            320203: "南长区",
            320204: "北塘区",
            320205: "锡山区",
            320206: "惠山区",
            320211: "滨湖区",
            320281: "江阴市",
            320282: "宜兴市",
            320297: "其它区",
            320300: "徐州市",
            320302: "鼓楼区",
            320303: "云龙区",
            320305: "贾汪区",
            320311: "泉山区",
            320321: "丰县",
            320322: "沛县",
            320323: "铜山区",
            320324: "睢宁县",
            320381: "新沂市",
            320382: "邳州市",
            320383: "其它区",
            320400: "常州市",
            320402: "天宁区",
            320404: "钟楼区",
            320405: "戚墅堰区",
            320411: "新北区",
            320412: "武进区",
            320481: "溧阳市",
            320482: "金坛市",
            320483: "其它区",
            320500: "苏州市",
            320505: "虎丘区",
            320506: "吴中区",
            320507: "相城区",
            320508: "姑苏区",
            320581: "常熟市",
            320582: "张家港市",
            320583: "昆山市",
            320584: "吴江区",
            320585: "太仓市",
            320596: "其它区",
            320600: "南通市",
            320602: "崇川区",
            320611: "港闸区",
            320612: "通州区",
            320621: "海安县",
            320623: "如东县",
            320681: "启东市",
            320682: "如皋市",
            320684: "海门市",
            320694: "其它区",
            320700: "连云港市",
            320703: "连云区",
            320705: "新浦区",
            320706: "海州区",
            320721: "赣榆县",
            320722: "东海县",
            320723: "灌云县",
            320724: "灌南县",
            320725: "其它区",
            320800: "淮安市",
            320802: "清河区",
            320803: "淮安区",
            320804: "淮阴区",
            320811: "清浦区",
            320826: "涟水县",
            320829: "洪泽县",
            320830: "盱眙县",
            320831: "金湖县",
            320832: "其它区",
            320900: "盐城市",
            320902: "亭湖区",
            320903: "盐都区",
            320921: "响水县",
            320922: "滨海县",
            320923: "阜宁县",
            320924: "射阳县",
            320925: "建湖县",
            320981: "东台市",
            320982: "大丰市",
            320983: "其它区",
            321e3: "扬州市",
            321002: "广陵区",
            321003: "邗江区",
            321023: "宝应县",
            321081: "仪征市",
            321084: "高邮市",
            321088: "江都区",
            321093: "其它区",
            321100: "镇江市",
            321102: "京口区",
            321111: "润州区",
            321112: "丹徒区",
            321181: "丹阳市",
            321182: "扬中市",
            321183: "句容市",
            321184: "其它区",
            321200: "泰州市",
            321202: "海陵区",
            321203: "高港区",
            321281: "兴化市",
            321282: "靖江市",
            321283: "泰兴市",
            321284: "姜堰区",
            321285: "其它区",
            321300: "宿迁市",
            321302: "宿城区",
            321311: "宿豫区",
            321322: "沭阳县",
            321323: "泗阳县",
            321324: "泗洪县",
            321325: "其它区",
            33e4: "浙江省",
            330100: "杭州市",
            330102: "上城区",
            330103: "下城区",
            330104: "江干区",
            330105: "拱墅区",
            330106: "西湖区",
            330108: "滨江区",
            330109: "萧山区",
            330110: "余杭区",
            330122: "桐庐县",
            330127: "淳安县",
            330182: "建德市",
            330183: "富阳市",
            330185: "临安市",
            330186: "其它区",
            330200: "宁波市",
            330203: "海曙区",
            330204: "江东区",
            330205: "江北区",
            330206: "北仑区",
            330211: "镇海区",
            330212: "鄞州区",
            330225: "象山县",
            330226: "宁海县",
            330281: "余姚市",
            330282: "慈溪市",
            330283: "奉化市",
            330284: "其它区",
            330300: "温州市",
            330302: "鹿城区",
            330303: "龙湾区",
            330304: "瓯海区",
            330322: "洞头县",
            330324: "永嘉县",
            330326: "平阳县",
            330327: "苍南县",
            330328: "文成县",
            330329: "泰顺县",
            330381: "瑞安市",
            330382: "乐清市",
            330383: "其它区",
            330400: "嘉兴市",
            330402: "南湖区",
            330411: "秀洲区",
            330421: "嘉善县",
            330424: "海盐县",
            330481: "海宁市",
            330482: "平湖市",
            330483: "桐乡市",
            330484: "其它区",
            330500: "湖州市",
            330502: "吴兴区",
            330503: "南浔区",
            330521: "德清县",
            330522: "长兴县",
            330523: "安吉县",
            330524: "其它区",
            330600: "绍兴市",
            330602: "越城区",
            330621: "绍兴县",
            330624: "新昌县",
            330681: "诸暨市",
            330682: "上虞市",
            330683: "嵊州市",
            330684: "其它区",
            330700: "金华市",
            330702: "婺城区",
            330703: "金东区",
            330723: "武义县",
            330726: "浦江县",
            330727: "磐安县",
            330781: "兰溪市",
            330782: "义乌市",
            330783: "东阳市",
            330784: "永康市",
            330785: "其它区",
            330800: "衢州市",
            330802: "柯城区",
            330803: "衢江区",
            330822: "常山县",
            330824: "开化县",
            330825: "龙游县",
            330881: "江山市",
            330882: "其它区",
            330900: "舟山市",
            330902: "定海区",
            330903: "普陀区",
            330921: "岱山县",
            330922: "嵊泗县",
            330923: "其它区",
            331e3: "台州市",
            331002: "椒江区",
            331003: "黄岩区",
            331004: "路桥区",
            331021: "玉环县",
            331022: "三门县",
            331023: "天台县",
            331024: "仙居县",
            331081: "温岭市",
            331082: "临海市",
            331083: "其它区",
            331100: "丽水市",
            331102: "莲都区",
            331121: "青田县",
            331122: "缙云县",
            331123: "遂昌县",
            331124: "松阳县",
            331125: "云和县",
            331126: "庆元县",
            331127: "景宁畲族自治县",
            331181: "龙泉市",
            331182: "其它区",
            34e4: "安徽省",
            340100: "合肥市",
            340102: "瑶海区",
            340103: "庐阳区",
            340104: "蜀山区",
            340111: "包河区",
            340121: "长丰县",
            340122: "肥东县",
            340123: "肥西县",
            340192: "其它区",
            340200: "芜湖市",
            340202: "镜湖区",
            340203: "弋江区",
            340207: "鸠江区",
            340208: "三山区",
            340221: "芜湖县",
            340222: "繁昌县",
            340223: "南陵县",
            340224: "其它区",
            340300: "蚌埠市",
            340302: "龙子湖区",
            340303: "蚌山区",
            340304: "禹会区",
            340311: "淮上区",
            340321: "怀远县",
            340322: "五河县",
            340323: "固镇县",
            340324: "其它区",
            340400: "淮南市",
            340402: "大通区",
            340403: "田家庵区",
            340404: "谢家集区",
            340405: "八公山区",
            340406: "潘集区",
            340421: "凤台县",
            340422: "其它区",
            340500: "马鞍山市",
            340503: "花山区",
            340504: "雨山区",
            340506: "博望区",
            340521: "当涂县",
            340522: "其它区",
            340600: "淮北市",
            340602: "杜集区",
            340603: "相山区",
            340604: "烈山区",
            340621: "濉溪县",
            340622: "其它区",
            340700: "铜陵市",
            340702: "铜官山区",
            340703: "狮子山区",
            340711: "郊区",
            340721: "铜陵县",
            340722: "其它区",
            340800: "安庆市",
            340802: "迎江区",
            340803: "大观区",
            340811: "宜秀区",
            340822: "怀宁县",
            340823: "枞阳县",
            340824: "潜山县",
            340825: "太湖县",
            340826: "宿松县",
            340827: "望江县",
            340828: "岳西县",
            340881: "桐城市",
            340882: "其它区",
            341e3: "黄山市",
            341002: "屯溪区",
            341003: "黄山区",
            341004: "徽州区",
            341021: "歙县",
            341022: "休宁县",
            341023: "黟县",
            341024: "祁门县",
            341025: "其它区",
            341100: "滁州市",
            341102: "琅琊区",
            341103: "南谯区",
            341122: "来安县",
            341124: "全椒县",
            341125: "定远县",
            341126: "凤阳县",
            341181: "天长市",
            341182: "明光市",
            341183: "其它区",
            341200: "阜阳市",
            341202: "颍州区",
            341203: "颍东区",
            341204: "颍泉区",
            341221: "临泉县",
            341222: "太和县",
            341225: "阜南县",
            341226: "颍上县",
            341282: "界首市",
            341283: "其它区",
            341300: "宿州市",
            341302: "埇桥区",
            341321: "砀山县",
            341322: "萧县",
            341323: "灵璧县",
            341324: "泗县",
            341325: "其它区",
            341400: "巢湖市",
            341421: "庐江县",
            341422: "无为县",
            341423: "含山县",
            341424: "和县",
            341500: "六安市",
            341502: "金安区",
            341503: "裕安区",
            341521: "寿县",
            341522: "霍邱县",
            341523: "舒城县",
            341524: "金寨县",
            341525: "霍山县",
            341526: "其它区",
            341600: "亳州市",
            341602: "谯城区",
            341621: "涡阳县",
            341622: "蒙城县",
            341623: "利辛县",
            341624: "其它区",
            341700: "池州市",
            341702: "贵池区",
            341721: "东至县",
            341722: "石台县",
            341723: "青阳县",
            341724: "其它区",
            341800: "宣城市",
            341802: "宣州区",
            341821: "郎溪县",
            341822: "广德县",
            341823: "泾县",
            341824: "绩溪县",
            341825: "旌德县",
            341881: "宁国市",
            341882: "其它区",
            35e4: "福建省",
            350100: "福州市",
            350102: "鼓楼区",
            350103: "台江区",
            350104: "仓山区",
            350105: "马尾区",
            350111: "晋安区",
            350121: "闽侯县",
            350122: "连江县",
            350123: "罗源县",
            350124: "闽清县",
            350125: "永泰县",
            350128: "平潭县",
            350181: "福清市",
            350182: "长乐市",
            350183: "其它区",
            350200: "厦门市",
            350203: "思明区",
            350205: "海沧区",
            350206: "湖里区",
            350211: "集美区",
            350212: "同安区",
            350213: "翔安区",
            350214: "其它区",
            350300: "莆田市",
            350302: "城厢区",
            350303: "涵江区",
            350304: "荔城区",
            350305: "秀屿区",
            350322: "仙游县",
            350323: "其它区",
            350400: "三明市",
            350402: "梅列区",
            350403: "三元区",
            350421: "明溪县",
            350423: "清流县",
            350424: "宁化县",
            350425: "大田县",
            350426: "尤溪县",
            350427: "沙县",
            350428: "将乐县",
            350429: "泰宁县",
            350430: "建宁县",
            350481: "永安市",
            350482: "其它区",
            350500: "泉州市",
            350502: "鲤城区",
            350503: "丰泽区",
            350504: "洛江区",
            350505: "泉港区",
            350521: "惠安县",
            350524: "安溪县",
            350525: "永春县",
            350526: "德化县",
            350527: "金门县",
            350581: "石狮市",
            350582: "晋江市",
            350583: "南安市",
            350584: "其它区",
            350600: "漳州市",
            350602: "芗城区",
            350603: "龙文区",
            350622: "云霄县",
            350623: "漳浦县",
            350624: "诏安县",
            350625: "长泰县",
            350626: "东山县",
            350627: "南靖县",
            350628: "平和县",
            350629: "华安县",
            350681: "龙海市",
            350682: "其它区",
            350700: "南平市",
            350702: "延平区",
            350721: "顺昌县",
            350722: "浦城县",
            350723: "光泽县",
            350724: "松溪县",
            350725: "政和县",
            350781: "邵武市",
            350782: "武夷山市",
            350783: "建瓯市",
            350784: "建阳市",
            350785: "其它区",
            350800: "龙岩市",
            350802: "新罗区",
            350821: "长汀县",
            350822: "永定县",
            350823: "上杭县",
            350824: "武平县",
            350825: "连城县",
            350881: "漳平市",
            350882: "其它区",
            350900: "宁德市",
            350902: "蕉城区",
            350921: "霞浦县",
            350922: "古田县",
            350923: "屏南县",
            350924: "寿宁县",
            350925: "周宁县",
            350926: "柘荣县",
            350981: "福安市",
            350982: "福鼎市",
            350983: "其它区",
            36e4: "江西省",
            360100: "南昌市",
            360102: "东湖区",
            360103: "西湖区",
            360104: "青云谱区",
            360105: "湾里区",
            360111: "青山湖区",
            360121: "南昌县",
            360122: "新建县",
            360123: "安义县",
            360124: "进贤县",
            360128: "其它区",
            360200: "景德镇市",
            360202: "昌江区",
            360203: "珠山区",
            360222: "浮梁县",
            360281: "乐平市",
            360282: "其它区",
            360300: "萍乡市",
            360302: "安源区",
            360313: "湘东区",
            360321: "莲花县",
            360322: "上栗县",
            360323: "芦溪县",
            360324: "其它区",
            360400: "九江市",
            360402: "庐山区",
            360403: "浔阳区",
            360421: "九江县",
            360423: "武宁县",
            360424: "修水县",
            360425: "永修县",
            360426: "德安县",
            360427: "星子县",
            360428: "都昌县",
            360429: "湖口县",
            360430: "彭泽县",
            360481: "瑞昌市",
            360482: "其它区",
            360483: "共青城市",
            360500: "新余市",
            360502: "渝水区",
            360521: "分宜县",
            360522: "其它区",
            360600: "鹰潭市",
            360602: "月湖区",
            360622: "余江县",
            360681: "贵溪市",
            360682: "其它区",
            360700: "赣州市",
            360702: "章贡区",
            360721: "赣县",
            360722: "信丰县",
            360723: "大余县",
            360724: "上犹县",
            360725: "崇义县",
            360726: "安远县",
            360727: "龙南县",
            360728: "定南县",
            360729: "全南县",
            360730: "宁都县",
            360731: "于都县",
            360732: "兴国县",
            360733: "会昌县",
            360734: "寻乌县",
            360735: "石城县",
            360781: "瑞金市",
            360782: "南康市",
            360783: "其它区",
            360800: "吉安市",
            360802: "吉州区",
            360803: "青原区",
            360821: "吉安县",
            360822: "吉水县",
            360823: "峡江县",
            360824: "新干县",
            360825: "永丰县",
            360826: "泰和县",
            360827: "遂川县",
            360828: "万安县",
            360829: "安福县",
            360830: "永新县",
            360881: "井冈山市",
            360882: "其它区",
            360900: "宜春市",
            360902: "袁州区",
            360921: "奉新县",
            360922: "万载县",
            360923: "上高县",
            360924: "宜丰县",
            360925: "靖安县",
            360926: "铜鼓县",
            360981: "丰城市",
            360982: "樟树市",
            360983: "高安市",
            360984: "其它区",
            361e3: "抚州市",
            361002: "临川区",
            361021: "南城县",
            361022: "黎川县",
            361023: "南丰县",
            361024: "崇仁县",
            361025: "乐安县",
            361026: "宜黄县",
            361027: "金溪县",
            361028: "资溪县",
            361029: "东乡县",
            361030: "广昌县",
            361031: "其它区",
            361100: "上饶市",
            361102: "信州区",
            361121: "上饶县",
            361122: "广丰县",
            361123: "玉山县",
            361124: "铅山县",
            361125: "横峰县",
            361126: "弋阳县",
            361127: "余干县",
            361128: "鄱阳县",
            361129: "万年县",
            361130: "婺源县",
            361181: "德兴市",
            361182: "其它区",
            37e4: "山东省",
            370100: "济南市",
            370102: "历下区",
            370103: "市中区",
            370104: "槐荫区",
            370105: "天桥区",
            370112: "历城区",
            370113: "长清区",
            370124: "平阴县",
            370125: "济阳县",
            370126: "商河县",
            370181: "章丘市",
            370182: "其它区",
            370200: "青岛市",
            370202: "市南区",
            370203: "市北区",
            370211: "黄岛区",
            370212: "崂山区",
            370213: "李沧区",
            370214: "城阳区",
            370281: "胶州市",
            370282: "即墨市",
            370283: "平度市",
            370285: "莱西市",
            370286: "其它区",
            370300: "淄博市",
            370302: "淄川区",
            370303: "张店区",
            370304: "博山区",
            370305: "临淄区",
            370306: "周村区",
            370321: "桓台县",
            370322: "高青县",
            370323: "沂源县",
            370324: "其它区",
            370400: "枣庄市",
            370402: "市中区",
            370403: "薛城区",
            370404: "峄城区",
            370405: "台儿庄区",
            370406: "山亭区",
            370481: "滕州市",
            370482: "其它区",
            370500: "东营市",
            370502: "东营区",
            370503: "河口区",
            370521: "垦利县",
            370522: "利津县",
            370523: "广饶县",
            370591: "其它区",
            370600: "烟台市",
            370602: "芝罘区",
            370611: "福山区",
            370612: "牟平区",
            370613: "莱山区",
            370634: "长岛县",
            370681: "龙口市",
            370682: "莱阳市",
            370683: "莱州市",
            370684: "蓬莱市",
            370685: "招远市",
            370686: "栖霞市",
            370687: "海阳市",
            370688: "其它区",
            370700: "潍坊市",
            370702: "潍城区",
            370703: "寒亭区",
            370704: "坊子区",
            370705: "奎文区",
            370724: "临朐县",
            370725: "昌乐县",
            370781: "青州市",
            370782: "诸城市",
            370783: "寿光市",
            370784: "安丘市",
            370785: "高密市",
            370786: "昌邑市",
            370787: "其它区",
            370800: "济宁市",
            370802: "市中区",
            370811: "任城区",
            370826: "微山县",
            370827: "鱼台县",
            370828: "金乡县",
            370829: "嘉祥县",
            370830: "汶上县",
            370831: "泗水县",
            370832: "梁山县",
            370881: "曲阜市",
            370882: "兖州市",
            370883: "邹城市",
            370884: "其它区",
            370900: "泰安市",
            370902: "泰山区",
            370903: "岱岳区",
            370921: "宁阳县",
            370923: "东平县",
            370982: "新泰市",
            370983: "肥城市",
            370984: "其它区",
            371e3: "威海市",
            371002: "环翠区",
            371081: "文登市",
            371082: "荣成市",
            371083: "乳山市",
            371084: "其它区",
            371100: "日照市",
            371102: "东港区",
            371103: "岚山区",
            371121: "五莲县",
            371122: "莒县",
            371123: "其它区",
            371200: "莱芜市",
            371202: "莱城区",
            371203: "钢城区",
            371204: "其它区",
            371300: "临沂市",
            371302: "兰山区",
            371311: "罗庄区",
            371312: "河东区",
            371321: "沂南县",
            371322: "郯城县",
            371323: "沂水县",
            371324: "苍山县",
            371325: "费县",
            371326: "平邑县",
            371327: "莒南县",
            371328: "蒙阴县",
            371329: "临沭县",
            371330: "其它区",
            371400: "德州市",
            371402: "德城区",
            371421: "陵县",
            371422: "宁津县",
            371423: "庆云县",
            371424: "临邑县",
            371425: "齐河县",
            371426: "平原县",
            371427: "夏津县",
            371428: "武城县",
            371481: "乐陵市",
            371482: "禹城市",
            371483: "其它区",
            371500: "聊城市",
            371502: "东昌府区",
            371521: "阳谷县",
            371522: "莘县",
            371523: "茌平县",
            371524: "东阿县",
            371525: "冠县",
            371526: "高唐县",
            371581: "临清市",
            371582: "其它区",
            371600: "滨州市",
            371602: "滨城区",
            371621: "惠民县",
            371622: "阳信县",
            371623: "无棣县",
            371624: "沾化县",
            371625: "博兴县",
            371626: "邹平县",
            371627: "其它区",
            371700: "菏泽市",
            371702: "牡丹区",
            371721: "曹县",
            371722: "单县",
            371723: "成武县",
            371724: "巨野县",
            371725: "郓城县",
            371726: "鄄城县",
            371727: "定陶县",
            371728: "东明县",
            371729: "其它区",
            41e4: "河南省",
            410100: "郑州市",
            410102: "中原区",
            410103: "二七区",
            410104: "管城回族区",
            410105: "金水区",
            410106: "上街区",
            410108: "惠济区",
            410122: "中牟县",
            410181: "巩义市",
            410182: "荥阳市",
            410183: "新密市",
            410184: "新郑市",
            410185: "登封市",
            410188: "其它区",
            410200: "开封市",
            410202: "龙亭区",
            410203: "顺河回族区",
            410204: "鼓楼区",
            410205: "禹王台区",
            410211: "金明区",
            410221: "杞县",
            410222: "通许县",
            410223: "尉氏县",
            410224: "开封县",
            410225: "兰考县",
            410226: "其它区",
            410300: "洛阳市",
            410302: "老城区",
            410303: "西工区",
            410304: "瀍河回族区",
            410305: "涧西区",
            410306: "吉利区",
            410307: "洛龙区",
            410322: "孟津县",
            410323: "新安县",
            410324: "栾川县",
            410325: "嵩县",
            410326: "汝阳县",
            410327: "宜阳县",
            410328: "洛宁县",
            410329: "伊川县",
            410381: "偃师市",
            410400: "平顶山市",
            410402: "新华区",
            410403: "卫东区",
            410404: "石龙区",
            410411: "湛河区",
            410421: "宝丰县",
            410422: "叶县",
            410423: "鲁山县",
            410425: "郏县",
            410481: "舞钢市",
            410482: "汝州市",
            410483: "其它区",
            410500: "安阳市",
            410502: "文峰区",
            410503: "北关区",
            410505: "殷都区",
            410506: "龙安区",
            410522: "安阳县",
            410523: "汤阴县",
            410526: "滑县",
            410527: "内黄县",
            410581: "林州市",
            410582: "其它区",
            410600: "鹤壁市",
            410602: "鹤山区",
            410603: "山城区",
            410611: "淇滨区",
            410621: "浚县",
            410622: "淇县",
            410623: "其它区",
            410700: "新乡市",
            410702: "红旗区",
            410703: "卫滨区",
            410704: "凤泉区",
            410711: "牧野区",
            410721: "新乡县",
            410724: "获嘉县",
            410725: "原阳县",
            410726: "延津县",
            410727: "封丘县",
            410728: "长垣县",
            410781: "卫辉市",
            410782: "辉县市",
            410783: "其它区",
            410800: "焦作市",
            410802: "解放区",
            410803: "中站区",
            410804: "马村区",
            410811: "山阳区",
            410821: "修武县",
            410822: "博爱县",
            410823: "武陟县",
            410825: "温县",
            410881: "济源市",
            410882: "沁阳市",
            410883: "孟州市",
            410884: "其它区",
            410900: "濮阳市",
            410902: "华龙区",
            410922: "清丰县",
            410923: "南乐县",
            410926: "范县",
            410927: "台前县",
            410928: "濮阳县",
            410929: "其它区",
            411e3: "许昌市",
            411002: "魏都区",
            411023: "许昌县",
            411024: "鄢陵县",
            411025: "襄城县",
            411081: "禹州市",
            411082: "长葛市",
            411083: "其它区",
            411100: "漯河市",
            411102: "源汇区",
            411103: "郾城区",
            411104: "召陵区",
            411121: "舞阳县",
            411122: "临颍县",
            411123: "其它区",
            411200: "三门峡市",
            411202: "湖滨区",
            411221: "渑池县",
            411222: "陕县",
            411224: "卢氏县",
            411281: "义马市",
            411282: "灵宝市",
            411283: "其它区",
            411300: "南阳市",
            411302: "宛城区",
            411303: "卧龙区",
            411321: "南召县",
            411322: "方城县",
            411323: "西峡县",
            411324: "镇平县",
            411325: "内乡县",
            411326: "淅川县",
            411327: "社旗县",
            411328: "唐河县",
            411329: "新野县",
            411330: "桐柏县",
            411381: "邓州市",
            411382: "其它区",
            411400: "商丘市",
            411402: "梁园区",
            411403: "睢阳区",
            411421: "民权县",
            411422: "睢县",
            411423: "宁陵县",
            411424: "柘城县",
            411425: "虞城县",
            411426: "夏邑县",
            411481: "永城市",
            411482: "其它区",
            411500: "信阳市",
            411502: "浉河区",
            411503: "平桥区",
            411521: "罗山县",
            411522: "光山县",
            411523: "新县",
            411524: "商城县",
            411525: "固始县",
            411526: "潢川县",
            411527: "淮滨县",
            411528: "息县",
            411529: "其它区",
            411600: "周口市",
            411602: "川汇区",
            411621: "扶沟县",
            411622: "西华县",
            411623: "商水县",
            411624: "沈丘县",
            411625: "郸城县",
            411626: "淮阳县",
            411627: "太康县",
            411628: "鹿邑县",
            411681: "项城市",
            411682: "其它区",
            411700: "驻马店市",
            411702: "驿城区",
            411721: "西平县",
            411722: "上蔡县",
            411723: "平舆县",
            411724: "正阳县",
            411725: "确山县",
            411726: "泌阳县",
            411727: "汝南县",
            411728: "遂平县",
            411729: "新蔡县",
            411730: "其它区",
            42e4: "湖北省",
            420100: "武汉市",
            420102: "江岸区",
            420103: "江汉区",
            420104: "硚口区",
            420105: "汉阳区",
            420106: "武昌区",
            420107: "青山区",
            420111: "洪山区",
            420112: "东西湖区",
            420113: "汉南区",
            420114: "蔡甸区",
            420115: "江夏区",
            420116: "黄陂区",
            420117: "新洲区",
            420118: "其它区",
            420200: "黄石市",
            420202: "黄石港区",
            420203: "西塞山区",
            420204: "下陆区",
            420205: "铁山区",
            420222: "阳新县",
            420281: "大冶市",
            420282: "其它区",
            420300: "十堰市",
            420302: "茅箭区",
            420303: "张湾区",
            420321: "郧县",
            420322: "郧西县",
            420323: "竹山县",
            420324: "竹溪县",
            420325: "房县",
            420381: "丹江口市",
            420383: "其它区",
            420500: "宜昌市",
            420502: "西陵区",
            420503: "伍家岗区",
            420504: "点军区",
            420505: "猇亭区",
            420506: "夷陵区",
            420525: "远安县",
            420526: "兴山县",
            420527: "秭归县",
            420528: "长阳土家族自治县",
            420529: "五峰土家族自治县",
            420581: "宜都市",
            420582: "当阳市",
            420583: "枝江市",
            420584: "其它区",
            420600: "襄阳市",
            420602: "襄城区",
            420606: "樊城区",
            420607: "襄州区",
            420624: "南漳县",
            420625: "谷城县",
            420626: "保康县",
            420682: "老河口市",
            420683: "枣阳市",
            420684: "宜城市",
            420685: "其它区",
            420700: "鄂州市",
            420702: "梁子湖区",
            420703: "华容区",
            420704: "鄂城区",
            420705: "其它区",
            420800: "荆门市",
            420802: "东宝区",
            420804: "掇刀区",
            420821: "京山县",
            420822: "沙洋县",
            420881: "钟祥市",
            420882: "其它区",
            420900: "孝感市",
            420902: "孝南区",
            420921: "孝昌县",
            420922: "大悟县",
            420923: "云梦县",
            420981: "应城市",
            420982: "安陆市",
            420984: "汉川市",
            420985: "其它区",
            421e3: "荆州市",
            421002: "沙市区",
            421003: "荆州区",
            421022: "公安县",
            421023: "监利县",
            421024: "江陵县",
            421081: "石首市",
            421083: "洪湖市",
            421087: "松滋市",
            421088: "其它区",
            421100: "黄冈市",
            421102: "黄州区",
            421121: "团风县",
            421122: "红安县",
            421123: "罗田县",
            421124: "英山县",
            421125: "浠水县",
            421126: "蕲春县",
            421127: "黄梅县",
            421181: "麻城市",
            421182: "武穴市",
            421183: "其它区",
            421200: "咸宁市",
            421202: "咸安区",
            421221: "嘉鱼县",
            421222: "通城县",
            421223: "崇阳县",
            421224: "通山县",
            421281: "赤壁市",
            421283: "其它区",
            421300: "随州市",
            421302: "曾都区",
            421321: "随县",
            421381: "广水市",
            421382: "其它区",
            422800: "恩施土家族苗族自治州",
            422801: "恩施市",
            422802: "利川市",
            422822: "建始县",
            422823: "巴东县",
            422825: "宣恩县",
            422826: "咸丰县",
            422827: "来凤县",
            422828: "鹤峰县",
            422829: "其它区",
            429004: "仙桃市",
            429005: "潜江市",
            429006: "天门市",
            429021: "神农架林区",
            43e4: "湖南省",
            430100: "长沙市",
            430102: "芙蓉区",
            430103: "天心区",
            430104: "岳麓区",
            430105: "开福区",
            430111: "雨花区",
            430121: "长沙县",
            430122: "望城区",
            430124: "宁乡县",
            430181: "浏阳市",
            430182: "其它区",
            430200: "株洲市",
            430202: "荷塘区",
            430203: "芦淞区",
            430204: "石峰区",
            430211: "天元区",
            430221: "株洲县",
            430223: "攸县",
            430224: "茶陵县",
            430225: "炎陵县",
            430281: "醴陵市",
            430282: "其它区",
            430300: "湘潭市",
            430302: "雨湖区",
            430304: "岳塘区",
            430321: "湘潭县",
            430381: "湘乡市",
            430382: "韶山市",
            430383: "其它区",
            430400: "衡阳市",
            430405: "珠晖区",
            430406: "雁峰区",
            430407: "石鼓区",
            430408: "蒸湘区",
            430412: "南岳区",
            430421: "衡阳县",
            430422: "衡南县",
            430423: "衡山县",
            430424: "衡东县",
            430426: "祁东县",
            430481: "耒阳市",
            430482: "常宁市",
            430483: "其它区",
            430500: "邵阳市",
            430502: "双清区",
            430503: "大祥区",
            430511: "北塔区",
            430521: "邵东县",
            430522: "新邵县",
            430523: "邵阳县",
            430524: "隆回县",
            430525: "洞口县",
            430527: "绥宁县",
            430528: "新宁县",
            430529: "城步苗族自治县",
            430581: "武冈市",
            430582: "其它区",
            430600: "岳阳市",
            430602: "岳阳楼区",
            430603: "云溪区",
            430611: "君山区",
            430621: "岳阳县",
            430623: "华容县",
            430624: "湘阴县",
            430626: "平江县",
            430681: "汨罗市",
            430682: "临湘市",
            430683: "其它区",
            430700: "常德市",
            430702: "武陵区",
            430703: "鼎城区",
            430721: "安乡县",
            430722: "汉寿县",
            430723: "澧县",
            430724: "临澧县",
            430725: "桃源县",
            430726: "石门县",
            430781: "津市市",
            430782: "其它区",
            430800: "张家界市",
            430802: "永定区",
            430811: "武陵源区",
            430821: "慈利县",
            430822: "桑植县",
            430823: "其它区",
            430900: "益阳市",
            430902: "资阳区",
            430903: "赫山区",
            430921: "南县",
            430922: "桃江县",
            430923: "安化县",
            430981: "沅江市",
            430982: "其它区",
            431e3: "郴州市",
            431002: "北湖区",
            431003: "苏仙区",
            431021: "桂阳县",
            431022: "宜章县",
            431023: "永兴县",
            431024: "嘉禾县",
            431025: "临武县",
            431026: "汝城县",
            431027: "桂东县",
            431028: "安仁县",
            431081: "资兴市",
            431082: "其它区",
            431100: "永州市",
            431102: "零陵区",
            431103: "冷水滩区",
            431121: "祁阳县",
            431122: "东安县",
            431123: "双牌县",
            431124: "道县",
            431125: "江永县",
            431126: "宁远县",
            431127: "蓝山县",
            431128: "新田县",
            431129: "江华瑶族自治县",
            431130: "其它区",
            431200: "怀化市",
            431202: "鹤城区",
            431221: "中方县",
            431222: "沅陵县",
            431223: "辰溪县",
            431224: "溆浦县",
            431225: "会同县",
            431226: "麻阳苗族自治县",
            431227: "新晃侗族自治县",
            431228: "芷江侗族自治县",
            431229: "靖州苗族侗族自治县",
            431230: "通道侗族自治县",
            431281: "洪江市",
            431282: "其它区",
            431300: "娄底市",
            431302: "娄星区",
            431321: "双峰县",
            431322: "新化县",
            431381: "冷水江市",
            431382: "涟源市",
            431383: "其它区",
            433100: "湘西土家族苗族自治州",
            433101: "吉首市",
            433122: "泸溪县",
            433123: "凤凰县",
            433124: "花垣县",
            433125: "保靖县",
            433126: "古丈县",
            433127: "永顺县",
            433130: "龙山县",
            433131: "其它区",
            44e4: "广东省",
            440100: "广州市",
            440103: "荔湾区",
            440104: "越秀区",
            440105: "海珠区",
            440106: "天河区",
            440111: "白云区",
            440112: "黄埔区",
            440113: "番禺区",
            440114: "花都区",
            440115: "南沙区",
            440116: "萝岗区",
            440183: "增城市",
            440184: "从化市",
            440189: "其它区",
            440200: "韶关市",
            440203: "武江区",
            440204: "浈江区",
            440205: "曲江区",
            440222: "始兴县",
            440224: "仁化县",
            440229: "翁源县",
            440232: "乳源瑶族自治县",
            440233: "新丰县",
            440281: "乐昌市",
            440282: "南雄市",
            440283: "其它区",
            440300: "深圳市",
            440303: "罗湖区",
            440304: "福田区",
            440305: "南山区",
            440306: "宝安区",
            440307: "龙岗区",
            440308: "盐田区",
            440309: "其它区",
            440320: "光明新区",
            440321: "坪山新区",
            440322: "大鹏新区",
            440323: "龙华新区",
            440400: "珠海市",
            440402: "香洲区",
            440403: "斗门区",
            440404: "金湾区",
            440488: "其它区",
            440500: "汕头市",
            440507: "龙湖区",
            440511: "金平区",
            440512: "濠江区",
            440513: "潮阳区",
            440514: "潮南区",
            440515: "澄海区",
            440523: "南澳县",
            440524: "其它区",
            440600: "佛山市",
            440604: "禅城区",
            440605: "南海区",
            440606: "顺德区",
            440607: "三水区",
            440608: "高明区",
            440609: "其它区",
            440700: "江门市",
            440703: "蓬江区",
            440704: "江海区",
            440705: "新会区",
            440781: "台山市",
            440783: "开平市",
            440784: "鹤山市",
            440785: "恩平市",
            440786: "其它区",
            440800: "湛江市",
            440802: "赤坎区",
            440803: "霞山区",
            440804: "坡头区",
            440811: "麻章区",
            440823: "遂溪县",
            440825: "徐闻县",
            440881: "廉江市",
            440882: "雷州市",
            440883: "吴川市",
            440884: "其它区",
            440900: "茂名市",
            440902: "茂南区",
            440903: "茂港区",
            440923: "电白县",
            440981: "高州市",
            440982: "化州市",
            440983: "信宜市",
            440984: "其它区",
            441200: "肇庆市",
            441202: "端州区",
            441203: "鼎湖区",
            441223: "广宁县",
            441224: "怀集县",
            441225: "封开县",
            441226: "德庆县",
            441283: "高要市",
            441284: "四会市",
            441285: "其它区",
            441300: "惠州市",
            441302: "惠城区",
            441303: "惠阳区",
            441322: "博罗县",
            441323: "惠东县",
            441324: "龙门县",
            441325: "其它区",
            441400: "梅州市",
            441402: "梅江区",
            441421: "梅县",
            441422: "大埔县",
            441423: "丰顺县",
            441424: "五华县",
            441426: "平远县",
            441427: "蕉岭县",
            441481: "兴宁市",
            441482: "其它区",
            441500: "汕尾市",
            441502: "城区",
            441521: "海丰县",
            441523: "陆河县",
            441581: "陆丰市",
            441582: "其它区",
            441600: "河源市",
            441602: "源城区",
            441621: "紫金县",
            441622: "龙川县",
            441623: "连平县",
            441624: "和平县",
            441625: "东源县",
            441626: "其它区",
            441700: "阳江市",
            441702: "江城区",
            441721: "阳西县",
            441723: "阳东县",
            441781: "阳春市",
            441782: "其它区",
            441800: "清远市",
            441802: "清城区",
            441821: "佛冈县",
            441823: "阳山县",
            441825: "连山壮族瑶族自治县",
            441826: "连南瑶族自治县",
            441827: "清新区",
            441881: "英德市",
            441882: "连州市",
            441883: "其它区",
            441900: "东莞市",
            442e3: "中山市",
            442101: "东沙群岛",
            445100: "潮州市",
            445102: "湘桥区",
            445121: "潮安区",
            445122: "饶平县",
            445186: "其它区",
            445200: "揭阳市",
            445202: "榕城区",
            445221: "揭东区",
            445222: "揭西县",
            445224: "惠来县",
            445281: "普宁市",
            445285: "其它区",
            445300: "云浮市",
            445302: "云城区",
            445321: "新兴县",
            445322: "郁南县",
            445323: "云安县",
            445381: "罗定市",
            445382: "其它区",
            45e4: "广西壮族自治区",
            450100: "南宁市",
            450102: "兴宁区",
            450103: "青秀区",
            450105: "江南区",
            450107: "西乡塘区",
            450108: "良庆区",
            450109: "邕宁区",
            450122: "武鸣县",
            450123: "隆安县",
            450124: "马山县",
            450125: "上林县",
            450126: "宾阳县",
            450127: "横县",
            450128: "其它区",
            450200: "柳州市",
            450202: "城中区",
            450203: "鱼峰区",
            450204: "柳南区",
            450205: "柳北区",
            450221: "柳江县",
            450222: "柳城县",
            450223: "鹿寨县",
            450224: "融安县",
            450225: "融水苗族自治县",
            450226: "三江侗族自治县",
            450227: "其它区",
            450300: "桂林市",
            450302: "秀峰区",
            450303: "叠彩区",
            450304: "象山区",
            450305: "七星区",
            450311: "雁山区",
            450321: "阳朔县",
            450322: "临桂区",
            450323: "灵川县",
            450324: "全州县",
            450325: "兴安县",
            450326: "永福县",
            450327: "灌阳县",
            450328: "龙胜各族自治县",
            450329: "资源县",
            450330: "平乐县",
            450331: "荔浦县",
            450332: "恭城瑶族自治县",
            450333: "其它区",
            450400: "梧州市",
            450403: "万秀区",
            450405: "长洲区",
            450406: "龙圩区",
            450421: "苍梧县",
            450422: "藤县",
            450423: "蒙山县",
            450481: "岑溪市",
            450482: "其它区",
            450500: "北海市",
            450502: "海城区",
            450503: "银海区",
            450512: "铁山港区",
            450521: "合浦县",
            450522: "其它区",
            450600: "防城港市",
            450602: "港口区",
            450603: "防城区",
            450621: "上思县",
            450681: "东兴市",
            450682: "其它区",
            450700: "钦州市",
            450702: "钦南区",
            450703: "钦北区",
            450721: "灵山县",
            450722: "浦北县",
            450723: "其它区",
            450800: "贵港市",
            450802: "港北区",
            450803: "港南区",
            450804: "覃塘区",
            450821: "平南县",
            450881: "桂平市",
            450882: "其它区",
            450900: "玉林市",
            450902: "玉州区",
            450903: "福绵区",
            450921: "容县",
            450922: "陆川县",
            450923: "博白县",
            450924: "兴业县",
            450981: "北流市",
            450982: "其它区",
            451e3: "百色市",
            451002: "右江区",
            451021: "田阳县",
            451022: "田东县",
            451023: "平果县",
            451024: "德保县",
            451025: "靖西县",
            451026: "那坡县",
            451027: "凌云县",
            451028: "乐业县",
            451029: "田林县",
            451030: "西林县",
            451031: "隆林各族自治县",
            451032: "其它区",
            451100: "贺州市",
            451102: "八步区",
            451119: "平桂管理区",
            451121: "昭平县",
            451122: "钟山县",
            451123: "富川瑶族自治县",
            451124: "其它区",
            451200: "河池市",
            451202: "金城江区",
            451221: "南丹县",
            451222: "天峨县",
            451223: "凤山县",
            451224: "东兰县",
            451225: "罗城仫佬族自治县",
            451226: "环江毛南族自治县",
            451227: "巴马瑶族自治县",
            451228: "都安瑶族自治县",
            451229: "大化瑶族自治县",
            451281: "宜州市",
            451282: "其它区",
            451300: "来宾市",
            451302: "兴宾区",
            451321: "忻城县",
            451322: "象州县",
            451323: "武宣县",
            451324: "金秀瑶族自治县",
            451381: "合山市",
            451382: "其它区",
            451400: "崇左市",
            451402: "江州区",
            451421: "扶绥县",
            451422: "宁明县",
            451423: "龙州县",
            451424: "大新县",
            451425: "天等县",
            451481: "凭祥市",
            451482: "其它区",
            46e4: "海南省",
            460100: "海口市",
            460105: "秀英区",
            460106: "龙华区",
            460107: "琼山区",
            460108: "美兰区",
            460109: "其它区",
            460200: "三亚市",
            460300: "三沙市",
            460321: "西沙群岛",
            460322: "南沙群岛",
            460323: "中沙群岛的岛礁及其海域",
            469001: "五指山市",
            469002: "琼海市",
            469003: "儋州市",
            469005: "文昌市",
            469006: "万宁市",
            469007: "东方市",
            469025: "定安县",
            469026: "屯昌县",
            469027: "澄迈县",
            469028: "临高县",
            469030: "白沙黎族自治县",
            469031: "昌江黎族自治县",
            469033: "乐东黎族自治县",
            469034: "陵水黎族自治县",
            469035: "保亭黎族苗族自治县",
            469036: "琼中黎族苗族自治县",
            471005: "其它区",
            5e5: "重庆",
            500100: "重庆市",
            500101: "万州区",
            500102: "涪陵区",
            500103: "渝中区",
            500104: "大渡口区",
            500105: "江北区",
            500106: "沙坪坝区",
            500107: "九龙坡区",
            500108: "南岸区",
            500109: "北碚区",
            500110: "万盛区",
            500111: "双桥区",
            500112: "渝北区",
            500113: "巴南区",
            500114: "黔江区",
            500115: "长寿区",
            500222: "綦江区",
            500223: "潼南县",
            500224: "铜梁县",
            500225: "大足区",
            500226: "荣昌县",
            500227: "璧山县",
            500228: "梁平县",
            500229: "城口县",
            500230: "丰都县",
            500231: "垫江县",
            500232: "武隆县",
            500233: "忠县",
            500234: "开县",
            500235: "云阳县",
            500236: "奉节县",
            500237: "巫山县",
            500238: "巫溪县",
            500240: "石柱土家族自治县",
            500241: "秀山土家族苗族自治县",
            500242: "酉阳土家族苗族自治县",
            500243: "彭水苗族土家族自治县",
            500381: "江津区",
            500382: "合川区",
            500383: "永川区",
            500384: "南川区",
            500385: "其它区",
            51e4: "四川省",
            510100: "成都市",
            510104: "锦江区",
            510105: "青羊区",
            510106: "金牛区",
            510107: "武侯区",
            510108: "成华区",
            510112: "龙泉驿区",
            510113: "青白江区",
            510114: "新都区",
            510115: "温江区",
            510121: "金堂县",
            510122: "双流县",
            510124: "郫县",
            510129: "大邑县",
            510131: "蒲江县",
            510132: "新津县",
            510181: "都江堰市",
            510182: "彭州市",
            510183: "邛崃市",
            510184: "崇州市",
            510185: "其它区",
            510300: "自贡市",
            510302: "自流井区",
            510303: "贡井区",
            510304: "大安区",
            510311: "沿滩区",
            510321: "荣县",
            510322: "富顺县",
            510323: "其它区",
            510400: "攀枝花市",
            510402: "东区",
            510403: "西区",
            510411: "仁和区",
            510421: "米易县",
            510422: "盐边县",
            510423: "其它区",
            510500: "泸州市",
            510502: "江阳区",
            510503: "纳溪区",
            510504: "龙马潭区",
            510521: "泸县",
            510522: "合江县",
            510524: "叙永县",
            510525: "古蔺县",
            510526: "其它区",
            510600: "德阳市",
            510603: "旌阳区",
            510623: "中江县",
            510626: "罗江县",
            510681: "广汉市",
            510682: "什邡市",
            510683: "绵竹市",
            510684: "其它区",
            510700: "绵阳市",
            510703: "涪城区",
            510704: "游仙区",
            510722: "三台县",
            510723: "盐亭县",
            510724: "安县",
            510725: "梓潼县",
            510726: "北川羌族自治县",
            510727: "平武县",
            510781: "江油市",
            510782: "其它区",
            510800: "广元市",
            510802: "利州区",
            510811: "昭化区",
            510812: "朝天区",
            510821: "旺苍县",
            510822: "青川县",
            510823: "剑阁县",
            510824: "苍溪县",
            510825: "其它区",
            510900: "遂宁市",
            510903: "船山区",
            510904: "安居区",
            510921: "蓬溪县",
            510922: "射洪县",
            510923: "大英县",
            510924: "其它区",
            511e3: "内江市",
            511002: "市中区",
            511011: "东兴区",
            511024: "威远县",
            511025: "资中县",
            511028: "隆昌县",
            511029: "其它区",
            511100: "乐山市",
            511102: "市中区",
            511111: "沙湾区",
            511112: "五通桥区",
            511113: "金口河区",
            511123: "犍为县",
            511124: "井研县",
            511126: "夹江县",
            511129: "沐川县",
            511132: "峨边彝族自治县",
            511133: "马边彝族自治县",
            511181: "峨眉山市",
            511182: "其它区",
            511300: "南充市",
            511302: "顺庆区",
            511303: "高坪区",
            511304: "嘉陵区",
            511321: "南部县",
            511322: "营山县",
            511323: "蓬安县",
            511324: "仪陇县",
            511325: "西充县",
            511381: "阆中市",
            511382: "其它区",
            511400: "眉山市",
            511402: "东坡区",
            511421: "仁寿县",
            511422: "彭山县",
            511423: "洪雅县",
            511424: "丹棱县",
            511425: "青神县",
            511426: "其它区",
            511500: "宜宾市",
            511502: "翠屏区",
            511521: "宜宾县",
            511522: "南溪区",
            511523: "江安县",
            511524: "长宁县",
            511525: "高县",
            511526: "珙县",
            511527: "筠连县",
            511528: "兴文县",
            511529: "屏山县",
            511530: "其它区",
            511600: "广安市",
            511602: "广安区",
            511603: "前锋区",
            511621: "岳池县",
            511622: "武胜县",
            511623: "邻水县",
            511681: "华蓥市",
            511683: "其它区",
            511700: "达州市",
            511702: "通川区",
            511721: "达川区",
            511722: "宣汉县",
            511723: "开江县",
            511724: "大竹县",
            511725: "渠县",
            511781: "万源市",
            511782: "其它区",
            511800: "雅安市",
            511802: "雨城区",
            511821: "名山区",
            511822: "荥经县",
            511823: "汉源县",
            511824: "石棉县",
            511825: "天全县",
            511826: "芦山县",
            511827: "宝兴县",
            511828: "其它区",
            511900: "巴中市",
            511902: "巴州区",
            511903: "恩阳区",
            511921: "通江县",
            511922: "南江县",
            511923: "平昌县",
            511924: "其它区",
            512e3: "资阳市",
            512002: "雁江区",
            512021: "安岳县",
            512022: "乐至县",
            512081: "简阳市",
            512082: "其它区",
            513200: "阿坝藏族羌族自治州",
            513221: "汶川县",
            513222: "理县",
            513223: "茂县",
            513224: "松潘县",
            513225: "九寨沟县",
            513226: "金川县",
            513227: "小金县",
            513228: "黑水县",
            513229: "马尔康县",
            513230: "壤塘县",
            513231: "阿坝县",
            513232: "若尔盖县",
            513233: "红原县",
            513234: "其它区",
            513300: "甘孜藏族自治州",
            513321: "康定县",
            513322: "泸定县",
            513323: "丹巴县",
            513324: "九龙县",
            513325: "雅江县",
            513326: "道孚县",
            513327: "炉霍县",
            513328: "甘孜县",
            513329: "新龙县",
            513330: "德格县",
            513331: "白玉县",
            513332: "石渠县",
            513333: "色达县",
            513334: "理塘县",
            513335: "巴塘县",
            513336: "乡城县",
            513337: "稻城县",
            513338: "得荣县",
            513339: "其它区",
            513400: "凉山彝族自治州",
            513401: "西昌市",
            513422: "木里藏族自治县",
            513423: "盐源县",
            513424: "德昌县",
            513425: "会理县",
            513426: "会东县",
            513427: "宁南县",
            513428: "普格县",
            513429: "布拖县",
            513430: "金阳县",
            513431: "昭觉县",
            513432: "喜德县",
            513433: "冕宁县",
            513434: "越西县",
            513435: "甘洛县",
            513436: "美姑县",
            513437: "雷波县",
            513438: "其它区",
            52e4: "贵州省",
            520100: "贵阳市",
            520102: "南明区",
            520103: "云岩区",
            520111: "花溪区",
            520112: "乌当区",
            520113: "白云区",
            520121: "开阳县",
            520122: "息烽县",
            520123: "修文县",
            520151: "观山湖区",
            520181: "清镇市",
            520182: "其它区",
            520200: "六盘水市",
            520201: "钟山区",
            520203: "六枝特区",
            520221: "水城县",
            520222: "盘县",
            520223: "其它区",
            520300: "遵义市",
            520302: "红花岗区",
            520303: "汇川区",
            520321: "遵义县",
            520322: "桐梓县",
            520323: "绥阳县",
            520324: "正安县",
            520325: "道真仡佬族苗族自治县",
            520326: "务川仡佬族苗族自治县",
            520327: "凤冈县",
            520328: "湄潭县",
            520329: "余庆县",
            520330: "习水县",
            520381: "赤水市",
            520382: "仁怀市",
            520383: "其它区",
            520400: "安顺市",
            520402: "西秀区",
            520421: "平坝县",
            520422: "普定县",
            520423: "镇宁布依族苗族自治县",
            520424: "关岭布依族苗族自治县",
            520425: "紫云苗族布依族自治县",
            520426: "其它区",
            522200: "铜仁市",
            522201: "碧江区",
            522222: "江口县",
            522223: "玉屏侗族自治县",
            522224: "石阡县",
            522225: "思南县",
            522226: "印江土家族苗族自治县",
            522227: "德江县",
            522228: "沿河土家族自治县",
            522229: "松桃苗族自治县",
            522230: "万山区",
            522231: "其它区",
            522300: "黔西南布依族苗族自治州",
            522301: "兴义市",
            522322: "兴仁县",
            522323: "普安县",
            522324: "晴隆县",
            522325: "贞丰县",
            522326: "望谟县",
            522327: "册亨县",
            522328: "安龙县",
            522329: "其它区",
            522400: "毕节市",
            522401: "七星关区",
            522422: "大方县",
            522423: "黔西县",
            522424: "金沙县",
            522425: "织金县",
            522426: "纳雍县",
            522427: "威宁彝族回族苗族自治县",
            522428: "赫章县",
            522429: "其它区",
            522600: "黔东南苗族侗族自治州",
            522601: "凯里市",
            522622: "黄平县",
            522623: "施秉县",
            522624: "三穗县",
            522625: "镇远县",
            522626: "岑巩县",
            522627: "天柱县",
            522628: "锦屏县",
            522629: "剑河县",
            522630: "台江县",
            522631: "黎平县",
            522632: "榕江县",
            522633: "从江县",
            522634: "雷山县",
            522635: "麻江县",
            522636: "丹寨县",
            522637: "其它区",
            522700: "黔南布依族苗族自治州",
            522701: "都匀市",
            522702: "福泉市",
            522722: "荔波县",
            522723: "贵定县",
            522725: "瓮安县",
            522726: "独山县",
            522727: "平塘县",
            522728: "罗甸县",
            522729: "长顺县",
            522730: "龙里县",
            522731: "惠水县",
            522732: "三都水族自治县",
            522733: "其它区",
            53e4: "云南省",
            530100: "昆明市",
            530102: "五华区",
            530103: "盘龙区",
            530111: "官渡区",
            530112: "西山区",
            530113: "东川区",
            530121: "呈贡区",
            530122: "晋宁县",
            530124: "富民县",
            530125: "宜良县",
            530126: "石林彝族自治县",
            530127: "嵩明县",
            530128: "禄劝彝族苗族自治县",
            530129: "寻甸回族彝族自治县",
            530181: "安宁市",
            530182: "其它区",
            530300: "曲靖市",
            530302: "麒麟区",
            530321: "马龙县",
            530322: "陆良县",
            530323: "师宗县",
            530324: "罗平县",
            530325: "富源县",
            530326: "会泽县",
            530328: "沾益县",
            530381: "宣威市",
            530382: "其它区",
            530400: "玉溪市",
            530402: "红塔区",
            530421: "江川县",
            530422: "澄江县",
            530423: "通海县",
            530424: "华宁县",
            530425: "易门县",
            530426: "峨山彝族自治县",
            530427: "新平彝族傣族自治县",
            530428: "元江哈尼族彝族傣族自治县",
            530429: "其它区",
            530500: "保山市",
            530502: "隆阳区",
            530521: "施甸县",
            530522: "腾冲县",
            530523: "龙陵县",
            530524: "昌宁县",
            530525: "其它区",
            530600: "昭通市",
            530602: "昭阳区",
            530621: "鲁甸县",
            530622: "巧家县",
            530623: "盐津县",
            530624: "大关县",
            530625: "永善县",
            530626: "绥江县",
            530627: "镇雄县",
            530628: "彝良县",
            530629: "威信县",
            530630: "水富县",
            530631: "其它区",
            530700: "丽江市",
            530702: "古城区",
            530721: "玉龙纳西族自治县",
            530722: "永胜县",
            530723: "华坪县",
            530724: "宁蒗彝族自治县",
            530725: "其它区",
            530800: "普洱市",
            530802: "思茅区",
            530821: "宁洱哈尼族彝族自治县",
            530822: "墨江哈尼族自治县",
            530823: "景东彝族自治县",
            530824: "景谷傣族彝族自治县",
            530825: "镇沅彝族哈尼族拉祜族自治县",
            530826: "江城哈尼族彝族自治县",
            530827: "孟连傣族拉祜族佤族自治县",
            530828: "澜沧拉祜族自治县",
            530829: "西盟佤族自治县",
            530830: "其它区",
            530900: "临沧市",
            530902: "临翔区",
            530921: "凤庆县",
            530922: "云县",
            530923: "永德县",
            530924: "镇康县",
            530925: "双江拉祜族佤族布朗族傣族自治县",
            530926: "耿马傣族佤族自治县",
            530927: "沧源佤族自治县",
            530928: "其它区",
            532300: "楚雄彝族自治州",
            532301: "楚雄市",
            532322: "双柏县",
            532323: "牟定县",
            532324: "南华县",
            532325: "姚安县",
            532326: "大姚县",
            532327: "永仁县",
            532328: "元谋县",
            532329: "武定县",
            532331: "禄丰县",
            532332: "其它区",
            532500: "红河哈尼族彝族自治州",
            532501: "个旧市",
            532502: "开远市",
            532522: "蒙自市",
            532523: "屏边苗族自治县",
            532524: "建水县",
            532525: "石屏县",
            532526: "弥勒市",
            532527: "泸西县",
            532528: "元阳县",
            532529: "红河县",
            532530: "金平苗族瑶族傣族自治县",
            532531: "绿春县",
            532532: "河口瑶族自治县",
            532533: "其它区",
            532600: "文山壮族苗族自治州",
            532621: "文山市",
            532622: "砚山县",
            532623: "西畴县",
            532624: "麻栗坡县",
            532625: "马关县",
            532626: "丘北县",
            532627: "广南县",
            532628: "富宁县",
            532629: "其它区",
            532800: "西双版纳傣族自治州",
            532801: "景洪市",
            532822: "勐海县",
            532823: "勐腊县",
            532824: "其它区",
            532900: "大理白族自治州",
            532901: "大理市",
            532922: "漾濞彝族自治县",
            532923: "祥云县",
            532924: "宾川县",
            532925: "弥渡县",
            532926: "南涧彝族自治县",
            532927: "巍山彝族回族自治县",
            532928: "永平县",
            532929: "云龙县",
            532930: "洱源县",
            532931: "剑川县",
            532932: "鹤庆县",
            532933: "其它区",
            533100: "德宏傣族景颇族自治州",
            533102: "瑞丽市",
            533103: "芒市",
            533122: "梁河县",
            533123: "盈江县",
            533124: "陇川县",
            533125: "其它区",
            533300: "怒江傈僳族自治州",
            533321: "泸水县",
            533323: "福贡县",
            533324: "贡山独龙族怒族自治县",
            533325: "兰坪白族普米族自治县",
            533326: "其它区",
            533400: "迪庆藏族自治州",
            533421: "香格里拉县",
            533422: "德钦县",
            533423: "维西傈僳族自治县",
            533424: "其它区",
            54e4: "西藏自治区",
            540100: "拉萨市",
            540102: "城关区",
            540121: "林周县",
            540122: "当雄县",
            540123: "尼木县",
            540124: "曲水县",
            540125: "堆龙德庆县",
            540126: "达孜县",
            540127: "墨竹工卡县",
            540128: "其它区",
            542100: "昌都地区",
            542121: "昌都县",
            542122: "江达县",
            542123: "贡觉县",
            542124: "类乌齐县",
            542125: "丁青县",
            542126: "察雅县",
            542127: "八宿县",
            542128: "左贡县",
            542129: "芒康县",
            542132: "洛隆县",
            542133: "边坝县",
            542134: "其它区",
            542200: "山南地区",
            542221: "乃东县",
            542222: "扎囊县",
            542223: "贡嘎县",
            542224: "桑日县",
            542225: "琼结县",
            542226: "曲松县",
            542227: "措美县",
            542228: "洛扎县",
            542229: "加查县",
            542231: "隆子县",
            542232: "错那县",
            542233: "浪卡子县",
            542234: "其它区",
            542300: "日喀则地区",
            542301: "日喀则市",
            542322: "南木林县",
            542323: "江孜县",
            542324: "定日县",
            542325: "萨迦县",
            542326: "拉孜县",
            542327: "昂仁县",
            542328: "谢通门县",
            542329: "白朗县",
            542330: "仁布县",
            542331: "康马县",
            542332: "定结县",
            542333: "仲巴县",
            542334: "亚东县",
            542335: "吉隆县",
            542336: "聂拉木县",
            542337: "萨嘎县",
            542338: "岗巴县",
            542339: "其它区",
            542400: "那曲地区",
            542421: "那曲县",
            542422: "嘉黎县",
            542423: "比如县",
            542424: "聂荣县",
            542425: "安多县",
            542426: "申扎县",
            542427: "索县",
            542428: "班戈县",
            542429: "巴青县",
            542430: "尼玛县",
            542431: "其它区",
            542432: "双湖县",
            542500: "阿里地区",
            542521: "普兰县",
            542522: "札达县",
            542523: "噶尔县",
            542524: "日土县",
            542525: "革吉县",
            542526: "改则县",
            542527: "措勤县",
            542528: "其它区",
            542600: "林芝地区",
            542621: "林芝县",
            542622: "工布江达县",
            542623: "米林县",
            542624: "墨脱县",
            542625: "波密县",
            542626: "察隅县",
            542627: "朗县",
            542628: "其它区",
            61e4: "陕西省",
            610100: "西安市",
            610102: "新城区",
            610103: "碑林区",
            610104: "莲湖区",
            610111: "灞桥区",
            610112: "未央区",
            610113: "雁塔区",
            610114: "阎良区",
            610115: "临潼区",
            610116: "长安区",
            610122: "蓝田县",
            610124: "周至县",
            610125: "户县",
            610126: "高陵县",
            610127: "其它区",
            610200: "铜川市",
            610202: "王益区",
            610203: "印台区",
            610204: "耀州区",
            610222: "宜君县",
            610223: "其它区",
            610300: "宝鸡市",
            610302: "渭滨区",
            610303: "金台区",
            610304: "陈仓区",
            610322: "凤翔县",
            610323: "岐山县",
            610324: "扶风县",
            610326: "眉县",
            610327: "陇县",
            610328: "千阳县",
            610329: "麟游县",
            610330: "凤县",
            610331: "太白县",
            610332: "其它区",
            610400: "咸阳市",
            610402: "秦都区",
            610403: "杨陵区",
            610404: "渭城区",
            610422: "三原县",
            610423: "泾阳县",
            610424: "乾县",
            610425: "礼泉县",
            610426: "永寿县",
            610427: "彬县",
            610428: "长武县",
            610429: "旬邑县",
            610430: "淳化县",
            610431: "武功县",
            610481: "兴平市",
            610482: "其它区",
            610500: "渭南市",
            610502: "临渭区",
            610521: "华县",
            610522: "潼关县",
            610523: "大荔县",
            610524: "合阳县",
            610525: "澄城县",
            610526: "蒲城县",
            610527: "白水县",
            610528: "富平县",
            610581: "韩城市",
            610582: "华阴市",
            610583: "其它区",
            610600: "延安市",
            610602: "宝塔区",
            610621: "延长县",
            610622: "延川县",
            610623: "子长县",
            610624: "安塞县",
            610625: "志丹县",
            610626: "吴起县",
            610627: "甘泉县",
            610628: "富县",
            610629: "洛川县",
            610630: "宜川县",
            610631: "黄龙县",
            610632: "黄陵县",
            610633: "其它区",
            610700: "汉中市",
            610702: "汉台区",
            610721: "南郑县",
            610722: "城固县",
            610723: "洋县",
            610724: "西乡县",
            610725: "勉县",
            610726: "宁强县",
            610727: "略阳县",
            610728: "镇巴县",
            610729: "留坝县",
            610730: "佛坪县",
            610731: "其它区",
            610800: "榆林市",
            610802: "榆阳区",
            610821: "神木县",
            610822: "府谷县",
            610823: "横山县",
            610824: "靖边县",
            610825: "定边县",
            610826: "绥德县",
            610827: "米脂县",
            610828: "佳县",
            610829: "吴堡县",
            610830: "清涧县",
            610831: "子洲县",
            610832: "其它区",
            610900: "安康市",
            610902: "汉滨区",
            610921: "汉阴县",
            610922: "石泉县",
            610923: "宁陕县",
            610924: "紫阳县",
            610925: "岚皋县",
            610926: "平利县",
            610927: "镇坪县",
            610928: "旬阳县",
            610929: "白河县",
            610930: "其它区",
            611e3: "商洛市",
            611002: "商州区",
            611021: "洛南县",
            611022: "丹凤县",
            611023: "商南县",
            611024: "山阳县",
            611025: "镇安县",
            611026: "柞水县",
            611027: "其它区",
            62e4: "甘肃省",
            620100: "兰州市",
            620102: "城关区",
            620103: "七里河区",
            620104: "西固区",
            620105: "安宁区",
            620111: "红古区",
            620121: "永登县",
            620122: "皋兰县",
            620123: "榆中县",
            620124: "其它区",
            620200: "嘉峪关市",
            620300: "金昌市",
            620302: "金川区",
            620321: "永昌县",
            620322: "其它区",
            620400: "白银市",
            620402: "白银区",
            620403: "平川区",
            620421: "靖远县",
            620422: "会宁县",
            620423: "景泰县",
            620424: "其它区",
            620500: "天水市",
            620502: "秦州区",
            620503: "麦积区",
            620521: "清水县",
            620522: "秦安县",
            620523: "甘谷县",
            620524: "武山县",
            620525: "张家川回族自治县",
            620526: "其它区",
            620600: "武威市",
            620602: "凉州区",
            620621: "民勤县",
            620622: "古浪县",
            620623: "天祝藏族自治县",
            620624: "其它区",
            620700: "张掖市",
            620702: "甘州区",
            620721: "肃南裕固族自治县",
            620722: "民乐县",
            620723: "临泽县",
            620724: "高台县",
            620725: "山丹县",
            620726: "其它区",
            620800: "平凉市",
            620802: "崆峒区",
            620821: "泾川县",
            620822: "灵台县",
            620823: "崇信县",
            620824: "华亭县",
            620825: "庄浪县",
            620826: "静宁县",
            620827: "其它区",
            620900: "酒泉市",
            620902: "肃州区",
            620921: "金塔县",
            620922: "瓜州县",
            620923: "肃北蒙古族自治县",
            620924: "阿克塞哈萨克族自治县",
            620981: "玉门市",
            620982: "敦煌市",
            620983: "其它区",
            621e3: "庆阳市",
            621002: "西峰区",
            621021: "庆城县",
            621022: "环县",
            621023: "华池县",
            621024: "合水县",
            621025: "正宁县",
            621026: "宁县",
            621027: "镇原县",
            621028: "其它区",
            621100: "定西市",
            621102: "安定区",
            621121: "通渭县",
            621122: "陇西县",
            621123: "渭源县",
            621124: "临洮县",
            621125: "漳县",
            621126: "岷县",
            621127: "其它区",
            621200: "陇南市",
            621202: "武都区",
            621221: "成县",
            621222: "文县",
            621223: "宕昌县",
            621224: "康县",
            621225: "西和县",
            621226: "礼县",
            621227: "徽县",
            621228: "两当县",
            621229: "其它区",
            622900: "临夏回族自治州",
            622901: "临夏市",
            622921: "临夏县",
            622922: "康乐县",
            622923: "永靖县",
            622924: "广河县",
            622925: "和政县",
            622926: "东乡族自治县",
            622927: "积石山保安族东乡族撒拉族自治县",
            622928: "其它区",
            623e3: "甘南藏族自治州",
            623001: "合作市",
            623021: "临潭县",
            623022: "卓尼县",
            623023: "舟曲县",
            623024: "迭部县",
            623025: "玛曲县",
            623026: "碌曲县",
            623027: "夏河县",
            623028: "其它区",
            63e4: "青海省",
            630100: "西宁市",
            630102: "城东区",
            630103: "城中区",
            630104: "城西区",
            630105: "城北区",
            630121: "大通回族土族自治县",
            630122: "湟中县",
            630123: "湟源县",
            630124: "其它区",
            632100: "海东市",
            632121: "平安县",
            632122: "民和回族土族自治县",
            632123: "乐都区",
            632126: "互助土族自治县",
            632127: "化隆回族自治县",
            632128: "循化撒拉族自治县",
            632129: "其它区",
            632200: "海北藏族自治州",
            632221: "门源回族自治县",
            632222: "祁连县",
            632223: "海晏县",
            632224: "刚察县",
            632225: "其它区",
            632300: "黄南藏族自治州",
            632321: "同仁县",
            632322: "尖扎县",
            632323: "泽库县",
            632324: "河南蒙古族自治县",
            632325: "其它区",
            632500: "海南藏族自治州",
            632521: "共和县",
            632522: "同德县",
            632523: "贵德县",
            632524: "兴海县",
            632525: "贵南县",
            632526: "其它区",
            632600: "果洛藏族自治州",
            632621: "玛沁县",
            632622: "班玛县",
            632623: "甘德县",
            632624: "达日县",
            632625: "久治县",
            632626: "玛多县",
            632627: "其它区",
            632700: "玉树藏族自治州",
            632721: "玉树市",
            632722: "杂多县",
            632723: "称多县",
            632724: "治多县",
            632725: "囊谦县",
            632726: "曲麻莱县",
            632727: "其它区",
            632800: "海西蒙古族藏族自治州",
            632801: "格尔木市",
            632802: "德令哈市",
            632821: "乌兰县",
            632822: "都兰县",
            632823: "天峻县",
            632824: "其它区",
            64e4: "宁夏回族自治区",
            640100: "银川市",
            640104: "兴庆区",
            640105: "西夏区",
            640106: "金凤区",
            640121: "永宁县",
            640122: "贺兰县",
            640181: "灵武市",
            640182: "其它区",
            640200: "石嘴山市",
            640202: "大武口区",
            640205: "惠农区",
            640221: "平罗县",
            640222: "其它区",
            640300: "吴忠市",
            640302: "利通区",
            640303: "红寺堡区",
            640323: "盐池县",
            640324: "同心县",
            640381: "青铜峡市",
            640382: "其它区",
            640400: "固原市",
            640402: "原州区",
            640422: "西吉县",
            640423: "隆德县",
            640424: "泾源县",
            640425: "彭阳县",
            640426: "其它区",
            640500: "中卫市",
            640502: "沙坡头区",
            640521: "中宁县",
            640522: "海原县",
            640523: "其它区",
            65e4: "新疆维吾尔自治区",
            650100: "乌鲁木齐市",
            650102: "天山区",
            650103: "沙依巴克区",
            650104: "新市区",
            650105: "水磨沟区",
            650106: "头屯河区",
            650107: "达坂城区",
            650109: "米东区",
            650121: "乌鲁木齐县",
            650122: "其它区",
            650200: "克拉玛依市",
            650202: "独山子区",
            650203: "克拉玛依区",
            650204: "白碱滩区",
            650205: "乌尔禾区",
            650206: "其它区",
            652100: "吐鲁番地区",
            652101: "吐鲁番市",
            652122: "鄯善县",
            652123: "托克逊县",
            652124: "其它区",
            652200: "哈密地区",
            652201: "哈密市",
            652222: "巴里坤哈萨克自治县",
            652223: "伊吾县",
            652224: "其它区",
            652300: "昌吉回族自治州",
            652301: "昌吉市",
            652302: "阜康市",
            652323: "呼图壁县",
            652324: "玛纳斯县",
            652325: "奇台县",
            652327: "吉木萨尔县",
            652328: "木垒哈萨克自治县",
            652329: "其它区",
            652700: "博尔塔拉蒙古自治州",
            652701: "博乐市",
            652702: "阿拉山口市",
            652722: "精河县",
            652723: "温泉县",
            652724: "其它区",
            652800: "巴音郭楞蒙古自治州",
            652801: "库尔勒市",
            652822: "轮台县",
            652823: "尉犁县",
            652824: "若羌县",
            652825: "且末县",
            652826: "焉耆回族自治县",
            652827: "和静县",
            652828: "和硕县",
            652829: "博湖县",
            652830: "其它区",
            652900: "阿克苏地区",
            652901: "阿克苏市",
            652922: "温宿县",
            652923: "库车县",
            652924: "沙雅县",
            652925: "新和县",
            652926: "拜城县",
            652927: "乌什县",
            652928: "阿瓦提县",
            652929: "柯坪县",
            652930: "其它区",
            653e3: "克孜勒苏柯尔克孜自治州",
            653001: "阿图什市",
            653022: "阿克陶县",
            653023: "阿合奇县",
            653024: "乌恰县",
            653025: "其它区",
            653100: "喀什地区",
            653101: "喀什市",
            653121: "疏附县",
            653122: "疏勒县",
            653123: "英吉沙县",
            653124: "泽普县",
            653125: "莎车县",
            653126: "叶城县",
            653127: "麦盖提县",
            653128: "岳普湖县",
            653129: "伽师县",
            653130: "巴楚县",
            653131: "塔什库尔干塔吉克自治县",
            653132: "其它区",
            653200: "和田地区",
            653201: "和田市",
            653221: "和田县",
            653222: "墨玉县",
            653223: "皮山县",
            653224: "洛浦县",
            653225: "策勒县",
            653226: "于田县",
            653227: "民丰县",
            653228: "其它区",
            654e3: "伊犁哈萨克自治州",
            654002: "伊宁市",
            654003: "奎屯市",
            654021: "伊宁县",
            654022: "察布查尔锡伯自治县",
            654023: "霍城县",
            654024: "巩留县",
            654025: "新源县",
            654026: "昭苏县",
            654027: "特克斯县",
            654028: "尼勒克县",
            654029: "其它区",
            654200: "塔城地区",
            654201: "塔城市",
            654202: "乌苏市",
            654221: "额敏县",
            654223: "沙湾县",
            654224: "托里县",
            654225: "裕民县",
            654226: "和布克赛尔蒙古自治县",
            654227: "其它区",
            654300: "阿勒泰地区",
            654301: "阿勒泰市",
            654321: "布尔津县",
            654322: "富蕴县",
            654323: "福海县",
            654324: "哈巴河县",
            654325: "青河县",
            654326: "吉木乃县",
            654327: "其它区",
            659001: "石河子市",
            659002: "阿拉尔市",
            659003: "图木舒克市",
            659004: "五家渠市",
            71e4: "台湾",
            710100: "台北市",
            710101: "中正区",
            710102: "大同区",
            710103: "中山区",
            710104: "松山区",
            710105: "大安区",
            710106: "万华区",
            710107: "信义区",
            710108: "士林区",
            710109: "北投区",
            710110: "内湖区",
            710111: "南港区",
            710112: "文山区",
            710113: "其它区",
            710200: "高雄市",
            710201: "新兴区",
            710202: "前金区",
            710203: "芩雅区",
            710204: "盐埕区",
            710205: "鼓山区",
            710206: "旗津区",
            710207: "前镇区",
            710208: "三民区",
            710209: "左营区",
            710210: "楠梓区",
            710211: "小港区",
            710212: "其它区",
            710241: "苓雅区",
            710242: "仁武区",
            710243: "大社区",
            710244: "冈山区",
            710245: "路竹区",
            710246: "阿莲区",
            710247: "田寮区",
            710248: "燕巢区",
            710249: "桥头区",
            710250: "梓官区",
            710251: "弥陀区",
            710252: "永安区",
            710253: "湖内区",
            710254: "凤山区",
            710255: "大寮区",
            710256: "林园区",
            710257: "鸟松区",
            710258: "大树区",
            710259: "旗山区",
            710260: "美浓区",
            710261: "六龟区",
            710262: "内门区",
            710263: "杉林区",
            710264: "甲仙区",
            710265: "桃源区",
            710266: "那玛夏区",
            710267: "茂林区",
            710268: "茄萣区",
            710300: "台南市",
            710301: "中西区",
            710302: "东区",
            710303: "南区",
            710304: "北区",
            710305: "安平区",
            710306: "安南区",
            710307: "其它区",
            710339: "永康区",
            710340: "归仁区",
            710341: "新化区",
            710342: "左镇区",
            710343: "玉井区",
            710344: "楠西区",
            710345: "南化区",
            710346: "仁德区",
            710347: "关庙区",
            710348: "龙崎区",
            710349: "官田区",
            710350: "麻豆区",
            710351: "佳里区",
            710352: "西港区",
            710353: "七股区",
            710354: "将军区",
            710355: "学甲区",
            710356: "北门区",
            710357: "新营区",
            710358: "后壁区",
            710359: "白河区",
            710360: "东山区",
            710361: "六甲区",
            710362: "下营区",
            710363: "柳营区",
            710364: "盐水区",
            710365: "善化区",
            710366: "大内区",
            710367: "山上区",
            710368: "新市区",
            710369: "安定区",
            710400: "台中市",
            710401: "中区",
            710402: "东区",
            710403: "南区",
            710404: "西区",
            710405: "北区",
            710406: "北屯区",
            710407: "西屯区",
            710408: "南屯区",
            710409: "其它区",
            710431: "太平区",
            710432: "大里区",
            710433: "雾峰区",
            710434: "乌日区",
            710435: "丰原区",
            710436: "后里区",
            710437: "石冈区",
            710438: "东势区",
            710439: "和平区",
            710440: "新社区",
            710441: "潭子区",
            710442: "大雅区",
            710443: "神冈区",
            710444: "大肚区",
            710445: "沙鹿区",
            710446: "龙井区",
            710447: "梧栖区",
            710448: "清水区",
            710449: "大甲区",
            710450: "外埔区",
            710451: "大安区",
            710500: "金门县",
            710507: "金沙镇",
            710508: "金湖镇",
            710509: "金宁乡",
            710510: "金城镇",
            710511: "烈屿乡",
            710512: "乌坵乡",
            710600: "南投县",
            710614: "南投市",
            710615: "中寮乡",
            710616: "草屯镇",
            710617: "国姓乡",
            710618: "埔里镇",
            710619: "仁爱乡",
            710620: "名间乡",
            710621: "集集镇",
            710622: "水里乡",
            710623: "鱼池乡",
            710624: "信义乡",
            710625: "竹山镇",
            710626: "鹿谷乡",
            710700: "基隆市",
            710701: "仁爱区",
            710702: "信义区",
            710703: "中正区",
            710704: "中山区",
            710705: "安乐区",
            710706: "暖暖区",
            710707: "七堵区",
            710708: "其它区",
            710800: "新竹市",
            710801: "东区",
            710802: "北区",
            710803: "香山区",
            710804: "其它区",
            710900: "嘉义市",
            710901: "东区",
            710902: "西区",
            710903: "其它区",
            711100: "新北市",
            711130: "万里区",
            711131: "金山区",
            711132: "板桥区",
            711133: "汐止区",
            711134: "深坑区",
            711135: "石碇区",
            711136: "瑞芳区",
            711137: "平溪区",
            711138: "双溪区",
            711139: "贡寮区",
            711140: "新店区",
            711141: "坪林区",
            711142: "乌来区",
            711143: "永和区",
            711144: "中和区",
            711145: "土城区",
            711146: "三峡区",
            711147: "树林区",
            711148: "莺歌区",
            711149: "三重区",
            711150: "新庄区",
            711151: "泰山区",
            711152: "林口区",
            711153: "芦洲区",
            711154: "五股区",
            711155: "八里区",
            711156: "淡水区",
            711157: "三芝区",
            711158: "石门区",
            711200: "宜兰县",
            711214: "宜兰市",
            711215: "头城镇",
            711216: "礁溪乡",
            711217: "壮围乡",
            711218: "员山乡",
            711219: "罗东镇",
            711220: "三星乡",
            711221: "大同乡",
            711222: "五结乡",
            711223: "冬山乡",
            711224: "苏澳镇",
            711225: "南澳乡",
            711226: "钓鱼台",
            711300: "新竹县",
            711314: "竹北市",
            711315: "湖口乡",
            711316: "新丰乡",
            711317: "新埔镇",
            711318: "关西镇",
            711319: "芎林乡",
            711320: "宝山乡",
            711321: "竹东镇",
            711322: "五峰乡",
            711323: "横山乡",
            711324: "尖石乡",
            711325: "北埔乡",
            711326: "峨眉乡",
            711400: "桃园县",
            711414: "中坜市",
            711415: "平镇市",
            711416: "龙潭乡",
            711417: "杨梅市",
            711418: "新屋乡",
            711419: "观音乡",
            711420: "桃园市",
            711421: "龟山乡",
            711422: "八德市",
            711423: "大溪镇",
            711424: "复兴乡",
            711425: "大园乡",
            711426: "芦竹乡",
            711500: "苗栗县",
            711519: "竹南镇",
            711520: "头份镇",
            711521: "三湾乡",
            711522: "南庄乡",
            711523: "狮潭乡",
            711524: "后龙镇",
            711525: "通霄镇",
            711526: "苑里镇",
            711527: "苗栗市",
            711528: "造桥乡",
            711529: "头屋乡",
            711530: "公馆乡",
            711531: "大湖乡",
            711532: "泰安乡",
            711533: "铜锣乡",
            711534: "三义乡",
            711535: "西湖乡",
            711536: "卓兰镇",
            711700: "彰化县",
            711727: "彰化市",
            711728: "芬园乡",
            711729: "花坛乡",
            711730: "秀水乡",
            711731: "鹿港镇",
            711732: "福兴乡",
            711733: "线西乡",
            711734: "和美镇",
            711735: "伸港乡",
            711736: "员林镇",
            711737: "社头乡",
            711738: "永靖乡",
            711739: "埔心乡",
            711740: "溪湖镇",
            711741: "大村乡",
            711742: "埔盐乡",
            711743: "田中镇",
            711744: "北斗镇",
            711745: "田尾乡",
            711746: "埤头乡",
            711747: "溪州乡",
            711748: "竹塘乡",
            711749: "二林镇",
            711750: "大城乡",
            711751: "芳苑乡",
            711752: "二水乡",
            711900: "嘉义县",
            711919: "番路乡",
            711920: "梅山乡",
            711921: "竹崎乡",
            711922: "阿里山乡",
            711923: "中埔乡",
            711924: "大埔乡",
            711925: "水上乡",
            711926: "鹿草乡",
            711927: "太保市",
            711928: "朴子市",
            711929: "东石乡",
            711930: "六脚乡",
            711931: "新港乡",
            711932: "民雄乡",
            711933: "大林镇",
            711934: "溪口乡",
            711935: "义竹乡",
            711936: "布袋镇",
            712100: "云林县",
            712121: "斗南镇",
            712122: "大埤乡",
            712123: "虎尾镇",
            712124: "土库镇",
            712125: "褒忠乡",
            712126: "东势乡",
            712127: "台西乡",
            712128: "仑背乡",
            712129: "麦寮乡",
            712130: "斗六市",
            712131: "林内乡",
            712132: "古坑乡",
            712133: "莿桐乡",
            712134: "西螺镇",
            712135: "二仑乡",
            712136: "北港镇",
            712137: "水林乡",
            712138: "口湖乡",
            712139: "四湖乡",
            712140: "元长乡",
            712400: "屏东县",
            712434: "屏东市",
            712435: "三地门乡",
            712436: "雾台乡",
            712437: "玛家乡",
            712438: "九如乡",
            712439: "里港乡",
            712440: "高树乡",
            712441: "盐埔乡",
            712442: "长治乡",
            712443: "麟洛乡",
            712444: "竹田乡",
            712445: "内埔乡",
            712446: "万丹乡",
            712447: "潮州镇",
            712448: "泰武乡",
            712449: "来义乡",
            712450: "万峦乡",
            712451: "崁顶乡",
            712452: "新埤乡",
            712453: "南州乡",
            712454: "林边乡",
            712455: "东港镇",
            712456: "琉球乡",
            712457: "佳冬乡",
            712458: "新园乡",
            712459: "枋寮乡",
            712460: "枋山乡",
            712461: "春日乡",
            712462: "狮子乡",
            712463: "车城乡",
            712464: "牡丹乡",
            712465: "恒春镇",
            712466: "满州乡",
            712500: "台东县",
            712517: "台东市",
            712518: "绿岛乡",
            712519: "兰屿乡",
            712520: "延平乡",
            712521: "卑南乡",
            712522: "鹿野乡",
            712523: "关山镇",
            712524: "海端乡",
            712525: "池上乡",
            712526: "东河乡",
            712527: "成功镇",
            712528: "长滨乡",
            712529: "金峰乡",
            712530: "大武乡",
            712531: "达仁乡",
            712532: "太麻里乡",
            712600: "花莲县",
            712615: "花莲市",
            712616: "新城乡",
            712617: "太鲁阁",
            712618: "秀林乡",
            712619: "吉安乡",
            712620: "寿丰乡",
            712621: "凤林镇",
            712622: "光复乡",
            712623: "丰滨乡",
            712624: "瑞穗乡",
            712625: "万荣乡",
            712626: "玉里镇",
            712627: "卓溪乡",
            712628: "富里乡",
            712700: "澎湖县",
            712707: "马公市",
            712708: "西屿乡",
            712709: "望安乡",
            712710: "七美乡",
            712711: "白沙乡",
            712712: "湖西乡",
            712800: "连江县",
            712805: "南竿乡",
            712806: "北竿乡",
            712807: "莒光乡",
            712808: "东引乡",
            81e4: "香港特别行政区",
            810100: "香港岛",
            810101: "中西区",
            810102: "湾仔",
            810103: "东区",
            810104: "南区",
            810200: "九龙",
            810201: "九龙城区",
            810202: "油尖旺区",
            810203: "深水埗区",
            810204: "黄大仙区",
            810205: "观塘区",
            810300: "新界",
            810301: "北区",
            810302: "大埔区",
            810303: "沙田区",
            810304: "西贡区",
            810305: "元朗区",
            810306: "屯门区",
            810307: "荃湾区",
            810308: "葵青区",
            810309: "离岛区",
            82e4: "澳门特别行政区",
            820100: "澳门半岛",
            820200: "离岛",
            99e4: "海外",
            990100: "海外"
          };
          function a(u) {
            for (var o = {}, d = 0, f; d < u.length; d++)
              f = u[d], !(!f || !f.id) && (o[f.id] = f);
            for (var c = [], p = 0; p < u.length; p++)
              if (f = u[p], !!f) {
                if (f.pid == null && f.parentId == null) {
                  c.push(f);
                  continue;
                }
                var g = o[f.pid] || o[f.parentId];
                g && (g.children || (g.children = []), g.children.push(f));
              }
            return c;
          }
          var r = function() {
            var u = [];
            for (var o in e) {
              var d = o.slice(2, 6) === "0000" ? void 0 : o.slice(4, 6) == "00" ? o.slice(0, 2) + "0000" : o.slice(0, 4) + "00";
              u.push({
                id: o,
                pid: d,
                name: e[o]
              });
            }
            return a(u);
          }();
          n.exports = r;
        },
        /* 19 */
        /***/
        function(n, l, e) {
          var a = e(18);
          n.exports = {
            // Dice
            d4: function() {
              return this.natural(1, 4);
            },
            d6: function() {
              return this.natural(1, 6);
            },
            d8: function() {
              return this.natural(1, 8);
            },
            d12: function() {
              return this.natural(1, 12);
            },
            d20: function() {
              return this.natural(1, 20);
            },
            d100: function() {
              return this.natural(1, 100);
            },
            /*
            			    随机生成一个 GUID。
            
            			    http://www.broofa.com/2008/09/javascript-uuid-function/
            			    [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
            			        UUIDs (Universally Unique IDentifier)
            			        GUIDs (Globally Unique IDentifier)
            			        The formal definition of the UUID string representation is provided by the following ABNF [7]:
            			            UUID                   = time-low "-" time-mid "-"
            			                                   time-high-and-version "-"
            			                                   clock-seq-and-reserved
            			                                   clock-seq-low "-" node
            			            time-low               = 4hexOctet
            			            time-mid               = 2hexOctet
            			            time-high-and-version  = 2hexOctet
            			            clock-seq-and-reserved = hexOctet
            			            clock-seq-low          = hexOctet
            			            node                   = 6hexOctet
            			            hexOctet               = hexDigit hexDigit
            			            hexDigit =
            			                "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
            			                "a" / "b" / "c" / "d" / "e" / "f" /
            			                "A" / "B" / "C" / "D" / "E" / "F"
            			    
            			    https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
            			*/
            guid: function() {
              var r = "abcdefABCDEF1234567890", u = this.string(r, 8) + "-" + this.string(r, 4) + "-" + this.string(r, 4) + "-" + this.string(r, 4) + "-" + this.string(r, 12);
              return u;
            },
            uuid: function() {
              return this.guid();
            },
            /*
            			    随机生成一个 18 位身份证。
            
            			    [身份证](http://baike.baidu.com/view/1697.htm#4)
            			        地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
            			    [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
            			*/
            id: function() {
              var r, u = 0, o = [
                "7",
                "9",
                "10",
                "5",
                "8",
                "4",
                "2",
                "1",
                "6",
                "3",
                "7",
                "9",
                "10",
                "5",
                "8",
                "4",
                "2"
              ], d = [
                "1",
                "0",
                "X",
                "9",
                "8",
                "7",
                "6",
                "5",
                "4",
                "3",
                "2"
              ];
              r = this.pick(a).id + this.date("yyyyMMdd") + this.string("number", 3);
              for (var f = 0; f < r.length; f++)
                u += r[f] * o[f];
              return r += d[u % 11], r;
            },
            /*
                生成一个全局的自增整数。
                类似自增主键（auto increment primary key）。
            */
            increment: function() {
              var r = 0;
              return function(u) {
                return r += +u || 1;
              };
            }(),
            inc: function(r) {
              return this.increment(r);
            }
          };
        },
        /* 20 */
        /***/
        function(n, l, e) {
          var a = e(21), r = e(22);
          n.exports = {
            Parser: a,
            Handler: r
          };
        },
        /* 21 */
        /***/
        function(n, l) {
          function e(z) {
            this.type = z, this.offset = e.offset(), this.text = e.text();
          }
          function a(z, I) {
            e.call(this, "alternate"), this.left = z, this.right = I;
          }
          function r(z) {
            e.call(this, "match"), this.body = z.filter(Boolean);
          }
          function u(z, I) {
            e.call(this, z), this.body = I;
          }
          function o(z) {
            u.call(this, "capture-group"), this.index = $[this.offset] || ($[this.offset] = P++), this.body = z;
          }
          function d(z, I) {
            e.call(this, "quantified"), this.body = z, this.quantifier = I;
          }
          function f(z, I) {
            e.call(this, "quantifier"), this.min = z, this.max = I, this.greedy = !0;
          }
          function c(z, I) {
            e.call(this, "charset"), this.invert = z, this.body = I;
          }
          function p(z, I) {
            e.call(this, "range"), this.start = z, this.end = I;
          }
          function g(z) {
            e.call(this, "literal"), this.body = z, this.escaped = this.body != this.text;
          }
          function _(z) {
            e.call(this, "unicode"), this.code = z.toUpperCase();
          }
          function x(z) {
            e.call(this, "hex"), this.code = z.toUpperCase();
          }
          function m(z) {
            e.call(this, "octal"), this.code = z.toUpperCase();
          }
          function v(z) {
            e.call(this, "back-reference"), this.code = z.toUpperCase();
          }
          function y(z) {
            e.call(this, "control-character"), this.code = z.toUpperCase();
          }
          var C = function() {
            function z(S, O) {
              function N() {
                this.constructor = S;
              }
              N.prototype = O.prototype, S.prototype = new N();
            }
            function I(S, O, N, T, w) {
              function j(D, B) {
                function V(Y) {
                  function G(H) {
                    return H.charCodeAt(0).toString(16).toUpperCase();
                  }
                  return Y.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(H) {
                    return "\\x0" + G(H);
                  }).replace(/[\x10-\x1F\x80-\xFF]/g, function(H) {
                    return "\\x" + G(H);
                  }).replace(/[\u0180-\u0FFF]/g, function(H) {
                    return "\\u0" + G(H);
                  }).replace(/[\u1080-\uFFFF]/g, function(H) {
                    return "\\u" + G(H);
                  });
                }
                var F, q;
                switch (D.length) {
                  case 0:
                    F = "end of input";
                    break;
                  case 1:
                    F = D[0];
                    break;
                  default:
                    F = D.slice(0, -1).join(", ") + " or " + D[D.length - 1];
                }
                return q = B ? '"' + V(B) + '"' : "end of input", "Expected " + F + " but " + q + " found.";
              }
              this.expected = S, this.found = O, this.offset = N, this.line = T, this.column = w, this.name = "SyntaxError", this.message = j(S, O);
            }
            function M(S) {
              function O() {
                return S.substring(A, h);
              }
              function N() {
                return A;
              }
              function T(t) {
                function s(b, k, L) {
                  var U, X;
                  for (U = k; L > U; U++)
                    X = S.charAt(U), X === `
` ? (b.seenCR || b.line++, b.column = 1, b.seenCR = !1) : X === "\r" || X === "\u2028" || X === "\u2029" ? (b.line++, b.column = 1, b.seenCR = !0) : (b.column++, b.seenCR = !1);
                }
                return W !== t && (W > t && (W = 0, fe = {
                  line: 1,
                  column: 1,
                  seenCR: !1
                }), s(fe, W, t), W = t), fe;
              }
              function w(t) {
                ae > h || (h > ae && (ae = h, le = []), le.push(t));
              }
              function j(t) {
                var s = 0;
                for (t.sort(); s < t.length; )
                  t[s - 1] === t[s] ? t.splice(s, 1) : s++;
              }
              function D() {
                var t, s, b, k, L;
                return t = h, s = B(), s !== null ? (b = h, S.charCodeAt(h) === 124 ? (k = Lt, h++) : (k = null, R === 0 && w(It)), k !== null ? (L = D(), L !== null ? (k = [k, L], b = k) : (h = b, b = E)) : (h = b, b = E), b === null && (b = K), b !== null ? (A = t, s = Dt(s, b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function B() {
                var t, s, b, k, L;
                if (t = h, s = F(), s === null && (s = K), s !== null)
                  if (b = h, R++, k = G(), R--, k === null ? b = K : (h = b, b = E), b !== null) {
                    for (k = [], L = Y(), L === null && (L = V()); L !== null; )
                      k.push(L), L = Y(), L === null && (L = V());
                    k !== null ? (L = q(), L === null && (L = K), L !== null ? (A = t, s = Nt(s, k, L), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E);
                  } else
                    h = t, t = E;
                else
                  h = t, t = E;
                return t;
              }
              function V() {
                var t;
                return t = yt(), t === null && (t = wt(), t === null && (t = $t())), t;
              }
              function F() {
                var t, s;
                return t = h, S.charCodeAt(h) === 94 ? (s = Pe, h++) : (s = null, R === 0 && w(Me)), s !== null && (A = t, s = Ft()), s === null && (h = t), t = s, t;
              }
              function q() {
                var t, s;
                return t = h, S.charCodeAt(h) === 36 ? (s = Ht, h++) : (s = null, R === 0 && w(jt)), s !== null && (A = t, s = Vt()), s === null && (h = t), t = s, t;
              }
              function Y() {
                var t, s, b;
                return t = h, s = V(), s !== null ? (b = G(), b !== null ? (A = t, s = Ut(s, b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function G() {
                var t, s, b;
                return R++, t = h, s = H(), s !== null ? (b = _t(), b === null && (b = K), b !== null ? (A = t, s = qt(s, b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), R--, t === null && (s = null, R === 0 && w(Bt)), t;
              }
              function H() {
                var t;
                return t = dt(), t === null && (t = ht(), t === null && (t = pt(), t === null && (t = mt(), t === null && (t = vt(), t === null && (t = gt()))))), t;
              }
              function dt() {
                var t, s, b, k, L, U;
                return t = h, S.charCodeAt(h) === 123 ? (s = oe, h++) : (s = null, R === 0 && w(ue)), s !== null ? (b = J(), b !== null ? (S.charCodeAt(h) === 44 ? (k = Gt, h++) : (k = null, R === 0 && w(Kt)), k !== null ? (L = J(), L !== null ? (S.charCodeAt(h) === 125 ? (U = Oe, h++) : (U = null, R === 0 && w(Le)), U !== null ? (A = t, s = Wt(b, L), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E)) : (h = t, t = E)) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function ht() {
                var t, s, b, k;
                return t = h, S.charCodeAt(h) === 123 ? (s = oe, h++) : (s = null, R === 0 && w(ue)), s !== null ? (b = J(), b !== null ? (S.substr(h, 2) === Ie ? (k = Ie, h += 2) : (k = null, R === 0 && w(Xt)), k !== null ? (A = t, s = Yt(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function pt() {
                var t, s, b, k;
                return t = h, S.charCodeAt(h) === 123 ? (s = oe, h++) : (s = null, R === 0 && w(ue)), s !== null ? (b = J(), b !== null ? (S.charCodeAt(h) === 125 ? (k = Oe, h++) : (k = null, R === 0 && w(Le)), k !== null ? (A = t, s = Jt(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function mt() {
                var t, s;
                return t = h, S.charCodeAt(h) === 43 ? (s = Qt, h++) : (s = null, R === 0 && w(Zt)), s !== null && (A = t, s = e0()), s === null && (h = t), t = s, t;
              }
              function vt() {
                var t, s;
                return t = h, S.charCodeAt(h) === 42 ? (s = t0, h++) : (s = null, R === 0 && w(n0)), s !== null && (A = t, s = r0()), s === null && (h = t), t = s, t;
              }
              function gt() {
                var t, s;
                return t = h, S.charCodeAt(h) === 63 ? (s = De, h++) : (s = null, R === 0 && w(Ne)), s !== null && (A = t, s = i0()), s === null && (h = t), t = s, t;
              }
              function _t() {
                var t;
                return S.charCodeAt(h) === 63 ? (t = De, h++) : (t = null, R === 0 && w(Ne)), t;
              }
              function J() {
                var t, s, b;
                if (t = h, s = [], Fe.test(S.charAt(h)) ? (b = S.charAt(h), h++) : (b = null, R === 0 && w(He)), b !== null)
                  for (; b !== null; )
                    s.push(b), Fe.test(S.charAt(h)) ? (b = S.charAt(h), h++) : (b = null, R === 0 && w(He));
                else
                  s = E;
                return s !== null && (A = t, s = a0(s)), s === null && (h = t), t = s, t;
              }
              function yt() {
                var t, s, b, k;
                return t = h, S.charCodeAt(h) === 40 ? (s = l0, h++) : (s = null, R === 0 && w(s0)), s !== null ? (b = St(), b === null && (b = Ct(), b === null && (b = xt(), b === null && (b = bt()))), b !== null ? (S.charCodeAt(h) === 41 ? (k = o0, h++) : (k = null, R === 0 && w(u0)), k !== null ? (A = t, s = c0(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function bt() {
                var t, s;
                return t = h, s = D(), s !== null && (A = t, s = f0(s)), s === null && (h = t), t = s, t;
              }
              function xt() {
                var t, s, b;
                return t = h, S.substr(h, 2) === je ? (s = je, h += 2) : (s = null, R === 0 && w(d0)), s !== null ? (b = D(), b !== null ? (A = t, s = h0(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function St() {
                var t, s, b;
                return t = h, S.substr(h, 2) === Ve ? (s = Ve, h += 2) : (s = null, R === 0 && w(p0)), s !== null ? (b = D(), b !== null ? (A = t, s = m0(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function Ct() {
                var t, s, b;
                return t = h, S.substr(h, 2) === Ue ? (s = Ue, h += 2) : (s = null, R === 0 && w(v0)), s !== null ? (b = D(), b !== null ? (A = t, s = g0(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function wt() {
                var t, s, b, k, L;
                if (R++, t = h, S.charCodeAt(h) === 91 ? (s = y0, h++) : (s = null, R === 0 && w(b0)), s !== null)
                  if (S.charCodeAt(h) === 94 ? (b = Pe, h++) : (b = null, R === 0 && w(Me)), b === null && (b = K), b !== null) {
                    for (k = [], L = de(), L === null && (L = Q()); L !== null; )
                      k.push(L), L = de(), L === null && (L = Q());
                    k !== null ? (S.charCodeAt(h) === 93 ? (L = x0, h++) : (L = null, R === 0 && w(S0)), L !== null ? (A = t, s = C0(b, k), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E);
                  } else
                    h = t, t = E;
                else
                  h = t, t = E;
                return R--, t === null && (s = null, R === 0 && w(_0)), t;
              }
              function de() {
                var t, s, b, k;
                return R++, t = h, s = Q(), s !== null ? (S.charCodeAt(h) === 45 ? (b = R0, h++) : (b = null, R === 0 && w(k0)), b !== null ? (k = Q(), k !== null ? (A = t, s = $0(s, k), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E)) : (h = t, t = E), R--, t === null && (s = null, R === 0 && w(w0)), t;
              }
              function Q() {
                var t;
                return R++, t = kt(), t === null && (t = Rt()), R--, t === null && R === 0 && w(E0), t;
              }
              function Rt() {
                var t, s;
                return t = h, A0.test(S.charAt(h)) ? (s = S.charAt(h), h++) : (s = null, R === 0 && w(T0)), s !== null && (A = t, s = ce(s)), s === null && (h = t), t = s, t;
              }
              function kt() {
                var t;
                return t = zt(), t === null && (t = we(), t === null && (t = he(), t === null && (t = pe(), t === null && (t = me(), t === null && (t = ve(), t === null && (t = ge(), t === null && (t = _e(), t === null && (t = ye(), t === null && (t = be(), t === null && (t = xe(), t === null && (t = Se(), t === null && (t = Ce(), t === null && (t = Re(), t === null && (t = ke(), t === null && (t = $e(), t === null && (t = Ee(), t === null && (t = Ae()))))))))))))))))), t;
              }
              function $t() {
                var t;
                return t = Et(), t === null && (t = Tt(), t === null && (t = At())), t;
              }
              function Et() {
                var t, s;
                return t = h, S.charCodeAt(h) === 46 ? (s = z0, h++) : (s = null, R === 0 && w(P0)), s !== null && (A = t, s = M0()), s === null && (h = t), t = s, t;
              }
              function At() {
                var t, s;
                return R++, t = h, L0.test(S.charAt(h)) ? (s = S.charAt(h), h++) : (s = null, R === 0 && w(I0)), s !== null && (A = t, s = ce(s)), s === null && (h = t), t = s, R--, t === null && (s = null, R === 0 && w(O0)), t;
              }
              function Tt() {
                var t;
                return t = Pt(), t === null && (t = Mt(), t === null && (t = we(), t === null && (t = he(), t === null && (t = pe(), t === null && (t = me(), t === null && (t = ve(), t === null && (t = ge(), t === null && (t = _e(), t === null && (t = ye(), t === null && (t = be(), t === null && (t = xe(), t === null && (t = Se(), t === null && (t = Ce(), t === null && (t = Ot(), t === null && (t = Re(), t === null && (t = ke(), t === null && (t = $e(), t === null && (t = Ee(), t === null && (t = Ae()))))))))))))))))))), t;
              }
              function zt() {
                var t, s;
                return t = h, S.substr(h, 2) === ee ? (s = ee, h += 2) : (s = null, R === 0 && w(Be)), s !== null && (A = t, s = D0()), s === null && (h = t), t = s, t;
              }
              function Pt() {
                var t, s;
                return t = h, S.substr(h, 2) === ee ? (s = ee, h += 2) : (s = null, R === 0 && w(Be)), s !== null && (A = t, s = N0()), s === null && (h = t), t = s, t;
              }
              function Mt() {
                var t, s;
                return t = h, S.substr(h, 2) === qe ? (s = qe, h += 2) : (s = null, R === 0 && w(F0)), s !== null && (A = t, s = H0()), s === null && (h = t), t = s, t;
              }
              function he() {
                var t, s;
                return t = h, S.substr(h, 2) === Ge ? (s = Ge, h += 2) : (s = null, R === 0 && w(j0)), s !== null && (A = t, s = V0()), s === null && (h = t), t = s, t;
              }
              function pe() {
                var t, s;
                return t = h, S.substr(h, 2) === Ke ? (s = Ke, h += 2) : (s = null, R === 0 && w(U0)), s !== null && (A = t, s = B0()), s === null && (h = t), t = s, t;
              }
              function me() {
                var t, s;
                return t = h, S.substr(h, 2) === We ? (s = We, h += 2) : (s = null, R === 0 && w(q0)), s !== null && (A = t, s = G0()), s === null && (h = t), t = s, t;
              }
              function ve() {
                var t, s;
                return t = h, S.substr(h, 2) === Xe ? (s = Xe, h += 2) : (s = null, R === 0 && w(K0)), s !== null && (A = t, s = W0()), s === null && (h = t), t = s, t;
              }
              function ge() {
                var t, s;
                return t = h, S.substr(h, 2) === Ye ? (s = Ye, h += 2) : (s = null, R === 0 && w(X0)), s !== null && (A = t, s = Y0()), s === null && (h = t), t = s, t;
              }
              function _e() {
                var t, s;
                return t = h, S.substr(h, 2) === Je ? (s = Je, h += 2) : (s = null, R === 0 && w(J0)), s !== null && (A = t, s = Q0()), s === null && (h = t), t = s, t;
              }
              function ye() {
                var t, s;
                return t = h, S.substr(h, 2) === Qe ? (s = Qe, h += 2) : (s = null, R === 0 && w(Z0)), s !== null && (A = t, s = en()), s === null && (h = t), t = s, t;
              }
              function be() {
                var t, s;
                return t = h, S.substr(h, 2) === Ze ? (s = Ze, h += 2) : (s = null, R === 0 && w(tn)), s !== null && (A = t, s = nn()), s === null && (h = t), t = s, t;
              }
              function xe() {
                var t, s;
                return t = h, S.substr(h, 2) === et ? (s = et, h += 2) : (s = null, R === 0 && w(rn)), s !== null && (A = t, s = an()), s === null && (h = t), t = s, t;
              }
              function Se() {
                var t, s;
                return t = h, S.substr(h, 2) === tt ? (s = tt, h += 2) : (s = null, R === 0 && w(ln)), s !== null && (A = t, s = sn()), s === null && (h = t), t = s, t;
              }
              function Ce() {
                var t, s;
                return t = h, S.substr(h, 2) === nt ? (s = nt, h += 2) : (s = null, R === 0 && w(on)), s !== null && (A = t, s = un()), s === null && (h = t), t = s, t;
              }
              function we() {
                var t, s, b;
                return t = h, S.substr(h, 2) === rt ? (s = rt, h += 2) : (s = null, R === 0 && w(cn)), s !== null ? (S.length > h ? (b = S.charAt(h), h++) : (b = null, R === 0 && w(it)), b !== null ? (A = t, s = fn(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function Ot() {
                var t, s, b;
                return t = h, S.charCodeAt(h) === 92 ? (s = at, h++) : (s = null, R === 0 && w(lt)), s !== null ? (dn.test(S.charAt(h)) ? (b = S.charAt(h), h++) : (b = null, R === 0 && w(hn)), b !== null ? (A = t, s = pn(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              function Re() {
                var t, s, b, k;
                if (t = h, S.substr(h, 2) === te ? (s = te, h += 2) : (s = null, R === 0 && w(st)), s !== null) {
                  if (b = [], ot.test(S.charAt(h)) ? (k = S.charAt(h), h++) : (k = null, R === 0 && w(ut)), k !== null)
                    for (; k !== null; )
                      b.push(k), ot.test(S.charAt(h)) ? (k = S.charAt(h), h++) : (k = null, R === 0 && w(ut));
                  else
                    b = E;
                  b !== null ? (A = t, s = mn(b), s === null && (h = t), t = s) : (h = t, t = E);
                } else
                  h = t, t = E;
                return t;
              }
              function ke() {
                var t, s, b, k;
                if (t = h, S.substr(h, 2) === ct ? (s = ct, h += 2) : (s = null, R === 0 && w(vn)), s !== null) {
                  if (b = [], ne.test(S.charAt(h)) ? (k = S.charAt(h), h++) : (k = null, R === 0 && w(ie)), k !== null)
                    for (; k !== null; )
                      b.push(k), ne.test(S.charAt(h)) ? (k = S.charAt(h), h++) : (k = null, R === 0 && w(ie));
                  else
                    b = E;
                  b !== null ? (A = t, s = gn(b), s === null && (h = t), t = s) : (h = t, t = E);
                } else
                  h = t, t = E;
                return t;
              }
              function $e() {
                var t, s, b, k;
                if (t = h, S.substr(h, 2) === ft ? (s = ft, h += 2) : (s = null, R === 0 && w(_n)), s !== null) {
                  if (b = [], ne.test(S.charAt(h)) ? (k = S.charAt(h), h++) : (k = null, R === 0 && w(ie)), k !== null)
                    for (; k !== null; )
                      b.push(k), ne.test(S.charAt(h)) ? (k = S.charAt(h), h++) : (k = null, R === 0 && w(ie));
                  else
                    b = E;
                  b !== null ? (A = t, s = yn(b), s === null && (h = t), t = s) : (h = t, t = E);
                } else
                  h = t, t = E;
                return t;
              }
              function Ee() {
                var t, s;
                return t = h, S.substr(h, 2) === te ? (s = te, h += 2) : (s = null, R === 0 && w(st)), s !== null && (A = t, s = bn()), s === null && (h = t), t = s, t;
              }
              function Ae() {
                var t, s, b;
                return t = h, S.charCodeAt(h) === 92 ? (s = at, h++) : (s = null, R === 0 && w(lt)), s !== null ? (S.length > h ? (b = S.charAt(h), h++) : (b = null, R === 0 && w(it)), b !== null ? (A = t, s = ce(b), s === null && (h = t), t = s) : (h = t, t = E)) : (h = t, t = E), t;
              }
              var se, Z = arguments.length > 1 ? arguments[1] : {}, Te = {
                regexp: D
              }, ze = D, E = null, K = "", Lt = "|", It = '"|"', Dt = function(t, s) {
                return s ? new a(t, s[1]) : t;
              }, Nt = function(t, s, b) {
                return new r([t].concat(s).concat([b]));
              }, Pe = "^", Me = '"^"', Ft = function() {
                return new e("start");
              }, Ht = "$", jt = '"$"', Vt = function() {
                return new e("end");
              }, Ut = function(t, s) {
                return new d(t, s);
              }, Bt = "Quantifier", qt = function(t, s) {
                return s && (t.greedy = !1), t;
              }, oe = "{", ue = '"{"', Gt = ",", Kt = '","', Oe = "}", Le = '"}"', Wt = function(t, s) {
                return new f(t, s);
              }, Ie = ",}", Xt = '",}"', Yt = function(t) {
                return new f(t, 1 / 0);
              }, Jt = function(t) {
                return new f(t, t);
              }, Qt = "+", Zt = '"+"', e0 = function() {
                return new f(1, 1 / 0);
              }, t0 = "*", n0 = '"*"', r0 = function() {
                return new f(0, 1 / 0);
              }, De = "?", Ne = '"?"', i0 = function() {
                return new f(0, 1);
              }, Fe = /^[0-9]/, He = "[0-9]", a0 = function(t) {
                return +t.join("");
              }, l0 = "(", s0 = '"("', o0 = ")", u0 = '")"', c0 = function(t) {
                return t;
              }, f0 = function(t) {
                return new o(t);
              }, je = "?:", d0 = '"?:"', h0 = function(t) {
                return new u("non-capture-group", t);
              }, Ve = "?=", p0 = '"?="', m0 = function(t) {
                return new u("positive-lookahead", t);
              }, Ue = "?!", v0 = '"?!"', g0 = function(t) {
                return new u("negative-lookahead", t);
              }, _0 = "CharacterSet", y0 = "[", b0 = '"["', x0 = "]", S0 = '"]"', C0 = function(t, s) {
                return new c(!!t, s);
              }, w0 = "CharacterRange", R0 = "-", k0 = '"-"', $0 = function(t, s) {
                return new p(t, s);
              }, E0 = "Character", A0 = /^[^\\\]]/, T0 = "[^\\\\\\]]", ce = function(t) {
                return new g(t);
              }, z0 = ".", P0 = '"."', M0 = function() {
                return new e("any-character");
              }, O0 = "Literal", L0 = /^[^|\\\/.[()?+*$\^]/, I0 = "[^|\\\\\\/.[()?+*$\\^]", ee = "\\b", Be = '"\\\\b"', D0 = function() {
                return new e("backspace");
              }, N0 = function() {
                return new e("word-boundary");
              }, qe = "\\B", F0 = '"\\\\B"', H0 = function() {
                return new e("non-word-boundary");
              }, Ge = "\\d", j0 = '"\\\\d"', V0 = function() {
                return new e("digit");
              }, Ke = "\\D", U0 = '"\\\\D"', B0 = function() {
                return new e("non-digit");
              }, We = "\\f", q0 = '"\\\\f"', G0 = function() {
                return new e("form-feed");
              }, Xe = "\\n", K0 = '"\\\\n"', W0 = function() {
                return new e("line-feed");
              }, Ye = "\\r", X0 = '"\\\\r"', Y0 = function() {
                return new e("carriage-return");
              }, Je = "\\s", J0 = '"\\\\s"', Q0 = function() {
                return new e("white-space");
              }, Qe = "\\S", Z0 = '"\\\\S"', en = function() {
                return new e("non-white-space");
              }, Ze = "\\t", tn = '"\\\\t"', nn = function() {
                return new e("tab");
              }, et = "\\v", rn = '"\\\\v"', an = function() {
                return new e("vertical-tab");
              }, tt = "\\w", ln = '"\\\\w"', sn = function() {
                return new e("word");
              }, nt = "\\W", on = '"\\\\W"', un = function() {
                return new e("non-word");
              }, rt = "\\c", cn = '"\\\\c"', it = "any character", fn = function(t) {
                return new y(t);
              }, at = "\\", lt = '"\\\\"', dn = /^[1-9]/, hn = "[1-9]", pn = function(t) {
                return new v(t);
              }, te = "\\0", st = '"\\\\0"', ot = /^[0-7]/, ut = "[0-7]", mn = function(t) {
                return new m(t.join(""));
              }, ct = "\\x", vn = '"\\\\x"', ne = /^[0-9a-fA-F]/, ie = "[0-9a-fA-F]", gn = function(t) {
                return new x(t.join(""));
              }, ft = "\\u", _n = '"\\\\u"', yn = function(t) {
                return new _(t.join(""));
              }, bn = function() {
                return new e("null-character");
              }, h = 0, A = 0, W = 0, fe = {
                line: 1,
                column: 1,
                seenCR: !1
              }, ae = 0, le = [], R = 0;
              if ("startRule" in Z) {
                if (!(Z.startRule in Te))
                  throw new Error(`Can't start parsing from rule "` + Z.startRule + '".');
                ze = Te[Z.startRule];
              }
              if (e.offset = N, e.text = O, se = ze(), se !== null && h === S.length)
                return se;
              throw j(le), A = Math.max(h, ae), new I(le, A < S.length ? S.charAt(A) : null, A, T(A).line, T(A).column);
            }
            return z(I, Error), {
              SyntaxError: I,
              parse: M
            };
          }(), P = 1, $ = {};
          n.exports = C;
        },
        /* 22 */
        /***/
        function(n, l, e) {
          var a = e(3), r = e(5), u = {
            extend: a.extend
          }, o = x(97, 122), d = x(65, 90), f = x(48, 57), c = x(32, 47) + x(58, 64) + x(91, 96) + x(123, 126), p = x(32, 126), g = ` \f
\r	\v \u2028\u2029`, _ = {
            "\\w": o + d + f + "_",
            // ascii(95, 95)
            "\\W": c.replace("_", ""),
            "\\s": g,
            "\\S": function() {
              for (var m = p, v = 0; v < g.length; v++)
                m = m.replace(g[v], "");
              return m;
            }(),
            "\\d": f,
            "\\D": o + d + c
          };
          function x(m, v) {
            for (var y = "", C = m; C <= v; C++)
              y += String.fromCharCode(C);
            return y;
          }
          u.gen = function(m, v, y) {
            return y = y || {
              guid: 1
            }, u[m.type] ? u[m.type](m, v, y) : u.token(m, v, y);
          }, u.extend({
            /* jshint unused:false */
            token: function(m, v, y) {
              switch (m.type) {
                case "start":
                case "end":
                  return "";
                case "any-character":
                  return r.character();
                case "backspace":
                  return "";
                case "word-boundary":
                  return "";
                case "non-word-boundary":
                  break;
                case "digit":
                  return r.pick(
                    f.split("")
                  );
                case "non-digit":
                  return r.pick(
                    (o + d + c).split("")
                  );
                case "form-feed":
                  break;
                case "line-feed":
                  return m.body || m.text;
                case "carriage-return":
                  break;
                case "white-space":
                  return r.pick(
                    g.split("")
                  );
                case "non-white-space":
                  return r.pick(
                    (o + d + f).split("")
                  );
                case "tab":
                  break;
                case "vertical-tab":
                  break;
                case "word":
                  return r.pick(
                    (o + d + f).split("")
                  );
                case "non-word":
                  return r.pick(
                    c.replace("_", "").split("")
                  );
              }
              return m.body || m.text;
            },
            /*
                {
                    type: 'alternate',
                    offset: 0,
                    text: '',
                    left: {
                        boyd: []
                    },
                    right: {
                        boyd: []
                    }
                }
            */
            alternate: function(m, v, y) {
              return this.gen(
                r.boolean() ? m.left : m.right,
                v,
                y
              );
            },
            /*
                {
                    type: 'match',
                    offset: 0,
                    text: '',
                    body: []
                }
            */
            match: function(m, v, y) {
              v = "";
              for (var C = 0; C < m.body.length; C++)
                v += this.gen(m.body[C], v, y);
              return v;
            },
            // ()
            "capture-group": function(m, v, y) {
              return v = this.gen(m.body, v, y), y[y.guid++] = v, v;
            },
            // (?:...)
            "non-capture-group": function(m, v, y) {
              return this.gen(m.body, v, y);
            },
            // (?=p)
            "positive-lookahead": function(m, v, y) {
              return this.gen(m.body, v, y);
            },
            // (?!p)
            "negative-lookahead": function(m, v, y) {
              return "";
            },
            /*
                {
                    type: 'quantified',
                    offset: 3,
                    text: 'c*',
                    body: {
                        type: 'literal',
                        offset: 3,
                        text: 'c',
                        body: 'c',
                        escaped: false
                    },
                    quantifier: {
                        type: 'quantifier',
                        offset: 4,
                        text: '*',
                        min: 0,
                        max: Infinity,
                        greedy: true
                    }
                }
            */
            quantified: function(m, v, y) {
              v = "";
              for (var C = this.quantifier(m.quantifier), P = 0; P < C; P++)
                v += this.gen(m.body, v, y);
              return v;
            },
            /*
                quantifier: {
                    type: 'quantifier',
                    offset: 4,
                    text: '*',
                    min: 0,
                    max: Infinity,
                    greedy: true
                }
            */
            quantifier: function(m, v, y) {
              var C = Math.max(m.min, 0), P = isFinite(m.max) ? m.max : C + r.integer(3, 7);
              return r.integer(C, P);
            },
            /*
                
            */
            charset: function(m, v, y) {
              if (m.invert)
                return this["invert-charset"](m, v, y);
              var C = r.pick(m.body);
              return this.gen(C, v, y);
            },
            "invert-charset": function(m, v, y) {
              for (var C = p, P = 0, $; P < m.body.length; P++)
                switch ($ = m.body[P], $.type) {
                  case "literal":
                    C = C.replace($.body, "");
                    break;
                  case "range":
                    for (var z = this.gen($.start, v, y).charCodeAt(), I = this.gen($.end, v, y).charCodeAt(), M = z; M <= I; M++)
                      C = C.replace(String.fromCharCode(M), "");
                  default:
                    var S = _[$.text];
                    if (S)
                      for (var O = 0; O <= S.length; O++)
                        C = C.replace(S[O], "");
                }
              return r.pick(C.split(""));
            },
            range: function(m, v, y) {
              var C = this.gen(m.start, v, y).charCodeAt(), P = this.gen(m.end, v, y).charCodeAt();
              return String.fromCharCode(
                r.integer(C, P)
              );
            },
            literal: function(m, v, y) {
              return m.escaped ? m.body : m.text;
            },
            // Unicode \u
            unicode: function(m, v, y) {
              return String.fromCharCode(
                parseInt(m.code, 16)
              );
            },
            // 十六进制 \xFF
            hex: function(m, v, y) {
              return String.fromCharCode(
                parseInt(m.code, 16)
              );
            },
            // 八进制 \0
            octal: function(m, v, y) {
              return String.fromCharCode(
                parseInt(m.code, 8)
              );
            },
            // 反向引用
            "back-reference": function(m, v, y) {
              return y[m.code] || "";
            },
            /*
                http://en.wikipedia.org/wiki/C0_and_C1_control_codes
            */
            CONTROL_CHARACTER_MAP: function() {
              for (var m = "@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _".split(" "), v = `\0       \x07 \b 	 
 \v \f \r              \x1B    `.split(" "), y = {}, C = 0; C < m.length; C++)
                y[m[C]] = v[C];
              return y;
            }(),
            "control-character": function(m, v, y) {
              return this.CONTROL_CHARACTER_MAP[m.code];
            }
          }), n.exports = u;
        },
        /* 23 */
        /***/
        function(n, l, e) {
          n.exports = e(24);
        },
        /* 24 */
        /***/
        function(n, l, e) {
          var a = e(2), r = e(3), u = e(4);
          function o(d, f, c) {
            c = c || [];
            var p = {
              name: typeof f == "string" ? f.replace(a.RE_KEY, "$1") : f,
              template: d,
              type: r.type(d),
              // 可能不准确，例如 { 'name|1': [{}, {} ...] }
              rule: u.parse(f)
            };
            switch (p.path = c.slice(0), p.path.push(f === void 0 ? "ROOT" : p.name), p.type) {
              case "array":
                p.items = [], r.each(d, function(g, _) {
                  p.items.push(
                    o(g, _, p.path)
                  );
                });
                break;
              case "object":
                p.properties = [], r.each(d, function(g, _) {
                  p.properties.push(
                    o(g, _, p.path)
                  );
                });
                break;
            }
            return p;
          }
          n.exports = o;
        },
        /* 25 */
        /***/
        function(n, l, e) {
          n.exports = e(26);
        },
        /* 26 */
        /***/
        function(n, l, e) {
          var a = e(2), r = e(3), u = e(23);
          function o(c, p) {
            for (var g = u(c), _ = d.diff(g, p), x = 0; x < _.length; x++)
              ;
            return _;
          }
          var d = {
            diff: function(p, g, _) {
              var x = [];
              return this.name(p, g, _, x) && this.type(p, g, _, x) && (this.value(p, g, _, x), this.properties(p, g, _, x), this.items(p, g, _, x)), x;
            },
            /* jshint unused:false */
            name: function(c, p, g, _) {
              var x = _.length;
              return f.equal("name", c.path, g + "", c.name + "", _), _.length === x;
            },
            type: function(c, p, g, _) {
              var x = _.length;
              switch (c.type) {
                case "string":
                  if (c.template.match(a.RE_PLACEHOLDER))
                    return !0;
                  break;
                case "array":
                  if (c.rule.parameters && (c.rule.min !== void 0 && c.rule.max === void 0 && c.rule.count === 1 || c.rule.parameters[2]))
                    return !0;
                  break;
                case "function":
                  return !0;
              }
              return f.equal("type", c.path, r.type(p), c.type, _), _.length === x;
            },
            value: function(c, p, g, _) {
              var x = _.length, m = c.rule, v = c.type;
              if (v === "object" || v === "array" || v === "function")
                return !0;
              if (!m.parameters) {
                switch (v) {
                  case "regexp":
                    return f.match("value", c.path, p, c.template, _), _.length === x;
                  case "string":
                    if (c.template.match(a.RE_PLACEHOLDER))
                      return _.length === x;
                    break;
                }
                return f.equal("value", c.path, p, c.template, _), _.length === x;
              }
              var y;
              switch (v) {
                case "number":
                  var C = (p + "").split(".");
                  C[0] = +C[0], m.min !== void 0 && m.max !== void 0 && (f.greaterThanOrEqualTo("value", c.path, C[0], Math.min(m.min, m.max), _), f.lessThanOrEqualTo("value", c.path, C[0], Math.max(m.min, m.max), _)), m.min !== void 0 && m.max === void 0 && f.equal("value", c.path, C[0], m.min, _, "[value] " + g), m.decimal && (m.dmin !== void 0 && m.dmax !== void 0 && (f.greaterThanOrEqualTo("value", c.path, C[1].length, m.dmin, _), f.lessThanOrEqualTo("value", c.path, C[1].length, m.dmax, _)), m.dmin !== void 0 && m.dmax === void 0 && f.equal("value", c.path, C[1].length, m.dmin, _));
                  break;
                case "boolean":
                  break;
                case "string":
                  y = p.match(new RegExp(c.template, "g")), y = y ? y.length : 0, m.min !== void 0 && m.max !== void 0 && (f.greaterThanOrEqualTo("repeat count", c.path, y, m.min, _), f.lessThanOrEqualTo("repeat count", c.path, y, m.max, _)), m.min !== void 0 && m.max === void 0 && f.equal("repeat count", c.path, y, m.min, _);
                  break;
                case "regexp":
                  y = p.match(new RegExp(c.template.source.replace(/^\^|\$$/g, ""), "g")), y = y ? y.length : 0, m.min !== void 0 && m.max !== void 0 && (f.greaterThanOrEqualTo("repeat count", c.path, y, m.min, _), f.lessThanOrEqualTo("repeat count", c.path, y, m.max, _)), m.min !== void 0 && m.max === void 0 && f.equal("repeat count", c.path, y, m.min, _);
                  break;
              }
              return _.length === x;
            },
            properties: function(c, p, g, _) {
              var x = _.length, m = c.rule, v = r.keys(p);
              if (c.properties) {
                if (c.rule.parameters ? (m.min !== void 0 && m.max !== void 0 && (f.greaterThanOrEqualTo("properties length", c.path, v.length, Math.min(m.min, m.max), _), f.lessThanOrEqualTo("properties length", c.path, v.length, Math.max(m.min, m.max), _)), m.min !== void 0 && m.max === void 0 && m.count !== 1 && f.equal("properties length", c.path, v.length, m.min, _)) : f.equal("properties length", c.path, v.length, c.properties.length, _), _.length !== x)
                  return !1;
                for (var y = 0; y < v.length; y++)
                  _.push.apply(
                    _,
                    this.diff(
                      function() {
                        var C;
                        return r.each(c.properties, function(P) {
                          P.name === v[y] && (C = P);
                        }), C || c.properties[y];
                      }(),
                      p[v[y]],
                      v[y]
                    )
                  );
                return _.length === x;
              }
            },
            items: function(c, p, g, _) {
              var x = _.length;
              if (c.items) {
                var m = c.rule;
                if (!c.rule.parameters)
                  f.equal("items length", c.path, p.length, c.items.length, _);
                else {
                  if (m.min !== void 0 && m.max !== void 0 && (f.greaterThanOrEqualTo(
                    "items",
                    c.path,
                    p.length,
                    Math.min(m.min, m.max) * c.items.length,
                    _,
                    "[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements"
                  ), f.lessThanOrEqualTo(
                    "items",
                    c.path,
                    p.length,
                    Math.max(m.min, m.max) * c.items.length,
                    _,
                    "[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements"
                  )), m.min !== void 0 && m.max === void 0) {
                    if (m.count === 1)
                      return _.length === x;
                    f.equal("items length", c.path, p.length, m.min * c.items.length, _);
                  }
                  if (m.parameters[2])
                    return _.length === x;
                }
                if (_.length !== x)
                  return !1;
                for (var v = 0; v < p.length; v++)
                  _.push.apply(
                    _,
                    this.diff(
                      c.items[v % c.items.length],
                      p[v],
                      v % c.items.length
                    )
                  );
                return _.length === x;
              }
            }
          }, f = {
            message: function(c) {
              return (c.message || "[{utype}] Expect {path}'{ltype} {action} {expected}, but is {actual}").replace("{utype}", c.type.toUpperCase()).replace("{ltype}", c.type.toLowerCase()).replace("{path}", r.isArray(c.path) && c.path.join(".") || c.path).replace("{action}", c.action).replace("{expected}", c.expected).replace("{actual}", c.actual);
            },
            equal: function(c, p, g, _, x, m) {
              if (g === _)
                return !0;
              switch (c) {
                case "type":
                  if (_ === "regexp" && g === "string")
                    return !0;
                  break;
              }
              var v = {
                path: p,
                type: c,
                actual: g,
                expected: _,
                action: "is equal to",
                message: m
              };
              return v.message = f.message(v), x.push(v), !1;
            },
            // actual matches expected
            match: function(c, p, g, _, x, m) {
              if (_.test(g))
                return !0;
              var v = {
                path: p,
                type: c,
                actual: g,
                expected: _,
                action: "matches",
                message: m
              };
              return v.message = f.message(v), x.push(v), !1;
            },
            notEqual: function(c, p, g, _, x, m) {
              if (g !== _)
                return !0;
              var v = {
                path: p,
                type: c,
                actual: g,
                expected: _,
                action: "is not equal to",
                message: m
              };
              return v.message = f.message(v), x.push(v), !1;
            },
            greaterThan: function(c, p, g, _, x, m) {
              if (g > _)
                return !0;
              var v = {
                path: p,
                type: c,
                actual: g,
                expected: _,
                action: "is greater than",
                message: m
              };
              return v.message = f.message(v), x.push(v), !1;
            },
            lessThan: function(c, p, g, _, x, m) {
              if (g < _)
                return !0;
              var v = {
                path: p,
                type: c,
                actual: g,
                expected: _,
                action: "is less to",
                message: m
              };
              return v.message = f.message(v), x.push(v), !1;
            },
            greaterThanOrEqualTo: function(c, p, g, _, x, m) {
              if (g >= _)
                return !0;
              var v = {
                path: p,
                type: c,
                actual: g,
                expected: _,
                action: "is greater than or equal to",
                message: m
              };
              return v.message = f.message(v), x.push(v), !1;
            },
            lessThanOrEqualTo: function(c, p, g, _, x, m) {
              if (g <= _)
                return !0;
              var v = {
                path: p,
                type: c,
                actual: g,
                expected: _,
                action: "is less than or equal to",
                message: m
              };
              return v.message = f.message(v), x.push(v), !1;
            }
          };
          o.Diff = d, o.Assert = f, n.exports = o;
        },
        /* 27 */
        /***/
        function(n, l, e) {
          n.exports = e(28);
        },
        /* 28 */
        /***/
        function(n, l, e) {
          var a = e(3);
          window._XMLHttpRequest = window.XMLHttpRequest, window._ActiveXObject = window.ActiveXObject;
          try {
            new window.Event("custom");
          } catch {
            window.Event = function(m, v, y, C) {
              var P = document.createEvent("CustomEvent");
              return P.initCustomEvent(m, v, y, C), P;
            };
          }
          var r = {
            // The object has been constructed.
            UNSENT: 0,
            // The open() method has been successfully invoked.
            OPENED: 1,
            // All redirects (if any) have been followed and all HTTP headers of the response have been received.
            HEADERS_RECEIVED: 2,
            // The response's body is being received.
            LOADING: 3,
            // The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
            DONE: 4
          }, u = "readystatechange loadstart progress abort error load timeout loadend".split(" "), o = "timeout withCredentials".split(" "), d = "readyState responseURL status statusText responseType response responseText responseXML".split(" "), f = {
            100: "Continue",
            101: "Switching Protocols",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            300: "Multiple Choice",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported"
          };
          function c() {
            this.custom = {
              events: {},
              requestHeaders: {},
              responseHeaders: {}
            };
          }
          c._settings = {
            timeout: "10-100"
            /*
                timeout: 50,
                timeout: '10-100',
             */
          }, c.setup = function(x) {
            return a.extend(c._settings, x), c._settings;
          }, a.extend(c, r), a.extend(c.prototype, r), c.prototype.mock = !0, c.prototype.match = !1, a.extend(c.prototype, {
            // https://xhr.spec.whatwg.org/#the-open()-method
            // Sets the request method, request URL, and synchronous flag.
            open: function(x, m, v, y, C) {
              var P = this;
              a.extend(this.custom, {
                method: x,
                url: m,
                async: typeof v == "boolean" ? v : !0,
                username: y,
                password: C,
                options: {
                  url: m,
                  type: x
                }
              }), this.custom.timeout = function(O) {
                if (typeof O == "number")
                  return O;
                if (typeof O == "string" && !~O.indexOf("-"))
                  return parseInt(O, 10);
                if (typeof O == "string" && ~O.indexOf("-")) {
                  var N = O.split("-"), T = parseInt(N[0], 10), w = parseInt(N[1], 10);
                  return Math.round(Math.random() * (w - T)) + T;
                }
              }(c._settings.timeout);
              var $ = g(this.custom.options);
              function z(O) {
                for (var N = 0; N < d.length; N++)
                  try {
                    P[d[N]] = I[d[N]];
                  } catch {
                  }
                P.dispatchEvent(new Event(
                  O.type
                  /*, false, false, that*/
                ));
              }
              if (!$) {
                var I = p();
                this.custom.xhr = I;
                for (var M = 0; M < u.length; M++)
                  I.addEventListener(u[M], z);
                y ? I.open(x, m, v, y, C) : I.open(x, m, v);
                for (var S = 0; S < o.length; S++)
                  try {
                    I[o[S]] = P[o[S]];
                  } catch {
                  }
                return;
              }
              this.match = !0, this.custom.template = $, this.readyState = c.OPENED, this.dispatchEvent(new Event(
                "readystatechange"
                /*, false, false, this*/
              ));
            },
            // https://xhr.spec.whatwg.org/#the-setrequestheader()-method
            // Combines a header in author request headers.
            setRequestHeader: function(x, m) {
              if (!this.match) {
                this.custom.xhr.setRequestHeader(x, m);
                return;
              }
              var v = this.custom.requestHeaders;
              v[x] ? v[x] += "," + m : v[x] = m;
            },
            timeout: 0,
            withCredentials: !1,
            upload: {},
            // https://xhr.spec.whatwg.org/#the-send()-method
            // Initiates the request.
            send: function(m) {
              var v = this;
              if (this.custom.options.body = m, !this.match) {
                this.custom.xhr.send(m);
                return;
              }
              this.setRequestHeader("X-Requested-With", "MockXMLHttpRequest"), this.dispatchEvent(new Event(
                "loadstart"
                /*, false, false, this*/
              )), this.custom.async ? setTimeout(y, this.custom.timeout) : y();
              function y() {
                v.readyState = c.HEADERS_RECEIVED, v.dispatchEvent(new Event(
                  "readystatechange"
                  /*, false, false, that*/
                )), v.readyState = c.LOADING, v.dispatchEvent(new Event(
                  "readystatechange"
                  /*, false, false, that*/
                )), v.status = 200, v.statusText = f[200], v.response = v.responseText = JSON.stringify(
                  _(v.custom.template, v.custom.options),
                  null,
                  4
                ), v.readyState = c.DONE, v.dispatchEvent(new Event(
                  "readystatechange"
                  /*, false, false, that*/
                )), v.dispatchEvent(new Event(
                  "load"
                  /*, false, false, that*/
                )), v.dispatchEvent(new Event(
                  "loadend"
                  /*, false, false, that*/
                ));
              }
            },
            // https://xhr.spec.whatwg.org/#the-abort()-method
            // Cancels any network activity.
            abort: function() {
              if (!this.match) {
                this.custom.xhr.abort();
                return;
              }
              this.readyState = c.UNSENT, this.dispatchEvent(new Event("abort", !1, !1, this)), this.dispatchEvent(new Event("error", !1, !1, this));
            }
          }), a.extend(c.prototype, {
            responseURL: "",
            status: c.UNSENT,
            statusText: "",
            // https://xhr.spec.whatwg.org/#the-getresponseheader()-method
            getResponseHeader: function(x) {
              return this.match ? this.custom.responseHeaders[x.toLowerCase()] : this.custom.xhr.getResponseHeader(x);
            },
            // https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
            // http://www.utf8-chartable.de/
            getAllResponseHeaders: function() {
              if (!this.match)
                return this.custom.xhr.getAllResponseHeaders();
              var x = this.custom.responseHeaders, m = "";
              for (var v in x)
                x.hasOwnProperty(v) && (m += v + ": " + x[v] + `\r
`);
              return m;
            },
            overrideMimeType: function() {
            },
            responseType: "",
            // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
            response: null,
            responseText: "",
            responseXML: null
          }), a.extend(c.prototype, {
            addEventListener: function(m, v) {
              var y = this.custom.events;
              y[m] || (y[m] = []), y[m].push(v);
            },
            removeEventListener: function(m, v) {
              for (var y = this.custom.events[m] || [], C = 0; C < y.length; C++)
                y[C] === v && y.splice(C--, 1);
            },
            dispatchEvent: function(m) {
              for (var v = this.custom.events[m.type] || [], y = 0; y < v.length; y++)
                v[y].call(this, m);
              var C = "on" + m.type;
              this[C] && this[C](m);
            }
          });
          function p() {
            var x = function() {
              var y = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, C = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, P = location.href, $ = C.exec(P.toLowerCase()) || [];
              return y.test($[1]);
            }();
            return window.ActiveXObject ? !x && m() || v() : m();
            function m() {
              try {
                return new window._XMLHttpRequest();
              } catch {
              }
            }
            function v() {
              try {
                return new window._ActiveXObject("Microsoft.XMLHTTP");
              } catch {
              }
            }
          }
          function g(x) {
            for (var m in c.Mock._mocked) {
              var v = c.Mock._mocked[m];
              if ((!v.rurl || y(v.rurl, x.url)) && (!v.rtype || y(v.rtype, x.type.toLowerCase())))
                return v;
            }
            function y(C, P) {
              if (a.type(C) === "string")
                return C === P;
              if (a.type(C) === "regexp")
                return C.test(P);
            }
          }
          function _(x, m) {
            return a.isFunction(x.template) ? x.template(m) : c.Mock.mock(x.template);
          }
          n.exports = c;
        }
        /******/
      ])
    );
  });
})(mock);
var mockExports = mock.exports;
const Mock = /* @__PURE__ */ getDefaultExportFromCjs(mockExports), App_vue_vue_type_style_index_0_scoped_5d1e0ec2_lang = "", _sfc_main = {
  __name: "App",
  setup(n) {
    const l = Mock.mock({
      "array|100": [
        {
          label: "@csentence(6)",
          value: "@increment()",
          "children|10": [
            {
              label: "@csentence(6)",
              value: "@increment()",
              "children|10": [
                {
                  label: "@csentence(6)",
                  value: "@increment()"
                }
              ]
            }
          ]
        }
      ]
    }), e = reactive({
      needSearch: !0,
      needResultPanel: !0,
      ancestorHitShow: !0,
      cascaderMaxLevel: 2
    }), a = ref([]);
    return { __sfc: !0, _mock: l, propModel: e, resultValue: a, handleChange: (u) => {
      a.value = u, console.log(u);
    }, CascaderTreeSelect, PropForm };
  }
};
var _sfc_render = function n() {
  var l = this, e = l._self._c, a = l._self._setupProxy;
  return e("div", { staticClass: "cascader-tree-select__demo" }, [e(a.PropForm, { model: { value: a.propModel, callback: function(r) {
    a.propModel = r;
  }, expression: "propModel" } }), e("div", { staticClass: "cascader-tree-select__demo__module" }, [e(a.CascaderTreeSelect, { attrs: { panelTitleList: ["一级标题", "二级标题", "三级标题", "四级标题"], options: a._mock.array, needSearch: a.propModel.needSearch, cascaderMaxLevel: a.propModel.cascaderMaxLevel, needResultPanel: a.propModel.needResultPanel, ancestorHitShow: a.propModel.ancestorHitShow }, on: { change: a.handleChange } })], 1), e("div", { staticClass: "cascader-tree-select__demo__module" }, [e("div", { staticStyle: { "margin-bottom": "20px" } }, [l._v("change事件返回数据逻辑是如果当前节点下的所有子节点全部选中，则返回当前节点的路径；如果未全部选中，则返回选中的子节点的路径，以此类推")]), e("div", [l._v("你将通过change事件得到的数据是："), e("span", { staticStyle: { color: "red" } }, [l._v(l._s(a.resultValue))])])])], 1);
}, _sfc_staticRenderFns = [], __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  !1,
  null,
  "5d1e0ec2",
  null,
  null
);
const App = __component__.exports;
new Vue({
  render: (n) => n(App)
}).$mount("#app");
