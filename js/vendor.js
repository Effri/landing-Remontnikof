/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/*!
 * Bootstrap v4.5.0 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
		typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
		(global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) {
	'use strict';

	$ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
	Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			if (enumerableOnly) symbols = symbols.filter(function (sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			});
			keys.push.apply(keys, symbols);
		}

		return keys;
	}

	function _objectSpread2(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};

			if (i % 2) {
				ownKeys(Object(source), true).forEach(function (key) {
					_defineProperty(target, key, source[key]);
				});
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
			} else {
				ownKeys(Object(source)).forEach(function (key) {
					Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
				});
			}
		}

		return target;
	}

	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		subClass.__proto__ = superClass;
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.5.0): util.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */
	/**
	 * ------------------------------------------------------------------------
	 * Private TransitionEnd Helpers
	 * ------------------------------------------------------------------------
	 */

	var TRANSITION_END = 'transitionend';
	var MAX_UID = 1000000;
	var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

	function toType(obj) {
		if (obj === null || typeof obj === 'undefined') {
			return "" + obj;
		}

		return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
	}

	function getSpecialTransitionEndEvent() {
		return {
			bindType: TRANSITION_END,
			delegateType: TRANSITION_END,
			handle: function handle(event) {
				if ($(event.target).is(this)) {
					return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
				}

				return undefined;
			}
		};
	}

	function transitionEndEmulator(duration) {
		var _this = this;

		var called = false;
		$(this).one(Util.TRANSITION_END, function () {
			called = true;
		});
		setTimeout(function () {
			if (!called) {
				Util.triggerTransitionEnd(_this);
			}
		}, duration);
		return this;
	}

	function setTransitionEndSupport() {
		$.fn.emulateTransitionEnd = transitionEndEmulator;
		$.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	}
	/**
	 * --------------------------------------------------------------------------
	 * Public Util Api
	 * --------------------------------------------------------------------------
	 */


	var Util = {
		TRANSITION_END: 'bsTransitionEnd',
		getUID: function getUID(prefix) {
			do {
				// eslint-disable-next-line no-bitwise
				prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
			} while (document.getElementById(prefix));

			return prefix;
		},
		getSelectorFromElement: function getSelectorFromElement(element) {
			var selector = element.getAttribute('data-target');

			if (!selector || selector === '#') {
				var hrefAttr = element.getAttribute('href');
				selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
			}

			try {
				return document.querySelector(selector) ? selector : null;
			} catch (err) {
				return null;
			}
		},
		getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
			if (!element) {
				return 0;
			} // Get transition-duration of the element


			var transitionDuration = $(element).css('transition-duration');
			var transitionDelay = $(element).css('transition-delay');
			var floatTransitionDuration = parseFloat(transitionDuration);
			var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

			if (!floatTransitionDuration && !floatTransitionDelay) {
				return 0;
			} // If multiple durations are defined, take the first


			transitionDuration = transitionDuration.split(',')[0];
			transitionDelay = transitionDelay.split(',')[0];
			return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
		},
		reflow: function reflow(element) {
			return element.offsetHeight;
		},
		triggerTransitionEnd: function triggerTransitionEnd(element) {
			$(element).trigger(TRANSITION_END);
		},
		// TODO: Remove in v5
		supportsTransitionEnd: function supportsTransitionEnd() {
			return Boolean(TRANSITION_END);
		},
		isElement: function isElement(obj) {
			return (obj[0] || obj).nodeType;
		},
		typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
			for (var property in configTypes) {
				if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
					var expectedTypes = configTypes[property];
					var value = config[property];
					var valueType = value && Util.isElement(value) ? 'element' : toType(value);

					if (!new RegExp(expectedTypes).test(valueType)) {
						throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
					}
				}
			}
		},
		findShadowRoot: function findShadowRoot(element) {
			if (!document.documentElement.attachShadow) {
				return null;
			} // Can find the shadow root otherwise it'll return the document


			if (typeof element.getRootNode === 'function') {
				var root = element.getRootNode();
				return root instanceof ShadowRoot ? root : null;
			}

			if (element instanceof ShadowRoot) {
				return element;
			} // when we don't find a shadow root


			if (!element.parentNode) {
				return null;
			}

			return Util.findShadowRoot(element.parentNode);
		},
		jQueryDetection: function jQueryDetection() {
			if (typeof $ === 'undefined') {
				throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
			}

			var version = $.fn.jquery.split(' ')[0].split('.');
			var minMajor = 1;
			var ltMajor = 2;
			var minMinor = 9;
			var minPatch = 1;
			var maxMajor = 4;

			if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
				throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
			}
		}
	};
	Util.jQueryDetection();
	setTransitionEndSupport();

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME = 'alert';
	var VERSION = '4.5.0';
	var DATA_KEY = 'bs.alert';
	var EVENT_KEY = "." + DATA_KEY;
	var DATA_API_KEY = '.data-api';
	var JQUERY_NO_CONFLICT = $.fn[NAME];
	var SELECTOR_DISMISS = '[data-dismiss="alert"]';
	var EVENT_CLOSE = "close" + EVENT_KEY;
	var EVENT_CLOSED = "closed" + EVENT_KEY;
	var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
	var CLASS_NAME_ALERT = 'alert';
	var CLASS_NAME_FADE = 'fade';
	var CLASS_NAME_SHOW = 'show';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Alert = /*#__PURE__*/ function () {
		function Alert(element) {
			this._element = element;
		} // Getters


		var _proto = Alert.prototype;

		// Public
		_proto.close = function close(element) {
			var rootElement = this._element;

			if (element) {
				rootElement = this._getRootElement(element);
			}

			var customEvent = this._triggerCloseEvent(rootElement);

			if (customEvent.isDefaultPrevented()) {
				return;
			}

			this._removeElement(rootElement);
		};

		_proto.dispose = function dispose() {
			$.removeData(this._element, DATA_KEY);
			this._element = null;
		} // Private
		;

		_proto._getRootElement = function _getRootElement(element) {
			var selector = Util.getSelectorFromElement(element);
			var parent = false;

			if (selector) {
				parent = document.querySelector(selector);
			}

			if (!parent) {
				parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
			}

			return parent;
		};

		_proto._triggerCloseEvent = function _triggerCloseEvent(element) {
			var closeEvent = $.Event(EVENT_CLOSE);
			$(element).trigger(closeEvent);
			return closeEvent;
		};

		_proto._removeElement = function _removeElement(element) {
			var _this = this;

			$(element).removeClass(CLASS_NAME_SHOW);

			if (!$(element).hasClass(CLASS_NAME_FADE)) {
				this._destroyElement(element);

				return;
			}

			var transitionDuration = Util.getTransitionDurationFromElement(element);
			$(element).one(Util.TRANSITION_END, function (event) {
				return _this._destroyElement(element, event);
			}).emulateTransitionEnd(transitionDuration);
		};

		_proto._destroyElement = function _destroyElement(element) {
			$(element).detach().trigger(EVENT_CLOSED).remove();
		} // Static
		;

		Alert._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var $element = $(this);
				var data = $element.data(DATA_KEY);

				if (!data) {
					data = new Alert(this);
					$element.data(DATA_KEY, data);
				}

				if (config === 'close') {
					data[config](this);
				}
			});
		};

		Alert._handleDismiss = function _handleDismiss(alertInstance) {
			return function (event) {
				if (event) {
					event.preventDefault();
				}

				alertInstance.close(this);
			};
		};

		_createClass(Alert, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION;
			}
		}]);

		return Alert;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME] = Alert._jQueryInterface;
	$.fn[NAME].Constructor = Alert;

	$.fn[NAME].noConflict = function () {
		$.fn[NAME] = JQUERY_NO_CONFLICT;
		return Alert._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$1 = 'button';
	var VERSION$1 = '4.5.0';
	var DATA_KEY$1 = 'bs.button';
	var EVENT_KEY$1 = "." + DATA_KEY$1;
	var DATA_API_KEY$1 = '.data-api';
	var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
	var CLASS_NAME_ACTIVE = 'active';
	var CLASS_NAME_BUTTON = 'btn';
	var CLASS_NAME_FOCUS = 'focus';
	var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
	var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
	var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
	var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
	var SELECTOR_INPUT = 'input:not([type="hidden"])';
	var SELECTOR_ACTIVE = '.active';
	var SELECTOR_BUTTON = '.btn';
	var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
	var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
	var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Button = /*#__PURE__*/ function () {
		function Button(element) {
			this._element = element;
		} // Getters


		var _proto = Button.prototype;

		// Public
		_proto.toggle = function toggle() {
			var triggerChangeEvent = true;
			var addAriaPressed = true;
			var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

			if (rootElement) {
				var input = this._element.querySelector(SELECTOR_INPUT);

				if (input) {
					if (input.type === 'radio') {
						if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
							triggerChangeEvent = false;
						} else {
							var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

							if (activeElement) {
								$(activeElement).removeClass(CLASS_NAME_ACTIVE);
							}
						}
					}

					if (triggerChangeEvent) {
						// if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
						if (input.type === 'checkbox' || input.type === 'radio') {
							input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
						}

						$(input).trigger('change');
					}

					input.focus();
					addAriaPressed = false;
				}
			}

			if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
				if (addAriaPressed) {
					this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
				}

				if (triggerChangeEvent) {
					$(this._element).toggleClass(CLASS_NAME_ACTIVE);
				}
			}
		};

		_proto.dispose = function dispose() {
			$.removeData(this._element, DATA_KEY$1);
			this._element = null;
		} // Static
		;

		Button._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var data = $(this).data(DATA_KEY$1);

				if (!data) {
					data = new Button(this);
					$(this).data(DATA_KEY$1, data);
				}

				if (config === 'toggle') {
					data[config]();
				}
			});
		};

		_createClass(Button, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$1;
			}
		}]);

		return Button;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
		var button = event.target;
		var initialButton = button;

		if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
			button = $(button).closest(SELECTOR_BUTTON)[0];
		}

		if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
			event.preventDefault(); // work around Firefox bug #1540995
		} else {
			var inputBtn = button.querySelector(SELECTOR_INPUT);

			if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
				event.preventDefault(); // work around Firefox bug #1540995

				return;
			}

			if (initialButton.tagName === 'LABEL' && inputBtn && inputBtn.type === 'checkbox') {
				event.preventDefault(); // work around event sent to label and input
			}

			Button._jQueryInterface.call($(button), 'toggle');
		}
	}).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
		var button = $(event.target).closest(SELECTOR_BUTTON)[0];
		$(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
	});
	$(window).on(EVENT_LOAD_DATA_API, function () {
		// ensure correct active class is set to match the controls' actual values/states
		// find all checkboxes/readio buttons inside data-toggle groups
		var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

		for (var i = 0, len = buttons.length; i < len; i++) {
			var button = buttons[i];
			var input = button.querySelector(SELECTOR_INPUT);

			if (input.checked || input.hasAttribute('checked')) {
				button.classList.add(CLASS_NAME_ACTIVE);
			} else {
				button.classList.remove(CLASS_NAME_ACTIVE);
			}
		} // find all button toggles


		buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

		for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
			var _button = buttons[_i];

			if (_button.getAttribute('aria-pressed') === 'true') {
				_button.classList.add(CLASS_NAME_ACTIVE);
			} else {
				_button.classList.remove(CLASS_NAME_ACTIVE);
			}
		}
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME$1] = Button._jQueryInterface;
	$.fn[NAME$1].Constructor = Button;

	$.fn[NAME$1].noConflict = function () {
		$.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
		return Button._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$2 = 'carousel';
	var VERSION$2 = '4.5.0';
	var DATA_KEY$2 = 'bs.carousel';
	var EVENT_KEY$2 = "." + DATA_KEY$2;
	var DATA_API_KEY$2 = '.data-api';
	var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
	var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

	var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

	var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

	var SWIPE_THRESHOLD = 40;
	var Default = {
		interval: 5000,
		keyboard: true,
		slide: false,
		pause: 'hover',
		wrap: true,
		touch: true
	};
	var DefaultType = {
		interval: '(number|boolean)',
		keyboard: 'boolean',
		slide: '(boolean|string)',
		pause: '(string|boolean)',
		wrap: 'boolean',
		touch: 'boolean'
	};
	var DIRECTION_NEXT = 'next';
	var DIRECTION_PREV = 'prev';
	var DIRECTION_LEFT = 'left';
	var DIRECTION_RIGHT = 'right';
	var EVENT_SLIDE = "slide" + EVENT_KEY$2;
	var EVENT_SLID = "slid" + EVENT_KEY$2;
	var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
	var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
	var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
	var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
	var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
	var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
	var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
	var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
	var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
	var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
	var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
	var CLASS_NAME_CAROUSEL = 'carousel';
	var CLASS_NAME_ACTIVE$1 = 'active';
	var CLASS_NAME_SLIDE = 'slide';
	var CLASS_NAME_RIGHT = 'carousel-item-right';
	var CLASS_NAME_LEFT = 'carousel-item-left';
	var CLASS_NAME_NEXT = 'carousel-item-next';
	var CLASS_NAME_PREV = 'carousel-item-prev';
	var CLASS_NAME_POINTER_EVENT = 'pointer-event';
	var SELECTOR_ACTIVE$1 = '.active';
	var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
	var SELECTOR_ITEM = '.carousel-item';
	var SELECTOR_ITEM_IMG = '.carousel-item img';
	var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
	var SELECTOR_INDICATORS = '.carousel-indicators';
	var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
	var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
	var PointerType = {
		TOUCH: 'touch',
		PEN: 'pen'
	};
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Carousel = /*#__PURE__*/ function () {
		function Carousel(element, config) {
			this._items = null;
			this._interval = null;
			this._activeElement = null;
			this._isPaused = false;
			this._isSliding = false;
			this.touchTimeout = null;
			this.touchStartX = 0;
			this.touchDeltaX = 0;
			this._config = this._getConfig(config);
			this._element = element;
			this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
			this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
			this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

			this._addEventListeners();
		} // Getters


		var _proto = Carousel.prototype;

		// Public
		_proto.next = function next() {
			if (!this._isSliding) {
				this._slide(DIRECTION_NEXT);
			}
		};

		_proto.nextWhenVisible = function nextWhenVisible() {
			// Don't call next when the page isn't visible
			// or the carousel or its parent isn't visible
			if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
				this.next();
			}
		};

		_proto.prev = function prev() {
			if (!this._isSliding) {
				this._slide(DIRECTION_PREV);
			}
		};

		_proto.pause = function pause(event) {
			if (!event) {
				this._isPaused = true;
			}

			if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
				Util.triggerTransitionEnd(this._element);
				this.cycle(true);
			}

			clearInterval(this._interval);
			this._interval = null;
		};

		_proto.cycle = function cycle(event) {
			if (!event) {
				this._isPaused = false;
			}

			if (this._interval) {
				clearInterval(this._interval);
				this._interval = null;
			}

			if (this._config.interval && !this._isPaused) {
				this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
			}
		};

		_proto.to = function to(index) {
			var _this = this;

			this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

			var activeIndex = this._getItemIndex(this._activeElement);

			if (index > this._items.length - 1 || index < 0) {
				return;
			}

			if (this._isSliding) {
				$(this._element).one(EVENT_SLID, function () {
					return _this.to(index);
				});
				return;
			}

			if (activeIndex === index) {
				this.pause();
				this.cycle();
				return;
			}

			var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

			this._slide(direction, this._items[index]);
		};

		_proto.dispose = function dispose() {
			$(this._element).off(EVENT_KEY$2);
			$.removeData(this._element, DATA_KEY$2);
			this._items = null;
			this._config = null;
			this._element = null;
			this._interval = null;
			this._isPaused = null;
			this._isSliding = null;
			this._activeElement = null;
			this._indicatorsElement = null;
		} // Private
		;

		_proto._getConfig = function _getConfig(config) {
			config = _objectSpread2(_objectSpread2({}, Default), config);
			Util.typeCheckConfig(NAME$2, config, DefaultType);
			return config;
		};

		_proto._handleSwipe = function _handleSwipe() {
			var absDeltax = Math.abs(this.touchDeltaX);

			if (absDeltax <= SWIPE_THRESHOLD) {
				return;
			}

			var direction = absDeltax / this.touchDeltaX;
			this.touchDeltaX = 0; // swipe left

			if (direction > 0) {
				this.prev();
			} // swipe right


			if (direction < 0) {
				this.next();
			}
		};

		_proto._addEventListeners = function _addEventListeners() {
			var _this2 = this;

			if (this._config.keyboard) {
				$(this._element).on(EVENT_KEYDOWN, function (event) {
					return _this2._keydown(event);
				});
			}

			if (this._config.pause === 'hover') {
				$(this._element).on(EVENT_MOUSEENTER, function (event) {
					return _this2.pause(event);
				}).on(EVENT_MOUSELEAVE, function (event) {
					return _this2.cycle(event);
				});
			}

			if (this._config.touch) {
				this._addTouchEventListeners();
			}
		};

		_proto._addTouchEventListeners = function _addTouchEventListeners() {
			var _this3 = this;

			if (!this._touchSupported) {
				return;
			}

			var start = function start(event) {
				if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
					_this3.touchStartX = event.originalEvent.clientX;
				} else if (!_this3._pointerEvent) {
					_this3.touchStartX = event.originalEvent.touches[0].clientX;
				}
			};

			var move = function move(event) {
				// ensure swiping with one touch and not pinching
				if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
					_this3.touchDeltaX = 0;
				} else {
					_this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
				}
			};

			var end = function end(event) {
				if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
					_this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
				}

				_this3._handleSwipe();

				if (_this3._config.pause === 'hover') {
					// If it's a touch-enabled device, mouseenter/leave are fired as
					// part of the mouse compatibility events on first tap - the carousel
					// would stop cycling until user tapped out of it;
					// here, we listen for touchend, explicitly pause the carousel
					// (as if it's the second time we tap on it, mouseenter compat event
					// is NOT fired) and after a timeout (to allow for mouse compatibility
					// events to fire) we explicitly restart cycling
					_this3.pause();

					if (_this3.touchTimeout) {
						clearTimeout(_this3.touchTimeout);
					}

					_this3.touchTimeout = setTimeout(function (event) {
						return _this3.cycle(event);
					}, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
				}
			};

			$(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
				return e.preventDefault();
			});

			if (this._pointerEvent) {
				$(this._element).on(EVENT_POINTERDOWN, function (event) {
					return start(event);
				});
				$(this._element).on(EVENT_POINTERUP, function (event) {
					return end(event);
				});

				this._element.classList.add(CLASS_NAME_POINTER_EVENT);
			} else {
				$(this._element).on(EVENT_TOUCHSTART, function (event) {
					return start(event);
				});
				$(this._element).on(EVENT_TOUCHMOVE, function (event) {
					return move(event);
				});
				$(this._element).on(EVENT_TOUCHEND, function (event) {
					return end(event);
				});
			}
		};

		_proto._keydown = function _keydown(event) {
			if (/input|textarea/i.test(event.target.tagName)) {
				return;
			}

			switch (event.which) {
				case ARROW_LEFT_KEYCODE:
					event.preventDefault();
					this.prev();
					break;

				case ARROW_RIGHT_KEYCODE:
					event.preventDefault();
					this.next();
					break;
			}
		};

		_proto._getItemIndex = function _getItemIndex(element) {
			this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
			return this._items.indexOf(element);
		};

		_proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
			var isNextDirection = direction === DIRECTION_NEXT;
			var isPrevDirection = direction === DIRECTION_PREV;

			var activeIndex = this._getItemIndex(activeElement);

			var lastItemIndex = this._items.length - 1;
			var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

			if (isGoingToWrap && !this._config.wrap) {
				return activeElement;
			}

			var delta = direction === DIRECTION_PREV ? -1 : 1;
			var itemIndex = (activeIndex + delta) % this._items.length;
			return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
		};

		_proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
			var targetIndex = this._getItemIndex(relatedTarget);

			var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

			var slideEvent = $.Event(EVENT_SLIDE, {
				relatedTarget: relatedTarget,
				direction: eventDirectionName,
				from: fromIndex,
				to: targetIndex
			});
			$(this._element).trigger(slideEvent);
			return slideEvent;
		};

		_proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
			if (this._indicatorsElement) {
				var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
				$(indicators).removeClass(CLASS_NAME_ACTIVE$1);

				var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

				if (nextIndicator) {
					$(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
				}
			}
		};

		_proto._slide = function _slide(direction, element) {
			var _this4 = this;

			var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

			var activeElementIndex = this._getItemIndex(activeElement);

			var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

			var nextElementIndex = this._getItemIndex(nextElement);

			var isCycling = Boolean(this._interval);
			var directionalClassName;
			var orderClassName;
			var eventDirectionName;

			if (direction === DIRECTION_NEXT) {
				directionalClassName = CLASS_NAME_LEFT;
				orderClassName = CLASS_NAME_NEXT;
				eventDirectionName = DIRECTION_LEFT;
			} else {
				directionalClassName = CLASS_NAME_RIGHT;
				orderClassName = CLASS_NAME_PREV;
				eventDirectionName = DIRECTION_RIGHT;
			}

			if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
				this._isSliding = false;
				return;
			}

			var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

			if (slideEvent.isDefaultPrevented()) {
				return;
			}

			if (!activeElement || !nextElement) {
				// Some weirdness is happening, so we bail
				return;
			}

			this._isSliding = true;

			if (isCycling) {
				this.pause();
			}

			this._setActiveIndicatorElement(nextElement);

			var slidEvent = $.Event(EVENT_SLID, {
				relatedTarget: nextElement,
				direction: eventDirectionName,
				from: activeElementIndex,
				to: nextElementIndex
			});

			if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
				$(nextElement).addClass(orderClassName);
				Util.reflow(nextElement);
				$(activeElement).addClass(directionalClassName);
				$(nextElement).addClass(directionalClassName);
				var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

				if (nextElementInterval) {
					this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
					this._config.interval = nextElementInterval;
				} else {
					this._config.interval = this._config.defaultInterval || this._config.interval;
				}

				var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
				$(activeElement).one(Util.TRANSITION_END, function () {
					$(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
					$(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
					_this4._isSliding = false;
					setTimeout(function () {
						return $(_this4._element).trigger(slidEvent);
					}, 0);
				}).emulateTransitionEnd(transitionDuration);
			} else {
				$(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
				$(nextElement).addClass(CLASS_NAME_ACTIVE$1);
				this._isSliding = false;
				$(this._element).trigger(slidEvent);
			}

			if (isCycling) {
				this.cycle();
			}
		} // Static
		;

		Carousel._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var data = $(this).data(DATA_KEY$2);

				var _config = _objectSpread2(_objectSpread2({}, Default), $(this).data());

				if (typeof config === 'object') {
					_config = _objectSpread2(_objectSpread2({}, _config), config);
				}

				var action = typeof config === 'string' ? config : _config.slide;

				if (!data) {
					data = new Carousel(this, _config);
					$(this).data(DATA_KEY$2, data);
				}

				if (typeof config === 'number') {
					data.to(config);
				} else if (typeof action === 'string') {
					if (typeof data[action] === 'undefined') {
						throw new TypeError("No method named \"" + action + "\"");
					}

					data[action]();
				} else if (_config.interval && _config.ride) {
					data.pause();
					data.cycle();
				}
			});
		};

		Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
			var selector = Util.getSelectorFromElement(this);

			if (!selector) {
				return;
			}

			var target = $(selector)[0];

			if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
				return;
			}

			var config = _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

			var slideIndex = this.getAttribute('data-slide-to');

			if (slideIndex) {
				config.interval = false;
			}

			Carousel._jQueryInterface.call($(target), config);

			if (slideIndex) {
				$(target).data(DATA_KEY$2).to(slideIndex);
			}

			event.preventDefault();
		};

		_createClass(Carousel, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$2;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default;
			}
		}]);

		return Carousel;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
	$(window).on(EVENT_LOAD_DATA_API$1, function () {
		var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

		for (var i = 0, len = carousels.length; i < len; i++) {
			var $carousel = $(carousels[i]);

			Carousel._jQueryInterface.call($carousel, $carousel.data());
		}
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME$2] = Carousel._jQueryInterface;
	$.fn[NAME$2].Constructor = Carousel;

	$.fn[NAME$2].noConflict = function () {
		$.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
		return Carousel._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$3 = 'collapse';
	var VERSION$3 = '4.5.0';
	var DATA_KEY$3 = 'bs.collapse';
	var EVENT_KEY$3 = "." + DATA_KEY$3;
	var DATA_API_KEY$3 = '.data-api';
	var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
	var Default$1 = {
		toggle: true,
		parent: ''
	};
	var DefaultType$1 = {
		toggle: 'boolean',
		parent: '(string|element)'
	};
	var EVENT_SHOW = "show" + EVENT_KEY$3;
	var EVENT_SHOWN = "shown" + EVENT_KEY$3;
	var EVENT_HIDE = "hide" + EVENT_KEY$3;
	var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
	var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
	var CLASS_NAME_SHOW$1 = 'show';
	var CLASS_NAME_COLLAPSE = 'collapse';
	var CLASS_NAME_COLLAPSING = 'collapsing';
	var CLASS_NAME_COLLAPSED = 'collapsed';
	var DIMENSION_WIDTH = 'width';
	var DIMENSION_HEIGHT = 'height';
	var SELECTOR_ACTIVES = '.show, .collapsing';
	var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Collapse = /*#__PURE__*/ function () {
		function Collapse(element, config) {
			this._isTransitioning = false;
			this._element = element;
			this._config = this._getConfig(config);
			this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
			var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

			for (var i = 0, len = toggleList.length; i < len; i++) {
				var elem = toggleList[i];
				var selector = Util.getSelectorFromElement(elem);
				var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
					return foundElem === element;
				});

				if (selector !== null && filterElement.length > 0) {
					this._selector = selector;

					this._triggerArray.push(elem);
				}
			}

			this._parent = this._config.parent ? this._getParent() : null;

			if (!this._config.parent) {
				this._addAriaAndCollapsedClass(this._element, this._triggerArray);
			}

			if (this._config.toggle) {
				this.toggle();
			}
		} // Getters


		var _proto = Collapse.prototype;

		// Public
		_proto.toggle = function toggle() {
			if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
				this.hide();
			} else {
				this.show();
			}
		};

		_proto.show = function show() {
			var _this = this;

			if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
				return;
			}

			var actives;
			var activesData;

			if (this._parent) {
				actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
					if (typeof _this._config.parent === 'string') {
						return elem.getAttribute('data-parent') === _this._config.parent;
					}

					return elem.classList.contains(CLASS_NAME_COLLAPSE);
				});

				if (actives.length === 0) {
					actives = null;
				}
			}

			if (actives) {
				activesData = $(actives).not(this._selector).data(DATA_KEY$3);

				if (activesData && activesData._isTransitioning) {
					return;
				}
			}

			var startEvent = $.Event(EVENT_SHOW);
			$(this._element).trigger(startEvent);

			if (startEvent.isDefaultPrevented()) {
				return;
			}

			if (actives) {
				Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

				if (!activesData) {
					$(actives).data(DATA_KEY$3, null);
				}
			}

			var dimension = this._getDimension();

			$(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
			this._element.style[dimension] = 0;

			if (this._triggerArray.length) {
				$(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
			}

			this.setTransitioning(true);

			var complete = function complete() {
				$(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
				_this._element.style[dimension] = '';

				_this.setTransitioning(false);

				$(_this._element).trigger(EVENT_SHOWN);
			};

			var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
			var scrollSize = "scroll" + capitalizedDimension;
			var transitionDuration = Util.getTransitionDurationFromElement(this._element);
			$(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
			this._element.style[dimension] = this._element[scrollSize] + "px";
		};

		_proto.hide = function hide() {
			var _this2 = this;

			if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
				return;
			}

			var startEvent = $.Event(EVENT_HIDE);
			$(this._element).trigger(startEvent);

			if (startEvent.isDefaultPrevented()) {
				return;
			}

			var dimension = this._getDimension();

			this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
			Util.reflow(this._element);
			$(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
			var triggerArrayLength = this._triggerArray.length;

			if (triggerArrayLength > 0) {
				for (var i = 0; i < triggerArrayLength; i++) {
					var trigger = this._triggerArray[i];
					var selector = Util.getSelectorFromElement(trigger);

					if (selector !== null) {
						var $elem = $([].slice.call(document.querySelectorAll(selector)));

						if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
							$(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
						}
					}
				}
			}

			this.setTransitioning(true);

			var complete = function complete() {
				_this2.setTransitioning(false);

				$(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
			};

			this._element.style[dimension] = '';
			var transitionDuration = Util.getTransitionDurationFromElement(this._element);
			$(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
		};

		_proto.setTransitioning = function setTransitioning(isTransitioning) {
			this._isTransitioning = isTransitioning;
		};

		_proto.dispose = function dispose() {
			$.removeData(this._element, DATA_KEY$3);
			this._config = null;
			this._parent = null;
			this._element = null;
			this._triggerArray = null;
			this._isTransitioning = null;
		} // Private
		;

		_proto._getConfig = function _getConfig(config) {
			config = _objectSpread2(_objectSpread2({}, Default$1), config);
			config.toggle = Boolean(config.toggle); // Coerce string values

			Util.typeCheckConfig(NAME$3, config, DefaultType$1);
			return config;
		};

		_proto._getDimension = function _getDimension() {
			var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
			return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
		};

		_proto._getParent = function _getParent() {
			var _this3 = this;

			var parent;

			if (Util.isElement(this._config.parent)) {
				parent = this._config.parent; // It's a jQuery object

				if (typeof this._config.parent.jquery !== 'undefined') {
					parent = this._config.parent[0];
				}
			} else {
				parent = document.querySelector(this._config.parent);
			}

			var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
			var children = [].slice.call(parent.querySelectorAll(selector));
			$(children).each(function (i, element) {
				_this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
			});
			return parent;
		};

		_proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
			var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

			if (triggerArray.length) {
				$(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
			}
		} // Static
		;

		Collapse._getTargetFromElement = function _getTargetFromElement(element) {
			var selector = Util.getSelectorFromElement(element);
			return selector ? document.querySelector(selector) : null;
		};

		Collapse._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var $this = $(this);
				var data = $this.data(DATA_KEY$3);

				var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$1), $this.data()), typeof config === 'object' && config ? config : {});

				if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
					_config.toggle = false;
				}

				if (!data) {
					data = new Collapse(this, _config);
					$this.data(DATA_KEY$3, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config]();
				}
			});
		};

		_createClass(Collapse, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$3;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default$1;
			}
		}]);

		return Collapse;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
		// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
		if (event.currentTarget.tagName === 'A') {
			event.preventDefault();
		}

		var $trigger = $(this);
		var selector = Util.getSelectorFromElement(this);
		var selectors = [].slice.call(document.querySelectorAll(selector));
		$(selectors).each(function () {
			var $target = $(this);
			var data = $target.data(DATA_KEY$3);
			var config = data ? 'toggle' : $trigger.data();

			Collapse._jQueryInterface.call($target, config);
		});
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME$3] = Collapse._jQueryInterface;
	$.fn[NAME$3].Constructor = Collapse;

	$.fn[NAME$3].noConflict = function () {
		$.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
		return Collapse._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$4 = 'dropdown';
	var VERSION$4 = '4.5.0';
	var DATA_KEY$4 = 'bs.dropdown';
	var EVENT_KEY$4 = "." + DATA_KEY$4;
	var DATA_API_KEY$4 = '.data-api';
	var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
	var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

	var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

	var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

	var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

	var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

	var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

	var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
	var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
	var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
	var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
	var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
	var EVENT_CLICK = "click" + EVENT_KEY$4;
	var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
	var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
	var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
	var CLASS_NAME_DISABLED = 'disabled';
	var CLASS_NAME_SHOW$2 = 'show';
	var CLASS_NAME_DROPUP = 'dropup';
	var CLASS_NAME_DROPRIGHT = 'dropright';
	var CLASS_NAME_DROPLEFT = 'dropleft';
	var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
	var CLASS_NAME_POSITION_STATIC = 'position-static';
	var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
	var SELECTOR_FORM_CHILD = '.dropdown form';
	var SELECTOR_MENU = '.dropdown-menu';
	var SELECTOR_NAVBAR_NAV = '.navbar-nav';
	var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
	var PLACEMENT_TOP = 'top-start';
	var PLACEMENT_TOPEND = 'top-end';
	var PLACEMENT_BOTTOM = 'bottom-start';
	var PLACEMENT_BOTTOMEND = 'bottom-end';
	var PLACEMENT_RIGHT = 'right-start';
	var PLACEMENT_LEFT = 'left-start';
	var Default$2 = {
		offset: 0,
		flip: true,
		boundary: 'scrollParent',
		reference: 'toggle',
		display: 'dynamic',
		popperConfig: null
	};
	var DefaultType$2 = {
		offset: '(number|string|function)',
		flip: 'boolean',
		boundary: '(string|element)',
		reference: '(string|element)',
		display: 'string',
		popperConfig: '(null|object)'
	};
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Dropdown = /*#__PURE__*/ function () {
		function Dropdown(element, config) {
			this._element = element;
			this._popper = null;
			this._config = this._getConfig(config);
			this._menu = this._getMenuElement();
			this._inNavbar = this._detectNavbar();

			this._addEventListeners();
		} // Getters


		var _proto = Dropdown.prototype;

		// Public
		_proto.toggle = function toggle() {
			if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
				return;
			}

			var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

			Dropdown._clearMenus();

			if (isActive) {
				return;
			}

			this.show(true);
		};

		_proto.show = function show(usePopper) {
			if (usePopper === void 0) {
				usePopper = false;
			}

			if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
				return;
			}

			var relatedTarget = {
				relatedTarget: this._element
			};
			var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

			var parent = Dropdown._getParentFromElement(this._element);

			$(parent).trigger(showEvent);

			if (showEvent.isDefaultPrevented()) {
				return;
			} // Disable totally Popper.js for Dropdown in Navbar


			if (!this._inNavbar && usePopper) {
				/**
				 * Check for Popper dependency
				 * Popper - https://popper.js.org
				 */
				if (typeof Popper === 'undefined') {
					throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
				}

				var referenceElement = this._element;

				if (this._config.reference === 'parent') {
					referenceElement = parent;
				} else if (Util.isElement(this._config.reference)) {
					referenceElement = this._config.reference; // Check if it's jQuery element

					if (typeof this._config.reference.jquery !== 'undefined') {
						referenceElement = this._config.reference[0];
					}
				} // If boundary is not `scrollParent`, then set position to `static`
				// to allow the menu to "escape" the scroll parent's boundaries
				// https://github.com/twbs/bootstrap/issues/24251


				if (this._config.boundary !== 'scrollParent') {
					$(parent).addClass(CLASS_NAME_POSITION_STATIC);
				}

				this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
			} // If this is a touch-enabled device we add extra
			// empty mouseover listeners to the body's immediate children;
			// only needed because of broken event delegation on iOS
			// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


			if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
				$(document.body).children().on('mouseover', null, $.noop);
			}

			this._element.focus();

			this._element.setAttribute('aria-expanded', true);

			$(this._menu).toggleClass(CLASS_NAME_SHOW$2);
			$(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
		};

		_proto.hide = function hide() {
			if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
				return;
			}

			var relatedTarget = {
				relatedTarget: this._element
			};
			var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

			var parent = Dropdown._getParentFromElement(this._element);

			$(parent).trigger(hideEvent);

			if (hideEvent.isDefaultPrevented()) {
				return;
			}

			if (this._popper) {
				this._popper.destroy();
			}

			$(this._menu).toggleClass(CLASS_NAME_SHOW$2);
			$(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
		};

		_proto.dispose = function dispose() {
			$.removeData(this._element, DATA_KEY$4);
			$(this._element).off(EVENT_KEY$4);
			this._element = null;
			this._menu = null;

			if (this._popper !== null) {
				this._popper.destroy();

				this._popper = null;
			}
		};

		_proto.update = function update() {
			this._inNavbar = this._detectNavbar();

			if (this._popper !== null) {
				this._popper.scheduleUpdate();
			}
		} // Private
		;

		_proto._addEventListeners = function _addEventListeners() {
			var _this = this;

			$(this._element).on(EVENT_CLICK, function (event) {
				event.preventDefault();
				event.stopPropagation();

				_this.toggle();
			});
		};

		_proto._getConfig = function _getConfig(config) {
			config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
			Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
			return config;
		};

		_proto._getMenuElement = function _getMenuElement() {
			if (!this._menu) {
				var parent = Dropdown._getParentFromElement(this._element);

				if (parent) {
					this._menu = parent.querySelector(SELECTOR_MENU);
				}
			}

			return this._menu;
		};

		_proto._getPlacement = function _getPlacement() {
			var $parentDropdown = $(this._element.parentNode);
			var placement = PLACEMENT_BOTTOM; // Handle dropup

			if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
				placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
			} else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
				placement = PLACEMENT_RIGHT;
			} else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
				placement = PLACEMENT_LEFT;
			} else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
				placement = PLACEMENT_BOTTOMEND;
			}

			return placement;
		};

		_proto._detectNavbar = function _detectNavbar() {
			return $(this._element).closest('.navbar').length > 0;
		};

		_proto._getOffset = function _getOffset() {
			var _this2 = this;

			var offset = {};

			if (typeof this._config.offset === 'function') {
				offset.fn = function (data) {
					data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this2._config.offset(data.offsets, _this2._element) || {});
					return data;
				};
			} else {
				offset.offset = this._config.offset;
			}

			return offset;
		};

		_proto._getPopperConfig = function _getPopperConfig() {
			var popperConfig = {
				placement: this._getPlacement(),
				modifiers: {
					offset: this._getOffset(),
					flip: {
						enabled: this._config.flip
					},
					preventOverflow: {
						boundariesElement: this._config.boundary
					}
				}
			}; // Disable Popper.js if we have a static display

			if (this._config.display === 'static') {
				popperConfig.modifiers.applyStyle = {
					enabled: false
				};
			}

			return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
		} // Static
		;

		Dropdown._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var data = $(this).data(DATA_KEY$4);

				var _config = typeof config === 'object' ? config : null;

				if (!data) {
					data = new Dropdown(this, _config);
					$(this).data(DATA_KEY$4, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config]();
				}
			});
		};

		Dropdown._clearMenus = function _clearMenus(event) {
			if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
				return;
			}

			var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

			for (var i = 0, len = toggles.length; i < len; i++) {
				var parent = Dropdown._getParentFromElement(toggles[i]);

				var context = $(toggles[i]).data(DATA_KEY$4);
				var relatedTarget = {
					relatedTarget: toggles[i]
				};

				if (event && event.type === 'click') {
					relatedTarget.clickEvent = event;
				}

				if (!context) {
					continue;
				}

				var dropdownMenu = context._menu;

				if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
					continue;
				}

				if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
					continue;
				}

				var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
				$(parent).trigger(hideEvent);

				if (hideEvent.isDefaultPrevented()) {
					continue;
				} // If this is a touch-enabled device we remove the extra
				// empty mouseover listeners we added for iOS support


				if ('ontouchstart' in document.documentElement) {
					$(document.body).children().off('mouseover', null, $.noop);
				}

				toggles[i].setAttribute('aria-expanded', 'false');

				if (context._popper) {
					context._popper.destroy();
				}

				$(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
				$(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
			}
		};

		Dropdown._getParentFromElement = function _getParentFromElement(element) {
			var parent;
			var selector = Util.getSelectorFromElement(element);

			if (selector) {
				parent = document.querySelector(selector);
			}

			return parent || element.parentNode;
		} // eslint-disable-next-line complexity
		;

		Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
			// If not input/textarea:
			//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
			// If input/textarea:
			//  - If space key => not a dropdown command
			//  - If key is other than escape
			//    - If key is not up or down => not a dropdown command
			//    - If trigger inside the menu => not a dropdown command
			if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
				return;
			}

			if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
				return;
			}

			var parent = Dropdown._getParentFromElement(this);

			var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

			if (!isActive && event.which === ESCAPE_KEYCODE) {
				return;
			}

			event.preventDefault();
			event.stopPropagation();

			if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
				if (event.which === ESCAPE_KEYCODE) {
					$(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
				}

				$(this).trigger('click');
				return;
			}

			var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
				return $(item).is(':visible');
			});

			if (items.length === 0) {
				return;
			}

			var index = items.indexOf(event.target);

			if (event.which === ARROW_UP_KEYCODE && index > 0) {
				// Up
				index--;
			}

			if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
				// Down
				index++;
			}

			if (index < 0) {
				index = 0;
			}

			items[index].focus();
		};

		_createClass(Dropdown, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$4;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default$2;
			}
		}, {
			key: "DefaultType",
			get: function get() {
				return DefaultType$2;
			}
		}]);

		return Dropdown;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
		event.preventDefault();
		event.stopPropagation();

		Dropdown._jQueryInterface.call($(this), 'toggle');
	}).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
		e.stopPropagation();
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME$4] = Dropdown._jQueryInterface;
	$.fn[NAME$4].Constructor = Dropdown;

	$.fn[NAME$4].noConflict = function () {
		$.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
		return Dropdown._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$5 = 'modal';
	var VERSION$5 = '4.5.0';
	var DATA_KEY$5 = 'bs.modal';
	var EVENT_KEY$5 = "." + DATA_KEY$5;
	var DATA_API_KEY$5 = '.data-api';
	var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
	var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

	var Default$3 = {
		backdrop: true,
		keyboard: true,
		focus: true,
		show: true
	};
	var DefaultType$3 = {
		backdrop: '(boolean|string)',
		keyboard: 'boolean',
		focus: 'boolean',
		show: 'boolean'
	};
	var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
	var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
	var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
	var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
	var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
	var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
	var EVENT_RESIZE = "resize" + EVENT_KEY$5;
	var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
	var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
	var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
	var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
	var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
	var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
	var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
	var CLASS_NAME_BACKDROP = 'modal-backdrop';
	var CLASS_NAME_OPEN = 'modal-open';
	var CLASS_NAME_FADE$1 = 'fade';
	var CLASS_NAME_SHOW$3 = 'show';
	var CLASS_NAME_STATIC = 'modal-static';
	var SELECTOR_DIALOG = '.modal-dialog';
	var SELECTOR_MODAL_BODY = '.modal-body';
	var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
	var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
	var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
	var SELECTOR_STICKY_CONTENT = '.sticky-top';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Modal = /*#__PURE__*/ function () {
		function Modal(element, config) {
			this._config = this._getConfig(config);
			this._element = element;
			this._dialog = element.querySelector(SELECTOR_DIALOG);
			this._backdrop = null;
			this._isShown = false;
			this._isBodyOverflowing = false;
			this._ignoreBackdropClick = false;
			this._isTransitioning = false;
			this._scrollbarWidth = 0;
		} // Getters


		var _proto = Modal.prototype;

		// Public
		_proto.toggle = function toggle(relatedTarget) {
			return this._isShown ? this.hide() : this.show(relatedTarget);
		};

		_proto.show = function show(relatedTarget) {
			var _this = this;

			if (this._isShown || this._isTransitioning) {
				return;
			}

			if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
				this._isTransitioning = true;
			}

			var showEvent = $.Event(EVENT_SHOW$2, {
				relatedTarget: relatedTarget
			});
			$(this._element).trigger(showEvent);

			if (this._isShown || showEvent.isDefaultPrevented()) {
				return;
			}

			this._isShown = true;

			this._checkScrollbar();

			this._setScrollbar();

			this._adjustDialog();

			this._setEscapeEvent();

			this._setResizeEvent();

			$(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
				return _this.hide(event);
			});
			$(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
				$(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
					if ($(event.target).is(_this._element)) {
						_this._ignoreBackdropClick = true;
					}
				});
			});

			this._showBackdrop(function () {
				return _this._showElement(relatedTarget);
			});
		};

		_proto.hide = function hide(event) {
			var _this2 = this;

			if (event) {
				event.preventDefault();
			}

			if (!this._isShown || this._isTransitioning) {
				return;
			}

			var hideEvent = $.Event(EVENT_HIDE$2);
			$(this._element).trigger(hideEvent);

			if (!this._isShown || hideEvent.isDefaultPrevented()) {
				return;
			}

			this._isShown = false;
			var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

			if (transition) {
				this._isTransitioning = true;
			}

			this._setEscapeEvent();

			this._setResizeEvent();

			$(document).off(EVENT_FOCUSIN);
			$(this._element).removeClass(CLASS_NAME_SHOW$3);
			$(this._element).off(EVENT_CLICK_DISMISS);
			$(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

			if (transition) {
				var transitionDuration = Util.getTransitionDurationFromElement(this._element);
				$(this._element).one(Util.TRANSITION_END, function (event) {
					return _this2._hideModal(event);
				}).emulateTransitionEnd(transitionDuration);
			} else {
				this._hideModal();
			}
		};

		_proto.dispose = function dispose() {
			[window, this._element, this._dialog].forEach(function (htmlElement) {
				return $(htmlElement).off(EVENT_KEY$5);
			});
			/**
			 * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
			 * Do not move `document` in `htmlElements` array
			 * It will remove `EVENT_CLICK_DATA_API` event that should remain
			 */

			$(document).off(EVENT_FOCUSIN);
			$.removeData(this._element, DATA_KEY$5);
			this._config = null;
			this._element = null;
			this._dialog = null;
			this._backdrop = null;
			this._isShown = null;
			this._isBodyOverflowing = null;
			this._ignoreBackdropClick = null;
			this._isTransitioning = null;
			this._scrollbarWidth = null;
		};

		_proto.handleUpdate = function handleUpdate() {
			this._adjustDialog();
		} // Private
		;

		_proto._getConfig = function _getConfig(config) {
			config = _objectSpread2(_objectSpread2({}, Default$3), config);
			Util.typeCheckConfig(NAME$5, config, DefaultType$3);
			return config;
		};

		_proto._triggerBackdropTransition = function _triggerBackdropTransition() {
			var _this3 = this;

			if (this._config.backdrop === 'static') {
				var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
				$(this._element).trigger(hideEventPrevented);

				if (hideEventPrevented.defaultPrevented) {
					return;
				}

				this._element.classList.add(CLASS_NAME_STATIC);

				var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
				$(this._element).one(Util.TRANSITION_END, function () {
					_this3._element.classList.remove(CLASS_NAME_STATIC);
				}).emulateTransitionEnd(modalTransitionDuration);

				this._element.focus();
			} else {
				this.hide();
			}
		};

		_proto._showElement = function _showElement(relatedTarget) {
			var _this4 = this;

			var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
			var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

			if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
				// Don't move modal's DOM position
				document.body.appendChild(this._element);
			}

			this._element.style.display = 'block';

			this._element.removeAttribute('aria-hidden');

			this._element.setAttribute('aria-modal', true);

			if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
				modalBody.scrollTop = 0;
			} else {
				this._element.scrollTop = 0;
			}

			if (transition) {
				Util.reflow(this._element);
			}

			$(this._element).addClass(CLASS_NAME_SHOW$3);

			if (this._config.focus) {
				this._enforceFocus();
			}

			var shownEvent = $.Event(EVENT_SHOWN$2, {
				relatedTarget: relatedTarget
			});

			var transitionComplete = function transitionComplete() {
				if (_this4._config.focus) {
					_this4._element.focus();
				}

				_this4._isTransitioning = false;
				$(_this4._element).trigger(shownEvent);
			};

			if (transition) {
				var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
				$(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
			} else {
				transitionComplete();
			}
		};

		_proto._enforceFocus = function _enforceFocus() {
			var _this5 = this;

			$(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
				.on(EVENT_FOCUSIN, function (event) {
					if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
						_this5._element.focus();
					}
				});
		};

		_proto._setEscapeEvent = function _setEscapeEvent() {
			var _this6 = this;

			if (this._isShown) {
				$(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
					if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
						event.preventDefault();

						_this6.hide();
					} else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
						_this6._triggerBackdropTransition();
					}
				});
			} else if (!this._isShown) {
				$(this._element).off(EVENT_KEYDOWN_DISMISS);
			}
		};

		_proto._setResizeEvent = function _setResizeEvent() {
			var _this7 = this;

			if (this._isShown) {
				$(window).on(EVENT_RESIZE, function (event) {
					return _this7.handleUpdate(event);
				});
			} else {
				$(window).off(EVENT_RESIZE);
			}
		};

		_proto._hideModal = function _hideModal() {
			var _this8 = this;

			this._element.style.display = 'none';

			this._element.setAttribute('aria-hidden', true);

			this._element.removeAttribute('aria-modal');

			this._isTransitioning = false;

			this._showBackdrop(function () {
				$(document.body).removeClass(CLASS_NAME_OPEN);

				_this8._resetAdjustments();

				_this8._resetScrollbar();

				$(_this8._element).trigger(EVENT_HIDDEN$2);
			});
		};

		_proto._removeBackdrop = function _removeBackdrop() {
			if (this._backdrop) {
				$(this._backdrop).remove();
				this._backdrop = null;
			}
		};

		_proto._showBackdrop = function _showBackdrop(callback) {
			var _this9 = this;

			var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

			if (this._isShown && this._config.backdrop) {
				this._backdrop = document.createElement('div');
				this._backdrop.className = CLASS_NAME_BACKDROP;

				if (animate) {
					this._backdrop.classList.add(animate);
				}

				$(this._backdrop).appendTo(document.body);
				$(this._element).on(EVENT_CLICK_DISMISS, function (event) {
					if (_this9._ignoreBackdropClick) {
						_this9._ignoreBackdropClick = false;
						return;
					}

					if (event.target !== event.currentTarget) {
						return;
					}

					_this9._triggerBackdropTransition();
				});

				if (animate) {
					Util.reflow(this._backdrop);
				}

				$(this._backdrop).addClass(CLASS_NAME_SHOW$3);

				if (!callback) {
					return;
				}

				if (!animate) {
					callback();
					return;
				}

				var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
				$(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
			} else if (!this._isShown && this._backdrop) {
				$(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

				var callbackRemove = function callbackRemove() {
					_this9._removeBackdrop();

					if (callback) {
						callback();
					}
				};

				if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
					var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

					$(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
				} else {
					callbackRemove();
				}
			} else if (callback) {
				callback();
			}
		} // ----------------------------------------------------------------------
		// the following methods are used to handle overflowing modals
		// todo (fat): these should probably be refactored out of modal.js
		// ----------------------------------------------------------------------
		;

		_proto._adjustDialog = function _adjustDialog() {
			var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

			if (!this._isBodyOverflowing && isModalOverflowing) {
				this._element.style.paddingLeft = this._scrollbarWidth + "px";
			}

			if (this._isBodyOverflowing && !isModalOverflowing) {
				this._element.style.paddingRight = this._scrollbarWidth + "px";
			}
		};

		_proto._resetAdjustments = function _resetAdjustments() {
			this._element.style.paddingLeft = '';
			this._element.style.paddingRight = '';
		};

		_proto._checkScrollbar = function _checkScrollbar() {
			var rect = document.body.getBoundingClientRect();
			this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
			this._scrollbarWidth = this._getScrollbarWidth();
		};

		_proto._setScrollbar = function _setScrollbar() {
			var _this10 = this;

			if (this._isBodyOverflowing) {
				// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
				//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
				var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
				var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

				$(fixedContent).each(function (index, element) {
					var actualPadding = element.style.paddingRight;
					var calculatedPadding = $(element).css('padding-right');
					$(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
				}); // Adjust sticky content margin

				$(stickyContent).each(function (index, element) {
					var actualMargin = element.style.marginRight;
					var calculatedMargin = $(element).css('margin-right');
					$(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
				}); // Adjust body padding

				var actualPadding = document.body.style.paddingRight;
				var calculatedPadding = $(document.body).css('padding-right');
				$(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
			}

			$(document.body).addClass(CLASS_NAME_OPEN);
		};

		_proto._resetScrollbar = function _resetScrollbar() {
			// Restore fixed content padding
			var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
			$(fixedContent).each(function (index, element) {
				var padding = $(element).data('padding-right');
				$(element).removeData('padding-right');
				element.style.paddingRight = padding ? padding : '';
			}); // Restore sticky content

			var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
			$(elements).each(function (index, element) {
				var margin = $(element).data('margin-right');

				if (typeof margin !== 'undefined') {
					$(element).css('margin-right', margin).removeData('margin-right');
				}
			}); // Restore body padding

			var padding = $(document.body).data('padding-right');
			$(document.body).removeData('padding-right');
			document.body.style.paddingRight = padding ? padding : '';
		};

		_proto._getScrollbarWidth = function _getScrollbarWidth() {
			// thx d.walsh
			var scrollDiv = document.createElement('div');
			scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
			document.body.appendChild(scrollDiv);
			var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
			return scrollbarWidth;
		} // Static
		;

		Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
			return this.each(function () {
				var data = $(this).data(DATA_KEY$5);

				var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$3), $(this).data()), typeof config === 'object' && config ? config : {});

				if (!data) {
					data = new Modal(this, _config);
					$(this).data(DATA_KEY$5, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config](relatedTarget);
				} else if (_config.show) {
					data.show(relatedTarget);
				}
			});
		};

		_createClass(Modal, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$5;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default$3;
			}
		}]);

		return Modal;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
		var _this11 = this;

		var target;
		var selector = Util.getSelectorFromElement(this);

		if (selector) {
			target = document.querySelector(selector);
		}

		var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

		if (this.tagName === 'A' || this.tagName === 'AREA') {
			event.preventDefault();
		}

		var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
			if (showEvent.isDefaultPrevented()) {
				// Only register focus restorer if modal will actually get shown
				return;
			}

			$target.one(EVENT_HIDDEN$2, function () {
				if ($(_this11).is(':visible')) {
					_this11.focus();
				}
			});
		});

		Modal._jQueryInterface.call($(target), config, this);
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME$5] = Modal._jQueryInterface;
	$.fn[NAME$5].Constructor = Modal;

	$.fn[NAME$5].noConflict = function () {
		$.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
		return Modal._jQueryInterface;
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.5.0): tools/sanitizer.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */
	var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
	var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
	var DefaultWhitelist = {
		// Global attributes allowed on any supplied element below.
		'*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
		a: ['target', 'href', 'title', 'rel'],
		area: [],
		b: [],
		br: [],
		col: [],
		code: [],
		div: [],
		em: [],
		hr: [],
		h1: [],
		h2: [],
		h3: [],
		h4: [],
		h5: [],
		h6: [],
		i: [],
		img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
		li: [],
		ol: [],
		p: [],
		pre: [],
		s: [],
		small: [],
		span: [],
		sub: [],
		sup: [],
		strong: [],
		u: [],
		ul: []
	};
	/**
	 * A pattern that recognizes a commonly useful subset of URLs that are safe.
	 *
	 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
	 */

	var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
	/**
	 * A pattern that matches safe data URLs. Only matches image, video and audio types.
	 *
	 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
	 */

	var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

	function allowedAttribute(attr, allowedAttributeList) {
		var attrName = attr.nodeName.toLowerCase();

		if (allowedAttributeList.indexOf(attrName) !== -1) {
			if (uriAttrs.indexOf(attrName) !== -1) {
				return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
			}

			return true;
		}

		var regExp = allowedAttributeList.filter(function (attrRegex) {
			return attrRegex instanceof RegExp;
		}); // Check if a regular expression validates the attribute.

		for (var i = 0, len = regExp.length; i < len; i++) {
			if (attrName.match(regExp[i])) {
				return true;
			}
		}

		return false;
	}

	function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
		if (unsafeHtml.length === 0) {
			return unsafeHtml;
		}

		if (sanitizeFn && typeof sanitizeFn === 'function') {
			return sanitizeFn(unsafeHtml);
		}

		var domParser = new window.DOMParser();
		var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
		var whitelistKeys = Object.keys(whiteList);
		var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

		var _loop = function _loop(i, len) {
			var el = elements[i];
			var elName = el.nodeName.toLowerCase();

			if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
				el.parentNode.removeChild(el);
				return "continue";
			}

			var attributeList = [].slice.call(el.attributes);
			var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
			attributeList.forEach(function (attr) {
				if (!allowedAttribute(attr, whitelistedAttributes)) {
					el.removeAttribute(attr.nodeName);
				}
			});
		};

		for (var i = 0, len = elements.length; i < len; i++) {
			var _ret = _loop(i);

			if (_ret === "continue") continue;
		}

		return createdDocument.body.innerHTML;
	}

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$6 = 'tooltip';
	var VERSION$6 = '4.5.0';
	var DATA_KEY$6 = 'bs.tooltip';
	var EVENT_KEY$6 = "." + DATA_KEY$6;
	var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
	var CLASS_PREFIX = 'bs-tooltip';
	var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
	var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
	var DefaultType$4 = {
		animation: 'boolean',
		template: 'string',
		title: '(string|element|function)',
		trigger: 'string',
		delay: '(number|object)',
		html: 'boolean',
		selector: '(string|boolean)',
		placement: '(string|function)',
		offset: '(number|string|function)',
		container: '(string|element|boolean)',
		fallbackPlacement: '(string|array)',
		boundary: '(string|element)',
		sanitize: 'boolean',
		sanitizeFn: '(null|function)',
		whiteList: 'object',
		popperConfig: '(null|object)'
	};
	var AttachmentMap = {
		AUTO: 'auto',
		TOP: 'top',
		RIGHT: 'right',
		BOTTOM: 'bottom',
		LEFT: 'left'
	};
	var Default$4 = {
		animation: true,
		template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
		trigger: 'hover focus',
		title: '',
		delay: 0,
		html: false,
		selector: false,
		placement: 'top',
		offset: 0,
		container: false,
		fallbackPlacement: 'flip',
		boundary: 'scrollParent',
		sanitize: true,
		sanitizeFn: null,
		whiteList: DefaultWhitelist,
		popperConfig: null
	};
	var HOVER_STATE_SHOW = 'show';
	var HOVER_STATE_OUT = 'out';
	var Event = {
		HIDE: "hide" + EVENT_KEY$6,
		HIDDEN: "hidden" + EVENT_KEY$6,
		SHOW: "show" + EVENT_KEY$6,
		SHOWN: "shown" + EVENT_KEY$6,
		INSERTED: "inserted" + EVENT_KEY$6,
		CLICK: "click" + EVENT_KEY$6,
		FOCUSIN: "focusin" + EVENT_KEY$6,
		FOCUSOUT: "focusout" + EVENT_KEY$6,
		MOUSEENTER: "mouseenter" + EVENT_KEY$6,
		MOUSELEAVE: "mouseleave" + EVENT_KEY$6
	};
	var CLASS_NAME_FADE$2 = 'fade';
	var CLASS_NAME_SHOW$4 = 'show';
	var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
	var SELECTOR_ARROW = '.arrow';
	var TRIGGER_HOVER = 'hover';
	var TRIGGER_FOCUS = 'focus';
	var TRIGGER_CLICK = 'click';
	var TRIGGER_MANUAL = 'manual';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Tooltip = /*#__PURE__*/ function () {
		function Tooltip(element, config) {
			if (typeof Popper === 'undefined') {
				throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
			} // private


			this._isEnabled = true;
			this._timeout = 0;
			this._hoverState = '';
			this._activeTrigger = {};
			this._popper = null; // Protected

			this.element = element;
			this.config = this._getConfig(config);
			this.tip = null;

			this._setListeners();
		} // Getters


		var _proto = Tooltip.prototype;

		// Public
		_proto.enable = function enable() {
			this._isEnabled = true;
		};

		_proto.disable = function disable() {
			this._isEnabled = false;
		};

		_proto.toggleEnabled = function toggleEnabled() {
			this._isEnabled = !this._isEnabled;
		};

		_proto.toggle = function toggle(event) {
			if (!this._isEnabled) {
				return;
			}

			if (event) {
				var dataKey = this.constructor.DATA_KEY;
				var context = $(event.currentTarget).data(dataKey);

				if (!context) {
					context = new this.constructor(event.currentTarget, this._getDelegateConfig());
					$(event.currentTarget).data(dataKey, context);
				}

				context._activeTrigger.click = !context._activeTrigger.click;

				if (context._isWithActiveTrigger()) {
					context._enter(null, context);
				} else {
					context._leave(null, context);
				}
			} else {
				if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
					this._leave(null, this);

					return;
				}

				this._enter(null, this);
			}
		};

		_proto.dispose = function dispose() {
			clearTimeout(this._timeout);
			$.removeData(this.element, this.constructor.DATA_KEY);
			$(this.element).off(this.constructor.EVENT_KEY);
			$(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

			if (this.tip) {
				$(this.tip).remove();
			}

			this._isEnabled = null;
			this._timeout = null;
			this._hoverState = null;
			this._activeTrigger = null;

			if (this._popper) {
				this._popper.destroy();
			}

			this._popper = null;
			this.element = null;
			this.config = null;
			this.tip = null;
		};

		_proto.show = function show() {
			var _this = this;

			if ($(this.element).css('display') === 'none') {
				throw new Error('Please use show on visible elements');
			}

			var showEvent = $.Event(this.constructor.Event.SHOW);

			if (this.isWithContent() && this._isEnabled) {
				$(this.element).trigger(showEvent);
				var shadowRoot = Util.findShadowRoot(this.element);
				var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

				if (showEvent.isDefaultPrevented() || !isInTheDom) {
					return;
				}

				var tip = this.getTipElement();
				var tipId = Util.getUID(this.constructor.NAME);
				tip.setAttribute('id', tipId);
				this.element.setAttribute('aria-describedby', tipId);
				this.setContent();

				if (this.config.animation) {
					$(tip).addClass(CLASS_NAME_FADE$2);
				}

				var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

				var attachment = this._getAttachment(placement);

				this.addAttachmentClass(attachment);

				var container = this._getContainer();

				$(tip).data(this.constructor.DATA_KEY, this);

				if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
					$(tip).appendTo(container);
				}

				$(this.element).trigger(this.constructor.Event.INSERTED);
				this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
				$(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
				// empty mouseover listeners to the body's immediate children;
				// only needed because of broken event delegation on iOS
				// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

				if ('ontouchstart' in document.documentElement) {
					$(document.body).children().on('mouseover', null, $.noop);
				}

				var complete = function complete() {
					if (_this.config.animation) {
						_this._fixTransition();
					}

					var prevHoverState = _this._hoverState;
					_this._hoverState = null;
					$(_this.element).trigger(_this.constructor.Event.SHOWN);

					if (prevHoverState === HOVER_STATE_OUT) {
						_this._leave(null, _this);
					}
				};

				if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
					var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
					$(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
				} else {
					complete();
				}
			}
		};

		_proto.hide = function hide(callback) {
			var _this2 = this;

			var tip = this.getTipElement();
			var hideEvent = $.Event(this.constructor.Event.HIDE);

			var complete = function complete() {
				if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
					tip.parentNode.removeChild(tip);
				}

				_this2._cleanTipClass();

				_this2.element.removeAttribute('aria-describedby');

				$(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

				if (_this2._popper !== null) {
					_this2._popper.destroy();
				}

				if (callback) {
					callback();
				}
			};

			$(this.element).trigger(hideEvent);

			if (hideEvent.isDefaultPrevented()) {
				return;
			}

			$(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
			// empty mouseover listeners we added for iOS support

			if ('ontouchstart' in document.documentElement) {
				$(document.body).children().off('mouseover', null, $.noop);
			}

			this._activeTrigger[TRIGGER_CLICK] = false;
			this._activeTrigger[TRIGGER_FOCUS] = false;
			this._activeTrigger[TRIGGER_HOVER] = false;

			if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
				var transitionDuration = Util.getTransitionDurationFromElement(tip);
				$(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
			} else {
				complete();
			}

			this._hoverState = '';
		};

		_proto.update = function update() {
			if (this._popper !== null) {
				this._popper.scheduleUpdate();
			}
		} // Protected
		;

		_proto.isWithContent = function isWithContent() {
			return Boolean(this.getTitle());
		};

		_proto.addAttachmentClass = function addAttachmentClass(attachment) {
			$(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
		};

		_proto.getTipElement = function getTipElement() {
			this.tip = this.tip || $(this.config.template)[0];
			return this.tip;
		};

		_proto.setContent = function setContent() {
			var tip = this.getTipElement();
			this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
			$(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
		};

		_proto.setElementContent = function setElementContent($element, content) {
			if (typeof content === 'object' && (content.nodeType || content.jquery)) {
				// Content is a DOM node or a jQuery
				if (this.config.html) {
					if (!$(content).parent().is($element)) {
						$element.empty().append(content);
					}
				} else {
					$element.text($(content).text());
				}

				return;
			}

			if (this.config.html) {
				if (this.config.sanitize) {
					content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
				}

				$element.html(content);
			} else {
				$element.text(content);
			}
		};

		_proto.getTitle = function getTitle() {
			var title = this.element.getAttribute('data-original-title');

			if (!title) {
				title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
			}

			return title;
		} // Private
		;

		_proto._getPopperConfig = function _getPopperConfig(attachment) {
			var _this3 = this;

			var defaultBsConfig = {
				placement: attachment,
				modifiers: {
					offset: this._getOffset(),
					flip: {
						behavior: this.config.fallbackPlacement
					},
					arrow: {
						element: SELECTOR_ARROW
					},
					preventOverflow: {
						boundariesElement: this.config.boundary
					}
				},
				onCreate: function onCreate(data) {
					if (data.originalPlacement !== data.placement) {
						_this3._handlePopperPlacementChange(data);
					}
				},
				onUpdate: function onUpdate(data) {
					return _this3._handlePopperPlacementChange(data);
				}
			};
			return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
		};

		_proto._getOffset = function _getOffset() {
			var _this4 = this;

			var offset = {};

			if (typeof this.config.offset === 'function') {
				offset.fn = function (data) {
					data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this4.config.offset(data.offsets, _this4.element) || {});
					return data;
				};
			} else {
				offset.offset = this.config.offset;
			}

			return offset;
		};

		_proto._getContainer = function _getContainer() {
			if (this.config.container === false) {
				return document.body;
			}

			if (Util.isElement(this.config.container)) {
				return $(this.config.container);
			}

			return $(document).find(this.config.container);
		};

		_proto._getAttachment = function _getAttachment(placement) {
			return AttachmentMap[placement.toUpperCase()];
		};

		_proto._setListeners = function _setListeners() {
			var _this5 = this;

			var triggers = this.config.trigger.split(' ');
			triggers.forEach(function (trigger) {
				if (trigger === 'click') {
					$(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
						return _this5.toggle(event);
					});
				} else if (trigger !== TRIGGER_MANUAL) {
					var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
					var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
					$(_this5.element).on(eventIn, _this5.config.selector, function (event) {
						return _this5._enter(event);
					}).on(eventOut, _this5.config.selector, function (event) {
						return _this5._leave(event);
					});
				}
			});

			this._hideModalHandler = function () {
				if (_this5.element) {
					_this5.hide();
				}
			};

			$(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

			if (this.config.selector) {
				this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
					trigger: 'manual',
					selector: ''
				});
			} else {
				this._fixTitle();
			}
		};

		_proto._fixTitle = function _fixTitle() {
			var titleType = typeof this.element.getAttribute('data-original-title');

			if (this.element.getAttribute('title') || titleType !== 'string') {
				this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
				this.element.setAttribute('title', '');
			}
		};

		_proto._enter = function _enter(event, context) {
			var dataKey = this.constructor.DATA_KEY;
			context = context || $(event.currentTarget).data(dataKey);

			if (!context) {
				context = new this.constructor(event.currentTarget, this._getDelegateConfig());
				$(event.currentTarget).data(dataKey, context);
			}

			if (event) {
				context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
			}

			if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
				context._hoverState = HOVER_STATE_SHOW;
				return;
			}

			clearTimeout(context._timeout);
			context._hoverState = HOVER_STATE_SHOW;

			if (!context.config.delay || !context.config.delay.show) {
				context.show();
				return;
			}

			context._timeout = setTimeout(function () {
				if (context._hoverState === HOVER_STATE_SHOW) {
					context.show();
				}
			}, context.config.delay.show);
		};

		_proto._leave = function _leave(event, context) {
			var dataKey = this.constructor.DATA_KEY;
			context = context || $(event.currentTarget).data(dataKey);

			if (!context) {
				context = new this.constructor(event.currentTarget, this._getDelegateConfig());
				$(event.currentTarget).data(dataKey, context);
			}

			if (event) {
				context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
			}

			if (context._isWithActiveTrigger()) {
				return;
			}

			clearTimeout(context._timeout);
			context._hoverState = HOVER_STATE_OUT;

			if (!context.config.delay || !context.config.delay.hide) {
				context.hide();
				return;
			}

			context._timeout = setTimeout(function () {
				if (context._hoverState === HOVER_STATE_OUT) {
					context.hide();
				}
			}, context.config.delay.hide);
		};

		_proto._isWithActiveTrigger = function _isWithActiveTrigger() {
			for (var trigger in this._activeTrigger) {
				if (this._activeTrigger[trigger]) {
					return true;
				}
			}

			return false;
		};

		_proto._getConfig = function _getConfig(config) {
			var dataAttributes = $(this.element).data();
			Object.keys(dataAttributes).forEach(function (dataAttr) {
				if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
					delete dataAttributes[dataAttr];
				}
			});
			config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), typeof config === 'object' && config ? config : {});

			if (typeof config.delay === 'number') {
				config.delay = {
					show: config.delay,
					hide: config.delay
				};
			}

			if (typeof config.title === 'number') {
				config.title = config.title.toString();
			}

			if (typeof config.content === 'number') {
				config.content = config.content.toString();
			}

			Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

			if (config.sanitize) {
				config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
			}

			return config;
		};

		_proto._getDelegateConfig = function _getDelegateConfig() {
			var config = {};

			if (this.config) {
				for (var key in this.config) {
					if (this.constructor.Default[key] !== this.config[key]) {
						config[key] = this.config[key];
					}
				}
			}

			return config;
		};

		_proto._cleanTipClass = function _cleanTipClass() {
			var $tip = $(this.getTipElement());
			var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

			if (tabClass !== null && tabClass.length) {
				$tip.removeClass(tabClass.join(''));
			}
		};

		_proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
			this.tip = popperData.instance.popper;

			this._cleanTipClass();

			this.addAttachmentClass(this._getAttachment(popperData.placement));
		};

		_proto._fixTransition = function _fixTransition() {
			var tip = this.getTipElement();
			var initConfigAnimation = this.config.animation;

			if (tip.getAttribute('x-placement') !== null) {
				return;
			}

			$(tip).removeClass(CLASS_NAME_FADE$2);
			this.config.animation = false;
			this.hide();
			this.show();
			this.config.animation = initConfigAnimation;
		} // Static
		;

		Tooltip._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var data = $(this).data(DATA_KEY$6);

				var _config = typeof config === 'object' && config;

				if (!data && /dispose|hide/.test(config)) {
					return;
				}

				if (!data) {
					data = new Tooltip(this, _config);
					$(this).data(DATA_KEY$6, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config]();
				}
			});
		};

		_createClass(Tooltip, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$6;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default$4;
			}
		}, {
			key: "NAME",
			get: function get() {
				return NAME$6;
			}
		}, {
			key: "DATA_KEY",
			get: function get() {
				return DATA_KEY$6;
			}
		}, {
			key: "Event",
			get: function get() {
				return Event;
			}
		}, {
			key: "EVENT_KEY",
			get: function get() {
				return EVENT_KEY$6;
			}
		}, {
			key: "DefaultType",
			get: function get() {
				return DefaultType$4;
			}
		}]);

		return Tooltip;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */


	$.fn[NAME$6] = Tooltip._jQueryInterface;
	$.fn[NAME$6].Constructor = Tooltip;

	$.fn[NAME$6].noConflict = function () {
		$.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
		return Tooltip._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$7 = 'popover';
	var VERSION$7 = '4.5.0';
	var DATA_KEY$7 = 'bs.popover';
	var EVENT_KEY$7 = "." + DATA_KEY$7;
	var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
	var CLASS_PREFIX$1 = 'bs-popover';
	var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

	var Default$5 = _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
		placement: 'right',
		trigger: 'click',
		content: '',
		template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
	});

	var DefaultType$5 = _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
		content: '(string|element|function)'
	});

	var CLASS_NAME_FADE$3 = 'fade';
	var CLASS_NAME_SHOW$5 = 'show';
	var SELECTOR_TITLE = '.popover-header';
	var SELECTOR_CONTENT = '.popover-body';
	var Event$1 = {
		HIDE: "hide" + EVENT_KEY$7,
		HIDDEN: "hidden" + EVENT_KEY$7,
		SHOW: "show" + EVENT_KEY$7,
		SHOWN: "shown" + EVENT_KEY$7,
		INSERTED: "inserted" + EVENT_KEY$7,
		CLICK: "click" + EVENT_KEY$7,
		FOCUSIN: "focusin" + EVENT_KEY$7,
		FOCUSOUT: "focusout" + EVENT_KEY$7,
		MOUSEENTER: "mouseenter" + EVENT_KEY$7,
		MOUSELEAVE: "mouseleave" + EVENT_KEY$7
	};
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Popover = /*#__PURE__*/ function (_Tooltip) {
		_inheritsLoose(Popover, _Tooltip);

		function Popover() {
			return _Tooltip.apply(this, arguments) || this;
		}

		var _proto = Popover.prototype;

		// Overrides
		_proto.isWithContent = function isWithContent() {
			return this.getTitle() || this._getContent();
		};

		_proto.addAttachmentClass = function addAttachmentClass(attachment) {
			$(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
		};

		_proto.getTipElement = function getTipElement() {
			this.tip = this.tip || $(this.config.template)[0];
			return this.tip;
		};

		_proto.setContent = function setContent() {
			var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

			this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

			var content = this._getContent();

			if (typeof content === 'function') {
				content = content.call(this.element);
			}

			this.setElementContent($tip.find(SELECTOR_CONTENT), content);
			$tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
		} // Private
		;

		_proto._getContent = function _getContent() {
			return this.element.getAttribute('data-content') || this.config.content;
		};

		_proto._cleanTipClass = function _cleanTipClass() {
			var $tip = $(this.getTipElement());
			var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

			if (tabClass !== null && tabClass.length > 0) {
				$tip.removeClass(tabClass.join(''));
			}
		} // Static
		;

		Popover._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var data = $(this).data(DATA_KEY$7);

				var _config = typeof config === 'object' ? config : null;

				if (!data && /dispose|hide/.test(config)) {
					return;
				}

				if (!data) {
					data = new Popover(this, _config);
					$(this).data(DATA_KEY$7, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config]();
				}
			});
		};

		_createClass(Popover, null, [{
			key: "VERSION",
			// Getters
			get: function get() {
				return VERSION$7;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default$5;
			}
		}, {
			key: "NAME",
			get: function get() {
				return NAME$7;
			}
		}, {
			key: "DATA_KEY",
			get: function get() {
				return DATA_KEY$7;
			}
		}, {
			key: "Event",
			get: function get() {
				return Event$1;
			}
		}, {
			key: "EVENT_KEY",
			get: function get() {
				return EVENT_KEY$7;
			}
		}, {
			key: "DefaultType",
			get: function get() {
				return DefaultType$5;
			}
		}]);

		return Popover;
	}(Tooltip);
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */


	$.fn[NAME$7] = Popover._jQueryInterface;
	$.fn[NAME$7].Constructor = Popover;

	$.fn[NAME$7].noConflict = function () {
		$.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
		return Popover._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$8 = 'scrollspy';
	var VERSION$8 = '4.5.0';
	var DATA_KEY$8 = 'bs.scrollspy';
	var EVENT_KEY$8 = "." + DATA_KEY$8;
	var DATA_API_KEY$6 = '.data-api';
	var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
	var Default$6 = {
		offset: 10,
		method: 'auto',
		target: ''
	};
	var DefaultType$6 = {
		offset: 'number',
		method: 'string',
		target: '(string|element)'
	};
	var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
	var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
	var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
	var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
	var CLASS_NAME_ACTIVE$2 = 'active';
	var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
	var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
	var SELECTOR_NAV_LINKS = '.nav-link';
	var SELECTOR_NAV_ITEMS = '.nav-item';
	var SELECTOR_LIST_ITEMS = '.list-group-item';
	var SELECTOR_DROPDOWN = '.dropdown';
	var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
	var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
	var METHOD_OFFSET = 'offset';
	var METHOD_POSITION = 'position';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var ScrollSpy = /*#__PURE__*/ function () {
		function ScrollSpy(element, config) {
			var _this = this;

			this._element = element;
			this._scrollElement = element.tagName === 'BODY' ? window : element;
			this._config = this._getConfig(config);
			this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
			this._offsets = [];
			this._targets = [];
			this._activeTarget = null;
			this._scrollHeight = 0;
			$(this._scrollElement).on(EVENT_SCROLL, function (event) {
				return _this._process(event);
			});
			this.refresh();

			this._process();
		} // Getters


		var _proto = ScrollSpy.prototype;

		// Public
		_proto.refresh = function refresh() {
			var _this2 = this;

			var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
			var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
			var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
			this._offsets = [];
			this._targets = [];
			this._scrollHeight = this._getScrollHeight();
			var targets = [].slice.call(document.querySelectorAll(this._selector));
			targets.map(function (element) {
				var target;
				var targetSelector = Util.getSelectorFromElement(element);

				if (targetSelector) {
					target = document.querySelector(targetSelector);
				}

				if (target) {
					var targetBCR = target.getBoundingClientRect();

					if (targetBCR.width || targetBCR.height) {
						// TODO (fat): remove sketch reliance on jQuery position/offset
						return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
					}
				}

				return null;
			}).filter(function (item) {
				return item;
			}).sort(function (a, b) {
				return a[0] - b[0];
			}).forEach(function (item) {
				_this2._offsets.push(item[0]);

				_this2._targets.push(item[1]);
			});
		};

		_proto.dispose = function dispose() {
			$.removeData(this._element, DATA_KEY$8);
			$(this._scrollElement).off(EVENT_KEY$8);
			this._element = null;
			this._scrollElement = null;
			this._config = null;
			this._selector = null;
			this._offsets = null;
			this._targets = null;
			this._activeTarget = null;
			this._scrollHeight = null;
		} // Private
		;

		_proto._getConfig = function _getConfig(config) {
			config = _objectSpread2(_objectSpread2({}, Default$6), typeof config === 'object' && config ? config : {});

			if (typeof config.target !== 'string' && Util.isElement(config.target)) {
				var id = $(config.target).attr('id');

				if (!id) {
					id = Util.getUID(NAME$8);
					$(config.target).attr('id', id);
				}

				config.target = "#" + id;
			}

			Util.typeCheckConfig(NAME$8, config, DefaultType$6);
			return config;
		};

		_proto._getScrollTop = function _getScrollTop() {
			return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
		};

		_proto._getScrollHeight = function _getScrollHeight() {
			return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		};

		_proto._getOffsetHeight = function _getOffsetHeight() {
			return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
		};

		_proto._process = function _process() {
			var scrollTop = this._getScrollTop() + this._config.offset;

			var scrollHeight = this._getScrollHeight();

			var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

			if (this._scrollHeight !== scrollHeight) {
				this.refresh();
			}

			if (scrollTop >= maxScroll) {
				var target = this._targets[this._targets.length - 1];

				if (this._activeTarget !== target) {
					this._activate(target);
				}

				return;
			}

			if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
				this._activeTarget = null;

				this._clear();

				return;
			}

			for (var i = this._offsets.length; i--;) {
				var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

				if (isActiveTarget) {
					this._activate(this._targets[i]);
				}
			}
		};

		_proto._activate = function _activate(target) {
			this._activeTarget = target;

			this._clear();

			var queries = this._selector.split(',').map(function (selector) {
				return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
			});

			var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

			if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
				$link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
				$link.addClass(CLASS_NAME_ACTIVE$2);
			} else {
				// Set triggered link as active
				$link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
				// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

				$link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

				$link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
			}

			$(this._scrollElement).trigger(EVENT_ACTIVATE, {
				relatedTarget: target
			});
		};

		_proto._clear = function _clear() {
			[].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
				return node.classList.contains(CLASS_NAME_ACTIVE$2);
			}).forEach(function (node) {
				return node.classList.remove(CLASS_NAME_ACTIVE$2);
			});
		} // Static
		;

		ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var data = $(this).data(DATA_KEY$8);

				var _config = typeof config === 'object' && config;

				if (!data) {
					data = new ScrollSpy(this, _config);
					$(this).data(DATA_KEY$8, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config]();
				}
			});
		};

		_createClass(ScrollSpy, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$8;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default$6;
			}
		}]);

		return ScrollSpy;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(window).on(EVENT_LOAD_DATA_API$2, function () {
		var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
		var scrollSpysLength = scrollSpys.length;

		for (var i = scrollSpysLength; i--;) {
			var $spy = $(scrollSpys[i]);

			ScrollSpy._jQueryInterface.call($spy, $spy.data());
		}
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME$8] = ScrollSpy._jQueryInterface;
	$.fn[NAME$8].Constructor = ScrollSpy;

	$.fn[NAME$8].noConflict = function () {
		$.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
		return ScrollSpy._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$9 = 'tab';
	var VERSION$9 = '4.5.0';
	var DATA_KEY$9 = 'bs.tab';
	var EVENT_KEY$9 = "." + DATA_KEY$9;
	var DATA_API_KEY$7 = '.data-api';
	var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
	var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
	var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
	var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
	var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
	var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
	var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
	var CLASS_NAME_ACTIVE$3 = 'active';
	var CLASS_NAME_DISABLED$1 = 'disabled';
	var CLASS_NAME_FADE$4 = 'fade';
	var CLASS_NAME_SHOW$6 = 'show';
	var SELECTOR_DROPDOWN$1 = '.dropdown';
	var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
	var SELECTOR_ACTIVE$2 = '.active';
	var SELECTOR_ACTIVE_UL = '> li > .active';
	var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
	var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
	var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Tab = /*#__PURE__*/ function () {
		function Tab(element) {
			this._element = element;
		} // Getters


		var _proto = Tab.prototype;

		// Public
		_proto.show = function show() {
			var _this = this;

			if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
				return;
			}

			var target;
			var previous;
			var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
			var selector = Util.getSelectorFromElement(this._element);

			if (listElement) {
				var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
				previous = $.makeArray($(listElement).find(itemSelector));
				previous = previous[previous.length - 1];
			}

			var hideEvent = $.Event(EVENT_HIDE$3, {
				relatedTarget: this._element
			});
			var showEvent = $.Event(EVENT_SHOW$3, {
				relatedTarget: previous
			});

			if (previous) {
				$(previous).trigger(hideEvent);
			}

			$(this._element).trigger(showEvent);

			if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
				return;
			}

			if (selector) {
				target = document.querySelector(selector);
			}

			this._activate(this._element, listElement);

			var complete = function complete() {
				var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
					relatedTarget: _this._element
				});
				var shownEvent = $.Event(EVENT_SHOWN$3, {
					relatedTarget: previous
				});
				$(previous).trigger(hiddenEvent);
				$(_this._element).trigger(shownEvent);
			};

			if (target) {
				this._activate(target, target.parentNode, complete);
			} else {
				complete();
			}
		};

		_proto.dispose = function dispose() {
			$.removeData(this._element, DATA_KEY$9);
			this._element = null;
		} // Private
		;

		_proto._activate = function _activate(element, container, callback) {
			var _this2 = this;

			var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
			var active = activeElements[0];
			var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

			var complete = function complete() {
				return _this2._transitionComplete(element, active, callback);
			};

			if (active && isTransitioning) {
				var transitionDuration = Util.getTransitionDurationFromElement(active);
				$(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
			} else {
				complete();
			}
		};

		_proto._transitionComplete = function _transitionComplete(element, active, callback) {
			if (active) {
				$(active).removeClass(CLASS_NAME_ACTIVE$3);
				var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

				if (dropdownChild) {
					$(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
				}

				if (active.getAttribute('role') === 'tab') {
					active.setAttribute('aria-selected', false);
				}
			}

			$(element).addClass(CLASS_NAME_ACTIVE$3);

			if (element.getAttribute('role') === 'tab') {
				element.setAttribute('aria-selected', true);
			}

			Util.reflow(element);

			if (element.classList.contains(CLASS_NAME_FADE$4)) {
				element.classList.add(CLASS_NAME_SHOW$6);
			}

			if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
				var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

				if (dropdownElement) {
					var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
					$(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
				}

				element.setAttribute('aria-expanded', true);
			}

			if (callback) {
				callback();
			}
		} // Static
		;

		Tab._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var $this = $(this);
				var data = $this.data(DATA_KEY$9);

				if (!data) {
					data = new Tab(this);
					$this.data(DATA_KEY$9, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config]();
				}
			});
		};

		_createClass(Tab, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$9;
			}
		}]);

		return Tab;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	$(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
		event.preventDefault();

		Tab._jQueryInterface.call($(this), 'show');
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME$9] = Tab._jQueryInterface;
	$.fn[NAME$9].Constructor = Tab;

	$.fn[NAME$9].noConflict = function () {
		$.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
		return Tab._jQueryInterface;
	};

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME$a = 'toast';
	var VERSION$a = '4.5.0';
	var DATA_KEY$a = 'bs.toast';
	var EVENT_KEY$a = "." + DATA_KEY$a;
	var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
	var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
	var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
	var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
	var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
	var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
	var CLASS_NAME_FADE$5 = 'fade';
	var CLASS_NAME_HIDE = 'hide';
	var CLASS_NAME_SHOW$7 = 'show';
	var CLASS_NAME_SHOWING = 'showing';
	var DefaultType$7 = {
		animation: 'boolean',
		autohide: 'boolean',
		delay: 'number'
	};
	var Default$7 = {
		animation: true,
		autohide: true,
		delay: 500
	};
	var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	var Toast = /*#__PURE__*/ function () {
		function Toast(element, config) {
			this._element = element;
			this._config = this._getConfig(config);
			this._timeout = null;

			this._setListeners();
		} // Getters


		var _proto = Toast.prototype;

		// Public
		_proto.show = function show() {
			var _this = this;

			var showEvent = $.Event(EVENT_SHOW$4);
			$(this._element).trigger(showEvent);

			if (showEvent.isDefaultPrevented()) {
				return;
			}

			if (this._config.animation) {
				this._element.classList.add(CLASS_NAME_FADE$5);
			}

			var complete = function complete() {
				_this._element.classList.remove(CLASS_NAME_SHOWING);

				_this._element.classList.add(CLASS_NAME_SHOW$7);

				$(_this._element).trigger(EVENT_SHOWN$4);

				if (_this._config.autohide) {
					_this._timeout = setTimeout(function () {
						_this.hide();
					}, _this._config.delay);
				}
			};

			this._element.classList.remove(CLASS_NAME_HIDE);

			Util.reflow(this._element);

			this._element.classList.add(CLASS_NAME_SHOWING);

			if (this._config.animation) {
				var transitionDuration = Util.getTransitionDurationFromElement(this._element);
				$(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
			} else {
				complete();
			}
		};

		_proto.hide = function hide() {
			if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
				return;
			}

			var hideEvent = $.Event(EVENT_HIDE$4);
			$(this._element).trigger(hideEvent);

			if (hideEvent.isDefaultPrevented()) {
				return;
			}

			this._close();
		};

		_proto.dispose = function dispose() {
			clearTimeout(this._timeout);
			this._timeout = null;

			if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
				this._element.classList.remove(CLASS_NAME_SHOW$7);
			}

			$(this._element).off(EVENT_CLICK_DISMISS$1);
			$.removeData(this._element, DATA_KEY$a);
			this._element = null;
			this._config = null;
		} // Private
		;

		_proto._getConfig = function _getConfig(config) {
			config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$7), $(this._element).data()), typeof config === 'object' && config ? config : {});
			Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
			return config;
		};

		_proto._setListeners = function _setListeners() {
			var _this2 = this;

			$(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
				return _this2.hide();
			});
		};

		_proto._close = function _close() {
			var _this3 = this;

			var complete = function complete() {
				_this3._element.classList.add(CLASS_NAME_HIDE);

				$(_this3._element).trigger(EVENT_HIDDEN$4);
			};

			this._element.classList.remove(CLASS_NAME_SHOW$7);

			if (this._config.animation) {
				var transitionDuration = Util.getTransitionDurationFromElement(this._element);
				$(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
			} else {
				complete();
			}
		} // Static
		;

		Toast._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var $element = $(this);
				var data = $element.data(DATA_KEY$a);

				var _config = typeof config === 'object' && config;

				if (!data) {
					data = new Toast(this, _config);
					$element.data(DATA_KEY$a, data);
				}

				if (typeof config === 'string') {
					if (typeof data[config] === 'undefined') {
						throw new TypeError("No method named \"" + config + "\"");
					}

					data[config](this);
				}
			});
		};

		_createClass(Toast, null, [{
			key: "VERSION",
			get: function get() {
				return VERSION$a;
			}
		}, {
			key: "DefaultType",
			get: function get() {
				return DefaultType$7;
			}
		}, {
			key: "Default",
			get: function get() {
				return Default$7;
			}
		}]);

		return Toast;
	}();
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */


	$.fn[NAME$a] = Toast._jQueryInterface;
	$.fn[NAME$a].Constructor = Toast;

	$.fn[NAME$a].noConflict = function () {
		$.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
		return Toast._jQueryInterface;
	};

	exports.Alert = Alert;
	exports.Button = Button;
	exports.Carousel = Carousel;
	exports.Collapse = Collapse;
	exports.Dropdown = Dropdown;
	exports.Modal = Modal;
	exports.Popover = Popover;
	exports.Scrollspy = ScrollSpy;
	exports.Tab = Tab;
	exports.Toast = Toast;
	exports.Tooltip = Tooltip;
	exports.Util = Util;

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

})));
//# sourceMappingURL=bootstrap.js.map

