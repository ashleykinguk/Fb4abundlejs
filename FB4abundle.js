/* contact@ash-king.co.uk */

var i = 0, logs = ''; /* our local vars */

/*the below objects are required for the app to execute the bundle. See lines 47-55 for the custom js */
var __fbBatchedBridge = { 
	_lazyCallableModules: {},
	_queue: [[], [], [], 0],
	_callID: 0,
	_lastFlush: 0,
	_eventLoopStartTime: Date.now(),
	_immediatesCallback: null,
    callFunctionReturnFlushedQueue: function(module, method, args) {
		return __fbBatchedBridge.__guard(function() {
		  __fbBatchedBridge.__callFunction(module, method, args)
		}), __fbBatchedBridge.flushedQueue()
	},
    callFunctionReturnResultAndFlushedQueue: function(e, u, s) {
		return __fbBatchedBridge.__guard(function() {
		  throw new Error('callFunctionReturnResultAndFlushedQueue: ' + a);
		}), __fbBatchedBridge.flushedQueue()
	},
    invokeCallbackAndReturnFlushedQueue: function(a,b,c) { 
		throw new Error('invokeCallbackAndReturnFlushedQueue: ' + a);
	},
	flushedQueue: function(a, b) {
		if(a != undefined){
			throw new Error('flushedQueue: ' + b)
		}
		__fbBatchedBridge.__callImmediates(); 
		const queue = __fbBatchedBridge._queue;
		__fbBatchedBridge._queue = [[], [], [], __fbBatchedBridge._callID];
		return queue[0].length ? queue : null;
	},
	onComplete: function(a) { throw new Error(a) },	
	__callImmediates: function() {
		if (__fbBatchedBridge._immediatesCallback != null) {
		  __fbBatchedBridge._immediatesCallback();
		  throw new Error('processCallbacks: ' + __fbBatchedBridge._immediatesCallback());
		}
	},
	getCallableModule: function(a) { 
		const getValue = __fbBatchedBridge._lazyCallableModules[a];
		return getValue ? getValue() : null;
	},
	__callFunction: function(a,b,c) {
		if(a == 'RCTNativeAppEventEmitter') { // Only capturing the search bar in settings
			i += 1 //increment count
			logs += JSON.stringify(c) + '\n'; //JSON Object
			if(i > 10) {
				/* Here is where we will write out to logcat via js*/
				var t = (nativeModuleProxy);
				throw new Error('Look HERE: ' + (logs) + '\n\r'); 
			}
		}
		__fbBatchedBridge._lastFlush = Date.now();
		__fbBatchedBridge._eventLoopStartTime = __fbBatchedBridge._lastFlush;
		const moduleMethods = __fbBatchedBridge.getCallableModule(a);
		try {
			moduleMethods[b].apply(moduleMethods, c);
		} catch (e) {
			
		}
		return -1
	},
	__guard: function(e) {
		try {
			e();
		} catch (error) {
			throw new Error('__guard: ' + error); 
		}	
	}
};
