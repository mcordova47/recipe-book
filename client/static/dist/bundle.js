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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(8);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = (typeof Symbol!=='undefined' && Symbol.for) ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process==='undefined' || !process.env || "production"!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev && parent) { prev = parent.firstElementChild; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["c" /* render */])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) { callback.call(component, renderContainer); }
	return component;
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["c" /* render */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(
		element.nodeName || element.type,
		extend({}, elementProps),
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["d" /* cloneElement */].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) { a.class = a.className; }
	Object.defineProperty(a, 'className', classNameDescriptor);
}


var classNameDescriptor = {
	configurable: true,
	get: function() { return this.class; },
	set: function(v) { this.class = v; }
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i=1, obj = (void 0); i<arguments.length; i++) {
		if ((obj = arguments$1[i])) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1 && (typeof c[0]==='string' || typeof c[0]==='function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["e" /* Component */].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["e" /* Component */](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(13);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var ClientEntry = __webpack_require__(12);
var url = window.location.hash;
var api =  true
  ? 'https://recipe-book-194820.appspot.com/api/'
  : 'http://localhost:8000/api/';
var initialState = window.__puxLastState || ClientEntry.initialState;
var app = ClientEntry.main(url)(api)(initialState)();

app.state.subscribe(function (state) {
 window.__puxLastState = state;
});

// If hot-reloading, hook into each state change and re-render using the last
// state.
if (false) {
  module.hot.accept();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).createClass;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return h; });
/* unused harmony export createElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return render; });
/* unused harmony export rerender */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virutal DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hyrdating=false]	If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} nodeName	Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;

  var defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};


/* unused harmony default export */ var _unused_webpack_default_export = (preact);
//# sourceMappingURL=preact.esm.js.map


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var ReactPropTypesSecret = __webpack_require__(11);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(9)();
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15)["Main"]

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate, module, process) {// Generated by purs bundle 0.11.7
var PS = {};
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var All = (function () {
      function All() {

      };
      All.value = new All();
      return All;
  })();
  var Search = (function () {
      function Search(value0) {
          this.value0 = value0;
      };
      Search.create = function (value0) {
          return new Search(value0);
      };
      return Search;
  })();
  exports["All"] = All;
  exports["Search"] = Search;
})(PS["App.Filter"] = PS["App.Filter"] || {});
(function(exports) {
    "use strict";

  exports.arrayMap = function (f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Semigroupoid = function (compose) {
      this.compose = compose;
  };
  var semigroupoidFn = new Semigroupoid(function (f) {
      return function (g) {
          return function (x) {
              return f(g(x));
          };
      };
  });
  var compose = function (dict) {
      return dict.compose;
  };
  exports["compose"] = compose;
  exports["Semigroupoid"] = Semigroupoid;
  exports["semigroupoidFn"] = semigroupoidFn;
})(PS["Control.Semigroupoid"] = PS["Control.Semigroupoid"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];        
  var Category = function (Semigroupoid0, id) {
      this.Semigroupoid0 = Semigroupoid0;
      this.id = id;
  };
  var id = function (dict) {
      return dict.id;
  };
  var categoryFn = new Category(function () {
      return Control_Semigroupoid.semigroupoidFn;
  }, function (x) {
      return x;
  });
  exports["Category"] = Category;
  exports["id"] = id;
  exports["categoryFn"] = categoryFn;
})(PS["Control.Category"] = PS["Control.Category"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];        
  var on = function (f) {
      return function (g) {
          return function (x) {
              return function (y) {
                  return f(g(x))(g(y));
              };
          };
      };
  };
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  };
  var $$const = function (a) {
      return function (v) {
          return a;
      };
  };
  var applyFlipped = function (x) {
      return function (f) {
          return f(x);
      };
  };
  exports["flip"] = flip;
  exports["const"] = $$const;
  exports["applyFlipped"] = applyFlipped;
  exports["on"] = on;
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
    "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
    "use strict";

  exports.showIntImpl = function (n) {
    return n.toString();
  };

  exports.showNumberImpl = function (n) {
    var str = n.toString();
    return isNaN(str + ".0") ? str : str + ".0";
  };

  exports.showCharImpl = function (c) {
    var code = c.charCodeAt(0);
    if (code < 0x20 || code === 0x7F) {
      switch (c) {
        case "\x07": return "'\\a'";
        case "\b": return "'\\b'";
        case "\f": return "'\\f'";
        case "\n": return "'\\n'";
        case "\r": return "'\\r'";
        case "\t": return "'\\t'";
        case "\v": return "'\\v'";
      }
      return "'\\" + code.toString(10) + "'";
    }
    return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
  };

  exports.showStringImpl = function (s) {
    var l = s.length;
    return "\"" + s.replace(
      /[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
      function (c, i) {
        switch (c) {
          case "\"":
          case "\\":
            return "\\" + c;
          case "\x07": return "\\a";
          case "\b": return "\\b";
          case "\f": return "\\f";
          case "\n": return "\\n";
          case "\r": return "\\r";
          case "\t": return "\\t";
          case "\v": return "\\v";
        }
        var k = i + 1;
        var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
        return "\\" + c.charCodeAt(0).toString(10) + empty;
      }
    ) + "\"";
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Show"];     
  var Show = function (show) {
      this.show = show;
  };
  var showString = new Show($foreign.showStringImpl);
  var showNumber = new Show($foreign.showNumberImpl);
  var showInt = new Show($foreign.showIntImpl);
  var showChar = new Show($foreign.showCharImpl);
  var show = function (dict) {
      return dict.show;
  };
  exports["Show"] = Show;
  exports["show"] = show;
  exports["showInt"] = showInt;
  exports["showNumber"] = showNumber;
  exports["showChar"] = showChar;
  exports["showString"] = showString;
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Unit"];
  var Data_Show = PS["Data.Show"];
  exports["unit"] = $foreign.unit;
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Functor"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Unit = PS["Data.Unit"];        
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  var $$void = function (dictFunctor) {
      return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
  };
  var voidRight = function (dictFunctor) {
      return function (x) {
          return map(dictFunctor)(Data_Function["const"](x));
      };
  };
  var functorFn = new Functor(Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn));
  var functorArray = new Functor($foreign.arrayMap);
  exports["Functor"] = Functor;
  exports["map"] = map;
  exports["void"] = $$void;
  exports["voidRight"] = voidRight;
  exports["functorFn"] = functorFn;
  exports["functorArray"] = functorArray;
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
    "use strict";

  exports.concatString = function (s1) {
    return function (s2) {
      return s1 + s2;
    };
  };

  exports.concatArray = function (xs) {
    return function (ys) {
      if (xs.length === 0) return ys;
      if (ys.length === 0) return xs;
      return xs.concat(ys);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];
  var Data_Void = PS["Data.Void"];        
  var Semigroup = function (append) {
      this.append = append;
  }; 
  var semigroupString = new Semigroup($foreign.concatString);
  var semigroupArray = new Semigroup($foreign.concatArray);
  var append = function (dict) {
      return dict.append;
  };
  exports["Semigroup"] = Semigroup;
  exports["append"] = append;
  exports["semigroupString"] = semigroupString;
  exports["semigroupArray"] = semigroupArray;
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Functor = PS["Data.Functor"];
  var Data_Semigroup = PS["Data.Semigroup"];        
  var Alt = function (Functor0, alt) {
      this.Functor0 = Functor0;
      this.alt = alt;
  };
  var altArray = new Alt(function () {
      return Data_Functor.functorArray;
  }, Data_Semigroup.append(Data_Semigroup.semigroupArray));
  var alt = function (dict) {
      return dict.alt;
  };
  exports["Alt"] = Alt;
  exports["alt"] = alt;
  exports["altArray"] = altArray;
})(PS["Control.Alt"] = PS["Control.Alt"] || {});
(function(exports) {
    "use strict";

  exports.arrayApply = function (fs) {
    return function (xs) {
      var l = fs.length;
      var k = xs.length;
      var result = new Array(l*k);
      var n = 0;
      for (var i = 0; i < l; i++) {
        var f = fs[i];
        for (var j = 0; j < k; j++) {
          result[n++] = f(xs[j]);
        }
      }
      return result;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];        
  var Apply = function (Functor0, apply) {
      this.Functor0 = Functor0;
      this.apply = apply;
  }; 
  var applyArray = new Apply(function () {
      return Data_Functor.functorArray;
  }, $foreign.arrayApply);
  var apply = function (dict) {
      return dict.apply;
  };
  var applyFirst = function (dictApply) {
      return function (a) {
          return function (b) {
              return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"])(a))(b);
          };
      };
  };
  var applySecond = function (dictApply) {
      return function (a) {
          return function (b) {
              return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.id(Control_Category.categoryFn)))(a))(b);
          };
      };
  };
  var lift2 = function (dictApply) {
      return function (f) {
          return function (a) {
              return function (b) {
                  return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b);
              };
          };
      };
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
  exports["applyFirst"] = applyFirst;
  exports["applySecond"] = applySecond;
  exports["lift2"] = lift2;
  exports["applyArray"] = applyArray;
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Applicative = function (Apply0, pure) {
      this.Apply0 = Apply0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
          };
      };
  }; 
  var applicativeArray = new Applicative(function () {
      return Control_Apply.applyArray;
  }, function (x) {
      return [ x ];
  });
  exports["Applicative"] = Applicative;
  exports["pure"] = pure;
  exports["liftA1"] = liftA1;
  exports["applicativeArray"] = applicativeArray;
})(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Data_Functor = PS["Data.Functor"];        
  var Plus = function (Alt0, empty) {
      this.Alt0 = Alt0;
      this.empty = empty;
  };
  var plusArray = new Plus(function () {
      return Control_Alt.altArray;
  }, [  ]);
  var empty = function (dict) {
      return dict.empty;
  };
  exports["Plus"] = Plus;
  exports["empty"] = empty;
  exports["plusArray"] = plusArray;
})(PS["Control.Plus"] = PS["Control.Plus"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Functor = PS["Data.Functor"];        
  var Alternative = function (Applicative0, Plus1) {
      this.Applicative0 = Applicative0;
      this.Plus1 = Plus1;
  };
  var alternativeArray = new Alternative(function () {
      return Control_Applicative.applicativeArray;
  }, function () {
      return Control_Plus.plusArray;
  });
  exports["Alternative"] = Alternative;
  exports["alternativeArray"] = alternativeArray;
})(PS["Control.Alternative"] = PS["Control.Alternative"] || {});
(function(exports) {
    "use strict";

  exports.arrayBind = function (arr) {
    return function (f) {
      var result = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        Array.prototype.push.apply(result, f(arr[i]));
      }
      return result;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Control.Bind"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Bind = function (Apply0, bind) {
      this.Apply0 = Apply0;
      this.bind = bind;
  };
  var Discard = function (discard) {
      this.discard = discard;
  };
  var discard = function (dict) {
      return dict.discard;
  }; 
  var bindArray = new Bind(function () {
      return Control_Apply.applyArray;
  }, $foreign.arrayBind);
  var bind = function (dict) {
      return dict.bind;
  };
  var bindFlipped = function (dictBind) {
      return Data_Function.flip(bind(dictBind));
  };
  var composeKleisliFlipped = function (dictBind) {
      return function (f) {
          return function (g) {
              return function (a) {
                  return bindFlipped(dictBind)(f)(g(a));
              };
          };
      };
  };
  var discardUnit = new Discard(function (dictBind) {
      return bind(dictBind);
  });
  exports["Bind"] = Bind;
  exports["bind"] = bind;
  exports["bindFlipped"] = bindFlipped;
  exports["Discard"] = Discard;
  exports["discard"] = discard;
  exports["composeKleisliFlipped"] = composeKleisliFlipped;
  exports["bindArray"] = bindArray;
  exports["discardUnit"] = discardUnit;
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Monad = function (Applicative0, Bind1) {
      this.Applicative0 = Applicative0;
      this.Bind1 = Bind1;
  };
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
                  return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
                      return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
                  });
              });
          };
      };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS["Control.Monad"] = PS["Control.Monad"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var MonadZero = function (Alternative1, Monad0) {
      this.Alternative1 = Alternative1;
      this.Monad0 = Monad0;
  }; 
  var guard = function (dictMonadZero) {
      return function (v) {
          if (v) {
              return Control_Applicative.pure((dictMonadZero.Alternative1()).Applicative0())(Data_Unit.unit);
          };
          if (!v) {
              return Control_Plus.empty((dictMonadZero.Alternative1()).Plus1());
          };
          throw new Error("Failed pattern match at Control.MonadZero line 54, column 1 - line 54, column 52: " + [ v.constructor.name ]);
      };
  };
  exports["MonadZero"] = MonadZero;
  exports["guard"] = guard;
})(PS["Control.MonadZero"] = PS["Control.MonadZero"] || {});
(function(exports) {
    "use strict";

  exports.topInt = 2147483647;
  exports.bottomInt = -2147483648;
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});
(function(exports) {
    "use strict";

  exports.ordArrayImpl = function (f) {
    return function (xs) {
      return function (ys) {
        var i = 0;
        var xlen = xs.length;
        var ylen = ys.length;
        while (i < xlen && i < ylen) {
          var x = xs[i];
          var y = ys[i];
          var o = f(x)(y);
          if (o !== 0) {
            return o;
          }
          i++;
        }
        if (xlen === ylen) {
          return 0;
        } else if (xlen > ylen) {
          return -1;
        } else {
          return 1;
        }
      };
    };
  };
})(PS["Data.Ord"] = PS["Data.Ord"] || {});
(function(exports) {
    "use strict";

  exports.refEq = function (r1) {
    return function (r2) {
      return r1 === r2;
    };
  };

  exports.eqArrayImpl = function (f) {
    return function (xs) {
      return function (ys) {
        if (xs.length !== ys.length) return false;
        for (var i = 0; i < xs.length; i++) {
          if (!f(xs[i])(ys[i])) return false;
        }
        return true;
      };
    };
  };
})(PS["Data.Eq"] = PS["Data.Eq"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Eq"];
  var Data_Unit = PS["Data.Unit"];
  var Data_Void = PS["Data.Void"];        
  var Eq = function (eq) {
      this.eq = eq;
  }; 
  var eqString = new Eq($foreign.refEq);
  var eqInt = new Eq($foreign.refEq); 
  var eqBoolean = new Eq($foreign.refEq);
  var eq = function (dict) {
      return dict.eq;
  };
  var eqArray = function (dictEq) {
      return new Eq($foreign.eqArrayImpl(eq(dictEq)));
  }; 
  var notEq = function (dictEq) {
      return function (x) {
          return function (y) {
              return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
          };
      };
  };
  exports["Eq"] = Eq;
  exports["eq"] = eq;
  exports["notEq"] = notEq;
  exports["eqBoolean"] = eqBoolean;
  exports["eqInt"] = eqInt;
  exports["eqString"] = eqString;
  exports["eqArray"] = eqArray;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});
(function(exports) {
    "use strict";

  exports.unsafeCompareImpl = function (lt) {
    return function (eq) {
      return function (gt) {
        return function (x) {
          return function (y) {
            return x < y ? lt : x === y ? eq : gt;
          };
        };
      };
    };
  };
})(PS["Data.Ord.Unsafe"] = PS["Data.Ord.Unsafe"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Eq = PS["Data.Eq"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];        
  var LT = (function () {
      function LT() {

      };
      LT.value = new LT();
      return LT;
  })();
  var GT = (function () {
      function GT() {

      };
      GT.value = new GT();
      return GT;
  })();
  var EQ = (function () {
      function EQ() {

      };
      EQ.value = new EQ();
      return EQ;
  })();
  var eqOrdering = new Data_Eq.Eq(function (v) {
      return function (v1) {
          if (v instanceof LT && v1 instanceof LT) {
              return true;
          };
          if (v instanceof GT && v1 instanceof GT) {
              return true;
          };
          if (v instanceof EQ && v1 instanceof EQ) {
              return true;
          };
          return false;
      };
  });
  exports["LT"] = LT;
  exports["GT"] = GT;
  exports["EQ"] = EQ;
  exports["eqOrdering"] = eqOrdering;
})(PS["Data.Ordering"] = PS["Data.Ordering"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Ord.Unsafe"];
  var Data_Ordering = PS["Data.Ordering"];        
  var unsafeCompare = $foreign.unsafeCompareImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value);
  exports["unsafeCompare"] = unsafeCompare;
})(PS["Data.Ord.Unsafe"] = PS["Data.Ord.Unsafe"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Ord"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Ord_Unsafe = PS["Data.Ord.Unsafe"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];
  var Data_Void = PS["Data.Void"];        
  var Ord = function (Eq0, compare) {
      this.Eq0 = Eq0;
      this.compare = compare;
  }; 
  var ordString = new Ord(function () {
      return Data_Eq.eqString;
  }, Data_Ord_Unsafe.unsafeCompare);
  var ordInt = new Ord(function () {
      return Data_Eq.eqInt;
  }, Data_Ord_Unsafe.unsafeCompare);
  var compare = function (dict) {
      return dict.compare;
  };
  var max = function (dictOrd) {
      return function (x) {
          return function (y) {
              var v = compare(dictOrd)(x)(y);
              if (v instanceof Data_Ordering.LT) {
                  return y;
              };
              if (v instanceof Data_Ordering.EQ) {
                  return x;
              };
              if (v instanceof Data_Ordering.GT) {
                  return x;
              };
              throw new Error("Failed pattern match at Data.Ord line 123, column 3 - line 126, column 12: " + [ v.constructor.name ]);
          };
      };
  };
  var min = function (dictOrd) {
      return function (x) {
          return function (y) {
              var v = compare(dictOrd)(x)(y);
              if (v instanceof Data_Ordering.LT) {
                  return x;
              };
              if (v instanceof Data_Ordering.EQ) {
                  return x;
              };
              if (v instanceof Data_Ordering.GT) {
                  return y;
              };
              throw new Error("Failed pattern match at Data.Ord line 114, column 3 - line 117, column 12: " + [ v.constructor.name ]);
          };
      };
  };
  var ordArray = function (dictOrd) {
      return new Ord(function () {
          return Data_Eq.eqArray(dictOrd.Eq0());
      }, (function () {
          var toDelta = function (x) {
              return function (y) {
                  var v = compare(dictOrd)(x)(y);
                  if (v instanceof Data_Ordering.EQ) {
                      return 0;
                  };
                  if (v instanceof Data_Ordering.LT) {
                      return 1;
                  };
                  if (v instanceof Data_Ordering.GT) {
                      return -1 | 0;
                  };
                  throw new Error("Failed pattern match at Data.Ord line 61, column 7 - line 66, column 1: " + [ v.constructor.name ]);
              };
          };
          return function (xs) {
              return function (ys) {
                  return compare(ordInt)(0)($foreign.ordArrayImpl(toDelta)(xs)(ys));
              };
          };
      })());
  }; 
  var clamp = function (dictOrd) {
      return function (low) {
          return function (hi) {
              return function (x) {
                  return min(dictOrd)(hi)(max(dictOrd)(low)(x));
              };
          };
      };
  };
  exports["Ord"] = Ord;
  exports["compare"] = compare;
  exports["min"] = min;
  exports["max"] = max;
  exports["clamp"] = clamp;
  exports["ordInt"] = ordInt;
  exports["ordString"] = ordString;
  exports["ordArray"] = ordArray;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Bounded"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Unit = PS["Data.Unit"];        
  var Bounded = function (Ord0, bottom, top) {
      this.Ord0 = Ord0;
      this.bottom = bottom;
      this.top = top;
  };
  var top = function (dict) {
      return dict.top;
  };                                                 
  var boundedInt = new Bounded(function () {
      return Data_Ord.ordInt;
  }, $foreign.bottomInt, $foreign.topInt);
  var bottom = function (dict) {
      return dict.bottom;
  };
  exports["Bounded"] = Bounded;
  exports["bottom"] = bottom;
  exports["top"] = top;
  exports["boundedInt"] = boundedInt;
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var otherwise = true;
  exports["otherwise"] = otherwise;
})(PS["Data.Boolean"] = PS["Data.Boolean"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Function = PS["Data.Function"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Monoid = function (Semigroup0, mempty) {
      this.Semigroup0 = Semigroup0;
      this.mempty = mempty;
  };                 
  var monoidString = new Monoid(function () {
      return Data_Semigroup.semigroupString;
  }, "");                    
  var monoidArray = new Monoid(function () {
      return Data_Semigroup.semigroupArray;
  }, [  ]);
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["Monoid"] = Monoid;
  exports["mempty"] = mempty;
  exports["monoidString"] = monoidString;
  exports["monoidArray"] = monoidArray;
})(PS["Data.Monoid"] = PS["Data.Monoid"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  var semigroupMaybe = function (dictSemigroup) {
      return new Data_Semigroup.Semigroup(function (v) {
          return function (v1) {
              if (v instanceof Nothing) {
                  return v1;
              };
              if (v1 instanceof Nothing) {
                  return v;
              };
              if (v instanceof Just && v1 instanceof Just) {
                  return new Just(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0));
              };
              throw new Error("Failed pattern match at Data.Maybe line 176, column 1 - line 176, column 62: " + [ v.constructor.name, v1.constructor.name ]);
          };
      });
  };
  var monoidMaybe = function (dictSemigroup) {
      return new Data_Monoid.Monoid(function () {
          return semigroupMaybe(dictSemigroup);
      }, Nothing.value);
  };
  var maybe = function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof Nothing) {
                  return v;
              };
              if (v2 instanceof Just) {
                  return v1(v2.value0);
              };
              throw new Error("Failed pattern match at Data.Maybe line 219, column 1 - line 219, column 51: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  };                                                         
  var isJust = maybe(false)(Data_Function["const"](true));
  var functorMaybe = new Data_Functor.Functor(function (v) {
      return function (v1) {
          if (v1 instanceof Just) {
              return new Just(v(v1.value0));
          };
          return Nothing.value;
      };
  });
  var fromMaybe = function (a) {
      return maybe(a)(Control_Category.id(Control_Category.categoryFn));
  };
  var fromJust = function (dictPartial) {
      return function (v) {
          var __unused = function (dictPartial1) {
              return function ($dollar34) {
                  return $dollar34;
              };
          };
          return __unused(dictPartial)((function () {
              if (v instanceof Just) {
                  return v.value0;
              };
              throw new Error("Failed pattern match at Data.Maybe line 270, column 1 - line 270, column 46: " + [ v.constructor.name ]);
          })());
      };
  };
  var applyMaybe = new Control_Apply.Apply(function () {
      return functorMaybe;
  }, function (v) {
      return function (v1) {
          if (v instanceof Just) {
              return Data_Functor.map(functorMaybe)(v.value0)(v1);
          };
          if (v instanceof Nothing) {
              return Nothing.value;
          };
          throw new Error("Failed pattern match at Data.Maybe line 68, column 1 - line 68, column 35: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var bindMaybe = new Control_Bind.Bind(function () {
      return applyMaybe;
  }, function (v) {
      return function (v1) {
          if (v instanceof Just) {
              return v1(v.value0);
          };
          if (v instanceof Nothing) {
              return Nothing.value;
          };
          throw new Error("Failed pattern match at Data.Maybe line 127, column 1 - line 127, column 33: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var applicativeMaybe = new Control_Applicative.Applicative(function () {
      return applyMaybe;
  }, Just.create);
  var monadMaybe = new Control_Monad.Monad(function () {
      return applicativeMaybe;
  }, function () {
      return bindMaybe;
  });
  var altMaybe = new Control_Alt.Alt(function () {
      return functorMaybe;
  }, function (v) {
      return function (v1) {
          if (v instanceof Nothing) {
              return v1;
          };
          return v;
      };
  });
  var plusMaybe = new Control_Plus.Plus(function () {
      return altMaybe;
  }, Nothing.value);
  var alternativeMaybe = new Control_Alternative.Alternative(function () {
      return applicativeMaybe;
  }, function () {
      return plusMaybe;
  });
  var monadZeroMaybe = new Control_MonadZero.MonadZero(function () {
      return alternativeMaybe;
  }, function () {
      return monadMaybe;
  });
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
  exports["maybe"] = maybe;
  exports["fromMaybe"] = fromMaybe;
  exports["isJust"] = isJust;
  exports["fromJust"] = fromJust;
  exports["functorMaybe"] = functorMaybe;
  exports["applyMaybe"] = applyMaybe;
  exports["applicativeMaybe"] = applicativeMaybe;
  exports["altMaybe"] = altMaybe;
  exports["plusMaybe"] = plusMaybe;
  exports["alternativeMaybe"] = alternativeMaybe;
  exports["bindMaybe"] = bindMaybe;
  exports["monadMaybe"] = monadMaybe;
  exports["monadZeroMaybe"] = monadZeroMaybe;
  exports["semigroupMaybe"] = semigroupMaybe;
  exports["monoidMaybe"] = monoidMaybe;
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
    "use strict";       

  exports.fromFoldableImpl = (function () {
    // jshint maxparams: 2
    function Cons(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    var emptyList = {};

    function curryCons(head) {
      return function (tail) {
        return new Cons(head, tail);
      };
    }

    function listToArray(list) {
      var result = [];
      var count = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }

    return function (foldr) {
      return function (xs) {
        return listToArray(foldr(curryCons)(emptyList)(xs));
      };
    };
  })();

  //------------------------------------------------------------------------------
  // Array size ------------------------------------------------------------------
  //------------------------------------------------------------------------------

  exports.length = function (xs) {
    return xs.length;
  };

  //------------------------------------------------------------------------------
  // Extending arrays ------------------------------------------------------------
  //------------------------------------------------------------------------------

  exports.cons = function (e) {
    return function (l) {
      return [e].concat(l);
    };
  };

  exports.snoc = function (l) {
    return function (e) {
      var l1 = l.slice();
      l1.push(e);
      return l1;
    };
  };

  //------------------------------------------------------------------------------
  // Non-indexed reads -----------------------------------------------------------
  //------------------------------------------------------------------------------

  exports["uncons'"] = function (empty) {
    return function (next) {
      return function (xs) {
        return xs.length === 0 ? empty({}) : next(xs[0])(xs.slice(1));
      };
    };
  };

  //------------------------------------------------------------------------------
  // Indexed operations ----------------------------------------------------------
  //------------------------------------------------------------------------------

  exports.indexImpl = function (just) {
    return function (nothing) {
      return function (xs) {
        return function (i) {
          return i < 0 || i >= xs.length ? nothing :  just(xs[i]);
        };
      };
    };
  };

  exports.concat = function (xss) {
    if (xss.length <= 10000) {
      // This method is faster, but it crashes on big arrays.
      // So we use it when can and fallback to simple variant otherwise.
      return Array.prototype.concat.apply([], xss);
    }

    var result = [];
    for (var i = 0, l = xss.length; i < l; i++) {
      var xs = xss[i];
      for (var j = 0, m = xs.length; j < m; j++) {
        result.push(xs[j]);
      }
    }
    return result;
  };

  //------------------------------------------------------------------------------
  // Sorting ---------------------------------------------------------------------
  //------------------------------------------------------------------------------

  exports.sortImpl = function (f) {
    return function (l) {
      // jshint maxparams: 2
      return l.slice().sort(function (x, y) {
        return f(x)(y);
      });
    };
  };

  //------------------------------------------------------------------------------
  // Subarrays -------------------------------------------------------------------
  //------------------------------------------------------------------------------

  exports.slice = function (s) {
    return function (e) {
      return function (l) {
        return l.slice(s, e);
      };
    };
  };

  exports.drop = function (n) {
    return function (l) {
      return n < 1 ? l : l.slice(n);
    };
  };
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Unit = PS["Data.Unit"];        
  var Lazy = function (defer) {
      this.defer = defer;
  }; 
  var defer = function (dict) {
      return dict.defer;
  };
  exports["defer"] = defer;
  exports["Lazy"] = Lazy;
})(PS["Control.Lazy"] = PS["Control.Lazy"] || {});
(function(exports) {
    "use strict";

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };

  exports.runPure = function (f) {
    return f();
  };

  exports.foreachE = function (as) {
    return function (f) {
      return function () {
        for (var i = 0, l = as.length; i < l; i++) {
          f(as[i])();
        }
      };
    };
  };
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var monadEff = new Control_Monad.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Control_Bind.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Control_Apply.Apply(function () {
      return functorEff;
  }, Control_Monad.ap(monadEff));
  var applicativeEff = new Control_Applicative.Applicative(function () {
      return applyEff;
  }, $foreign.pureE);
  var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;
  exports["runPure"] = $foreign.runPure;
  exports["foreachE"] = $foreign.foreachE;
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];        
  var Bifunctor = function (bimap) {
      this.bimap = bimap;
  };
  var bimap = function (dict) {
      return dict.bimap;
  };
  var lmap = function (dictBifunctor) {
      return function (f) {
          return bimap(dictBifunctor)(f)(Control_Category.id(Control_Category.categoryFn));
      };
  };
  exports["bimap"] = bimap;
  exports["Bifunctor"] = Bifunctor;
  exports["lmap"] = lmap;
})(PS["Data.Bifunctor"] = PS["Data.Bifunctor"] || {});
(function(exports) {
    "use strict";

  exports.foldrArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };

  exports.foldlArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
    "use strict";

  exports.boolConj = function (b1) {
    return function (b2) {
      return b1 && b2;
    };
  };

  exports.boolDisj = function (b1) {
    return function (b2) {
      return b1 || b2;
    };
  };

  exports.boolNot = function (b) {
    return !b;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.HeytingAlgebra"];
  var Data_Unit = PS["Data.Unit"];        
  var HeytingAlgebra = function (conj, disj, ff, implies, not, tt) {
      this.conj = conj;
      this.disj = disj;
      this.ff = ff;
      this.implies = implies;
      this.not = not;
      this.tt = tt;
  };
  var tt = function (dict) {
      return dict.tt;
  };
  var not = function (dict) {
      return dict.not;
  };
  var implies = function (dict) {
      return dict.implies;
  };                 
  var ff = function (dict) {
      return dict.ff;
  };
  var disj = function (dict) {
      return dict.disj;
  };
  var heytingAlgebraBoolean = new HeytingAlgebra($foreign.boolConj, $foreign.boolDisj, false, function (a) {
      return function (b) {
          return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
      };
  }, $foreign.boolNot, true);
  var conj = function (dict) {
      return dict.conj;
  };
  var heytingAlgebraFunction = function (dictHeytingAlgebra) {
      return new HeytingAlgebra(function (f) {
          return function (g) {
              return function (a) {
                  return conj(dictHeytingAlgebra)(f(a))(g(a));
              };
          };
      }, function (f) {
          return function (g) {
              return function (a) {
                  return disj(dictHeytingAlgebra)(f(a))(g(a));
              };
          };
      }, function (v) {
          return ff(dictHeytingAlgebra);
      }, function (f) {
          return function (g) {
              return function (a) {
                  return implies(dictHeytingAlgebra)(f(a))(g(a));
              };
          };
      }, function (f) {
          return function (a) {
              return not(dictHeytingAlgebra)(f(a));
          };
      }, function (v) {
          return tt(dictHeytingAlgebra);
      });
  };
  exports["HeytingAlgebra"] = HeytingAlgebra;
  exports["tt"] = tt;
  exports["ff"] = ff;
  exports["implies"] = implies;
  exports["conj"] = conj;
  exports["disj"] = disj;
  exports["not"] = not;
  exports["heytingAlgebraBoolean"] = heytingAlgebraBoolean;
  exports["heytingAlgebraFunction"] = heytingAlgebraFunction;
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Prelude = PS["Prelude"];        
  var Newtype = function (unwrap, wrap) {
      this.unwrap = unwrap;
      this.wrap = wrap;
  };
  var wrap = function (dict) {
      return dict.wrap;
  };
  var unwrap = function (dict) {
      return dict.unwrap;
  };
  var alaF = function (dictFunctor) {
      return function (dictFunctor1) {
          return function (dictNewtype) {
              return function (dictNewtype1) {
                  return function (v) {
                      return function (f) {
                          return function ($64) {
                              return Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1))(f(Data_Functor.map(dictFunctor)(wrap(dictNewtype))($64)));
                          };
                      };
                  };
              };
          };
      };
  };
  exports["unwrap"] = unwrap;
  exports["wrap"] = wrap;
  exports["Newtype"] = Newtype;
  exports["alaF"] = alaF;
})(PS["Data.Newtype"] = PS["Data.Newtype"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];        
  var First = function (x) {
      return x;
  };
  var semigroupFirst = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          if (v instanceof Data_Maybe.Just) {
              return v;
          };
          return v1;
      };
  });                                  
  var newtypeFirst = new Data_Newtype.Newtype(function (n) {
      return n;
  }, First);
  var monoidFirst = new Data_Monoid.Monoid(function () {
      return semigroupFirst;
  }, Data_Maybe.Nothing.value);
  exports["First"] = First;
  exports["newtypeFirst"] = newtypeFirst;
  exports["semigroupFirst"] = semigroupFirst;
  exports["monoidFirst"] = monoidFirst;
})(PS["Data.Maybe.First"] = PS["Data.Maybe.First"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];        
  var Disj = function (x) {
      return x;
  };
  var semigroupDisj = function (dictHeytingAlgebra) {
      return new Data_Semigroup.Semigroup(function (v) {
          return function (v1) {
              return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
          };
      });
  };
  var newtypeDisj = new Data_Newtype.Newtype(function (n) {
      return n;
  }, Disj);
  var monoidDisj = function (dictHeytingAlgebra) {
      return new Data_Monoid.Monoid(function () {
          return semigroupDisj(dictHeytingAlgebra);
      }, Data_HeytingAlgebra.ff(dictHeytingAlgebra));
  };
  exports["Disj"] = Disj;
  exports["newtypeDisj"] = newtypeDisj;
  exports["semigroupDisj"] = semigroupDisj;
  exports["monoidDisj"] = monoidDisj;
})(PS["Data.Monoid.Disj"] = PS["Data.Monoid.Disj"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];        
  var Dual = function (x) {
      return x;
  };
  var semigroupDual = function (dictSemigroup) {
      return new Data_Semigroup.Semigroup(function (v) {
          return function (v1) {
              return Data_Semigroup.append(dictSemigroup)(v1)(v);
          };
      });
  };
  var newtypeDual = new Data_Newtype.Newtype(function (n) {
      return n;
  }, Dual);
  var monoidDual = function (dictMonoid) {
      return new Data_Monoid.Monoid(function () {
          return semigroupDual(dictMonoid.Semigroup0());
      }, Data_Monoid.mempty(dictMonoid));
  };
  exports["Dual"] = Dual;
  exports["newtypeDual"] = newtypeDual;
  exports["semigroupDual"] = semigroupDual;
  exports["monoidDual"] = monoidDual;
})(PS["Data.Monoid.Dual"] = PS["Data.Monoid.Dual"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Prelude = PS["Prelude"];        
  var Endo = function (x) {
      return x;
  };
  var semigroupEndo = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          return function ($11) {
              return v(v1($11));
          };
      };
  });
  var newtypeEndo = new Data_Newtype.Newtype(function (n) {
      return n;
  }, Endo);
  var monoidEndo = new Data_Monoid.Monoid(function () {
      return semigroupEndo;
  }, Control_Category.id(Control_Category.categoryFn));
  exports["Endo"] = Endo;
  exports["newtypeEndo"] = newtypeEndo;
  exports["semigroupEndo"] = semigroupEndo;
  exports["monoidEndo"] = monoidEndo;
})(PS["Data.Monoid.Endo"] = PS["Data.Monoid.Endo"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Foldable"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Endo = PS["Data.Monoid.Endo"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Foldable = function (foldMap, foldl, foldr) {
      this.foldMap = foldMap;
      this.foldl = foldl;
      this.foldr = foldr;
  };
  var foldr = function (dict) {
      return dict.foldr;
  };
  var traverse_ = function (dictApplicative) {
      return function (dictFoldable) {
          return function (f) {
              return foldr(dictFoldable)(function ($195) {
                  return Control_Apply.applySecond(dictApplicative.Apply0())(f($195));
              })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
          };
      };
  };
  var for_ = function (dictApplicative) {
      return function (dictFoldable) {
          return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
      };
  };
  var sequence_ = function (dictApplicative) {
      return function (dictFoldable) {
          return traverse_(dictApplicative)(dictFoldable)(Control_Category.id(Control_Category.categoryFn));
      };
  };
  var foldl = function (dict) {
      return dict.foldl;
  };
  var intercalate = function (dictFoldable) {
      return function (dictMonoid) {
          return function (sep) {
              return function (xs) {
                  var go = function (v) {
                      return function (x) {
                          if (v.init) {
                              return {
                                  init: false,
                                  acc: x
                              };
                          };
                          return {
                              init: false,
                              acc: Data_Semigroup.append(dictMonoid.Semigroup0())(v.acc)(Data_Semigroup.append(dictMonoid.Semigroup0())(sep)(x))
                          };
                      };
                  };
                  return (foldl(dictFoldable)(go)({
                      init: true,
                      acc: Data_Monoid.mempty(dictMonoid)
                  })(xs)).acc;
              };
          };
      };
  }; 
  var foldMapDefaultR = function (dictFoldable) {
      return function (dictMonoid) {
          return function (f) {
              return foldr(dictFoldable)(function (x) {
                  return function (acc) {
                      return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
                  };
              })(Data_Monoid.mempty(dictMonoid));
          };
      };
  };
  var foldableArray = new Foldable(function (dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
  }, $foreign.foldlArray, $foreign.foldrArray);
  var foldMap = function (dict) {
      return dict.foldMap;
  }; 
  var foldlDefault = function (dictFoldable) {
      return function (c) {
          return function (u) {
              return function (xs) {
                  return Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo)(Data_Newtype.unwrap(Data_Monoid_Dual.newtypeDual)(foldMap(dictFoldable)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo))(function ($197) {
                      return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(c)($197)));
                  })(xs)))(u);
              };
          };
      };
  };
  var foldrDefault = function (dictFoldable) {
      return function (c) {
          return function (u) {
              return function (xs) {
                  return Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo)(foldMap(dictFoldable)(Data_Monoid_Endo.monoidEndo)(function ($198) {
                      return Data_Monoid_Endo.Endo(c($198));
                  })(xs))(u);
              };
          };
      };
  };
  var fold = function (dictFoldable) {
      return function (dictMonoid) {
          return foldMap(dictFoldable)(dictMonoid)(Control_Category.id(Control_Category.categoryFn));
      };
  };
  var find = function (dictFoldable) {
      return function (p) {
          var go = function (v) {
              return function (v1) {
                  if (v instanceof Data_Maybe.Nothing && p(v1)) {
                      return new Data_Maybe.Just(v1);
                  };
                  return v;
              };
          };
          return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
      };
  };
  var any = function (dictFoldable) {
      return function (dictHeytingAlgebra) {
          return Data_Newtype.alaF(Data_Functor.functorFn)(Data_Functor.functorFn)(Data_Monoid_Disj.newtypeDisj)(Data_Monoid_Disj.newtypeDisj)(Data_Monoid_Disj.Disj)(foldMap(dictFoldable)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra)));
      };
  };
  exports["Foldable"] = Foldable;
  exports["foldr"] = foldr;
  exports["foldl"] = foldl;
  exports["foldMap"] = foldMap;
  exports["foldrDefault"] = foldrDefault;
  exports["foldlDefault"] = foldlDefault;
  exports["foldMapDefaultR"] = foldMapDefaultR;
  exports["fold"] = fold;
  exports["traverse_"] = traverse_;
  exports["for_"] = for_;
  exports["sequence_"] = sequence_;
  exports["intercalate"] = intercalate;
  exports["any"] = any;
  exports["find"] = find;
  exports["foldableArray"] = foldableArray;
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Traversable"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Traversable_Accum = PS["Data.Traversable.Accum"];
  var Data_Traversable_Accum_Internal = PS["Data.Traversable.Accum.Internal"];
  var Prelude = PS["Prelude"];        
  var Traversable = function (Foldable1, Functor0, sequence, traverse) {
      this.Foldable1 = Foldable1;
      this.Functor0 = Functor0;
      this.sequence = sequence;
      this.traverse = traverse;
  };
  var traverse = function (dict) {
      return dict.traverse;
  }; 
  var sequence = function (dict) {
      return dict.sequence;
  };
  exports["Traversable"] = Traversable;
  exports["traverse"] = traverse;
  exports["sequence"] = sequence;
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Prelude = PS["Prelude"];        
  var Left = (function () {
      function Left(value0) {
          this.value0 = value0;
      };
      Left.create = function (value0) {
          return new Left(value0);
      };
      return Left;
  })();
  var Right = (function () {
      function Right(value0) {
          this.value0 = value0;
      };
      Right.create = function (value0) {
          return new Right(value0);
      };
      return Right;
  })();
  var functorEither = new Data_Functor.Functor(function (v) {
      return function (v1) {
          if (v1 instanceof Left) {
              return new Left(v1.value0);
          };
          if (v1 instanceof Right) {
              return new Right(v(v1.value0));
          };
          throw new Error("Failed pattern match at Data.Either line 36, column 1 - line 36, column 45: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var either = function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof Left) {
                  return v(v2.value0);
              };
              if (v2 instanceof Right) {
                  return v1(v2.value0);
              };
              throw new Error("Failed pattern match at Data.Either line 229, column 1 - line 229, column 64: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  };
  var hush = either(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create);
  var bifunctorEither = new Data_Bifunctor.Bifunctor(function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof Left) {
                  return new Left(v(v2.value0));
              };
              if (v2 instanceof Right) {
                  return new Right(v1(v2.value0));
              };
              throw new Error("Failed pattern match at Data.Either line 43, column 1 - line 43, column 45: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  });
  var applyEither = new Control_Apply.Apply(function () {
      return functorEither;
  }, function (v) {
      return function (v1) {
          if (v instanceof Left) {
              return new Left(v.value0);
          };
          if (v instanceof Right) {
              return Data_Functor.map(functorEither)(v.value0)(v1);
          };
          throw new Error("Failed pattern match at Data.Either line 79, column 1 - line 79, column 41: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var bindEither = new Control_Bind.Bind(function () {
      return applyEither;
  }, either(function (e) {
      return function (v) {
          return new Left(e);
      };
  })(function (a) {
      return function (f) {
          return f(a);
      };
  }));
  var applicativeEither = new Control_Applicative.Applicative(function () {
      return applyEither;
  }, Right.create);
  exports["Left"] = Left;
  exports["Right"] = Right;
  exports["either"] = either;
  exports["hush"] = hush;
  exports["functorEither"] = functorEither;
  exports["bifunctorEither"] = bifunctorEither;
  exports["applyEither"] = applyEither;
  exports["applicativeEither"] = applicativeEither;
  exports["bindEither"] = bindEither;
})(PS["Data.Either"] = PS["Data.Either"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_CommutativeRing = PS["Data.CommutativeRing"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Field = PS["Data.Field"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Prelude = PS["Prelude"];        
  var Identity = function (x) {
      return x;
  };
  var newtypeIdentity = new Data_Newtype.Newtype(function (n) {
      return n;
  }, Identity);
  var functorIdentity = new Data_Functor.Functor(function (f) {
      return function (v) {
          return f(v);
      };
  });
  var applyIdentity = new Control_Apply.Apply(function () {
      return functorIdentity;
  }, function (v) {
      return function (v1) {
          return v(v1);
      };
  });
  var bindIdentity = new Control_Bind.Bind(function () {
      return applyIdentity;
  }, function (v) {
      return function (f) {
          return f(v);
      };
  });
  var applicativeIdentity = new Control_Applicative.Applicative(function () {
      return applyIdentity;
  }, Identity);
  var monadIdentity = new Control_Monad.Monad(function () {
      return applicativeIdentity;
  }, function () {
      return bindIdentity;
  });
  exports["Identity"] = Identity;
  exports["newtypeIdentity"] = newtypeIdentity;
  exports["functorIdentity"] = functorIdentity;
  exports["applyIdentity"] = applyIdentity;
  exports["applicativeIdentity"] = applicativeIdentity;
  exports["bindIdentity"] = bindIdentity;
  exports["monadIdentity"] = monadIdentity;
})(PS["Data.Identity"] = PS["Data.Identity"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Unsafe = PS["Control.Monad.Eff.Unsafe"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Either = PS["Data.Either"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Unit = PS["Data.Unit"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];        
  var Loop = (function () {
      function Loop(value0) {
          this.value0 = value0;
      };
      Loop.create = function (value0) {
          return new Loop(value0);
      };
      return Loop;
  })();
  var Done = (function () {
      function Done(value0) {
          this.value0 = value0;
      };
      Done.create = function (value0) {
          return new Done(value0);
      };
      return Done;
  })();
  var MonadRec = function (Monad0, tailRecM) {
      this.Monad0 = Monad0;
      this.tailRecM = tailRecM;
  };
  var tailRecM = function (dict) {
      return dict.tailRecM;
  };
  var tailRec = function (f) {
      var go = function ($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
              if (v instanceof Loop) {
                  $copy_v = f(v.value0);
                  return;
              };
              if (v instanceof Done) {
                  $tco_done = true;
                  return v.value0;
              };
              throw new Error("Failed pattern match at Control.Monad.Rec.Class line 96, column 3 - line 96, column 25: " + [ v.constructor.name ]);
          };
          while (!$tco_done) {
              $tco_result = $tco_loop($copy_v);
          };
          return $tco_result;
      };
      return function ($53) {
          return go(f($53));
      };
  }; 
  var monadRecIdentity = new MonadRec(function () {
      return Data_Identity.monadIdentity;
  }, function (f) {
      var runIdentity = function (v) {
          return v;
      };
      return function ($54) {
          return Data_Identity.Identity(tailRec(function ($55) {
              return runIdentity(f($55));
          })($54));
      };
  });
  exports["Loop"] = Loop;
  exports["Done"] = Done;
  exports["MonadRec"] = MonadRec;
  exports["tailRec"] = tailRec;
  exports["tailRecM"] = tailRecM;
  exports["monadRecIdentity"] = monadRecIdentity;
})(PS["Control.Monad.Rec.Class"] = PS["Control.Monad.Rec.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.FunctorWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var FunctorWithIndex = function (Functor0, mapWithIndex) {
      this.Functor0 = Functor0;
      this.mapWithIndex = mapWithIndex;
  };
  var mapWithIndex = function (dict) {
      return dict.mapWithIndex;
  };
  exports["FunctorWithIndex"] = FunctorWithIndex;
  exports["mapWithIndex"] = mapWithIndex;
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Endo = PS["Data.Monoid.Endo"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var FoldableWithIndex = function (Foldable0, foldMapWithIndex, foldlWithIndex, foldrWithIndex) {
      this.Foldable0 = Foldable0;
      this.foldMapWithIndex = foldMapWithIndex;
      this.foldlWithIndex = foldlWithIndex;
      this.foldrWithIndex = foldrWithIndex;
  };
  var foldrWithIndex = function (dict) {
      return dict.foldrWithIndex;
  };
  var foldlWithIndex = function (dict) {
      return dict.foldlWithIndex;
  };
  var foldMapWithIndex = function (dict) {
      return dict.foldMapWithIndex;
  };
  exports["FoldableWithIndex"] = FoldableWithIndex;
  exports["foldrWithIndex"] = foldrWithIndex;
  exports["foldlWithIndex"] = foldlWithIndex;
  exports["foldMapWithIndex"] = foldMapWithIndex;
})(PS["Data.FoldableWithIndex"] = PS["Data.FoldableWithIndex"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Traversable_Accum = PS["Data.Traversable.Accum"];
  var Data_Traversable_Accum_Internal = PS["Data.Traversable.Accum.Internal"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var TraversableWithIndex = function (FoldableWithIndex1, FunctorWithIndex0, Traversable2, traverseWithIndex) {
      this.FoldableWithIndex1 = FoldableWithIndex1;
      this.FunctorWithIndex0 = FunctorWithIndex0;
      this.Traversable2 = Traversable2;
      this.traverseWithIndex = traverseWithIndex;
  };
  var traverseWithIndex = function (dict) {
      return dict.traverseWithIndex;
  };
  exports["TraversableWithIndex"] = TraversableWithIndex;
  exports["traverseWithIndex"] = traverseWithIndex;
})(PS["Data.TraversableWithIndex"] = PS["Data.TraversableWithIndex"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Prelude = PS["Prelude"];        
  var NonEmpty = (function () {
      function NonEmpty(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      NonEmpty.create = function (value0) {
          return function (value1) {
              return new NonEmpty(value0, value1);
          };
      };
      return NonEmpty;
  })();
  var singleton = function (dictPlus) {
      return function (a) {
          return new NonEmpty(a, Control_Plus.empty(dictPlus));
      };
  };
  var showNonEmpty = function (dictShow) {
      return function (dictShow1) {
          return new Data_Show.Show(function (v) {
              return "(NonEmpty " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
          });
      };
  };
  var oneOf = function (dictAlternative) {
      return function (v) {
          return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(Control_Applicative.pure(dictAlternative.Applicative0())(v.value0))(v.value1);
      };
  };
  var head = function (v) {
      return v.value0;
  };
  var functorNonEmpty = function (dictFunctor) {
      return new Data_Functor.Functor(function (f) {
          return function (v) {
              return new NonEmpty(f(v.value0), Data_Functor.map(dictFunctor)(f)(v.value1));
          };
      });
  };
  var foldl1 = function (dictFoldable) {
      return function (f) {
          return function (v) {
              return Data_Foldable.foldl(dictFoldable)(f)(v.value0)(v.value1);
          };
      };
  };
  var foldableNonEmpty = function (dictFoldable) {
      return new Data_Foldable.Foldable(function (dictMonoid) {
          return function (f) {
              return function (v) {
                  return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v.value0))(Data_Foldable.foldMap(dictFoldable)(dictMonoid)(f)(v.value1));
              };
          };
      }, function (f) {
          return function (b) {
              return function (v) {
                  return Data_Foldable.foldl(dictFoldable)(f)(f(b)(v.value0))(v.value1);
              };
          };
      }, function (f) {
          return function (b) {
              return function (v) {
                  return f(v.value0)(Data_Foldable.foldr(dictFoldable)(f)(b)(v.value1));
              };
          };
      });
  };
  exports["NonEmpty"] = NonEmpty;
  exports["singleton"] = singleton;
  exports["foldl1"] = foldl1;
  exports["oneOf"] = oneOf;
  exports["head"] = head;
  exports["showNonEmpty"] = showNonEmpty;
  exports["functorNonEmpty"] = functorNonEmpty;
  exports["foldableNonEmpty"] = foldableNonEmpty;
})(PS["Data.NonEmpty"] = PS["Data.NonEmpty"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Biapplicative = PS["Control.Biapplicative"];
  var Control_Biapply = PS["Control.Biapply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_CommutativeRing = PS["Data.CommutativeRing"];
  var Data_Distributive = PS["Data.Distributive"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var Type_Equality = PS["Type.Equality"];        
  var Tuple = (function () {
      function Tuple(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Tuple.create = function (value0) {
          return function (value1) {
              return new Tuple(value0, value1);
          };
      };
      return Tuple;
  })();
  var uncurry = function (f) {
      return function (v) {
          return f(v.value0)(v.value1);
      };
  };
  var snd = function (v) {
      return v.value1;
  };
  var lookup = function (dictFoldable) {
      return function (dictEq) {
          return function (a) {
              return function ($264) {
                  return Data_Newtype.unwrap(Data_Maybe_First.newtypeFirst)(Data_Foldable.foldMap(dictFoldable)(Data_Maybe_First.monoidFirst)(function (v) {
                      var $146 = Data_Eq.eq(dictEq)(a)(v.value0);
                      if ($146) {
                          return new Data_Maybe.Just(v.value1);
                      };
                      return Data_Maybe.Nothing.value;
                  })($264));
              };
          };
      };
  };
  var functorTuple = new Data_Functor.Functor(function (f) {
      return function (v) {
          return new Tuple(v.value0, f(v.value1));
      };
  });                                                                                                   
  var fst = function (v) {
      return v.value0;
  };
  exports["Tuple"] = Tuple;
  exports["fst"] = fst;
  exports["snd"] = snd;
  exports["uncurry"] = uncurry;
  exports["lookup"] = lookup;
  exports["functorTuple"] = functorTuple;
})(PS["Data.Tuple"] = PS["Data.Tuple"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Unfoldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];        
  var Unfoldable = function (unfoldr) {
      this.unfoldr = unfoldr;
  };
  var unfoldr = function (dict) {
      return dict.unfoldr;
  };
  exports["Unfoldable"] = Unfoldable;
  exports["unfoldr"] = unfoldr;
})(PS["Data.Unfoldable"] = PS["Data.Unfoldable"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Array"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array_ST = PS["Data.Array.ST"];
  var Data_Array_ST_Iterator = PS["Data.Array.ST.Iterator"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var uncons = $foreign["uncons'"](Data_Function["const"](Data_Maybe.Nothing.value))(function (x) {
      return function (xs) {
          return new Data_Maybe.Just({
              head: x,
              tail: xs
          });
      };
  });
  var sortBy = function (comp) {
      return function (xs) {
          var comp$prime = function (x) {
              return function (y) {
                  var v = comp(x)(y);
                  if (v instanceof Data_Ordering.GT) {
                      return 1;
                  };
                  if (v instanceof Data_Ordering.EQ) {
                      return 0;
                  };
                  if (v instanceof Data_Ordering.LT) {
                      return -1 | 0;
                  };
                  throw new Error("Failed pattern match at Data.Array line 698, column 15 - line 703, column 1: " + [ v.constructor.name ]);
              };
          };
          return $foreign.sortImpl(comp$prime)(xs);
      };
  };
  var sort = function (dictOrd) {
      return function (xs) {
          return sortBy(Data_Ord.compare(dictOrd))(xs);
      };
  };
  var singleton = function (a) {
      return [ a ];
  };
  var $$null = function (xs) {
      return $foreign.length(xs) === 0;
  };
  var index = $foreign.indexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  var head = function (xs) {
      return index(xs)(0);
  };
  var fromFoldable = function (dictFoldable) {
      return $foreign.fromFoldableImpl(Data_Foldable.foldr(dictFoldable));
  };
  var concatMap = Data_Function.flip(Control_Bind.bind(Control_Bind.bindArray));
  var mapMaybe = function (f) {
      return concatMap(function ($94) {
          return Data_Maybe.maybe([  ])(singleton)(f($94));
      });
  };
  exports["fromFoldable"] = fromFoldable;
  exports["singleton"] = singleton;
  exports["null"] = $$null;
  exports["head"] = head;
  exports["uncons"] = uncons;
  exports["index"] = index;
  exports["concatMap"] = concatMap;
  exports["mapMaybe"] = mapMaybe;
  exports["sort"] = sort;
  exports["sortBy"] = sortBy;
  exports["length"] = $foreign.length;
  exports["cons"] = $foreign.cons;
  exports["snoc"] = $foreign.snoc;
  exports["drop"] = $foreign.drop;
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
    "use strict";

  // module Data.Int

  exports.fromNumberImpl = function (just) {
    return function (nothing) {
      return function (n) {
        /* jshint bitwise: false */
        return (n | 0) === n ? just(n) : nothing;
      };
    };
  };

  exports.toNumber = function (n) {
    return n;
  };

  exports.fromStringAsImpl = function (just) {
    return function (nothing) {
      return function (radix) {
        var digits;
        if (radix < 11) {
          digits = "[0-" + (radix - 1).toString() + "]";
        } else if (radix === 11) {
          digits = "[0-9a]";
        } else {
          digits = "[0-9a-" + String.fromCharCode(86 + radix) + "]";
        }
        var pattern = new RegExp("^[\\+\\-]?" + digits + "+$", "i");

        return function (s) {
          /* jshint bitwise: false */
          if (pattern.test(s)) {
            var i = parseInt(s, radix);
            return (i | 0) === i ? just(i) : nothing;
          } else {
            return nothing;
          }
        };
      };
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});
(function(exports) {
  /* globals exports */
  "use strict";         

  exports.infinity = Infinity;
})(PS["Global"] = PS["Global"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Global"];
  exports["infinity"] = $foreign.infinity;
})(PS["Global"] = PS["Global"] || {});
(function(exports) {
    "use strict";

  // module Math

  exports.abs = Math.abs;

  exports.remainder = function (n) {
    return function (m) {
      return n % m;
    };
  };

  exports.round = Math.round;
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Math"];
  exports["abs"] = $foreign.abs;
  exports["round"] = $foreign.round;
  exports["remainder"] = $foreign.remainder;
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Int"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_CommutativeRing = PS["Data.CommutativeRing"];
  var Data_DivisionRing = PS["Data.DivisionRing"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Field = PS["Data.Field"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Global = PS["Global"];
  var $$Math = PS["Math"];
  var Prelude = PS["Prelude"];
  var fromStringAs = $foreign.fromStringAsImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  var fromString = fromStringAs(10);
  var fromNumber = $foreign.fromNumberImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  var unsafeClamp = function (x) {
      if (x === Global.infinity) {
          return 0;
      };
      if (x === -Global.infinity) {
          return 0;
      };
      if (x >= $foreign.toNumber(Data_Bounded.top(Data_Bounded.boundedInt))) {
          return Data_Bounded.top(Data_Bounded.boundedInt);
      };
      if (x <= $foreign.toNumber(Data_Bounded.bottom(Data_Bounded.boundedInt))) {
          return Data_Bounded.bottom(Data_Bounded.boundedInt);
      };
      if (Data_Boolean.otherwise) {
          return Data_Maybe.fromMaybe(0)(fromNumber(x));
      };
      throw new Error("Failed pattern match at Data.Int line 64, column 1 - line 64, column 29: " + [ x.constructor.name ]);
  };
  var round = function ($23) {
      return unsafeClamp($$Math.round($23));
  };
  exports["fromNumber"] = fromNumber;
  exports["round"] = round;
  exports["fromString"] = fromString;
  exports["fromStringAs"] = fromStringAs;
  exports["toNumber"] = $foreign.toNumber;
})(PS["Data.Int"] = PS["Data.Int"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semigroup_Foldable = PS["Data.Semigroup.Foldable"];
  var Data_Semigroup_Traversable = PS["Data.Semigroup.Traversable"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Prelude = PS["Prelude"];        
  var Nil = (function () {
      function Nil() {

      };
      Nil.value = new Nil();
      return Nil;
  })();
  var Cons = (function () {
      function Cons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Cons.create = function (value0) {
          return function (value1) {
              return new Cons(value0, value1);
          };
      };
      return Cons;
  })();
  var NonEmptyList = function (x) {
      return x;
  };
  var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
      return function (f) {
          return Data_Foldable.foldl(foldableList)(function (acc) {
              return function ($158) {
                  return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f($158));
              };
          })(Data_Monoid.mempty(dictMonoid));
      };
  }, function (f) {
      var go = function ($copy_b) {
          return function ($copy_v) {
              var $tco_var_b = $copy_b;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(b, v) {
                  if (v instanceof Nil) {
                      $tco_done = true;
                      return b;
                  };
                  if (v instanceof Cons) {
                      $tco_var_b = f(b)(v.value0);
                      $copy_v = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List.Types line 81, column 12 - line 83, column 30: " + [ v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_b, $copy_v);
              };
              return $tco_result;
          };
      };
      return go;
  }, function (f) {
      return function (b) {
          var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value);
          return function ($159) {
              return Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b)(rev($159));
          };
      };
  });
  var functorList = new Data_Functor.Functor(function (f) {
      return Data_Foldable.foldr(foldableList)(function (x) {
          return function (acc) {
              return new Cons(f(x), acc);
          };
      })(Nil.value);
  });
  var functorNonEmptyList = Data_NonEmpty.functorNonEmpty(functorList);
  var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
      return function (ys) {
          return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
      };
  });
  var showList = function (dictShow) {
      return new Data_Show.Show(function (v) {
          if (v instanceof Nil) {
              return "Nil";
          };
          return "(" + (Data_Foldable.intercalate(foldableList)(Data_Monoid.monoidString)(" : ")(Data_Functor.map(functorList)(Data_Show.show(dictShow))(v)) + " : Nil)");
      });
  };
  var showNonEmptyList = function (dictShow) {
      return new Data_Show.Show(function (v) {
          return "(NonEmptyList " + (Data_Show.show(Data_NonEmpty.showNonEmpty(dictShow)(showList(dictShow)))(v) + ")");
      });
  };
  var traversableList = new Data_Traversable.Traversable(function () {
      return foldableList;
  }, function () {
      return functorList;
  }, function (dictApplicative) {
      return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
  }, function (dictApplicative) {
      return function (f) {
          return function ($162) {
              return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value))(Data_Foldable.foldl(foldableList)(function (acc) {
                  return function ($163) {
                      return Control_Apply.lift2(dictApplicative.Apply0())(Data_Function.flip(Cons.create))(acc)(f($163));
                  };
              })(Control_Applicative.pure(dictApplicative)(Nil.value))($162));
          };
      };
  });
  var applyList = new Control_Apply.Apply(function () {
      return functorList;
  }, function (v) {
      return function (v1) {
          if (v instanceof Nil) {
              return Nil.value;
          };
          if (v instanceof Cons) {
              return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
          };
          throw new Error("Failed pattern match at Data.List.Types line 120, column 1 - line 120, column 33: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var applyNonEmptyList = new Control_Apply.Apply(function () {
      return functorNonEmptyList;
  }, function (v) {
      return function (v1) {
          return new Data_NonEmpty.NonEmpty(v.value0(v1.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v.value1)(new Cons(v1.value0, Nil.value)))(Control_Apply.apply(applyList)(new Cons(v.value0, v.value1))(v1.value1)));
      };
  });
  var applicativeList = new Control_Applicative.Applicative(function () {
      return applyList;
  }, function (a) {
      return new Cons(a, Nil.value);
  });                                              
  var altList = new Control_Alt.Alt(function () {
      return functorList;
  }, Data_Semigroup.append(semigroupList));
  var plusList = new Control_Plus.Plus(function () {
      return altList;
  }, Nil.value);
  var applicativeNonEmptyList = new Control_Applicative.Applicative(function () {
      return applyNonEmptyList;
  }, function ($168) {
      return NonEmptyList(Data_NonEmpty.singleton(plusList)($168));
  });
  exports["Nil"] = Nil;
  exports["Cons"] = Cons;
  exports["NonEmptyList"] = NonEmptyList;
  exports["showList"] = showList;
  exports["semigroupList"] = semigroupList;
  exports["functorList"] = functorList;
  exports["foldableList"] = foldableList;
  exports["traversableList"] = traversableList;
  exports["applyList"] = applyList;
  exports["applicativeList"] = applicativeList;
  exports["altList"] = altList;
  exports["plusList"] = plusList;
  exports["showNonEmptyList"] = showNonEmptyList;
  exports["functorNonEmptyList"] = functorNonEmptyList;
  exports["applyNonEmptyList"] = applyNonEmptyList;
  exports["applicativeNonEmptyList"] = applicativeNonEmptyList;
})(PS["Data.List.Types"] = PS["Data.List.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var span = function (v) {
      return function (v1) {
          if (v1 instanceof Data_List_Types.Cons && v(v1.value0)) {
              var v2 = span(v)(v1.value1);
              return {
                  init: new Data_List_Types.Cons(v1.value0, v2.init),
                  rest: v2.rest
              };
          };
          return {
              init: Data_List_Types.Nil.value,
              rest: v1
          };
      };
  };
  var singleton = function (a) {
      return new Data_List_Types.Cons(a, Data_List_Types.Nil.value);
  };
  var sortBy = function (cmp) {
      var merge = function (v) {
          return function (v1) {
              if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                  if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1.value0))(Data_Ordering.GT.value)) {
                      return new Data_List_Types.Cons(v1.value0, merge(v)(v1.value1));
                  };
                  if (Data_Boolean.otherwise) {
                      return new Data_List_Types.Cons(v.value0, merge(v.value1)(v1));
                  };
              };
              if (v instanceof Data_List_Types.Nil) {
                  return v1;
              };
              if (v1 instanceof Data_List_Types.Nil) {
                  return v;
              };
              throw new Error("Failed pattern match at Data.List line 473, column 3 - line 473, column 38: " + [ v.constructor.name, v1.constructor.name ]);
          };
      };
      var mergePairs = function (v) {
          if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
              return new Data_List_Types.Cons(merge(v.value0)(v.value1.value0), mergePairs(v.value1.value1));
          };
          return v;
      };
      var mergeAll = function ($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
              if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                  $tco_done = true;
                  return v.value0;
              };
              $copy_v = mergePairs(v);
              return;
          };
          while (!$tco_done) {
              $tco_result = $tco_loop($copy_v);
          };
          return $tco_result;
      };
      var sequences = function (v) {
          if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
              if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v.value1.value0))(Data_Ordering.GT.value)) {
                  return descending(v.value1.value0)(singleton(v.value0))(v.value1.value1);
              };
              if (Data_Boolean.otherwise) {
                  return ascending(v.value1.value0)(function (v1) {
                      return new Data_List_Types.Cons(v.value0, v1);
                  })(v.value1.value1);
              };
          };
          return singleton(v);
      };
      var descending = function ($copy_a) {
          return function ($copy_as) {
              return function ($copy_v) {
                  var $tco_var_a = $copy_a;
                  var $tco_var_as = $copy_as;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(a, as, v) {
                      if (v instanceof Data_List_Types.Cons && Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                          $tco_var_a = v.value0;
                          $tco_var_as = new Data_List_Types.Cons(a, as);
                          $copy_v = v.value1;
                          return;
                      };
                      $tco_done = true;
                      return new Data_List_Types.Cons(new Data_List_Types.Cons(a, as), sequences(v));
                  };
                  while (!$tco_done) {
                      $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                  };
                  return $tco_result;
              };
          };
      };
      var ascending = function ($copy_a) {
          return function ($copy_as) {
              return function ($copy_v) {
                  var $tco_var_a = $copy_a;
                  var $tco_var_as = $copy_as;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(a, as, v) {
                      if (v instanceof Data_List_Types.Cons && Data_Eq.notEq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                          $tco_var_a = v.value0;
                          $tco_var_as = function (ys) {
                              return as(new Data_List_Types.Cons(a, ys));
                          };
                          $copy_v = v.value1;
                          return;
                      };
                      $tco_done = true;
                      return new Data_List_Types.Cons(as(singleton(a)), sequences(v));
                  };
                  while (!$tco_done) {
                      $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                  };
                  return $tco_result;
              };
          };
      };
      return function ($333) {
          return mergeAll(sequences($333));
      };
  };
  var reverse = (function () {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return acc;
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                      $copy_v = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List line 368, column 3 - line 368, column 19: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  })();
  var unsnoc = function (lst) {
      var go = function ($copy_v) {
          return function ($copy_acc) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, acc) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return Data_Maybe.Nothing.value;
                  };
                  if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return new Data_Maybe.Just({
                          revInit: acc,
                          last: v.value0
                      });
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      $tco_var_v = v.value1;
                      $copy_acc = new Data_List_Types.Cons(v.value0, acc);
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List line 270, column 3 - line 270, column 23: " + [ v.constructor.name, acc.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_v, $copy_acc);
              };
              return $tco_result;
          };
      };
      return Data_Functor.map(Data_Maybe.functorMaybe)(function (h) {
          return {
              init: reverse(h.revInit),
              last: h.last
          };
      })(go(lst)(Data_List_Types.Nil.value));
  };                                                                                          
  var mapMaybe = function (f) {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return reverse(acc);
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      var v1 = f(v.value0);
                      if (v1 instanceof Data_Maybe.Nothing) {
                          $tco_var_acc = acc;
                          $copy_v = v.value1;
                          return;
                      };
                      if (v1 instanceof Data_Maybe.Just) {
                          $tco_var_acc = new Data_List_Types.Cons(v1.value0, acc);
                          $copy_v = v.value1;
                          return;
                      };
                      throw new Error("Failed pattern match at Data.List line 419, column 5 - line 421, column 32: " + [ v1.constructor.name ]);
                  };
                  throw new Error("Failed pattern match at Data.List line 417, column 3 - line 417, column 27: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  };    
  var last = function ($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
          if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
              $tco_done = true;
              return new Data_Maybe.Just(v.value0);
          };
          if (v instanceof Data_List_Types.Cons) {
              $copy_v = v.value1;
              return;
          };
          $tco_done = true;
          return Data_Maybe.Nothing.value;
      };
      while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
      };
      return $tco_result;
  };
  var init = function (lst) {
      return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
          return v.init;
      })(unsnoc(lst));
  };
  var groupBy = function (v) {
      return function (v1) {
          if (v1 instanceof Data_List_Types.Nil) {
              return Data_List_Types.Nil.value;
          };
          if (v1 instanceof Data_List_Types.Cons) {
              var v2 = span(v(v1.value0))(v1.value1);
              return new Data_List_Types.Cons(new Data_NonEmpty.NonEmpty(v1.value0, v2.init), groupBy(v)(v2.rest));
          };
          throw new Error("Failed pattern match at Data.List line 605, column 1 - line 605, column 80: " + [ v.constructor.name, v1.constructor.name ]);
      };
  };
  var fromFoldable = function (dictFoldable) {
      return Data_Foldable.foldr(dictFoldable)(Data_List_Types.Cons.create)(Data_List_Types.Nil.value);
  };
  var filter = function (p) {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return reverse(acc);
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      if (p(v.value0)) {
                          $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                          $copy_v = v.value1;
                          return;
                      };
                      if (Data_Boolean.otherwise) {
                          $tco_var_acc = acc;
                          $copy_v = v.value1;
                          return;
                      };
                  };
                  throw new Error("Failed pattern match at Data.List line 390, column 3 - line 390, column 27: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  };
  var drop = function ($copy_v) {
      return function ($copy_v1) {
          var $tco_var_v = $copy_v;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v, v1) {
              if (v < 1) {
                  $tco_done = true;
                  return v1;
              };
              if (v1 instanceof Data_List_Types.Nil) {
                  $tco_done = true;
                  return Data_List_Types.Nil.value;
              };
              if (v1 instanceof Data_List_Types.Cons) {
                  $tco_var_v = v - 1 | 0;
                  $copy_v1 = v1.value1;
                  return;
              };
              throw new Error("Failed pattern match at Data.List line 543, column 1 - line 543, column 42: " + [ v.constructor.name, v1.constructor.name ]);
          };
          while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v, $copy_v1);
          };
          return $tco_result;
      };
  };
  var catMaybes = mapMaybe(Control_Category.id(Control_Category.categoryFn));
  exports["fromFoldable"] = fromFoldable;
  exports["singleton"] = singleton;
  exports["last"] = last;
  exports["init"] = init;
  exports["unsnoc"] = unsnoc;
  exports["reverse"] = reverse;
  exports["filter"] = filter;
  exports["mapMaybe"] = mapMaybe;
  exports["catMaybes"] = catMaybes;
  exports["sortBy"] = sortBy;
  exports["drop"] = drop;
  exports["span"] = span;
  exports["groupBy"] = groupBy;
})(PS["Data.List"] = PS["Data.List"] || {});
(function(exports) {
    "use strict";

  exports.defer = function () {

    function Defer(thunk) {
      if (this instanceof Defer) {
        this.thunk = thunk;
        return this;
      } else {
        return new Defer(thunk);
      }
    }

    Defer.prototype.force = function () {
      var value = this.thunk();
      this.thunk = null;
      this.force = function () {
        return value;
      };
      return value;
    };

    return Defer;

  }();

  exports.force = function (l) {
    return l.force();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Lazy"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_CommutativeRing = PS["Data.CommutativeRing"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Field = PS["Data.Field"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var functorLazy = new Data_Functor.Functor(function (f) {
      return function (l) {
          return $foreign.defer(function (v) {
              return f($foreign.force(l));
          });
      };
  });
  exports["functorLazy"] = functorLazy;
  exports["defer"] = $foreign.defer;
  exports["force"] = $foreign.force;
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_Lazy = PS["Data.Lazy"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Prelude = PS["Prelude"];        
  var List = function (x) {
      return x;
  };
  var Nil = (function () {
      function Nil() {

      };
      Nil.value = new Nil();
      return Nil;
  })();
  var Cons = (function () {
      function Cons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Cons.create = function (value0) {
          return function (value1) {
              return new Cons(value0, value1);
          };
      };
      return Cons;
  })();
  var nil = List(Data_Lazy.defer(function (v) {
      return Nil.value;
  }));             
  var newtypeList = new Data_Newtype.Newtype(function (n) {
      return n;
  }, List);
  var step = function ($184) {
      return Data_Lazy.force(Data_Newtype.unwrap(newtypeList)($184));
  };      
  var lazyList = new Control_Lazy.Lazy(function (f) {
      return List(Data_Lazy.defer(function ($185) {
          return step(f($185));
      }));
  });
  var cons = function (x) {
      return function (xs) {
          return List(Data_Lazy.defer(function (v) {
              return new Cons(x, xs);
          }));
      };
  };
  var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
      return function (f) {
          return Data_Foldable.foldl(foldableList)(function (b) {
              return function (a) {
                  return Data_Semigroup.append(dictMonoid.Semigroup0())(b)(f(a));
              };
          })(Data_Monoid.mempty(dictMonoid));
      };
  }, function (op) {
      var go = function ($copy_b) {
          return function ($copy_xs) {
              var $tco_var_b = $copy_b;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(b, xs) {
                  var v = step(xs);
                  if (v instanceof Nil) {
                      $tco_done = true;
                      return b;
                  };
                  if (v instanceof Cons) {
                      $tco_var_b = op(b)(v.value0);
                      $copy_xs = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List.Lazy.Types line 122, column 7 - line 124, column 40: " + [ v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_b, $copy_xs);
              };
              return $tco_result;
          };
      };
      return go;
  }, function (op) {
      return function (z) {
          return function (xs) {
              var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(cons))(nil);
              return Data_Foldable.foldl(foldableList)(Data_Function.flip(op))(z)(rev(xs));
          };
      };
  });
  var unfoldableList = new Data_Unfoldable.Unfoldable((function () {
      var go = function (f) {
          return function (b) {
              return Control_Lazy.defer(lazyList)(function (v) {
                  var v1 = f(b);
                  if (v1 instanceof Data_Maybe.Nothing) {
                      return nil;
                  };
                  if (v1 instanceof Data_Maybe.Just) {
                      return cons(v1.value0.value0)(go(f)(v1.value0.value1));
                  };
                  throw new Error("Failed pattern match at Data.List.Lazy.Types line 146, column 28 - line 148, column 39: " + [ v1.constructor.name ]);
              });
          };
      };
      return go;
  })());
  exports["List"] = List;
  exports["Nil"] = Nil;
  exports["Cons"] = Cons;
  exports["step"] = step;
  exports["nil"] = nil;
  exports["cons"] = cons;
  exports["newtypeList"] = newtypeList;
  exports["lazyList"] = lazyList;
  exports["foldableList"] = foldableList;
  exports["unfoldableList"] = unfoldableList;
})(PS["Data.List.Lazy.Types"] = PS["Data.List.Lazy.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Lazy = PS["Data.Lazy"];
  var Data_List_Lazy_Types = PS["Data.List.Lazy.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Prelude = PS["Prelude"];
  var filter = function (p) {
      var go = function ($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
              if (v instanceof Data_List_Lazy_Types.Nil) {
                  $tco_done = true;
                  return Data_List_Lazy_Types.Nil.value;
              };
              if (v instanceof Data_List_Lazy_Types.Cons) {
                  if (p(v.value0)) {
                      $tco_done = true;
                      return new Data_List_Lazy_Types.Cons(v.value0, filter(p)(v.value1));
                  };
                  if (Data_Boolean.otherwise) {
                      $copy_v = Data_List_Lazy_Types.step(v.value1);
                      return;
                  };
              };
              throw new Error("Failed pattern match at Data.List.Lazy line 427, column 3 - line 427, column 15: " + [ v.constructor.name ]);
          };
          while (!$tco_done) {
              $tco_result = $tco_loop($copy_v);
          };
          return $tco_result;
      };
      return function ($252) {
          return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($252)));
      };
  };
  exports["filter"] = filter;
})(PS["Data.List.Lazy"] = PS["Data.List.Lazy"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List = PS["Data.List"];
  var Data_List_Lazy = PS["Data.List.Lazy"];
  var Data_List_Lazy_Types = PS["Data.List.Lazy.Types"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];        
  var Leaf = (function () {
      function Leaf() {

      };
      Leaf.value = new Leaf();
      return Leaf;
  })();
  var Two = (function () {
      function Two(value0, value1, value2, value3) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
      };
      Two.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return new Two(value0, value1, value2, value3);
                  };
              };
          };
      };
      return Two;
  })();
  var Three = (function () {
      function Three(value0, value1, value2, value3, value4, value5, value6) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
          this.value4 = value4;
          this.value5 = value5;
          this.value6 = value6;
      };
      Three.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return function (value4) {
                          return function (value5) {
                              return function (value6) {
                                  return new Three(value0, value1, value2, value3, value4, value5, value6);
                              };
                          };
                      };
                  };
              };
          };
      };
      return Three;
  })();
  var TwoLeft = (function () {
      function TwoLeft(value0, value1, value2) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
      };
      TwoLeft.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return new TwoLeft(value0, value1, value2);
              };
          };
      };
      return TwoLeft;
  })();
  var TwoRight = (function () {
      function TwoRight(value0, value1, value2) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
      };
      TwoRight.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return new TwoRight(value0, value1, value2);
              };
          };
      };
      return TwoRight;
  })();
  var ThreeLeft = (function () {
      function ThreeLeft(value0, value1, value2, value3, value4, value5) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
          this.value4 = value4;
          this.value5 = value5;
      };
      ThreeLeft.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return function (value4) {
                          return function (value5) {
                              return new ThreeLeft(value0, value1, value2, value3, value4, value5);
                          };
                      };
                  };
              };
          };
      };
      return ThreeLeft;
  })();
  var ThreeMiddle = (function () {
      function ThreeMiddle(value0, value1, value2, value3, value4, value5) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
          this.value4 = value4;
          this.value5 = value5;
      };
      ThreeMiddle.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return function (value4) {
                          return function (value5) {
                              return new ThreeMiddle(value0, value1, value2, value3, value4, value5);
                          };
                      };
                  };
              };
          };
      };
      return ThreeMiddle;
  })();
  var ThreeRight = (function () {
      function ThreeRight(value0, value1, value2, value3, value4, value5) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
          this.value4 = value4;
          this.value5 = value5;
      };
      ThreeRight.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return function (value4) {
                          return function (value5) {
                              return new ThreeRight(value0, value1, value2, value3, value4, value5);
                          };
                      };
                  };
              };
          };
      };
      return ThreeRight;
  })();
  var KickUp = (function () {
      function KickUp(value0, value1, value2, value3) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
      };
      KickUp.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return new KickUp(value0, value1, value2, value3);
                  };
              };
          };
      };
      return KickUp;
  })();
  var values = function (v) {
      if (v instanceof Leaf) {
          return Data_List_Types.Nil.value;
      };
      if (v instanceof Two) {
          return Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value2))(values(v.value3)));
      };
      if (v instanceof Three) {
          return Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value2))(Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value3))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value5))(values(v.value6)))));
      };
      throw new Error("Failed pattern match at Data.Map line 590, column 1 - line 590, column 40: " + [ v.constructor.name ]);
  };
  var singleton = function (k) {
      return function (v) {
          return new Two(Leaf.value, k, v, Leaf.value);
      };
  };                                                                
  var toUnfoldable = function (dictUnfoldable) {
      return function (m) {
          var go = function ($copy_v) {
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return Data_Maybe.Nothing.value;
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      if (v.value0 instanceof Leaf) {
                          $copy_v = v.value1;
                          return;
                      };
                      if (v.value0 instanceof Two) {
                          $tco_done = true;
                          return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value1, v.value0.value2), new Data_List_Types.Cons(v.value0.value0, new Data_List_Types.Cons(v.value0.value3, v.value1))));
                      };
                      if (v.value0 instanceof Three) {
                          $tco_done = true;
                          return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value1, v.value0.value2), new Data_List_Types.Cons(singleton(v.value0.value4)(v.value0.value5), new Data_List_Types.Cons(v.value0.value0, new Data_List_Types.Cons(v.value0.value3, new Data_List_Types.Cons(v.value0.value6, v.value1))))));
                      };
                      throw new Error("Failed pattern match at Data.Map line 561, column 18 - line 566, column 77: " + [ v.value0.constructor.name ]);
                  };
                  throw new Error("Failed pattern match at Data.Map line 560, column 3 - line 560, column 19: " + [ v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($copy_v);
              };
              return $tco_result;
          };
          return Data_Unfoldable.unfoldr(dictUnfoldable)(go)(new Data_List_Types.Cons(m, Data_List_Types.Nil.value));
      };
  };
  var lookup = function (dictOrd) {
      return function (k) {
          var comp = Data_Ord.compare(dictOrd);
          var go = function ($copy_v) {
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v) {
                  if (v instanceof Leaf) {
                      $tco_done = true;
                      return Data_Maybe.Nothing.value;
                  };
                  if (v instanceof Two) {
                      var v2 = comp(k)(v.value1);
                      if (v2 instanceof Data_Ordering.EQ) {
                          $tco_done = true;
                          return new Data_Maybe.Just(v.value2);
                      };
                      if (v2 instanceof Data_Ordering.LT) {
                          $copy_v = v.value0;
                          return;
                      };
                      $copy_v = v.value3;
                      return;
                  };
                  if (v instanceof Three) {
                      var v3 = comp(k)(v.value1);
                      if (v3 instanceof Data_Ordering.EQ) {
                          $tco_done = true;
                          return new Data_Maybe.Just(v.value2);
                      };
                      var v4 = comp(k)(v.value4);
                      if (v4 instanceof Data_Ordering.EQ) {
                          $tco_done = true;
                          return new Data_Maybe.Just(v.value5);
                      };
                      if (v3 instanceof Data_Ordering.LT) {
                          $copy_v = v.value0;
                          return;
                      };
                      if (v4 instanceof Data_Ordering.GT) {
                          $copy_v = v.value6;
                          return;
                      };
                      $copy_v = v.value3;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.Map line 195, column 5 - line 195, column 22: " + [ v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($copy_v);
              };
              return $tco_result;
          };
          return go;
      };
  }; 
  var fromZipper = function ($copy_dictOrd) {
      return function ($copy_v) {
          return function ($copy_tree) {
              var $tco_var_dictOrd = $copy_dictOrd;
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(dictOrd, v, tree) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return tree;
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      if (v.value0 instanceof TwoLeft) {
                          $tco_var_dictOrd = dictOrd;
                          $tco_var_v = v.value1;
                          $copy_tree = new Two(tree, v.value0.value0, v.value0.value1, v.value0.value2);
                          return;
                      };
                      if (v.value0 instanceof TwoRight) {
                          $tco_var_dictOrd = dictOrd;
                          $tco_var_v = v.value1;
                          $copy_tree = new Two(v.value0.value0, v.value0.value1, v.value0.value2, tree);
                          return;
                      };
                      if (v.value0 instanceof ThreeLeft) {
                          $tco_var_dictOrd = dictOrd;
                          $tco_var_v = v.value1;
                          $copy_tree = new Three(tree, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5);
                          return;
                      };
                      if (v.value0 instanceof ThreeMiddle) {
                          $tco_var_dictOrd = dictOrd;
                          $tco_var_v = v.value1;
                          $copy_tree = new Three(v.value0.value0, v.value0.value1, v.value0.value2, tree, v.value0.value3, v.value0.value4, v.value0.value5);
                          return;
                      };
                      if (v.value0 instanceof ThreeRight) {
                          $tco_var_dictOrd = dictOrd;
                          $tco_var_v = v.value1;
                          $copy_tree = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5, tree);
                          return;
                      };
                      throw new Error("Failed pattern match at Data.Map line 413, column 3 - line 418, column 88: " + [ v.value0.constructor.name ]);
                  };
                  throw new Error("Failed pattern match at Data.Map line 410, column 1 - line 410, column 80: " + [ v.constructor.name, tree.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_dictOrd, $tco_var_v, $copy_tree);
              };
              return $tco_result;
          };
      };
  };
  var insert = function (dictOrd) {
      return function (k) {
          return function (v) {
              var up = function ($copy_v1) {
                  return function ($copy_v2) {
                      var $tco_var_v1 = $copy_v1;
                      var $tco_done = false;
                      var $tco_result;
                      function $tco_loop(v1, v2) {
                          if (v1 instanceof Data_List_Types.Nil) {
                              $tco_done = true;
                              return new Two(v2.value0, v2.value1, v2.value2, v2.value3);
                          };
                          if (v1 instanceof Data_List_Types.Cons) {
                              if (v1.value0 instanceof TwoLeft) {
                                  $tco_done = true;
                                  return fromZipper(dictOrd)(v1.value1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, v1.value0.value0, v1.value0.value1, v1.value0.value2));
                              };
                              if (v1.value0 instanceof TwoRight) {
                                  $tco_done = true;
                                  return fromZipper(dictOrd)(v1.value1)(new Three(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0, v2.value1, v2.value2, v2.value3));
                              };
                              if (v1.value0 instanceof ThreeLeft) {
                                  $tco_var_v1 = v1.value1;
                                  $copy_v2 = new KickUp(new Two(v2.value0, v2.value1, v2.value2, v2.value3), v1.value0.value0, v1.value0.value1, new Two(v1.value0.value2, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                                  return;
                              };
                              if (v1.value0 instanceof ThreeMiddle) {
                                  $tco_var_v1 = v1.value1;
                                  $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0), v2.value1, v2.value2, new Two(v2.value3, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                                  return;
                              };
                              if (v1.value0 instanceof ThreeRight) {
                                  $tco_var_v1 = v1.value1;
                                  $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v1.value0.value3), v1.value0.value4, v1.value0.value5, new Two(v2.value0, v2.value1, v2.value2, v2.value3));
                                  return;
                              };
                              throw new Error("Failed pattern match at Data.Map line 449, column 5 - line 454, column 108: " + [ v1.value0.constructor.name, v2.constructor.name ]);
                          };
                          throw new Error("Failed pattern match at Data.Map line 446, column 3 - line 446, column 56: " + [ v1.constructor.name, v2.constructor.name ]);
                      };
                      while (!$tco_done) {
                          $tco_result = $tco_loop($tco_var_v1, $copy_v2);
                      };
                      return $tco_result;
                  };
              };
              var comp = Data_Ord.compare(dictOrd);
              var down = function ($copy_ctx) {
                  return function ($copy_v1) {
                      var $tco_var_ctx = $copy_ctx;
                      var $tco_done = false;
                      var $tco_result;
                      function $tco_loop(ctx, v1) {
                          if (v1 instanceof Leaf) {
                              $tco_done = true;
                              return up(ctx)(new KickUp(Leaf.value, k, v, Leaf.value));
                          };
                          if (v1 instanceof Two) {
                              var v2 = comp(k)(v1.value1);
                              if (v2 instanceof Data_Ordering.EQ) {
                                  $tco_done = true;
                                  return fromZipper(dictOrd)(ctx)(new Two(v1.value0, k, v, v1.value3));
                              };
                              if (v2 instanceof Data_Ordering.LT) {
                                  $tco_var_ctx = new Data_List_Types.Cons(new TwoLeft(v1.value1, v1.value2, v1.value3), ctx);
                                  $copy_v1 = v1.value0;
                                  return;
                              };
                              $tco_var_ctx = new Data_List_Types.Cons(new TwoRight(v1.value0, v1.value1, v1.value2), ctx);
                              $copy_v1 = v1.value3;
                              return;
                          };
                          if (v1 instanceof Three) {
                              var v3 = comp(k)(v1.value1);
                              if (v3 instanceof Data_Ordering.EQ) {
                                  $tco_done = true;
                                  return fromZipper(dictOrd)(ctx)(new Three(v1.value0, k, v, v1.value3, v1.value4, v1.value5, v1.value6));
                              };
                              var v4 = comp(k)(v1.value4);
                              if (v4 instanceof Data_Ordering.EQ) {
                                  $tco_done = true;
                                  return fromZipper(dictOrd)(ctx)(new Three(v1.value0, v1.value1, v1.value2, v1.value3, k, v, v1.value6));
                              };
                              if (v3 instanceof Data_Ordering.LT) {
                                  $tco_var_ctx = new Data_List_Types.Cons(new ThreeLeft(v1.value1, v1.value2, v1.value3, v1.value4, v1.value5, v1.value6), ctx);
                                  $copy_v1 = v1.value0;
                                  return;
                              };
                              if (v3 instanceof Data_Ordering.GT && v4 instanceof Data_Ordering.LT) {
                                  $tco_var_ctx = new Data_List_Types.Cons(new ThreeMiddle(v1.value0, v1.value1, v1.value2, v1.value4, v1.value5, v1.value6), ctx);
                                  $copy_v1 = v1.value3;
                                  return;
                              };
                              $tco_var_ctx = new Data_List_Types.Cons(new ThreeRight(v1.value0, v1.value1, v1.value2, v1.value3, v1.value4, v1.value5), ctx);
                              $copy_v1 = v1.value6;
                              return;
                          };
                          throw new Error("Failed pattern match at Data.Map line 429, column 3 - line 429, column 55: " + [ ctx.constructor.name, v1.constructor.name ]);
                      };
                      while (!$tco_done) {
                          $tco_result = $tco_loop($tco_var_ctx, $copy_v1);
                      };
                      return $tco_result;
                  };
              };
              return down(Data_List_Types.Nil.value);
          };
      };
  };
  var empty = Leaf.value;
  var fromFoldable = function (dictOrd) {
      return function (dictFoldable) {
          return Data_Foldable.foldl(dictFoldable)(function (m) {
              return function (v) {
                  return insert(dictOrd)(v.value0)(v.value1)(m);
              };
          })(empty);
      };
  };
  var filterWithKey = function (dictOrd) {
      return function (predicate) {
          return function ($750) {
              return fromFoldable(dictOrd)(Data_List_Lazy_Types.foldableList)(Data_List_Lazy.filter(Data_Tuple.uncurry(predicate))(toUnfoldable(Data_List_Lazy_Types.unfoldableList)($750)));
          };
      };
  };
  var filter = function (dictOrd) {
      return function (predicate) {
          return filterWithKey(dictOrd)(Data_Function["const"](predicate));
      };
  };
  exports["empty"] = empty;
  exports["singleton"] = singleton;
  exports["insert"] = insert;
  exports["lookup"] = lookup;
  exports["fromFoldable"] = fromFoldable;
  exports["toUnfoldable"] = toUnfoldable;
  exports["values"] = values;
  exports["filterWithKey"] = filterWithKey;
  exports["filter"] = filter;
})(PS["Data.Map"] = PS["Data.Map"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Prelude = PS["Prelude"];        
  var Profunctor = function (dimap) {
      this.dimap = dimap;
  };
  var profunctorFn = new Profunctor(function (a2b) {
      return function (c2d) {
          return function (b2c) {
              return function ($9) {
                  return c2d(b2c(a2b($9)));
              };
          };
      };
  });
  var dimap = function (dict) {
      return dict.dimap;
  };
  var lmap = function (dictProfunctor) {
      return function (a2b) {
          return dimap(dictProfunctor)(a2b)(Control_Category.id(Control_Category.categoryFn));
      };
  };
  exports["dimap"] = dimap;
  exports["Profunctor"] = Profunctor;
  exports["lmap"] = lmap;
  exports["profunctorFn"] = profunctorFn;
})(PS["Data.Profunctor"] = PS["Data.Profunctor"] || {});
(function(exports) {
    "use strict";

  exports._charAt = function (just) {
    return function (nothing) {
      return function (i) {
        return function (s) {
          return i >= 0 && i < s.length ? just(s.charAt(i)) : nothing;
        };
      };
    };
  };

  exports.singleton = function (c) {
    return c;
  };

  exports._indexOf = function (just) {
    return function (nothing) {
      return function (x) {
        return function (s) {
          var i = s.indexOf(x);
          return i === -1 ? nothing : just(i);
        };
      };
    };
  };

  exports.length = function (s) {
    return s.length;
  };

  exports.take = function (n) {
    return function (s) {
      return s.substr(0, n);
    };
  };

  exports.drop = function (n) {
    return function (s) {
      return s.substring(n);
    };
  };

  exports.split = function (sep) {
    return function (s) {
      return s.split(sep);
    };
  };

  exports.toLower = function (s) {
    return s.toLowerCase();
  };
})(PS["Data.String"] = PS["Data.String"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.String"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_String_Unsafe = PS["Data.String.Unsafe"];
  var Prelude = PS["Prelude"];                                                                
  var indexOf = $foreign._indexOf(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  var stripPrefix = function (v) {
      return function (str) {
          var v1 = indexOf(v)(str);
          if (v1 instanceof Data_Maybe.Just && v1.value0 === 0) {
              return Data_Maybe.Just.create($foreign.drop($foreign.length(v))(str));
          };
          return Data_Maybe.Nothing.value;
      };
  };
  var contains = function (pat) {
      return function ($48) {
          return Data_Maybe.isJust(indexOf(pat)($48));
      };
  };                                                                                      
  var charAt = $foreign._charAt(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  exports["charAt"] = charAt;
  exports["contains"] = contains;
  exports["indexOf"] = indexOf;
  exports["stripPrefix"] = stripPrefix;
  exports["singleton"] = $foreign.singleton;
  exports["take"] = $foreign.take;
  exports["drop"] = $foreign.drop;
  exports["split"] = $foreign.split;
  exports["toLower"] = $foreign.toLower;
})(PS["Data.String"] = PS["Data.String"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Int = PS["Data.Int"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Map = PS["Data.Map"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Profunctor = PS["Data.Profunctor"];
  var Data_String = PS["Data.String"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Global = PS["Global"];        
  var Path = (function () {
      function Path(value0) {
          this.value0 = value0;
      };
      Path.create = function (value0) {
          return new Path(value0);
      };
      return Path;
  })();
  var Query = (function () {
      function Query(value0) {
          this.value0 = value0;
      };
      Query.create = function (value0) {
          return new Query(value0);
      };
      return Query;
  })();
  var Match = function (x) {
      return x;
  };
  var parseSegment = function (parser) {
      return Match(function (r) {
          if (r instanceof Data_List_Types.Cons && r.value0 instanceof Path) {
              return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Tuple.Tuple.create(r.value1))(parser(r.value0.value0));
          };
          return Data_Maybe.Nothing.value;
      });
  };                                             
  var parseQuery = function (s) {
      var parts = Data_List.fromFoldable(Data_Foldable.foldableArray)(Data_String.split("&")(Data_String.drop(1)(s)));
      var part2tuple = function (part) {
          var param$prime = Data_String.split("=")(part);
          return Control_Bind.discard(Control_Bind.discardUnit)(Data_Maybe.bindMaybe)(Control_MonadZero.guard(Data_Maybe.monadZeroMaybe)(Data_Array.length(param$prime) === 2))(function () {
              return Control_Apply.apply(Data_Maybe.applyMaybe)(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Tuple.Tuple.create)(Data_Array.head(param$prime)))(Data_Array.index(param$prime)(1));
          });
      };
      return Query.create(Data_Map.fromFoldable(Data_Ord.ordString)(Data_List_Types.foldableList)(Data_List.catMaybes(Data_Functor.map(Data_List_Types.functorList)(part2tuple)(parts))));
  };
  var routeFromUrl = function (v) {
      if (v === "/") {
          return Data_List_Types.Nil.value;
      };
      var parsePath = function (query) {
          var prependPath = Data_Profunctor.lmap(Data_Profunctor.profunctorFn)(Path.create)(Data_List_Types.Cons.create);
          return function ($61) {
              return Data_List.drop(1)(Data_Foldable.foldr(Data_Foldable.foldableArray)(prependPath)(query)(Data_String.split("/")($61)));
          };
      };
      var v1 = Data_String.indexOf("?")(v);
      if (v1 instanceof Data_Maybe.Nothing) {
          return parsePath(Data_List_Types.Nil.value)(v);
      };
      if (v1 instanceof Data_Maybe.Just) {
          var queryPart = parseQuery(Data_String.drop(v1.value0)(v));
          return parsePath(new Data_List_Types.Cons(queryPart, Data_List_Types.Nil.value))(Data_String.take(v1.value0)(v));
      };
      throw new Error("Failed pattern match at Pux.Router line 135, column 20 - line 139, column 82: " + [ v1.constructor.name ]);
  };
  var router = function (url) {
      return function (v) {
          var result = v(routeFromUrl(url));
          return Data_Maybe.maybe(Data_Maybe.Nothing.value)(function ($62) {
              return Data_Maybe.Just.create(Data_Tuple.snd($62));
          })(result);
      };
  };   
  var matchFunctor = new Data_Functor.Functor(function (f) {
      return function (v) {
          return Match(function (r) {
              return Data_Maybe.maybe(Data_Maybe.Nothing.value)(function (t) {
                  return Data_Maybe.Just.create(new Data_Tuple.Tuple(Data_Tuple.fst(t), f(Data_Tuple.snd(t))));
              })(v(r));
          });
      };
  });
  var matchApply = new Control_Apply.Apply(function () {
      return matchFunctor;
  }, function (v) {
      return function (v1) {
          return Match(function (r1) {
              var v2 = v(r1);
              if (v2 instanceof Data_Maybe.Nothing) {
                  return Data_Maybe.Nothing.value;
              };
              if (v2 instanceof Data_Maybe.Just) {
                  var v3 = v1(v2.value0.value0);
                  if (v3 instanceof Data_Maybe.Nothing) {
                      return Data_Maybe.Nothing.value;
                  };
                  if (v3 instanceof Data_Maybe.Just) {
                      return Data_Maybe.Just.create(new Data_Tuple.Tuple(v3.value0.value0, v2.value0.value1(v3.value0.value1)));
                  };
                  throw new Error("Failed pattern match at Pux.Router line 123, column 28 - line 125, column 51: " + [ v3.constructor.name ]);
              };
              throw new Error("Failed pattern match at Pux.Router line 121, column 5 - line 125, column 51: " + [ v2.constructor.name ]);
          });
      };
  });
  var matchAlt = new Control_Alt.Alt(function () {
      return matchFunctor;
  }, function (v) {
      return function (v1) {
          return Match(function (r) {
              var v2 = v(r);
              if (v2 instanceof Data_Maybe.Nothing) {
                  return v1(r);
              };
              if (v2 instanceof Data_Maybe.Just) {
                  return new Data_Maybe.Just(v2.value0);
              };
              throw new Error("Failed pattern match at Pux.Router line 115, column 5 - line 117, column 24: " + [ v2.constructor.name ]);
          });
      };
  });
  var lit = function (part) {
      var parse = function (s) {
          if (s === part) {
              return new Data_Maybe.Just(Data_Unit.unit);
          };
          if (Data_Boolean.otherwise) {
              return Data_Maybe.Nothing.value;
          };
          throw new Error("Failed pattern match at Pux.Router line 55, column 5 - line 57, column 28: " + [ s.constructor.name ]);
      };
      return parseSegment(parse);
  };
  var $$int = parseSegment(Data_Int.fromString);
  var end = Match(function (r) {
      if (r instanceof Data_List_Types.Cons && (r.value0 instanceof Query && r.value1 instanceof Data_List_Types.Nil)) {
          return Data_Maybe.Just.create(new Data_Tuple.Tuple(Data_List_Types.Nil.value, Data_Unit.unit));
      };
      if (r instanceof Data_List_Types.Nil) {
          return Data_Maybe.Just.create(new Data_Tuple.Tuple(Data_List_Types.Nil.value, Data_Unit.unit));
      };
      return Data_Maybe.Nothing.value;
  });
  exports["Match"] = Match;
  exports["Path"] = Path;
  exports["Query"] = Query;
  exports["router"] = router;
  exports["lit"] = lit;
  exports["int"] = $$int;
  exports["parseSegment"] = parseSegment;
  exports["end"] = end;
  exports["matchFunctor"] = matchFunctor;
  exports["matchAlt"] = matchAlt;
  exports["matchApply"] = matchApply;
})(PS["Pux.Router"] = PS["Pux.Router"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var App_Filter = PS["App.Filter"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Apply = PS["Control.Apply"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];
  var Pux_Router = PS["Pux.Router"];        
  var Home = (function () {
      function Home() {

      };
      Home.value = new Home();
      return Home;
  })();
  var Recipes = (function () {
      function Recipes(value0) {
          this.value0 = value0;
      };
      Recipes.create = function (value0) {
          return new Recipes(value0);
      };
      return Recipes;
  })();
  var Recipe = (function () {
      function Recipe(value0) {
          this.value0 = value0;
      };
      Recipe.create = function (value0) {
          return new Recipe(value0);
      };
      return Recipe;
  })();
  var toURL = function (v) {
      if (v instanceof Home) {
          return "#/";
      };
      if (v instanceof Recipes) {
          return "#/recipes/";
      };
      if (v instanceof Recipe) {
          return "#/recipes/" + (Data_Show.show(Data_Show.showInt)(v.value0) + "/");
      };
      throw new Error("Failed pattern match at App.Routes line 27, column 1 - line 27, column 25: " + [ v.constructor.name ]);
  };
  var match = function (url) {
      return Data_Maybe.fromMaybe(Home.value)(Pux_Router.router(url)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Data_Functor.voidRight(Pux_Router.matchFunctor)(Home.value)(Pux_Router.end))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(new Recipes(App_Filter.All.value))(Pux_Router.lit("recipes")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(new Recipes(App_Filter.All.value))(Pux_Router.lit("recipes")))(Pux_Router.lit("")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.map(Pux_Router.matchFunctor)(Recipe.create)(Control_Apply.applySecond(Pux_Router.matchApply)(Pux_Router.lit("recipes"))(Pux_Router["int"])))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.map(Pux_Router.matchFunctor)(Recipe.create)(Control_Apply.applySecond(Pux_Router.matchApply)(Pux_Router.lit("recipes"))(Pux_Router["int"])))(Pux_Router.lit("")))(Pux_Router.end))));
  };
  exports["Home"] = Home;
  exports["Recipes"] = Recipes;
  exports["Recipe"] = Recipe;
  exports["match"] = match;
  exports["toURL"] = toURL;
})(PS["App.Routes"] = PS["App.Routes"] || {});
(function(exports) {
    "use strict";
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];        
  var Lbs = (function () {
      function Lbs() {

      };
      Lbs.value = new Lbs();
      return Lbs;
  })();
  var Oz = (function () {
      function Oz() {

      };
      Oz.value = new Oz();
      return Oz;
  })();
  var Grams = (function () {
      function Grams() {

      };
      Grams.value = new Grams();
      return Grams;
  })();
  var Cups = (function () {
      function Cups() {

      };
      Cups.value = new Cups();
      return Cups;
  })();
  var Tbsp = (function () {
      function Tbsp() {

      };
      Tbsp.value = new Tbsp();
      return Tbsp;
  })();
  var Tsp = (function () {
      function Tsp() {

      };
      Tsp.value = new Tsp();
      return Tsp;
  })();
  var Items = (function () {
      function Items() {

      };
      Items.value = new Items();
      return Items;
  })();
  var Volume = (function () {
      function Volume(value0) {
          this.value0 = value0;
      };
      Volume.create = function (value0) {
          return new Volume(value0);
      };
      return Volume;
  })();
  var Weight = (function () {
      function Weight(value0) {
          this.value0 = value0;
      };
      Weight.create = function (value0) {
          return new Weight(value0);
      };
      return Weight;
  })();
  var Convertible = function (Eq0, convertBase) {
      this.Eq0 = Eq0;
      this.convertBase = convertBase;
  };
  var showWeightMeasurement = new Data_Show.Show(function (v) {
      if (v instanceof Lbs) {
          return "lbs";
      };
      if (v instanceof Oz) {
          return "oz";
      };
      if (v instanceof Grams) {
          return "grams";
      };
      throw new Error("Failed pattern match at App.Measurement line 42, column 1 - line 42, column 57: " + [ v.constructor.name ]);
  });
  var showVolumeMeasurement = new Data_Show.Show(function (v) {
      if (v instanceof Cups) {
          return "cups";
      };
      if (v instanceof Tbsp) {
          return "tbsp";
      };
      if (v instanceof Tsp) {
          return "tsp";
      };
      throw new Error("Failed pattern match at App.Measurement line 25, column 1 - line 25, column 57: " + [ v.constructor.name ]);
  });
  var showMeasurement = new Data_Show.Show(function (v) {
      if (v instanceof Items) {
          return "";
      };
      if (v instanceof Volume) {
          return Data_Show.show(showVolumeMeasurement)(v.value0);
      };
      if (v instanceof Weight) {
          return Data_Show.show(showWeightMeasurement)(v.value0);
      };
      throw new Error("Failed pattern match at App.Measurement line 57, column 1 - line 57, column 45: " + [ v.constructor.name ]);
  });
  var parse = function (v) {
      if (v === "ITEM") {
          return new Data_Either.Right(Items.value);
      };
      if (v === "CUP") {
          return Data_Either.Right.create(new Volume(Cups.value));
      };
      if (v === "TBSP") {
          return Data_Either.Right.create(new Volume(Tbsp.value));
      };
      if (v === "TSP") {
          return Data_Either.Right.create(new Volume(Tsp.value));
      };
      if (v === "LB") {
          return Data_Either.Right.create(new Weight(Lbs.value));
      };
      if (v === "OZ") {
          return Data_Either.Right.create(new Weight(Oz.value));
      };
      if (v === "GRAM") {
          return Data_Either.Right.create(new Weight(Grams.value));
      };
      return Data_Either.Left.create("Expected Measurement, but got '" + (v + "'"));
  };
  var eqWeightMeasurement = new Data_Eq.Eq(function (x) {
      return function (y) {
          if (x instanceof Lbs && y instanceof Lbs) {
              return true;
          };
          if (x instanceof Oz && y instanceof Oz) {
              return true;
          };
          if (x instanceof Grams && y instanceof Grams) {
              return true;
          };
          return false;
      };
  });
  var eqVolumeMeasurement = new Data_Eq.Eq(function (x) {
      return function (y) {
          if (x instanceof Cups && y instanceof Cups) {
              return true;
          };
          if (x instanceof Tbsp && y instanceof Tbsp) {
              return true;
          };
          if (x instanceof Tsp && y instanceof Tsp) {
              return true;
          };
          return false;
      };
  });
  var convertibleWeightMeasurement = new Convertible(function () {
      return eqWeightMeasurement;
  }, function (v) {
      return function (x) {
          if (v instanceof Lbs) {
              return x;
          };
          if (v instanceof Oz) {
              return 16.0 * x;
          };
          if (v instanceof Grams) {
              return 453.592 * x;
          };
          throw new Error("Failed pattern match at App.Measurement line 47, column 1 - line 47, column 71: " + [ v.constructor.name, x.constructor.name ]);
      };
  });
  var convertibleVolumeMeasurement = new Convertible(function () {
      return eqVolumeMeasurement;
  }, function (v) {
      return function (x) {
          if (v instanceof Cups) {
              return x;
          };
          if (v instanceof Tbsp) {
              return 16.0 * x;
          };
          if (v instanceof Tsp) {
              return 48.0 * x;
          };
          throw new Error("Failed pattern match at App.Measurement line 30, column 1 - line 30, column 71: " + [ v.constructor.name, x.constructor.name ]);
      };
  });
  var convertBase = function (dict) {
      return dict.convertBase;
  };
  var convert = function (dictConvertible) {
      return function (unit1) {
          return function (unit2) {
              return function (x) {
                  var $28 = Data_Eq.eq(dictConvertible.Eq0())(unit1)(unit2);
                  if ($28) {
                      return x;
                  };
                  return convertBase(dictConvertible)(unit2)(x / convertBase(dictConvertible)(unit1)(1.0));
              };
          };
      };
  };
  var convertMeasurement = function (v) {
      return function (v1) {
          return function (v2) {
              if (v instanceof Items && v1 instanceof Items) {
                  return new Data_Maybe.Just(v2);
              };
              if (v instanceof Volume && v1 instanceof Volume) {
                  return Data_Maybe.Just.create(convert(convertibleVolumeMeasurement)(v.value0)(v1.value0)(v2));
              };
              if (v instanceof Weight && v1 instanceof Weight) {
                  return Data_Maybe.Just.create(convert(convertibleWeightMeasurement)(v.value0)(v1.value0)(v2));
              };
              return Data_Maybe.Nothing.value;
          };
      };
  };
  exports["convertBase"] = convertBase;
  exports["Convertible"] = Convertible;
  exports["convert"] = convert;
  exports["Cups"] = Cups;
  exports["Tbsp"] = Tbsp;
  exports["Tsp"] = Tsp;
  exports["Lbs"] = Lbs;
  exports["Oz"] = Oz;
  exports["Grams"] = Grams;
  exports["Items"] = Items;
  exports["Volume"] = Volume;
  exports["Weight"] = Weight;
  exports["parse"] = parse;
  exports["convertMeasurement"] = convertMeasurement;
  exports["eqVolumeMeasurement"] = eqVolumeMeasurement;
  exports["showVolumeMeasurement"] = showVolumeMeasurement;
  exports["convertibleVolumeMeasurement"] = convertibleVolumeMeasurement;
  exports["eqWeightMeasurement"] = eqWeightMeasurement;
  exports["showWeightMeasurement"] = showWeightMeasurement;
  exports["convertibleWeightMeasurement"] = convertibleWeightMeasurement;
  exports["showMeasurement"] = showMeasurement;
})(PS["App.Measurement"] = PS["App.Measurement"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Prelude = PS["Prelude"];        
  var IsString = function (fromString) {
      this.fromString = fromString;
  };
  var isStringString = new IsString(Control_Category.id(Control_Category.categoryFn));
  var fromString = function (dict) {
      return dict.fromString;
  };
  exports["fromString"] = fromString;
  exports["IsString"] = IsString;
  exports["isStringString"] = isStringString;
})(PS["CSS.String"] = PS["CSS.String"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Int = PS["Data.Int"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Data_String_Regex = PS["Data.String.Regex"];
  var $$Math = PS["Math"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var HSLA = (function () {
      function HSLA(value0, value1, value2, value3) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
      };
      HSLA.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return new HSLA(value0, value1, value2, value3);
                  };
              };
          };
      };
      return HSLA;
  })();
  var modPos = function (x) {
      return function (y) {
          return $$Math.remainder($$Math.remainder(x)(y) + y)(y);
      };
  };
  var rgba = function (red$prime) {
      return function (green$prime) {
          return function (blue$prime) {
              return function (alpha) {
                  var red = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(red$prime);
                  var r = Data_Int.toNumber(red) / 255.0;
                  var green = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(green$prime);
                  var g = Data_Int.toNumber(green) / 255.0;
                  var blue = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(blue$prime);
                  var maxChroma = Data_Ord.max(Data_Ord.ordInt)(Data_Ord.max(Data_Ord.ordInt)(red)(green))(blue);
                  var minChroma = Data_Ord.min(Data_Ord.ordInt)(Data_Ord.min(Data_Ord.ordInt)(red)(green))(blue);
                  var chroma = maxChroma - minChroma | 0;
                  var chroma$prime = Data_Int.toNumber(chroma) / 255.0;
                  var lightness = Data_Int.toNumber(maxChroma + minChroma | 0) / (255.0 * 2.0);
                  var saturation = (function () {
                      if (chroma === 0) {
                          return 0.0;
                      };
                      if (Data_Boolean.otherwise) {
                          return chroma$prime / (1.0 - $$Math.abs(2.0 * lightness - 1.0));
                      };
                      throw new Error("Failed pattern match at Color line 157, column 5 - line 158, column 75: " + [  ]);
                  })();
                  var b = Data_Int.toNumber(blue) / 255.0;
                  var hue$prime = function (v) {
                      if (v === 0) {
                          return 0.0;
                      };
                      if (maxChroma === red) {
                          return modPos((g - b) / chroma$prime)(6.0);
                      };
                      if (maxChroma === green) {
                          return (b - r) / chroma$prime + 2.0;
                      };
                      if (Data_Boolean.otherwise) {
                          return (r - g) / chroma$prime + 4.0;
                      };
                      throw new Error("Failed pattern match at Color line 148, column 5 - line 149, column 5: " + [ v.constructor.name ]);
                  };
                  var hue = 60.0 * hue$prime(chroma);
                  return new HSLA(hue, saturation, lightness, alpha);
              };
          };
      };
  };
  var rgb = function (r) {
      return function (g) {
          return function (b) {
              return rgba(r)(g)(b)(1.0);
          };
      };
  };
  var cssStringHSLA = function (v) {
      var toString = function (n) {
          return Data_Show.show(Data_Show.showNumber)(Data_Int.toNumber(Data_Int.round(100.0 * n)) / 100.0);
      };
      var saturation = toString(v.value1 * 100.0) + "%";
      var lightness = toString(v.value2 * 100.0) + "%";
      var hue = toString(v.value0);
      var alpha = Data_Show.show(Data_Show.showNumber)(v.value3);
      var $69 = v.value3 === 1.0;
      if ($69) {
          return "hsl(" + (hue + (", " + (saturation + (", " + (lightness + ")")))));
      };
      return "hsla(" + (hue + (", " + (saturation + (", " + (lightness + (", " + (alpha + ")")))))));
  };
  exports["rgba"] = rgba;
  exports["rgb"] = rgb;
  exports["cssStringHSLA"] = cssStringHSLA;
})(PS["Color"] = PS["Color"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Profunctor = PS["Data.Profunctor"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var Strong = function (Profunctor0, first, second) {
      this.Profunctor0 = Profunctor0;
      this.first = first;
      this.second = second;
  };
  var strongFn = new Strong(function () {
      return Data_Profunctor.profunctorFn;
  }, function (a2b) {
      return function (v) {
          return new Data_Tuple.Tuple(a2b(v.value0), v.value1);
      };
  }, Data_Functor.map(Data_Tuple.functorTuple));
  var second = function (dict) {
      return dict.second;
  };
  var first = function (dict) {
      return dict.first;
  };
  exports["first"] = first;
  exports["second"] = second;
  exports["Strong"] = Strong;
  exports["strongFn"] = strongFn;
})(PS["Data.Profunctor.Strong"] = PS["Data.Profunctor.Strong"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_String = PS["CSS.String"];
  var Color = PS["Color"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Generic = PS["Data.Generic"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Profunctor_Strong = PS["Data.Profunctor.Strong"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Prefixed = (function () {
      function Prefixed(value0) {
          this.value0 = value0;
      };
      Prefixed.create = function (value0) {
          return new Prefixed(value0);
      };
      return Prefixed;
  })();
  var Plain = (function () {
      function Plain(value0) {
          this.value0 = value0;
      };
      Plain.create = function (value0) {
          return new Plain(value0);
      };
      return Plain;
  })();
  var Value = function (x) {
      return x;
  };
  var Key = function (x) {
      return x;
  };
  var Val = function (value) {
      this.value = value;
  };
  var value = function (dict) {
      return dict.value;
  };                                                                       
  var semigroupPrefixed = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          if (v instanceof Plain && v1 instanceof Plain) {
              return Plain.create(v.value0 + v1.value0);
          };
          if (v instanceof Plain && v1 instanceof Prefixed) {
              return Prefixed.create(Data_Functor.map(Data_Functor.functorArray)(Data_Profunctor_Strong.second(Data_Profunctor_Strong.strongFn)(function (v2) {
                  return v.value0 + v2;
              }))(v1.value0));
          };
          if (v instanceof Prefixed && v1 instanceof Plain) {
              return Prefixed.create(Data_Functor.map(Data_Functor.functorArray)(Data_Profunctor_Strong.second(Data_Profunctor_Strong.strongFn)(function (v2) {
                  return v1.value0 + v2;
              }))(v.value0));
          };
          if (v instanceof Prefixed && v1 instanceof Prefixed) {
              return Prefixed.create(Data_Semigroup.append(Data_Semigroup.semigroupArray)(v.value0)(v1.value0));
          };
          throw new Error("Failed pattern match at CSS.Property line 25, column 1 - line 25, column 49: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var semigroupValue = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          return Value(Data_Semigroup.append(semigroupPrefixed)(v)(v1));
      };
  });
  var plain = function (v) {
      if (v instanceof Prefixed) {
          return Data_Maybe.fromMaybe("")(Data_Tuple.lookup(Data_Foldable.foldableArray)(Data_Eq.eqString)("")(v.value0));
      };
      if (v instanceof Plain) {
          return v.value0;
      };
      throw new Error("Failed pattern match at CSS.Property line 34, column 1 - line 34, column 28: " + [ v.constructor.name ]);
  };                                     
  var isStringPrefixed = new CSS_String.IsString(Plain.create);
  var isStringValue = new CSS_String.IsString(function ($145) {
      return Value(CSS_String.fromString(isStringPrefixed)($145));
  });
  var valColor = new Val(function ($147) {
      return CSS_String.fromString(isStringValue)(Color.cssStringHSLA($147));
  });
  var valNumber = new Val(function ($150) {
      return CSS_String.fromString(isStringValue)(Data_Show.show(Data_Show.showNumber)($150));
  });                                                           
  var valTuple = function (dictVal) {
      return function (dictVal1) {
          return new Val(function (v) {
              return Data_Semigroup.append(semigroupValue)(value(dictVal)(v.value0))(Data_Semigroup.append(semigroupValue)(CSS_String.fromString(isStringValue)(" "))(value(dictVal1)(v.value1)));
          });
      };
  };
  var valUnit = new Val(function (u) {
      return CSS_String.fromString(isStringValue)("");
  });
  var isStringKey = new CSS_String.IsString(function ($151) {
      return Key(CSS_String.fromString(isStringPrefixed)($151));
  });
  var cast = function (v) {
      return v;
  };
  exports["value"] = value;
  exports["Prefixed"] = Prefixed;
  exports["Plain"] = Plain;
  exports["plain"] = plain;
  exports["Key"] = Key;
  exports["cast"] = cast;
  exports["Value"] = Value;
  exports["Val"] = Val;
  exports["isStringPrefixed"] = isStringPrefixed;
  exports["semigroupPrefixed"] = semigroupPrefixed;
  exports["isStringKey"] = isStringKey;
  exports["isStringValue"] = isStringValue;
  exports["semigroupValue"] = semigroupValue;
  exports["valUnit"] = valUnit;
  exports["valTuple"] = valTuple;
  exports["valNumber"] = valNumber;
  exports["valColor"] = valColor;
})(PS["CSS.Property"] = PS["CSS.Property"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_String = PS["CSS.String"];
  var Control_Apply = PS["Control.Apply"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Generic = PS["Data.Generic"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_String = PS["Data.String"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Id = (function () {
      function Id(value0) {
          this.value0 = value0;
      };
      Id.create = function (value0) {
          return new Id(value0);
      };
      return Id;
  })();
  var Class = (function () {
      function Class(value0) {
          this.value0 = value0;
      };
      Class.create = function (value0) {
          return new Class(value0);
      };
      return Class;
  })();
  var Attr = (function () {
      function Attr(value0) {
          this.value0 = value0;
      };
      Attr.create = function (value0) {
          return new Attr(value0);
      };
      return Attr;
  })();
  var AttrVal = (function () {
      function AttrVal(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      AttrVal.create = function (value0) {
          return function (value1) {
              return new AttrVal(value0, value1);
          };
      };
      return AttrVal;
  })();
  var AttrBegins = (function () {
      function AttrBegins(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      AttrBegins.create = function (value0) {
          return function (value1) {
              return new AttrBegins(value0, value1);
          };
      };
      return AttrBegins;
  })();
  var AttrEnds = (function () {
      function AttrEnds(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      AttrEnds.create = function (value0) {
          return function (value1) {
              return new AttrEnds(value0, value1);
          };
      };
      return AttrEnds;
  })();
  var AttrContains = (function () {
      function AttrContains(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      AttrContains.create = function (value0) {
          return function (value1) {
              return new AttrContains(value0, value1);
          };
      };
      return AttrContains;
  })();
  var AttrSpace = (function () {
      function AttrSpace(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      AttrSpace.create = function (value0) {
          return function (value1) {
              return new AttrSpace(value0, value1);
          };
      };
      return AttrSpace;
  })();
  var AttrHyph = (function () {
      function AttrHyph(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      AttrHyph.create = function (value0) {
          return function (value1) {
              return new AttrHyph(value0, value1);
          };
      };
      return AttrHyph;
  })();
  var Pseudo = (function () {
      function Pseudo(value0) {
          this.value0 = value0;
      };
      Pseudo.create = function (value0) {
          return new Pseudo(value0);
      };
      return Pseudo;
  })();
  var PseudoFunc = (function () {
      function PseudoFunc(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      PseudoFunc.create = function (value0) {
          return function (value1) {
              return new PseudoFunc(value0, value1);
          };
      };
      return PseudoFunc;
  })();
  var Star = (function () {
      function Star() {

      };
      Star.value = new Star();
      return Star;
  })();
  var Elem = (function () {
      function Elem(value0) {
          this.value0 = value0;
      };
      Elem.create = function (value0) {
          return new Elem(value0);
      };
      return Elem;
  })();
  var PathChild = (function () {
      function PathChild(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      PathChild.create = function (value0) {
          return function (value1) {
              return new PathChild(value0, value1);
          };
      };
      return PathChild;
  })();
  var Deep = (function () {
      function Deep(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Deep.create = function (value0) {
          return function (value1) {
              return new Deep(value0, value1);
          };
      };
      return Deep;
  })();
  var Adjacent = (function () {
      function Adjacent(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Adjacent.create = function (value0) {
          return function (value1) {
              return new Adjacent(value0, value1);
          };
      };
      return Adjacent;
  })();
  var Combined = (function () {
      function Combined(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Combined.create = function (value0) {
          return function (value1) {
              return new Combined(value0, value1);
          };
      };
      return Combined;
  })();
  var Selector = (function () {
      function Selector(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Selector.create = function (value0) {
          return function (value1) {
              return new Selector(value0, value1);
          };
      };
      return Selector;
  })();
  var $$with = function (v) {
      return function (v1) {
          return new Selector(Data_Semigroup.append(Data_Semigroup.semigroupArray)(v.value0)(v1), v.value1);
      };
  };
  var star = new Selector([  ], Star.value);
  var eqPredicate = new Data_Eq.Eq(function (x) {
      return function (y) {
          if (x instanceof Id && y instanceof Id) {
              return x.value0 === y.value0;
          };
          if (x instanceof Class && y instanceof Class) {
              return x.value0 === y.value0;
          };
          if (x instanceof Attr && y instanceof Attr) {
              return x.value0 === y.value0;
          };
          if (x instanceof AttrVal && y instanceof AttrVal) {
              return x.value0 === y.value0 && x.value1 === y.value1;
          };
          if (x instanceof AttrBegins && y instanceof AttrBegins) {
              return x.value0 === y.value0 && x.value1 === y.value1;
          };
          if (x instanceof AttrEnds && y instanceof AttrEnds) {
              return x.value0 === y.value0 && x.value1 === y.value1;
          };
          if (x instanceof AttrContains && y instanceof AttrContains) {
              return x.value0 === y.value0 && x.value1 === y.value1;
          };
          if (x instanceof AttrSpace && y instanceof AttrSpace) {
              return x.value0 === y.value0 && x.value1 === y.value1;
          };
          if (x instanceof AttrHyph && y instanceof AttrHyph) {
              return x.value0 === y.value0 && x.value1 === y.value1;
          };
          if (x instanceof Pseudo && y instanceof Pseudo) {
              return x.value0 === y.value0;
          };
          if (x instanceof PseudoFunc && y instanceof PseudoFunc) {
              return x.value0 === y.value0 && Data_Eq.eq(Data_Eq.eqArray(Data_Eq.eqString))(x.value1)(y.value1);
          };
          return false;
      };
  });
  var ordPredicate = new Data_Ord.Ord(function () {
      return eqPredicate;
  }, function (x) {
      return function (y) {
          if (x instanceof Id && y instanceof Id) {
              return Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
          };
          if (x instanceof Id) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof Id) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof Class && y instanceof Class) {
              return Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
          };
          if (x instanceof Class) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof Class) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof Attr && y instanceof Attr) {
              return Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
          };
          if (x instanceof Attr) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof Attr) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof AttrVal && y instanceof AttrVal) {
              var v = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
              if (v instanceof Data_Ordering.LT) {
                  return Data_Ordering.LT.value;
              };
              if (v instanceof Data_Ordering.GT) {
                  return Data_Ordering.GT.value;
              };
              return Data_Ord.compare(Data_Ord.ordString)(x.value1)(y.value1);
          };
          if (x instanceof AttrVal) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof AttrVal) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof AttrBegins && y instanceof AttrBegins) {
              var v = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
              if (v instanceof Data_Ordering.LT) {
                  return Data_Ordering.LT.value;
              };
              if (v instanceof Data_Ordering.GT) {
                  return Data_Ordering.GT.value;
              };
              return Data_Ord.compare(Data_Ord.ordString)(x.value1)(y.value1);
          };
          if (x instanceof AttrBegins) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof AttrBegins) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof AttrEnds && y instanceof AttrEnds) {
              var v = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
              if (v instanceof Data_Ordering.LT) {
                  return Data_Ordering.LT.value;
              };
              if (v instanceof Data_Ordering.GT) {
                  return Data_Ordering.GT.value;
              };
              return Data_Ord.compare(Data_Ord.ordString)(x.value1)(y.value1);
          };
          if (x instanceof AttrEnds) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof AttrEnds) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof AttrContains && y instanceof AttrContains) {
              var v = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
              if (v instanceof Data_Ordering.LT) {
                  return Data_Ordering.LT.value;
              };
              if (v instanceof Data_Ordering.GT) {
                  return Data_Ordering.GT.value;
              };
              return Data_Ord.compare(Data_Ord.ordString)(x.value1)(y.value1);
          };
          if (x instanceof AttrContains) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof AttrContains) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof AttrSpace && y instanceof AttrSpace) {
              var v = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
              if (v instanceof Data_Ordering.LT) {
                  return Data_Ordering.LT.value;
              };
              if (v instanceof Data_Ordering.GT) {
                  return Data_Ordering.GT.value;
              };
              return Data_Ord.compare(Data_Ord.ordString)(x.value1)(y.value1);
          };
          if (x instanceof AttrSpace) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof AttrSpace) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof AttrHyph && y instanceof AttrHyph) {
              var v = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
              if (v instanceof Data_Ordering.LT) {
                  return Data_Ordering.LT.value;
              };
              if (v instanceof Data_Ordering.GT) {
                  return Data_Ordering.GT.value;
              };
              return Data_Ord.compare(Data_Ord.ordString)(x.value1)(y.value1);
          };
          if (x instanceof AttrHyph) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof AttrHyph) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof Pseudo && y instanceof Pseudo) {
              return Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
          };
          if (x instanceof Pseudo) {
              return Data_Ordering.LT.value;
          };
          if (y instanceof Pseudo) {
              return Data_Ordering.GT.value;
          };
          if (x instanceof PseudoFunc && y instanceof PseudoFunc) {
              var v = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
              if (v instanceof Data_Ordering.LT) {
                  return Data_Ordering.LT.value;
              };
              if (v instanceof Data_Ordering.GT) {
                  return Data_Ordering.GT.value;
              };
              return Data_Ord.compare(Data_Ord.ordArray(Data_Ord.ordString))(x.value1)(y.value1);
          };
          throw new Error("Failed pattern match at CSS.Selector line 24, column 8 - line 24, column 46: " + [ x.constructor.name, y.constructor.name ]);
      };
  });
  var element = function (e) {
      return new Selector([  ], new Elem(e));
  };
  var deep = function (a) {
      return function (b) {
          return new Selector([  ], new Deep(a, b));
      };
  };
  var child = function (a) {
      return function (b) {
          return new Selector([  ], new PathChild(a, b));
      };
  };
  exports["Id"] = Id;
  exports["Class"] = Class;
  exports["Attr"] = Attr;
  exports["AttrVal"] = AttrVal;
  exports["AttrBegins"] = AttrBegins;
  exports["AttrEnds"] = AttrEnds;
  exports["AttrContains"] = AttrContains;
  exports["AttrSpace"] = AttrSpace;
  exports["AttrHyph"] = AttrHyph;
  exports["Pseudo"] = Pseudo;
  exports["PseudoFunc"] = PseudoFunc;
  exports["Star"] = Star;
  exports["Elem"] = Elem;
  exports["PathChild"] = PathChild;
  exports["Deep"] = Deep;
  exports["Adjacent"] = Adjacent;
  exports["Combined"] = Combined;
  exports["Selector"] = Selector;
  exports["star"] = star;
  exports["element"] = element;
  exports["deep"] = deep;
  exports["child"] = child;
  exports["with"] = $$with;
  exports["eqPredicate"] = eqPredicate;
  exports["ordPredicate"] = ordPredicate;
})(PS["CSS.Selector"] = PS["CSS.Selector"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Function = PS["Data.Function"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var MonadTell = function (Monad0, tell) {
      this.Monad0 = Monad0;
      this.tell = tell;
  };
  var tell = function (dict) {
      return dict.tell;
  };
  exports["tell"] = tell;
  exports["MonadTell"] = MonadTell;
})(PS["Control.Monad.Writer.Class"] = PS["Control.Monad.Writer.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];        
  var MonadEff = function (Monad0, liftEff) {
      this.Monad0 = Monad0;
      this.liftEff = liftEff;
  };                                                   
  var liftEff = function (dict) {
      return dict.liftEff;
  };
  exports["liftEff"] = liftEff;
  exports["MonadEff"] = MonadEff;
})(PS["Control.Monad.Eff.Class"] = PS["Control.Monad.Eff.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var MonadThrow = function (Monad0, throwError) {
      this.Monad0 = Monad0;
      this.throwError = throwError;
  };
  var throwError = function (dict) {
      return dict.throwError;
  };
  exports["throwError"] = throwError;
  exports["MonadThrow"] = MonadThrow;
})(PS["Control.Monad.Error.Class"] = PS["Control.Monad.Error.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var MonadState = function (Monad0, state) {
      this.Monad0 = Monad0;
      this.state = state;
  };
  var state = function (dict) {
      return dict.state;
  };
  exports["state"] = state;
  exports["MonadState"] = MonadState;
})(PS["Control.Monad.State.Class"] = PS["Control.Monad.State.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Cont_Class = PS["Control.Monad.Cont.Class"];
  var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Reader_Class = PS["Control.Monad.Reader.Class"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_State_Class = PS["Control.Monad.State.Class"];
  var Control_Monad_Trans_Class = PS["Control.Monad.Trans.Class"];
  var Control_Monad_Writer_Class = PS["Control.Monad.Writer.Class"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var WriterT = function (x) {
      return x;
  };
  var runWriterT = function (v) {
      return v;
  };
  var mapWriterT = function (f) {
      return function (v) {
          return f(v);
      };
  };
  var functorWriterT = function (dictFunctor) {
      return new Data_Functor.Functor(function (f) {
          return mapWriterT(Data_Functor.map(dictFunctor)(function (v) {
              return new Data_Tuple.Tuple(f(v.value0), v.value1);
          }));
      });
  };
  var applyWriterT = function (dictSemigroup) {
      return function (dictApply) {
          return new Control_Apply.Apply(function () {
              return functorWriterT(dictApply.Functor0());
          }, function (v) {
              return function (v1) {
                  var k = function (v3) {
                      return function (v4) {
                          return new Data_Tuple.Tuple(v3.value0(v4.value0), Data_Semigroup.append(dictSemigroup)(v3.value1)(v4.value1));
                      };
                  };
                  return Control_Apply.apply(dictApply)(Data_Functor.map(dictApply.Functor0())(k)(v))(v1);
              };
          });
      };
  };
  var bindWriterT = function (dictSemigroup) {
      return function (dictBind) {
          return new Control_Bind.Bind(function () {
              return applyWriterT(dictSemigroup)(dictBind.Apply0());
          }, function (v) {
              return function (k) {
                  return WriterT(Control_Bind.bind(dictBind)(v)(function (v1) {
                      var v2 = k(v1.value0);
                      return Data_Functor.map((dictBind.Apply0()).Functor0())(function (v3) {
                          return new Data_Tuple.Tuple(v3.value0, Data_Semigroup.append(dictSemigroup)(v1.value1)(v3.value1));
                      })(v2);
                  }));
              };
          });
      };
  };
  var applicativeWriterT = function (dictMonoid) {
      return function (dictApplicative) {
          return new Control_Applicative.Applicative(function () {
              return applyWriterT(dictMonoid.Semigroup0())(dictApplicative.Apply0());
          }, function (a) {
              return WriterT(Control_Applicative.pure(dictApplicative)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid))));
          });
      };
  };
  var monadWriterT = function (dictMonoid) {
      return function (dictMonad) {
          return new Control_Monad.Monad(function () {
              return applicativeWriterT(dictMonoid)(dictMonad.Applicative0());
          }, function () {
              return bindWriterT(dictMonoid.Semigroup0())(dictMonad.Bind1());
          });
      };
  };
  var monadTellWriterT = function (dictMonoid) {
      return function (dictMonad) {
          return new Control_Monad_Writer_Class.MonadTell(function () {
              return monadWriterT(dictMonoid)(dictMonad);
          }, function ($124) {
              return WriterT(Control_Applicative.pure(dictMonad.Applicative0())(Data_Tuple.Tuple.create(Data_Unit.unit)($124)));
          });
      };
  };
  exports["WriterT"] = WriterT;
  exports["runWriterT"] = runWriterT;
  exports["mapWriterT"] = mapWriterT;
  exports["functorWriterT"] = functorWriterT;
  exports["applyWriterT"] = applyWriterT;
  exports["applicativeWriterT"] = applicativeWriterT;
  exports["bindWriterT"] = bindWriterT;
  exports["monadWriterT"] = monadWriterT;
  exports["monadTellWriterT"] = monadTellWriterT;
})(PS["Control.Monad.Writer.Trans"] = PS["Control.Monad.Writer.Trans"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Writer_Class = PS["Control.Monad.Writer.Class"];
  var Control_Monad_Writer_Trans = PS["Control.Monad.Writer.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];
  var runWriter = function ($1) {
      return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(Control_Monad_Writer_Trans.runWriterT($1));
  };
  var execWriter = function (m) {
      return Data_Tuple.snd(runWriter(m));
  };
  exports["runWriter"] = runWriter;
  exports["execWriter"] = execWriter;
})(PS["Control.Monad.Writer"] = PS["Control.Monad.Writer"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Property = PS["CSS.Property"];
  var CSS_Selector = PS["CSS.Selector"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Writer = PS["Control.Monad.Writer"];
  var Control_Monad_Writer_Class = PS["Control.Monad.Writer.Class"];
  var Control_Monad_Writer_Trans = PS["Control.Monad.Writer.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Generic = PS["Data.Generic"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Profunctor_Strong = PS["Data.Profunctor.Strong"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var Self = (function () {
      function Self(value0) {
          this.value0 = value0;
      };
      Self.create = function (value0) {
          return new Self(value0);
      };
      return Self;
  })();
  var Root = (function () {
      function Root(value0) {
          this.value0 = value0;
      };
      Root.create = function (value0) {
          return new Root(value0);
      };
      return Root;
  })();
  var Pop = (function () {
      function Pop(value0) {
          this.value0 = value0;
      };
      Pop.create = function (value0) {
          return new Pop(value0);
      };
      return Pop;
  })();
  var Child = (function () {
      function Child(value0) {
          this.value0 = value0;
      };
      Child.create = function (value0) {
          return new Child(value0);
      };
      return Child;
  })();
  var Sub = (function () {
      function Sub(value0) {
          this.value0 = value0;
      };
      Sub.create = function (value0) {
          return new Sub(value0);
      };
      return Sub;
  })();
  var Property = (function () {
      function Property(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Property.create = function (value0) {
          return function (value1) {
              return new Property(value0, value1);
          };
      };
      return Property;
  })();
  var Nested = (function () {
      function Nested(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Nested.create = function (value0) {
          return function (value1) {
              return new Nested(value0, value1);
          };
      };
      return Nested;
  })();
  var Query = (function () {
      function Query(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Query.create = function (value0) {
          return function (value1) {
              return new Query(value0, value1);
          };
      };
      return Query;
  })();
  var Face = (function () {
      function Face(value0) {
          this.value0 = value0;
      };
      Face.create = function (value0) {
          return new Face(value0);
      };
      return Face;
  })();
  var Keyframe = (function () {
      function Keyframe(value0) {
          this.value0 = value0;
      };
      Keyframe.create = function (value0) {
          return new Keyframe(value0);
      };
      return Keyframe;
  })();
  var Import = (function () {
      function Import(value0) {
          this.value0 = value0;
      };
      Import.create = function (value0) {
          return new Import(value0);
      };
      return Import;
  })();
  var S = function (x) {
      return x;
  };
  var runS = function (v) {
      return Control_Monad_Writer.execWriter(v);
  };
  var rule = function ($438) {
      return S(Control_Monad_Writer_Class.tell(Control_Monad_Writer_Trans.monadTellWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))(Data_Array.singleton($438)));
  };
  var key = function (dictVal) {
      return function (k) {
          return function (v) {
              return rule(new Property(CSS_Property.cast(k), CSS_Property.value(dictVal)(v)));
          };
      };
  }; 
  var functorStyleM = new Data_Functor.Functor(function (f) {
      return function (v) {
          return S(Data_Functor.map(Control_Monad_Writer_Trans.functorWriterT(Data_Identity.functorIdentity))(f)(v));
      };
  });
  var applyStyleM = new Control_Apply.Apply(function () {
      return functorStyleM;
  }, function (v) {
      return function (v1) {
          return S(Control_Apply.apply(Control_Monad_Writer_Trans.applyWriterT(Data_Semigroup.semigroupArray)(Data_Identity.applyIdentity))(v)(v1));
      };
  });
  var bindStyleM = new Control_Bind.Bind(function () {
      return applyStyleM;
  }, function (v) {
      return function (f) {
          return S(Control_Bind.bind(Control_Monad_Writer_Trans.bindWriterT(Data_Semigroup.semigroupArray)(Data_Identity.bindIdentity))(v)(function ($442) {
              return (function (v1) {
                  return v1;
              })(f($442));
          }));
      };
  });
  exports["Self"] = Self;
  exports["Root"] = Root;
  exports["Pop"] = Pop;
  exports["Child"] = Child;
  exports["Sub"] = Sub;
  exports["Property"] = Property;
  exports["Nested"] = Nested;
  exports["Query"] = Query;
  exports["Face"] = Face;
  exports["Keyframe"] = Keyframe;
  exports["Import"] = Import;
  exports["S"] = S;
  exports["runS"] = runS;
  exports["rule"] = rule;
  exports["key"] = key;
  exports["functorStyleM"] = functorStyleM;
  exports["applyStyleM"] = applyStyleM;
  exports["bindStyleM"] = bindStyleM;
})(PS["CSS.Stylesheet"] = PS["CSS.Stylesheet"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Common = PS["CSS.Common"];
  var CSS_Property = PS["CSS.Property"];
  var CSS_String = PS["CSS.String"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Generic = PS["Data.Generic"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Position = function (x) {
      return x;
  };
  var valPosition = new CSS_Property.Val(function (v) {
      return v;
  });                                                                                    
  var position = CSS_Stylesheet.key(valPosition)(CSS_String.fromString(CSS_Property.isStringKey)("position"));
  var fixed = Position(CSS_String.fromString(CSS_Property.isStringValue)("fixed"));
  exports["Position"] = Position;
  exports["position"] = position;
  exports["fixed"] = fixed;
  exports["valPosition"] = valPosition;
})(PS["CSS.Display"] = PS["CSS.Display"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Common = PS["CSS.Common"];
  var CSS_Property = PS["CSS.Property"];
  var CSS_String = PS["CSS.String"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Generic = PS["Data.Generic"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var valSize = new CSS_Property.Val(function (v) {
      return v;
  });
  var px = function (i) {
      return Data_Semigroup.append(CSS_Property.semigroupValue)(CSS_Property.value(CSS_Property.valNumber)(i))(CSS_String.fromString(CSS_Property.isStringValue)("px"));
  };
  exports["px"] = px;
  exports["valSize"] = valSize;
})(PS["CSS.Size"] = PS["CSS.Size"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var tuple4 = function (a) {
      return function (b) {
          return function (c) {
              return function (d) {
                  return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, Data_Unit.unit))));
              };
          };
      };
  };
  exports["tuple4"] = tuple4;
})(PS["Data.Tuple.Nested"] = PS["Data.Tuple.Nested"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Property = PS["CSS.Property"];
  var CSS_Size = PS["CSS.Size"];
  var CSS_String = PS["CSS.String"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Data_Function = PS["Data.Function"];
  var Data_Tuple_Nested = PS["Data.Tuple.Nested"];        
  var width = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("width"));
  var top = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("top"));                   
  var margin = function (a) {
      return function (b) {
          return function (c) {
              return function (d) {
                  return CSS_Stylesheet.key(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valUnit)))))(CSS_String.fromString(CSS_Property.isStringKey)("margin"))(Data_Tuple_Nested.tuple4(a)(b)(c)(d));
              };
          };
      };
  };                                                                                                                    
  var left = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("left"));
  var height = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("height"));
  exports["width"] = width;
  exports["height"] = height;
  exports["top"] = top;
  exports["left"] = left;
  exports["margin"] = margin;
})(PS["CSS.Geometry"] = PS["CSS.Geometry"] || {});
(function(exports) {
  /* globals setTimeout, clearTimeout, setImmediate, clearImmediate */
  "use strict";

  exports._delay = function (nonCanceler, millis) {
    var set = setTimeout;
    var clear = clearTimeout;
    if (millis <= 0 && typeof setImmediate === "function") {
      set = setImmediate;
      clear = clearImmediate;
    }
    return function (success) {
      var timedOut = false;
      var timer = set(function () {
        timedOut = true;
        success();
      }, millis);

      return function () {
        return function (s) {
          if (timedOut) {
            s(false);
          } else {
            clear(timer);
            s(true);
          }
          return nonCanceler;
        };
      };
    };
  };

  exports._unsafeInterleaveAff = function (aff) {
    return aff;
  };

  exports._makeAff = function (cb) {
    return function (success, error) {
      try {
        return cb(function (e) {
          return function () {
            error(e);
          };
        })(function (v) {
          return function () {
            success(v);
          };
        })();
      } catch (err) {
        error(err);
      }
    };
  };

  exports._pure = function (nonCanceler, v) {
    return function (success) {
      success(v);
      return nonCanceler;
    };
  };

  exports._fmap = function (f, aff) {
    return function (success, error) {
      return aff(function (v) {
        success(f(v));
      }, error);
    };
  };

  exports._bind = function (alwaysCanceler, aff, f) {
    return function (success, error) {
      var canceler1, canceler2;

      var isCanceled    = false;
      var requestCancel = false;

      var onCanceler = function () {};

      canceler1 = aff(function (v) {
        if (requestCancel) {
          isCanceled = true;

          return alwaysCanceler;
        } else {
          canceler2 = f(v)(success, error);

          onCanceler(canceler2);

          return canceler2;
        }
      }, error);

      return function (e) {
        return function (s, f) {
          requestCancel = true;

          if (canceler2 !== undefined) {
            return canceler2(e)(s, f);
          } else {
            return canceler1(e)(function (bool) {
              if (bool || isCanceled) {
                s(true);
              } else {
                onCanceler = function (canceler) {
                  canceler(e)(s, f);
                };
              }
            }, f);
          }
        };
      };
    };
  };

  exports._attempt = function (Left, Right, aff) {
    return function (success) {
      return aff(function (v) {
        success(Right(v));
      }, function (e) {
        success(Left(e));
      });
    };
  };

  exports._runAff = function (errorT, successT, aff) {
    // If errorT or successT throw, and an Aff is comprised only of synchronous
    // effects, then it's possible for makeAff/liftEff to accidentally catch
    // it, which may end up rerunning the Aff depending on error recovery
    // behavior. To mitigate this, we observe synchronicity using mutation. If
    // an Aff is observed to be synchronous, we let the stack reset and run the
    // handlers outside of the normal callback flow.
    return function () {
      var status = 0;
      var result, success;

      var canceler = aff(function (v) {
        if (status === 2) {
          successT(v)();
        } else {
          status = 1;
          result = v;
          success = true;
        }
      }, function (e) {
        if (status === 2) {
          errorT(e)();
        } else {
          status = 1;
          result = e;
          success = false;
        }
      });

      if (status === 1) {
        if (success) {
          successT(result)();
        } else {
          errorT(result)();
        }
      } else {
        status = 2;
      }

      return canceler;
    };
  };

  exports._liftEff = function (nonCanceler, e) {
    return function (success, error) {
      var result;
      try {
        result = e();
      } catch (err) {
        error(err);
        return nonCanceler;
      }

      success(result);
      return nonCanceler;
    };
  };
})(PS["Control.Monad.Aff"] = PS["Control.Monad.Aff"] || {});
(function(exports) {
    "use strict";

  exports.showErrorImpl = function (err) {
    return err.stack || err.toString();
  };

  exports.error = function (msg) {
    return new Error(msg);
  };

  exports.throwException = function (e) {
    return function () {
      throw e;
    };
  };
})(PS["Control.Monad.Eff.Exception"] = PS["Control.Monad.Eff.Exception"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Exception"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];                                                     
  var showError = new Data_Show.Show($foreign.showErrorImpl);
  exports["showError"] = showError;
  exports["error"] = $foreign.error;
  exports["throwException"] = $foreign.throwException;
})(PS["Control.Monad.Eff.Exception"] = PS["Control.Monad.Eff.Exception"] || {});
(function(exports) {
    "use strict";

  exports.runFn4 = function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Function.Uncurried"];
  var Data_Unit = PS["Data.Unit"];
  exports["runFn4"] = $foreign.runFn4;
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});
(function(exports) {
    "use strict";

  // module Unsafe.Coerce

  exports.unsafeCoerce = function (x) {
    return x;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Unsafe.Coerce"];
  exports["unsafeCoerce"] = $foreign.unsafeCoerce;
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Control.Monad.Aff"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Aff_Internal = PS["Control.Monad.Aff.Internal"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Parallel = PS["Control.Parallel"];
  var Control_Parallel_Class = PS["Control.Parallel.Class"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Time_Duration = PS["Data.Time.Duration"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];
  var Canceler = function (x) {
      return x;
  };
  var runAff = function (ex) {
      return function (f) {
          return function (aff) {
              return $foreign._runAff(ex, f, aff);
          };
      };
  };         
  var makeAff$prime = function (h) {
      return $foreign._makeAff(h);
  };
  var functorAff = new Data_Functor.Functor(function (f) {
      return function (fa) {
          return $foreign._fmap(f, fa);
      };
  });                                        
  var cancel = function (v) {
      return v;
  };
  var launchAff = (function () {
      var lowerEx = Data_Functor.map(Control_Monad_Eff.functorEff)(function ($54) {
          return Canceler(Data_Functor.map(Data_Functor.functorFn)($foreign._unsafeInterleaveAff)(cancel($54)));
      });
      return function ($55) {
          return lowerEx(runAff(Control_Monad_Eff_Exception.throwException)(Data_Function["const"](Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit)))($foreign._unsafeInterleaveAff($55)));
      };
  })();
  var attempt = function (aff) {
      return $foreign._attempt(Data_Either.Left.create, Data_Either.Right.create, aff);
  };
  var applyAff = new Control_Apply.Apply(function () {
      return functorAff;
  }, function (ff) {
      return function (fa) {
          return $foreign._bind(alwaysCanceler, ff, function (f) {
              return Data_Functor.map(functorAff)(f)(fa);
          });
      };
  });
  var applicativeAff = new Control_Applicative.Applicative(function () {
      return applyAff;
  }, function (v) {
      return $foreign._pure(nonCanceler, v);
  });
  var nonCanceler = Data_Function["const"](Control_Applicative.pure(applicativeAff)(false));
  var alwaysCanceler = Data_Function["const"](Control_Applicative.pure(applicativeAff)(true));
  var delay = function (v) {
      return $foreign._delay(nonCanceler, v);
  };
  var liftEff$prime = function (eff) {
      return attempt($foreign._unsafeInterleaveAff($foreign._liftEff(nonCanceler, eff)));
  };
  var makeAff = function (h) {
      return makeAff$prime(function (e) {
          return function (a) {
              return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Function["const"](nonCanceler))(h(e)(a));
          };
      });
  };                                                                         
  var bindAff = new Control_Bind.Bind(function () {
      return applyAff;
  }, function (fa) {
      return function (f) {
          return $foreign._bind(alwaysCanceler, fa, f);
      };
  });
  var monadAff = new Control_Monad.Monad(function () {
      return applicativeAff;
  }, function () {
      return bindAff;
  });
  var monadEffAff = new Control_Monad_Eff_Class.MonadEff(function () {
      return monadAff;
  }, function (eff) {
      return $foreign._liftEff(nonCanceler, eff);
  });
  exports["Canceler"] = Canceler;
  exports["attempt"] = attempt;
  exports["cancel"] = cancel;
  exports["delay"] = delay;
  exports["launchAff"] = launchAff;
  exports["liftEff'"] = liftEff$prime;
  exports["makeAff"] = makeAff;
  exports["makeAff'"] = makeAff$prime;
  exports["nonCanceler"] = nonCanceler;
  exports["runAff"] = runAff;
  exports["functorAff"] = functorAff;
  exports["applyAff"] = applyAff;
  exports["applicativeAff"] = applicativeAff;
  exports["bindAff"] = bindAff;
  exports["monadAff"] = monadAff;
  exports["monadEffAff"] = monadEffAff;
})(PS["Control.Monad.Aff"] = PS["Control.Monad.Aff"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Cont_Class = PS["Control.Monad.Cont.Class"];
  var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Reader_Class = PS["Control.Monad.Reader.Class"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_State_Class = PS["Control.Monad.State.Class"];
  var Control_Monad_Trans_Class = PS["Control.Monad.Trans.Class"];
  var Control_Monad_Writer_Class = PS["Control.Monad.Writer.Class"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var ExceptT = function (x) {
      return x;
  };
  var runExceptT = function (v) {
      return v;
  }; 
  var mapExceptT = function (f) {
      return function (v) {
          return f(v);
      };
  };
  var functorExceptT = function (dictFunctor) {
      return new Data_Functor.Functor(function (f) {
          return mapExceptT(Data_Functor.map(dictFunctor)(Data_Functor.map(Data_Either.functorEither)(f)));
      });
  };
  var except = function (dictApplicative) {
      return function ($96) {
          return ExceptT(Control_Applicative.pure(dictApplicative)($96));
      };
  };
  var monadExceptT = function (dictMonad) {
      return new Control_Monad.Monad(function () {
          return applicativeExceptT(dictMonad);
      }, function () {
          return bindExceptT(dictMonad);
      });
  };
  var bindExceptT = function (dictMonad) {
      return new Control_Bind.Bind(function () {
          return applyExceptT(dictMonad);
      }, function (v) {
          return function (k) {
              return Control_Bind.bind(dictMonad.Bind1())(v)(Data_Either.either(function ($97) {
                  return Control_Applicative.pure(dictMonad.Applicative0())(Data_Either.Left.create($97));
              })(function (a) {
                  var v1 = k(a);
                  return v1;
              }));
          };
      });
  };
  var applyExceptT = function (dictMonad) {
      return new Control_Apply.Apply(function () {
          return functorExceptT(((dictMonad.Bind1()).Apply0()).Functor0());
      }, Control_Monad.ap(monadExceptT(dictMonad)));
  };
  var applicativeExceptT = function (dictMonad) {
      return new Control_Applicative.Applicative(function () {
          return applyExceptT(dictMonad);
      }, function ($98) {
          return ExceptT(Control_Applicative.pure(dictMonad.Applicative0())(Data_Either.Right.create($98)));
      });
  };
  var monadThrowExceptT = function (dictMonad) {
      return new Control_Monad_Error_Class.MonadThrow(function () {
          return monadExceptT(dictMonad);
      }, function ($102) {
          return ExceptT(Control_Applicative.pure(dictMonad.Applicative0())(Data_Either.Left.create($102)));
      });
  };
  exports["ExceptT"] = ExceptT;
  exports["runExceptT"] = runExceptT;
  exports["mapExceptT"] = mapExceptT;
  exports["except"] = except;
  exports["functorExceptT"] = functorExceptT;
  exports["applyExceptT"] = applyExceptT;
  exports["applicativeExceptT"] = applicativeExceptT;
  exports["bindExceptT"] = bindExceptT;
  exports["monadExceptT"] = monadExceptT;
  exports["monadThrowExceptT"] = monadThrowExceptT;
})(PS["Control.Monad.Except.Trans"] = PS["Control.Monad.Except.Trans"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Newtype = PS["Data.Newtype"];
  var Prelude = PS["Prelude"];                                                           
  var runExcept = function ($0) {
      return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(Control_Monad_Except_Trans.runExceptT($0));
  };
  exports["runExcept"] = runExcept;
})(PS["Control.Monad.Except"] = PS["Control.Monad.Except"] || {});
(function(exports) {
    "use strict";

  exports.toForeign = function (value) {
    return value;
  };

  exports.unsafeFromForeign = function (value) {
    return value;
  };

  exports.tagOf = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1);
  };
})(PS["Data.Foreign"] = PS["Data.Foreign"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semigroup_Foldable = PS["Data.Semigroup.Foldable"];
  var Data_Semigroup_Traversable = PS["Data.Semigroup.Traversable"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var singleton = function ($160) {
      return Data_List_Types.NonEmptyList(Data_NonEmpty.singleton(Data_List_Types.plusList)($160));
  };
  exports["singleton"] = singleton;
})(PS["Data.List.NonEmpty"] = PS["Data.List.NonEmpty"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Foreign"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Except = PS["Control.Monad.Except"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Int = PS["Data.Int"];
  var Data_List_NonEmpty = PS["Data.List.NonEmpty"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Prelude = PS["Prelude"];        
  var ForeignError = (function () {
      function ForeignError(value0) {
          this.value0 = value0;
      };
      ForeignError.create = function (value0) {
          return new ForeignError(value0);
      };
      return ForeignError;
  })();
  var TypeMismatch = (function () {
      function TypeMismatch(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      TypeMismatch.create = function (value0) {
          return function (value1) {
              return new TypeMismatch(value0, value1);
          };
      };
      return TypeMismatch;
  })();
  var ErrorAtIndex = (function () {
      function ErrorAtIndex(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      ErrorAtIndex.create = function (value0) {
          return function (value1) {
              return new ErrorAtIndex(value0, value1);
          };
      };
      return ErrorAtIndex;
  })();
  var ErrorAtProperty = (function () {
      function ErrorAtProperty(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      ErrorAtProperty.create = function (value0) {
          return function (value1) {
              return new ErrorAtProperty(value0, value1);
          };
      };
      return ErrorAtProperty;
  })();
  var JSONError = (function () {
      function JSONError(value0) {
          this.value0 = value0;
      };
      JSONError.create = function (value0) {
          return new JSONError(value0);
      };
      return JSONError;
  })();
  var showForeignError = new Data_Show.Show(function (v) {
      if (v instanceof ForeignError) {
          return "(ForeignError " + (Data_Show.show(Data_Show.showString)(v.value0) + ")");
      };
      if (v instanceof ErrorAtIndex) {
          return "(ErrorAtIndex " + (Data_Show.show(Data_Show.showInt)(v.value0) + (" " + (Data_Show.show(showForeignError)(v.value1) + ")")));
      };
      if (v instanceof ErrorAtProperty) {
          return "(ErrorAtProperty " + (Data_Show.show(Data_Show.showString)(v.value0) + (" " + (Data_Show.show(showForeignError)(v.value1) + ")")));
      };
      if (v instanceof JSONError) {
          return "(JSONError " + (Data_Show.show(Data_Show.showString)(v.value0) + ")");
      };
      if (v instanceof TypeMismatch) {
          return "(TypeMismatch " + (Data_Show.show(Data_Show.showString)(v.value0) + (" " + (Data_Show.show(Data_Show.showString)(v.value1) + ")")));
      };
      throw new Error("Failed pattern match at Data.Foreign line 64, column 1 - line 64, column 47: " + [ v.constructor.name ]);
  });
  var fail = function ($121) {
      return Control_Monad_Error_Class.throwError(Control_Monad_Except_Trans.monadThrowExceptT(Data_Identity.monadIdentity))(Data_List_NonEmpty.singleton($121));
  };
  var unsafeReadTagged = function (tag) {
      return function (value) {
          if ($foreign.tagOf(value) === tag) {
              return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))($foreign.unsafeFromForeign(value));
          };
          if (Data_Boolean.otherwise) {
              return fail(new TypeMismatch(tag, $foreign.tagOf(value)));
          };
          throw new Error("Failed pattern match at Data.Foreign line 104, column 1 - line 104, column 55: " + [ tag.constructor.name, value.constructor.name ]);
      };
  };
  var readString = unsafeReadTagged("String");
  exports["ForeignError"] = ForeignError;
  exports["TypeMismatch"] = TypeMismatch;
  exports["ErrorAtIndex"] = ErrorAtIndex;
  exports["ErrorAtProperty"] = ErrorAtProperty;
  exports["JSONError"] = JSONError;
  exports["unsafeReadTagged"] = unsafeReadTagged;
  exports["readString"] = readString;
  exports["fail"] = fail;
  exports["showForeignError"] = showForeignError;
  exports["toForeign"] = $foreign.toForeign;
})(PS["Data.Foreign"] = PS["Data.Foreign"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Monad_Except = PS["Control.Monad.Except"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var fromAny = function (f) {
      return function ($0) {
          return Data_Either.either(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create)(Control_Monad_Except.runExcept(f($0)));
      };
  };
  exports["fromAny"] = fromAny;
})(PS["DOM.Classy.Util"] = PS["DOM.Classy.Util"] || {});
(function(exports) {
    "use strict";

  exports._readHTMLElement = function (failure) {
    return function (success) {
      return function (value) {
        var tag = Object.prototype.toString.call(value);
        if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
          return success(value);
        } else {
          return failure(tag);
        }
      };
    };
  };
})(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["DOM.HTML.Types"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Either = PS["Data.Either"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Identity = PS["Data.Identity"];
  var Data_List_Types = PS["Data.List.Types"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var windowToEventTarget = Unsafe_Coerce.unsafeCoerce;                        
  var readHTMLElement = $foreign._readHTMLElement(function ($0) {
      return Control_Monad_Except_Trans.except(Data_Identity.applicativeIdentity)(Data_Either.Left.create(Control_Applicative.pure(Data_List_Types.applicativeNonEmptyList)(Data_Foreign.TypeMismatch.create("HTMLElement")($0))));
  })(function ($1) {
      return Control_Monad_Except_Trans.except(Data_Identity.applicativeIdentity)(Data_Either.Right.create($1));
  });
  exports["windowToEventTarget"] = windowToEventTarget;
  exports["readHTMLElement"] = readHTMLElement;
})(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Classy_Util = PS["DOM.Classy.Util"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_Node_Node = PS["DOM.Node.Node"];
  var DOM_Node_NodeType = PS["DOM.Node.NodeType"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var IsNode = function (fromNode, toNode) {
      this.fromNode = fromNode;
      this.toNode = toNode;
  };
  var toNode = function (dict) {
      return dict.toNode;
  };                                                                                                                                
  var isNodeHTMLElement = new IsNode(DOM_Classy_Util.fromAny(DOM_HTML_Types.readHTMLElement), Unsafe_Coerce.unsafeCoerce);
  var fromNode = function (dict) {
      return dict.fromNode;
  };
  exports["fromNode"] = fromNode;
  exports["toNode"] = toNode;
  exports["IsNode"] = IsNode;
  exports["isNodeHTMLElement"] = isNodeHTMLElement;
})(PS["DOM.Classy.Node"] = PS["DOM.Classy.Node"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Classy_Node = PS["DOM.Classy.Node"];
  var DOM_Classy_Util = PS["DOM.Classy.Util"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_Node_Element = PS["DOM.Node.Element"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var IsElement = function (IsNode0, fromElement, toElement) {
      this.IsNode0 = IsNode0;
      this.fromElement = fromElement;
      this.toElement = toElement;
  };
  var toElement = function (dict) {
      return dict.toElement;
  };                                                                                           
  var isElementHTMLElement = new IsElement(function () {
      return DOM_Classy_Node.isNodeHTMLElement;
  }, DOM_Classy_Util.fromAny(DOM_HTML_Types.readHTMLElement), Unsafe_Coerce.unsafeCoerce);
  var fromElement = function (dict) {
      return dict.fromElement;
  };
  exports["IsElement"] = IsElement;
  exports["fromElement"] = fromElement;
  exports["toElement"] = toElement;
  exports["isElementHTMLElement"] = isElementHTMLElement;
})(PS["DOM.Classy.Element"] = PS["DOM.Classy.Element"] || {});
(function(exports) {
    "use strict";

  // - CSSOM ---------------------------------------------------------------------

  exports.getBoundingClientRect = function (el) {
    return function () {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };
    };
  };
})(PS["DOM.HTML.HTMLElement"] = PS["DOM.HTML.HTMLElement"] || {});
(function(exports) {
    "use strict";

  exports["null"] = null;

  exports.notNull = function (x) {
    return x;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Nullable"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];        
  var toNullable = Data_Maybe.maybe($foreign["null"])($foreign.notNull);
  exports["toNullable"] = toNullable;
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["DOM.HTML.HTMLElement"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];
  exports["getBoundingClientRect"] = $foreign.getBoundingClientRect;
})(PS["DOM.HTML.HTMLElement"] = PS["DOM.HTML.HTMLElement"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Classy_Element = PS["DOM.Classy.Element"];
  var DOM_Classy_Util = PS["DOM.Classy.Util"];
  var DOM_HTML_HTMLElement = PS["DOM.HTML.HTMLElement"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var IsHTMLElement = function (IsElement0, fromHTMLElement, toHTMLElement) {
      this.IsElement0 = IsElement0;
      this.fromHTMLElement = fromHTMLElement;
      this.toHTMLElement = toHTMLElement;
  };
  var toHTMLElement = function (dict) {
      return dict.toHTMLElement;
  };                                                                                           
  var isHTMLElementHTMLElement = new IsHTMLElement(function () {
      return DOM_Classy_Element.isElementHTMLElement;
  }, Data_Maybe.Just.create, Control_Category.id(Control_Category.categoryFn));
  var getBoundingClientRect = function (dictIsHTMLElement) {
      return function ($45) {
          return DOM_HTML_HTMLElement.getBoundingClientRect(toHTMLElement(dictIsHTMLElement)($45));
      };
  };
  var fromHTMLElement = function (dict) {
      return dict.fromHTMLElement;
  };
  exports["IsHTMLElement"] = IsHTMLElement;
  exports["fromHTMLElement"] = fromHTMLElement;
  exports["getBoundingClientRect"] = getBoundingClientRect;
  exports["toHTMLElement"] = toHTMLElement;
  exports["isHTMLElementHTMLElement"] = isHTMLElementHTMLElement;
})(PS["DOM.Classy.HTMLElement"] = PS["DOM.Classy.HTMLElement"] || {});
(function(exports) {
    "use strict";

  exports.currentTarget = function (e) {
    return e.currentTarget;
  };
})(PS["DOM.Event.Event"] = PS["DOM.Event.Event"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["DOM.Event.Event"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Event_EventPhase = PS["DOM.Event.EventPhase"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Enum = PS["Data.Enum"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];
  exports["currentTarget"] = $foreign.currentTarget;
})(PS["DOM.Event.Event"] = PS["DOM.Event.Event"] || {});
(function(exports) {exports.start_ = function (app) {
    if (typeof window === 'object' && typeof CustomEvent === 'function') {
      var hook = HookDevtool(app);

      if (window.__pux_devtool_hook) {
        window.removeEventListener('pux:devtool:init', window.__pux_devtool_hook);
        hook();
      }

      window.__pux_devtool_hook = hook;

      // Listen for devtool and connect
      window.addEventListener('pux:devtool:init', window.__pux_devtool_hook);
    }

    return app;
  };

  function HookDevtool (app) {
    if (window.__pux_conn === undefined) {
      window.__pux_conn = {
        setState: false,
        index: 0,
        events: [app.events.get()],
        states: [app.state.get()]
      };
    }

    var conn = window.__pux_conn;

    return function () {
      window.dispatchEvent(new CustomEvent('pux:state:change', {
        detail: {
          index: conn.index,
          length: conn.states.length,
          state: stateToString(conn.states[conn.index]),
          event: eventToString(conn.events[conn.index])
        }
      }));

      if (app.__devtool_connected) return;
      app.__devtool_connected = true;

      app.events.subscribe(function (ev) {
        conn.events.push(ev);
        conn.states.push(app.state.get());
        conn.index = conn.states.length - 1;

        window.dispatchEvent(new CustomEvent('pux:state:change', {
          detail: {
            index: conn.index,
            length: conn.states.length,
            state: stateToString(conn.states[conn.index]),
            event: eventToString(ev)
          }
        }));
      });

      app.state.subscribe(function (st) {
        if (conn.setState) {
          conn.setState = false;
          window.dispatchEvent(new CustomEvent('pux:state:change', {
            detail: {
              index: conn.index,
              length: conn.states.length,
              state: stateToString(st),
              event: eventToString(conn.events[conn.index])
            }
          }));
        }
      });

      if (window.__pux_handler) {
        window.removeEventListener('pux:state:first', window.__pux_handler);
        window.removeEventListener('pux:state:prev', window.__pux_handler);
        window.removeEventListener('pux:state:next', window.__pux_handler);
        window.removeEventListener('pux:state:last', window.__pux_handler);
      }

      window.__pux_handler = function (ev) {
        if (ev.type === 'pux:state:first') {
          conn.setState = true;
          conn.index = 0;
          app.state.set(conn.states[0]);
        } else if (ev.type === 'pux:state:prev') {
          conn.setState = true;
          if (conn.states[conn.index - 1]) conn.index--;
          app.state.set(conn.states[conn.index]);
        } else if (ev.type === 'pux:state:next') {
          conn.setState = true;
          if (conn.states[conn.index + 1]) conn.index++;
          app.state.set(conn.states[conn.index]);
        } else if (ev.type === 'pux:state:last') {
          conn.setState = true;
          conn.index = conn.states.length - 1;
          app.state.set(conn.states[conn.index]);
        }
      }

      window.addEventListener('pux:state:first', window.__pux_handler);
      window.addEventListener('pux:state:prev', window.__pux_handler);
      window.addEventListener('pux:state:next', window.__pux_handler);
      window.addEventListener('pux:state:last', window.__pux_handler);
    }
  }

  function eventToString (a) {
    a = a.value0 ? a.value0 : a;

    function toString(a) {
      var name = a.constructor.name.match(/(String|Number|Boolean)/) ? a : a.constructor.name;
      var str = [name];
      if (a.constructor.name === 'Object') {
        return stateToString(a);
      }
      Object.keys(a).forEach(function (key) {
        if (key[0] === 'v' && key[4] === 'e') {
          str.push('(' + toString(a[key]) + ')');
        }
      });
      return str.join(' ');
    }

    return toString(a);
  };

  function eventToJSON (a) {
    function toJSON(a, obj) {
      if (a.constructor.name.match(/(String|Number|Boolean)/)) {
        return a;
      } else if (a.constructor.name === 'Object') {
        Object.keys(a).forEach(function (key) {
          obj[key] = toJSON(a[key], obj[key] || {});
        });
      } else if (a.constructor.name === 'Array') {
        return a.map(function (b) {
          return toJSON(b, {});
        });
      } else {
        obj[a.constructor.name] = {};
        if (a.value0 && !a.value1) {
          obj[a.constructor.name] = toJSON(a.value0, obj[a.constructor.name] || {});
        } else {
          Object.keys(a).forEach(function (key) {
            if (key[0] === 'v' && key[4] === 'e') {
              obj[a.constructor.name][key[5]] = toJSON(a[key], obj[a.constructor.name][key[5]] || {});
            }
          });
        }
      }
      return obj;
    }

    return toJSON(a, {});
  };

  function stateToString (s) {
    return JSON.stringify(s, function (key, val) {
      if (!val.constructor.name.match(/(Object|Boolean|Array|String|Number|Date|Symbol)/)) {
        return eventToJSON(val);
      }
      return val;
    }, 2)
  };
})(PS["Pux"] = PS["Pux"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Monad_Aff = PS["Control.Monad.Aff"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var unsafeCoerceAff = Unsafe_Coerce.unsafeCoerce;
  exports["unsafeCoerceAff"] = unsafeCoerceAff;
})(PS["Control.Monad.Aff.Unsafe"] = PS["Control.Monad.Aff.Unsafe"] || {});
(function(exports) {// module Signal

  function make(initial) {
    var subs = [];
    var val = initial;
    var sig = {
      subscribe: function(sub) {
        subs.push(sub);
        sub(val);
      },
      get: function() { return val; },
      set: function(newval) {
        val = newval;
        subs.forEach(function(sub) { sub(newval); });
      }
    };
    return sig;
  };

  exports.constant = make;

  exports.mapSig = function(fun) {
    return function(sig) {
      var out = make(fun(sig.get()));
      sig.subscribe(function(val) { out.set(fun(val)); });
      return out;
    };
  };

  exports.merge = function(sig1) {
    return function(sig2) {
      var out = make(sig1.get());
      sig2.subscribe(out.set);
      sig1.subscribe(out.set);
      return out;
    };
  };

  exports.foldp = function(fun) {
    return function(seed) {
      return function(sig) {
        var acc = seed;
        var out = make(acc);
        sig.subscribe(function(val) {
          acc = fun(val)(acc);
          out.set(acc);
        });
        return out;
      };
    };
  };

  exports["dropRepeats'"] = function(sig) {
    var val = sig.get();
    var out = make(val);
    sig.subscribe(function(newval) {
      if (val !== newval) {
        val = newval;
        out.set(val);
      }
    });
    return out;
  };

  exports.runSignal =
    function runSignal(sig) {
      return function() {
        sig.subscribe(function(val) {
          val();
        });
        return {};
      };
    };
})(PS["Signal"] = PS["Signal"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Signal"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Prelude = PS["Prelude"];
  var mergeMany = function (dictFunctor) {
      return function (dictFoldable) {
          return function (sigs) {
              var mergeMaybe = function (v) {
                  return function (v1) {
                      if (v1 instanceof Data_Maybe.Nothing) {
                          return v;
                      };
                      if (v instanceof Data_Maybe.Nothing) {
                          return v1;
                      };
                      if (v instanceof Data_Maybe.Just && v1 instanceof Data_Maybe.Just) {
                          return new Data_Maybe.Just($foreign.merge(v.value0)(v1.value0));
                      };
                      throw new Error("Failed pattern match at Signal line 53, column 9 - line 53, column 33: " + [ v.constructor.name, v1.constructor.name ]);
                  };
              };
              return Data_Foldable.foldl(dictFoldable)(mergeMaybe)(Data_Maybe.Nothing.value)(Data_Functor.map(dictFunctor)(Data_Maybe.Just.create)(sigs));
          };
      };
  };
  var functorSignal = new Data_Functor.Functor($foreign.mapSig);
  var flippedMap = function (dictFunctor) {
      return Data_Function.flip(Data_Functor.map(dictFunctor));
  };
  exports["mergeMany"] = mergeMany;
  exports["flippedMap"] = flippedMap;
  exports["functorSignal"] = functorSignal;
  exports["constant"] = $foreign.constant;
  exports["foldp"] = $foreign.foldp;
  exports["dropRepeats'"] = $foreign["dropRepeats'"];
  exports["runSignal"] = $foreign.runSignal;
})(PS["Signal"] = PS["Signal"] || {});
(function(exports) {// module Signal.Channel

  exports.channelP =
    function channelP(constant) {
      return function(v) {
        return function() {
          return constant(v);
        };
      };
    };

  exports.sendP =
    function sendP(chan) {
      return function(v) {
        return function() {
          chan.set(v);
        };
      };
    };

  exports.subscribe =
    function subscribe(chan) {
      return chan;
    };
})(PS["Signal.Channel"] = PS["Signal.Channel"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Signal.Channel"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];
  var Signal = PS["Signal"];        
  var send = $foreign.sendP;
  var channel = $foreign.channelP(Signal.constant);
  exports["channel"] = channel;
  exports["send"] = send;
  exports["subscribe"] = $foreign.subscribe;
})(PS["Signal.Channel"] = PS["Signal.Channel"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Tuple = PS["Data.Tuple"];        
  var CatQueue = (function () {
      function CatQueue(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      CatQueue.create = function (value0) {
          return function (value1) {
              return new CatQueue(value0, value1);
          };
      };
      return CatQueue;
  })();
  var uncons = function ($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
          if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
              $tco_done = true;
              return Data_Maybe.Nothing.value;
          };
          if (v.value0 instanceof Data_List_Types.Nil) {
              $copy_v = new CatQueue(Data_List.reverse(v.value1), Data_List_Types.Nil.value);
              return;
          };
          if (v.value0 instanceof Data_List_Types.Cons) {
              $tco_done = true;
              return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
          };
          throw new Error("Failed pattern match at Data.CatQueue line 50, column 1 - line 50, column 63: " + [ v.constructor.name ]);
      };
      while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
      };
      return $tco_result;
  };
  var snoc = function (v) {
      return function (a) {
          return new CatQueue(v.value0, new Data_List_Types.Cons(a, v.value1));
      };
  };
  var $$null = function (v) {
      if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
          return true;
      };
      return false;
  };
  var empty = new CatQueue(Data_List_Types.Nil.value, Data_List_Types.Nil.value);
  exports["CatQueue"] = CatQueue;
  exports["empty"] = empty;
  exports["null"] = $$null;
  exports["snoc"] = snoc;
  exports["uncons"] = uncons;
})(PS["Data.CatQueue"] = PS["Data.CatQueue"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Data_CatQueue = PS["Data.CatQueue"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_NaturalTransformation = PS["Data.NaturalTransformation"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];        
  var CatNil = (function () {
      function CatNil() {

      };
      CatNil.value = new CatNil();
      return CatNil;
  })();
  var CatCons = (function () {
      function CatCons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      CatCons.create = function (value0) {
          return function (value1) {
              return new CatCons(value0, value1);
          };
      };
      return CatCons;
  })();
  var link = function (v) {
      return function (cat) {
          if (v instanceof CatNil) {
              return cat;
          };
          if (v instanceof CatCons) {
              return new CatCons(v.value0, Data_CatQueue.snoc(v.value1)(cat));
          };
          throw new Error("Failed pattern match at Data.CatList line 110, column 1 - line 110, column 54: " + [ v.constructor.name, cat.constructor.name ]);
      };
  };
  var foldr = function (k) {
      return function (b) {
          return function (q) {
              var foldl = function ($copy_v) {
                  return function ($copy_c) {
                      return function ($copy_v1) {
                          var $tco_var_v = $copy_v;
                          var $tco_var_c = $copy_c;
                          var $tco_done = false;
                          var $tco_result;
                          function $tco_loop(v, c, v1) {
                              if (v1 instanceof Data_List_Types.Nil) {
                                  $tco_done = true;
                                  return c;
                              };
                              if (v1 instanceof Data_List_Types.Cons) {
                                  $tco_var_v = v;
                                  $tco_var_c = v(c)(v1.value0);
                                  $copy_v1 = v1.value1;
                                  return;
                              };
                              throw new Error("Failed pattern match at Data.CatList line 125, column 3 - line 125, column 59: " + [ v.constructor.name, c.constructor.name, v1.constructor.name ]);
                          };
                          while (!$tco_done) {
                              $tco_result = $tco_loop($tco_var_v, $tco_var_c, $copy_v1);
                          };
                          return $tco_result;
                      };
                  };
              };
              var go = function ($copy_xs) {
                  return function ($copy_ys) {
                      var $tco_var_xs = $copy_xs;
                      var $tco_done = false;
                      var $tco_result;
                      function $tco_loop(xs, ys) {
                          var v = Data_CatQueue.uncons(xs);
                          if (v instanceof Data_Maybe.Nothing) {
                              $tco_done = true;
                              return foldl(function (x) {
                                  return function (i) {
                                      return i(x);
                                  };
                              })(b)(ys);
                          };
                          if (v instanceof Data_Maybe.Just) {
                              $tco_var_xs = v.value0.value1;
                              $copy_ys = new Data_List_Types.Cons(k(v.value0.value0), ys);
                              return;
                          };
                          throw new Error("Failed pattern match at Data.CatList line 121, column 14 - line 123, column 67: " + [ v.constructor.name ]);
                      };
                      while (!$tco_done) {
                          $tco_result = $tco_loop($tco_var_xs, $copy_ys);
                      };
                      return $tco_result;
                  };
              };
              return go(q)(Data_List_Types.Nil.value);
          };
      };
  };
  var uncons = function (v) {
      if (v instanceof CatNil) {
          return Data_Maybe.Nothing.value;
      };
      if (v instanceof CatCons) {
          return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, (function () {
              var $41 = Data_CatQueue["null"](v.value1);
              if ($41) {
                  return CatNil.value;
              };
              return foldr(link)(CatNil.value)(v.value1);
          })()));
      };
      throw new Error("Failed pattern match at Data.CatList line 101, column 1 - line 101, column 61: " + [ v.constructor.name ]);
  };
  var foldMap = function (dictMonoid) {
      return function (f) {
          return function (v) {
              if (v instanceof CatNil) {
                  return Data_Monoid.mempty(dictMonoid);
              };
              if (v instanceof CatCons) {
                  var d = (function () {
                      var $46 = Data_CatQueue["null"](v.value1);
                      if ($46) {
                          return CatNil.value;
                      };
                      return foldr(link)(CatNil.value)(v.value1);
                  })();
                  return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v.value0))(foldMap(dictMonoid)(f)(d));
              };
              throw new Error("Failed pattern match at Data.CatList line 141, column 1 - line 141, column 62: " + [ f.constructor.name, v.constructor.name ]);
          };
      };
  };
  var foldableCatList = new Data_Foldable.Foldable(function (dictMonoid) {
      return function (f) {
          return function (l) {
              return foldMap(dictMonoid)(f)(l);
          };
      };
  }, function (f) {
      return function (s) {
          return function (l) {
              return Data_Foldable.foldlDefault(foldableCatList)(f)(s)(l);
          };
      };
  }, function (f) {
      return function (s) {
          return function (l) {
              return Data_Foldable.foldrDefault(foldableCatList)(f)(s)(l);
          };
      };
  });
  var empty = CatNil.value;
  var append = function (v) {
      return function (v1) {
          if (v1 instanceof CatNil) {
              return v;
          };
          if (v instanceof CatNil) {
              return v1;
          };
          return link(v)(v1);
      };
  };
  var cons = function (a) {
      return function (cat) {
          return append(new CatCons(a, Data_CatQueue.empty))(cat);
      };
  };
  var map = function (v) {
      return function (v1) {
          if (v1 instanceof CatNil) {
              return CatNil.value;
          };
          if (v1 instanceof CatCons) {
              var d = (function () {
                  var $53 = Data_CatQueue["null"](v1.value1);
                  if ($53) {
                      return CatNil.value;
                  };
                  return foldr(link)(CatNil.value)(v1.value1);
              })();
              return cons(v(v1.value0))(map(v)(d));
          };
          throw new Error("Failed pattern match at Data.CatList line 135, column 1 - line 135, column 54: " + [ v.constructor.name, v1.constructor.name ]);
      };
  };
  var functorCatList = new Data_Functor.Functor(map);
  var singleton = function (a) {
      return cons(a)(CatNil.value);
  }; 
  var semigroupCatList = new Data_Semigroup.Semigroup(append);
  var monoidCatList = new Data_Monoid.Monoid(function () {
      return semigroupCatList;
  }, CatNil.value);
  var monadCatList = new Control_Monad.Monad(function () {
      return applicativeCatList;
  }, function () {
      return bindCatList;
  });
  var bindCatList = new Control_Bind.Bind(function () {
      return applyCatList;
  }, Data_Function.flip(foldMap(monoidCatList)));
  var applyCatList = new Control_Apply.Apply(function () {
      return functorCatList;
  }, Control_Monad.ap(monadCatList));
  var applicativeCatList = new Control_Applicative.Applicative(function () {
      return applyCatList;
  }, singleton);
  var snoc = function (cat) {
      return function (a) {
          return append(cat)(new CatCons(a, Data_CatQueue.empty));
      };
  };
  exports["CatNil"] = CatNil;
  exports["CatCons"] = CatCons;
  exports["empty"] = empty;
  exports["append"] = append;
  exports["cons"] = cons;
  exports["snoc"] = snoc;
  exports["uncons"] = uncons;
  exports["semigroupCatList"] = semigroupCatList;
  exports["monoidCatList"] = monoidCatList;
  exports["foldableCatList"] = foldableCatList;
  exports["functorCatList"] = functorCatList;
  exports["applyCatList"] = applyCatList;
  exports["applicativeCatList"] = applicativeCatList;
  exports["bindCatList"] = bindCatList;
  exports["monadCatList"] = monadCatList;
})(PS["Data.CatList"] = PS["Data.CatList"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_Trans_Class = PS["Control.Monad.Trans.Class"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_CatList = PS["Data.CatList"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];
  var Free = (function () {
      function Free(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Free.create = function (value0) {
          return function (value1) {
              return new Free(value0, value1);
          };
      };
      return Free;
  })();
  var Return = (function () {
      function Return(value0) {
          this.value0 = value0;
      };
      Return.create = function (value0) {
          return new Return(value0);
      };
      return Return;
  })();
  var Bind = (function () {
      function Bind(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Bind.create = function (value0) {
          return function (value1) {
              return new Bind(value0, value1);
          };
      };
      return Bind;
  })();
  var toView = function ($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
          var runExpF = function (v2) {
              return v2;
          };
          var concatF = function (v2) {
              return function (r) {
                  return new Free(v2.value0, Data_Semigroup.append(Data_CatList.semigroupCatList)(v2.value1)(r));
              };
          };
          if (v.value0 instanceof Return) {
              var v2 = Data_CatList.uncons(v.value1);
              if (v2 instanceof Data_Maybe.Nothing) {
                  $tco_done = true;
                  return new Return(v.value0.value0);
              };
              if (v2 instanceof Data_Maybe.Just) {
                  $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
                  return;
              };
              throw new Error("Failed pattern match at Control.Monad.Free line 215, column 7 - line 219, column 64: " + [ v2.constructor.name ]);
          };
          if (v.value0 instanceof Bind) {
              $tco_done = true;
              return new Bind(v.value0.value0, function (a) {
                  return concatF(v.value0.value1(a))(v.value1);
              });
          };
          throw new Error("Failed pattern match at Control.Monad.Free line 213, column 3 - line 221, column 56: " + [ v.value0.constructor.name ]);
      };
      while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
      };
      return $tco_result;
  };
  var fromView = function (f) {
      return new Free(f, Data_CatList.empty);
  };
  var freeMonad = new Control_Monad.Monad(function () {
      return freeApplicative;
  }, function () {
      return freeBind;
  });
  var freeFunctor = new Data_Functor.Functor(function (k) {
      return function (f) {
          return Control_Bind.bindFlipped(freeBind)(function ($118) {
              return Control_Applicative.pure(freeApplicative)(k($118));
          })(f);
      };
  });
  var freeBind = new Control_Bind.Bind(function () {
      return freeApply;
  }, function (v) {
      return function (k) {
          return new Free(v.value0, Data_CatList.snoc(v.value1)(k));
      };
  });
  var freeApply = new Control_Apply.Apply(function () {
      return freeFunctor;
  }, Control_Monad.ap(freeMonad));
  var freeApplicative = new Control_Applicative.Applicative(function () {
      return freeApply;
  }, function ($119) {
      return fromView(Return.create($119));
  });
  var freeMonadRec = new Control_Monad_Rec_Class.MonadRec(function () {
      return freeMonad;
  }, function (k) {
      return function (a) {
          return Control_Bind.bind(freeBind)(k(a))(function (v) {
              if (v instanceof Control_Monad_Rec_Class.Loop) {
                  return Control_Monad_Rec_Class.tailRecM(freeMonadRec)(k)(v.value0);
              };
              if (v instanceof Control_Monad_Rec_Class.Done) {
                  return Control_Applicative.pure(freeApplicative)(v.value0);
              };
              throw new Error("Failed pattern match at Control.Monad.Free line 84, column 26 - line 86, column 21: " + [ v.constructor.name ]);
          });
      };
  });
  var liftF = function (f) {
      return fromView(new Bind(f, function ($120) {
          return Control_Applicative.pure(freeApplicative)($120);
      }));
  }; 
  var substFree = function (k) {
      var go = function (f) {
          var v = toView(f);
          if (v instanceof Return) {
              return Control_Applicative.pure(freeApplicative)(v.value0);
          };
          if (v instanceof Bind) {
              return Control_Bind.bind(freeBind)(k(v.value0))(Data_Functor.map(Data_Functor.functorFn)(go)(v.value1));
          };
          throw new Error("Failed pattern match at Control.Monad.Free line 156, column 10 - line 158, column 33: " + [ v.constructor.name ]);
      };
      return go;
  };
  var hoistFree = function (k) {
      return substFree(function ($121) {
          return liftF(k($121));
      });
  };
  var foldFree = function (dictMonadRec) {
      return function (k) {
          var go = function (f) {
              var v = toView(f);
              if (v instanceof Return) {
                  return Data_Functor.map((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(Control_Monad_Rec_Class.Done.create)(Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(v.value0));
              };
              if (v instanceof Bind) {
                  return Data_Functor.map((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(function ($127) {
                      return Control_Monad_Rec_Class.Loop.create(v.value1($127));
                  })(k(v.value0));
              };
              throw new Error("Failed pattern match at Control.Monad.Free line 146, column 10 - line 148, column 37: " + [ v.constructor.name ]);
          };
          return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go);
      };
  };
  exports["liftF"] = liftF;
  exports["hoistFree"] = hoistFree;
  exports["foldFree"] = foldFree;
  exports["substFree"] = substFree;
  exports["freeFunctor"] = freeFunctor;
  exports["freeBind"] = freeBind;
  exports["freeApplicative"] = freeApplicative;
  exports["freeApply"] = freeApply;
  exports["freeMonad"] = freeMonad;
  exports["freeMonadRec"] = freeMonadRec;
})(PS["Control.Monad.Free"] = PS["Control.Monad.Free"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Free = PS["Control.Monad.Free"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_CatList = PS["Data.CatList"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var EventHandler = (function () {
      function EventHandler(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      EventHandler.create = function (value0) {
          return function (value1) {
              return new EventHandler(value0, value1);
          };
      };
      return EventHandler;
  })();
  var EventHandlers = (function () {
      function EventHandlers(value0) {
          this.value0 = value0;
      };
      EventHandlers.create = function (value0) {
          return new EventHandlers(value0);
      };
      return EventHandlers;
  })();
  var Attr = (function () {
      function Attr(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Attr.create = function (value0) {
          return function (value1) {
              return new Attr(value0, value1);
          };
      };
      return Attr;
  })();
  var Attribute = (function () {
      function Attribute(value0) {
          this.value0 = value0;
      };
      Attribute.create = function (value0) {
          return new Attribute(value0);
      };
      return Attribute;
  })();
  var Element = (function () {
      function Element(value0, value1, value2, value3, value4) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
          this.value4 = value4;
      };
      Element.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return function (value4) {
                          return new Element(value0, value1, value2, value3, value4);
                      };
                  };
              };
          };
      };
      return Element;
  })();
  var Content = (function () {
      function Content(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Content.create = function (value0) {
          return function (value1) {
              return new Content(value0, value1);
          };
      };
      return Content;
  })();
  var Empty = (function () {
      function Empty(value0) {
          this.value0 = value0;
      };
      Empty.create = function (value0) {
          return new Empty(value0);
      };
      return Empty;
  })();
  var Attributable = function ($$with) {
      this["with"] = $$with;
  };
  var Eventable = function (withEvent) {
      this.withEvent = withEvent;
  };
  var withEvent = function (dict) {
      return dict.withEvent;
  };
  var $$with = function (dict) {
      return dict["with"];
  };
  var text = function (s) {
      return Control_Monad_Free.liftF(new Content(s, Data_Unit.unit));
  }; 
  var parent = function (el) {
      return function (kids) {
          return Control_Monad_Free.liftF(new Element(el, kids, Data_Monoid.mempty(Data_CatList.monoidCatList), Data_Monoid.mempty(Data_CatList.monoidCatList), Data_Unit.unit));
      };
  };
  var on = function (name) {
      return function (handler) {
          return new EventHandlers(Control_Applicative.pure(Data_CatList.applicativeCatList)(new EventHandler(name, handler)));
      };
  };                                                                
  var leaf = function (el) {
      return Control_Monad_Free.liftF(new Element(el, Control_Monad_Free.liftF(new Empty(Data_Unit.unit)), Data_Monoid.mempty(Data_CatList.monoidCatList), Data_Monoid.mempty(Data_CatList.monoidCatList), Data_Unit.unit));
  };
  var functorEventHandler = new Data_Functor.Functor(function (f) {
      return function (v) {
          return new EventHandler(v.value0, f(v.value1));
      };
  });
  var eventableMarkup = new Eventable(function (f) {
      return function (v) {
          var withEventF = function (v1) {
              if (v1 instanceof Element) {
                  return new Element(v1.value0, v1.value1, v1.value2, Data_Semigroup.append(Data_CatList.semigroupCatList)(v1.value3)(v.value0), v1.value4);
              };
              return v1;
          };
          return Control_Monad_Free.hoistFree(withEventF)(f);
      };
  });
  var eventableMarkupMF = new Eventable(function (k) {
      return function (xs) {
          return function (m) {
              return withEvent(eventableMarkup)(k(m))(xs);
          };
      };
  });                                                             
  var mapEvent = function (f) {
      return function (fm) {
          return Control_Monad_Free.foldFree(Control_Monad_Free.freeMonadRec)(function (m) {
              return Control_Monad_Free.liftF(Data_Bifunctor.lmap(bifunctorMarkupM)(f)(m));
          })(fm);
      };
  };
  var bifunctorMarkupM = new Data_Bifunctor.Bifunctor(function (l) {
      return function (r) {
          return function (v) {
              if (v instanceof Empty) {
                  return new Empty(r(v.value0));
              };
              if (v instanceof Content) {
                  return new Content(v.value0, r(v.value1));
              };
              if (v instanceof Element) {
                  return new Element(v.value0, mapEvent(l)(v.value1), v.value2, Data_Functor.map(Data_CatList.functorCatList)(Data_Functor.map(functorEventHandler)(l))(v.value3), r(v.value4));
              };
              throw new Error("Failed pattern match at Text.Smolder.Markup line 52, column 1 - line 52, column 47: " + [ l.constructor.name, r.constructor.name, v.constructor.name ]);
          };
      };
  });
  var attribute = function (key) {
      return function (value) {
          return new Attribute(Control_Applicative.pure(Data_CatList.applicativeCatList)(new Attr(key, value)));
      };
  };
  var attributableMarkup = new Attributable(function (f) {
      return function (v) {
          var withF = function (v1) {
              if (v1 instanceof Element) {
                  return new Element(v1.value0, v1.value1, Data_Semigroup.append(Data_CatList.semigroupCatList)(v1.value2)(v.value0), v1.value3, v1.value4);
              };
              return v1;
          };
          return Control_Monad_Free.hoistFree(withF)(f);
      };
  });
  var attributableMarkupF = new Attributable(function (k) {
      return function (xs) {
          return function (m) {
              return $$with(attributableMarkup)(k(m))(xs);
          };
      };
  });
  exports["Element"] = Element;
  exports["Content"] = Content;
  exports["Empty"] = Empty;
  exports["Attr"] = Attr;
  exports["EventHandler"] = EventHandler;
  exports["mapEvent"] = mapEvent;
  exports["parent"] = parent;
  exports["leaf"] = leaf;
  exports["text"] = text;
  exports["Attributable"] = Attributable;
  exports["with"] = $$with;
  exports["attribute"] = attribute;
  exports["EventHandlers"] = EventHandlers;
  exports["Eventable"] = Eventable;
  exports["withEvent"] = withEvent;
  exports["on"] = on;
  exports["functorEventHandler"] = functorEventHandler;
  exports["bifunctorMarkupM"] = bifunctorMarkupM;
  exports["attributableMarkup"] = attributableMarkup;
  exports["attributableMarkupF"] = attributableMarkupF;
  exports["eventableMarkup"] = eventableMarkup;
  exports["eventableMarkupMF"] = eventableMarkupMF;
})(PS["Text.Smolder.Markup"] = PS["Text.Smolder.Markup"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Pux"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Aff = PS["Control.Monad.Aff"];
  var Control_Monad_Aff_Unsafe = PS["Control.Monad.Aff.Unsafe"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Time_Duration = PS["Data.Time.Duration"];
  var Data_Unit = PS["Data.Unit"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Signal = PS["Signal"];
  var Signal_Channel = PS["Signal.Channel"];
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];
  var noEffects = function (state) {
      return {
          state: state,
          effects: [  ]
      };
  };
  var start = function (config) {
      return function __do() {
          var v = Signal_Channel.channel(Data_List_Types.Nil.value)();
          var mapAffect = function (affect) {
              return Control_Monad_Aff.launchAff(Control_Monad_Aff_Unsafe.unsafeCoerceAff(Control_Bind.bind(Control_Monad_Aff.bindAff)(affect)(function (v1) {
                  if (v1 instanceof Data_Maybe.Nothing) {
                      return Control_Applicative.pure(Control_Monad_Aff.applicativeAff)(Data_Unit.unit);
                  };
                  if (v1 instanceof Data_Maybe.Just) {
                      return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Aff.bindAff)(Control_Monad_Aff.delay(0.0))(function () {
                          return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Signal_Channel.send(v)(Data_List.singleton(v1.value0)));
                      });
                  };
                  throw new Error("Failed pattern match at Pux line 64, column 9 - line 68, column 51: " + [ v1.constructor.name ]);
              })));
          };
          var foldState = function (effModel) {
              return function (ev) {
                  return config.foldp(ev)(effModel.state);
              };
          };
          var foldEvents = function (evs) {
              return function (effModel) {
                  return Data_Foldable.foldl(Data_List_Types.foldableList)(foldState)(noEffects(effModel.state))(evs);
              };
          };
          var evSignal = Signal_Channel.subscribe(v);
          var input = Data_Maybe.fromJust()(Signal.mergeMany(Data_Functor.functorArray)(Data_Foldable.foldableArray)(Data_Array.snoc(Data_Functor.map(Data_Functor.functorArray)(Data_Functor.map(Signal.functorSignal)(Data_List.singleton))(config.inputs))(evSignal)));
          var effModelSignal = Signal.foldp(foldEvents)(noEffects(config.initialState))(input);
          var effectsSignal = Signal.flippedMap(Signal.functorSignal)(effModelSignal)(function ($9) {
              return Data_Functor.map(Data_Functor.functorArray)(mapAffect)((function (v1) {
                  return v1.effects;
              })($9));
          });
          var stateSignal = Signal["dropRepeats'"](Signal.flippedMap(Signal.functorSignal)(effModelSignal)(function (v1) {
              return v1.state;
          }));
          var htmlSignal = Signal.flippedMap(Signal.functorSignal)(stateSignal)(config.view);
          Signal.runSignal(Signal.flippedMap(Signal.functorSignal)(effectsSignal)(Data_Foldable.sequence_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)))();
          return $foreign.start_({
              markup: htmlSignal,
              state: stateSignal,
              events: input,
              input: v
          });
      };
  };
  var mapEffects = function (a2b) {
      return function (effmodel) {
          return {
              state: effmodel.state,
              effects: Data_Functor.map(Data_Functor.functorArray)(Data_Functor.map(Control_Monad_Aff.functorAff)(Data_Functor.map(Data_Maybe.functorMaybe)(a2b)))(effmodel.effects)
          };
      };
  };
  exports["noEffects"] = noEffects;
  exports["mapEffects"] = mapEffects;
  exports["start"] = start;
})(PS["Pux"] = PS["Pux"] || {});
(function(exports) {exports.targetValue = function (ev) {
    var target = ev['target'];
    if (target === undefined) return '';
    var value = target['value'];
    if (value === undefined) return '';
    return value;
  };
})(PS["Pux.DOM.Events"] = PS["Pux.DOM.Events"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Pux.DOM.Events"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];    
  var onMouseLeave = Text_Smolder_Markup.on("onMouseLeave");
  var onMouseEnter = Text_Smolder_Markup.on("onMouseEnter");        
  var onClick = Text_Smolder_Markup.on("onClick");
  var onChange = Text_Smolder_Markup.on("onChange");
  exports["onChange"] = onChange;
  exports["onClick"] = onClick;
  exports["onMouseEnter"] = onMouseEnter;
  exports["onMouseLeave"] = onMouseLeave;
  exports["targetValue"] = $foreign.targetValue;
})(PS["Pux.DOM.Events"] = PS["Pux.DOM.Events"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var This = (function () {
      function This(value0) {
          this.value0 = value0;
      };
      This.create = function (value0) {
          return new This(value0);
      };
      return This;
  })();
  var That = (function () {
      function That(value0) {
          this.value0 = value0;
      };
      That.create = function (value0) {
          return new That(value0);
      };
      return That;
  })();
  var Both = (function () {
      function Both(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Both.create = function (value0) {
          return function (value1) {
              return new Both(value0, value1);
          };
      };
      return Both;
  })();
  var theseRight = function (v) {
      if (v instanceof Both) {
          return new Data_Maybe.Just(v.value1);
      };
      if (v instanceof That) {
          return new Data_Maybe.Just(v.value0);
      };
      return Data_Maybe.Nothing.value;
  };
  var theseLeft = function (v) {
      if (v instanceof Both) {
          return new Data_Maybe.Just(v.value0);
      };
      if (v instanceof This) {
          return new Data_Maybe.Just(v.value0);
      };
      return Data_Maybe.Nothing.value;
  };
  var semigroupThese = function (dictSemigroup) {
      return function (dictSemigroup1) {
          return new Data_Semigroup.Semigroup(function (v) {
              return function (v1) {
                  if (v instanceof This && v1 instanceof This) {
                      return new This(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0));
                  };
                  if (v instanceof This && v1 instanceof That) {
                      return new Both(v.value0, v1.value0);
                  };
                  if (v instanceof This && v1 instanceof Both) {
                      return new Both(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), v1.value1);
                  };
                  if (v instanceof That && v1 instanceof This) {
                      return new Both(v1.value0, v.value0);
                  };
                  if (v instanceof That && v1 instanceof That) {
                      return new That(Data_Semigroup.append(dictSemigroup1)(v.value0)(v1.value0));
                  };
                  if (v instanceof That && v1 instanceof Both) {
                      return new Both(v1.value0, Data_Semigroup.append(dictSemigroup1)(v.value0)(v1.value1));
                  };
                  if (v instanceof Both && v1 instanceof This) {
                      return new Both(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), v.value1);
                  };
                  if (v instanceof Both && v1 instanceof That) {
                      return new Both(v.value0, Data_Semigroup.append(dictSemigroup1)(v.value1)(v1.value0));
                  };
                  if (v instanceof Both && v1 instanceof Both) {
                      return new Both(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), Data_Semigroup.append(dictSemigroup1)(v.value1)(v1.value1));
                  };
                  throw new Error("Failed pattern match at Data.These line 22, column 1 - line 22, column 79: " + [ v.constructor.name, v1.constructor.name ]);
              };
          });
      };
  };
  exports["This"] = This;
  exports["That"] = That;
  exports["Both"] = Both;
  exports["theseLeft"] = theseLeft;
  exports["theseRight"] = theseRight;
  exports["semigroupThese"] = semigroupThese;
})(PS["Data.These"] = PS["Data.These"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Property = PS["CSS.Property"];
  var CSS_Selector = PS["CSS.Selector"];
  var CSS_String = PS["CSS.String"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Generic = PS["Data.Generic"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_These = PS["Data.These"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Sheet = function (x) {
      return x;
  };
  var Inline = function (x) {
      return x;
  };
  var sepWith = function (s) {
      return function (a) {
          return function (b) {
              return a + (s + b);
          };
      };
  };
  var semigroupInline = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          return v + v1;
      };
  });
  var semigroupFile = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          return v + v1;
      };
  });
  var properties = function (xs) {
      var sheetRules = Data_Either.either(function (v) {
          return Data_Monoid.mempty(Data_Monoid.monoidString);
      })(function (v) {
          return Data_Foldable.fold(Data_Foldable.foldableArray)(Data_Monoid.monoidString)([ v.value0, ": ", v.value1 ]);
      });
      return Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)("; ")(Data_Functor.map(Data_Functor.functorArray)(sheetRules)(xs));
  };
  var predicate = function (v) {
      if (v instanceof CSS_Selector.Id) {
          return "#" + v.value0;
      };
      if (v instanceof CSS_Selector.Class) {
          return "." + v.value0;
      };
      if (v instanceof CSS_Selector.Attr) {
          return "[" + (v.value0 + "]");
      };
      if (v instanceof CSS_Selector.AttrVal) {
          return "[" + (v.value0 + ("='" + (v.value1 + "']")));
      };
      if (v instanceof CSS_Selector.AttrBegins) {
          return "[" + (v.value0 + ("^='" + (v.value1 + "']")));
      };
      if (v instanceof CSS_Selector.AttrEnds) {
          return "[" + (v.value0 + ("$='" + (v.value1 + "']")));
      };
      if (v instanceof CSS_Selector.AttrContains) {
          return "[" + (v.value0 + ("*='" + (v.value1 + "']")));
      };
      if (v instanceof CSS_Selector.AttrSpace) {
          return "[" + (v.value0 + ("~='" + (v.value1 + "']")));
      };
      if (v instanceof CSS_Selector.AttrHyph) {
          return "[" + (v.value0 + ("|='" + (v.value1 + "']")));
      };
      if (v instanceof CSS_Selector.Pseudo) {
          return ":" + v.value0;
      };
      if (v instanceof CSS_Selector.PseudoFunc) {
          return ":" + (v.value0 + ("(" + (Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(",")(v.value1) + ")")));
      };
      throw new Error("Failed pattern match at CSS.Render line 180, column 1 - line 180, column 33: " + [ v.constructor.name ]);
  };
  var selector$prime$prime = function (v) {
      return function (v1) {
          if (v.length === 0 && v1 instanceof CSS_Selector.Star) {
              return [ "*" ];
          };
          if (v1 instanceof CSS_Selector.Star) {
              return [ "" ];
          };
          if (v1 instanceof CSS_Selector.Elem) {
              return [ v1.value0 ];
          };
          if (v1 instanceof CSS_Selector.PathChild) {
              return Control_Apply.apply(Control_Apply.applyArray)(Data_Functor.map(Data_Functor.functorArray)(sepWith(" > "))(selector$prime(v1.value0)))(selector$prime(v1.value1));
          };
          if (v1 instanceof CSS_Selector.Deep) {
              return Control_Apply.apply(Control_Apply.applyArray)(Data_Functor.map(Data_Functor.functorArray)(sepWith(" "))(selector$prime(v1.value0)))(selector$prime(v1.value1));
          };
          if (v1 instanceof CSS_Selector.Adjacent) {
              return Control_Apply.apply(Control_Apply.applyArray)(Data_Functor.map(Data_Functor.functorArray)(sepWith(" + "))(selector$prime(v1.value0)))(selector$prime(v1.value1));
          };
          if (v1 instanceof CSS_Selector.Combined) {
              return Data_Semigroup.append(Data_Semigroup.semigroupArray)(selector$prime(v1.value0))(selector$prime(v1.value1));
          };
          throw new Error("Failed pattern match at CSS.Render line 146, column 1 - line 146, column 63: " + [ v.constructor.name, v1.constructor.name ]);
      };
  };
  var selector$prime = function (v) {
      return Data_Functor.map(Data_Functor.functorArray)(function (v1) {
          return v1 + Data_Foldable.foldMap(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(predicate)(Data_Array.sort(CSS_Selector.ordPredicate)(v.value0));
      })(selector$prime$prime(v.value0)(v.value1));
  };
  var selector = function ($185) {
      return Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(", ")(selector$prime($185));
  };
  var nel = function (v) {
      if (v.length === 0) {
          return Data_Maybe.Nothing.value;
      };
      return Data_Functor.map(Data_Maybe.functorMaybe)(function (v1) {
          return new Data_NonEmpty.NonEmpty(v1.head, v1.tail);
      })(Data_Array.uncons(v));
  };                                               
  var merger = function (v) {
      if (v.value0 instanceof CSS_Stylesheet.Child) {
          return Data_Maybe.maybe(v.value0.value0)(function (xs$prime) {
              return CSS_Selector.child(merger(xs$prime))(v.value0.value0);
          })(nel(v.value1));
      };
      if (v.value0 instanceof CSS_Stylesheet.Sub) {
          return Data_Maybe.maybe(v.value0.value0)(function (xs$prime) {
              return CSS_Selector.deep(merger(xs$prime))(v.value0.value0);
          })(nel(v.value1));
      };
      if (v.value0 instanceof CSS_Stylesheet.Root) {
          return Data_Maybe.maybe(v.value0.value0)(function (xs$prime) {
              return CSS_Selector.deep(v.value0.value0)(merger(xs$prime));
          })(nel(v.value1));
      };
      if (v.value0 instanceof CSS_Stylesheet.Pop) {
          return Data_Maybe.maybe(CSS_Selector.element("TODO"))(merger)(nel(Data_Array.drop(v.value0.value0)(Data_Array.cons(v.value0)(v.value1))));
      };
      if (v.value0 instanceof CSS_Stylesheet.Self) {
          return Data_Maybe.maybe(CSS_Selector["with"](CSS_Selector.star)(v.value0.value0))(function (xs$prime) {
              return CSS_Selector["with"](merger(xs$prime))(v.value0.value0);
          })(nel(v.value1));
      };
      throw new Error("Failed pattern match at CSS.Render line 173, column 3 - line 178, column 106: " + [ v.value0.constructor.name ]);
  };
  var mediaType = function (v) {
      return CSS_Property.plain(v);
  };
  var imp = function (t) {
      return Data_Maybe.Just.create(Data_These.That.create(Sheet(CSS_String.fromString(CSS_String.isStringString)("@import url(" + (t + ");\x0a")))));
  };
  var getSheet = function (v) {
      return v;
  };
  var renderedSheet = function (v) {
      return Control_Bind.bind(Data_Maybe.bindMaybe)(v)(function ($186) {
          return Data_Functor.map(Data_Maybe.functorMaybe)(getSheet)(Data_These.theseRight($186));
      });
  };
  var getInline = function (v) {
      return v;
  };
  var renderedInline = function (v) {
      return Control_Bind.bind(Data_Maybe.bindMaybe)(v)(function ($187) {
          return Data_Functor.map(Data_Maybe.functorMaybe)(getInline)(Data_These.theseLeft($187));
      });
  }; 
  var feature = function (v) {
      return Data_Maybe.maybe(v.value0)(function (v1) {
          return "(" + (v.value0 + (": " + (CSS_Property.plain(v1) + ")")));
      })(v.value1);
  };
  var mediaQuery = function (v) {
      return "@media " + (mediaType(v.value1) + Data_NonEmpty.foldl1(Data_Foldable.foldableArray)(Data_Semigroup.append(Data_Semigroup.semigroupString))(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_Functor.functorArray))(function ($188) {
          return (function (v1) {
              return " and " + v1;
          })(feature($188));
      })(v.value2)));
  }; 
  var collect$prime = function (v) {
      return function (v1) {
          if (v instanceof CSS_Property.Plain && v1 instanceof CSS_Property.Plain) {
              return [ new Data_Either.Right(new Data_Tuple.Tuple(v.value0, v1.value0)) ];
          };
          if (v instanceof CSS_Property.Prefixed && v1 instanceof CSS_Property.Plain) {
              return Data_Functor.map(Data_Functor.functorArray)(function (v3) {
                  return Data_Either.Right.create(new Data_Tuple.Tuple(v3.value0 + v3.value1, v1.value0));
              })(v.value0);
          };
          if (v instanceof CSS_Property.Plain && v1 instanceof CSS_Property.Prefixed) {
              return Data_Functor.map(Data_Functor.functorArray)(function (v2) {
                  return Data_Either.Right.create(new Data_Tuple.Tuple(v.value0, v2.value0 + v2.value1));
              })(v1.value0);
          };
          if (v instanceof CSS_Property.Prefixed && v1 instanceof CSS_Property.Prefixed) {
              return Data_Functor.map(Data_Functor.functorArray)(function (v2) {
                  return Data_Maybe.maybe(new Data_Either.Left(v2.value0 + v2.value1))(function ($189) {
                      return Data_Either.Right.create(Data_Tuple.Tuple.create(v2.value0 + v2.value1)((function (v3) {
                          return v2.value0 + v3;
                      })($189)));
                  })(Data_Tuple.lookup(Data_Foldable.foldableArray)(Data_Eq.eqString)(v2.value0)(v1.value0));
              })(v.value0);
          };
          throw new Error("Failed pattern match at CSS.Render line 161, column 1 - line 161, column 80: " + [ v.constructor.name, v1.constructor.name ]);
      };
  };
  var collect = function (v) {
      return collect$prime(v.value0)(v.value1);
  };
  var rule$prime = function (sel) {
      return function (props) {
          var p = Control_Bind.bind(Control_Bind.bindArray)(props)(collect);
          var q = Data_Functor.map(Data_Maybe.functorMaybe)(function ($190) {
              return Data_These.This.create(Inline(properties(Data_NonEmpty.oneOf(Control_Alternative.alternativeArray)($190))));
          })(nel(p));
          var o = function (sel$prime) {
              return Data_Maybe.Just.create(Data_These.That.create(Sheet(Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(" ")([ selector(merger(sel$prime)), "{", properties(p), "}\x0a" ]))));
          };
          return Data_Maybe.maybe(q)(o)(nel(sel));
      };
  };
  var rules = function (sel) {
      return function (rs) {
          var queries = function (v) {
              if (v instanceof CSS_Stylesheet.Query) {
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, v.value1));
              };
              return Data_Maybe.Nothing.value;
          };
          var queryRules = Data_Foldable.foldMap(Data_Foldable.foldableArray)(Data_Maybe.monoidMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(Data_Tuple.uncurry(Data_Function.flip(query$prime)(sel)))(Data_Array.mapMaybe(queries)(rs));
          var property = function (v) {
              if (v instanceof CSS_Stylesheet.Property) {
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, v.value1));
              };
              return Data_Maybe.Nothing.value;
          };
          var topRules = (function () {
              var rs$prime = Data_Array.mapMaybe(property)(rs);
              var $172 = Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean))(Data_Array["null"])(rs$prime);
              if ($172) {
                  return rule$prime(sel)(rs$prime);
              };
              return Data_Maybe.Nothing.value;
          })();
          var nestedRules = function (a) {
              return rules(Data_Array.cons(a)(sel));
          };
          var nested = function (v) {
              if (v instanceof CSS_Stylesheet.Nested) {
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, v.value1));
              };
              return Data_Maybe.Nothing.value;
          };
          var nestedSheets = Data_Foldable.fold(Data_Foldable.foldableArray)(Data_Maybe.monoidMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(Data_Functor.map(Data_Functor.functorArray)(Data_Tuple.uncurry(nestedRules))(Data_Array.mapMaybe(nested)(rs)));
          var kframes = function (v) {
              if (v instanceof CSS_Stylesheet.Keyframe) {
                  return new Data_Maybe.Just(v.value0);
              };
              return Data_Maybe.Nothing.value;
          };
          var keyframeRules = Data_Foldable.foldMap(Data_Foldable.foldableArray)(Data_Maybe.monoidMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(kframe)(Data_Array.mapMaybe(kframes)(rs));
          var imports = function (v) {
              if (v instanceof CSS_Stylesheet.Import) {
                  return new Data_Maybe.Just(v.value0);
              };
              return Data_Maybe.Nothing.value;
          };
          var importRules = Data_Foldable.foldMap(Data_Foldable.foldableArray)(Data_Maybe.monoidMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(imp)(Data_Array.mapMaybe(imports)(rs));
          var faces = function (v) {
              if (v instanceof CSS_Stylesheet.Face) {
                  return new Data_Maybe.Just(v.value0);
              };
              return Data_Maybe.Nothing.value;
          };
          var faceRules = Data_Foldable.foldMap(Data_Foldable.foldableArray)(Data_Maybe.monoidMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(face)(Data_Array.mapMaybe(faces)(rs));
          return Data_Semigroup.append(Data_Maybe.semigroupMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(topRules)(Data_Semigroup.append(Data_Maybe.semigroupMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(importRules)(Data_Semigroup.append(Data_Maybe.semigroupMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(keyframeRules)(Data_Semigroup.append(Data_Maybe.semigroupMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(faceRules)(Data_Semigroup.append(Data_Maybe.semigroupMaybe(Data_These.semigroupThese(semigroupInline)(semigroupFile)))(nestedSheets)(queryRules)))));
      };
  };
  var query$prime = function (q) {
      return function (sel) {
          return function (rs) {
              return Data_Maybe.Just.create(Data_These.That.create(Sheet(mediaQuery(q) + (" { " + (Data_Maybe.fromMaybe("")(renderedSheet(rules(sel)(rs))) + " }\x0a")))));
          };
      };
  };
  var kframe = function (v) {
      var renderContent = " " + (v.value0 + (" { " + (Data_Foldable.intercalate(Data_NonEmpty.foldableNonEmpty(Data_Foldable.foldableArray))(Data_Monoid.monoidString)(" ")(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_Functor.functorArray))(Data_Tuple.uncurry(frame))(v.value1)) + " }\x0a")));
      var keywords = [ "@keyframes", "@-webkit-keyframes", "@-moz-keyframes", "@-o-keyframes" ];
      var allKeywordsWithContent = Data_Foldable.fold(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(Data_Functor.map(Data_Functor.functorArray)(function (v1) {
          return v1 + renderContent;
      })(keywords));
      return Data_Maybe.Just.create(Data_These.That.create(Sheet(allKeywordsWithContent)));
  };
  var frame = function (p) {
      return function (rs) {
          var x = Data_Maybe.fromMaybe("")(renderedInline(rules([  ])(rs)));
          return Data_Show.show(Data_Show.showNumber)(p) + ("% " + ("{ " + (x + " }")));
      };
  };
  var face = function (rs) {
      return Data_Maybe.Just.create(Data_These.That.create(Sheet("@font-face { " + (Data_Maybe.fromMaybe("")(renderedInline(rules([  ])(rs))) + " }\x0a"))));
  };
  var render = function ($191) {
      return rules([  ])(CSS_Stylesheet.runS($191));
  };
  exports["Inline"] = Inline;
  exports["getInline"] = getInline;
  exports["Sheet"] = Sheet;
  exports["getSheet"] = getSheet;
  exports["renderedInline"] = renderedInline;
  exports["renderedSheet"] = renderedSheet;
  exports["render"] = render;
  exports["kframe"] = kframe;
  exports["frame"] = frame;
  exports["mediaQuery"] = mediaQuery;
  exports["mediaType"] = mediaType;
  exports["feature"] = feature;
  exports["face"] = face;
  exports["rules"] = rules;
  exports["imp"] = imp;
  exports["selector"] = selector;
  exports["sepWith"] = sepWith;
  exports["collect"] = collect;
  exports["properties"] = properties;
  exports["merger"] = merger;
  exports["predicate"] = predicate;
  exports["nel"] = nel;
  exports["semigroupInline"] = semigroupInline;
  exports["semigroupFile"] = semigroupFile;
})(PS["CSS.Render"] = PS["CSS.Render"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];
  var ul = Text_Smolder_Markup.parent("ul");    
  var p = Text_Smolder_Markup.parent("p");              
  var nav = Text_Smolder_Markup.parent("nav");
  var li = Text_Smolder_Markup.parent("li");  
  var input = Text_Smolder_Markup.leaf("input");    
  var i = Text_Smolder_Markup.parent("i");  
  var h3 = Text_Smolder_Markup.parent("h3");
  var h2 = Text_Smolder_Markup.parent("h2");    
  var em = Text_Smolder_Markup.parent("em");
  var div = Text_Smolder_Markup.parent("div");
  var b = Text_Smolder_Markup.parent("b");      
  var a = Text_Smolder_Markup.parent("a");
  exports["a"] = a;
  exports["b"] = b;
  exports["div"] = div;
  exports["em"] = em;
  exports["h2"] = h2;
  exports["h3"] = h3;
  exports["i"] = i;
  exports["li"] = li;
  exports["nav"] = nav;
  exports["p"] = p;
  exports["ul"] = ul;
  exports["input"] = input;
})(PS["Text.Smolder.HTML"] = PS["Text.Smolder.HTML"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Pux.DOM.HTML"];
  var CSS_Render = PS["CSS.Render"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Control_Monad_Free = PS["Control.Monad.Free"];
  var Data_CatList = PS["Data.CatList"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Unit = PS["Data.Unit"];
  var Pux_DOM_Events = PS["Pux.DOM.Events"];
  var Text_Smolder_HTML = PS["Text.Smolder.HTML"];
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];
  var mapEvent = function (f) {
      return Text_Smolder_Markup.mapEvent(function (handler) {
          return function (event) {
              return f(handler(event));
          };
      });
  };
  exports["mapEvent"] = mapEvent;
})(PS["Pux.DOM.HTML"] = PS["Pux.DOM.HTML"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];
  var value = Text_Smolder_Markup.attribute("value");    
  var style = Text_Smolder_Markup.attribute("style");    
  var placeholder = Text_Smolder_Markup.attribute("placeholder");
  var href = Text_Smolder_Markup.attribute("href");
  var className = Text_Smolder_Markup.attribute("class");
  exports["className"] = className;
  exports["href"] = href;
  exports["placeholder"] = placeholder;
  exports["style"] = style;
  exports["value"] = value;
})(PS["Text.Smolder.HTML.Attributes"] = PS["Text.Smolder.HTML.Attributes"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Render = PS["CSS.Render"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Text_Smolder_HTML_Attributes = PS["Text.Smolder.HTML.Attributes"];
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];        
  var style = function (css) {
      return Text_Smolder_HTML_Attributes.style(Data_Maybe.fromMaybe("")(CSS_Render.renderedInline(CSS_Render.render(css))));
  };
  exports["style"] = style;
})(PS["Pux.DOM.HTML.Attributes"] = PS["Pux.DOM.HTML.Attributes"] || {});
(function(exports) {
    "use strict";
  var CSS = PS["CSS"];
  var CSS_Display = PS["CSS.Display"];
  var CSS_Geometry = PS["CSS.Geometry"];
  var CSS_Size = PS["CSS.Size"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Aff = PS["Control.Monad.Aff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var DOM = PS["DOM"];
  var DOM_Classy_HTMLElement = PS["DOM.Classy.HTMLElement"];
  var DOM_Classy_Node = PS["DOM.Classy.Node"];
  var DOM_Event_Event = PS["DOM.Event.Event"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var Data_Either = PS["Data.Either"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Prelude = PS["Prelude"];
  var Pux = PS["Pux"];
  var Pux_DOM_Events = PS["Pux.DOM.Events"];
  var Pux_DOM_HTML = PS["Pux.DOM.HTML"];
  var Pux_DOM_HTML_Attributes = PS["Pux.DOM.HTML.Attributes"];
  var Text_Smolder_HTML = PS["Text.Smolder.HTML"];
  var Text_Smolder_HTML_Attributes = PS["Text.Smolder.HTML.Attributes"];
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];        
  var Hide = (function () {
      function Hide() {

      };
      Hide.value = new Hide();
      return Hide;
  })();
  var Show = (function () {
      function Show(value0) {
          this.value0 = value0;
      };
      Show.create = function (value0) {
          return new Show(value0);
      };
      return Show;
  })();
  var Hover = (function () {
      function Hover(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Hover.create = function (value0) {
          return function (value1) {
              return new Hover(value0, value1);
          };
      };
      return Hover;
  })();
  var tooltipView = function (state) {
      if (state instanceof Data_Maybe.Just) {
          return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("tooltip")))(Pux_DOM_HTML_Attributes.style(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.top(CSS_Size.px(state.value0.top)))(function () {
              return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.left(CSS_Size.px(state.value0.left)))(function () {
                  return CSS_Display.position(CSS_Display.fixed);
              });
          })))(Text_Smolder_Markup.text(state.value0.text));
      };
      if (state instanceof Data_Maybe.Nothing) {
          return Text_Smolder_Markup.text("");
      };
      throw new Error("Failed pattern match at App.Tooltip line 65, column 3 - line 77, column 1: " + [ state.constructor.name ]);
  };
  var label = function (lbl) {
      return function (tooltip) {
          return Text_Smolder_Markup.withEvent(Text_Smolder_Markup.eventableMarkupMF)(Text_Smolder_Markup.withEvent(Text_Smolder_Markup.eventableMarkupMF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("tooltip-label")))(Pux_DOM_Events.onMouseEnter(Hover.create(tooltip))))(Pux_DOM_Events.onMouseLeave(Data_Function["const"](Hide.value)))(Text_Smolder_Markup.text(lbl));
      };
  };
  var init = Data_Maybe.Nothing.value;
  var foldp = function (v) {
      return function (v1) {
          if (v instanceof Hide) {
              return Pux.noEffects(Data_Maybe.Nothing.value);
          };
          if (v instanceof Show) {
              return Pux.noEffects(new Data_Maybe.Just(v.value0));
          };
          if (v instanceof Hover) {
              return {
                  state: v1,
                  effects: [ (function () {
                      var maybeEl = DOM_Classy_Node.fromNode(DOM_Classy_Node.isNodeHTMLElement)(DOM_Event_Event.currentTarget(v.value1));
                      if (maybeEl instanceof Data_Maybe.Just) {
                          return Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff["liftEff'"](DOM_Classy_HTMLElement.getBoundingClientRect(DOM_Classy_HTMLElement.isHTMLElementHTMLElement)(maybeEl.value0)))(function (v2) {
                              var maybePos = Data_Either.hush(v2);
                              return Control_Applicative.pure(Control_Monad_Aff.applicativeAff)(Data_Functor.map(Data_Maybe.functorMaybe)(function (v3) {
                                  return new Show({
                                      left: (v3.left + v3.right) / 2.0,
                                      top: v3.top - 45.0,
                                      text: v.value0
                                  });
                              })(maybePos));
                          });
                      };
                      if (maybeEl instanceof Data_Maybe.Nothing) {
                          return Control_Applicative.pure(Control_Monad_Aff.applicativeAff)(Data_Maybe.Nothing.value);
                      };
                      throw new Error("Failed pattern match at App.Tooltip line 51, column 11 - line 59, column 27: " + [ maybeEl.constructor.name ]);
                  })() ]
              };
          };
          throw new Error("Failed pattern match at App.Tooltip line 41, column 1 - line 41, column 72: " + [ v.constructor.name, v1.constructor.name ]);
      };
  };
  exports["init"] = init;
  exports["Hide"] = Hide;
  exports["Show"] = Show;
  exports["Hover"] = Hover;
  exports["foldp"] = foldp;
  exports["tooltipView"] = tooltipView;
  exports["label"] = label;
})(PS["App.Tooltip"] = PS["App.Tooltip"] || {});
(function(exports) {
    "use strict";

  function id(x) {
    return x;
  } 

  var objToString = Object.prototype.toString;

  function isArray(a) {
    return objToString.call(a) === "[object Array]";
  }

  exports._foldJson = function (isNull, isBool, isNum, isStr, isArr, isObj, j) {
    if (j == null) return isNull(null);
    else if (typeof j === "boolean") return isBool(j);
    else if (typeof j === "number") return isNum(j);
    else if (typeof j === "string") return isStr(j);
    else if (objToString.call(j) === "[object Array]")
      return isArr(j);
    else return isObj(j);
  };
})(PS["Data.Argonaut.Core"] = PS["Data.Argonaut.Core"] || {});
(function(exports) {
    "use strict";

  exports._copyEff = function (m) {
    return function () {
      var r = {};
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r[k] = m[k];
        }
      }
      return r;
    };
  };

  exports.empty = {};

  exports.runST = function (f) {
    return f;
  };

  exports._fmapStrMap = function (m0, f) {
    var m = {};
    for (var k in m0) {
      if (hasOwnProperty.call(m0, k)) {
        m[k] = f(m0[k]);
      }
    }
    return m;
  };

  exports._mapWithKey = function (m0, f) {
    var m = {};
    for (var k in m0) {
      if (hasOwnProperty.call(m0, k)) {
        m[k] = f(k)(m0[k]);
      }
    }
    return m;
  };

  exports._foldM = function (bind) {
    return function (f) {
      return function (mz) {
        return function (m) {
          var acc = mz;
          function g(k) {
            return function (z) {
              return f(z)(k)(m[k]);
            };
          }
          for (var k in m) {
            if (hasOwnProperty.call(m, k)) {
              acc = bind(acc)(g(k));
            }
          }
          return acc;
        };
      };
    };
  };

  exports._lookup = function (no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  };

  function toArrayWithKey(f) {
    return function (m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }

  exports.toArrayWithKey = toArrayWithKey;
})(PS["Data.StrMap"] = PS["Data.StrMap"] || {});
(function(exports) {
    "use strict";

  exports["new"] = function () {
    return {};
  };

  exports.poke = function (m) {
    return function (k) {
      return function (v) {
        return function () {
          m[k] = v;
          return m;
        };
      };
    };
  };
})(PS["Data.StrMap.ST"] = PS["Data.StrMap.ST"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.StrMap.ST"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Data_Maybe = PS["Data.Maybe"];
  exports["new"] = $foreign["new"];
  exports["poke"] = $foreign.poke;
})(PS["Data.StrMap.ST"] = PS["Data.StrMap.ST"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.StrMap"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap_ST = PS["Data.StrMap.ST"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Prelude = PS["Prelude"];        
  var values = $foreign.toArrayWithKey(function (v) {
      return function (v1) {
          return v1;
      };
  });                                                            
  var thawST = $foreign._copyEff;
  var pureST = function (f) {
      return Control_Monad_Eff.runPure($foreign.runST(f));
  };
  var mutate = function (f) {
      return function (m) {
          return pureST(function __do() {
              var v = thawST(m)();
              var v1 = f(v)();
              return v;
          });
      };
  };                                                                                                 
  var mapWithKey = function (f) {
      return function (m) {
          return $foreign._mapWithKey(m, f);
      };
  };
  var lookup = Data_Function_Uncurried.runFn4($foreign._lookup)(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
  var insert = function (k) {
      return function (v) {
          return mutate(function (s) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_StrMap_ST.poke(s)(k)(v));
          });
      };
  };
  var functorStrMap = new Data_Functor.Functor(function (f) {
      return function (m) {
          return $foreign._fmapStrMap(m, f);
      };
  });
  var functorWithIndexStrMap = new Data_FunctorWithIndex.FunctorWithIndex(function () {
      return functorStrMap;
  }, mapWithKey);
  var fromFoldable = function (dictFoldable) {
      return function (l) {
          return pureST(function __do() {
              var v = Data_StrMap_ST["new"]();
              Control_Monad_Eff.foreachE(Data_Array.fromFoldable(dictFoldable)(l))(function (v1) {
                  return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_StrMap_ST.poke(v)(v1.value0)(v1.value1));
              })();
              return v;
          });
      };
  };
  var fold = $foreign._foldM(Data_Function.applyFlipped);
  var foldMap = function (dictMonoid) {
      return function (f) {
          return fold(function (acc) {
              return function (k) {
                  return function (v) {
                      return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(k)(v));
                  };
              };
          })(Data_Monoid.mempty(dictMonoid));
      };
  };
  var foldableStrMap = new Data_Foldable.Foldable(function (dictMonoid) {
      return function (f) {
          return foldMap(dictMonoid)(Data_Function["const"](f));
      };
  }, function (f) {
      return fold(function (z) {
          return function (v) {
              return f(z);
          };
      });
  }, function (f) {
      return function (z) {
          return function (m) {
              return Data_Foldable.foldr(Data_Foldable.foldableArray)(f)(z)(values(m));
          };
      };
  });
  var foldableWithIndexStrMap = new Data_FoldableWithIndex.FoldableWithIndex(function () {
      return foldableStrMap;
  }, function (dictMonoid) {
      return foldMap(dictMonoid);
  }, function (f) {
      return fold(Data_Function.flip(f));
  }, function (f) {
      return function (z) {
          return function (m) {
              return Data_Foldable.foldr(Data_Foldable.foldableArray)(Data_Tuple.uncurry(f))(z)($foreign.toArrayWithKey(Data_Tuple.Tuple.create)(m));
          };
      };
  });
  var traversableWithIndexStrMap = new Data_TraversableWithIndex.TraversableWithIndex(function () {
      return foldableWithIndexStrMap;
  }, function () {
      return functorWithIndexStrMap;
  }, function () {
      return traversableStrMap;
  }, function (dictApplicative) {
      return function (f) {
          return function (ms) {
              return fold(function (acc) {
                  return function (k) {
                      return function (v) {
                          return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Function.flip(insert(k)))(acc))(f(k)(v));
                      };
                  };
              })(Control_Applicative.pure(dictApplicative)($foreign.empty))(ms);
          };
      };
  });
  var traversableStrMap = new Data_Traversable.Traversable(function () {
      return foldableStrMap;
  }, function () {
      return functorStrMap;
  }, function (dictApplicative) {
      return Data_Traversable.traverse(traversableStrMap)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
  }, function (dictApplicative) {
      return function ($48) {
          return Data_TraversableWithIndex.traverseWithIndex(traversableWithIndexStrMap)(dictApplicative)(Data_Function["const"]($48));
      };
  });
  exports["insert"] = insert;
  exports["lookup"] = lookup;
  exports["fromFoldable"] = fromFoldable;
  exports["mapWithKey"] = mapWithKey;
  exports["values"] = values;
  exports["fold"] = fold;
  exports["foldMap"] = foldMap;
  exports["thawST"] = thawST;
  exports["pureST"] = pureST;
  exports["functorStrMap"] = functorStrMap;
  exports["functorWithIndexStrMap"] = functorWithIndexStrMap;
  exports["foldableStrMap"] = foldableStrMap;
  exports["foldableWithIndexStrMap"] = foldableWithIndexStrMap;
  exports["traversableStrMap"] = traversableStrMap;
  exports["traversableWithIndexStrMap"] = traversableWithIndexStrMap;
})(PS["Data.StrMap"] = PS["Data.StrMap"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Argonaut.Core"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap = PS["Data.StrMap"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var verbJsonType = function (def) {
      return function (f) {
          return function (fold) {
              return fold(def)(f);
          };
      };
  };
  var toJsonType = verbJsonType(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
  var foldJsonString = function (d) {
      return function (f) {
          return function (j) {
              return $foreign._foldJson(Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), f, Data_Function["const"](d), Data_Function["const"](d), j);
          };
      };
  };                                        
  var foldJsonObject = function (d) {
      return function (f) {
          return function (j) {
              return $foreign._foldJson(Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), f, j);
          };
      };
  };                                        
  var toObject = toJsonType(foldJsonObject);
  var foldJsonNumber = function (d) {
      return function (f) {
          return function (j) {
              return $foreign._foldJson(Data_Function["const"](d), Data_Function["const"](d), f, Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), j);
          };
      };
  };                                          
  var foldJsonArray = function (d) {
      return function (f) {
          return function (j) {
              return $foreign._foldJson(Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), f, Data_Function["const"](d), j);
          };
      };
  };                                      
  var toArray = toJsonType(foldJsonArray);
  exports["foldJsonNumber"] = foldJsonNumber;
  exports["foldJsonString"] = foldJsonString;
  exports["foldJsonArray"] = foldJsonArray;
  exports["foldJsonObject"] = foldJsonObject;
  exports["toArray"] = toArray;
  exports["toObject"] = toObject;
})(PS["Data.Argonaut.Core"] = PS["Data.Argonaut.Core"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Argonaut_Core = PS["Data.Argonaut.Core"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Either = PS["Data.Either"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Int = PS["Data.Int"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Map = PS["Data.Map"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap = PS["Data.StrMap"];
  var Data_String = PS["Data.String"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var DecodeJson = function (decodeJson) {
      this.decodeJson = decodeJson;
  }; 
  var decodeJsonString = new DecodeJson(Data_Argonaut_Core.foldJsonString(new Data_Either.Left("Value is not a String"))(Data_Either.Right.create));
  var decodeJsonNumber = new DecodeJson(Data_Argonaut_Core.foldJsonNumber(new Data_Either.Left("Value is not a Number"))(Data_Either.Right.create));                               
  var decodeJsonJson = new DecodeJson(Data_Either.Right.create);                                                                                       
  var decodeJson = function (dict) {
      return dict.decodeJson;
  }; 
  var decodeJsonInt = new DecodeJson(Control_Bind.composeKleisliFlipped(Data_Either.bindEither)(function ($32) {
      return Data_Maybe.maybe(new Data_Either.Left("Value is not an integer"))(Data_Either.Right.create)(Data_Int.fromNumber($32));
  })(decodeJson(decodeJsonNumber)));
  var decodeJObject = function ($33) {
      return Data_Maybe.maybe(new Data_Either.Left("Value is not an Object"))(Data_Either.Right.create)(Data_Argonaut_Core.toObject($33));
  };
  var decodeStrMap = function (dictDecodeJson) {
      return new DecodeJson(function ($34) {
          return Data_Bifunctor.lmap(Data_Either.bifunctorEither)(function (v) {
              return "Couldn't decode StrMap: " + v;
          })(Control_Bind.composeKleisliFlipped(Data_Either.bindEither)(Data_Traversable.traverse(Data_StrMap.traversableStrMap)(Data_Either.applicativeEither)(decodeJson(dictDecodeJson)))(decodeJObject)($34));
      });
  };
  var decodeJArray = function ($35) {
      return Data_Maybe.maybe(new Data_Either.Left("Value is not an Array"))(Data_Either.Right.create)(Data_Argonaut_Core.toArray($35));
  };
  var decodeList = function (dictDecodeJson) {
      return new DecodeJson(function ($36) {
          return Data_Bifunctor.lmap(Data_Either.bifunctorEither)(function (v) {
              return "Couldn't decode List: " + v;
          })(Control_Bind.composeKleisliFlipped(Data_Either.bindEither)(Data_Traversable.traverse(Data_List_Types.traversableList)(Data_Either.applicativeEither)(decodeJson(dictDecodeJson)))(Data_Functor.map(Data_Functor.functorFn)(Data_Functor.map(Data_Either.functorEither)(Data_List.fromFoldable(Data_Foldable.foldableArray)))(decodeJArray))($36));
      });
  };
  exports["DecodeJson"] = DecodeJson;
  exports["decodeJson"] = decodeJson;
  exports["decodeJsonNumber"] = decodeJsonNumber;
  exports["decodeJsonInt"] = decodeJsonInt;
  exports["decodeJsonString"] = decodeJsonString;
  exports["decodeJsonJson"] = decodeJsonJson;
  exports["decodeStrMap"] = decodeStrMap;
  exports["decodeList"] = decodeList;
})(PS["Data.Argonaut.Decode.Class"] = PS["Data.Argonaut.Decode.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Data_Argonaut_Core = PS["Data.Argonaut.Core"];
  var Data_Argonaut_Decode_Class = PS["Data.Argonaut.Decode.Class"];
  var Data_Either = PS["Data.Either"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap = PS["Data.StrMap"];
  var Prelude = PS["Prelude"];
  var getField = function (dictDecodeJson) {
      return function (o) {
          return function (s) {
              return Data_Maybe.maybe(Data_Either.Left.create("Expected field " + Data_Show.show(Data_Show.showString)(s)))(Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson))(Data_StrMap.lookup(s)(o));
          };
      };
  };
  exports["getField"] = getField;
})(PS["Data.Argonaut.Decode.Combinators"] = PS["Data.Argonaut.Decode.Combinators"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Generic = PS["Data.Generic"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Lens = PS["Data.Lens"];
  var Data_Lens_Internal_Market = PS["Data.Lens.Internal.Market"];
  var Data_Lens_Prism = PS["Data.Lens.Prism"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];        
  var NotAsked = (function () {
      function NotAsked() {

      };
      NotAsked.value = new NotAsked();
      return NotAsked;
  })();
  var Loading = (function () {
      function Loading() {

      };
      Loading.value = new Loading();
      return Loading;
  })();
  var Success = (function () {
      function Success(value0) {
          this.value0 = value0;
      };
      Success.create = function (value0) {
          return new Success(value0);
      };
      return Success;
  })();
  exports["NotAsked"] = NotAsked;
  exports["Loading"] = Loading;
  exports["Success"] = Success;
})(PS["Network.RemoteData"] = PS["Network.RemoteData"] || {});
(function(exports) {
    "use strict";
  var App_Measurement = PS["App.Measurement"];
  var App_Routes = PS["App.Routes"];
  var App_Tooltip = PS["App.Tooltip"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Argonaut = PS["Data.Argonaut"];
  var Data_Argonaut_Decode_Class = PS["Data.Argonaut.Decode.Class"];
  var Data_Argonaut_Decode_Combinators = PS["Data.Argonaut.Decode.Combinators"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_Map = PS["Data.Map"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Network_RemoteData = PS["Network.RemoteData"];
  var Prelude = PS["Prelude"];        
  var FoodId = function (x) {
      return x;
  };
  var IngredientAmount = function (x) {
      return x;
  };
  var IngredientComp = (function () {
      function IngredientComp(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      IngredientComp.create = function (value0) {
          return function (value1) {
              return new IngredientComp(value0, value1);
          };
      };
      return IngredientComp;
  })();
  var RecipeComp = (function () {
      function RecipeComp(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      RecipeComp.create = function (value0) {
          return function (value1) {
              return new RecipeComp(value0, value1);
          };
      };
      return RecipeComp;
  })();     
  var newtypeIngredientAmount = new Data_Newtype.Newtype(function (n) {
      return n;
  }, IngredientAmount);
  var init = {
      recipes: Network_RemoteData.NotAsked.value,
      view: App_Routes.Home.value,
      tooltip: App_Tooltip.init,
      drawerOpened: false
  };
  var eqFoodId = new Data_Eq.Eq(function (x) {
      return function (y) {
          return x === y;
      };
  });
  var ordFoodId = new Data_Ord.Ord(function () {
      return eqFoodId;
  }, function (x) {
      return function (y) {
          return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
      };
  });
  var decodeJsonIngredientAmount = new Data_Argonaut_Decode_Class.DecodeJson(function (json) {
      return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Class.decodeJson(Data_Argonaut_Decode_Class.decodeStrMap(Data_Argonaut_Decode_Class.decodeJsonJson))(json))(function (v) {
          return Control_Bind.bind(Data_Either.bindEither)(Data_Functor.map(Data_Either.functorEither)(FoodId)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonInt)(v)("ingredient")))(function (v1) {
              return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonNumber)(v)("amount"))(function (v2) {
                  return Control_Bind.bind(Data_Either.bindEither)(Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("unit_type"))(App_Measurement.parse))(function (v3) {
                      return Control_Applicative.pure(Data_Either.applicativeEither)({
                          ingredient: v1,
                          amount: v2,
                          unitType: v3
                      });
                  });
              });
          });
      });
  });
  var decodeRecipe = function (json) {
      return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Class.decodeJson(Data_Argonaut_Decode_Class.decodeStrMap(Data_Argonaut_Decode_Class.decodeJsonJson))(json))(function (v) {
          return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("name"))(function (v1) {
              return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("category"))(function (v2) {
                  return Control_Bind.bind(Data_Either.bindEither)(Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonJson)(v)("ingredients"))(Data_Argonaut_Decode_Class.decodeJson(Data_Argonaut_Decode_Class.decodeList(decodeJsonIngredientAmount))))(function (v3) {
                      return Control_Bind.bind(Data_Either.bindEither)(Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("unit_type"))(App_Measurement.parse))(function (v4) {
                          return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonNumber)(v)("amount"))(function (v5) {
                              return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("directions"))(function (v6) {
                                  return Control_Applicative.pure(Data_Either.applicativeEither)({
                                      name: v1,
                                      category: v2,
                                      ingredients: v3,
                                      unitType: v4,
                                      amount: v5,
                                      directions: v6
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  };
  var decodeIngredient = function (json) {
      return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Class.decodeJson(Data_Argonaut_Decode_Class.decodeStrMap(Data_Argonaut_Decode_Class.decodeJsonJson))(json))(function (v) {
          return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("name"))(function (v1) {
              return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonNumber)(v)("unit_cost"))(function (v2) {
                  return Control_Bind.bind(Data_Either.bindEither)(Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("unit_type"))(App_Measurement.parse))(function (v3) {
                      return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonNumber)(v)("amount"))(function (v4) {
                          return Control_Applicative.pure(Data_Either.applicativeEither)({
                              name: v1,
                              unitCost: v2,
                              unitType: v3,
                              amount: v4
                          });
                      });
                  });
              });
          });
      });
  };
  var decodeRecipeComponent = new Data_Argonaut_Decode_Class.DecodeJson(function (json) {
      return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Class.decodeJson(Data_Argonaut_Decode_Class.decodeStrMap(Data_Argonaut_Decode_Class.decodeJsonJson))(json))(function (v) {
          return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonString)(v)("component_type"))(function (v1) {
              return Control_Bind.bind(Data_Either.bindEither)(Data_Functor.map(Data_Either.functorEither)(FoodId)(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonInt)(v)("id")))(function (v2) {
                  if (v1 === "I") {
                      return Control_Bind.bind(Data_Either.bindEither)(decodeIngredient(json))(function (v3) {
                          return Control_Applicative.pure(Data_Either.applicativeEither)(new IngredientComp(v2, v3));
                      });
                  };
                  if (v1 === "R") {
                      return Control_Bind.bind(Data_Either.bindEither)(decodeRecipe(json))(function (v3) {
                          return Control_Applicative.pure(Data_Either.applicativeEither)(new RecipeComp(v2, v3));
                      });
                  };
                  return Data_Either.Left.create("Expected 'I' or 'R', but got'" + (v1 + "'"));
              });
          });
      });
  });
  exports["FoodId"] = FoodId;
  exports["decodeIngredient"] = decodeIngredient;
  exports["IngredientAmount"] = IngredientAmount;
  exports["decodeRecipe"] = decodeRecipe;
  exports["IngredientComp"] = IngredientComp;
  exports["RecipeComp"] = RecipeComp;
  exports["init"] = init;
  exports["eqFoodId"] = eqFoodId;
  exports["ordFoodId"] = ordFoodId;
  exports["newtypeIngredientAmount"] = newtypeIngredientAmount;
  exports["decodeJsonIngredientAmount"] = decodeJsonIngredientAmount;
  exports["decodeRecipeComponent"] = decodeRecipeComponent;
})(PS["App.State"] = PS["App.State"] || {});
(function(exports) {
  /* global exports */
  /* global XMLHttpRequest */
  /* global module */
  /* global process */
  "use strict";

  // module Network.HTTP.Affjax

  // jshint maxparams: 5
  exports._ajax = function (mkHeader, options, canceler, errback, callback) {
    var platformSpecific = { };
    if (typeof module !== "undefined" && module.require && !(typeof process !== "undefined" && process.versions["electron"])) {
      // We are on node.js
      platformSpecific.newXHR = function () {
        var XHR = module.require("xhr2");
        return new XHR();
      };

      platformSpecific.fixupUrl = function (url) {
        var urllib = module.require("url");
        var u = urllib.parse(url);
        u.protocol = u.protocol || "http:";
        u.hostname = u.hostname || "localhost";
        return urllib.format(u);
      };

      platformSpecific.getResponse = function (xhr) {
        return xhr.response;
      };
    } else {
      // We are in the browser
      platformSpecific.newXHR = function () {
        return new XMLHttpRequest();
      };

      platformSpecific.fixupUrl = function (url) {
        return url || "/";
      };

      platformSpecific.getResponse = function (xhr) {
        return xhr.response;
      };
    }

    return function () {
      var xhr = platformSpecific.newXHR();
      var fixedUrl = platformSpecific.fixupUrl(options.url);
      xhr.open(options.method || "GET", fixedUrl, true, options.username, options.password);
      if (options.headers) {
        try {
          for (var i = 0, header; (header = options.headers[i]) != null; i++) {
            xhr.setRequestHeader(header.field, header.value);
          }
        }
        catch (e) {
          errback(e)();
        }
      }
      xhr.onerror = function () {
        errback(new Error("AJAX request failed: " + options.method + " " + options.url))();
      };
      xhr.onload = function () {
        callback({
          status: xhr.status,
          headers: xhr.getAllResponseHeaders().split("\r\n")
            .filter(function (header) {
              return header.length > 0;
            })
            .map(function (header) {
              var i = header.indexOf(":");
              return mkHeader(header.substring(0, i))(header.substring(i + 2));
            }),
          response: platformSpecific.getResponse(xhr)
        })();
      };
      xhr.responseType = options.responseType;
      xhr.withCredentials = options.withCredentials;
      xhr.send(options.content);
      return canceler(xhr);
    };
  };

  // jshint maxparams: 4
  exports._cancelAjax = function (xhr, cancelError, errback, callback) {
    return function () {
      try { xhr.abort(); } catch (e) { return callback(false)(); }
      return callback(true)();
    };
  };
})(PS["Network.HTTP.Affjax"] = PS["Network.HTTP.Affjax"] || {});
(function(exports) {
    "use strict";

  exports._jsonParser = function (fail, succ, s) {
    try {
      return succ(JSON.parse(s));
    }
    catch (e) {
      return fail(e.message);
    }
  };
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Argonaut.Parser"];
  var Data_Argonaut_Core = PS["Data.Argonaut.Core"];
  var Data_Either = PS["Data.Either"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];        
  var jsonParser = function (j) {
      return $foreign._jsonParser(Data_Either.Left.create, Data_Either.Right.create, j);
  };
  exports["jsonParser"] = jsonParser;
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Generic = PS["Data.Generic"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var OPTIONS = (function () {
      function OPTIONS() {

      };
      OPTIONS.value = new OPTIONS();
      return OPTIONS;
  })();
  var GET = (function () {
      function GET() {

      };
      GET.value = new GET();
      return GET;
  })();
  var HEAD = (function () {
      function HEAD() {

      };
      HEAD.value = new HEAD();
      return HEAD;
  })();
  var POST = (function () {
      function POST() {

      };
      POST.value = new POST();
      return POST;
  })();
  var PUT = (function () {
      function PUT() {

      };
      PUT.value = new PUT();
      return PUT;
  })();
  var DELETE = (function () {
      function DELETE() {

      };
      DELETE.value = new DELETE();
      return DELETE;
  })();
  var TRACE = (function () {
      function TRACE() {

      };
      TRACE.value = new TRACE();
      return TRACE;
  })();
  var CONNECT = (function () {
      function CONNECT() {

      };
      CONNECT.value = new CONNECT();
      return CONNECT;
  })();
  var PROPFIND = (function () {
      function PROPFIND() {

      };
      PROPFIND.value = new PROPFIND();
      return PROPFIND;
  })();
  var PROPPATCH = (function () {
      function PROPPATCH() {

      };
      PROPPATCH.value = new PROPPATCH();
      return PROPPATCH;
  })();
  var MKCOL = (function () {
      function MKCOL() {

      };
      MKCOL.value = new MKCOL();
      return MKCOL;
  })();
  var COPY = (function () {
      function COPY() {

      };
      COPY.value = new COPY();
      return COPY;
  })();
  var MOVE = (function () {
      function MOVE() {

      };
      MOVE.value = new MOVE();
      return MOVE;
  })();
  var LOCK = (function () {
      function LOCK() {

      };
      LOCK.value = new LOCK();
      return LOCK;
  })();
  var UNLOCK = (function () {
      function UNLOCK() {

      };
      UNLOCK.value = new UNLOCK();
      return UNLOCK;
  })();
  var PATCH = (function () {
      function PATCH() {

      };
      PATCH.value = new PATCH();
      return PATCH;
  })();
  var unCustomMethod = function (v) {
      return v;
  };
  var showMethod = new Data_Show.Show(function (v) {
      if (v instanceof OPTIONS) {
          return "OPTIONS";
      };
      if (v instanceof GET) {
          return "GET";
      };
      if (v instanceof HEAD) {
          return "HEAD";
      };
      if (v instanceof POST) {
          return "POST";
      };
      if (v instanceof PUT) {
          return "PUT";
      };
      if (v instanceof DELETE) {
          return "DELETE";
      };
      if (v instanceof TRACE) {
          return "TRACE";
      };
      if (v instanceof CONNECT) {
          return "CONNECT";
      };
      if (v instanceof PROPFIND) {
          return "PROPFIND";
      };
      if (v instanceof PROPPATCH) {
          return "PROPPATCH";
      };
      if (v instanceof MKCOL) {
          return "MKCOL";
      };
      if (v instanceof COPY) {
          return "COPY";
      };
      if (v instanceof MOVE) {
          return "MOVE";
      };
      if (v instanceof LOCK) {
          return "LOCK";
      };
      if (v instanceof UNLOCK) {
          return "UNLOCK";
      };
      if (v instanceof PATCH) {
          return "PATCH";
      };
      throw new Error("Failed pattern match at Data.HTTP.Method line 42, column 1 - line 42, column 35: " + [ v.constructor.name ]);
  });
  var print = Data_Either.either(Data_Show.show(showMethod))(unCustomMethod);
  exports["OPTIONS"] = OPTIONS;
  exports["GET"] = GET;
  exports["HEAD"] = HEAD;
  exports["POST"] = POST;
  exports["PUT"] = PUT;
  exports["DELETE"] = DELETE;
  exports["TRACE"] = TRACE;
  exports["CONNECT"] = CONNECT;
  exports["PROPFIND"] = PROPFIND;
  exports["PROPPATCH"] = PROPPATCH;
  exports["MKCOL"] = MKCOL;
  exports["COPY"] = COPY;
  exports["MOVE"] = MOVE;
  exports["LOCK"] = LOCK;
  exports["UNLOCK"] = UNLOCK;
  exports["PATCH"] = PATCH;
  exports["unCustomMethod"] = unCustomMethod;
  exports["print"] = print;
  exports["showMethod"] = showMethod;
})(PS["Data.HTTP.Method"] = PS["Data.HTTP.Method"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Generic = PS["Data.Generic"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var MediaType = function (x) {
      return x;
  }; 
  var newtypeMediaType = new Data_Newtype.Newtype(function (n) {
      return n;
  }, MediaType);
  exports["MediaType"] = MediaType;
  exports["newtypeMediaType"] = newtypeMediaType;
})(PS["Data.MediaType"] = PS["Data.MediaType"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_MediaType = PS["Data.MediaType"];           
  var applicationJSON = "application/json";
  exports["applicationJSON"] = applicationJSON;
})(PS["Data.MediaType.Common"] = PS["Data.MediaType.Common"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM_File_Types = PS["DOM.File.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var DOM_XHR_Types = PS["DOM.XHR.Types"];
  var Data_Argonaut_Core = PS["Data.Argonaut.Core"];
  var Data_ArrayBuffer_Types = PS["Data.ArrayBuffer.Types"];
  var Data_FormURLEncoded = PS["Data.FormURLEncoded"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_MediaType = PS["Data.MediaType"];
  var Data_MediaType_Common = PS["Data.MediaType.Common"];
  var Data_Show = PS["Data.Show"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var Requestable = function (toRequest) {
      this.toRequest = toRequest;
  };
  var toRequest = function (dict) {
      return dict.toRequest;
  }; 
  var defaultToRequest = function ($0) {
      return Data_Tuple.Tuple.create(Data_Maybe.Nothing.value)($0);
  };                                                                   
  var requestableUnit = new Requestable(defaultToRequest);
  exports["Requestable"] = Requestable;
  exports["toRequest"] = toRequest;
  exports["requestableUnit"] = requestableUnit;
})(PS["Network.HTTP.Affjax.Request"] = PS["Network.HTTP.Affjax.Request"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM_File_Types = PS["DOM.File.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Argonaut_Core = PS["Data.Argonaut.Core"];
  var Data_ArrayBuffer_Types = PS["Data.ArrayBuffer.Types"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Function = PS["Data.Function"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_MediaType = PS["Data.MediaType"];
  var Data_MediaType_Common = PS["Data.MediaType.Common"];
  var Data_Show = PS["Data.Show"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var ArrayBufferResponse = (function () {
      function ArrayBufferResponse() {

      };
      ArrayBufferResponse.value = new ArrayBufferResponse();
      return ArrayBufferResponse;
  })();
  var BlobResponse = (function () {
      function BlobResponse() {

      };
      BlobResponse.value = new BlobResponse();
      return BlobResponse;
  })();
  var DocumentResponse = (function () {
      function DocumentResponse() {

      };
      DocumentResponse.value = new DocumentResponse();
      return DocumentResponse;
  })();
  var JSONResponse = (function () {
      function JSONResponse() {

      };
      JSONResponse.value = new JSONResponse();
      return JSONResponse;
  })();
  var StringResponse = (function () {
      function StringResponse() {

      };
      StringResponse.value = new StringResponse();
      return StringResponse;
  })();
  var Respondable = function (fromResponse, responseType) {
      this.fromResponse = fromResponse;
      this.responseType = responseType;
  }; 
  var responseTypeToString = function (v) {
      if (v instanceof ArrayBufferResponse) {
          return "arraybuffer";
      };
      if (v instanceof BlobResponse) {
          return "blob";
      };
      if (v instanceof DocumentResponse) {
          return "document";
      };
      if (v instanceof JSONResponse) {
          return "text";
      };
      if (v instanceof StringResponse) {
          return "text";
      };
      throw new Error("Failed pattern match at Network.HTTP.Affjax.Response line 48, column 1 - line 48, column 61: " + [ v.constructor.name ]);
  };
  var responseType = function (dict) {
      return dict.responseType;
  };                                                                                                                                     
  var responsableJson = new Respondable(function ($8) {
      return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))($8);
  }, new Data_Tuple.Tuple(new Data_Maybe.Just(Data_MediaType_Common.applicationJSON), JSONResponse.value));                                                             
  var fromResponse = function (dict) {
      return dict.fromResponse;
  };
  exports["ArrayBufferResponse"] = ArrayBufferResponse;
  exports["BlobResponse"] = BlobResponse;
  exports["DocumentResponse"] = DocumentResponse;
  exports["JSONResponse"] = JSONResponse;
  exports["StringResponse"] = StringResponse;
  exports["responseTypeToString"] = responseTypeToString;
  exports["Respondable"] = Respondable;
  exports["responseType"] = responseType;
  exports["fromResponse"] = fromResponse;
  exports["responsableJson"] = responsableJson;
})(PS["Network.HTTP.Affjax.Response"] = PS["Network.HTTP.Affjax.Response"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Eq = PS["Data.Eq"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_MediaType = PS["Data.MediaType"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];        
  var Accept = (function () {
      function Accept(value0) {
          this.value0 = value0;
      };
      Accept.create = function (value0) {
          return new Accept(value0);
      };
      return Accept;
  })();
  var ContentType = (function () {
      function ContentType(value0) {
          this.value0 = value0;
      };
      ContentType.create = function (value0) {
          return new ContentType(value0);
      };
      return ContentType;
  })();
  var RequestHeader = (function () {
      function RequestHeader(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      RequestHeader.create = function (value0) {
          return function (value1) {
              return new RequestHeader(value0, value1);
          };
      };
      return RequestHeader;
  })();
  var requestHeaderValue = function (v) {
      if (v instanceof Accept) {
          return Data_Newtype.unwrap(Data_MediaType.newtypeMediaType)(v.value0);
      };
      if (v instanceof ContentType) {
          return Data_Newtype.unwrap(Data_MediaType.newtypeMediaType)(v.value0);
      };
      if (v instanceof RequestHeader) {
          return v.value1;
      };
      throw new Error("Failed pattern match at Network.HTTP.RequestHeader line 29, column 1 - line 29, column 46: " + [ v.constructor.name ]);
  };
  var requestHeaderName = function (v) {
      if (v instanceof Accept) {
          return "Accept";
      };
      if (v instanceof ContentType) {
          return "Content-Type";
      };
      if (v instanceof RequestHeader) {
          return v.value0;
      };
      throw new Error("Failed pattern match at Network.HTTP.RequestHeader line 24, column 1 - line 24, column 45: " + [ v.constructor.name ]);
  };
  exports["Accept"] = Accept;
  exports["ContentType"] = ContentType;
  exports["RequestHeader"] = RequestHeader;
  exports["requestHeaderName"] = requestHeaderName;
  exports["requestHeaderValue"] = requestHeaderValue;
})(PS["Network.HTTP.RequestHeader"] = PS["Network.HTTP.RequestHeader"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Generic = PS["Data.Generic"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var ResponseHeader = (function () {
      function ResponseHeader(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      ResponseHeader.create = function (value0) {
          return function (value1) {
              return new ResponseHeader(value0, value1);
          };
      };
      return ResponseHeader;
  })();
  var responseHeader = function (field) {
      return function (value) {
          return new ResponseHeader(field, value);
      };
  };
  exports["responseHeader"] = responseHeader;
})(PS["Network.HTTP.ResponseHeader"] = PS["Network.HTTP.ResponseHeader"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Network.HTTP.Affjax"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Aff = PS["Control.Monad.Aff"];
  var Control_Monad_Aff_AVar = PS["Control.Monad.Aff.AVar"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var Control_Monad_Eff_Ref = PS["Control.Monad.Eff.Ref"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Except = PS["Control.Monad.Except"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM_XHR_Types = PS["DOM.XHR.Types"];
  var Data_Argonaut_Parser = PS["Data.Argonaut.Parser"];
  var Data_Array = PS["Data.Array"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HTTP_Method = PS["Data.HTTP.Method"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Int = PS["Data.Int"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_MediaType = PS["Data.MediaType"];
  var Data_Nullable = PS["Data.Nullable"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Time_Duration = PS["Data.Time.Duration"];
  var Data_Tuple = PS["Data.Tuple"];
  var $$Math = PS["Math"];
  var Network_HTTP_Affjax_Request = PS["Network.HTTP.Affjax.Request"];
  var Network_HTTP_Affjax_Response = PS["Network.HTTP.Affjax.Response"];
  var Network_HTTP_RequestHeader = PS["Network.HTTP.RequestHeader"];
  var Network_HTTP_ResponseHeader = PS["Network.HTTP.ResponseHeader"];
  var Network_HTTP_StatusCode = PS["Network.HTTP.StatusCode"];
  var Prelude = PS["Prelude"];
  var defaultRequest = {
      method: new Data_Either.Left(Data_HTTP_Method.GET.value),
      url: "/",
      headers: [  ],
      content: Data_Maybe.Nothing.value,
      username: Data_Maybe.Nothing.value,
      password: Data_Maybe.Nothing.value,
      withCredentials: false
  };
  var cancelAjax = function (xhr) {
      return function (err) {
          return Control_Monad_Aff.makeAff(function (eb) {
              return function (cb) {
                  return $foreign._cancelAjax(xhr, err, eb, cb);
              };
          });
      };
  };
  var affjax$prime = function (dictRequestable) {
      return function (dictRespondable) {
          return function (req) {
              return function (eb) {
                  return function (cb) {
                      var responseSettings = Network_HTTP_Affjax_Response.responseType(dictRespondable);
                      var requestSettings = (function () {
                          var v = Data_Functor.map(Data_Maybe.functorMaybe)(Network_HTTP_Affjax_Request.toRequest(dictRequestable))(req.content);
                          if (v instanceof Data_Maybe.Nothing) {
                              return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, Data_Maybe.Nothing.value);
                          };
                          if (v instanceof Data_Maybe.Just) {
                              return new Data_Tuple.Tuple(v.value0.value0, new Data_Maybe.Just(v.value0.value1));
                          };
                          throw new Error("Failed pattern match at Network.HTTP.Affjax line 262, column 21 - line 264, column 49: " + [ v.constructor.name ]);
                      })();
                      var parseJSON = function ($105) {
                          return Data_Either.either(function ($106) {
                              return Data_Foreign.fail(Data_Foreign.JSONError.create($106));
                          })(function ($107) {
                              return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))(Data_Foreign.toForeign($107));
                          })(Data_Argonaut_Parser.jsonParser($105));
                      };
                      var fromResponse$prime = (function () {
                          var v = Data_Tuple.snd(responseSettings);
                          if (v instanceof Network_HTTP_Affjax_Response.JSONResponse) {
                              return Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(Network_HTTP_Affjax_Response.fromResponse(dictRespondable))(Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(parseJSON)(Data_Foreign.readString));
                          };
                          return Network_HTTP_Affjax_Response.fromResponse(dictRespondable);
                      })();
                      var cb$prime = function (res) {
                          var v = Data_Functor.map(Data_Either.functorEither)(function (v1) {
                              var $72 = {};
                              for (var $73 in res) {
                                  if ({}.hasOwnProperty.call(res, $73)) {
                                      $72[$73] = res[$73];
                                  };
                              };
                              $72.response = v1;
                              return $72;
                          })(Control_Monad_Except.runExcept(fromResponse$prime(res.response)));
                          if (v instanceof Data_Either.Left) {
                              return eb(Control_Monad_Eff_Exception.error(Data_Show.show(Data_List_Types.showNonEmptyList(Data_Foreign.showForeignError))(v.value0)));
                          };
                          if (v instanceof Data_Either.Right) {
                              return cb(v.value0);
                          };
                          throw new Error("Failed pattern match at Network.HTTP.Affjax line 281, column 13 - line 283, column 26: " + [ v.constructor.name ]);
                      };
                      var addHeader = function (mh) {
                          return function (hs) {
                              if (mh instanceof Data_Maybe.Just && !Data_Foldable.any(Data_Foldable.foldableArray)(Data_HeytingAlgebra.heytingAlgebraBoolean)(Data_Function.on(Data_Eq.eq(Data_Eq.eqString))(Network_HTTP_RequestHeader.requestHeaderName)(mh.value0))(hs)) {
                                  return Data_Array.snoc(hs)(mh.value0);
                              };
                              return hs;
                          };
                      };
                      var headers = addHeader(Data_Functor.map(Data_Maybe.functorMaybe)(Network_HTTP_RequestHeader.ContentType.create)(Data_Tuple.fst(requestSettings)))(addHeader(Data_Functor.map(Data_Maybe.functorMaybe)(Network_HTTP_RequestHeader.Accept.create)(Data_Tuple.fst(responseSettings)))(req.headers));
                      var req$prime = {
                          method: Data_HTTP_Method.print(req.method),
                          url: req.url,
                          headers: Data_Functor.map(Data_Functor.functorArray)(function (h) {
                              return {
                                  field: Network_HTTP_RequestHeader.requestHeaderName(h),
                                  value: Network_HTTP_RequestHeader.requestHeaderValue(h)
                              };
                          })(headers),
                          content: Data_Nullable.toNullable(Data_Tuple.snd(requestSettings)),
                          responseType: Network_HTTP_Affjax_Response.responseTypeToString(Data_Tuple.snd(responseSettings)),
                          username: Data_Nullable.toNullable(req.username),
                          password: Data_Nullable.toNullable(req.password),
                          withCredentials: req.withCredentials
                      };
                      return $foreign._ajax(Network_HTTP_ResponseHeader.responseHeader, req$prime, cancelAjax, eb, cb$prime);
                  };
              };
          };
      };
  };
  var affjax = function (dictRequestable) {
      return function (dictRespondable) {
          return function ($108) {
              return Control_Monad_Aff["makeAff'"](affjax$prime(dictRequestable)(dictRespondable)($108));
          };
      };
  };                                                                   
  var get = function (dictRespondable) {
      return function (u) {
          return affjax(Network_HTTP_Affjax_Request.requestableUnit)(dictRespondable)((function () {
              var $83 = {};
              for (var $84 in defaultRequest) {
                  if ({}.hasOwnProperty.call(defaultRequest, $84)) {
                      $83[$84] = defaultRequest[$84];
                  };
              };
              $83.url = u;
              return $83;
          })());
      };
  };
  exports["defaultRequest"] = defaultRequest;
  exports["affjax"] = affjax;
  exports["get"] = get;
})(PS["Network.HTTP.Affjax"] = PS["Network.HTTP.Affjax"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var App_Filter = PS["App.Filter"];
  var App_Routes = PS["App.Routes"];
  var App_State = PS["App.State"];
  var App_Tooltip = PS["App.Tooltip"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Aff = PS["Control.Monad.Aff"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var Data_Argonaut = PS["Data.Argonaut"];
  var Data_Argonaut_Decode_Class = PS["Data.Argonaut.Decode.Class"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Map = PS["Data.Map"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Tuple = PS["Data.Tuple"];
  var Network_HTTP_Affjax = PS["Network.HTTP.Affjax"];
  var Network_HTTP_Affjax_Response = PS["Network.HTTP.Affjax.Response"];
  var Network_RemoteData = PS["Network.RemoteData"];
  var Prelude = PS["Prelude"];
  var Pux = PS["Pux"];
  var Pux_DOM_Events = PS["Pux.DOM.Events"];        
  var FetchRecipes = (function () {
      function FetchRecipes(value0) {
          this.value0 = value0;
      };
      FetchRecipes.create = function (value0) {
          return new FetchRecipes(value0);
      };
      return FetchRecipes;
  })();
  var ReceiveRecipes = (function () {
      function ReceiveRecipes(value0) {
          this.value0 = value0;
      };
      ReceiveRecipes.create = function (value0) {
          return new ReceiveRecipes(value0);
      };
      return ReceiveRecipes;
  })();
  var TooltipEvent = (function () {
      function TooltipEvent(value0) {
          this.value0 = value0;
      };
      TooltipEvent.create = function (value0) {
          return new TooltipEvent(value0);
      };
      return TooltipEvent;
  })();
  var ChangeSearch = (function () {
      function ChangeSearch(value0) {
          this.value0 = value0;
      };
      ChangeSearch.create = function (value0) {
          return new ChangeSearch(value0);
      };
      return ChangeSearch;
  })();
  var ChangeURL = (function () {
      function ChangeURL(value0) {
          this.value0 = value0;
      };
      ChangeURL.create = function (value0) {
          return new ChangeURL(value0);
      };
      return ChangeURL;
  })();
  var ToggleDrawerState = (function () {
      function ToggleDrawerState() {

      };
      ToggleDrawerState.value = new ToggleDrawerState();
      return ToggleDrawerState;
  })();
  var toTuple = function (v) {
      if (v instanceof App_State.RecipeComp) {
          return new Data_Tuple.Tuple(v.value0, v);
      };
      if (v instanceof App_State.IngredientComp) {
          return new Data_Tuple.Tuple(v.value0, v);
      };
      throw new Error("Failed pattern match at App.Events line 67, column 1 - line 67, column 59: " + [ v.constructor.name ]);
  };
  var foldp = function (v) {
      return function (v1) {
          if (v instanceof FetchRecipes) {
              return {
                  state: (function () {
                      var $19 = {};
                      for (var $20 in v1) {
                          if ({}.hasOwnProperty.call(v1, $20)) {
                              $19[$20] = v1[$20];
                          };
                      };
                      $19.recipes = Network_RemoteData.Loading.value;
                      return $19;
                  })(),
                  effects: [ Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(Network_HTTP_Affjax.get(Network_HTTP_Affjax_Response.responsableJson)(v.value0 + "recipes/")))(function (v2) {
                      var recipes = Control_Bind.bind(Data_Either.bindEither)(Data_Bifunctor.bimap(Data_Either.bifunctorEither)(Data_Show.show(Control_Monad_Eff_Exception.showError))(function (v3) {
                          return v3.response;
                      })(v2))(Data_Argonaut_Decode_Class.decodeJson(Data_Argonaut_Decode_Class.decodeList(App_State.decodeRecipeComponent)));
                      return Control_Applicative.pure(Control_Monad_Aff.applicativeAff)(Data_Maybe.Just.create(new ReceiveRecipes(recipes)));
                  }) ]
              };
          };
          if (v instanceof ReceiveRecipes) {
              if (v.value0 instanceof Data_Either.Right) {
                  var recipes = Data_Map.fromFoldable(App_State.ordFoodId)(Data_List_Types.foldableList)(Data_Functor.map(Data_List_Types.functorList)(toTuple)(v.value0.value0));
                  return Pux.noEffects((function () {
                      var $25 = {};
                      for (var $26 in v1) {
                          if ({}.hasOwnProperty.call(v1, $26)) {
                              $25[$26] = v1[$26];
                          };
                      };
                      $25.recipes = new Network_RemoteData.Success(recipes);
                      return $25;
                  })());
              };
              if (v.value0 instanceof Data_Either.Left) {
                  return Pux.noEffects(v1);
              };
              throw new Error("Failed pattern match at App.Events line 43, column 3 - line 49, column 30: " + [ v.value0.constructor.name ]);
          };
          if (v instanceof TooltipEvent) {
              var v2 = App_Tooltip.foldp(v.value0)(v1.tooltip);
              return Pux.mapEffects(TooltipEvent.create)({
                  state: (function () {
                      var $32 = {};
                      for (var $33 in v1) {
                          if ({}.hasOwnProperty.call(v1, $33)) {
                              $32[$33] = v1[$33];
                          };
                      };
                      $32.tooltip = v2.state;
                      return $32;
                  })(),
                  effects: v2.effects
              });
          };
          if (v instanceof ChangeSearch) {
              var term = Pux_DOM_Events.targetValue(v.value0);
              var filter$prime = (function () {
                  var $38 = term === "";
                  if ($38) {
                      return App_Filter.All.value;
                  };
                  return new App_Filter.Search(term);
              })();
              return Pux.noEffects((function () {
                  var $39 = {};
                  for (var $40 in v1) {
                      if ({}.hasOwnProperty.call(v1, $40)) {
                          $39[$40] = v1[$40];
                      };
                  };
                  $39.view = new App_Routes.Recipes(filter$prime);
                  return $39;
              })());
          };
          if (v instanceof ChangeURL) {
              return Pux.noEffects((function () {
                  var $43 = {};
                  for (var $44 in v1) {
                      if ({}.hasOwnProperty.call(v1, $44)) {
                          $43[$44] = v1[$44];
                      };
                  };
                  $43.view = v.value0;
                  return $43;
              })());
          };
          if (v instanceof ToggleDrawerState) {
              return Pux.noEffects((function () {
                  var $47 = {};
                  for (var $48 in v1) {
                      if ({}.hasOwnProperty.call(v1, $48)) {
                          $47[$48] = v1[$48];
                      };
                  };
                  $47.drawerOpened = !v1.drawerOpened;
                  return $47;
              })());
          };
          throw new Error("Failed pattern match at App.Events line 32, column 1 - line 32, column 75: " + [ v.constructor.name, v1.constructor.name ]);
      };
  };
  exports["FetchRecipes"] = FetchRecipes;
  exports["ReceiveRecipes"] = ReceiveRecipes;
  exports["TooltipEvent"] = TooltipEvent;
  exports["ChangeSearch"] = ChangeSearch;
  exports["ChangeURL"] = ChangeURL;
  exports["ToggleDrawerState"] = ToggleDrawerState;
  exports["foldp"] = foldp;
  exports["toTuple"] = toTuple;
})(PS["App.Events"] = PS["App.Events"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Prelude = PS["Prelude"];
  var choice = function (dictPlus) {
      return function (dictFoldable) {
          return Data_Foldable.foldl(dictFoldable)(Control_Alt.alt(dictPlus.Alt0()))(Control_Plus.empty(dictPlus));
      };
  };
  exports["choice"] = choice;
})(PS["Text.Parsing.Combinators"] = PS["Text.Parsing.Combinators"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Int = PS["Data.Int"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Data_Unit = PS["Data.Unit"];
  var Global = PS["Global"];
  var Prelude = PS["Prelude"];        
  var Result = (function () {
      function Result(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Result.create = function (value0) {
          return function (value1) {
              return new Result(value0, value1);
          };
      };
      return Result;
  })();
  var sat = function (f) {
      return function (str) {
          var v = Data_String.charAt(0)(str);
          if (v instanceof Data_Maybe.Just) {
              var $128 = f(v.value0);
              if ($128) {
                  return new Result(new Data_Either.Right(v.value0), Data_String.drop(1)(str));
              };
              var msg = "Character " + (Data_Show.show(Data_Show.showChar)(v.value0) + (" did not satisfy predicate when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")));
              return new Result(new Data_Either.Left(msg), str);
          };
          return new Result(new Data_Either.Left("Reached end of file"), str);
      };
  };
  var runParser = function (v) {
      return v;
  };
  var remaining = function (v) {
      return v.value1;
  };
  var skip = function (v) {
      return function (str) {
          return new Result(new Data_Either.Right(Data_Unit.unit), remaining(v(str)));
      };
  };
  var pureP = function (x) {
      return Result.create(new Data_Either.Right(x));
  };
  var none = function (str) {
      return new Result(new Data_Either.Left("Parse failed on `none`"), str);
  };
  var newline = function (str) {
      var v = Data_String.charAt(0)(str);
      if (v instanceof Data_Maybe.Just) {
          var $139 = v.value0 === "\x0a";
          if ($139) {
              return new Result(new Data_Either.Right(v.value0), Data_String.drop(1)(str));
          };
          var msg = "Expected a newline but found " + (Data_Show.show(Data_Show.showChar)(v.value0) + (" when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")));
          return new Result(new Data_Either.Left(msg), str);
      };
      return new Result(new Data_Either.Left("Reached end of file"), str);
  };
  var isn$primetAny = function (s) {
      return function (str) {
          var v = Data_String.charAt(0)(str);
          if (v instanceof Data_Maybe.Just) {
              var $170 = Data_String.contains(Data_String.singleton(v.value0))(s);
              if ($170) {
                  var msg = "Expecting none of " + (Data_Show.show(Data_Show.showString)(s) + (" but found " + (Data_Show.show(Data_Show.showChar)(v.value0) + (" when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")))));
                  return new Result(new Data_Either.Left(msg), str);
              };
              return new Result(new Data_Either.Right(v.value0), Data_String.drop(1)(str));
          };
          return new Result(new Data_Either.Left("Reached end of file"), str);
      };
  };
  var fromCharList = function (dictFoldable) {
      return Data_Foldable.foldMap(dictFoldable)(Data_Monoid.monoidString)(Data_String.singleton);
  };
  var fail = function (msg) {
      return function (str) {
          return new Result(new Data_Either.Left(msg), str);
      };
  };
  var eof = function (str) {
      if (str === "") {
          return new Result(new Data_Either.Right(Data_Unit.unit), str);
      };
      var msg = "Expected empty string but found " + (Data_Show.show(Data_Show.showString)(str) + (" when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")));
      return new Result(new Data_Either.Left(msg), str);
  };
  var digit = function (str) {
      var v = Data_String.charAt(0)(str);
      if (v instanceof Data_Maybe.Just) {
          var $179 = v.value0 >= "0" && v.value0 <= "9";
          if ($179) {
              return new Result(new Data_Either.Right(v.value0), Data_String.drop(1)(str));
          };
          var msg = "Expected a digit but found " + (Data_Show.show(Data_Show.showChar)(v.value0) + (" when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")));
          return new Result(new Data_Either.Left(msg), str);
      };
      return new Result(new Data_Either.Left("Reached end of file"), str);
  };
  var cr = function (str) {
      var v = Data_String.charAt(0)(str);
      if (v instanceof Data_Maybe.Just) {
          var $185 = v.value0 === "\x0d";
          if ($185) {
              return new Result(new Data_Either.Right(v.value0), Data_String.drop(1)(str));
          };
          var msg = "Expected carriage return but found " + (Data_Show.show(Data_Show.showChar)(v.value0) + (" when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")));
          return new Result(new Data_Either.Left(msg), str);
      };
      return new Result(new Data_Either.Left("Reached end of file"), str);
  };
  var consumed = function (v) {
      return v.value0;
  };
  var many = function (p) {
      var go = function ($copy_curr) {
          return function ($copy_f) {
              return function ($copy_acc) {
                  var $tco_var_curr = $copy_curr;
                  var $tco_var_f = $copy_f;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(curr, f, acc) {
                      var y = runParser(f)(curr);
                      var v = consumed(y);
                      if (v instanceof Data_Either.Right) {
                          $tco_var_curr = remaining(y);
                          $tco_var_f = f;
                          $copy_acc = new Data_List_Types.Cons(v.value0, acc);
                          return;
                      };
                      $tco_done = true;
                      return new Result(new Data_Either.Right(Data_List.reverse(acc)), curr);
                  };
                  while (!$tco_done) {
                      $tco_result = $tco_loop($tco_var_curr, $tco_var_f, $copy_acc);
                  };
                  return $tco_result;
              };
          };
      };
      return function (str) {
          return go(str)(p)(Data_List_Types.Nil.value);
      };
  };                                 
  var mapP = function (f) {
      return function (v) {
          return function (str) {
              var x = v(str);
              return new Result(Data_Functor.map(Data_Either.functorEither)(f)(consumed(x)), remaining(x));
          };
      };
  };
  var functorParser = new Data_Functor.Functor(mapP);
  var manyChar = function (p) {
      return mapP(fromCharList(Data_List_Types.foldableList))(many(p));
  };
  var parse = function (v) {
      return function ($279) {
          return consumed(v($279));
      };
  };
  var $$char = function (x) {
      return function (str) {
          var v = Data_String.charAt(0)(str);
          if (v instanceof Data_Maybe.Just) {
              var $230 = v.value0 === x;
              if ($230) {
                  return new Result(new Data_Either.Right(v.value0), Data_String.drop(1)(str));
              };
              var msg = "Expected " + (Data_Show.show(Data_Show.showChar)(x) + (" but found " + (Data_Show.show(Data_Show.showChar)(v.value0) + (" when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")))));
              return new Result(new Data_Either.Left(msg), str);
          };
          return new Result(new Data_Either.Left("Reached end of file"), str);
      };
  };
  var bindP = function (v) {
      return function (mf) {
          return function (str) {
              var x = v(str);
              var v1 = consumed(x);
              if (v1 instanceof Data_Either.Right) {
                  return runParser(mf(v1.value0))(remaining(x));
              };
              if (v1 instanceof Data_Either.Left) {
                  return new Result(new Data_Either.Left(v1.value0), str);
              };
              throw new Error("Failed pattern match at Text.Parsing.Simple line 175, column 7 - line 177, column 45: " + [ v1.constructor.name ]);
          };
      };
  };
  var applyR = function (v) {
      return function (v1) {
          return function (str) {
              var x = v(str);
              var v2 = consumed(x);
              if (v2 instanceof Data_Either.Right) {
                  return v1(remaining(x));
              };
              if (v2 instanceof Data_Either.Left) {
                  return new Result(new Data_Either.Left(v2.value0), remaining(x));
              };
              throw new Error("Failed pattern match at Text.Parsing.Simple line 238, column 7 - line 240, column 53: " + [ v2.constructor.name ]);
          };
      };
  };
  var applyP = function (v) {
      return function (v1) {
          return function (str) {
              var f$prime = v(str);
              var x$prime = v1(remaining(f$prime));
              var rem = remaining(x$prime);
              var con = Control_Apply.apply(Data_Either.applyEither)(consumed(f$prime))(consumed(x$prime));
              return new Result(con, rem);
          };
      };
  };
  var applyParser = new Control_Apply.Apply(function () {
      return functorParser;
  }, applyP);
  var some = function (p) {
      return applyP(mapP(Data_List_Types.Cons.create)(p))(many(p));
  };
  var someChar = function (p) {
      return mapP(fromCharList(Data_List_Types.foldableList))(some(p));
  };
  var applyL = function (v) {
      return function (v1) {
          return function (str) {
              var x = v(str);
              var v2 = consumed(x);
              if (v2 instanceof Data_Either.Right) {
                  var y = v1(remaining(x));
                  var v3 = consumed(y);
                  if (v3 instanceof Data_Either.Right) {
                      return new Result(v2, remaining(y));
                  };
                  if (v3 instanceof Data_Either.Left) {
                      return new Result(new Data_Either.Left(v3.value0), remaining(x));
                  };
                  throw new Error("Failed pattern match at Text.Parsing.Simple line 226, column 18 - line 228, column 62: " + [ v3.constructor.name ]);
              };
              return x;
          };
      };
  };
  var braces = function (p) {
      return applyL(applyR($$char("{"))(p))($$char("}"));
  };
  var brackets = function (p) {
      return applyL(applyR($$char("["))(p))($$char("]"));
  };
  var applicativeParser = new Control_Applicative.Applicative(function () {
      return applyParser;
  }, pureP);
  var anyOf = function (s) {
      return function (str) {
          var v = Data_String.charAt(0)(str);
          if (v instanceof Data_Maybe.Just) {
              var $255 = Data_String.contains(Data_String.singleton(v.value0))(s);
              if ($255) {
                  return new Result(new Data_Either.Right(v.value0), Data_String.drop(1)(str));
              };
              var msg = "Expected one of " + (Data_Show.show(Data_Show.showString)(s) + (" but found " + (Data_Show.show(Data_Show.showChar)(v.value0) + (" when trying to parse the string " + (Data_Show.show(Data_Show.showString)(Data_String.take(20)(str)) + " ...")))));
              return new Result(new Data_Either.Left(msg), str);
          };
          return new Result(new Data_Either.Left("Reached end of file"), str);
      };
  };
  var altR = function (v) {
      return function (v1) {
          return function (str) {
              var z = v1(str);
              var v2 = consumed(z);
              if (v2 instanceof Data_Either.Right) {
                  return z;
              };
              return v(str);
          };
      };
  };
  var word = altR(fail("Expected contiguous string of nonwhitespace"))(someChar(sat(function (c) {
      return c !== " " && (c !== "\x09" && (c !== "\x0d" && c !== "\x0a"));
  })));
  var altL = function (v) {
      return function (v1) {
          return function (str) {
              var z = v(str);
              var v2 = consumed(z);
              if (v2 instanceof Data_Either.Right) {
                  return z;
              };
              return v1(str);
          };
      };
  };
  var altParser = new Control_Alt.Alt(function () {
      return functorParser;
  }, altL);
  var plusParser = new Control_Plus.Plus(function () {
      return altParser;
  }, none);                                                                                                                                                                          
  var integral = bindP(altL(digit)($$char("-")))(function (v) {
      return bindP(many(digit))(function (v1) {
          return Control_Applicative.pure(applicativeParser)(fromCharList(Data_List_Types.foldableList)(new Data_List_Types.Cons(v, v1)));
      });
  });
  var $$int = bindP(integral)(function (v) {
      var v1 = Data_Int.fromString(v);
      if (v1 instanceof Data_Maybe.Just) {
          return Control_Applicative.pure(applicativeParser)(v1.value0);
      };
      return fail("Expected an int but found " + Data_Show.show(Data_Show.showString)(v));
  });
  exports["parse"] = parse;
  exports["pureP"] = pureP;
  exports["mapP"] = mapP;
  exports["applyP"] = applyP;
  exports["bindP"] = bindP;
  exports["altL"] = altL;
  exports["altR"] = altR;
  exports["applyL"] = applyL;
  exports["applyR"] = applyR;
  exports["fromCharList"] = fromCharList;
  exports["none"] = none;
  exports["fail"] = fail;
  exports["many"] = many;
  exports["some"] = some;
  exports["skip"] = skip;
  exports["sat"] = sat;
  exports["isn'tAny"] = isn$primetAny;
  exports["anyOf"] = anyOf;
  exports["char"] = $$char;
  exports["digit"] = digit;
  exports["newline"] = newline;
  exports["cr"] = cr;
  exports["someChar"] = someChar;
  exports["manyChar"] = manyChar;
  exports["word"] = word;
  exports["eof"] = eof;
  exports["integral"] = integral;
  exports["int"] = $$int;
  exports["braces"] = braces;
  exports["brackets"] = brackets;
  exports["functorParser"] = functorParser;
  exports["altParser"] = altParser;
  exports["plusParser"] = plusParser;
  exports["applyParser"] = applyParser;
  exports["applicativeParser"] = applicativeParser;
})(PS["Text.Parsing.Simple"] = PS["Text.Parsing.Simple"] || {});
(function(exports) {
    "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Either = PS["Data.Either"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];
  var Text_Parsing_Combinators = PS["Text.Parsing.Combinators"];
  var Text_Parsing_Simple = PS["Text.Parsing.Simple"];        
  var Link = (function () {
      function Link(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Link.create = function (value0) {
          return function (value1) {
              return new Link(value0, value1);
          };
      };
      return Link;
  })();
  var Italics = (function () {
      function Italics(value0) {
          this.value0 = value0;
      };
      Italics.create = function (value0) {
          return new Italics(value0);
      };
      return Italics;
  })();
  var Bold = (function () {
      function Bold(value0) {
          this.value0 = value0;
      };
      Bold.create = function (value0) {
          return new Bold(value0);
      };
      return Bold;
  })();
  var Word = (function () {
      function Word(value0) {
          this.value0 = value0;
      };
      Word.create = function (value0) {
          return new Word(value0);
      };
      return Word;
  })();
  var Space = (function () {
      function Space() {

      };
      Space.value = new Space();
      return Space;
  })();
  var Paragraph = (function () {
      function Paragraph(value0) {
          this.value0 = value0;
      };
      Paragraph.create = function (value0) {
          return new Paragraph(value0);
      };
      return Paragraph;
  })();
  var wordParser = Data_Functor.map(Text_Parsing_Simple.functorParser)(Word.create)(Text_Parsing_Simple.word);
  var stripInline = function (v) {
      if (v instanceof Link) {
          return v.value0;
      };
      if (v instanceof Italics) {
          return v.value0;
      };
      if (v instanceof Bold) {
          return v.value0;
      };
      if (v instanceof Word) {
          return v.value0;
      };
      if (v instanceof Space) {
          return " ";
      };
      throw new Error("Failed pattern match at App.Markdown line 68, column 1 - line 68, column 32: " + [ v.constructor.name ]);
  };
  var spaceParser = Data_Functor.map(Text_Parsing_Simple.functorParser)(Data_Function["const"](Space.value))(Text_Parsing_Simple.someChar(Text_Parsing_Simple.anyOf(" \x09")));
  var linkParser = Control_Apply.apply(Text_Parsing_Simple.applyParser)(Data_Functor.map(Text_Parsing_Simple.functorParser)(Link.create)(Text_Parsing_Simple.braces(Text_Parsing_Simple.manyChar(Text_Parsing_Simple["isn'tAny"]("{}")))))(Text_Parsing_Simple.brackets(Text_Parsing_Simple["int"]));
  var italicsParser = Data_Functor.map(Text_Parsing_Simple.functorParser)(Italics.create)(Text_Parsing_Simple.applyL(Text_Parsing_Simple.applyR(Text_Parsing_Simple["char"]("_"))(Text_Parsing_Simple.manyChar(Text_Parsing_Simple["isn'tAny"]("_"))))(Text_Parsing_Simple["char"]("_")));
  var concat = function (dictFoldable) {
      return function (dictMonoid) {
          return Data_Foldable.foldl(dictFoldable)(Data_Semigroup.append(dictMonoid.Semigroup0()))(Data_Monoid.mempty(dictMonoid));
      };
  };
  var stripBlock = function (v) {
      return concat(Data_List_Types.foldableList)(Data_Monoid.monoidString)(Data_Functor.map(Data_List_Types.functorList)(stripInline)(v.value0));
  };
  var stripMarkdown = function (md) {
      return concat(Data_List_Types.foldableList)(Data_Monoid.monoidString)(Data_Functor.map(Data_List_Types.functorList)(stripBlock)(md));
  };
  var boldParser = Data_Functor.map(Text_Parsing_Simple.functorParser)(Bold.create)(Text_Parsing_Simple.applyL(Text_Parsing_Simple.applyR(Text_Parsing_Simple["char"]("*"))(Text_Parsing_Simple.manyChar(Text_Parsing_Simple["isn'tAny"]("*"))))(Text_Parsing_Simple["char"]("*")));
  var inlineParser = Text_Parsing_Combinators.choice(Text_Parsing_Simple.plusParser)(Data_Foldable.foldableArray)([ linkParser, italicsParser, boldParser, wordParser, spaceParser ]);
  var paragraphParser = Data_Functor.map(Text_Parsing_Simple.functorParser)(Paragraph.create)(Text_Parsing_Simple.applyL(Text_Parsing_Simple.some(inlineParser))(Text_Parsing_Combinators.choice(Text_Parsing_Simple.plusParser)(Data_Foldable.foldableArray)([ Text_Parsing_Simple.skip(Text_Parsing_Simple.some(Text_Parsing_Combinators.choice(Text_Parsing_Simple.plusParser)(Data_Foldable.foldableArray)([ Text_Parsing_Simple.newline, Text_Parsing_Simple.cr ]))), Text_Parsing_Simple.eof ])));
  var markdownParser = Text_Parsing_Simple.many(paragraphParser);
  var tryStripMarkdown = function (text) {
      var v = Text_Parsing_Simple.parse(markdownParser)(text);
      if (v instanceof Data_Either.Right) {
          return stripMarkdown(v.value0);
      };
      if (v instanceof Data_Either.Left) {
          return text;
      };
      throw new Error("Failed pattern match at App.Markdown line 85, column 3 - line 87, column 19: " + [ v.constructor.name ]);
  };
  exports["Paragraph"] = Paragraph;
  exports["Link"] = Link;
  exports["Italics"] = Italics;
  exports["Bold"] = Bold;
  exports["Word"] = Word;
  exports["Space"] = Space;
  exports["linkParser"] = linkParser;
  exports["italicsParser"] = italicsParser;
  exports["boldParser"] = boldParser;
  exports["wordParser"] = wordParser;
  exports["spaceParser"] = spaceParser;
  exports["inlineParser"] = inlineParser;
  exports["paragraphParser"] = paragraphParser;
  exports["markdownParser"] = markdownParser;
  exports["stripInline"] = stripInline;
  exports["stripBlock"] = stripBlock;
  exports["stripMarkdown"] = stripMarkdown;
  exports["tryStripMarkdown"] = tryStripMarkdown;
  exports["concat"] = concat;
})(PS["App.Markdown"] = PS["App.Markdown"] || {});
(function(exports) {
    "use strict";

  exports.eventListener = function (fn) {
    return function (event) {
      return fn(event)();
    };
  };

  exports.addEventListener = function (type) {
    return function (listener) {
      return function (useCapture) {
        return function (target) {
          return function () {
            target.addEventListener(type, listener, useCapture);
            return {};
          };
        };
      };
    };
  };
})(PS["DOM.Event.EventTarget"] = PS["DOM.Event.EventTarget"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["DOM.Event.EventTarget"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var DOM = PS["DOM"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var Prelude = PS["Prelude"];
  exports["eventListener"] = $foreign.eventListener;
  exports["addEventListener"] = $foreign.addEventListener;
})(PS["DOM.Event.EventTarget"] = PS["DOM.Event.EventTarget"] || {});
(function(exports) {
    "use strict";

  exports.hash = function (location) {
    return function () {
      return location.hash;
    };
  };
})(PS["DOM.HTML.Location"] = PS["DOM.HTML.Location"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["DOM.HTML.Location"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var Prelude = PS["Prelude"];
  exports["hash"] = $foreign.hash;
})(PS["DOM.HTML.Location"] = PS["DOM.HTML.Location"] || {});
(function(exports) {
    "use strict";

  exports.location = function (window) {
    return function () {
      return window.location;
    };
  };
})(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["DOM.HTML.Window"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_WebStorage_Types = PS["DOM.WebStorage.Types"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Nullable = PS["Data.Nullable"];
  var Data_Ord = PS["Data.Ord"];
  var Prelude = PS["Prelude"];
  exports["location"] = $foreign.location;
})(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_Event_EventTarget = PS["DOM.Event.EventTarget"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_HTML_Location = PS["DOM.HTML.Location"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_HTML_Window = PS["DOM.HTML.Window"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_String = PS["Data.String"];
  var Prelude = PS["Prelude"];
  var Signal = PS["Signal"];
  var Signal_Channel = PS["Signal.Channel"];        
  var stripHash = function (str) {
      return Data_Maybe.fromMaybe(str)(Data_String.stripPrefix("#")(str));
  };
  var sampleHash = function (win) {
      return function __do() {
          var v = DOM_HTML_Window.location(win)();
          var v1 = DOM_HTML_Location.hash(v)();
          var v2 = Signal_Channel.channel(stripHash(v1))();
          var listener = DOM_Event_EventTarget.eventListener(function (ev) {
              return function __do() {
                  var v3 = DOM_HTML_Location.hash(v)();
                  return Signal_Channel.send(v2)(stripHash(v3))();
              };
          });
          DOM_Event_EventTarget.addEventListener("popstate")(listener)(false)(DOM_HTML_Types.windowToEventTarget(win))();
          return Signal_Channel.subscribe(v2);
      };
  };
  exports["sampleHash"] = sampleHash;
})(PS["App.Util.History"] = PS["App.Util.History"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Box = PS["CSS.Box"];
  var CSS_Color = PS["CSS.Color"];
  var CSS_Common = PS["CSS.Common"];
  var CSS_Property = PS["CSS.Property"];
  var CSS_Size = PS["CSS.Size"];
  var CSS_String = PS["CSS.String"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Generic = PS["Data.Generic"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];                                                                                 
  var backgroundColor = CSS_Stylesheet.key(CSS_Property.valColor)(CSS_String.fromString(CSS_Property.isStringKey)("background-color"));
  exports["backgroundColor"] = backgroundColor;
})(PS["CSS.Background"] = PS["CSS.Background"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var CSS_Color = PS["CSS.Color"];
  var CSS_Property = PS["CSS.Property"];
  var CSS_Size = PS["CSS.Size"];
  var CSS_String = PS["CSS.String"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Control_Apply = PS["Control.Apply"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Generic = PS["Data.Generic"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Tuple_Nested = PS["Data.Tuple.Nested"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var borderRadius = function (a) {
      return function (b) {
          return function (c) {
              return function (d) {
                  return CSS_Stylesheet.key(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valUnit)))))(CSS_String.fromString(CSS_Property.isStringKey)("border-radius"))(Data_Tuple_Nested.tuple4(a)(b)(c)(d));
              };
          };
      };
  };
  exports["borderRadius"] = borderRadius;
})(PS["CSS.Border"] = PS["CSS.Border"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Either = PS["Data.Either"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Map = PS["Data.Map"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var Filterable = function (Functor0, filter, filterMap, partition, partitionMap) {
      this.Functor0 = Functor0;
      this.filter = filter;
      this.filterMap = filterMap;
      this.partition = partition;
      this.partitionMap = partitionMap;
  };
  var partitionMap = function (dict) {
      return dict.partitionMap;
  };
  var partition = function (dict) {
      return dict.partition;
  };
  var filterableList = new Filterable(function () {
      return Data_List_Types.functorList;
  }, Data_List.filter, function (p) {
      return Data_List.mapMaybe(p);
  }, function (p) {
      return function (xs) {
          var select = function (x) {
              return function (v) {
                  var $36 = p(x);
                  if ($36) {
                      return {
                          no: v.no,
                          yes: new Data_List_Types.Cons(x, v.yes)
                      };
                  };
                  return {
                      no: new Data_List_Types.Cons(x, v.no),
                      yes: v.yes
                  };
              };
          };
          return Data_Foldable.foldr(Data_List_Types.foldableList)(select)({
              no: Data_List_Types.Nil.value,
              yes: Data_List_Types.Nil.value
          })(xs);
      };
  }, function (p) {
      return function (xs) {
          var select = function (x) {
              return function (v) {
                  var v1 = p(x);
                  if (v1 instanceof Data_Either.Left) {
                      return {
                          left: new Data_List_Types.Cons(v1.value0, v.left),
                          right: v.right
                      };
                  };
                  if (v1 instanceof Data_Either.Right) {
                      return {
                          left: v.left,
                          right: new Data_List_Types.Cons(v1.value0, v.right)
                      };
                  };
                  throw new Error("Failed pattern match at Data.Filterable line 173, column 36 - line 175, column 83: " + [ v1.constructor.name ]);
              };
          };
          return Data_Foldable.foldr(Data_List_Types.foldableList)(select)({
              left: Data_List_Types.Nil.value,
              right: Data_List_Types.Nil.value
          })(xs);
      };
  });
  var filterMap = function (dict) {
      return dict.filterMap;
  };
  var filter = function (dict) {
      return dict.filter;
  };
  exports["Filterable"] = Filterable;
  exports["partitionMap"] = partitionMap;
  exports["partition"] = partition;
  exports["filterMap"] = filterMap;
  exports["filter"] = filter;
  exports["filterableList"] = filterableList;
})(PS["Data.Filterable"] = PS["Data.Filterable"] || {});
(function(exports) {function wrap(method) {
    return function(d) {
      return function(num) {
        return method.apply(num, [d]);
      };
    };
  }

  exports.toPrecisionNative   = wrap(Number.prototype.toPrecision);
  exports.toFixedNative       = wrap(Number.prototype.toFixed);
  exports.toExponentialNative = wrap(Number.prototype.toExponential);

  exports.toString = function(num) { return num.toString(); };
})(PS["Data.Number.Format"] = PS["Data.Number.Format"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Number.Format"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Ord = PS["Data.Ord"];
  var Prelude = PS["Prelude"];        
  var Precision = (function () {
      function Precision(value0) {
          this.value0 = value0;
      };
      Precision.create = function (value0) {
          return new Precision(value0);
      };
      return Precision;
  })();
  var Fixed = (function () {
      function Fixed(value0) {
          this.value0 = value0;
      };
      Fixed.create = function (value0) {
          return new Fixed(value0);
      };
      return Fixed;
  })();
  var Exponential = (function () {
      function Exponential(value0) {
          this.value0 = value0;
      };
      Exponential.create = function (value0) {
          return new Exponential(value0);
      };
      return Exponential;
  })();
  var toStringWith = function (v) {
      if (v instanceof Precision) {
          return $foreign.toPrecisionNative(v.value0);
      };
      if (v instanceof Fixed) {
          return $foreign.toFixedNative(v.value0);
      };
      if (v instanceof Exponential) {
          return $foreign.toExponentialNative(v.value0);
      };
      throw new Error("Failed pattern match at Data.Number.Format line 59, column 1 - line 59, column 40: " + [ v.constructor.name ]);
  };
  var fixed = function ($6) {
      return Fixed.create(Data_Ord.clamp(Data_Ord.ordInt)(0)(20)($6));
  };
  exports["fixed"] = fixed;
  exports["toStringWith"] = toStringWith;
  exports["toString"] = $foreign.toString;
})(PS["Data.Number.Format"] = PS["Data.Number.Format"] || {});
(function(exports) {
    "use strict";
  var App_Events = PS["App.Events"];
  var App_Filter = PS["App.Filter"];
  var App_Markdown = PS["App.Markdown"];
  var App_Measurement = PS["App.Measurement"];
  var App_Routes = PS["App.Routes"];
  var App_State = PS["App.State"];
  var App_Tooltip = PS["App.Tooltip"];
  var CSS = PS["CSS"];
  var CSS_Background = PS["CSS.Background"];
  var CSS_Border = PS["CSS.Border"];
  var CSS_Geometry = PS["CSS.Geometry"];
  var CSS_Size = PS["CSS.Size"];
  var CSS_Stylesheet = PS["CSS.Stylesheet"];
  var Color = PS["Color"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad_Free = PS["Control.Monad.Free"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Filterable = PS["Data.Filterable"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Map = PS["Data.Map"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Number_Format = PS["Data.Number.Format"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Data_Tuple = PS["Data.Tuple"];
  var Network_RemoteData = PS["Network.RemoteData"];
  var Prelude = PS["Prelude"];
  var Pux_DOM_Events = PS["Pux.DOM.Events"];
  var Pux_DOM_HTML = PS["Pux.DOM.HTML"];
  var Pux_DOM_HTML_Attributes = PS["Pux.DOM.HTML.Attributes"];
  var Text_Parsing_Simple = PS["Text.Parsing.Simple"];
  var Text_Smolder_HTML = PS["Text.Smolder.HTML"];
  var Text_Smolder_HTML_Attributes = PS["Text.Smolder.HTML.Attributes"];
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];        
  var uniBorderRadius = function (size) {
      return CSS_Border.borderRadius(size)(size)(size)(size);
  };
  var toRecipe = function (v) {
      if (v instanceof App_State.RecipeComp) {
          return Data_Maybe.Just.create(new Data_Tuple.Tuple(v.value0, v.value1));
      };
      return Data_Maybe.Nothing.value;
  };
  var searchTerm = function (v) {
      if (v instanceof App_Routes.Recipes && v.value0 instanceof App_Filter.Search) {
          return v.value0.value0;
      };
      return "";
  };
  var scrollContainer = function (html) {
      return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("scroll-container"))(html);
  };
  var placeholder = function (h) {
      return function (w) {
          return function (my) {
              return function (mx) {
                  return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Pux_DOM_HTML_Attributes.style(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Background.backgroundColor(Color.rgb(228)(228)(228)))(function () {
                      return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(uniBorderRadius(CSS_Size.px(3.0)))(function () {
                          return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.height(CSS_Size.px(h)))(function () {
                              return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.width(CSS_Size.px(w)))(function () {
                                  return CSS_Geometry.margin(CSS_Size.px(my))(CSS_Size.px(mx))(CSS_Size.px(my))(CSS_Size.px(mx));
                              });
                          });
                      });
                  })))(Text_Smolder_Markup.text(""));
              };
          };
      };
  };
  var recipePlaceholderView = Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-main-view"))(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(placeholder(32.0)(400.0)(30.0)(0.0))(function () {
      return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(placeholder(24.0)(350.0)(30.0)(0.0))(function () {
          return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(placeholder(18.0)(250.0)(20.0)(40.0))(function () {
              return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(placeholder(18.0)(260.0)(20.0)(40.0))(function () {
                  return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(placeholder(24.0)(350.0)(30.0)(0.0))(function () {
                      return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(placeholder(14.0)(1000.0)(20.0)(0.0))(function () {
                          return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(placeholder(14.0)(1100.0)(20.0)(0.0))(function () {
                              return placeholder(14.0)(800.0)(20.0)(0.0);
                          });
                      });
                  });
              });
          });
      });
  }));
  var listRecipes = function (dictOrd) {
      return function (accessor) {
          return function (recipes) {
              return Data_List.sortBy(Data_Function.on(Data_Ord.compare(dictOrd))(function ($145) {
                  return accessor(Data_Tuple.snd($145));
              }))(Data_Filterable.filterMap(Data_Filterable.filterableList)(toRecipe)(Data_Map.values(recipes)));
          };
      };
  };
  var isRecipeSelected = function (v) {
      return function (v1) {
          if (v instanceof App_Routes.Recipe) {
              return v.value0 === v1;
          };
          return false;
      };
  };
  var recipeNavLink = function (route) {
      return function (v) {
          var classNames = (function () {
              var $45 = isRecipeSelected(route)(v.value0);
              if ($45) {
                  return "nav-drawer__recipe-nav-link nav-drawer__recipe-nav-link--selected";
              };
              return "nav-drawer__recipe-nav-link";
          })();
          return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.li)(Text_Smolder_HTML_Attributes.className(classNames))(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.href(App_Routes.toURL(new App_Routes.Recipe(v.value0))))(Text_Smolder_Markup.text(v.value1.name)));
      };
  };
  var recipeNavList = function (v) {
      return function (v1) {
          if (v1 instanceof Network_RemoteData.Success) {
              return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.ul)(Text_Smolder_HTML_Attributes.className("nav-drawer__recipe-list"))(Data_Foldable.for_(Control_Monad_Free.freeApplicative)(Data_List_Types.foldableList)(listRecipes(Data_Ord.ordString)(function (v2) {
                  return v2.name;
              })(v1.value0))(recipeNavLink(v)));
          };
          return Text_Smolder_Markup.text("");
      };
  };
  var navDrawer = function (opened) {
      return function (route) {
          return function (recipes) {
              var classNames = (function () {
                  if (opened) {
                      return "nav-drawer nav-drawer--opened";
                  };
                  return "nav-drawer nav-drawer--closed";
              })();
              return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.nav)(Text_Smolder_HTML_Attributes.className(classNames))(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("nav-drawer__header"))(Text_Smolder_Markup.text("Recipes")))(function () {
                  return recipeNavList(route)(recipes);
              }));
          };
      };
  };
  var ingredientView = function (recipes) {
      return function (v) {
          var v1 = Data_Map.lookup(App_State.ordFoodId)(v.ingredient)(recipes);
          if (v1 instanceof Data_Maybe.Just && v1.value0 instanceof App_State.IngredientComp) {
              return Text_Smolder_HTML.li(Text_Smolder_Markup.text(Data_Number_Format.toString(v.amount) + (" " + (Data_Show.show(App_Measurement.showMeasurement)(v.unitType) + (" " + v1.value0.value1.name)))));
          };
          if (v1 instanceof Data_Maybe.Just && v1.value0 instanceof App_State.RecipeComp) {
              return Text_Smolder_HTML.li(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_Markup.text(Data_Number_Format.toString(v.amount) + (" " + (Data_Show.show(App_Measurement.showMeasurement)(v.unitType) + " "))))(function () {
                  return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.className("ingredient-view__recipe-link")))(Text_Smolder_HTML_Attributes.href(App_Routes.toURL(new App_Routes.Recipe(v1.value0.value0))))(Text_Smolder_Markup.text(v1.value0.value1.name));
              }));
          };
          if (v1 instanceof Data_Maybe.Nothing) {
              return Text_Smolder_Markup.text("");
          };
          throw new Error("Failed pattern match at App.View line 148, column 3 - line 164, column 1: " + [ v1.constructor.name ]);
      };
  };
  var header = function (route) {
      return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("header"))(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_Markup.withEvent(Text_Smolder_Markup.eventableMarkupMF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("menu")))(Pux_DOM_Events.onClick(Data_Function["const"](App_Events.ToggleDrawerState.value)))(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.i)(Text_Smolder_HTML_Attributes.className("material-icons"))(Text_Smolder_Markup.text("menu"))))(function () {
          return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.href(App_Routes.toURL(App_Routes.Home.value))))(Text_Smolder_HTML_Attributes.className("header__title"))(Text_Smolder_Markup.text("Recipe Book")))(function () {
              return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("header__search"))(Text_Smolder_Markup.withEvent(Text_Smolder_Markup.eventableMarkup)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkup)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkup)(Text_Smolder_HTML.input)(Text_Smolder_HTML_Attributes.value(searchTerm(route))))(Text_Smolder_HTML_Attributes.placeholder("Search")))(Pux_DOM_Events.onChange(App_Events.ChangeSearch.create)));
          });
      }));
  };
  var groupRecipes = function (recipes) {
      return Data_List.groupBy(Data_Function.on(Data_Eq.eq(Data_Eq.eqString))(function ($146) {
          return (function (v) {
              return v.category;
          })(Data_Tuple.snd($146));
      }))(listRecipes(Data_Ord.ordString)(function (v) {
          return v.category;
      })(recipes));
  };
  var getRecipeName = function (recipeComp) {
      if (recipeComp instanceof App_State.RecipeComp) {
          return recipeComp.value1.name;
      };
      if (recipeComp instanceof App_State.IngredientComp) {
          return recipeComp.value1.name;
      };
      throw new Error("Failed pattern match at App.View line 270, column 3 - line 272, column 38: " + [ recipeComp.constructor.name ]);
  };
  var recipeLink = function (recipes) {
      return function (ingredients) {
          return function (label) {
              return function (id) {
                  return Control_Bind.bind(Data_Maybe.bindMaybe)(Data_Foldable.find(Data_List_Types.foldableList)(function ($147) {
                      return Data_Eq.eq(App_State.eqFoodId)(id)((function (v) {
                          return v.ingredient;
                      })(Data_Newtype.unwrap(App_State.newtypeIngredientAmount)($147)));
                  })(ingredients))(function (v) {
                      return Control_Bind.bind(Data_Maybe.bindMaybe)(Data_Map.lookup(App_State.ordFoodId)(v.ingredient)(recipes))(function (v1) {
                          var name = getRecipeName(v1);
                          return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(Pux_DOM_HTML.mapEvent(App_Events.TooltipEvent.create)(App_Tooltip.label(label)(Data_Number_Format.toString(v.amount) + (" " + (Data_Show.show(App_Measurement.showMeasurement)(v.unitType) + (" " + name))))));
                      });
                  });
              };
          };
      };
  };
  var inlineToHtml = function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof App_Markdown.Space) {
                  return Text_Smolder_Markup.text(" ");
              };
              if (v2 instanceof App_Markdown.Word) {
                  return Text_Smolder_Markup.text(v2.value0);
              };
              if (v2 instanceof App_Markdown.Bold) {
                  return Text_Smolder_HTML.b(Text_Smolder_Markup.text(v2.value0));
              };
              if (v2 instanceof App_Markdown.Italics) {
                  return Text_Smolder_HTML.em(Text_Smolder_Markup.text(v2.value0));
              };
              if (v2 instanceof App_Markdown.Link) {
                  return Data_Maybe.fromMaybe(Text_Smolder_Markup.text(v2.value0))(recipeLink(v)(v1.ingredients)(v2.value0)(v2.value1));
              };
              throw new Error("Failed pattern match at App.View line 203, column 1 - line 203, column 77: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  };
  var markdownToHtml = function (recipes) {
      return function (recipe) {
          return function (v) {
              return Text_Smolder_HTML.p(Data_Foldable.for_(Control_Monad_Free.freeApplicative)(Data_List_Types.foldableList)(v.value0)(inlineToHtml(recipes)(recipe)));
          };
      };
  };
  var recipeDirections = function (recipes) {
      return function (recipe) {
          return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-directions"))((function () {
              var v = Text_Parsing_Simple.parse(App_Markdown.markdownParser)(recipe.directions);
              if (v instanceof Data_Either.Right) {
                  return Data_Foldable.for_(Control_Monad_Free.freeApplicative)(Data_List_Types.foldableList)(v.value0)(markdownToHtml(recipes)(recipe));
              };
              if (v instanceof Data_Either.Left) {
                  return Text_Smolder_Markup.text(recipe.directions);
              };
              throw new Error("Failed pattern match at App.View line 193, column 5 - line 197, column 31: " + [ v.constructor.name ]);
          })());
      };
  };
  var getRecipe = function (recipeId) {
      return function (recipes) {
          return Control_Bind.bind(Data_Maybe.bindMaybe)(Data_Map.lookup(App_State.ordFoodId)(recipeId)(recipes))(function (v) {
              if (v instanceof App_State.RecipeComp) {
                  return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(v.value1);
              };
              return Data_Maybe.Nothing.value;
          });
      };
  };
  var recipeMainView = function (v) {
      return function (v1) {
          if (v instanceof Network_RemoteData.Success) {
              return Control_Bind.bind(Data_Maybe.bindMaybe)(getRecipe(v1)(v.value0))(function (v2) {
                  return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-main-view"))(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_HTML.h2(Text_Smolder_Markup.text(v2.name)))(function () {
                      return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_HTML.div(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_HTML.h3(Text_Smolder_Markup.text("Ingredients")))(function () {
                          return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.ul)(Text_Smolder_HTML_Attributes.className("ingredient-list"))(Data_Foldable.for_(Control_Monad_Free.freeApplicative)(Data_List_Types.foldableList)(v2.ingredients)(ingredientView(v.value0)));
                      })))(function () {
                          return Text_Smolder_HTML.div(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_HTML.h3(Text_Smolder_Markup.text("Directions")))(function () {
                              return recipeDirections(v.value0)(v2);
                          }));
                      });
                  })));
              });
          };
          if (v instanceof Network_RemoteData.Loading) {
              return new Data_Maybe.Just(recipePlaceholderView);
          };
          return Data_Maybe.Nothing.value;
      };
  };
  var getCost = function (recipes) {
      var convert = function (from) {
          return function (to) {
              return function (amount) {
                  return Data_Maybe.fromMaybe(0.0)(App_Measurement.convertMeasurement(from)(to)(amount));
              };
          };
      };
      return Data_Foldable.foldl(Data_List_Types.foldableList)(function (total) {
          return function (v) {
              var v1 = Data_Map.lookup(App_State.ordFoodId)(v.ingredient)(recipes);
              if (v1 instanceof Data_Maybe.Just && v1.value0 instanceof App_State.IngredientComp) {
                  return total + (convert(v.unitType)(v1.value0.value1.unitType)(v.amount) * v1.value0.value1.unitCost) / v1.value0.value1.amount;
              };
              if (v1 instanceof Data_Maybe.Just && v1.value0 instanceof App_State.RecipeComp) {
                  return total + (convert(v.unitType)(v1.value0.value1.unitType)(v.amount) * getCost(recipes)(v1.value0.value1.ingredients)) / v1.value0.value1.amount;
              };
              if (v1 instanceof Data_Maybe.Nothing) {
                  return 0.0;
              };
              throw new Error("Failed pattern match at App.View line 246, column 7 - line 253, column 7: " + [ v1.constructor.name ]);
          };
      })(0.0);
  };
  var formatCost = function (cost) {
      return "$" + Data_Number_Format.toStringWith(Data_Number_Format.fixed(2))(cost);
  };
  var recipeView = function (recipes) {
      return function (v) {
          return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.className("recipe-view-card-link")))(Text_Smolder_HTML_Attributes.href(App_Routes.toURL(new App_Routes.Recipe(v.value0))))(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-view"))(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-view__title"))(Text_Smolder_Markup.text(v.value1.name)))(function () {
              return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-view__directions"))(Text_Smolder_Markup.text(App_Markdown.tryStripMarkdown(v.value1.directions))))(function () {
                  return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-view__cost"))(Text_Smolder_Markup.text(formatCost(getCost(recipes)(v.value1.ingredients))));
              });
          })));
      };
  };
  var filterRecipes = function (v) {
      if (v instanceof App_Filter.All) {
          return Control_Category.id(Control_Category.categoryFn);
      };
      if (v instanceof App_Filter.Search) {
          return Data_Map.filter(App_State.ordFoodId)(function ($148) {
              return Data_String.contains(Data_String.toLower(v.value0))(Data_String.toLower(getRecipeName($148)));
          });
      };
      throw new Error("Failed pattern match at App.View line 236, column 1 - line 236, column 84: " + [ v.constructor.name ]);
  };
  var categoryView = function (recipeMap) {
      return function (v) {
          return Text_Smolder_HTML.div((function () {
              var first = Data_Tuple.snd(Data_NonEmpty.head(v));
              return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(Text_Smolder_HTML.h2(Text_Smolder_Markup.text(first.category)))(function () {
                  return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("recipe-grid"))(Data_Foldable.for_(Control_Monad_Free.freeApplicative)(Data_NonEmpty.foldableNonEmpty(Data_List_Types.foldableList))(v)(recipeView(recipeMap)));
              });
          })());
      };
  };
  var categoryList = function (v) {
      return function (v1) {
          if (v1 instanceof Network_RemoteData.Success) {
              return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("category-list-background"))(scrollContainer(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("category-list"))(Data_Foldable.for_(Control_Monad_Free.freeApplicative)(Data_List_Types.foldableList)(groupRecipes(filterRecipes(v)(v1.value0)))(categoryView(v1.value0)))));
          };
          return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("category-list-background"))(Text_Smolder_Markup.text(""));
      };
  };
  var mainView = function (v) {
      return function (recipes) {
          if (v instanceof App_Routes.Home) {
              return categoryList(App_Filter.All.value)(recipes);
          };
          if (v instanceof App_Routes.Recipes) {
              return categoryList(v.value0)(recipes);
          };
          if (v instanceof App_Routes.Recipe) {
              return scrollContainer(Data_Maybe.fromMaybe(Text_Smolder_Markup.text(""))(recipeMainView(recipes)(v.value0)));
          };
          throw new Error("Failed pattern match at App.View line 94, column 1 - line 94, column 58: " + [ v.constructor.name, recipes.constructor.name ]);
      };
  };
  var view = function (v) {
      return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("main-layout"))(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(navDrawer(v.drawerOpened)(v.view)(v.recipes))(function () {
          return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.className("main-app"))(Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(header(v.view))(function () {
              return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free.freeBind)(mainView(v.view)(v.recipes))(function () {
                  return Pux_DOM_HTML.mapEvent(App_Events.TooltipEvent.create)(App_Tooltip.tooltipView(v.tooltip));
              });
          }));
      }));
  };
  exports["view"] = view;
  exports["scrollContainer"] = scrollContainer;
  exports["navDrawer"] = navDrawer;
  exports["recipeNavList"] = recipeNavList;
  exports["recipeNavLink"] = recipeNavLink;
  exports["isRecipeSelected"] = isRecipeSelected;
  exports["header"] = header;
  exports["mainView"] = mainView;
  exports["recipeMainView"] = recipeMainView;
  exports["recipePlaceholderView"] = recipePlaceholderView;
  exports["placeholder"] = placeholder;
  exports["uniBorderRadius"] = uniBorderRadius;
  exports["ingredientView"] = ingredientView;
  exports["categoryList"] = categoryList;
  exports["categoryView"] = categoryView;
  exports["recipeView"] = recipeView;
  exports["recipeDirections"] = recipeDirections;
  exports["markdownToHtml"] = markdownToHtml;
  exports["inlineToHtml"] = inlineToHtml;
  exports["recipeLink"] = recipeLink;
  exports["listRecipes"] = listRecipes;
  exports["groupRecipes"] = groupRecipes;
  exports["filterRecipes"] = filterRecipes;
  exports["getCost"] = getCost;
  exports["getRecipe"] = getRecipe;
  exports["getRecipeName"] = getRecipeName;
  exports["formatCost"] = formatCost;
  exports["toRecipe"] = toRecipe;
  exports["searchTerm"] = searchTerm;
})(PS["App.View"] = PS["App.View"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Cont_Class = PS["Control.Monad.Cont.Class"];
  var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Reader_Class = PS["Control.Monad.Reader.Class"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_State_Class = PS["Control.Monad.State.Class"];
  var Control_Monad_Trans_Class = PS["Control.Monad.Trans.Class"];
  var Control_Monad_Writer_Class = PS["Control.Monad.Writer.Class"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var StateT = function (x) {
      return x;
  }; 
  var functorStateT = function (dictFunctor) {
      return new Data_Functor.Functor(function (f) {
          return function (v) {
              return function (s) {
                  return Data_Functor.map(dictFunctor)(function (v1) {
                      return new Data_Tuple.Tuple(f(v1.value0), v1.value1);
                  })(v(s));
              };
          };
      });
  };
  var monadStateT = function (dictMonad) {
      return new Control_Monad.Monad(function () {
          return applicativeStateT(dictMonad);
      }, function () {
          return bindStateT(dictMonad);
      });
  };
  var bindStateT = function (dictMonad) {
      return new Control_Bind.Bind(function () {
          return applyStateT(dictMonad);
      }, function (v) {
          return function (f) {
              return function (s) {
                  return Control_Bind.bind(dictMonad.Bind1())(v(s))(function (v1) {
                      var v3 = f(v1.value0);
                      return v3(v1.value1);
                  });
              };
          };
      });
  };
  var applyStateT = function (dictMonad) {
      return new Control_Apply.Apply(function () {
          return functorStateT(((dictMonad.Bind1()).Apply0()).Functor0());
      }, Control_Monad.ap(monadStateT(dictMonad)));
  };
  var applicativeStateT = function (dictMonad) {
      return new Control_Applicative.Applicative(function () {
          return applyStateT(dictMonad);
      }, function (a) {
          return function (s) {
              return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Tuple.Tuple(a, s));
          };
      });
  };
  var monadRecStateT = function (dictMonadRec) {
      return new Control_Monad_Rec_Class.MonadRec(function () {
          return monadStateT(dictMonadRec.Monad0());
      }, function (f) {
          return function (a) {
              var f$prime = function (v) {
                  return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())((function () {
                      var v1 = f(v.value0);
                      return v1;
                  })()(v.value1))(function (v1) {
                      return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())((function () {
                          if (v1.value0 instanceof Control_Monad_Rec_Class.Loop) {
                              return new Control_Monad_Rec_Class.Loop(new Data_Tuple.Tuple(v1.value0.value0, v1.value1));
                          };
                          if (v1.value0 instanceof Control_Monad_Rec_Class.Done) {
                              return new Control_Monad_Rec_Class.Done(new Data_Tuple.Tuple(v1.value0.value0, v1.value1));
                          };
                          throw new Error("Failed pattern match at Control.Monad.State.Trans line 88, column 16 - line 90, column 40: " + [ v1.value0.constructor.name ]);
                      })());
                  });
              };
              return function (s) {
                  return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(f$prime)(new Data_Tuple.Tuple(a, s));
              };
          };
      });
  };
  var monadStateStateT = function (dictMonad) {
      return new Control_Monad_State_Class.MonadState(function () {
          return monadStateT(dictMonad);
      }, function (f) {
          return StateT(function ($111) {
              return Control_Applicative.pure(dictMonad.Applicative0())(f($111));
          });
      });
  };
  exports["StateT"] = StateT;
  exports["functorStateT"] = functorStateT;
  exports["applyStateT"] = applyStateT;
  exports["applicativeStateT"] = applicativeStateT;
  exports["bindStateT"] = bindStateT;
  exports["monadStateT"] = monadStateT;
  exports["monadRecStateT"] = monadRecStateT;
  exports["monadStateStateT"] = monadStateStateT;
})(PS["Control.Monad.State.Trans"] = PS["Control.Monad.State.Trans"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Monad_State_Class = PS["Control.Monad.State.Class"];
  var Control_Monad_State_Trans = PS["Control.Monad.State.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];
  var execState = function (v) {
      return function (s) {
          var v1 = v(s);
          return v1.value1;
      };
  };
  exports["execState"] = execState;
})(PS["Control.Monad.State"] = PS["Control.Monad.State"] || {});
(function(exports) {
  /* global window */
  "use strict";

  exports.window = function () {
    return window;
  };
})(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["DOM.HTML"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  exports["window"] = $foreign.window;
})(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
(function(exports) {
    'use strict';

  // module Pux.Renderer.React

  var createReactClass = ("function" === 'function' && __webpack_require__(7))
           || (typeof window === 'object' && window.createReactClass);

  var React = ("function" === 'function' && __webpack_require__(0))
           || (typeof window === 'object' && window.React);

  var class_cache = {};

  var props_cache = {
    index: 0
  };

  exports.renderToDOM_ = function (selector) {
    var ReactDOM = ("function" === 'function' && __webpack_require__(0))
                || (typeof window === 'object' && window.ReactDOM);

    return function (reactClass) {
      return function () {
        ReactDOM.render(React.createElement(reactClass), document.querySelector(selector))
      };
    };
  };

  // Return a React component from virtual DOM signal.
  exports.toReact = function (vdomSignal) {
    var isBrowser = typeof window === 'object';

    // Sets the focus of element with "data-focused" attribute (`focused` constructor).
    // Provides declarative focus control.
    function setFocus () {
      if (isBrowser && window.__puxActiveElement === true) {
        if (window.__puxActiveElement !== document.activeElement) {
          var el = window.__puxActiveElement = document.querySelector('[data-focused]')
          if (el !== null && document.activeElement !== el) {
            el.focus();
          }
        }
      }
    }

    return createReactClass({
      componentWillMount: function () {
        var ctx = this;
        var subscribed = false;
        vdomSignal.subscribe(function () {
          if (subscribed === true) {
            ctx.forceUpdate();
          } else {
            subscribed = true;
          }
        });
      },
      componentDidMount: setFocus,
      componentDidUpdate: function () {
        props_cache.index = 0;
        setFocus();
      },
      render: function () {
        var vdom = vdomSignal.get();

        if (vdom.length === 1) return vdom[0];

        // Wrap multiple root elements in a div
        return React.createElement('div', null, vdom);
      }
    });
  };

  exports.reactAttr = function (str) {
    return str;
  };

  exports.reactHandler = function (input) {
    return function (handler) {
      return function (ev) {
        if (!ev || ev.nativeEvent === undefined) {
          input(handler(ev))();
        } else {
          input(handler(ev.nativeEvent))();
        }
      };
    };
  };

  // Wraps memoized views in a component class which only re-renders if the state
  // has changed.
  var PureComponent = createReactClass({
    shouldComponentUpdate: function (nextProps) {
      if (nextProps.state.st === undefined) return true;
      return nextProps.state.st !== this.props.state.st;
    },
    render: function () {
      return this.props.children;
    }
  });

  exports.reactElement = function (name, attrs, children) {
    // convert smolder attribute names to react attribute names
    var reactAttrs = {};
    for (var key in attrs) {
      if (attrMap[key]) {
        reactAttrs[attrMap[key]] = attrs[key];
      } else {
        reactAttrs[key] = attrs[key];
      }
    }

    if (reactAttrs.dangerouslySetInnerHTML !== undefined) {
      reactAttrs.dangerouslySetInnerHTML = { __html : reactAttrs.dangerouslySetInnerHTML };
    }

    // Support declarative focus attribute
    if (reactAttrs.focused !== undefined) {
      if (typeof window === 'object') {
        window.__puxActiveElement = true;
        reactAttrs['data-focused'] = 'focused';
      }
    }

    // Parse inline style, because React expects a map instead of a string.
    // Skipped if Preact is detected, because it supports a string.
    if (reactAttrs.style !== undefined) {
      reactAttrs.style = reactAttrs.style.split(';').reduce(function (prev, curr) {
        if (!curr) return prev;
        var prop = curr.split(':');
        var key = prop[0].replace(/^ */, '').replace(/ *$/, '').replace(/(-\w)/g, function (m, w) {
          return w[1].toUpperCase();
        });
        var val = prop[1].replace(/^ */, '').replace(/ *$/, '');
        prev[key] = val;
        return prev;
      }, {});
    }

    if (name === 'style') {
      // Convert style element children to string
      if (children !== null && children.length) {
        reactAttrs.dangerouslySetInnerHTML = { __html: children.join(' ') };
        children = null
      }
    } else if (name === 'reactclass') {
      // Support rendering of foreign react classes registered through
      // `registerClass`
      var component = class_cache[reactAttrs['data-pux-react-class']];
      var props = props_cache[reactAttrs['data-pux-react-props']];

      if (props === undefined) props = {};

      for (var key in reactAttrs) {
        if (key !== 'data-pux-react-class') {
          props[key] = reactAttrs[key];
        }
      }

      if (component) {
        return React.createElement(component, props, children);
      } else {
        return React.createElement('div', reactAttrs, children);
      }
    }

    // Eliminate React "key" errors for parents with a single child
    // (React checks for keys when children is passed as an array)
    if (children !== null) {
      if (children.length === 1) {
        children = children[0];
      } else if (children.length === 0) {
        children = undefined;
      }
    }

    // Cache react element. If the same node is rendered again the cached element will be used.
    if (name === 'thunk') {
      return React.createElement(PureComponent, reactAttrs, children);
    }

    return React.createElement(name, reactAttrs, children);
  };

  exports.reactText = function (string) {
    return string;
  };

  // Normalize Smolder attribute names with React attribute names
  var attrMap = {
    'accesskey': 'accessKey',
    'allowfullscreen': 'allowFullScreen',
    'allowtransparency': 'allowTransparency',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'autoplay': 'autoPlay',
    'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing',
    'charset': 'charSet',
    'class': 'className',
    'classid': 'classID',
    'colspan': 'colSpan',
    'contextmenu': 'contextMenu',
    'crossorigin': 'crossOrigin',
    'datetime': 'dateTime',
    'enctype': 'encType',
    'formaction': 'formAction',
    'formenctype': 'formEncType',
    'formmethod': 'formMethod',
    'formnovalidate': 'formNoValidate',
    'formtarget': 'formTarget',
    'frameborder': 'frameBorder',
    'for': 'htmlFor',
    'inputmode': 'inputMode',
    'keyparams': 'keyParams',
    'keytype': 'keyType',
    'marginheight': 'marginHeight',
    'marginwidth': 'marginWidth',
    'maxlength': 'maxLength',
    'mediagroup': 'mediaGroup',
    'minlength': 'minLength',
    'novalidate': 'noValidate',
    'radiogroup': 'radioGroup',
    'readonly': 'readOnly',
    'rowspan': 'rowSpan',
    'spellcheck': 'spellCheck',
    'srcdoc': 'srcDoc',
    'srclang': 'srcLang',
    'srcset': 'srcSet',
    'tabindex': 'tabIndex',
    'usemap': 'useMap'
  }
})(PS["Pux.Renderer.React"] = PS["Pux.Renderer.React"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Pux.Renderer.React"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Free = PS["Control.Monad.Free"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_State = PS["Control.Monad.State"];
  var Control_Monad_State_Class = PS["Control.Monad.State.Class"];
  var Control_Monad_State_Trans = PS["Control.Monad.State.Trans"];
  var Data_Array = PS["Data.Array"];
  var Data_CatList = PS["Data.CatList"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Identity = PS["Data.Identity"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_NaturalTransformation = PS["Data.NaturalTransformation"];
  var Data_Nullable = PS["Data.Nullable"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_StrMap = PS["Data.StrMap"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];
  var Pux_DOM_HTML = PS["Pux.DOM.HTML"];
  var Pux_DOM_HTML_Attributes = PS["Pux.DOM.HTML.Attributes"];
  var React = PS["React"];
  var Signal = PS["Signal"];
  var Signal_Channel = PS["Signal.Channel"];
  var Text_Smolder_Markup = PS["Text.Smolder.Markup"];        
  var renderAttrs = function (input) {
      return function (attrs) {
          return function (handlers) {
              var toTupleH = function (v) {
                  return new Data_Tuple.Tuple(v.value0, input(v.value1));
              };
              var toTupleA = function (v) {
                  return new Data_Tuple.Tuple(v.value0, $foreign.reactAttr(v.value1));
              };
              var tuples = Data_Semigroup.append(Data_CatList.semigroupCatList)(Data_Functor.map(Data_CatList.functorCatList)(toTupleA)(attrs))(Data_Functor.map(Data_CatList.functorCatList)(toTupleH)(handlers));
              return Data_StrMap.fromFoldable(Data_CatList.foldableCatList)(tuples);
          };
      };
  };
  var renderNodes = function (input) {
      return function (markup) {
          return Control_Monad_State.execState(Control_Monad_Free.foldFree(Control_Monad_State_Trans.monadRecStateT(Control_Monad_Rec_Class.monadRecIdentity))(renderItem(input))(markup))([  ]);
      };
  };
  var renderItem = function (input) {
      return function (v) {
          if (v instanceof Text_Smolder_Markup.Element) {
              var kids = renderNodes(input)(v.value1);
              var el = $foreign.reactElement(v.value0, renderAttrs(input)(v.value2)(v.value3), Data_Nullable.toNullable(new Data_Maybe.Just(kids)));
              return Control_Monad_State_Class.state(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (s) {
                  return Data_Tuple.Tuple.create(v.value4)(Data_Array.snoc(s)(el));
              });
          };
          if (v instanceof Text_Smolder_Markup.Content) {
              return Control_Monad_State_Class.state(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (s) {
                  return Data_Tuple.Tuple.create(v.value1)(Data_Array.snoc(s)($foreign.reactText(v.value0)));
              });
          };
          if (v instanceof Text_Smolder_Markup.Empty) {
              return Control_Applicative.pure(Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(v.value0);
          };
          throw new Error("Failed pattern match at Pux.Renderer.React line 110, column 1 - line 110, column 107: " + [ input.constructor.name, v.constructor.name ]);
      };
  };
  var hook = function (input) {
      return function (a) {
          return Signal_Channel.send(input)(Data_List.singleton(a));
      };
  };
  var renderToReact = function (markup) {
      return function (input) {
          return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)($foreign.toReact(Signal.flippedMap(Signal.functorSignal)(markup)(renderNodes($foreign.reactHandler(hook(input))))));
      };
  };
  var renderToDOM = function (selector) {
      return function (markup) {
          return function (input) {
              return Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)($foreign.renderToDOM_(selector))(renderToReact(markup)(input));
          };
      };
  };
  exports["renderToDOM"] = renderToDOM;
  exports["renderToReact"] = renderToReact;
})(PS["Pux.Renderer.React"] = PS["Pux.Renderer.React"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var App_Events = PS["App.Events"];
  var App_Routes = PS["App.Routes"];
  var App_State = PS["App.State"];
  var App_Util_History = PS["App.Util.History"];
  var App_View = PS["App.View"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_HTML = PS["DOM.HTML"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var Prelude = PS["Prelude"];
  var Pux = PS["Pux"];
  var Pux_DOM_Events = PS["Pux.DOM.Events"];
  var Pux_Renderer_React = PS["Pux.Renderer.React"];
  var Signal = PS["Signal"];        
  var main = function (url) {
      return function (api) {
          return function (v) {
              return function __do() {
                  var v1 = Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)(App_Util_History.sampleHash)(DOM_HTML.window)();
                  var routeSignal = Signal.flippedMap(Signal.functorSignal)(v1)(function ($12) {
                      return App_Events.ChangeURL.create(App_Routes.match($12));
                  });
                  var v2 = Pux.start({
                      initialState: (function () {
                          var $8 = {};
                          for (var $9 in v) {
                              if ({}.hasOwnProperty.call(v, $9)) {
                                  $8[$9] = v[$9];
                              };
                          };
                          $8.view = App_Routes.match(url);
                          return $8;
                      })(),
                      view: App_View.view,
                      foldp: App_Events.foldp,
                      inputs: [ Signal.constant(new App_Events.FetchRecipes(api)), routeSignal ]
                  })();
                  Pux_Renderer_React.renderToDOM("#app")(v2.markup)(v2.input)();
                  return v2;
              };
          };
      };
  };
  var initialState = App_State.init;
  exports["main"] = main;
  exports["initialState"] = initialState;
})(PS["Main"] = PS["Main"] || {});module.exports = PS
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate, __webpack_require__(14)(module), __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);