/**
 * Swiper 5.3.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 10, 2020
 */

! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function () {
	"use strict";
	var e = "undefined" == typeof document ? {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: {
				blur: function () {},
				nodeName: ""
			},
			querySelector: function () {
				return null
			},
			querySelectorAll: function () {
				return []
			},
			getElementById: function () {
				return null
			},
			createEvent: function () {
				return {
					initEvent: function () {}
				}
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		t = "undefined" == typeof window ? {
			document: e,
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			CustomEvent: function () {
				return this
			},
			addEventListener: function () {},
			removeEventListener: function () {},
			getComputedStyle: function () {
				return {
					getPropertyValue: function () {
						return ""
					}
				}
			},
			Image: function () {},
			Date: function () {},
			screen: {},
			setTimeout: function () {},
			clearTimeout: function () {}
		} : window,
		i = function (e) {
			for (var t = 0; t < e.length; t += 1) this[t] = e[t];
			return this.length = e.length, this
		};

	function s(s, a) {
		var r = [],
			n = 0;
		if (s && !a && s instanceof i) return s;
		if (s)
			if ("string" == typeof s) {
				var o, l, d = s.trim();
				if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
					var h = "div";
					for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
				} else
					for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
			} else if (s.nodeType || s === t || s === e) r.push(s);
		else if (s.length > 0 && s[0].nodeType)
			for (n = 0; n < s.length; n += 1) r.push(s[n]);
		return new i(r)
	}

	function a(e) {
		for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
		return t
	}
	s.fn = i.prototype, s.Class = i, s.Dom7 = i;
	var r = {
		addClass: function (e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
			return this
		},
		removeClass: function (e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
			return this
		},
		hasClass: function (e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function (e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
			return this
		},
		attr: function (e, t) {
			var i = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var s = 0; s < this.length; s += 1)
				if (2 === i.length) this[s].setAttribute(e, t);
				else
					for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
			return this
		},
		removeAttr: function (e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function (e, t) {
			var i;
			if (void 0 !== t) {
				for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
				return this
			}
			if (i = this[0]) {
				if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
				var a = i.getAttribute("data-" + e);
				return a || void 0
			}
		},
		transform: function (e) {
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransform = e, i.transform = e
			}
			return this
		},
		transition: function (e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransitionDuration = e, i.transitionDuration = e
			}
			return this
		},
		on: function () {
			for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
			var a = t[0],
				r = t[1],
				n = t[2],
				o = t[3];

			function l(e) {
				var t = e.target;
				if (t) {
					var i = e.target.dom7EventData || [];
					if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
					else
						for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
				}
			}

			function d(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
			}
			"function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
			for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
				var u = this[c];
				if (r)
					for (h = 0; h < p.length; h += 1) {
						var v = p[h];
						u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
							listener: n,
							proxyListener: l
						}), u.addEventListener(v, l, o)
					} else
						for (h = 0; h < p.length; h += 1) {
							var f = p[h];
							u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
								listener: n,
								proxyListener: d
							}), u.addEventListener(f, d, o)
						}
			}
			return this
		},
		off: function () {
			for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
			var s = t[0],
				a = t[1],
				r = t[2],
				n = t[3];
			"function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
			for (var o = s.split(" "), l = 0; l < o.length; l += 1)
				for (var d = o[l], h = 0; h < this.length; h += 1) {
					var p = this[h],
						c = void 0;
					if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length)
						for (var u = c.length - 1; u >= 0; u -= 1) {
							var v = c[u];
							r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
						}
				}
			return this
		},
		trigger: function () {
			for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
			for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
				for (var o = a[n], l = 0; l < this.length; l += 1) {
					var d = this[l],
						h = void 0;
					try {
						h = new t.CustomEvent(o, {
							detail: r,
							bubbles: !0,
							cancelable: !0
						})
					} catch (t) {
						(h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
					}
					d.dom7EventData = i.filter((function (e, t) {
						return t > 0
					})), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
				}
			return this
		},
		transitionEnd: function (e) {
			var t, i = ["webkitTransitionEnd", "transitionend"],
				s = this;

			function a(r) {
				if (r.target === this)
					for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
			}
			if (e)
				for (t = 0; t < i.length; t += 1) s.on(i[t], a);
			return this
		},
		outerWidth: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function () {
			if (this.length > 0) {
				var i = this[0],
					s = i.getBoundingClientRect(),
					a = e.body,
					r = i.clientTop || a.clientTop || 0,
					n = i.clientLeft || a.clientLeft || 0,
					o = i === t ? t.scrollY : i.scrollTop,
					l = i === t ? t.scrollX : i.scrollLeft;
				return {
					top: s.top + o - r,
					left: s.left + l - n
				}
			}
			return null
		},
		css: function (e, i) {
			var s;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (s = 0; s < this.length; s += 1)
						for (var a in e) this[s].style[a] = e[a];
					return this
				}
				if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
				return this
			}
			return this
		},
		each: function (e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function (e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function (e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function (a) {
			var r, n, o = this[0];
			if (!o || void 0 === a) return !1;
			if ("string" == typeof a) {
				if (o.matches) return o.matches(a);
				if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
				if (o.msMatchesSelector) return o.msMatchesSelector(a);
				for (r = s(a), n = 0; n < r.length; n += 1)
					if (r[n] === o) return !0;
				return !1
			}
			if (a === e) return o === e;
			if (a === t) return o === t;
			if (a.nodeType || a instanceof i) {
				for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
					if (r[n] === o) return !0;
				return !1
			}
			return !1
		},
		index: function () {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			var t, s = this.length;
			return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
		},
		append: function () {
			for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
			for (var r = 0; r < s.length; r += 1) {
				t = s[r];
				for (var n = 0; n < this.length; n += 1)
					if ("string" == typeof t) {
						var o = e.createElement("div");
						for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
					} else if (t instanceof i)
					for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
				else this[n].appendChild(t)
			}
			return this
		},
		prepend: function (t) {
			var s, a;
			for (s = 0; s < this.length; s += 1)
				if ("string" == typeof t) {
					var r = e.createElement("div");
					for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
				} else if (t instanceof i)
				for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
			else this[s].insertBefore(t, this[s].childNodes[0]);
			return this
		},
		next: function (e) {
			return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
		},
		nextAll: function (e) {
			var t = [],
				a = this[0];
			if (!a) return new i([]);
			for (; a.nextElementSibling;) {
				var r = a.nextElementSibling;
				e ? s(r).is(e) && t.push(r) : t.push(r), a = r
			}
			return new i(t)
		},
		prev: function (e) {
			if (this.length > 0) {
				var t = this[0];
				return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
			}
			return new i([])
		},
		prevAll: function (e) {
			var t = [],
				a = this[0];
			if (!a) return new i([]);
			for (; a.previousElementSibling;) {
				var r = a.previousElementSibling;
				e ? s(r).is(e) && t.push(r) : t.push(r), a = r
			}
			return new i(t)
		},
		parent: function (e) {
			for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
			return s(a(t))
		},
		parents: function (e) {
			for (var t = [], i = 0; i < this.length; i += 1)
				for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
			return s(a(t))
		},
		closest: function (e) {
			var t = this;
			return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function (e) {
			for (var t = [], s = 0; s < this.length; s += 1)
				for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
			return new i(t)
		},
		children: function (e) {
			for (var t = [], r = 0; r < this.length; r += 1)
				for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
			return new i(a(t))
		},
		filter: function (e) {
			for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
			return new i(t)
		},
		remove: function () {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, a, r = this;
			for (i = 0; i < e.length; i += 1) {
				var n = s(e[i]);
				for (a = 0; a < n.length; a += 1) r[r.length] = n[a], r.length += 1
			}
			return r
		},
		styles: function () {
			return this[0] ? t.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(r).forEach((function (e) {
		s.fn[e] = s.fn[e] || r[e]
	}));
	var n = {
			deleteProps: function (e) {
				var t = e;
				Object.keys(t).forEach((function (e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				}))
			},
			nextTick: function (e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function () {
				return Date.now()
			},
			getTranslate: function (e, i) {
				var s, a, r;
				void 0 === i && (i = "x");
				var n = t.getComputedStyle(e, null);
				return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function (e) {
					return e.replace(",", ".")
				})).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
			},
			parseUrlQuery: function (e) {
				var i, s, a, r, n = {},
					o = e || t.location.href;
				if ("string" == typeof o && o.length)
					for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
							return "" !== e
						}))).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
				return n
			},
			isObject: function (e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function () {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
					var a = e[s];
					if (null != a)
						for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
							var d = r[o],
								h = Object.getOwnPropertyDescriptor(a, d);
							void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d])
						}
				}
				return i
			}
		},
		o = {
			touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
			pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
			observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
			passiveListener: function () {
				var e = !1;
				try {
					var i = Object.defineProperty({}, "passive", {
						get: function () {
							e = !0
						}
					});
					t.addEventListener("testPassiveListener", null, i)
				} catch (e) {}
				return e
			}(),
			gestures: "ongesturestart" in t
		},
		l = function (e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
				t.on(e, t.params.on[e])
			}))
		},
		d = {
			components: {
				configurable: !0
			}
		};
	l.prototype.on = function (e, t, i) {
		var s = this;
		if ("function" != typeof t) return s;
		var a = i ? "unshift" : "push";
		return e.split(" ").forEach((function (e) {
			s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
		})), s
	}, l.prototype.once = function (e, t, i) {
		var s = this;
		if ("function" != typeof t) return s;

		function a() {
			for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
			s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
		}
		return a.f7proxy = t, s.on(e, a, i)
	}, l.prototype.off = function (e, t) {
		var i = this;
		return i.eventsListeners ? (e.split(" ").forEach((function (e) {
			void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function (s, a) {
				(s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
			}))
		})), i) : i
	}, l.prototype.emit = function () {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var i, s, a, r = this;
		if (!r.eventsListeners) return r;
		"string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
		var n = Array.isArray(i) ? i : i.split(" ");
		return n.forEach((function (e) {
			if (r.eventsListeners && r.eventsListeners[e]) {
				var t = [];
				r.eventsListeners[e].forEach((function (e) {
					t.push(e)
				})), t.forEach((function (e) {
					e.apply(a, s)
				}))
			}
		})), r
	}, l.prototype.useModulesParams = function (e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function (i) {
			var s = t.modules[i];
			s.params && n.extend(e, s.params)
		}))
	}, l.prototype.useModules = function (e) {
		void 0 === e && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function (i) {
			var s = t.modules[i],
				a = e[i] || {};
			s.instance && Object.keys(s.instance).forEach((function (e) {
				var i = s.instance[e];
				t[e] = "function" == typeof i ? i.bind(t) : i
			})), s.on && t.on && Object.keys(s.on).forEach((function (e) {
				t.on(e, s.on[e])
			})), s.create && s.create.bind(t)(a)
		}))
	}, d.components.set = function (e) {
		this.use && this.use(e)
	}, l.installModule = function (e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
		var s = this;
		s.prototype.modules || (s.prototype.modules = {});
		var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
		return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function (t) {
			s.prototype[t] = e.proto[t]
		})), e.static && Object.keys(e.static).forEach((function (t) {
			s[t] = e.static[t]
		})), e.install && e.install.apply(s, t), s
	}, l.use = function (e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
		var s = this;
		return Array.isArray(e) ? (e.forEach((function (e) {
			return s.installModule(e)
		})), s) : s.installModule.apply(s, [e].concat(t))
	}, Object.defineProperties(l, d);
	var h = {
		updateSize: function () {
			var e, t, i = this.$el;
			e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
				width: e,
				height: t,
				size: this.isHorizontal() ? e : t
			}))
		},
		updateSlides: function () {
			var e = this.params,
				i = this.$wrapperEl,
				s = this.size,
				a = this.rtlTranslate,
				r = this.wrongRTL,
				o = this.virtual && e.virtual.enabled,
				l = o ? this.virtual.slides.length : this.slides.length,
				d = i.children("." + this.params.slideClass),
				h = o ? this.virtual.slides.length : d.length,
				p = [],
				c = [],
				u = [];

			function v(t) {
				return !e.cssMode || t !== d.length - 1
			}
			var f = e.slidesOffsetBefore;
			"function" == typeof f && (f = e.slidesOffsetBefore.call(this));
			var m = e.slidesOffsetAfter;
			"function" == typeof m && (m = e.slidesOffsetAfter.call(this));
			var g = this.snapGrid.length,
				b = this.snapGrid.length,
				w = e.spaceBetween,
				y = -f,
				x = 0,
				T = 0;
			if (void 0 !== s) {
				var E, S;
				"string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
					marginLeft: "",
					marginTop: ""
				}) : d.css({
					marginRight: "",
					marginBottom: ""
				}), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
				for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
					S = 0;
					var $ = d.eq(k);
					if (e.slidesPerColumn > 1) {
						var L = void 0,
							I = void 0,
							D = void 0;
						if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
							var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
								A = k - e.slidesPerColumn * e.slidesPerGroup * O,
								G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
							L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
								"-webkit-box-ordinal-group": L,
								"-moz-box-ordinal-group": L,
								"-ms-flex-order": L,
								"-webkit-order": L,
								order: L
							})
						} else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
						$.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
					}
					if ("none" !== $.css("display")) {
						if ("auto" === e.slidesPerView) {
							var H = t.getComputedStyle($[0], null),
								B = $[0].style.transform,
								N = $[0].style.webkitTransform;
							if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
							else if (this.isHorizontal()) {
								var X = parseFloat(H.getPropertyValue("width")),
									V = parseFloat(H.getPropertyValue("padding-left")),
									Y = parseFloat(H.getPropertyValue("padding-right")),
									F = parseFloat(H.getPropertyValue("margin-left")),
									W = parseFloat(H.getPropertyValue("margin-right")),
									R = H.getPropertyValue("box-sizing");
								S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
							} else {
								var q = parseFloat(H.getPropertyValue("height")),
									j = parseFloat(H.getPropertyValue("padding-top")),
									K = parseFloat(H.getPropertyValue("padding-bottom")),
									U = parseFloat(H.getPropertyValue("margin-top")),
									_ = parseFloat(H.getPropertyValue("margin-bottom")),
									Z = H.getPropertyValue("box-sizing");
								S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
							}
							B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
						} else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
						d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1
					}
				}
				if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
						width: this.virtualSize + e.spaceBetween + "px"
					}), e.setWrapperSize && (this.isHorizontal() ? i.css({
						width: this.virtualSize + e.spaceBetween + "px"
					}) : i.css({
						height: this.virtualSize + e.spaceBetween + "px"
					})), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
						width: this.virtualSize + e.spaceBetween + "px"
					}) : i.css({
						height: this.virtualSize + e.spaceBetween + "px"
					}), e.centeredSlides)) {
					C = [];
					for (var Q = 0; Q < p.length; Q += 1) {
						var J = p[Q];
						e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
					}
					p = C
				}
				if (!e.centeredSlides) {
					C = [];
					for (var ee = 0; ee < p.length; ee += 1) {
						var te = p[ee];
						e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te)
					}
					p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
				}
				if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
						marginLeft: w + "px"
					}) : d.filter(v).css({
						marginRight: w + "px"
					}) : d.filter(v).css({
						marginBottom: w + "px"
					})), e.centeredSlides && e.centeredSlidesBounds) {
					var ie = 0;
					u.forEach((function (t) {
						ie += t + (e.spaceBetween ? e.spaceBetween : 0)
					}));
					var se = (ie -= e.spaceBetween) - s;
					p = p.map((function (e) {
						return e < 0 ? -f : e > se ? se + m : e
					}))
				}
				if (e.centerInsufficientSlides) {
					var ae = 0;
					if (u.forEach((function (t) {
							ae += t + (e.spaceBetween ? e.spaceBetween : 0)
						})), (ae -= e.spaceBetween) < s) {
						var re = (s - ae) / 2;
						p.forEach((function (e, t) {
							p[t] = e - re
						})), c.forEach((function (e, t) {
							c[t] = e + re
						}))
					}
				}
				n.extend(this, {
					slides: d,
					snapGrid: p,
					slidesGrid: c,
					slidesSizesGrid: u
				}), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
			}
		},
		updateAutoHeight: function (e) {
			var t, i = [],
				s = 0;
			if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
				if (this.params.centeredSlides) this.visibleSlides.each((function (e, t) {
					i.push(t)
				}));
				else
					for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
						var a = this.activeIndex + t;
						if (a > this.slides.length) break;
						i.push(this.slides.eq(a)[0])
					} else i.push(this.slides.eq(this.activeIndex)[0]);
			for (t = 0; t < i.length; t += 1)
				if (void 0 !== i[t]) {
					var r = i[t].offsetHeight;
					s = r > s ? r : s
				} s && this.$wrapperEl.css("height", s + "px")
		},
		updateSlidesOffset: function () {
			for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
		},
		updateSlidesProgress: function (e) {
			void 0 === e && (e = this && this.translate || 0);
			var t = this.params,
				i = this.slides,
				a = this.rtlTranslate;
			if (0 !== i.length) {
				void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
				var r = -e;
				a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
				for (var n = 0; n < i.length; n += 1) {
					var o = i[n],
						l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
					if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
						var d = -(r - o.swiperSlideOffset),
							h = d + this.slidesSizesGrid[n];
						(d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
					}
					o.progress = a ? -l : l
				}
				this.visibleSlides = s(this.visibleSlides)
			}
		},
		updateProgress: function (e) {
			if (void 0 === e) {
				var t = this.rtlTranslate ? -1 : 1;
				e = this && this.translate && this.translate * t || 0
			}
			var i = this.params,
				s = this.maxTranslate() - this.minTranslate(),
				a = this.progress,
				r = this.isBeginning,
				o = this.isEnd,
				l = r,
				d = o;
			0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
				progress: a,
				isBeginning: r,
				isEnd: o
			}), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a)
		},
		updateSlidesClasses: function () {
			var e, t = this.slides,
				i = this.params,
				s = this.$wrapperEl,
				a = this.activeIndex,
				r = this.realIndex,
				n = this.virtual && i.virtual.enabled;
			t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
			var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
			i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
			var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
			i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
		},
		updateActiveIndex: function (e) {
			var t, i = this.rtlTranslate ? this.translate : -this.translate,
				s = this.slidesGrid,
				a = this.snapGrid,
				r = this.params,
				o = this.activeIndex,
				l = this.realIndex,
				d = this.snapIndex,
				h = e;
			if (void 0 === h) {
				for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
				r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
			}
			if (a.indexOf(i) >= 0) t = a.indexOf(i);
			else {
				var c = Math.min(r.slidesPerGroupSkip, h);
				t = c + Math.floor((h - c) / r.slidesPerGroup)
			}
			if (t >= a.length && (t = a.length - 1), h !== o) {
				var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
				n.extend(this, {
					snapIndex: t,
					realIndex: u,
					previousIndex: o,
					activeIndex: h
				}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
			} else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
		},
		updateClickedSlide: function (e) {
			var t = this.params,
				i = s(e.target).closest("." + t.slideClass)[0],
				a = !1;
			if (i)
				for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
			if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
			this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
		}
	};
	var p = {
		getTranslate: function (e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			var t = this.params,
				i = this.rtlTranslate,
				s = this.translate,
				a = this.$wrapperEl;
			if (t.virtualTranslate) return i ? -s : s;
			if (t.cssMode) return s;
			var r = n.getTranslate(a[0], e);
			return i && (r = -r), r || 0
		},
		setTranslate: function (e, t) {
			var i = this.rtlTranslate,
				s = this.params,
				a = this.$wrapperEl,
				r = this.wrapperEl,
				n = this.progress,
				o = 0,
				l = 0;
			this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
			var d = this.maxTranslate() - this.minTranslate();
			(0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
		},
		minTranslate: function () {
			return -this.snapGrid[0]
		},
		maxTranslate: function () {
			return -this.snapGrid[this.snapGrid.length - 1]
		},
		translateTo: function (e, t, i, s, a) {
			var r;
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
			var n = this,
				o = n.params,
				l = n.wrapperEl;
			if (n.animating && o.preventInteractionOnTransition) return !1;
			var d, h = n.minTranslate(),
				p = n.maxTranslate();
			if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
				var c = n.isHorizontal();
				return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
			}
			return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
				n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
			}), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
		}
	};
	var c = {
		setTransition: function (e, t) {
			this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
		},
		transitionStart: function (e, t) {
			void 0 === e && (e = !0);
			var i = this.activeIndex,
				s = this.params,
				a = this.previousIndex;
			if (!s.cssMode) {
				s.autoHeight && this.updateAutoHeight();
				var r = t;
				if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
					if ("reset" === r) return void this.emit("slideResetTransitionStart");
					this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
				}
			}
		},
		transitionEnd: function (e, t) {
			void 0 === e && (e = !0);
			var i = this.activeIndex,
				s = this.previousIndex,
				a = this.params;
			if (this.animating = !1, !a.cssMode) {
				this.setTransition(0);
				var r = t;
				if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
					if ("reset" === r) return void this.emit("slideResetTransitionEnd");
					this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
				}
			}
		}
	};
	var u = {
		slideTo: function (e, t, i, s) {
			var a;
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
			var r = this,
				n = e;
			n < 0 && (n = 0);
			var o = r.params,
				l = r.snapGrid,
				d = r.slidesGrid,
				h = r.previousIndex,
				p = r.activeIndex,
				c = r.rtlTranslate,
				u = r.wrapperEl;
			if (r.animating && o.preventInteractionOnTransition) return !1;
			var v = Math.min(r.params.slidesPerGroupSkip, n),
				f = v + Math.floor((n - v) / r.params.slidesPerGroup);
			f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
			var m, g = -l[f];
			if (r.updateProgress(g), o.normalizeSlideIndex)
				for (var b = 0; b < d.length; b += 1) - Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
			if (r.initialized && n !== p) {
				if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
				if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
			}
			if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
			if (o.cssMode) {
				var w = r.isHorizontal(),
					y = -g;
				return c && (y = u.scrollWidth - u.offsetWidth - y), 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = y, !0
			}
			return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
				r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
			}), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
		},
		slideToLoop: function (e, t, i, s) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
			var a = e;
			return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
		},
		slideNext: function (e, t, i) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var s = this.params,
				a = this.animating,
				r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
			if (s.loop) {
				if (a) return !1;
				this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
			}
			return this.slideTo(this.activeIndex + r, e, t, i)
		},
		slidePrev: function (e, t, i) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var s = this.params,
				a = this.animating,
				r = this.snapGrid,
				n = this.slidesGrid,
				o = this.rtlTranslate;
			if (s.loop) {
				if (a) return !1;
				this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
			}

			function l(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
			}
			var d, h = l(o ? this.translate : -this.translate),
				p = r.map((function (e) {
					return l(e)
				})),
				c = (n.map((function (e) {
					return l(e)
				})), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
			return void 0 === c && s.cssMode && r.forEach((function (e) {
				!c && h >= e && (c = e)
			})), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
		},
		slideReset: function (e, t, i) {
			return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
		},
		slideToClosest: function (e, t, i, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
			var a = this.activeIndex,
				r = Math.min(this.params.slidesPerGroupSkip, a),
				n = r + Math.floor((a - r) / this.params.slidesPerGroup),
				o = this.rtlTranslate ? this.translate : -this.translate;
			if (o >= this.snapGrid[n]) {
				var l = this.snapGrid[n];
				o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
			} else {
				var d = this.snapGrid[n - 1];
				o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
			}
			return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
		},
		slideToClickedSlide: function () {
			var e, t = this,
				i = t.params,
				a = t.$wrapperEl,
				r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
				o = t.clickedIndex;
			if (i.loop) {
				if (t.animating) return;
				e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function () {
					t.slideTo(o)
				}))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function () {
					t.slideTo(o)
				}))) : t.slideTo(o)
			} else t.slideTo(o)
		}
	};
	var v = {
		loopCreate: function () {
			var t = this,
				i = t.params,
				a = t.$wrapperEl;
			a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
			var r = a.children("." + i.slideClass);
			if (i.loopFillGroupWithBlank) {
				var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
				if (n !== i.slidesPerGroup) {
					for (var o = 0; o < n; o += 1) {
						var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
						a.append(l)
					}
					r = a.children("." + i.slideClass)
				}
			}
			"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
			var d = [],
				h = [];
			r.each((function (e, i) {
				var a = s(i);
				e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
			}));
			for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
			for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
		},
		loopFix: function () {
			this.emit("beforeLoopFix");
			var e, t = this.activeIndex,
				i = this.slides,
				s = this.loopedSlides,
				a = this.allowSlidePrev,
				r = this.allowSlideNext,
				n = this.snapGrid,
				o = this.rtlTranslate;
			this.allowSlidePrev = !0, this.allowSlideNext = !0;
			var l = -n[t] - this.getTranslate();
			if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
			else if (t >= i.length - s) {
				e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
			}
			this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
		},
		loopDestroy: function () {
			var e = this.$wrapperEl,
				t = this.params,
				i = this.slides;
			e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
		}
	};
	var f = {
		setGrabCursor: function (e) {
			if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
				var t = this.el;
				t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
			}
		},
		unsetGrabCursor: function () {
			o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
		}
	};
	var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
			appendSlide: function (e) {
				var t = this.$wrapperEl,
					i = this.params;
				if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
				else t.append(e);
				i.loop && this.loopCreate(), i.observer && o.observer || this.update()
			},
			prependSlide: function (e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex;
				t.loop && this.loopDestroy();
				var a = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
					a = s + e.length
				} else i.prepend(e);
				t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
			},
			addSlide: function (e, t) {
				var i = this.$wrapperEl,
					s = this.params,
					a = this.activeIndex;
				s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
				var r = this.slides.length;
				if (e <= 0) this.prependSlide(t);
				else if (e >= r) this.appendSlide(t);
				else {
					for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
						var h = this.slides.eq(d);
						h.remove(), l.unshift(h)
					}
					if ("object" == typeof t && "length" in t) {
						for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
						n = a > e ? a + t.length : a
					} else i.append(t);
					for (var c = 0; c < l.length; c += 1) i.append(l[c]);
					s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
				}
			},
			removeSlide: function (e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex;
				t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
				var a, r = s;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
					r = Math.max(r, 0)
				} else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
				t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
			},
			removeAllSlides: function () {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
			ios: !1,
			android: !1,
			androidChrome: !1,
			desktop: !1,
			iphone: !1,
			ipod: !1,
			ipad: !1,
			edge: !1,
			ie: !1,
			firefox: !1,
			macos: !1,
			windows: !1,
			cordova: !(!t.cordova && !t.phonegap),
			phonegap: !(!t.cordova && !t.phonegap),
			electron: !1
		}, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);

	function D(i) {
		var a = this.touchEventsData,
			r = this.params,
			o = this.touches;
		if (!this.animating || !r.preventInteractionOnTransition) {
			var l = i;
			l.originalEvent && (l = l.originalEvent);
			var d = s(l.target);
			if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved)))
				if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
				else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
				o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
				var h = o.currentX,
					p = o.currentY,
					c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
					u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
				if (!c || !(h <= u || h >= t.screen.width - u)) {
					if (n.extend(a, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0
						}), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
						var v = !0;
						d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
						var f = v && this.allowTouchMove && r.touchStartPreventDefault;
						(r.touchStartForcePreventDefault || f) && l.preventDefault()
					}
					this.emit("touchStart", l)
				}
			}
		}
	}

	function O(t) {
		var i = this.touchEventsData,
			a = this.params,
			r = this.touches,
			o = this.rtlTranslate,
			l = t;
		if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
			if (!i.isTouchEvent || "mousemove" !== l.type) {
				var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
					h = "touchmove" === l.type ? d.pageX : l.pageX,
					p = "touchmove" === l.type ? d.pageY : l.pageY;
				if (l.preventedByNestedSwiper) return r.startX = h, void(r.startY = p);
				if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (n.extend(r, {
					startX: h,
					startY: p,
					currentX: h,
					currentY: p
				}), i.touchStartTime = n.now()));
				if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
					if (this.isVertical()) {
						if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
					} else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
				if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
				if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
					r.currentX = h, r.currentY = p;
					var c = r.currentX - r.startX,
						u = r.currentY - r.startY;
					if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
						var v;
						if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
						if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
						else if (i.startMoving) {
							this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
							var f = this.isHorizontal() ? c : u;
							r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
							var m = !0,
								g = a.resistanceRatio;
							if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
								if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
								if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
							}
							a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
								position: r[this.isHorizontal() ? "startX" : "startY"],
								time: i.touchStartTime
							}), i.velocities.push({
								position: r[this.isHorizontal() ? "currentX" : "currentY"],
								time: n.now()
							})), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
						}
					}
				}
			}
		} else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
	}

	function A(e) {
		var t = this,
			i = t.touchEventsData,
			s = t.params,
			a = t.touches,
			r = t.rtlTranslate,
			o = t.$wrapperEl,
			l = t.slidesGrid,
			d = t.snapGrid,
			h = e;
		if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
		s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
		var p, c = n.now(),
			u = c - i.touchStartTime;
		if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick((function () {
				t.destroyed || (t.allowClick = !0)
			})), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
		if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
			if (s.freeMode) {
				if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
				if (p > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
				if (s.freeModeMomentum) {
					if (i.velocities.length > 1) {
						var v = i.velocities.pop(),
							f = i.velocities.pop(),
							m = v.position - f.position,
							g = v.time - f.time;
						t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
					} else t.velocity = 0;
					t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
					var b = 1e3 * s.freeModeMomentumRatio,
						w = t.velocity * b,
						y = t.translate + w;
					r && (y = -y);
					var x, T, E = !1,
						S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
					if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);
					else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);
					else if (s.freeModeSticky) {
						for (var C, M = 0; M < d.length; M += 1)
							if (d[M] > -y) {
								C = M;
								break
							} y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
					}
					if (T && t.once("transitionEnd", (function () {
							t.loopFix()
						})), 0 !== t.velocity) {
						if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
							var P = Math.abs((r ? -y : y) - t.translate),
								z = t.slidesSizesGrid[t.activeIndex];
							b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
						}
					} else if (s.freeModeSticky) return void t.slideToClosest();
					s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function () {
						t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd((function () {
							t && !t.destroyed && t.transitionEnd()
						})))
					}))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function () {
						t && !t.destroyed && t.transitionEnd()
					})))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
				} else if (s.freeModeSticky) return void t.slideToClosest();
				(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
			} else {
				for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
					var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
					void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2])
				}
				var D = (p - l[k]) / $,
					O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
				if (u > s.longSwipesMs) {
					if (!s.longSwipes) return void t.slideTo(t.activeIndex);
					"next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
				} else {
					if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
					t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k))
				}
			}
	}

	function G() {
		var e = this.params,
			t = this.el;
		if (!t || 0 !== t.offsetWidth) {
			e.breakpoints && this.setBreakpoint();
			var i = this.allowSlideNext,
				s = this.allowSlidePrev,
				a = this.snapGrid;
			this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
		}
	}

	function H(e) {
		this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
	}

	function B() {
		var e = this.wrapperEl,
			t = this.rtlTranslate;
		this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
		var i = this.maxTranslate() - this.minTranslate();
		(0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
	}
	var N = !1;

	function X() {}
	var V = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		Y = {
			update: h,
			translate: p,
			transition: c,
			slide: u,
			loop: v,
			grabCursor: f,
			manipulation: L,
			events: {
				attachEvents: function () {
					var t = this.params,
						i = this.touchEvents,
						s = this.el,
						a = this.wrapperEl;
					this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = H.bind(this);
					var r = !!t.nested;
					if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);
					else {
						if (o.touch) {
							var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
								passive: !1,
								capture: r
							} : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0)
						}(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1))
					}(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
				},
				detachEvents: function () {
					var t = this.params,
						i = this.touchEvents,
						s = this.el,
						a = this.wrapperEl,
						r = !!t.nested;
					if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);
					else {
						if (o.touch) {
							var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
						}(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1))
					}(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
				}
			},
			breakpoints: {
				setBreakpoint: function () {
					var e = this.activeIndex,
						t = this.initialized,
						i = this.loopedSlides;
					void 0 === i && (i = 0);
					var s = this.params,
						a = this.$el,
						r = s.breakpoints;
					if (r && (!r || 0 !== Object.keys(r).length)) {
						var o = this.getBreakpoint(r);
						if (o && this.currentBreakpoint !== o) {
							var l = o in r ? r[o] : void 0;
							l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
								var t = l[e];
								void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
							}));
							var d = l || this.originalParams,
								h = s.slidesPerColumn > 1,
								p = d.slidesPerColumn > 1;
							h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
							var c = d.direction && d.direction !== s.direction,
								u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
							c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
								allowTouchMove: this.params.allowTouchMove,
								allowSlideNext: this.params.allowSlideNext,
								allowSlidePrev: this.params.allowSlidePrev
							}), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
						}
					}
				},
				getBreakpoint: function (e) {
					if (e) {
						var i = !1,
							s = Object.keys(e).map((function (e) {
								if ("string" == typeof e && 0 === e.indexOf("@")) {
									var i = parseFloat(e.substr(1));
									return {
										value: t.innerHeight * i,
										point: e
									}
								}
								return {
									value: e,
									point: e
								}
							}));
						s.sort((function (e, t) {
							return parseInt(e.value, 10) - parseInt(t.value, 10)
						}));
						for (var a = 0; a < s.length; a += 1) {
							var r = s[a],
								n = r.point;
							r.value <= t.innerWidth && (i = n)
						}
						return i || "max"
					}
				}
			},
			checkOverflow: {
				checkOverflow: function () {
					var e = this.params,
						t = this.isLocked,
						i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
					e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
				}
			},
			classes: {
				addClasses: function () {
					var e = this.classNames,
						t = this.params,
						i = this.rtl,
						s = this.$el,
						a = [];
					a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function (i) {
						e.push(t.containerModifierClass + i)
					})), s.addClass(e.join(" "))
				},
				removeClasses: function () {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function (e, i, s, a, r, n) {
					var o;

					function l() {
						n && n()
					}
					e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
				},
				preloadImages: function () {
					var e = this;

					function t() {
						null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var i = 0; i < e.imagesToLoad.length; i += 1) {
						var s = e.imagesToLoad[i];
						e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		F = {},
		W = function (e) {
			function t() {
				for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
				1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach((function (e) {
					Object.keys(Y[e]).forEach((function (i) {
						t.prototype[i] || (t.prototype[i] = Y[e][i])
					}))
				}));
				var h = this;
				void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach((function (e) {
					var t = h.modules[e];
					if (t.params) {
						var i = Object.keys(t.params)[0],
							s = t.params[i];
						if ("object" != typeof s || null === s) return;
						if (!(i in r) || !("enabled" in s)) return;
						!0 === r[i] && (r[i] = {
							enabled: !0
						}), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
							enabled: !1
						})
					}
				}));
				var p = n.extend({}, V);
				h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
				var c = s(h.params.el);
				if (a = c[0]) {
					if (c.length > 1) {
						var u = [];
						return c.each((function (e, i) {
							var s = n.extend({}, r, {
								el: i
							});
							u.push(new t(s))
						})), u
					}
					var v, f, m;
					return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (e) {
						return c.children(e)
					} : v = c.children("." + h.params.wrapperClass), n.extend(h, {
						$el: c,
						el: a,
						$wrapperEl: v,
						wrapperEl: v[0],
						classNames: [],
						slides: s(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function () {
							return "horizontal" === h.params.direction
						},
						isVertical: function () {
							return "vertical" === h.params.direction
						},
						rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
						rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
						wrongRTL: "-webkit-box" === v.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: h.params.allowSlideNext,
						allowSlidePrev: h.params.allowSlidePrev,
						touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
							start: f[0],
							move: f[1],
							end: f[2],
							cancel: f[3]
						}, h.touchEventsDesktop = {
							start: m[0],
							move: m[1],
							end: m[2]
						}, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video, label",
							lastClickTime: n.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: h.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), h.useModules(), h.params.init && h.init(), h
				}
			}
			e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
			var i = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return t.prototype.slidesPerViewDynamic = function () {
				var e = this.params,
					t = this.slides,
					i = this.slidesGrid,
					s = this.size,
					a = this.activeIndex,
					r = 1;
				if (e.centeredSlides) {
					for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
					for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
				} else
					for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
				return r
			}, t.prototype.update = function () {
				var e = this;
				if (e && !e.destroyed) {
					var t = e.snapGrid,
						i = e.params;
					i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
				}

				function s() {
					var t = e.rtlTranslate ? -1 * e.translate : e.translate,
						i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
					e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
				}
			}, t.prototype.changeDirection = function (e, t) {
				void 0 === t && (t = !0);
				var i = this.params.direction;
				return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function (t, i) {
					"vertical" === e ? i.style.width = "" : i.style.height = ""
				})), this.emit("changeDirection"), t && this.update()), this
			}, t.prototype.init = function () {
				this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
			}, t.prototype.destroy = function (e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					a = i.$el,
					r = i.$wrapperEl,
					o = i.slides;
				return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
					i.off(e)
				})), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0), null
			}, t.extendDefaults = function (e) {
				n.extend(F, e)
			}, i.extendedDefaults.get = function () {
				return F
			}, i.defaults.get = function () {
				return V
			}, i.Class.get = function () {
				return e
			}, i.$.get = function () {
				return s
			}, Object.defineProperties(t, i), t
		}(l),
		R = {
			name: "device",
			proto: {
				device: I
			},
			static: {
				device: I
			}
		},
		q = {
			name: "support",
			proto: {
				support: o
			},
			static: {
				support: o
			}
		},
		j = {
			isEdge: !!t.navigator.userAgent.match(/Edge/g),
			isSafari: function () {
				var e = t.navigator.userAgent.toLowerCase();
				return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
			}(),
			isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
		},
		K = {
			name: "browser",
			proto: {
				browser: j
			},
			static: {
				browser: j
			}
		},
		U = {
			name: "resize",
			create: function () {
				var e = this;
				n.extend(e, {
					resize: {
						resizeHandler: function () {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function () {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function () {
					t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function () {
					t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		_ = {
			func: t.MutationObserver || t.WebkitMutationObserver,
			attach: function (e, i) {
				void 0 === i && (i = {});
				var s = this,
					a = new(0, _.func)((function (e) {
						if (1 !== e.length) {
							var i = function () {
								s.emit("observerUpdate", e[0])
							};
							t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
						} else s.emit("observerUpdate", e[0])
					}));
				a.observe(e, {
					attributes: void 0 === i.attributes || i.attributes,
					childList: void 0 === i.childList || i.childList,
					characterData: void 0 === i.characterData || i.characterData
				}), s.observer.observers.push(a)
			},
			init: function () {
				if (o.observer && this.params.observer) {
					if (this.params.observeParents)
						for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
					this.observer.attach(this.$el[0], {
						childList: this.params.observeSlideChildren
					}), this.observer.attach(this.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function () {
				this.observer.observers.forEach((function (e) {
					e.disconnect()
				})), this.observer.observers = []
			}
		},
		Z = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1,
				observeSlideChildren: !1
			},
			create: function () {
				n.extend(this, {
					observer: {
						init: _.init.bind(this),
						attach: _.attach.bind(this),
						destroy: _.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function () {
					this.observer.init()
				},
				destroy: function () {
					this.observer.destroy()
				}
			}
		},
		Q = {
			update: function (e) {
				var t = this,
					i = t.params,
					s = i.slidesPerView,
					a = i.slidesPerGroup,
					r = i.centeredSlides,
					o = t.params.virtual,
					l = o.addSlidesBefore,
					d = o.addSlidesAfter,
					h = t.virtual,
					p = h.from,
					c = h.to,
					u = h.slides,
					v = h.slidesGrid,
					f = h.renderSlide,
					m = h.offset;
				t.updateActiveIndex();
				var g, b, w, y = t.activeIndex || 0;
				g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
				var x = Math.max((y || 0) - w, 0),
					T = Math.min((y || 0) + b, u.length - 1),
					E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

				function S() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (n.extend(t.virtual, {
						from: x,
						to: T,
						offset: E,
						slidesGrid: t.slidesGrid
					}), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: E,
					from: x,
					to: T,
					slides: function () {
						for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
						return e
					}()
				}), void S();
				var C = [],
					M = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var P = p; P <= c; P += 1)(P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
				for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
				M.forEach((function (e) {
					t.$wrapperEl.append(f(u[e], e))
				})), C.sort((function (e, t) {
					return t - e
				})).forEach((function (e) {
					t.$wrapperEl.prepend(f(u[e], e))
				})), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
			},
			renderSlide: function (e, t) {
				var i = this.params.virtual;
				if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
				var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
			},
			appendSlide: function (e) {
				if ("object" == typeof e && "length" in e)
					for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
				else this.virtual.slides.push(e);
				this.virtual.update(!0)
			},
			prependSlide: function (e) {
				var t = this.activeIndex,
					i = t + 1,
					s = 1;
				if (Array.isArray(e)) {
					for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
					i = t + e.length, s = e.length
				} else this.virtual.slides.unshift(e);
				if (this.params.virtual.cache) {
					var r = this.virtual.cache,
						n = {};
					Object.keys(r).forEach((function (e) {
						var t = r[e],
							i = t.attr("data-swiper-slide-index");
						i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
					})), this.virtual.cache = n
				}
				this.virtual.update(!0), this.slideTo(i, 0)
			},
			removeSlide: function (e) {
				if (null != e) {
					var t = this.activeIndex;
					if (Array.isArray(e))
						for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
					else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
					this.virtual.update(!0), this.slideTo(t, 0)
				}
			},
			removeAllSlides: function () {
				this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
			}
		},
		J = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function () {
				n.extend(this, {
					virtual: {
						update: Q.update.bind(this),
						appendSlide: Q.appendSlide.bind(this),
						prependSlide: Q.prependSlide.bind(this),
						removeSlide: Q.removeSlide.bind(this),
						removeAllSlides: Q.removeAllSlides.bind(this),
						renderSlide: Q.renderSlide.bind(this),
						slides: this.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function () {
					if (this.params.virtual.enabled) {
						this.classNames.push(this.params.containerModifierClass + "virtual");
						var e = {
							watchSlidesProgress: !0
						};
						n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
					}
				},
				setTranslate: function () {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		ee = {
			handle: function (i) {
				var s = this.rtlTranslate,
					a = i;
				a.originalEvent && (a = a.originalEvent);
				var r = a.keyCode || a.charCode;
				if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
				if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
				if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
					if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
						var n = !1;
						if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
						var o = t.innerWidth,
							l = t.innerHeight,
							d = this.$el.offset();
						s && (d.left -= this.$el[0].scrollLeft);
						for (var h = [
								[d.left, d.top],
								[d.left + this.width, d.top],
								[d.left, d.top + this.height],
								[d.left + this.width, d.top + this.height]
							], p = 0; p < h.length; p += 1) {
							var c = h[p];
							c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
						}
						if (!n) return
					}
					this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
				}
			},
			enable: function () {
				this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function () {
				this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		te = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0
				}
			},
			create: function () {
				n.extend(this, {
					keyboard: {
						enabled: !1,
						enable: ee.enable.bind(this),
						disable: ee.disable.bind(this),
						handle: ee.handle.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function () {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		};
	var ie = {
			lastScrollTime: n.now(),
			lastEventBeforeSnap: void 0,
			recentWheelEvents: [],
			event: function () {
				return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
					var t = "onwheel" in e;
					if (!t) {
						var i = e.createElement("div");
						i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
					}
					return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
				}() ? "wheel" : "mousewheel"
			},
			normalize: function (e) {
				var t = 0,
					i = 0,
					s = 0,
					a = 0;
				return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
					spinX: t,
					spinY: i,
					pixelX: s,
					pixelY: a
				}
			},
			handleMouseEnter: function () {
				this.mouseEntered = !0
			},
			handleMouseLeave: function () {
				this.mouseEntered = !1
			},
			handle: function (e) {
				var t = e,
					i = this,
					a = i.params.mousewheel;
				i.params.cssMode && t.preventDefault();
				var r = i.$el;
				if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0;
				t.originalEvent && (t = t.originalEvent);
				var o = 0,
					l = i.rtlTranslate ? -1 : 1,
					d = ie.normalize(t);
				if (a.forceToAxis)
					if (i.isHorizontal()) {
						if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
						o = d.pixelX * l
					} else {
						if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
						o = d.pixelY
					}
				else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
				if (0 === o) return !0;
				if (a.invert && (o = -o), i.params.freeMode) {
					var h = {
							time: n.now(),
							delta: Math.abs(o),
							direction: Math.sign(o)
						},
						p = i.mousewheel.lastEventBeforeSnap,
						c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
					if (!c) {
						i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
						var u = i.getTranslate() + o * a.sensitivity,
							v = i.isBeginning,
							f = i.isEnd;
						if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
							clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
							var m = i.mousewheel.recentWheelEvents;
							m.length >= 15 && m.shift();
							var g = m.length ? m[m.length - 1] : void 0,
								b = m[0];
							if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);
							else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
								var w = o > 0 ? .8 : .2;
								i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick((function () {
									i.slideToClosest(i.params.speed, !0, void 0, w)
								}), 0)
							}
							i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((function () {
								i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
							}), 500))
						}
						if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
					}
				} else {
					var y = {
							time: n.now(),
							delta: Math.abs(o),
							direction: Math.sign(o),
							raw: e
						},
						x = i.mousewheel.recentWheelEvents;
					x.length >= 2 && x.shift();
					var T = x.length ? x[x.length - 1] : void 0;
					if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			animateSlider: function (e) {
				return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
			},
			releaseScroll: function (e) {
				var t = this.params.mousewheel;
				if (e.direction < 0) {
					if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
				} else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
				return !1
			},
			enable: function () {
				var e = ie.event();
				if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
				if (!e) return !1;
				if (this.mousewheel.enabled) return !1;
				var t = this.$el;
				return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
			},
			disable: function () {
				var e = ie.event();
				if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
				if (!e) return !1;
				if (!this.mousewheel.enabled) return !1;
				var t = this.$el;
				return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
			}
		},
		se = {
			update: function () {
				var e = this.params.navigation;
				if (!this.params.loop) {
					var t = this.navigation,
						i = t.$nextEl,
						s = t.$prevEl;
					s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
				}
			},
			onPrevClick: function (e) {
				e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
			},
			onNextClick: function (e) {
				e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
			},
			init: function () {
				var e, t, i = this.params.navigation;
				(i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function () {
				var e = this.navigation,
					t = e.$nextEl,
					i = e.$prevEl;
				t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
			}
		},
		ae = {
			update: function () {
				var e = this.rtl,
					t = this.params.pagination;
				if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						r = this.pagination.$el,
						n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
					if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
						var o, l, d, h = this.pagination.bullets;
						if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each((function (e, a) {
							var r = s(a),
								n = r.index();
							n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
						}));
						else {
							var p = h.eq(i),
								c = p.index();
							if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
								for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
								if (this.params.loop)
									if (c >= h.length - t.dynamicMainBullets) {
										for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
										h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
									} else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
								else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
							}
						}
						if (t.dynamicBullets) {
							var g = Math.min(h.length, t.dynamicMainBullets + 4),
								b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
								w = e ? "right" : "left";
							h.css(this.isHorizontal() ? w : "top", b + "px")
						}
					}
					if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
						var y;
						y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
						var x = (i + 1) / n,
							T = 1,
							E = 1;
						"horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
					}
					"custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
				}
			},
			render: function () {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						i = this.pagination.$el,
						s = "";
					if ("bullets" === e.type) {
						for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
						i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
					}
					"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
				}
			},
			init: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el) {
					var i = s(t.el);
					0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
						t.preventDefault();
						var i = s(this).index() * e.params.slidesPerGroup;
						e.params.loop && (i += e.loopedSlides), e.slideTo(i)
					})), n.extend(e.pagination, {
						$el: i,
						el: i[0]
					}))
				}
			},
			destroy: function () {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var t = this.pagination.$el;
					t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
				}
			}
		},
		re = {
			setTranslate: function () {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = this.rtlTranslate,
						i = this.progress,
						s = e.dragSize,
						a = e.trackSize,
						r = e.$dragEl,
						n = e.$el,
						o = this.params.scrollbar,
						l = s,
						d = (a - s) * i;
					t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
						n[0].style.opacity = 0, n.transition(400)
					}), 1e3))
				}
			},
			setTransition: function (e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function () {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = e.$dragEl,
						i = e.$el;
					t[0].style.width = "", t[0].style.height = "";
					var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						r = this.size / this.virtualSize,
						o = r * (a / this.size);
					s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
						trackSize: a,
						divider: r,
						moveDivider: o,
						dragSize: s
					}), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
				}
			},
			getPointerPosition: function (e) {
				return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
			},
			setDragPosition: function (e) {
				var t, i = this.scrollbar,
					s = this.rtlTranslate,
					a = i.$el,
					r = i.dragSize,
					n = i.trackSize,
					o = i.dragStartPos;
				t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
				var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
				this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
			},
			onDragStart: function (e) {
				var t = this.params.scrollbar,
					i = this.scrollbar,
					s = this.$wrapperEl,
					a = i.$el,
					r = i.$dragEl;
				this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
			},
			onDragMove: function (e) {
				var t = this.scrollbar,
					i = this.$wrapperEl,
					s = t.$el,
					a = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function (e) {
				var t = this.params.scrollbar,
					i = this.scrollbar,
					s = this.$wrapperEl,
					a = i.$el;
				this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick((function () {
					a.css("opacity", 0), a.transition(400)
				}), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
			},
			enableDraggable: function () {
				if (this.params.scrollbar.el) {
					var t = this.scrollbar,
						i = this.touchEventsTouch,
						s = this.touchEventsDesktop,
						a = this.params,
						r = t.$el[0],
						n = !(!o.passiveListener || !a.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						l = !(!o.passiveListener || !a.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
				}
			},
			disableDraggable: function () {
				if (this.params.scrollbar.el) {
					var t = this.scrollbar,
						i = this.touchEventsTouch,
						s = this.touchEventsDesktop,
						a = this.params,
						r = t.$el[0],
						n = !(!o.passiveListener || !a.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						l = !(!o.passiveListener || !a.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
				}
			},
			init: function () {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.$el,
						i = this.params.scrollbar,
						a = s(i.el);
					this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
					var r = a.find("." + this.params.scrollbar.dragClass);
					0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
						$el: a,
						el: a[0],
						$dragEl: r,
						dragEl: r[0]
					}), i.draggable && e.enableDraggable()
				}
			},
			destroy: function () {
				this.scrollbar.disableDraggable()
			}
		},
		ne = {
			setTransform: function (e, t) {
				var i = this.rtl,
					a = s(e),
					r = i ? -1 : 1,
					n = a.attr("data-swiper-parallax") || "0",
					o = a.attr("data-swiper-parallax-x"),
					l = a.attr("data-swiper-parallax-y"),
					d = a.attr("data-swiper-parallax-scale"),
					h = a.attr("data-swiper-parallax-opacity");
				if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
					var p = h - (h - 1) * (1 - Math.abs(t));
					a[0].style.opacity = p
				}
				if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
				else {
					var c = d - (d - 1) * (1 - Math.abs(t));
					a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
				}
			},
			setTranslate: function () {
				var e = this,
					t = e.$el,
					i = e.slides,
					a = e.progress,
					r = e.snapGrid;
				t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
					e.parallax.setTransform(i, a)
				})), i.each((function (t, i) {
					var n = i.progress;
					e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
						e.parallax.setTransform(i, n)
					}))
				}))
			},
			setTransition: function (e) {
				void 0 === e && (e = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
					var a = s(i),
						r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
					0 === e && (r = 0), a.transition(r)
				}))
			}
		},
		oe = {
			getDistanceBetweenTouches: function (e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					i = e.targetTouches[0].pageY,
					s = e.targetTouches[1].pageX,
					a = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
			},
			onGestureStart: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					a = i.gesture;
				if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e)
				}
				a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
			},
			onGestureChange: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!o.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
				}
				s.$imageEl && 0 !== s.$imageEl.length && (i.scale = o.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
			},
			onGestureEnd: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!o.gestures) {
					if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
					i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
				}
				s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
			},
			onTouchStart: function (e) {
				var t = this.zoom,
					i = t.gesture,
					s = t.image;
				i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function (e) {
				var t = this.zoom,
					i = t.gesture,
					s = t.image,
					a = t.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
					var r = s.width * t.scale,
						o = s.height * t.scale;
					if (!(r < i.slideWidth && o < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
							if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function () {
				var e = this.zoom,
					t = e.gesture,
					i = e.image,
					s = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
					i.isTouched = !1, i.isMoved = !1;
					var a = 300,
						r = 300,
						n = s.x * a,
						o = i.currentX + n,
						l = s.y * r,
						d = i.currentY + l;
					0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
					var h = Math.max(a, r);
					i.currentX = o, i.currentY = d;
					var p = i.width * e.scale,
						c = i.height * e.scale;
					i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
				}
			},
			onTransitionEnd: function () {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
			},
			toggle: function (e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function (e) {
				var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom,
					b = this.params.zoom,
					w = g.gesture,
					y = g.image;
				(w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
			},
			out: function () {
				var e = this.zoom,
					t = this.params.zoom,
					i = e.gesture;
				i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
			},
			enable: function () {
				var e = this.zoom;
				if (!e.enabled) {
					e.enabled = !0;
					var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						i = !o.passiveListener || {
							passive: !1,
							capture: !0
						},
						s = "." + this.params.slideClass;
					o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
				}
			},
			disable: function () {
				var e = this.zoom;
				if (e.enabled) {
					this.zoom.enabled = !1;
					var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						i = !o.passiveListener || {
							passive: !1,
							capture: !0
						},
						s = "." + this.params.slideClass;
					o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
				}
			}
		},
		le = {
			loadInSlide: function (e, t) {
				void 0 === t && (t = !0);
				var i = this,
					a = i.params.lazy;
				if (void 0 !== e && 0 !== i.slides.length) {
					var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
						n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
					!r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each((function (e, n) {
						var o = s(n);
						o.addClass(a.loadingClass);
						var l = o.attr("data-background"),
							d = o.attr("data-src"),
							h = o.attr("data-srcset"),
							p = o.attr("data-sizes");
						i.loadImage(o[0], d || l, h, p, !1, (function () {
							if (null != i && i && (!i || i.params) && !i.destroyed) {
								if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
									var e = r.attr("data-swiper-slide-index");
									if (r.hasClass(i.params.slideDuplicateClass)) {
										var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
										i.lazy.loadInSlide(s.index(), !1)
									} else {
										var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										i.lazy.loadInSlide(n.index(), !1)
									}
								}
								i.emit("lazyImageReady", r[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
							}
						})), i.emit("lazyImageLoad", r[0], o[0])
					}))
				}
			},
			load: function () {
				var e = this,
					t = e.$wrapperEl,
					i = e.params,
					a = e.slides,
					r = e.activeIndex,
					n = e.virtual && i.virtual.enabled,
					o = i.lazy,
					l = i.slidesPerView;

				function d(e) {
					if (n) {
						if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (a[e]) return !0;
					return !1
				}

				function h(e) {
					return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
				}
				if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t, i) {
					var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
					e.lazy.loadInSlide(a)
				}));
				else if (l > 1)
					for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
				else e.lazy.loadInSlide(r);
				if (o.loadPrevNext)
					if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
						for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
						for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
					} else {
						var b = t.children("." + i.slideNextClass);
						b.length > 0 && e.lazy.loadInSlide(h(b));
						var w = t.children("." + i.slidePrevClass);
						w.length > 0 && e.lazy.loadInSlide(h(w))
					}
			}
		},
		de = {
			LinearSpline: function (e, t) {
				var i, s, a, r, n, o = function (e, t) {
					for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
					return i
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
					return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function (e) {
				this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
			},
			setTranslate: function (e, t) {
				var i, s, a = this,
					r = a.controller.control;

				function n(e) {
					var t = a.rtlTranslate ? -a.translate : a.translate;
					"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]);
				else r instanceof W && t !== r && n(r)
			},
			setTransition: function (e, t) {
				var i, s = this,
					a = s.controller.control;

				function r(t) {
					t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick((function () {
						t.updateAutoHeight()
					})), t.$wrapperEl.transitionEnd((function () {
						a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
					})))
				}
				if (Array.isArray(a))
					for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);
				else a instanceof W && t !== a && r(a)
			}
		},
		he = {
			makeElFocusable: function (e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function (e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function (e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function (e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function (e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function (e) {
				var t = this.params.a11y;
				if (13 === e.keyCode) {
					var i = s(e.target);
					this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
				}
			},
			notify: function (e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function () {
				if (!this.params.loop && this.navigation) {
					var e = this.navigation,
						t = e.$nextEl,
						i = e.$prevEl;
					i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
				}
			},
			updatePagination: function () {
				var e = this,
					t = e.params.a11y;
				e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i, a) {
					var r = s(a);
					e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
				}))
			},
			init: function () {
				this.$el.append(this.a11y.liveRegion);
				var e, t, i = this.params.a11y;
				this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			},
			destroy: function () {
				var e, t;
				this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			}
		},
		pe = {
			init: function () {
				if (this.params.history) {
					if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
					var e = this.history;
					e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
				}
			},
			destroy: function () {
				this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function () {
				this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function () {
				var e = t.location.pathname.slice(1).split("/").filter((function (e) {
						return "" !== e
					})),
					i = e.length;
				return {
					key: e[i - 2],
					value: e[i - 1]
				}
			},
			setHistory: function (e, i) {
				if (this.history.initialized && this.params.history.enabled) {
					var s = this.slides.eq(i),
						a = pe.slugify(s.attr("data-history"));
					t.location.pathname.includes(e) || (a = e + "/" + a);
					var r = t.history.state;
					r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
						value: a
					}, null, a) : t.history.pushState({
						value: a
					}, null, a))
				}
			},
			slugify: function (e) {
				return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function (e, t, i) {
				if (t)
					for (var s = 0, a = this.slides.length; s < a; s += 1) {
						var r = this.slides.eq(s);
						if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
							var n = r.index();
							this.slideTo(n, e, i)
						}
					} else this.slideTo(0, e, i)
			}
		},
		ce = {
			onHashCange: function () {
				var t = e.location.hash.replace("#", "");
				if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
					var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
					if (void 0 === i) return;
					this.slideTo(i)
				}
			},
			setHash: function () {
				if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
					if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
					else {
						var i = this.slides.eq(this.activeIndex),
							s = i.attr("data-hash") || i.attr("data-history");
						e.location.hash = s || ""
					}
			},
			init: function () {
				if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
					this.hashNavigation.initialized = !0;
					var i = e.location.hash.replace("#", "");
					if (i)
						for (var a = 0, r = this.slides.length; a < r; a += 1) {
							var n = this.slides.eq(a);
							if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
								var o = n.index();
								this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
							}
						}
					this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
				}
			},
			destroy: function () {
				this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		ue = {
			run: function () {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					i = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick((function () {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
				}), i)
			},
			start: function () {
				return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
			},
			stop: function () {
				return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
			},
			pause: function (e) {
				this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
			}
		},
		ve = {
			setTranslate: function () {
				for (var e = this.slides, t = 0; t < e.length; t += 1) {
					var i = this.slides.eq(t),
						s = -i[0].swiperSlideOffset;
					this.params.virtualTranslate || (s -= this.translate);
					var a = 0;
					this.isHorizontal() || (a = s, s = 0);
					var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: r
					}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
				}
			},
			setTransition: function (e) {
				var t = this,
					i = t.slides,
					s = t.$wrapperEl;
				if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
					var a = !1;
					i.transitionEnd((function () {
						if (!a && t && !t.destroyed) {
							a = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
						}
					}))
				}
			}
		},
		fe = {
			setTranslate: function () {
				var e, t = this.$el,
					i = this.$wrapperEl,
					a = this.slides,
					r = this.width,
					n = this.height,
					o = this.rtlTranslate,
					l = this.size,
					d = this.params.cubeEffect,
					h = this.isHorizontal(),
					p = this.virtual && this.params.virtual.enabled,
					c = 0;
				d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
					height: r + "px"
				})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
				for (var u = 0; u < a.length; u += 1) {
					var v = a.eq(u),
						f = u;
					p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
					var m = 90 * f,
						g = Math.floor(m / 360);
					o && (m = -m, g = Math.floor(-m / 360));
					var b = Math.max(Math.min(v[0].progress, 1), -1),
						w = 0,
						y = 0,
						x = 0;
					f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
					var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
					if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
						var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
					}
				}
				if (i.css({
						"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
						"transform-origin": "50% 50% -" + l / 2 + "px"
					}), d.shadow)
					if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
					else {
						var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
							M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
							P = d.shadowScale,
							z = d.shadowScale / M,
							k = d.shadowOffset;
						e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
					} var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
				i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
			},
			setTransition: function (e) {
				var t = this.$el;
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
			}
		},
		me = {
			setTranslate: function () {
				for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
					var a = e.eq(i),
						r = a[0].progress;
					this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
					var n = -180 * r,
						o = 0,
						l = -a[0].swiperSlideOffset,
						d = 0;
					if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
						var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
							p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
						0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
					}
					a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
				}
			},
			setTransition: function (e) {
				var t = this,
					i = t.slides,
					s = t.activeIndex,
					a = t.$wrapperEl;
				if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
					var r = !1;
					i.eq(s).transitionEnd((function () {
						if (!r && t && !t.destroyed) {
							r = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
						}
					}))
				}
			}
		},
		ge = {
			setTranslate: function () {
				for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
					var f = i.eq(u),
						m = r[u],
						g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
						b = l ? p * g : 0,
						w = l ? 0 : p * g,
						y = -c * Math.abs(g),
						x = n.stretch;
					"string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(n.stretch) / 100 * m);
					var T = l ? 0 : x * g,
						E = l ? x * g : 0;
					Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
					var S = "translate3d(" + E + "px," + T + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
					if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
						var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
							M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
						0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
					}
				}(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
			},
			setTransition: function (e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		be = {
			init: function () {
				var e = this.params.thumbs,
					t = this.constructor;
				e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), n.extend(this.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
			},
			onThumbClick: function () {
				var e = this.thumbs.swiper;
				if (e) {
					var t = e.clickedIndex,
						i = e.clickedSlide;
					if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
						var a;
						if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
							var r = this.activeIndex;
							this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
							var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
								o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
							a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
						}
						this.slideTo(a)
					}
				}
			},
			update: function (e) {
				var t = this.thumbs.swiper;
				if (t) {
					var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
					if (this.realIndex !== t.realIndex) {
						var s, a = t.activeIndex;
						if (t.params.loop) {
							t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
							var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
								n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
							s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
						} else s = this.realIndex;
						t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
					}
					var o = 1,
						l = this.params.thumbs.slideThumbActiveClass;
					if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled)
						for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
					else
						for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
				}
			}
		},
		we = [R, q, K, U, Z, J, te, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function () {
				n.extend(this, {
					mousewheel: {
						enabled: !1,
						enable: ie.enable.bind(this),
						disable: ie.disable.bind(this),
						handle: ie.handle.bind(this),
						handleMouseEnter: ie.handleMouseEnter.bind(this),
						handleMouseLeave: ie.handleMouseLeave.bind(this),
						animateSlider: ie.animateSlider.bind(this),
						releaseScroll: ie.releaseScroll.bind(this),
						lastScrollTime: n.now(),
						lastEventBeforeSnap: void 0,
						recentWheelEvents: []
					}
				})
			},
			on: {
				init: function () {
					!this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function () {
					this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function () {
				n.extend(this, {
					navigation: {
						init: se.init.bind(this),
						update: se.update.bind(this),
						destroy: se.destroy.bind(this),
						onNextClick: se.onNextClick.bind(this),
						onPrevClick: se.onPrevClick.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function () {
					this.navigation.update()
				},
				fromEdge: function () {
					this.navigation.update()
				},
				destroy: function () {
					this.navigation.destroy()
				},
				click: function (e) {
					var t, i = this.navigation,
						a = i.$nextEl,
						r = i.$prevEl;
					!this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function (e) {
						return e
					},
					formatFractionTotal: function (e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function () {
				n.extend(this, {
					pagination: {
						init: ae.init.bind(this),
						render: ae.render.bind(this),
						update: ae.update.bind(this),
						destroy: ae.destroy.bind(this),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function () {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function () {
					(this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
				},
				snapIndexChange: function () {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function () {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function () {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function () {
					this.pagination.destroy()
				},
				click: function (e) {
					this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function () {
				n.extend(this, {
					scrollbar: {
						init: re.init.bind(this),
						destroy: re.destroy.bind(this),
						updateSize: re.updateSize.bind(this),
						setTranslate: re.setTranslate.bind(this),
						setTransition: re.setTransition.bind(this),
						enableDraggable: re.enableDraggable.bind(this),
						disableDraggable: re.disableDraggable.bind(this),
						setDragPosition: re.setDragPosition.bind(this),
						getPointerPosition: re.getPointerPosition.bind(this),
						onDragStart: re.onDragStart.bind(this),
						onDragMove: re.onDragMove.bind(this),
						onDragEnd: re.onDragEnd.bind(this),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function () {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function () {
					this.scrollbar.updateSize()
				},
				resize: function () {
					this.scrollbar.updateSize()
				},
				observerUpdate: function () {
					this.scrollbar.updateSize()
				},
				setTranslate: function () {
					this.scrollbar.setTranslate()
				},
				setTransition: function (e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function () {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function () {
				n.extend(this, {
					parallax: {
						setTransform: ne.setTransform.bind(this),
						setTranslate: ne.setTranslate.bind(this),
						setTransition: ne.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				init: function () {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTranslate: function () {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTransition: function (e) {
					this.params.parallax.enabled && this.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function () {
				var e = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (i) {
					t[i] = oe[i].bind(e)
				})), n.extend(e, {
					zoom: t
				});
				var i = 1;
				Object.defineProperty(e.zoom, "scale", {
					get: function () {
						return i
					},
					set: function (t) {
						if (i !== t) {
							var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
								a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
							e.emit("zoomChange", t, s, a)
						}
						i = t
					}
				})
			},
			on: {
				init: function () {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function () {
					this.zoom.disable()
				},
				touchStart: function (e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function (e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function (e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function () {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				},
				slideChange: function () {
					this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function () {
				n.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: le.load.bind(this),
						loadInSlide: le.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function () {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function () {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function () {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function () {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function () {
					this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
				},
				transitionEnd: function () {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				},
				slideChange: function () {
					this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function () {
				n.extend(this, {
					controller: {
						control: this.params.controller.control,
						getInterpolateFunction: de.getInterpolateFunction.bind(this),
						setTranslate: de.setTranslate.bind(this),
						setTransition: de.setTransition.bind(this)
					}
				})
			},
			on: {
				update: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function (e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function (e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function () {
				var e = this;
				n.extend(e, {
					a11y: {
						liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(he).forEach((function (t) {
					e.a11y[t] = he[t].bind(e)
				}))
			},
			on: {
				init: function () {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function () {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function () {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function () {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function () {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function () {
				n.extend(this, {
					history: {
						init: pe.init.bind(this),
						setHistory: pe.setHistory.bind(this),
						setHistoryPopState: pe.setHistoryPopState.bind(this),
						scrollToSlide: pe.scrollToSlide.bind(this),
						destroy: pe.destroy.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.history.enabled && this.history.init()
				},
				destroy: function () {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function () {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				},
				slideChange: function () {
					this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function () {
				n.extend(this, {
					hashNavigation: {
						initialized: !1,
						init: ce.init.bind(this),
						destroy: ce.destroy.bind(this),
						setHash: ce.setHash.bind(this),
						onHashCange: ce.onHashCange.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function () {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function () {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				},
				slideChange: function () {
					this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function () {
				var e = this;
				n.extend(e, {
					autoplay: {
						running: !1,
						paused: !1,
						run: ue.run.bind(e),
						start: ue.start.bind(e),
						stop: ue.stop.bind(e),
						pause: ue.pause.bind(e),
						onVisibilityChange: function () {
							"hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
						},
						onTransitionEnd: function (t) {
							e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function () {
					this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
				},
				beforeTransitionStart: function (e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
				},
				sliderFirstMove: function () {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				touchEnd: function () {
					this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
				},
				destroy: function () {
					this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function () {
				n.extend(this, {
					fadeEffect: {
						setTranslate: ve.setTranslate.bind(this),
						setTransition: ve.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					if ("fade" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "fade");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						n.extend(this.params, e), n.extend(this.originalParams, e)
					}
				},
				setTranslate: function () {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function (e) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function () {
				n.extend(this, {
					cubeEffect: {
						setTranslate: fe.setTranslate.bind(this),
						setTransition: fe.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					if ("cube" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						n.extend(this.params, e), n.extend(this.originalParams, e)
					}
				},
				setTranslate: function () {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function (e) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function () {
				n.extend(this, {
					flipEffect: {
						setTranslate: me.setTranslate.bind(this),
						setTransition: me.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					if ("flip" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						n.extend(this.params, e), n.extend(this.originalParams, e)
					}
				},
				setTranslate: function () {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function (e) {
					"flip" === this.params.effect && this.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function () {
				n.extend(this, {
					coverflowEffect: {
						setTranslate: ge.setTranslate.bind(this),
						setTransition: ge.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					"coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function () {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function (e) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					multipleActiveThumbs: !0,
					swiper: null,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function () {
				n.extend(this, {
					thumbs: {
						swiper: null,
						init: be.init.bind(this),
						update: be.update.bind(this),
						onThumbClick: be.onThumbClick.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this.params.thumbs;
					e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
				},
				slideChange: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				update: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				resize: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				observerUpdate: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				setTransition: function (e) {
					var t = this.thumbs.swiper;
					t && t.setTransition(e)
				},
				beforeDestroy: function () {
					var e = this.thumbs.swiper;
					e && this.thumbs.swiperCreated && e && e.destroy()
				}
			}
		}];
	return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W
}));
//# sourceMappingURL=swiper.min.js.map
//# sourceMappingURL=swiper-bundle.js.map

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
	var b, c = navigator.userAgent,
		d = /iphone/i.test(c),
		e = /chrome/i.test(c),
		f = /android/i.test(c);
	a.mask = {
		definitions: {
			9: "[0-9]",
			a: "[A-Za-z]",
			"*": "[A-Za-z0-9]"
		},
		autoclear: !0,
		dataName: "rawMaskFn",
		placeholder: "_"
	}, a.fn.extend({
		caret: function (a, b) {
			var c;
			if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
				this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
			})) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
				begin: a,
				end: b
			})
		},
		unmask: function () {
			return this.trigger("unmask")
		},
		mask: function (c, g) {
			var h, i, j, k, l, m, n, o;
			if (!c && this.length > 0) {
				h = a(this[0]);
				var p = h.data(a.mask.dataName);
				return p ? p() : void 0
			}
			return g = a.extend({
				autoclear: a.mask.autoclear,
				placeholder: a.mask.placeholder,
				completed: null
			}, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
				"?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
			}), this.trigger("unmask").each(function () {
				function h() {
					if (g.completed) {
						for (var a = l; m >= a; a++)
							if (j[a] && C[a] === p(a)) return;
						g.completed.call(B)
					}
				}

				function p(a) {
					return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
				}

				function q(a) {
					for (; ++a < n && !j[a];);
					return a
				}

				function r(a) {
					for (; --a >= 0 && !j[a];);
					return a
				}

				function s(a, b) {
					var c, d;
					if (!(0 > a)) {
						for (c = a, d = q(b); n > c; c++)
							if (j[c]) {
								if (!(n > d && j[c].test(C[d]))) break;
								C[c] = C[d], C[d] = p(d), d = q(d)
							} z(), B.caret(Math.max(l, a))
					}
				}

				function t(a) {
					var b, c, d, e;
					for (b = a, c = p(a); n > b; b++)
						if (j[b]) {
							if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
							c = e
						}
				}

				function u() {
					var a = B.val(),
						b = B.caret();
					if (o && o.length && o.length > a.length) {
						for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
						if (0 === b.begin)
							for (; b.begin < l && !j[b.begin];) b.begin++;
						B.caret(b.begin, b.begin)
					} else {
						for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
						B.caret(b.begin, b.begin)
					}
					h()
				}

				function v() {
					A(), B.val() != E && B.change()
				}

				function w(a) {
					if (!B.prop("readonly")) {
						var b, c, e, f = a.which || a.keyCode;
						o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
					}
				}

				function x(b) {
					if (!B.prop("readonly")) {
						var c, d, e, g = b.which || b.keyCode,
							i = B.caret();
						if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
							if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
								if (t(c), C[c] = d, z(), e = q(c), f) {
									var k = function () {
										a.proxy(a.fn.caret, B, e)()
									};
									setTimeout(k, 0)
								} else B.caret(e);
								i.begin <= m && h()
							}
							b.preventDefault()
						}
					}
				}

				function y(a, b) {
					var c;
					for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c))
				}

				function z() {
					B.val(C.join(""))
				}

				function A(a) {
					var b, c, d, e = B.val(),
						f = -1;
					for (b = 0, d = 0; n > b; b++)
						if (j[b]) {
							for (C[b] = p(b); d++ < e.length;)
								if (c = e.charAt(d - 1), j[b].test(c)) {
									C[b] = c, f = b;
									break
								} if (d > e.length) {
								y(b + 1, n);
								break
							}
						} else C[b] === e.charAt(d) && d++, k > b && (f = b);
					return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
				}
				var B = a(this),
					C = a.map(c.split(""), function (a, b) {
						return "?" != a ? i[a] ? p(b) : a : void 0
					}),
					D = C.join(""),
					E = B.val();
				B.data(a.mask.dataName, function () {
					return a.map(C, function (a, b) {
						return j[b] && a != p(b) ? a : null
					}).join("")
				}), B.one("unmask", function () {
					B.off(".mask").removeData(a.mask.dataName)
				}).on("focus.mask", function () {
					if (!B.prop("readonly")) {
						clearTimeout(b);
						var a;
						E = B.val(), a = A(), b = setTimeout(function () {
							B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
						}, 10)
					}
				}).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
					B.prop("readonly") || setTimeout(function () {
						var a = A(!0);
						B.caret(a), h()
					}, 0)
				}), e && f && B.off("input.mask").on("input.mask", u), A()
			})
		}
	})
});

/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
! function (t) {
	var e = {
		mode: "horizontal",
		slideSelector: "",
		infiniteLoop: !0,
		hideControlOnEnd: !1,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: !1,
		captions: !1,
		ticker: !1,
		tickerHover: !1,
		adaptiveHeight: !1,
		adaptiveHeightSpeed: 500,
		video: !1,
		useCSS: !0,
		preloadImages: "visible",
		responsive: !0,
		slideZIndex: 50,
		wrapperClass: "bx-wrapper",
		touchEnabled: !0,
		swipeThreshold: 50,
		oneToOneTouch: !0,
		preventDefaultSwipeX: !0,
		preventDefaultSwipeY: !1,
		ariaLive: !0,
		ariaHidden: !0,
		keyboardEnabled: !1,
		pager: !0,
		pagerType: "full",
		pagerShortSeparator: " / ",
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,
		controls: !0,
		nextText: "Next",
		prevText: "Prev",
		nextSelector: null,
		prevSelector: null,
		autoControls: !1,
		startText: "Start",
		stopText: "Stop",
		autoControlsCombine: !1,
		autoControlsSelector: null,
		auto: !1,
		pause: 4e3,
		autoStart: !0,
		autoDirection: "next",
		stopAutoOnClick: !1,
		autoHover: !1,
		autoDelay: 0,
		autoSlideForOnePage: !1,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,
		shrinkItems: !1,
		onSliderLoad: function () {
			return !0
		},
		onSlideBefore: function () {
			return !0
		},
		onSlideAfter: function () {
			return !0
		},
		onSlideNext: function () {
			return !0
		},
		onSlidePrev: function () {
			return !0
		},
		onSliderResize: function () {
			return !0
		}
	};
	t.fn.bxSlider = function (n) {
		if (0 === this.length) return this;
		if (this.length > 1) return this.each(function () {
			t(this).bxSlider(n)
		}), this;
		var s = {},
			o = this,
			r = t(window).width(),
			a = t(window).height();
		if (!t(o).data("bxSlider")) {
			var l = function () {
					t(o).data("bxSlider") || (s.settings = t.extend({}, e, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
						index: s.settings.startSlide
					}, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" === s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" !== s.settings.mode && function () {
						for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
							if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
						return !1
					}(), "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function () {
						t(this).data("origStyle", t(this).attr("style"))
					}), d())
				},
				d = function () {
					var e = s.children.eq(s.settings.startSlide);
					o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({
						width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto",
						position: "relative"
					}), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({
						width: "100%",
						overflow: "hidden",
						position: "relative"
					}), s.viewport.parent().css({
						maxWidth: u()
					}), s.children.css({
						float: "horizontal" === s.settings.mode ? "left" : "none",
						listStyle: "none",
						position: "relative"
					}), s.children.css("width", h()), "horizontal" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" === s.settings.mode && (s.children.css({
						position: "absolute",
						zIndex: 0,
						display: "none"
					}), s.children.eq(s.settings.startSlide).css({
						zIndex: s.settings.slideZIndex,
						display: "block"
					})), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && P(), s.active.last = s.settings.startSlide === f() - 1, s.settings.video && o.fitVids(), ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.controls && C(), s.settings.auto && s.settings.autoControls && T(), s.settings.pager && w(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), c(e, g)
				},
				c = function (e, i) {
					var n = e.find('img:not([src=""]), iframe').length,
						s = 0;
					return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function () {
						t(this).one("load error", function () {
							++s === n && i()
						}).each(function () {
							this.complete && t(this).trigger("load")
						})
					})
				},
				g = function () {
					if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) {
						var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
							i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
							n = s.children.slice(-e).clone(!0).addClass("bx-clone");
						s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n)
					}
					s.loader.remove(), m(), "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), o.redrawSlider(), s.settings.onSliderLoad.call(o, s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", Z), s.settings.auto && s.settings.autoStart && (f() > 1 || s.settings.autoSlideForOnePage) && H(), s.settings.ticker && W(), s.settings.pager && I(s.settings.startSlide), s.settings.controls && D(), s.settings.touchEnabled && !s.settings.ticker && N(), s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(F)
				},
				p = function () {
					var e = 0,
						n = t();
					if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
						if (s.carousel) {
							var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * x();
							for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i))
						} else n = s.children.eq(s.active.index);
					else n = s.children;
					return "vertical" === s.settings.mode ? (n.each(function (i) {
						e += t(this).outerHeight()
					}), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () {
						return t(this).outerHeight(!1)
					}).get()), "border-box" === s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" === s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e
				},
				u = function () {
					var t = "100%";
					return s.settings.slideWidth > 0 && (t = "horizontal" === s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t
				},
				h = function () {
					var t = s.settings.slideWidth,
						e = s.viewport.width();
					if (0 === s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" === s.settings.mode) t = e;
					else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) {
						if (e > s.maxThreshold) return t;
						e < s.minThreshold ? t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides : s.settings.shrinkItems && (t = Math.floor((e + s.settings.slideMargin) / Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) - s.settings.slideMargin))
					}
					return t
				},
				v = function () {
					var t = 1,
						e = null;
					return "horizontal" === s.settings.mode && s.settings.slideWidth > 0 ? s.viewport.width() < s.minThreshold ? t = s.settings.minSlides : s.viewport.width() > s.maxThreshold ? t = s.settings.maxSlides : (e = s.children.first().width() + s.settings.slideMargin, t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)) : "vertical" === s.settings.mode && (t = s.settings.minSlides), t
				},
				f = function () {
					var t = 0,
						e = 0,
						i = 0;
					if (s.settings.moveSlides > 0)
						if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / x());
						else
							for (; e < s.children.length;) ++t, e = i + v(), i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
					else t = Math.ceil(s.children.length / v());
					return t
				},
				x = function () {
					return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v()
				},
				m = function () {
					var t, e, i;
					s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop ? "horizontal" === s.settings.mode ? (e = s.children.last(), t = e.position(), S(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === s.settings.mode && (i = s.children.length - s.settings.minSlides, t = s.children.eq(i).position(), S(-t.top, "reset", 0)) : (t = s.children.eq(s.active.index * x()).position(), s.active.index === f() - 1 && (s.active.last = !0), void 0 !== t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0)))
				},
				S = function (e, i, n, r) {
					var a, l;
					s.usingCSS ? (l = "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
						t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), q())
					}) : q()) : "reset" === i ? o.css(s.animProp, l) : "ticker" === i && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
						t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), S(r.resetValue, "reset", 0), L())
					}) : (S(r.resetValue, "reset", 0), L()))) : (a = {}, a[s.animProp] = e, "slide" === i ? o.animate(a, n, s.settings.easing, function () {
						q()
					}) : "reset" === i ? o.css(s.animProp, e) : "ticker" === i && o.animate(a, n, "linear", function () {
						S(r.resetValue, "reset", 0), L()
					}))
				},
				b = function () {
					for (var e = "", i = "", n = f(), o = 0; o < n; o++) i = "", s.settings.buildPager && t.isFunction(s.settings.buildPager) || s.settings.pagerCustom ? (i = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (i = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>";
					s.pagerEl.html(e)
				},
				w = function () {
					s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), b()), s.pagerEl.on("click touchend", "a", z)
				},
				C = function () {
					s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click touchend", E), s.controls.prev.bind("click touchend", k), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
				},
				T = function () {
					s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", M), s.controls.autoEl.on("click", ".bx-stop", y), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), A(s.settings.autoStart ? "stop" : "start")
				},
				P = function () {
					s.children.each(function (e) {
						var i = t(this).find("img:first").attr("title");
						void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
					})
				},
				E = function (t) {
					t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
				},
				k = function (t) {
					t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
				},
				M = function (t) {
					o.startAuto(), t.preventDefault()
				},
				y = function (t) {
					o.stopAuto(), t.preventDefault()
				},
				z = function (e) {
					var i, n;
					e.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== s.active.index && o.goToSlide(n)))
				},
				I = function (e) {
					var i = s.children.length;
					return "short" === s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function (i, n) {
						t(n).find("a").eq(e).addClass("active")
					}))
				},
				q = function () {
					if (s.settings.infiniteLoop) {
						var t = "";
						0 === s.active.index ? t = s.children.eq(0).position() : s.active.index === f() - 1 && s.carousel ? t = s.children.eq((f() - 1) * x()).position() : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0))
					}
					s.working = !1, s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index)
				},
				A = function (t) {
					s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
				},
				D = function () {
					1 === f() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 === s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index === f() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
				},
				H = function () {
					if (s.settings.autoDelay > 0) {
						setTimeout(o.startAuto, s.settings.autoDelay)
					} else o.startAuto(), t(window).focus(function () {
						o.startAuto()
					}).blur(function () {
						o.stopAuto()
					});
					s.settings.autoHover && o.hover(function () {
						s.interval && (o.stopAuto(!0), s.autoPaused = !0)
					}, function () {
						s.autoPaused && (o.startAuto(!0), s.autoPaused = null)
					})
				},
				W = function () {
					var e, i, n, r, a, l, d, c, g = 0;
					"next" === s.settings.autoDirection ? o.append(s.children.clone().addClass("bx-clone")) : (o.prepend(s.children.clone().addClass("bx-clone")), e = s.children.first().position(), g = "horizontal" === s.settings.mode ? -e.left : -e.top), S(g, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && (s.usingCSS ? (r = "horizontal" === s.settings.mode ? 4 : 5, s.viewport.hover(function () {
						i = o.css("-" + s.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), S(n, "reset", 0)
					}, function () {
						c = 0, s.children.each(function (e) {
							c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
						}), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(n))), L(d)
					})) : s.viewport.hover(function () {
						o.stop()
					}, function () {
						c = 0, s.children.each(function (e) {
							c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
						}), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(o.css(l)))), L(d)
					})), L()
				},
				L = function (t) {
					var e, i, n, r = t ? t : s.settings.speed,
						a = {
							left: 0,
							top: 0
						},
						l = {
							left: 0,
							top: 0
						};
					"next" === s.settings.autoDirection ? a = o.find(".bx-clone").first().position() : l = s.children.first().position(), e = "horizontal" === s.settings.mode ? -a.left : -a.top, i = "horizontal" === s.settings.mode ? -l.left : -l.top, n = {
						resetValue: i
					}, S(e, "ticker", r, n)
				},
				O = function (e) {
					var i = t(window),
						n = {
							top: i.scrollTop(),
							left: i.scrollLeft()
						},
						s = e.offset();
					return n.right = n.left + i.width(), n.bottom = n.top + i.height(), s.right = s.left + e.outerWidth(), s.bottom = s.top + e.outerHeight(), !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom)
				},
				F = function (t) {
					var e = document.activeElement.tagName.toLowerCase(),
						i = "input|textarea",
						n = new RegExp(e, ["i"]),
						s = n.exec(i);
					if (null == s && O(o)) {
						if (39 === t.keyCode) return E(t), !1;
						if (37 === t.keyCode) return k(t), !1
					}
				},
				N = function () {
					s.touch = {
						start: {
							x: 0,
							y: 0
						},
						end: {
							x: 0,
							y: 0
						}
					}, s.viewport.bind("touchstart MSPointerDown pointerdown", X), s.viewport.on("click", ".bxslider a", function (t) {
						s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled"))
					})
				},
				X = function (t) {
					if (s.controls.el.addClass("disabled"), s.working) t.preventDefault(), s.controls.el.removeClass("disabled");
					else {
						s.touch.originalPos = o.position();
						var e = t.originalEvent,
							i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
						s.touch.start.x = i[0].pageX, s.touch.start.y = i[0].pageY, s.viewport.get(0).setPointerCapture && (s.pointerId = e.pointerId, s.viewport.get(0).setPointerCapture(s.pointerId)), s.viewport.bind("touchmove MSPointerMove pointermove", V), s.viewport.bind("touchend MSPointerUp pointerup", R), s.viewport.bind("MSPointerCancel pointercancel", Y)
					}
				},
				Y = function (t) {
					S(s.touch.originalPos.left, "reset", 0), s.controls.el.removeClass("disabled"), s.viewport.unbind("MSPointerCancel pointercancel", Y), s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
				},
				V = function (t) {
					var e = t.originalEvent,
						i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
						n = Math.abs(i[0].pageX - s.touch.start.x),
						o = Math.abs(i[0].pageY - s.touch.start.y),
						r = 0,
						a = 0;
					3 * n > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== s.settings.mode && s.settings.oneToOneTouch && ("horizontal" === s.settings.mode ? (a = i[0].pageX - s.touch.start.x, r = s.touch.originalPos.left + a) : (a = i[0].pageY - s.touch.start.y, r = s.touch.originalPos.top + a), S(r, "reset", 0))
				},
				R = function (t) {
					s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.controls.el.removeClass("disabled");
					var e = t.originalEvent,
						i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
						n = 0,
						r = 0;
					s.touch.end.x = i[0].pageX, s.touch.end.y = i[0].pageY, "fade" === s.settings.mode ? (r = Math.abs(s.touch.start.x - s.touch.end.x), r >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === s.settings.mode ? (r = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (r = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 === s.active.index && r > 0 || s.active.last && r < 0) ? S(n, "reset", 200) : Math.abs(r) >= s.settings.swipeThreshold ? (r < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : S(n, "reset", 200)), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
				},
				Z = function (e) {
					if (s.initialized)
						if (s.working) window.setTimeout(Z, 10);
						else {
							var i = t(window).width(),
								n = t(window).height();
							r === i && a === n || (r = i, a = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index))
						}
				},
				B = function (t) {
					var e = v();
					s.settings.ariaHidden && !s.settings.ticker && (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false"))
				},
				U = function (t) {
					return t < 0 ? s.settings.infiniteLoop ? f() - 1 : s.active.index : t >= f() ? s.settings.infiniteLoop ? 0 : s.active.index : t
				};
			return o.goToSlide = function (e, i) {
				var n, r, a, l, d = !0,
					c = 0,
					g = {
						left: 0,
						top: 0
					},
					u = null;
				if (s.oldIndex = s.active.index, s.active.index = U(e), !s.working && s.active.index !== s.oldIndex) {
					if (s.working = !0, d = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index), "undefined" != typeof d && !d) return s.active.index = s.oldIndex, void(s.working = !1);
					"next" === i ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1) : "prev" === i && (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)), s.active.last = s.active.index >= f() - 1, (s.settings.pager || s.settings.pagerCustom) && I(s.active.index), s.settings.controls && D(), "fade" === s.settings.mode ? (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({
						height: p()
					}, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
						zIndex: 0
					}), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function () {
						t(this).css("zIndex", s.settings.slideZIndex), q()
					})) : (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({
						height: p()
					}, s.settings.adaptiveHeightSpeed), !s.settings.infiniteLoop && s.carousel && s.active.last ? "horizontal" === s.settings.mode ? (u = s.children.eq(s.children.length - 1), g = u.position(), c = s.viewport.width() - u.outerWidth()) : (n = s.children.length - s.settings.minSlides, g = s.children.eq(n).position()) : s.carousel && s.active.last && "prev" === i ? (r = 1 === s.settings.moveSlides ? s.settings.maxSlides - x() : (f() - 1) * x() - (s.children.length - s.settings.maxSlides), u = o.children(".bx-clone").eq(r), g = u.position()) : "next" === i && 0 === s.active.index ? (g = o.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1) : e >= 0 && (l = e * parseInt(x()), g = s.children.eq(l).position()), "undefined" != typeof g ? (a = "horizontal" === s.settings.mode ? -(g.left - c) : -g.top, S(a, "slide", s.settings.speed)) : s.working = !1), s.settings.ariaHidden && B(s.active.index * x())
				}
			}, o.goToNextSlide = function () {
				if (s.settings.infiniteLoop || !s.active.last) {
					var t = parseInt(s.active.index) + 1;
					o.goToSlide(t, "next")
				}
			}, o.goToPrevSlide = function () {
				if (s.settings.infiniteLoop || 0 !== s.active.index) {
					var t = parseInt(s.active.index) - 1;
					o.goToSlide(t, "prev")
				}
			}, o.startAuto = function (t) {
				s.interval || (s.interval = setInterval(function () {
					"next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
				}, s.settings.pause), s.settings.autoControls && t !== !0 && A("stop"))
			}, o.stopAuto = function (t) {
				s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && t !== !0 && A("start"))
			}, o.getCurrentSlide = function () {
				return s.active.index
			}, o.getCurrentSlideElement = function () {
				return s.children.eq(s.active.index)
			}, o.getSlideElement = function (t) {
				return s.children.eq(t)
			}, o.getSlideCount = function () {
				return s.children.length
			}, o.isWorking = function () {
				return s.working
			}, o.redrawSlider = function () {
				s.children.add(o.find(".bx-clone")).outerWidth(h()), s.viewport.css("height", p()), s.settings.ticker || m(), s.active.last && (s.active.index = f() - 1), s.active.index >= f() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (b(), I(s.active.index)), s.settings.ariaHidden && B(s.active.index * x())
			}, o.destroySlider = function () {
				s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function () {
					void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
				}), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", Z), s.settings.keyboardEnabled && t(document).unbind("keydown", F), t(this).removeData("bxSlider"))
			}, o.reloadSlider = function (e) {
				void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this)
			}, l(), t(o).data("bxSlider", this), this
		}
	}
}(jQuery);

/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	a.extend(a.fn, {
		validate: function (b) {
			if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
				c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.on("submit.validate", function (b) {
				function d() {
					var d, e;
					return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
				}
				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function () {
			var b, c, d;
			return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
				b = c.element(this) && b, b || (d = d.concat(c.errorList))
			}), c.errorList = d), b
		},
		rules: function (b, c) {
			var d, e, f, g, h, i, j = this[0];
			if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
				if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
					case "add":
						a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
						break;
					case "remove":
						return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
							i[b] = f[b], delete f[b]
						}), i) : (delete e[j.name], f)
				}
				return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
					required: h
				}, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
					remote: h
				})), g
			}
		}
	}), a.extend(a.expr.pseudos || a.expr[":"], {
		blank: function (b) {
			return !a.trim("" + a(b).val())
		},
		filled: function (b) {
			var c = a(b).val();
			return null !== c && !!a.trim("" + c)
		},
		unchecked: function (b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function (b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function (b, c) {
		return 1 === arguments.length ? function () {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function (a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function (b, c) {
				var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
			},
			onclick: function (a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function (b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			// required: "This field is required.",
			// remote: "Please fix this field.",
			// email: "Please enter a valid email address.",
			// url: "Please enter a valid URL.",
			// date: "Please enter a valid date.",
			// dateISO: "Please enter a valid date (ISO).",
			// number: "Please enter a valid number.",
			// digits: "Please enter only digits.",
			// equalTo: "Please enter the same value again.",
			// maxlength: a.validator.format("Please enter no more than {0} characters."),
			// minlength: a.validator.format("Please enter at least {0} characters."),
			// rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			// range: a.validator.format("Please enter a value between {0} and {1}."),
			// max: a.validator.format("Please enter a value less than or equal to {0}."),
			// min: a.validator.format("Please enter a value greater than or equal to {0}."),
			// step: a.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function b(b) {
					!this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name"));
					var c = a.data(this.form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function (b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function (b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function () {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function () {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function (b) {
				var c, d, e = this.clean(b),
					f = this.validationTargetFor(e),
					g = this,
					h = !0;
				return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
					b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
				}), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
			},
			showErrors: function (b) {
				if (b) {
					var c = this;
					a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
						return {
							message: a,
							element: c.findByName(b)[0]
						}
					}), this.successList = a.grep(this.successList, function (a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function () {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(b)
			},
			resetElements: function (a) {
				var b;
				if (this.settings.unhighlight)
					for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
				else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			},
			objectLength: function (a) {
				var b, c = 0;
				for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
				return c
			},
			hideErrors: function () {
				this.hideThese(this.toHide)
			},
			hideThese: function (a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function () {
				return 0 === this.size()
			},
			size: function () {
				return this.errorList.length
			},
			focusInvalid: function () {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {}
			},
			findLastActive: function () {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function (a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function () {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
					var d = this.name || a(this).attr("name");
					return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = d), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
				})
			},
			clean: function (b) {
				return a(b)[0]
			},
			errors: function () {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			resetInternals: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
			},
			reset: function () {
				this.resetInternals(), this.currentElements = a([])
			},
			prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function (a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function (b) {
				var c, d, e = a(b),
					f = b.type;
				return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function (b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f, g = a(b).rules(),
					h = a.map(g, function (a, b) {
						return b
					}).length,
					i = !1,
					j = this.elementValue(b);
				if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f) {
					if (j = f.call(b, j), "string" != typeof j) throw new TypeError("The normalizer should return a string value.");
					delete g.normalizer
				}
				for (d in g) {
					e = {
						method: d,
						parameters: g[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
							i = !0;
							continue
						}
						if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (k) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
					}
				}
				if (!i) return this.objectLength(g) && this.successList.push(b), !0
			},
			customDataMessage: function (b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function (a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function () {
				for (var a = 0; a < arguments.length; a++)
					if (void 0 !== arguments[a]) return arguments[a]
			},
			defaultMessage: function (b, c) {
				"string" == typeof c && (c = {
					method: c
				});
				// var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
				var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method]),
					e = /\$?\{(\d+)\}/g;
				return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
			},
			formatAndAdd: function (a, b) {
				var c = this.defaultMessage(a, b);
				this.errorList.push({
					message: c,
					element: a,
					method: b.method
				}), this.errorMap[a.name] = c, this.submitted[a.name] = c
			},
			addWrapper: function (a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function () {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function () {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function () {
				return a(this.errorList).map(function () {
					return this.element
				})
			},
			showLabel: function (b, c) {
				var d, e, f, g, h = this.errorsFor(b),
					i = this.idOrName(b),
					j = a(b).attr("aria-describedby");
				h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
					c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
				})))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
			},
			errorsFor: function (b) {
				var c = this.escapeCssMeta(this.idOrName(b)),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			escapeCssMeta: function (a) {
				return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function (a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function (b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function (a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function (b) {
				return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
			},
			getLength: function (b, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function (a, b) {
				return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
			},
			dependTypes: {
				"boolean": function (a) {
					return a
				},
				string: function (b, c) {
					return !!a(b, c.form).length
				},
				"function": function (a, b) {
					return a(b)
				}
			},
			optional: function (b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function (b) {
				this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
			},
			stopRequest: function (b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function (b, c) {
				return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, {
						method: c
					})
				})
			},
			destroy: function () {
				this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function (b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function (b) {
			var c = {},
				d = a(b).attr("class");
			return d && a.each(d.split(" "), function () {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		normalizeAttributeRule: function (a, b, c, d) {
			/min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
		},
		attributeRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
			return e
		},
		staticRules: function (b) {
			var c = {},
				d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function (b, c) {
			return a.each(b, function (d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case "string":
							f = !!a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
				}
			}), a.each(b, function (d, e) {
				b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
			}), a.each(["minlength", "maxlength"], function () {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function () {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function (b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function () {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function (b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function (b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
			},
			email: function (a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function (a, b) {
				return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
			},
			date: function (a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function (a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function (a, b) {
				return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function (a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			minlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e <= d
			},
			rangelength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function (a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function (a, b, c) {
				return this.optional(b) || a <= c
			},
			range: function (a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			step: function (b, c, d) {
				var e, f = a(c).attr("type"),
					g = "Step attribute on input type " + f + " is not supported.",
					h = ["text", "number", "range"],
					i = new RegExp("\\b" + f + "\\b"),
					j = f && !i.test(h.join()),
					k = function (a) {
						var b = ("" + a).match(/(?:\.(\d+))?$/);
						return b && b[1] ? b[1].length : 0
					},
					l = function (a) {
						return Math.round(a * Math.pow(10, e))
					},
					m = !0;
				if (j) throw new Error(g);
				return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
			},
			equalTo: function (b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
					a(c).valid()
				}), b === e.val()
			},
			remote: function (b, c, d, e) {
				if (this.optional(c)) return "dependency-mismatch";
				e = "string" == typeof e && e || "remote";
				var f, g, h, i = this.previousValue(c, e);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
					url: d
				} || d, h = a.param(a.extend({
					data: b
				}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: g,
					context: f.currentForm,
					success: function (a) {
						var d, g, h, j = a === !0 || "true" === a;
						f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
							method: e,
							parameters: b
						}), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	});
	var b, c = {};
	return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function (d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	}), a
});

/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, r) {
		return void 0 === r && (r = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(r), r
	} : e(jQuery)
}(function (e) {
	"use strict";

	function t(t) {
		var r = t.data;
		t.isDefaultPrevented() || (t.preventDefault(), e(t.target).closest("form").ajaxSubmit(r))
	}

	function r(t) {
		var r = t.target,
			a = e(r);
		if (!a.is("[type=submit],[type=image]")) {
			var n = a.closest("[type=submit]");
			if (0 === n.length) return;
			r = n[0]
		}
		var i = r.form;
		if (i.clk = r, "image" === r.type)
			if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
			else if ("function" == typeof e.fn.offset) {
			var o = a.offset();
			i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
		} else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
		setTimeout(function () {
			i.clk = i.clk_x = i.clk_y = null
		}, 100)
	}

	function a() {
		if (e.fn.ajaxSubmit.debug) {
			var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
			window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
		}
	}
	var n = /\r?\n/g,
		i = {};
	i.fileapi = void 0 !== e('<input type="file">').get(0).files, i.formdata = void 0 !== window.FormData;
	var o = !!e.fn.prop;
	e.fn.attr2 = function () {
		if (!o) return this.attr.apply(this, arguments);
		var e = this.prop.apply(this, arguments);
		return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
	}, e.fn.ajaxSubmit = function (t, r, n, s) {
		function u(r) {
			var a, n, i = e.param(r, t.traditional).split("&"),
				o = i.length,
				s = [];
			for (a = 0; a < o; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
			return s
		}

		function c(r) {
			function n(e) {
				var t = null;
				try {
					e.contentWindow && (t = e.contentWindow.document)
				} catch (e) {
					a("cannot get iframe.contentWindow document: " + e)
				}
				if (t) return t;
				try {
					t = e.contentDocument ? e.contentDocument : e.document
				} catch (r) {
					a("cannot get iframe.contentDocument: " + r), t = e.document
				}
				return t
			}

			function i() {
				function t() {
					try {
						var e = n(v).readyState;
						a("state = " + e), e && "uninitialized" === e.toLowerCase() && setTimeout(t, 50)
					} catch (e) {
						a("Server abort: ", e, " (", e.name, ")"), s(L), j && clearTimeout(j), j = void 0
					}
				}
				var r = p.attr2("target"),
					i = p.attr2("action"),
					o = p.attr("enctype") || p.attr("encoding") || "multipart/form-data";
				w.setAttribute("target", m), l && !/post/i.test(l) || w.setAttribute("method", "POST"), i !== f.url && w.setAttribute("action", f.url), f.skipEncodingOverride || l && !/post/i.test(l) || p.attr({
					encoding: "multipart/form-data",
					enctype: "multipart/form-data"
				}), f.timeout && (j = setTimeout(function () {
					T = !0, s(A)
				}, f.timeout));
				var u = [];
				try {
					if (f.extraData)
						for (var c in f.extraData) f.extraData.hasOwnProperty(c) && (e.isPlainObject(f.extraData[c]) && f.extraData[c].hasOwnProperty("name") && f.extraData[c].hasOwnProperty("value") ? u.push(e('<input type="hidden" name="' + f.extraData[c].name + '">', k).val(f.extraData[c].value).appendTo(w)[0]) : u.push(e('<input type="hidden" name="' + c + '">', k).val(f.extraData[c]).appendTo(w)[0]));
					f.iframeTarget || h.appendTo(D), v.attachEvent ? v.attachEvent("onload", s) : v.addEventListener("load", s, !1), setTimeout(t, 15);
					try {
						w.submit()
					} catch (e) {
						document.createElement("form").submit.apply(w)
					}
				} finally {
					w.setAttribute("action", i), w.setAttribute("enctype", o), r ? w.setAttribute("target", r) : p.removeAttr("target"), e(u).remove()
				}
			}

			function s(t) {
				if (!x.aborted && !X) {
					if ((O = n(v)) || (a("cannot access response document"), t = L), t === A && x) return x.abort("timeout"), void S.reject(x, "timeout");
					if (t === L && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
					if (O && O.location.href !== f.iframeSrc || T) {
						v.detachEvent ? v.detachEvent("onload", s) : v.removeEventListener("load", s, !1);
						var r, i = "success";
						try {
							if (T) throw "timeout";
							var o = "xml" === f.dataType || O.XMLDocument || e.isXMLDoc(O);
							if (a("isXml=" + o), !o && window.opera && (null === O.body || !O.body.innerHTML) && --C) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
							var u = O.body ? O.body : O.documentElement;
							x.responseText = u ? u.innerHTML : null, x.responseXML = O.XMLDocument ? O.XMLDocument : O, o && (f.dataType = "xml"), x.getResponseHeader = function (e) {
								return {
									"content-type": f.dataType
								} [e.toLowerCase()]
							}, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
							var c = (f.dataType || "").toLowerCase(),
								l = /(json|script|text)/.test(c);
							if (l || f.textarea) {
								var p = O.getElementsByTagName("textarea")[0];
								if (p) x.responseText = p.value, x.status = Number(p.getAttribute("status")) || x.status, x.statusText = p.getAttribute("statusText") || x.statusText;
								else if (l) {
									var m = O.getElementsByTagName("pre")[0],
										g = O.getElementsByTagName("body")[0];
									m ? x.responseText = m.textContent ? m.textContent : m.innerText : g && (x.responseText = g.textContent ? g.textContent : g.innerText)
								}
							} else "xml" === c && !x.responseXML && x.responseText && (x.responseXML = q(x.responseText));
							try {
								M = N(x, c, f)
							} catch (e) {
								i = "parsererror", x.error = r = e || i
							}
						} catch (e) {
							a("error caught: ", e), i = "error", x.error = r = e || i
						}
						x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (f.success && f.success.call(f.context, M, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, f])) : i && (void 0 === r && (r = x.statusText), f.error && f.error.call(f.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, f, r])), d && e.event.trigger("ajaxComplete", [x, f]), d && !--e.active && e.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, x, i), X = !0, f.timeout && clearTimeout(j), setTimeout(function () {
							f.iframeTarget ? h.attr("src", f.iframeSrc) : h.remove(), x.responseXML = null
						}, 100)
					}
				}
			}
			var u, c, f, d, m, h, v, x, y, b, T, j, w = p[0],
				S = e.Deferred();
			if (S.abort = function (e) {
					x.abort(e)
				}, r)
				for (c = 0; c < g.length; c++) u = e(g[c]), o ? u.prop("disabled", !1) : u.removeAttr("disabled");
			(f = e.extend(!0, {}, e.ajaxSettings, t)).context = f.context || f, m = "jqFormIO" + (new Date).getTime();
			var k = w.ownerDocument,
				D = p.closest("body");
			if (f.iframeTarget ? (b = (h = e(f.iframeTarget, k)).attr2("name")) ? m = b : h.attr2("name", m) : (h = e('<iframe name="' + m + '" src="' + f.iframeSrc + '" />', k)).css({
					position: "absolute",
					top: "-1000px",
					left: "-1000px"
				}), v = h[0], x = {
					aborted: 0,
					responseText: null,
					responseXML: null,
					status: 0,
					statusText: "n/a",
					getAllResponseHeaders: function () {},
					getResponseHeader: function () {},
					setRequestHeader: function () {},
					abort: function (t) {
						var r = "timeout" === t ? "timeout" : "aborted";
						a("aborting upload... " + r), this.aborted = 1;
						try {
							v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
						} catch (e) {}
						h.attr("src", f.iframeSrc), x.error = r, f.error && f.error.call(f.context, x, r, t), d && e.event.trigger("ajaxError", [x, f, r]), f.complete && f.complete.call(f.context, x, r)
					}
				}, (d = f.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, f]), f.beforeSend && !1 === f.beforeSend.call(f.context, x, f)) return f.global && e.active--, S.reject(), S;
			if (x.aborted) return S.reject(), S;
			(y = w.clk) && (b = y.name) && !y.disabled && (f.extraData = f.extraData || {}, f.extraData[b] = y.value, "image" === y.type && (f.extraData[b + ".x"] = w.clk_x, f.extraData[b + ".y"] = w.clk_y));
			var A = 1,
				L = 2,
				F = e("meta[name=csrf-token]").attr("content"),
				E = e("meta[name=csrf-param]").attr("content");
			E && F && (f.extraData = f.extraData || {}, f.extraData[E] = F), f.forceSync ? i() : setTimeout(i, 10);
			var M, O, X, C = 50,
				q = e.parseXML || function (e, t) {
					return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null
				},
				_ = e.parseJSON || function (e) {
					return window.eval("(" + e + ")")
				},
				N = function (t, r, a) {
					var n = t.getResponseHeader("content-type") || "",
						i = ("xml" === r || !r) && n.indexOf("xml") >= 0,
						o = i ? t.responseXML : t.responseText;
					return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && (("json" === r || !r) && n.indexOf("json") >= 0 ? o = _(o) : ("script" === r || !r) && n.indexOf("javascript") >= 0 && e.globalEval(o)), o
				};
			return S
		}
		if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
		var l, f, d, p = this;
		"function" == typeof t ? t = {
			success: t
		} : "string" == typeof t || !1 === t && arguments.length > 0 ? (t = {
			url: t,
			data: r,
			dataType: n
		}, "function" == typeof s && (t.success = s)) : void 0 === t && (t = {}), l = t.method || t.type || this.attr2("method"), (d = (d = "string" == typeof (f = t.url || this.attr2("action")) ? e.trim(f) : "") || window.location.href || "") && (d = (d.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
			url: d,
			success: e.ajaxSettings.success,
			type: l || e.ajaxSettings.type,
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
		}, t);
		var m = {};
		if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
		if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
		var h = t.traditional;
		void 0 === h && (h = e.ajaxSettings.traditional);
		var v, g = [],
			x = this.formToArray(t.semantic, g, t.filtering);
		if (t.data) {
			var y = e.isFunction(t.data) ? t.data(x) : t.data;
			t.extraData = y, v = e.param(y, h)
		}
		if (t.beforeSubmit && !1 === t.beforeSubmit(x, this, t)) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
		if (this.trigger("form-submit-validate", [x, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
		var b = e.param(x, h);
		v && (b = b ? b + "&" + v : v), "GET" === t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + b, t.data = null) : t.data = b;
		var T = [];
		if (t.resetForm && T.push(function () {
				p.resetForm()
			}), t.clearForm && T.push(function () {
				p.clearForm(t.includeHidden)
			}), !t.dataType && t.target) {
			var j = t.success || function () {};
			T.push(function (r, a, n) {
				var i = arguments,
					o = t.replaceTarget ? "replaceWith" : "html";
				e(t.target)[o](r).each(function () {
					j.apply(this, i)
				})
			})
		} else t.success && (e.isArray(t.success) ? e.merge(T, t.success) : T.push(t.success));
		if (t.success = function (e, r, a) {
				for (var n = t.context || this, i = 0, o = T.length; i < o; i++) T[i].apply(n, [e, r, a || p, p])
			}, t.error) {
			var w = t.error;
			t.error = function (e, r, a) {
				var n = t.context || this;
				w.apply(n, [e, r, a, p])
			}
		}
		if (t.complete) {
			var S = t.complete;
			t.complete = function (e, r) {
				var a = t.context || this;
				S.apply(a, [e, r, p])
			}
		}
		var k = e("input[type=file]:enabled", this).filter(function () {
				return "" !== e(this).val()
			}).length > 0,
			D = "multipart/form-data",
			A = p.attr("enctype") === D || p.attr("encoding") === D,
			L = i.fileapi && i.formdata;
		a("fileAPI :" + L);
		var F, E = (k || A) && !L;
		!1 !== t.iframe && (t.iframe || E) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
			F = c(x)
		}) : F = c(x) : F = (k || A) && L ? function (r) {
			for (var a = new FormData, n = 0; n < r.length; n++) a.append(r[n].name, r[n].value);
			if (t.extraData) {
				var i = u(t.extraData);
				for (n = 0; n < i.length; n++) i[n] && a.append(i[n][0], i[n][1])
			}
			t.data = null;
			var o = e.extend(!0, {}, e.ajaxSettings, t, {
				contentType: !1,
				processData: !1,
				cache: !1,
				type: l || "POST"
			});
			t.uploadProgress && (o.xhr = function () {
				var r = e.ajaxSettings.xhr();
				return r.upload && r.upload.addEventListener("progress", function (e) {
					var r = 0,
						a = e.loaded || e.position,
						n = e.total;
					e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
				}, !1), r
			}), o.data = null;
			var s = o.beforeSend;
			return o.beforeSend = function (e, r) {
				t.formData ? r.data = t.formData : r.data = a, s && s.call(this, e, r)
			}, e.ajax(o)
		}(x) : e.ajax(t), p.removeData("jqxhr").data("jqxhr", F);
		for (var M = 0; M < g.length; M++) g[M] = null;
		return this.trigger("form-submit-notify", [this, t]), this
	}, e.fn.ajaxForm = function (n, i, o, s) {
		if (("string" == typeof n || !1 === n && arguments.length > 0) && (n = {
				url: n,
				data: i,
				dataType: o
			}, "function" == typeof s && (n.success = s)), n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
			var u = {
				s: this.selector,
				c: this.context
			};
			return !e.isReady && u.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
				e(u.s, u.c).ajaxForm(n)
			}), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
		}
		return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().on("submit.form-plugin", n, t).on("click.form-plugin", n, r)
	}, e.fn.ajaxFormUnbind = function () {
		return this.off("submit.form-plugin click.form-plugin")
	}, e.fn.formToArray = function (t, r, a) {
		var n = [];
		if (0 === this.length) return n;
		var o, s = this[0],
			u = this.attr("id"),
			c = t || void 0 === s.elements ? s.getElementsByTagName("*") : s.elements;
		if (c && (c = e.makeArray(c)), u && (t || /(Edge|Trident)\//.test(navigator.userAgent)) && (o = e(':input[form="' + u + '"]').get()).length && (c = (c || []).concat(o)), !c || !c.length) return n;
		e.isFunction(a) && (c = e.map(c, a));
		var l, f, d, p, m, h, v;
		for (l = 0, h = c.length; l < h; l++)
			if (m = c[l], (d = m.name) && !m.disabled)
				if (t && s.clk && "image" === m.type) s.clk === m && (n.push({
					name: d,
					value: e(m).val(),
					type: m.type
				}), n.push({
					name: d + ".x",
					value: s.clk_x
				}, {
					name: d + ".y",
					value: s.clk_y
				}));
				else if ((p = e.fieldValue(m, !0)) && p.constructor === Array)
			for (r && r.push(m), f = 0, v = p.length; f < v; f++) n.push({
				name: d,
				value: p[f]
			});
		else if (i.fileapi && "file" === m.type) {
			r && r.push(m);
			var g = m.files;
			if (g.length)
				for (f = 0; f < g.length; f++) n.push({
					name: d,
					value: g[f],
					type: m.type
				});
			else n.push({
				name: d,
				value: "",
				type: m.type
			})
		} else null !== p && void 0 !== p && (r && r.push(m), n.push({
			name: d,
			value: p,
			type: m.type,
			required: m.required
		}));
		if (!t && s.clk) {
			var x = e(s.clk),
				y = x[0];
			(d = y.name) && !y.disabled && "image" === y.type && (n.push({
				name: d,
				value: x.val()
			}), n.push({
				name: d + ".x",
				value: s.clk_x
			}, {
				name: d + ".y",
				value: s.clk_y
			}))
		}
		return n
	}, e.fn.formSerialize = function (t) {
		return e.param(this.formToArray(t))
	}, e.fn.fieldSerialize = function (t) {
		var r = [];
		return this.each(function () {
			var a = this.name;
			if (a) {
				var n = e.fieldValue(this, t);
				if (n && n.constructor === Array)
					for (var i = 0, o = n.length; i < o; i++) r.push({
						name: a,
						value: n[i]
					});
				else null !== n && void 0 !== n && r.push({
					name: this.name,
					value: n
				})
			}
		}), e.param(r)
	}, e.fn.fieldValue = function (t) {
		for (var r = [], a = 0, n = this.length; a < n; a++) {
			var i = this[a],
				o = e.fieldValue(i, t);
			null === o || void 0 === o || o.constructor === Array && !o.length || (o.constructor === Array ? e.merge(r, o) : r.push(o))
		}
		return r
	}, e.fieldValue = function (t, r) {
		var a = t.name,
			i = t.type,
			o = t.tagName.toLowerCase();
		if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" === i || "button" === i || ("checkbox" === i || "radio" === i) && !t.checked || ("submit" === i || "image" === i) && t.form && t.form.clk !== t || "select" === o && -1 === t.selectedIndex)) return null;
		if ("select" === o) {
			var s = t.selectedIndex;
			if (s < 0) return null;
			for (var u = [], c = t.options, l = "select-one" === i, f = l ? s + 1 : c.length, d = l ? s : 0; d < f; d++) {
				var p = c[d];
				if (p.selected && !p.disabled) {
					var m = p.value;
					if (m || (m = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), l) return m;
					u.push(m)
				}
			}
			return u
		}
		return e(t).val().replace(n, "\r\n")
	}, e.fn.clearForm = function (t) {
		return this.each(function () {
			e("input,select,textarea", this).clearFields(t)
		})
	}, e.fn.clearFields = e.fn.clearInputs = function (t) {
		var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
		return this.each(function () {
			var a = this.type,
				n = this.tagName.toLowerCase();
			r.test(a) || "textarea" === n ? this.value = "" : "checkbox" === a || "radio" === a ? this.checked = !1 : "select" === n ? this.selectedIndex = -1 : "file" === a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
		})
	}, e.fn.resetForm = function () {
		return this.each(function () {
			var t = e(this),
				r = this.tagName.toLowerCase();
			switch (r) {
				case "input":
					this.checked = this.defaultChecked;
				case "textarea":
					return this.value = this.defaultValue, !0;
				case "option":
				case "optgroup":
					var a = t.parents("select");
					return a.length && a[0].multiple ? "option" === r ? this.selected = this.defaultSelected : t.find("option").resetForm() : a.resetForm(), !0;
				case "select":
					return t.find("option").each(function (e) {
						if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1
					}), !0;
				case "label":
					var n = e(t.attr("for")),
						i = t.find("input,select,textarea");
					return n[0] && i.unshift(n[0]), i.resetForm(), !0;
				case "form":
					return ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset(), !0;
				default:
					return t.find("form,input,label,select,textarea").resetForm(), !0
			}
		})
	}, e.fn.enable = function (e) {
		return void 0 === e && (e = !0), this.each(function () {
			this.disabled = !e
		})
	}, e.fn.selected = function (t) {
		return void 0 === t && (t = !0), this.each(function () {
			var r = this.type;
			if ("checkbox" === r || "radio" === r) this.checked = t;
			else if ("option" === this.tagName.toLowerCase()) {
				var a = e(this).parent("select");
				t && a[0] && "select-one" === a[0].type && a.find("option").selected(!1), this.selected = t
			}
		})
	}, e.fn.ajaxSubmit.debug = !1
});
//# sourceMappingURL=jquery.form.min.js.map


/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

;
(function (window, $, undefined) {
	;
	(function () {
		var VERSION = '2.2.3',
			pluginName = 'datepicker',
			autoInitSelector = '.datepicker-here',
			$body, $datepickersContainer,
			containerBuilt = false,
			baseTemplate = '' +
			'<div class="datepicker">' +
			'<i class="datepicker--pointer"></i>' +
			'<nav class="datepicker--nav"></nav>' +
			'<div class="datepicker--content"></div>' +
			'</div>',
			defaults = {
				classes: '',
				inline: false,
				language: 'ru',
				startDate: new Date(),
				firstDay: '',
				weekends: [6, 0],
				dateFormat: '',
				altField: '',
				altFieldDateFormat: '@',
				toggleSelected: true,
				keyboardNav: true,

				position: 'bottom left',
				offset: 12,

				view: 'days',
				minView: 'days',

				showOtherMonths: true,
				selectOtherMonths: true,
				moveToOtherMonthsOnSelect: true,

				showOtherYears: true,
				selectOtherYears: true,
				moveToOtherYearsOnSelect: true,

				minDate: '',
				maxDate: '',
				disableNavWhenOutOfRange: true,

				multipleDates: false, // Boolean or Number
				multipleDatesSeparator: ',',
				range: false,

				todayButton: false,
				clearButton: false,

				showEvent: 'focus',
				autoClose: false,

				// navigation
				monthsField: 'monthsShort',
				prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
				nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
				navTitles: {
					days: 'MM, <i>yyyy</i>',
					months: 'yyyy',
					years: 'yyyy1 - yyyy2'
				},

				// timepicker
				timepicker: false,
				onlyTimepicker: false,
				dateTimeSeparator: ' ',
				timeFormat: '',
				minHours: 0,
				maxHours: 24,
				minMinutes: 0,
				maxMinutes: 59,
				hoursStep: 1,
				minutesStep: 1,

				// events
				onSelect: '',
				onShow: '',
				onHide: '',
				onChangeMonth: '',
				onChangeYear: '',
				onChangeDecade: '',
				onChangeView: '',
				onRenderCell: ''
			},
			hotKeys = {
				'ctrlRight': [17, 39],
				'ctrlUp': [17, 38],
				'ctrlLeft': [17, 37],
				'ctrlDown': [17, 40],
				'shiftRight': [16, 39],
				'shiftUp': [16, 38],
				'shiftLeft': [16, 37],
				'shiftDown': [16, 40],
				'altUp': [18, 38],
				'altRight': [18, 39],
				'altLeft': [18, 37],
				'altDown': [18, 40],
				'ctrlShiftUp': [16, 17, 38]
			},
			datepicker;

		var Datepicker = function (el, options) {
			this.el = el;
			this.$el = $(el);

			this.opts = $.extend(true, {}, defaults, options, this.$el.data());

			if ($body == undefined) {
				$body = $('body');
			}

			if (!this.opts.startDate) {
				this.opts.startDate = new Date();
			}

			if (this.el.nodeName == 'INPUT') {
				this.elIsInput = true;
			}

			if (this.opts.altField) {
				this.$altField = typeof this.opts.altField == 'string' ? $(this.opts.altField) : this.opts.altField;
			}

			this.inited = false;
			this.visible = false;
			this.silent = false; // Need to prevent unnecessary rendering

			this.currentDate = this.opts.startDate;
			this.currentView = this.opts.view;
			this._createShortCuts();
			this.selectedDates = [];
			this.views = {};
			this.keys = [];
			this.minRange = '';
			this.maxRange = '';
			this._prevOnSelectValue = '';

			this.init()
		};

		datepicker = Datepicker;

		datepicker.prototype = {
			VERSION: VERSION,
			viewIndexes: ['days', 'months', 'years'],

			init: function () {
				if (!containerBuilt && !this.opts.inline && this.elIsInput) {
					this._buildDatepickersContainer();
				}
				this._buildBaseHtml();
				this._defineLocale(this.opts.language);
				this._syncWithMinMaxDates();

				if (this.elIsInput) {
					if (!this.opts.inline) {
						// Set extra classes for proper transitions
						this._setPositionClasses(this.opts.position);
						this._bindEvents()
					}
					if (this.opts.keyboardNav && !this.opts.onlyTimepicker) {
						this._bindKeyboardEvents();
					}
					this.$datepicker.on('mousedown', this._onMouseDownDatepicker.bind(this));
					this.$datepicker.on('mouseup', this._onMouseUpDatepicker.bind(this));
				}

				if (this.opts.classes) {
					this.$datepicker.addClass(this.opts.classes)
				}

				if (this.opts.timepicker) {
					this.timepicker = new $.fn.datepicker.Timepicker(this, this.opts);
					this._bindTimepickerEvents();
				}

				if (this.opts.onlyTimepicker) {
					this.$datepicker.addClass('-only-timepicker-');
				}

				this.views[this.currentView] = new $.fn.datepicker.Body(this, this.currentView, this.opts);
				this.views[this.currentView].show();
				this.nav = new $.fn.datepicker.Navigation(this, this.opts);
				this.view = this.currentView;

				this.$el.on('clickCell.adp', this._onClickCell.bind(this));
				this.$datepicker.on('mouseenter', '.datepicker--cell', this._onMouseEnterCell.bind(this));
				this.$datepicker.on('mouseleave', '.datepicker--cell', this._onMouseLeaveCell.bind(this));

				this.inited = true;
			},

			_createShortCuts: function () {
				this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-8639999913600000);
				this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(8639999913600000);
			},

			_bindEvents: function () {
				this.$el.on(this.opts.showEvent + '.adp', this._onShowEvent.bind(this));
				this.$el.on('mouseup.adp', this._onMouseUpEl.bind(this));
				this.$el.on('blur.adp', this._onBlur.bind(this));
				this.$el.on('keyup.adp', this._onKeyUpGeneral.bind(this));
				$(window).on('resize.adp', this._onResize.bind(this));
				$('body').on('mouseup.adp', this._onMouseUpBody.bind(this));
			},

			_bindKeyboardEvents: function () {
				this.$el.on('keydown.adp', this._onKeyDown.bind(this));
				this.$el.on('keyup.adp', this._onKeyUp.bind(this));
				this.$el.on('hotKey.adp', this._onHotKey.bind(this));
			},

			_bindTimepickerEvents: function () {
				this.$el.on('timeChange.adp', this._onTimeChange.bind(this));
			},

			isWeekend: function (day) {
				return this.opts.weekends.indexOf(day) !== -1;
			},

			_defineLocale: function (lang) {
				if (typeof lang == 'string') {
					this.loc = $.fn.datepicker.language[lang];
					if (!this.loc) {
						console.warn('Can\'t find language "' + lang + '" in Datepicker.language, will use "ru" instead');
						this.loc = $.extend(true, {}, $.fn.datepicker.language.ru)
					}

					this.loc = $.extend(true, {}, $.fn.datepicker.language.ru, $.fn.datepicker.language[lang])
				} else {
					this.loc = $.extend(true, {}, $.fn.datepicker.language.ru, lang)
				}

				if (this.opts.dateFormat) {
					this.loc.dateFormat = this.opts.dateFormat
				}

				if (this.opts.timeFormat) {
					this.loc.timeFormat = this.opts.timeFormat
				}

				if (this.opts.firstDay !== '') {
					this.loc.firstDay = this.opts.firstDay
				}

				if (this.opts.timepicker) {
					this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator);
				}

				if (this.opts.onlyTimepicker) {
					this.loc.dateFormat = this.loc.timeFormat;
				}

				var boundary = this._getWordBoundaryRegExp;
				if (this.loc.timeFormat.match(boundary('aa')) ||
					this.loc.timeFormat.match(boundary('AA'))
				) {
					this.ampm = true;
				}
			},

			_buildDatepickersContainer: function () {
				containerBuilt = true;
				$body.append('<div class="datepickers-container" id="datepickers-container"></div>');
				$datepickersContainer = $('#datepickers-container');
			},

			_buildBaseHtml: function () {
				var $appendTarget,
					$inline = $('<div class="datepicker-inline">');

				if (this.el.nodeName == 'INPUT') {
					if (!this.opts.inline) {
						$appendTarget = $datepickersContainer;
					} else {
						$appendTarget = $inline.insertAfter(this.$el)
					}
				} else {
					$appendTarget = $inline.appendTo(this.$el)
				}

				this.$datepicker = $(baseTemplate).appendTo($appendTarget);
				this.$content = $('.datepicker--content', this.$datepicker);
				this.$nav = $('.datepicker--nav', this.$datepicker);
			},

			_triggerOnChange: function () {
				if (!this.selectedDates.length) {
					// Prevent from triggering multiple onSelect callback with same argument (empty string) in IE10-11
					if (this._prevOnSelectValue === '') return;
					this._prevOnSelectValue = '';
					return this.opts.onSelect('', '', this);
				}

				var selectedDates = this.selectedDates,
					parsedSelected = datepicker.getParsedDate(selectedDates[0]),
					formattedDates,
					_this = this,
					dates = new Date(
						parsedSelected.year,
						parsedSelected.month,
						parsedSelected.date,
						parsedSelected.hours,
						parsedSelected.minutes
					);

				formattedDates = selectedDates.map(function (date) {
					return _this.formatDate(_this.loc.dateFormat, date)
				}).join(this.opts.multipleDatesSeparator);

				// Create new dates array, to separate it from original selectedDates
				if (this.opts.multipleDates || this.opts.range) {
					dates = selectedDates.map(function (date) {
						var parsedDate = datepicker.getParsedDate(date);
						return new Date(
							parsedDate.year,
							parsedDate.month,
							parsedDate.date,
							parsedDate.hours,
							parsedDate.minutes
						);
					})
				}

				this._prevOnSelectValue = formattedDates;
				this.opts.onSelect(formattedDates, dates, this);
			},

			next: function () {
				var d = this.parsedDate,
					o = this.opts;
				switch (this.view) {
					case 'days':
						this.date = new Date(d.year, d.month + 1, 1);
						if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
						break;
					case 'months':
						this.date = new Date(d.year + 1, d.month, 1);
						if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
						break;
					case 'years':
						this.date = new Date(d.year + 10, 0, 1);
						if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
						break;
				}
			},

			prev: function () {
				var d = this.parsedDate,
					o = this.opts;
				switch (this.view) {
					case 'days':
						this.date = new Date(d.year, d.month - 1, 1);
						if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
						break;
					case 'months':
						this.date = new Date(d.year - 1, d.month, 1);
						if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
						break;
					case 'years':
						this.date = new Date(d.year - 10, 0, 1);
						if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
						break;
				}
			},

			formatDate: function (string, date) {
				date = date || this.date;
				var result = string,
					boundary = this._getWordBoundaryRegExp,
					locale = this.loc,
					leadingZero = datepicker.getLeadingZeroNum,
					decade = datepicker.getDecade(date),
					d = datepicker.getParsedDate(date),
					fullHours = d.fullHours,
					hours = d.hours,
					ampm = string.match(boundary('aa')) || string.match(boundary('AA')),
					dayPeriod = 'am',
					replacer = this._replacer,
					validHours;

				if (this.opts.timepicker && this.timepicker && ampm) {
					validHours = this.timepicker._getValidHoursFromDate(date, ampm);
					fullHours = leadingZero(validHours.hours);
					hours = validHours.hours;
					dayPeriod = validHours.dayPeriod;
				}

				switch (true) {
					case /@/.test(result):
						result = result.replace(/@/, date.getTime());
					case /aa/.test(result):
						result = replacer(result, boundary('aa'), dayPeriod);
					case /AA/.test(result):
						result = replacer(result, boundary('AA'), dayPeriod.toUpperCase());
					case /dd/.test(result):
						result = replacer(result, boundary('dd'), d.fullDate);
					case /d/.test(result):
						result = replacer(result, boundary('d'), d.date);
					case /DD/.test(result):
						result = replacer(result, boundary('DD'), locale.days[d.day]);
					case /D/.test(result):
						result = replacer(result, boundary('D'), locale.daysShort[d.day]);
					case /mm/.test(result):
						result = replacer(result, boundary('mm'), d.fullMonth);
					case /m/.test(result):
						result = replacer(result, boundary('m'), d.month + 1);
					case /MM/.test(result):
						result = replacer(result, boundary('MM'), this.loc.months[d.month]);
					case /M/.test(result):
						result = replacer(result, boundary('M'), locale.monthsShort[d.month]);
					case /ii/.test(result):
						result = replacer(result, boundary('ii'), d.fullMinutes);
					case /i/.test(result):
						result = replacer(result, boundary('i'), d.minutes);
					case /hh/.test(result):
						result = replacer(result, boundary('hh'), fullHours);
					case /h/.test(result):
						result = replacer(result, boundary('h'), hours);
					case /yyyy/.test(result):
						result = replacer(result, boundary('yyyy'), d.year);
					case /yyyy1/.test(result):
						result = replacer(result, boundary('yyyy1'), decade[0]);
					case /yyyy2/.test(result):
						result = replacer(result, boundary('yyyy2'), decade[1]);
					case /yy/.test(result):
						result = replacer(result, boundary('yy'), d.year.toString().slice(-2));
				}

				return result;
			},

			_replacer: function (str, reg, data) {
				return str.replace(reg, function (match, p1, p2, p3) {
					return p1 + data + p3;
				})
			},

			_getWordBoundaryRegExp: function (sign) {
				var symbols = '\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;';

				return new RegExp('(^|>|' + symbols + ')(' + sign + ')($|<|' + symbols + ')', 'g');
			},


			selectDate: function (date) {
				var _this = this,
					opts = _this.opts,
					d = _this.parsedDate,
					selectedDates = _this.selectedDates,
					len = selectedDates.length,
					newDate = '';

				if (Array.isArray(date)) {
					date.forEach(function (d) {
						_this.selectDate(d)
					});
					return;
				}

				if (!(date instanceof Date)) return;

				this.lastSelectedDate = date;

				// Set new time values from Date
				if (this.timepicker) {
					this.timepicker._setTime(date);
				}

				// On this step timepicker will set valid values in it's instance
				_this._trigger('selectDate', date);

				// Set correct time values after timepicker's validation
				// Prevent from setting hours or minutes which values are lesser then `min` value or
				// greater then `max` value
				if (this.timepicker) {
					date.setHours(this.timepicker.hours);
					date.setMinutes(this.timepicker.minutes)
				}

				if (_this.view == 'days') {
					if (date.getMonth() != d.month && opts.moveToOtherMonthsOnSelect) {
						newDate = new Date(date.getFullYear(), date.getMonth(), 1);
					}
				}

				if (_this.view == 'years') {
					if (date.getFullYear() != d.year && opts.moveToOtherYearsOnSelect) {
						newDate = new Date(date.getFullYear(), 0, 1);
					}
				}

				if (newDate) {
					_this.silent = true;
					_this.date = newDate;
					_this.silent = false;
					_this.nav._render()
				}

				if (opts.multipleDates && !opts.range) { // Set priority to range functionality
					if (len === opts.multipleDates) return;
					if (!_this._isSelected(date)) {
						_this.selectedDates.push(date);
					}
				} else if (opts.range) {
					if (len == 2) {
						_this.selectedDates = [date];
						_this.minRange = date;
						_this.maxRange = '';
					} else if (len == 1) {
						_this.selectedDates.push(date);
						if (!_this.maxRange) {
							_this.maxRange = date;
						} else {
							_this.minRange = date;
						}
						// Swap dates if they were selected via dp.selectDate() and second date was smaller then first
						if (datepicker.bigger(_this.maxRange, _this.minRange)) {
							_this.maxRange = _this.minRange;
							_this.minRange = date;
						}
						_this.selectedDates = [_this.minRange, _this.maxRange]

					} else {
						_this.selectedDates = [date];
						_this.minRange = date;
					}
				} else {
					_this.selectedDates = [date];
				}

				_this._setInputValue();

				if (opts.onSelect) {
					_this._triggerOnChange();
				}

				if (opts.autoClose && !this.timepickerIsActive) {
					if (!opts.multipleDates && !opts.range) {
						_this.hide();
					} else if (opts.range && _this.selectedDates.length == 2) {
						_this.hide();
					}
				}

				_this.views[this.currentView]._render()
			},

			removeDate: function (date) {
				var selected = this.selectedDates,
					_this = this;

				if (!(date instanceof Date)) return;

				return selected.some(function (curDate, i) {
					if (datepicker.isSame(curDate, date)) {
						selected.splice(i, 1);

						if (!_this.selectedDates.length) {
							_this.minRange = '';
							_this.maxRange = '';
							_this.lastSelectedDate = '';
						} else {
							_this.lastSelectedDate = _this.selectedDates[_this.selectedDates.length - 1];
						}

						_this.views[_this.currentView]._render();
						_this._setInputValue();

						if (_this.opts.onSelect) {
							_this._triggerOnChange();
						}

						return true
					}
				})
			},

			today: function () {
				this.silent = true;
				this.view = this.opts.minView;
				this.silent = false;
				this.date = new Date();

				if (this.opts.todayButton instanceof Date) {
					this.selectDate(this.opts.todayButton)
				}
			},

			clear: function () {
				this.selectedDates = [];
				this.minRange = '';
				this.maxRange = '';
				this.views[this.currentView]._render();
				this._setInputValue();
				if (this.opts.onSelect) {
					this._triggerOnChange()
				}
			},

			/**
			 * Updates datepicker options
			 * @param {String|Object} param - parameter's name to update. If object then it will extend current options
			 * @param {String|Number|Object} [value] - new param value
			 */
			update: function (param, value) {
				var len = arguments.length,
					lastSelectedDate = this.lastSelectedDate;

				if (len == 2) {
					this.opts[param] = value;
				} else if (len == 1 && typeof param == 'object') {
					this.opts = $.extend(true, this.opts, param)
				}

				this._createShortCuts();
				this._syncWithMinMaxDates();
				this._defineLocale(this.opts.language);
				this.nav._addButtonsIfNeed();
				if (!this.opts.onlyTimepicker) this.nav._render();
				this.views[this.currentView]._render();

				if (this.elIsInput && !this.opts.inline) {
					this._setPositionClasses(this.opts.position);
					if (this.visible) {
						this.setPosition(this.opts.position)
					}
				}

				if (this.opts.classes) {
					this.$datepicker.addClass(this.opts.classes)
				}

				if (this.opts.onlyTimepicker) {
					this.$datepicker.addClass('-only-timepicker-');
				}

				if (this.opts.timepicker) {
					if (lastSelectedDate) this.timepicker._handleDate(lastSelectedDate);
					this.timepicker._updateRanges();
					this.timepicker._updateCurrentTime();
					// Change hours and minutes if it's values have been changed through min/max hours/minutes
					if (lastSelectedDate) {
						lastSelectedDate.setHours(this.timepicker.hours);
						lastSelectedDate.setMinutes(this.timepicker.minutes);
					}
				}

				this._setInputValue();

				return this;
			},

			_syncWithMinMaxDates: function () {
				var curTime = this.date.getTime();
				this.silent = true;
				if (this.minTime > curTime) {
					this.date = this.minDate;
				}

				if (this.maxTime < curTime) {
					this.date = this.maxDate;
				}
				this.silent = false;
			},

			_isSelected: function (checkDate, cellType) {
				var res = false;
				this.selectedDates.some(function (date) {
					if (datepicker.isSame(date, checkDate, cellType)) {
						res = date;
						return true;
					}
				});
				return res;
			},

			_setInputValue: function () {
				var _this = this,
					opts = _this.opts,
					format = _this.loc.dateFormat,
					altFormat = opts.altFieldDateFormat,
					value = _this.selectedDates.map(function (date) {
						return _this.formatDate(format, date)
					}),
					altValues;

				if (opts.altField && _this.$altField.length) {
					altValues = this.selectedDates.map(function (date) {
						return _this.formatDate(altFormat, date)
					});
					altValues = altValues.join(this.opts.multipleDatesSeparator);
					this.$altField.val(altValues);
				}

				value = value.join(this.opts.multipleDatesSeparator);

				this.$el.val(value)
			},

			/**
			 * Check if date is between minDate and maxDate
			 * @param date {object} - date object
			 * @param type {string} - cell type
			 * @returns {boolean}
			 * @private
			 */
			_isInRange: function (date, type) {
				var time = date.getTime(),
					d = datepicker.getParsedDate(date),
					min = datepicker.getParsedDate(this.minDate),
					max = datepicker.getParsedDate(this.maxDate),
					dMinTime = new Date(d.year, d.month, min.date).getTime(),
					dMaxTime = new Date(d.year, d.month, max.date).getTime(),
					types = {
						day: time >= this.minTime && time <= this.maxTime,
						month: dMinTime >= this.minTime && dMaxTime <= this.maxTime,
						year: d.year >= min.year && d.year <= max.year
					};
				return type ? types[type] : types.day
			},

			_getDimensions: function ($el) {
				var offset = $el.offset();

				return {
					width: $el.outerWidth(),
					height: $el.outerHeight(),
					left: offset.left,
					top: offset.top
				}
			},

			_getDateFromCell: function (cell) {
				var curDate = this.parsedDate,
					year = cell.data('year') || curDate.year,
					month = cell.data('month') == undefined ? curDate.month : cell.data('month'),
					date = cell.data('date') || 1;

				return new Date(year, month, date);
			},

			_setPositionClasses: function (pos) {
				pos = pos.split(' ');
				var main = pos[0],
					sec = pos[1],
					classes = 'datepicker -' + main + '-' + sec + '- -from-' + main + '-';

				if (this.visible) classes += ' active';

				this.$datepicker
					.removeAttr('class')
					.addClass(classes);
			},

			setPosition: function (position) {
				position = position || this.opts.position;

				var dims = this._getDimensions(this.$el),
					selfDims = this._getDimensions(this.$datepicker),
					pos = position.split(' '),
					top, left,
					offset = this.opts.offset,
					main = pos[0],
					secondary = pos[1];

				switch (main) {
					case 'top':
						top = dims.top - selfDims.height - offset;
						break;
					case 'right':
						left = dims.left + dims.width + offset;
						break;
					case 'bottom':
						top = dims.top + dims.height + offset;
						break;
					case 'left':
						left = dims.left - selfDims.width - offset;
						break;
				}

				switch (secondary) {
					case 'top':
						top = dims.top;
						break;
					case 'right':
						left = dims.left + dims.width - selfDims.width;
						break;
					case 'bottom':
						top = dims.top + dims.height - selfDims.height;
						break;
					case 'left':
						left = dims.left;
						break;
					case 'center':
						if (/left|right/.test(main)) {
							top = dims.top + dims.height / 2 - selfDims.height / 2;
						} else {
							left = dims.left + dims.width / 2 - selfDims.width / 2;
						}
				}

				this.$datepicker
					.css({
						left: left,
						top: top
					})
			},

			show: function () {
				var onShow = this.opts.onShow;

				this.setPosition(this.opts.position);
				this.$datepicker.addClass('active');
				this.visible = true;

				if (onShow) {
					this._bindVisionEvents(onShow)
				}
			},

			hide: function () {
				var onHide = this.opts.onHide;

				this.$datepicker
					.removeClass('active')
					.css({
						left: '-100000px'
					});

				this.focused = '';
				this.keys = [];

				this.inFocus = false;
				this.visible = false;
				this.$el.blur();

				if (onHide) {
					this._bindVisionEvents(onHide)
				}
			},

			down: function (date) {
				this._changeView(date, 'down');
			},

			up: function (date) {
				this._changeView(date, 'up');
			},

			_bindVisionEvents: function (event) {
				this.$datepicker.off('transitionend.dp');
				event(this, false);
				this.$datepicker.one('transitionend.dp', event.bind(this, this, true))
			},

			_changeView: function (date, dir) {
				date = date || this.focused || this.date;

				var nextView = dir == 'up' ? this.viewIndex + 1 : this.viewIndex - 1;
				if (nextView > 2) nextView = 2;
				if (nextView < 0) nextView = 0;

				this.silent = true;
				this.date = new Date(date.getFullYear(), date.getMonth(), 1);
				this.silent = false;
				this.view = this.viewIndexes[nextView];

			},

			_handleHotKey: function (key) {
				var date = datepicker.getParsedDate(this._getFocusedDate()),
					focusedParsed,
					o = this.opts,
					newDate,
					totalDaysInNextMonth,
					monthChanged = false,
					yearChanged = false,
					decadeChanged = false,
					y = date.year,
					m = date.month,
					d = date.date;

				switch (key) {
					case 'ctrlRight':
					case 'ctrlUp':
						m += 1;
						monthChanged = true;
						break;
					case 'ctrlLeft':
					case 'ctrlDown':
						m -= 1;
						monthChanged = true;
						break;
					case 'shiftRight':
					case 'shiftUp':
						yearChanged = true;
						y += 1;
						break;
					case 'shiftLeft':
					case 'shiftDown':
						yearChanged = true;
						y -= 1;
						break;
					case 'altRight':
					case 'altUp':
						decadeChanged = true;
						y += 10;
						break;
					case 'altLeft':
					case 'altDown':
						decadeChanged = true;
						y -= 10;
						break;
					case 'ctrlShiftUp':
						this.up();
						break;
				}

				totalDaysInNextMonth = datepicker.getDaysCount(new Date(y, m));
				newDate = new Date(y, m, d);

				// If next month has less days than current, set date to total days in that month
				if (totalDaysInNextMonth < d) d = totalDaysInNextMonth;

				// Check if newDate is in valid range
				if (newDate.getTime() < this.minTime) {
					newDate = this.minDate;
				} else if (newDate.getTime() > this.maxTime) {
					newDate = this.maxDate;
				}

				this.focused = newDate;

				focusedParsed = datepicker.getParsedDate(newDate);
				if (monthChanged && o.onChangeMonth) {
					o.onChangeMonth(focusedParsed.month, focusedParsed.year)
				}
				if (yearChanged && o.onChangeYear) {
					o.onChangeYear(focusedParsed.year)
				}
				if (decadeChanged && o.onChangeDecade) {
					o.onChangeDecade(this.curDecade)
				}
			},

			_registerKey: function (key) {
				var exists = this.keys.some(function (curKey) {
					return curKey == key;
				});

				if (!exists) {
					this.keys.push(key)
				}
			},

			_unRegisterKey: function (key) {
				var index = this.keys.indexOf(key);

				this.keys.splice(index, 1);
			},

			_isHotKeyPressed: function () {
				var currentHotKey,
					found = false,
					_this = this,
					pressedKeys = this.keys.sort();

				for (var hotKey in hotKeys) {
					currentHotKey = hotKeys[hotKey];
					if (pressedKeys.length != currentHotKey.length) continue;

					if (currentHotKey.every(function (key, i) {
							return key == pressedKeys[i]
						})) {
						_this._trigger('hotKey', hotKey);
						found = true;
					}
				}

				return found;
			},

			_trigger: function (event, args) {
				this.$el.trigger(event, args)
			},

			_focusNextCell: function (keyCode, type) {
				type = type || this.cellType;

				var date = datepicker.getParsedDate(this._getFocusedDate()),
					y = date.year,
					m = date.month,
					d = date.date;

				if (this._isHotKeyPressed()) {
					return;
				}

				switch (keyCode) {
					case 37: // left
						type == 'day' ? (d -= 1) : '';
						type == 'month' ? (m -= 1) : '';
						type == 'year' ? (y -= 1) : '';
						break;
					case 38: // up
						type == 'day' ? (d -= 7) : '';
						type == 'month' ? (m -= 3) : '';
						type == 'year' ? (y -= 4) : '';
						break;
					case 39: // right
						type == 'day' ? (d += 1) : '';
						type == 'month' ? (m += 1) : '';
						type == 'year' ? (y += 1) : '';
						break;
					case 40: // down
						type == 'day' ? (d += 7) : '';
						type == 'month' ? (m += 3) : '';
						type == 'year' ? (y += 4) : '';
						break;
				}

				var nd = new Date(y, m, d);
				if (nd.getTime() < this.minTime) {
					nd = this.minDate;
				} else if (nd.getTime() > this.maxTime) {
					nd = this.maxDate;
				}

				this.focused = nd;

			},

			_getFocusedDate: function () {
				var focused = this.focused || this.selectedDates[this.selectedDates.length - 1],
					d = this.parsedDate;

				if (!focused) {
					switch (this.view) {
						case 'days':
							focused = new Date(d.year, d.month, new Date().getDate());
							break;
						case 'months':
							focused = new Date(d.year, d.month, 1);
							break;
						case 'years':
							focused = new Date(d.year, 0, 1);
							break;
					}
				}

				return focused;
			},

			_getCell: function (date, type) {
				type = type || this.cellType;

				var d = datepicker.getParsedDate(date),
					selector = '.datepicker--cell[data-year="' + d.year + '"]',
					$cell;

				switch (type) {
					case 'month':
						selector = '[data-month="' + d.month + '"]';
						break;
					case 'day':
						selector += '[data-month="' + d.month + '"][data-date="' + d.date + '"]';
						break;
				}
				$cell = this.views[this.currentView].$el.find(selector);

				return $cell.length ? $cell : $('');
			},

			destroy: function () {
				var _this = this;
				_this.$el
					.off('.adp')
					.data('datepicker', '');

				_this.selectedDates = [];
				_this.focused = '';
				_this.views = {};
				_this.keys = [];
				_this.minRange = '';
				_this.maxRange = '';

				if (_this.opts.inline || !_this.elIsInput) {
					_this.$datepicker.closest('.datepicker-inline').remove();
				} else {
					_this.$datepicker.remove();
				}
			},

			_handleAlreadySelectedDates: function (alreadySelected, selectedDate) {
				if (this.opts.range) {
					if (!this.opts.toggleSelected) {
						// Add possibility to select same date when range is true
						if (this.selectedDates.length != 2) {
							this._trigger('clickCell', selectedDate);
						}
					} else {
						this.removeDate(selectedDate);
					}
				} else if (this.opts.toggleSelected) {
					this.removeDate(selectedDate);
				}

				// Change last selected date to be able to change time when clicking on this cell
				if (!this.opts.toggleSelected) {
					this.lastSelectedDate = alreadySelected;
					if (this.opts.timepicker) {
						this.timepicker._setTime(alreadySelected);
						this.timepicker.update();
					}
				}
			},

			_onShowEvent: function (e) {
				if (!this.visible) {
					this.show();
				}
			},

			_onBlur: function () {
				if (!this.inFocus && this.visible) {
					this.hide();
				}
			},

			_onMouseDownDatepicker: function (e) {
				this.inFocus = true;
			},

			_onMouseUpDatepicker: function (e) {
				this.inFocus = false;
				e.originalEvent.inFocus = true;
				if (!e.originalEvent.timepickerFocus) this.$el.focus();
			},

			_onKeyUpGeneral: function (e) {
				var val = this.$el.val();

				if (!val) {
					this.clear();
				}
			},

			_onResize: function () {
				if (this.visible) {
					this.setPosition();
				}
			},

			_onMouseUpBody: function (e) {
				if (e.originalEvent.inFocus) return;

				if (this.visible && !this.inFocus) {
					this.hide();
				}
			},

			_onMouseUpEl: function (e) {
				e.originalEvent.inFocus = true;
				setTimeout(this._onKeyUpGeneral.bind(this), 4);
			},

			_onKeyDown: function (e) {
				var code = e.which;
				this._registerKey(code);

				// Arrows
				if (code >= 37 && code <= 40) {
					e.preventDefault();
					this._focusNextCell(code);
				}

				// Enter
				if (code == 13) {
					if (this.focused) {
						if (this._getCell(this.focused).hasClass('-disabled-')) return;
						if (this.view != this.opts.minView) {
							this.down()
						} else {
							var alreadySelected = this._isSelected(this.focused, this.cellType);

							if (!alreadySelected) {
								if (this.timepicker) {
									this.focused.setHours(this.timepicker.hours);
									this.focused.setMinutes(this.timepicker.minutes);
								}
								this.selectDate(this.focused);
								return;
							}
							this._handleAlreadySelectedDates(alreadySelected, this.focused)
						}
					}
				}

				// Esc
				if (code == 27) {
					this.hide();
				}
			},

			_onKeyUp: function (e) {
				var code = e.which;
				this._unRegisterKey(code);
			},

			_onHotKey: function (e, hotKey) {
				this._handleHotKey(hotKey);
			},

			_onMouseEnterCell: function (e) {
				var $cell = $(e.target).closest('.datepicker--cell'),
					date = this._getDateFromCell($cell);

				// Prevent from unnecessary rendering and setting new currentDate
				this.silent = true;

				if (this.focused) {
					this.focused = ''
				}

				$cell.addClass('-focus-');

				this.focused = date;
				this.silent = false;

				if (this.opts.range && this.selectedDates.length == 1) {
					this.minRange = this.selectedDates[0];
					this.maxRange = '';
					if (datepicker.less(this.minRange, this.focused)) {
						this.maxRange = this.minRange;
						this.minRange = '';
					}
					this.views[this.currentView]._update();
				}
			},

			_onMouseLeaveCell: function (e) {
				var $cell = $(e.target).closest('.datepicker--cell');

				$cell.removeClass('-focus-');

				this.silent = true;
				this.focused = '';
				this.silent = false;
			},

			_onTimeChange: function (e, h, m) {
				var date = new Date(),
					selectedDates = this.selectedDates,
					selected = false;

				if (selectedDates.length) {
					selected = true;
					date = this.lastSelectedDate;
				}

				date.setHours(h);
				date.setMinutes(m);

				if (!selected && !this._getCell(date).hasClass('-disabled-')) {
					this.selectDate(date);
				} else {
					this._setInputValue();
					if (this.opts.onSelect) {
						this._triggerOnChange();
					}
				}
			},

			_onClickCell: function (e, date) {
				if (this.timepicker) {
					date.setHours(this.timepicker.hours);
					date.setMinutes(this.timepicker.minutes);
				}
				this.selectDate(date);
			},

			set focused(val) {
				if (!val && this.focused) {
					var $cell = this._getCell(this.focused);

					if ($cell.length) {
						$cell.removeClass('-focus-')
					}
				}
				this._focused = val;
				if (this.opts.range && this.selectedDates.length == 1) {
					this.minRange = this.selectedDates[0];
					this.maxRange = '';
					if (datepicker.less(this.minRange, this._focused)) {
						this.maxRange = this.minRange;
						this.minRange = '';
					}
				}
				if (this.silent) return;
				this.date = val;
			},

			get focused() {
				return this._focused;
			},

			get parsedDate() {
				return datepicker.getParsedDate(this.date);
			},

			set date(val) {
				if (!(val instanceof Date)) return;

				this.currentDate = val;

				if (this.inited && !this.silent) {
					this.views[this.view]._render();
					this.nav._render();
					if (this.visible && this.elIsInput) {
						this.setPosition();
					}
				}
				return val;
			},

			get date() {
				return this.currentDate
			},

			set view(val) {
				this.viewIndex = this.viewIndexes.indexOf(val);

				if (this.viewIndex < 0) {
					return;
				}

				this.prevView = this.currentView;
				this.currentView = val;

				if (this.inited) {
					if (!this.views[val]) {
						this.views[val] = new $.fn.datepicker.Body(this, val, this.opts)
					} else {
						this.views[val]._render();
					}

					this.views[this.prevView].hide();
					this.views[val].show();
					this.nav._render();

					if (this.opts.onChangeView) {
						this.opts.onChangeView(val)
					}
					if (this.elIsInput && this.visible) this.setPosition();
				}

				return val
			},

			get view() {
				return this.currentView;
			},

			get cellType() {
				return this.view.substring(0, this.view.length - 1)
			},

			get minTime() {
				var min = datepicker.getParsedDate(this.minDate);
				return new Date(min.year, min.month, min.date).getTime()
			},

			get maxTime() {
				var max = datepicker.getParsedDate(this.maxDate);
				return new Date(max.year, max.month, max.date).getTime()
			},

			get curDecade() {
				return datepicker.getDecade(this.date)
			}
		};

		//  Utils
		// -------------------------------------------------

		datepicker.getDaysCount = function (date) {
			return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
		};

		datepicker.getParsedDate = function (date) {
			return {
				year: date.getFullYear(),
				month: date.getMonth(),
				fullMonth: (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1, // One based
				date: date.getDate(),
				fullDate: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
				day: date.getDay(),
				hours: date.getHours(),
				fullHours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
				minutes: date.getMinutes(),
				fullMinutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
			}
		};

		datepicker.getDecade = function (date) {
			var firstYear = Math.floor(date.getFullYear() / 10) * 10;

			return [firstYear, firstYear + 9];
		};

		datepicker.template = function (str, data) {
			return str.replace(/#\{([\w]+)\}/g, function (source, match) {
				if (data[match] || data[match] === 0) {
					return data[match]
				}
			});
		};

		datepicker.isSame = function (date1, date2, type) {
			if (!date1 || !date2) return false;
			var d1 = datepicker.getParsedDate(date1),
				d2 = datepicker.getParsedDate(date2),
				_type = type ? type : 'day',

				conditions = {
					day: d1.date == d2.date && d1.month == d2.month && d1.year == d2.year,
					month: d1.month == d2.month && d1.year == d2.year,
					year: d1.year == d2.year
				};

			return conditions[_type];
		};

		datepicker.less = function (dateCompareTo, date, type) {
			if (!dateCompareTo || !date) return false;
			return date.getTime() < dateCompareTo.getTime();
		};

		datepicker.bigger = function (dateCompareTo, date, type) {
			if (!dateCompareTo || !date) return false;
			return date.getTime() > dateCompareTo.getTime();
		};

		datepicker.getLeadingZeroNum = function (num) {
			return parseInt(num) < 10 ? '0' + num : num;
		};

		/**
		 * Returns copy of date with hours and minutes equals to 0
		 * @param date {Date}
		 */
		datepicker.resetTime = function (date) {
			if (typeof date != 'object') return;
			date = datepicker.getParsedDate(date);
			return new Date(date.year, date.month, date.date)
		};

		$.fn.datepicker = function (options) {
			return this.each(function () {
				if (!$.data(this, pluginName)) {
					$.data(this, pluginName,
						new Datepicker(this, options));
				} else {
					var _this = $.data(this, pluginName);

					_this.opts = $.extend(true, _this.opts, options);
					_this.update();
				}
			});
		};

		$.fn.datepicker.Constructor = Datepicker;

		$.fn.datepicker.language = {
			ru: {
				days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
				daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
				daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
				monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
				today: 'Сегодня',
				clear: 'Очистить',
				dateFormat: 'dd.mm.yyyy',
				timeFormat: 'hh:ii',
				firstDay: 1
			}
		};

		$(function () {
			$(autoInitSelector).datepicker();
		})

	})();

	;
	(function () {
		var templates = {
				days: '' +
					'<div class="datepicker--days datepicker--body">' +
					'<div class="datepicker--days-names"></div>' +
					'<div class="datepicker--cells datepicker--cells-days"></div>' +
					'</div>',
				months: '' +
					'<div class="datepicker--months datepicker--body">' +
					'<div class="datepicker--cells datepicker--cells-months"></div>' +
					'</div>',
				years: '' +
					'<div class="datepicker--years datepicker--body">' +
					'<div class="datepicker--cells datepicker--cells-years"></div>' +
					'</div>'
			},
			datepicker = $.fn.datepicker,
			dp = datepicker.Constructor;

		datepicker.Body = function (d, type, opts) {
			this.d = d;
			this.type = type;
			this.opts = opts;
			this.$el = $('');

			if (this.opts.onlyTimepicker) return;
			this.init();
		};

		datepicker.Body.prototype = {
			init: function () {
				this._buildBaseHtml();
				this._render();

				this._bindEvents();
			},

			_bindEvents: function () {
				this.$el.on('click', '.datepicker--cell', $.proxy(this._onClickCell, this));
			},

			_buildBaseHtml: function () {
				this.$el = $(templates[this.type]).appendTo(this.d.$content);
				this.$names = $('.datepicker--days-names', this.$el);
				this.$cells = $('.datepicker--cells', this.$el);
			},

			_getDayNamesHtml: function (firstDay, curDay, html, i) {
				curDay = curDay != undefined ? curDay : firstDay;
				html = html ? html : '';
				i = i != undefined ? i : 0;

				if (i > 7) return html;
				if (curDay == 7) return this._getDayNamesHtml(firstDay, 0, html, ++i);

				html += '<div class="datepicker--day-name' + (this.d.isWeekend(curDay) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[curDay] + '</div>';

				return this._getDayNamesHtml(firstDay, ++curDay, html, ++i);
			},

			_getCellContents: function (date, type) {
				var classes = "datepicker--cell datepicker--cell-" + type,
					currentDate = new Date(),
					parent = this.d,
					minRange = dp.resetTime(parent.minRange),
					maxRange = dp.resetTime(parent.maxRange),
					opts = parent.opts,
					d = dp.getParsedDate(date),
					render = {},
					html = d.date;

				switch (type) {
					case 'day':
						if (parent.isWeekend(d.day)) classes += " -weekend-";
						if (d.month != this.d.parsedDate.month) {
							classes += " -other-month-";
							if (!opts.selectOtherMonths) {
								classes += " -disabled-";
							}
							if (!opts.showOtherMonths) html = '';
						}
						break;
					case 'month':
						html = parent.loc[parent.opts.monthsField][d.month];
						break;
					case 'year':
						var decade = parent.curDecade;
						html = d.year;
						if (d.year < decade[0] || d.year > decade[1]) {
							classes += ' -other-decade-';
							if (!opts.selectOtherYears) {
								classes += " -disabled-";
							}
							if (!opts.showOtherYears) html = '';
						}
						break;
				}

				if (opts.onRenderCell) {
					render = opts.onRenderCell(date, type) || {};
					html = render.html ? render.html : html;
					classes += render.classes ? ' ' + render.classes : '';
				}

				if (opts.range) {
					if (dp.isSame(minRange, date, type)) classes += ' -range-from-';
					if (dp.isSame(maxRange, date, type)) classes += ' -range-to-';

					if (parent.selectedDates.length == 1 && parent.focused) {
						if (
							(dp.bigger(minRange, date) && dp.less(parent.focused, date)) ||
							(dp.less(maxRange, date) && dp.bigger(parent.focused, date))) {
							classes += ' -in-range-'
						}

						if (dp.less(maxRange, date) && dp.isSame(parent.focused, date)) {
							classes += ' -range-from-'
						}
						if (dp.bigger(minRange, date) && dp.isSame(parent.focused, date)) {
							classes += ' -range-to-'
						}

					} else if (parent.selectedDates.length == 2) {
						if (dp.bigger(minRange, date) && dp.less(maxRange, date)) {
							classes += ' -in-range-'
						}
					}
				}


				if (dp.isSame(currentDate, date, type)) classes += ' -current-';
				if (parent.focused && dp.isSame(date, parent.focused, type)) classes += ' -focus-';
				if (parent._isSelected(date, type)) classes += ' -selected-';
				if (!parent._isInRange(date, type) || render.disabled) classes += ' -disabled-';

				return {
					html: html,
					classes: classes
				}
			},

			/**
			 * Calculates days number to render. Generates days html and returns it.
			 * @param {object} date - Date object
			 * @returns {string}
			 * @private
			 */
			_getDaysHtml: function (date) {
				var totalMonthDays = dp.getDaysCount(date),
					firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
					lastMonthDay = new Date(date.getFullYear(), date.getMonth(), totalMonthDays).getDay(),
					daysFromPevMonth = firstMonthDay - this.d.loc.firstDay,
					daysFromNextMonth = 6 - lastMonthDay + this.d.loc.firstDay;

				daysFromPevMonth = daysFromPevMonth < 0 ? daysFromPevMonth + 7 : daysFromPevMonth;
				daysFromNextMonth = daysFromNextMonth > 6 ? daysFromNextMonth - 7 : daysFromNextMonth;

				var startDayIndex = -daysFromPevMonth + 1,
					m, y,
					html = '';

				for (var i = startDayIndex, max = totalMonthDays + daysFromNextMonth; i <= max; i++) {
					y = date.getFullYear();
					m = date.getMonth();

					html += this._getDayHtml(new Date(y, m, i))
				}

				return html;
			},

			_getDayHtml: function (date) {
				var content = this._getCellContents(date, 'day');

				return '<div class="' + content.classes + '" ' +
					'data-date="' + date.getDate() + '" ' +
					'data-month="' + date.getMonth() + '" ' +
					'data-year="' + date.getFullYear() + '">' + content.html + '</div>';
			},

			/**
			 * Generates months html
			 * @param {object} date - date instance
			 * @returns {string}
			 * @private
			 */
			_getMonthsHtml: function (date) {
				var html = '',
					d = dp.getParsedDate(date),
					i = 0;

				while (i < 12) {
					html += this._getMonthHtml(new Date(d.year, i));
					i++
				}

				return html;
			},

			_getMonthHtml: function (date) {
				var content = this._getCellContents(date, 'month');

				return '<div class="' + content.classes + '" data-month="' + date.getMonth() + '">' + content.html + '</div>'
			},

			_getYearsHtml: function (date) {
				var d = dp.getParsedDate(date),
					decade = dp.getDecade(date),
					firstYear = decade[0] - 1,
					html = '',
					i = firstYear;

				for (i; i <= decade[1] + 1; i++) {
					html += this._getYearHtml(new Date(i, 0));
				}

				return html;
			},

			_getYearHtml: function (date) {
				var content = this._getCellContents(date, 'year');

				return '<div class="' + content.classes + '" data-year="' + date.getFullYear() + '">' + content.html + '</div>'
			},

			_renderTypes: {
				days: function () {
					var dayNames = this._getDayNamesHtml(this.d.loc.firstDay),
						days = this._getDaysHtml(this.d.currentDate);

					this.$cells.html(days);
					this.$names.html(dayNames)
				},
				months: function () {
					var html = this._getMonthsHtml(this.d.currentDate);

					this.$cells.html(html)
				},
				years: function () {
					var html = this._getYearsHtml(this.d.currentDate);

					this.$cells.html(html)
				}
			},

			_render: function () {
				if (this.opts.onlyTimepicker) return;
				this._renderTypes[this.type].bind(this)();
			},

			_update: function () {
				var $cells = $('.datepicker--cell', this.$cells),
					_this = this,
					classes,
					$cell,
					date;
				$cells.each(function (cell, i) {
					$cell = $(this);
					date = _this.d._getDateFromCell($(this));
					classes = _this._getCellContents(date, _this.d.cellType);
					$cell.attr('class', classes.classes)
				});
			},

			show: function () {
				if (this.opts.onlyTimepicker) return;
				this.$el.addClass('active');
				this.acitve = true;
			},

			hide: function () {
				this.$el.removeClass('active');
				this.active = false;
			},

			//  Events
			// -------------------------------------------------

			_handleClick: function (el) {
				var date = el.data('date') || 1,
					month = el.data('month') || 0,
					year = el.data('year') || this.d.parsedDate.year,
					dp = this.d;
				// Change view if min view does not reach yet
				if (dp.view != this.opts.minView) {
					dp.down(new Date(year, month, date));
					return;
				}
				// Select date if min view is reached
				var selectedDate = new Date(year, month, date),
					alreadySelected = this.d._isSelected(selectedDate, this.d.cellType);

				if (!alreadySelected) {
					dp._trigger('clickCell', selectedDate);
					return;
				}

				dp._handleAlreadySelectedDates.bind(dp, alreadySelected, selectedDate)();

			},

			_onClickCell: function (e) {
				var $el = $(e.target).closest('.datepicker--cell');

				if ($el.hasClass('-disabled-')) return;

				this._handleClick.bind(this)($el);
			}
		};
	})();

	;
	(function () {
		var template = '' +
			'<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div>' +
			'<div class="datepicker--nav-title">#{title}</div>' +
			'<div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
			buttonsContainerTemplate = '<div class="datepicker--buttons"></div>',
			button = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
			datepicker = $.fn.datepicker,
			dp = datepicker.Constructor;

		datepicker.Navigation = function (d, opts) {
			this.d = d;
			this.opts = opts;

			this.$buttonsContainer = '';

			this.init();
		};

		datepicker.Navigation.prototype = {
			init: function () {
				this._buildBaseHtml();
				this._bindEvents();
			},

			_bindEvents: function () {
				this.d.$nav.on('click', '.datepicker--nav-action', $.proxy(this._onClickNavButton, this));
				this.d.$nav.on('click', '.datepicker--nav-title', $.proxy(this._onClickNavTitle, this));
				this.d.$datepicker.on('click', '.datepicker--button', $.proxy(this._onClickNavButton, this));
			},

			_buildBaseHtml: function () {
				if (!this.opts.onlyTimepicker) {
					this._render();
				}
				this._addButtonsIfNeed();
			},

			_addButtonsIfNeed: function () {
				if (this.opts.todayButton) {
					this._addButton('today')
				}
				if (this.opts.clearButton) {
					this._addButton('clear')
				}
			},

			_render: function () {
				var title = this._getTitle(this.d.currentDate),
					html = dp.template(template, $.extend({
						title: title
					}, this.opts));
				this.d.$nav.html(html);
				if (this.d.view == 'years') {
					$('.datepicker--nav-title', this.d.$nav).addClass('-disabled-');
				}
				this.setNavStatus();
			},

			_getTitle: function (date) {
				return this.d.formatDate(this.opts.navTitles[this.d.view], date)
			},

			_addButton: function (type) {
				if (!this.$buttonsContainer.length) {
					this._addButtonsContainer();
				}

				var data = {
						action: type,
						label: this.d.loc[type]
					},
					html = dp.template(button, data);

				if ($('[data-action=' + type + ']', this.$buttonsContainer).length) return;
				this.$buttonsContainer.append(html);
			},

			_addButtonsContainer: function () {
				this.d.$datepicker.append(buttonsContainerTemplate);
				this.$buttonsContainer = $('.datepicker--buttons', this.d.$datepicker);
			},

			setNavStatus: function () {
				if (!(this.opts.minDate || this.opts.maxDate) || !this.opts.disableNavWhenOutOfRange) return;

				var date = this.d.parsedDate,
					m = date.month,
					y = date.year,
					d = date.date;

				switch (this.d.view) {
					case 'days':
						if (!this.d._isInRange(new Date(y, m - 1, 1), 'month')) {
							this._disableNav('prev')
						}
						if (!this.d._isInRange(new Date(y, m + 1, 1), 'month')) {
							this._disableNav('next')
						}
						break;
					case 'months':
						if (!this.d._isInRange(new Date(y - 1, m, d), 'year')) {
							this._disableNav('prev')
						}
						if (!this.d._isInRange(new Date(y + 1, m, d), 'year')) {
							this._disableNav('next')
						}
						break;
					case 'years':
						var decade = dp.getDecade(this.d.date);
						if (!this.d._isInRange(new Date(decade[0] - 1, 0, 1), 'year')) {
							this._disableNav('prev')
						}
						if (!this.d._isInRange(new Date(decade[1] + 1, 0, 1), 'year')) {
							this._disableNav('next')
						}
						break;
				}
			},

			_disableNav: function (nav) {
				$('[data-action="' + nav + '"]', this.d.$nav).addClass('-disabled-')
			},

			_activateNav: function (nav) {
				$('[data-action="' + nav + '"]', this.d.$nav).removeClass('-disabled-')
			},

			_onClickNavButton: function (e) {
				var $el = $(e.target).closest('[data-action]'),
					action = $el.data('action');

				this.d[action]();
			},

			_onClickNavTitle: function (e) {
				if ($(e.target).hasClass('-disabled-')) return;

				if (this.d.view == 'days') {
					return this.d.view = 'months'
				}

				this.d.view = 'years';
			}
		}

	})();

	;
	(function () {
		var template = '<div class="datepicker--time">' +
			'<div class="datepicker--time-current">' +
			'   <span class="datepicker--time-current-hours">#{hourVisible}</span>' +
			'   <span class="datepicker--time-current-colon">:</span>' +
			'   <span class="datepicker--time-current-minutes">#{minValue}</span>' +
			'</div>' +
			'<div class="datepicker--time-sliders">' +
			'   <div class="datepicker--time-row">' +
			'      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>' +
			'   </div>' +
			'   <div class="datepicker--time-row">' +
			'      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>' +
			'   </div>' +
			'</div>' +
			'</div>',
			datepicker = $.fn.datepicker,
			dp = datepicker.Constructor;

		datepicker.Timepicker = function (inst, opts) {
			this.d = inst;
			this.opts = opts;

			this.init();
		};

		datepicker.Timepicker.prototype = {
			init: function () {
				var input = 'input';
				this._setTime(this.d.date);
				this._buildHTML();

				if (navigator.userAgent.match(/trident/gi)) {
					input = 'change';
				}

				this.d.$el.on('selectDate', this._onSelectDate.bind(this));
				this.$ranges.on(input, this._onChangeRange.bind(this));
				this.$ranges.on('mouseup', this._onMouseUpRange.bind(this));
				this.$ranges.on('mousemove focus ', this._onMouseEnterRange.bind(this));
				this.$ranges.on('mouseout blur', this._onMouseOutRange.bind(this));
			},

			_setTime: function (date) {
				var _date = dp.getParsedDate(date);

				this._handleDate(date);
				this.hours = _date.hours < this.minHours ? this.minHours : _date.hours;
				this.minutes = _date.minutes < this.minMinutes ? this.minMinutes : _date.minutes;
			},

			/**
			 * Sets minHours and minMinutes from date (usually it's a minDate)
			 * Also changes minMinutes if current hours are bigger then @date hours
			 * @param date {Date}
			 * @private
			 */
			_setMinTimeFromDate: function (date) {
				this.minHours = date.getHours();
				this.minMinutes = date.getMinutes();

				// If, for example, min hours are 10, and current hours are 12,
				// update minMinutes to default value, to be able to choose whole range of values
				if (this.d.lastSelectedDate) {
					if (this.d.lastSelectedDate.getHours() > date.getHours()) {
						this.minMinutes = this.opts.minMinutes;
					}
				}
			},

			_setMaxTimeFromDate: function (date) {
				this.maxHours = date.getHours();
				this.maxMinutes = date.getMinutes();

				if (this.d.lastSelectedDate) {
					if (this.d.lastSelectedDate.getHours() < date.getHours()) {
						this.maxMinutes = this.opts.maxMinutes;
					}
				}
			},

			_setDefaultMinMaxTime: function () {
				var maxHours = 23,
					maxMinutes = 59,
					opts = this.opts;

				this.minHours = opts.minHours < 0 || opts.minHours > maxHours ? 0 : opts.minHours;
				this.minMinutes = opts.minMinutes < 0 || opts.minMinutes > maxMinutes ? 0 : opts.minMinutes;
				this.maxHours = opts.maxHours < 0 || opts.maxHours > maxHours ? maxHours : opts.maxHours;
				this.maxMinutes = opts.maxMinutes < 0 || opts.maxMinutes > maxMinutes ? maxMinutes : opts.maxMinutes;
			},

			/**
			 * Looks for min/max hours/minutes and if current values
			 * are out of range sets valid values.
			 * @private
			 */
			_validateHoursMinutes: function (date) {
				if (this.hours < this.minHours) {
					this.hours = this.minHours;
				} else if (this.hours > this.maxHours) {
					this.hours = this.maxHours;
				}

				if (this.minutes < this.minMinutes) {
					this.minutes = this.minMinutes;
				} else if (this.minutes > this.maxMinutes) {
					this.minutes = this.maxMinutes;
				}
			},

			_buildHTML: function () {
				var lz = dp.getLeadingZeroNum,
					data = {
						hourMin: this.minHours,
						hourMax: lz(this.maxHours),
						hourStep: this.opts.hoursStep,
						hourValue: this.hours,
						hourVisible: lz(this.displayHours),
						minMin: this.minMinutes,
						minMax: lz(this.maxMinutes),
						minStep: this.opts.minutesStep,
						minValue: lz(this.minutes)
					},
					_template = dp.template(template, data);

				this.$timepicker = $(_template).appendTo(this.d.$datepicker);
				this.$ranges = $('[type="range"]', this.$timepicker);
				this.$hours = $('[name="hours"]', this.$timepicker);
				this.$minutes = $('[name="minutes"]', this.$timepicker);
				this.$hoursText = $('.datepicker--time-current-hours', this.$timepicker);
				this.$minutesText = $('.datepicker--time-current-minutes', this.$timepicker);

				if (this.d.ampm) {
					this.$ampm = $('<span class="datepicker--time-current-ampm">')
						.appendTo($('.datepicker--time-current', this.$timepicker))
						.html(this.dayPeriod);

					this.$timepicker.addClass('-am-pm-');
				}
			},

			_updateCurrentTime: function () {
				var h = dp.getLeadingZeroNum(this.displayHours),
					m = dp.getLeadingZeroNum(this.minutes);

				this.$hoursText.html(h);
				this.$minutesText.html(m);

				if (this.d.ampm) {
					this.$ampm.html(this.dayPeriod);
				}
			},

			_updateRanges: function () {
				this.$hours.attr({
					min: this.minHours,
					max: this.maxHours
				}).val(this.hours);

				this.$minutes.attr({
					min: this.minMinutes,
					max: this.maxMinutes
				}).val(this.minutes)
			},

			/**
			 * Sets minHours, minMinutes etc. from date. If date is not passed, than sets
			 * values from options
			 * @param [date] {object} - Date object, to get values from
			 * @private
			 */
			_handleDate: function (date) {
				this._setDefaultMinMaxTime();
				if (date) {
					if (dp.isSame(date, this.d.opts.minDate)) {
						this._setMinTimeFromDate(this.d.opts.minDate);
					} else if (dp.isSame(date, this.d.opts.maxDate)) {
						this._setMaxTimeFromDate(this.d.opts.maxDate);
					}
				}

				this._validateHoursMinutes(date);
			},

			update: function () {
				this._updateRanges();
				this._updateCurrentTime();
			},

			/**
			 * Calculates valid hour value to display in text input and datepicker's body.
			 * @param date {Date|Number} - date or hours
			 * @param [ampm] {Boolean} - 12 hours mode
			 * @returns {{hours: *, dayPeriod: string}}
			 * @private
			 */
			_getValidHoursFromDate: function (date, ampm) {
				var d = date,
					hours = date;

				if (date instanceof Date) {
					d = dp.getParsedDate(date);
					hours = d.hours;
				}

				var _ampm = ampm || this.d.ampm,
					dayPeriod = 'am';

				if (_ampm) {
					switch (true) {
						case hours == 0:
							hours = 12;
							break;
						case hours == 12:
							dayPeriod = 'pm';
							break;
						case hours > 11:
							hours = hours - 12;
							dayPeriod = 'pm';
							break;
						default:
							break;
					}
				}

				return {
					hours: hours,
					dayPeriod: dayPeriod
				}
			},

			set hours(val) {
				this._hours = val;

				var displayHours = this._getValidHoursFromDate(val);

				this.displayHours = displayHours.hours;
				this.dayPeriod = displayHours.dayPeriod;
			},

			get hours() {
				return this._hours;
			},

			//  Events
			// -------------------------------------------------

			_onChangeRange: function (e) {
				var $target = $(e.target),
					name = $target.attr('name');

				this.d.timepickerIsActive = true;

				this[name] = $target.val();
				this._updateCurrentTime();
				this.d._trigger('timeChange', [this.hours, this.minutes]);

				this._handleDate(this.d.lastSelectedDate);
				this.update()
			},

			_onSelectDate: function (e, data) {
				this._handleDate(data);
				this.update();
			},

			_onMouseEnterRange: function (e) {
				var name = $(e.target).attr('name');
				$('.datepicker--time-current-' + name, this.$timepicker).addClass('-focus-');
			},

			_onMouseOutRange: function (e) {
				var name = $(e.target).attr('name');
				if (this.d.inFocus) return; // Prevent removing focus when mouse out of range slider
				$('.datepicker--time-current-' + name, this.$timepicker).removeClass('-focus-');
			},

			_onMouseUpRange: function (e) {
				this.d.timepickerIsActive = false;
			}
		};
	})();
})(window, jQuery);

/*! WOW wow.js - v1.2.1 - 2016-09-05
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
! function (a, b) {
	if ("function" == typeof define && define.amd) define(["module", "exports"], b);
	else if ("undefined" != typeof exports) b(module, exports);
	else {
		var c = {
			exports: {}
		};
		b(c, c.exports), a.WOW = c.exports
	}
}(this, function (a, b) {
	"use strict";

	function c(a, b) {
		if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
	}

	function d(a, b) {
		return b.indexOf(a) >= 0
	}

	function e(a, b) {
		for (var c in b)
			if (null == a[c]) {
				var d = b[c];
				a[c] = d
			} return a
	}

	function f(a) {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
	}

	function g(a) {
		var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
			c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
			d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
			e = void 0;
		return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
	}

	function h(a, b) {
		null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
	}

	function i(a, b, c) {
		null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
	}

	function j(a, b, c) {
		null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
	}

	function k() {
		return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
	}
	Object.defineProperty(b, "__esModule", {
		value: !0
	});
	var l, m, n = function () {
			function a(a, b) {
				for (var c = 0; c < b.length; c++) {
					var d = b[c];
					d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
				}
			}
			return function (b, c, d) {
				return c && a(b.prototype, c), d && a(b, d), b
			}
		}(),
		o = window.WeakMap || window.MozWeakMap || function () {
			function a() {
				c(this, a), this.keys = [], this.values = []
			}
			return n(a, [{
				key: "get",
				value: function (a) {
					for (var b = 0; b < this.keys.length; b++) {
						var c = this.keys[b];
						if (c === a) return this.values[b]
					}
				}
			}, {
				key: "set",
				value: function (a, b) {
					for (var c = 0; c < this.keys.length; c++) {
						var d = this.keys[c];
						if (d === a) return this.values[c] = b, this
					}
					return this.keys.push(a), this.values.push(b), this
				}
			}]), a
		}(),
		p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function () {
			function a() {
				c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
			}
			return n(a, [{
				key: "observe",
				value: function () {}
			}]), a
		}(), l.notSupported = !0, m),
		q = window.getComputedStyle || function (a) {
			var b = /(\-([a-z]){1})/g;
			return {
				getPropertyValue: function (c) {
					"float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function (a, b) {
						return b.toUpperCase()
					});
					var d = a.currentStyle;
					return (null != d ? d[c] : void 0) || null
				}
			}
		},
		r = function () {
			function a() {
				var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
				c(this, a), this.defaults = {
					boxClass: "wow",
					animateClass: "animated",
					offset: 0,
					mobile: !0,
					live: !0,
					callback: null,
					scrollContainer: null
				}, this.animate = function () {
					return "requestAnimationFrame" in window ? function (a) {
						return window.requestAnimationFrame(a)
					} : function (a) {
						return a()
					}
				}(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass)
			}
			return n(a, [{
				key: "init",
				value: function () {
					this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = []
				}
			}, {
				key: "start",
				value: function () {
					var a = this;
					if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
						if (this.disabled()) this.resetStyle();
						else
							for (var b = 0; b < this.boxes.length; b++) {
								var c = this.boxes[b];
								this.applyStyle(c, !0)
							}
					if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
						var d = new p(function (b) {
							for (var c = 0; c < b.length; c++)
								for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
									var f = d.addedNodes[e];
									a.doSync(f)
								}
						});
						d.observe(document.body, {
							childList: !0,
							subtree: !0
						})
					}
				}
			}, {
				key: "stop",
				value: function () {
					this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
				}
			}, {
				key: "sync",
				value: function () {
					p.notSupported && this.doSync(this.element)
				}
			}, {
				key: "doSync",
				value: function (a) {
					if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
						a = a.parentNode || a;
						for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
							var e = b[c];
							d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0)
						}
					}
				}
			}, {
				key: "show",
				value: function (a) {
					return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation), a
				}
			}, {
				key: "applyStyle",
				value: function (a, b) {
					var c = this,
						d = a.getAttribute("data-wow-duration"),
						e = a.getAttribute("data-wow-delay"),
						f = a.getAttribute("data-wow-iteration");
					return this.animate(function () {
						return c.customStyle(a, b, d, e, f)
					})
				}
			}, {
				key: "resetStyle",
				value: function () {
					for (var a = 0; a < this.boxes.length; a++) {
						var b = this.boxes[a];
						b.style.visibility = "visible"
					}
				}
			}, {
				key: "resetAnimation",
				value: function (a) {
					if (a.type.toLowerCase().indexOf("animationend") >= 0) {
						var b = a.target || a.srcElement;
						b.className = b.className.replace(this.config.animateClass, "").trim()
					}
				}
			}, {
				key: "customStyle",
				value: function (a, b, c, d, e) {
					return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
						animationDuration: c
					}), d && this.vendorSet(a.style, {
						animationDelay: d
					}), e && this.vendorSet(a.style, {
						animationIterationCount: e
					}), this.vendorSet(a.style, {
						animationName: b ? "none" : this.cachedAnimationName(a)
					}), a
				}
			}, {
				key: "vendorSet",
				value: function (a, b) {
					for (var c in b)
						if (b.hasOwnProperty(c)) {
							var d = b[c];
							a["" + c] = d;
							for (var e = 0; e < this.vendors.length; e++) {
								var f = this.vendors[e];
								a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
							}
						}
				}
			}, {
				key: "vendorCSS",
				value: function (a, b) {
					for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
						var f = this.vendors[e];
						d = d || c.getPropertyCSSValue("-" + f + "-" + b)
					}
					return d
				}
			}, {
				key: "animationName",
				value: function (a) {
					var b = void 0;
					try {
						b = this.vendorCSS(a, "animation-name").cssText
					} catch (c) {
						b = q(a).getPropertyValue("animation-name")
					}
					return "none" === b ? "" : b
				}
			}, {
				key: "cacheAnimationName",
				value: function (a) {
					return this.animationNameCache.set(a, this.animationName(a))
				}
			}, {
				key: "cachedAnimationName",
				value: function (a) {
					return this.animationNameCache.get(a)
				}
			}, {
				key: "scrollHandler",
				value: function () {
					this.scrolled = !0
				}
			}, {
				key: "scrollCallback",
				value: function () {
					if (this.scrolled) {
						this.scrolled = !1;
						for (var a = [], b = 0; b < this.boxes.length; b++) {
							var c = this.boxes[b];
							if (c) {
								if (this.isVisible(c)) {
									this.show(c);
									continue
								}
								a.push(c)
							}
						}
						this.boxes = a, this.boxes.length || this.config.live || this.stop()
					}
				}
			}, {
				key: "offsetTop",
				value: function (a) {
					for (; void 0 === a.offsetTop;) a = a.parentNode;
					for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop;
					return b
				}
			}, {
				key: "isVisible",
				value: function (a) {
					var b = a.getAttribute("data-wow-offset") || this.config.offset,
						c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
						d = c + Math.min(this.element.clientHeight, k()) - b,
						e = this.offsetTop(a),
						f = e + a.clientHeight;
					return d >= e && f >= c
				}
			}, {
				key: "disabled",
				value: function () {
					return !this.config.mobile && f(navigator.userAgent)
				}
			}]), a
		}();
	b["default"] = r, a.exports = b["default"]
});