(()=>{var e={715:e=>{(()=>{"use strict";var t={727:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toDouble=t.intHighLow=t.uintHighLow=t.onesComplement=t.assert=t.Int53Type=void 0;const n=4294967295;var r;(r=t.Int53Type||(t.Int53Type={})).Int64BE="Int64BE",r.Int64LE="Int64LE",r.UInt64BE="UInt64BE",r.UInt64LE="UInt64LE",t.assert=(e,t)=>{if(!e)throw new Error(t)},t.onesComplement=e=>((e=~e)<0&&(e=2147483648+(2147483647&e)),e),t.uintHighLow=e=>{(0,t.assert)(e>-1&&e<=9007199254740991,"number out of range"),(0,t.assert)(Math.floor(e)===e,"number must be an integer");var r=0,o=4294967295&e,c=o<0?2147483648+(2147483647&e):o;return e>n&&(r=(e-c)/4294967296),[r,c]},t.intHighLow=e=>{if(e>-1)return(0,t.uintHighLow)(e);var r=(0,t.uintHighLow)(-e),o=(0,t.onesComplement)(r[0]),c=(0,t.onesComplement)(r[1]);return c===n?(o+=1,c=0):c+=1,[o,c]},t.toDouble=(e,n,r)=>r&&0!=(2147483648&e)?(e=(0,t.onesComplement)(e),n=(0,t.onesComplement)(n),(0,t.assert)(e<2097152,"number too small"),-(4294967296*e+n+1)):((0,t.assert)(e<2097152,"number too large"),4294967296*e+n)},716:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.readInt53=t.writeInt53=t.Int53Type=void 0;var r=n(727);Object.defineProperty(t,"Int53Type",{enumerable:!0,get:function(){return r.Int53Type}});var o=n(733);Object.defineProperty(t,"writeInt53",{enumerable:!0,get:function(){return o.write}});var c=n(120);Object.defineProperty(t,"readInt53",{enumerable:!0,get:function(){return c.read}})},120:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.read=void 0;const r=n(727);t.read=(e,t,n=0)=>{const o=e.endsWith("BE"),[c,i]=o?[t.readUInt32BE(n),t.readUInt32BE(n+4)]:[t.readUInt32LE(n+4),t.readUInt32LE(n)],s=e.startsWith("Int");return(0,r.toDouble)(c,i,s)}},733:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.write=void 0;const r=n(727);t.write=(e,t,n,o=0)=>{const c=e.startsWith("Int")?(0,r.intHighLow)(t):(0,r.uintHighLow)(t);e.endsWith("BE")?(n.writeUInt32BE(c[0],o),n.writeUInt32BE(c[1],o+4)):(n.writeUInt32LE(c[1],o),n.writeUInt32LE(c[0],o+4))}},758:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rangeError=t.typeError=t.checkDefined=t.checkBufferLengthForDecode=t.checkBufferLengthForEncode=t.checkLength=void 0,t.checkLength=(e,t,n)=>{if(t!==n)throw new RangeError(`${e} Codec: value length is not equal codec length. valueLength = ${t}, codecLength = ${n}.`)},t.checkBufferLengthForEncode=(e,t,n,r)=>{if(t.length-n<r)throw new RangeError(`${e} Codec: buffer is too small. buffer.length = ${t.length}, offset = ${n}, codecLength = ${r}.`)},t.checkBufferLengthForDecode=(e,t,n,r)=>{if(n-t<r)throw new RangeError(`${e} Codec: not enough data for decode. offset = ${t}, end = ${n}, codecLength = ${r}.`)},t.checkDefined=(e,t,n="object")=>{if(void 0===t)throw new TypeError(`${e} Codec: value must be ${n} but got undefined.`);if("buffer"===n&&!Buffer.isBuffer(t))throw new TypeError(`${e} Codec: value must be ${n} but got undefined.`)},t.typeError=(e,t)=>{throw new TypeError(`${e} Codec: ${t}.`)},t.rangeError=(e,t)=>{throw new RangeError(`${e} Codec: ${t}.`)}},68:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CAllBuffer=void 0,t.CAllBuffer=class{length;encodingLength=e=>e?.length||this.length;encodeBytes;decodeBytes;constructor(){this.length=0,this.encodeBytes=0,this.decodeBytes=0}encode=(e,t,n=0)=>{if(this.length=e.length,this.encodeBytes=e.length,this.decodeBytes=e.length,!Buffer.isBuffer(e))throw new TypeError("value must be a Buffer instance");if(!t)return Buffer.from(e);if(n+this.length>t.length)throw new RangeError("destination buffer is too small");return e.copy(t,n),t};decode=(e,t=0,n)=>{if(this.length=e.length,this.encodeBytes=e.length,this.decodeBytes=e.length,n||(n=e.length),this.length=e.length-t,t+this.length>n)throw new RangeError("not enough data for decode");return Buffer.from(e.slice(t,t+this.length))}}},157:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CArray=void 0;const i=c(n(882)),s=n(758);t.CArray=class{codecName="CArray";length;anyCodec;calcLength=e=>i.calcAllLength(e,this.anyCodec.encodingLength);encodingLength=e=>((0,s.checkDefined)(this.codecName,e,"array"),void 0===e?0:((0,s.checkLength)(this.codecName,e.length,this.length),this.calcLength(e)));encodeBytes;decodeBytes;constructor(e,t){this.length=e,this.anyCodec=t,this.encodeBytes=e,this.decodeBytes=e}encode=(e,t,n=0)=>{(0,s.checkLength)(this.codecName,e.length,this.length),t||(t=Buffer.allocUnsafe(this.calcLength(e)));const r=this.anyCodec.encode,o=this.anyCodec.encodeBytes;return this.encodeBytes=i.calcAllLength(e,(function(e,n,c){return r(e,t,c),o}),n)-n,t};decode=(e,t=0,n)=>{t||(t=0);const r=new Array(this.length),o=this.anyCodec.decode,c=this.anyCodec.decodeBytes;return this.decodeBytes=i.calcAllLength(r,(function(t,i,s){return r[i||0]=o(e,s,n),c}),t)-t,r}}},483:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CBuffer=void 0;const r=n(758);t.CBuffer=class{codecName="Buffer";length;encodingLength=()=>this.length;encodeBytes;decodeBytes;constructor(e){this.length=e,this.encodeBytes=e,this.decodeBytes=e}encode=(e,t,n=0)=>((0,r.checkDefined)(this.codecName,e,"buffer"),(0,r.checkLength)(this.codecName,e.length,this.length),t?((0,r.checkBufferLengthForEncode)(this.codecName,t,n,this.length),e.copy(t,n),t):Buffer.from(e));decode=(e,t=0,n)=>(n||(n=e.length),(0,r.checkBufferLengthForDecode)(this.codecName,t,n,this.length),Buffer.from(e.slice(t,t+this.length)))}},193:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CNumber=void 0;const r=n(716);t.CNumber=class{length;write;read;encodingLength=e=>this.length;encodeBytes;decodeBytes;constructor(e,t){this.length=t,this.encodeBytes=t,this.decodeBytes=t,Buffer.prototype["write"+e]?this.write=(t,n,r)=>t["write"+e](n,r):this.write=(t,n,o)=>(0,r.writeInt53)(e,n,t,o),Buffer.prototype["read"+e]?this.read=(t,n)=>t["read"+e](n):this.read=(t,n)=>(0,r.readInt53)(e,t,n)}encode=(e,t,n=0)=>(t=t||Buffer.allocUnsafe(this.length),this.write(t,e,n),t);decode=(e,t=0,n)=>n?this.read(e.slice(t,n),0):this.read(e,t)}},759:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CObject=void 0;const r=n(758);t.CObject=class{codecName="CObject";items;encodeBytes;decodeBytes;encodingLength;constructor(e){this.items=e.map((e=>Array.isArray(e)?{name:e[0],type:e[1]}:e)),this.encodeBytes=0,this.decodeBytes=0,this.encodingLength=e=>((0,r.checkDefined)(this.codecName,e,"object"),void 0===e?0:this.items.reduce(((t,n)=>{const r=e[n.name];return t+n.type.encodingLength(r)}),0))}encode=(e,t,n=0)=>{const o=n,c=this.encodingLength(e);return void 0===t?t=Buffer.allocUnsafe(c):(0,r.checkBufferLengthForEncode)(this.codecName,t,n,c),this.items.forEach((r=>{const o=e[r.name];r.type.encode(o,t,n),n+=r.type.encodeBytes})),this.encodeBytes=n-o,t};decode=(e,t=0,n)=>{let r={};const o=t;return this.items.forEach((o=>{const c=o.type.decode(e,t,n);t+=o.type.decodeBytes,r[o.name]=c})),this.decodeBytes=t-o,r}}},129:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CString=void 0;const r=n(758),o=n(483);t.CString=class{codecName="String";length;bufferCodec;encodingType;encodingLength=e=>this.length;encodeBytes;decodeBytes;constructor(e,t="utf8"){this.length=e,this.encodingType=t,this.bufferCodec=new o.CBuffer(this.length),this.encodeBytes=e,this.decodeBytes=e}encode=(e,t,n=0)=>((0,r.checkLength)(this.codecName,Buffer.byteLength(e,this.encodingType),this.length),t?((0,r.checkBufferLengthForEncode)(this.codecName,t,n,this.length),t.write(e,n,length,this.encodingType),t):Buffer.from(e,this.encodingType));decode=(e,t=0,n)=>((0,r.checkBufferLengthForDecode)(this.codecName,t,n||e.length,this.length),this.bufferCodec.decode(e,t,n).toString(this.encodingType))}},161:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CVarArray=void 0;const i=c(n(882)),s=n(758);t.CVarArray=class{codecName="CVarArray";length=-1;lengthType;anyCodec;calcLength=e=>i.calcAllLength(e,this.anyCodec.encodingLength,this.lengthType.encodingLength(e.length));encodingLength=e=>((0,s.checkDefined)(this.codecName,e,"array"),void 0===e?0:this.calcLength(e));encodeBytes=-1;decodeBytes=-1;constructor(e,t){this.lengthType=e,this.anyCodec=t}encode=(e,t,n=0)=>(t||(t=Buffer.allocUnsafe(this.calcLength(e))),this.lengthType.encode(e.length,t,n),this.encodeBytes=i.calcAllLength(e,((e,n,r)=>(this.anyCodec.encode(e,t,r),this.anyCodec.encodeBytes)),this.lengthType.encodeBytes+n)-n,t);decode=(e,t=0,n)=>{t||(t=0);const r=new Array(this.lengthType.decode(e,t,n));return this.decodeBytes=i.calcAllLength(r,((t,o,c)=>(r[o||0]=this.anyCodec.decode(e,c,n),this.anyCodec.decodeBytes)),this.lengthType.decodeBytes+t)-t,r}}},5:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CVarBuffer=void 0;const r=n(758);t.CVarBuffer=class{codecName="VarBuffer";anyCodec;encodingLength;encodeBytes;decodeBytes;constructor(e){this.anyCodec=e,this.encodeBytes=0,this.decodeBytes=0,this.encodingLength=e=>((0,r.checkDefined)(this.codecName,e,"buffer"),void 0!==e?this.anyCodec.encodingLength(e.length)+e.length:0)}encode=(e,t,n=0)=>{const o=this.encodingLength(e);return t?(0,r.checkBufferLengthForEncode)(this.codecName,t,n,o):t=Buffer.allocUnsafe(o),this.anyCodec.encode(e.length,t,n),n+=this.anyCodec.encodeBytes,e.copy(t,n),this.encodeBytes=o,t};decode=(e,t=0,n)=>{void 0===n&&(n=e.length);const o=t,c=this.anyCodec.decode(e,t,n);return t+=this.anyCodec.decodeBytes,(0,r.checkBufferLengthForDecode)(this.codecName,t,n,c),this.decodeBytes=t+c-o,Buffer.from(e.slice(t,t+c))}}},513:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CVarString=void 0;const r=n(758),o=n(5);t.CVarString=class{codecName="CVarString";anyCodec;encodingType;varBufferCodec;encodingLength;encodeBytes;decodeBytes;constructor(e,t="utf8"){this.anyCodec=e,this.encodingType=t,this.varBufferCodec=new o.CVarBuffer(e),this.encodeBytes=0,this.decodeBytes=0,this.encodingLength=e=>{if((0,r.checkDefined)(this.codecName,e,"string"),void 0===e)return 0;const t=Buffer.byteLength(e,this.encodingType);return this.anyCodec.encodingLength(e.length)+t}}encode=(e,t,n=0)=>{const r=Buffer.byteLength(e,this.encodingType),o=this.anyCodec.encodingLength(e.length)+r;if(t||(t=Buffer.allocUnsafe(o)),n+o>t.length)throw new RangeError("destination buffer is too small");return this.anyCodec.encode(r,t,n),n+=this.anyCodec.encodeBytes,t.write(e,n,r,this.encodingType),this.encodeBytes=o,t};decode=(e,t=0,n)=>{const r=this.varBufferCodec.decode(e,t,n).toString(this.encodingType);return this.decodeBytes=this.varBufferCodec.decodeBytes,r}}},492:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CVarUIntBitcoin=void 0;const r=n(758);t.CVarUIntBitcoin=class{codecName="VarUIntBitcoin";MAX_SAFE_INTEGER=9007199254740991;checkUInt53=e=>{(e<0||e>this.MAX_SAFE_INTEGER)&&(0,r.rangeError)(this.codecName,`out of range value. min = 0, max = ${this.MAX_SAFE_INTEGER}, value = ${e}`),e%1!=0&&(0,r.typeError)(this.codecName,`value is not an integer. value = ${e}`)};encodeBytes;decodeBytes;encodingLength;constructor(){this.encodeBytes=0,this.decodeBytes=0,this.encodingLength=e=>((0,r.checkDefined)(this.codecName,e,"number"),void 0===e?0:(this.checkUInt53(e),e<253?1:e<=65535?3:e<=4294967295?5:9))}encode=(e,t,n=0)=>(t||(t=Buffer.allocUnsafe(this.encodingLength(e))),e<253?(t.writeUInt8(e,n),this.encodeBytes=1):e<=65535?(t.writeUInt8(253,n),t.writeUInt16LE(e,n+1),this.encodeBytes=3):e<=4294967295?(t.writeUInt8(254,n),t.writeUInt32LE(e,n+1),this.encodeBytes=5):(t.writeUInt8(255,n),t.writeUInt32LE(e>>>0,n+1),t.writeUInt32LE(e/4294967296|0,n+5),this.encodeBytes=9),t);decode=(e,t=0,n)=>{const r=e.readUInt8(t);if(r<253)return this.decodeBytes=1,r;if(253===r)return this.decodeBytes=3,e.readUInt16LE(t+1);if(254===r)return this.decodeBytes=5,e.readUInt32LE(t+1);this.decodeBytes=9;var o=e.readUInt32LE(t+1),c=4294967296*e.readUInt32LE(t+5)+o;return this.checkUInt53(c),c}}},915:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CVarUIntBitcoin=t.CVarString=t.CVarBuffer=t.CVarArray=t.CString=t.CObject=t.CNumber=t.CBuffer=t.CArray=t.CAllBuffer=void 0;var r=n(68);Object.defineProperty(t,"CAllBuffer",{enumerable:!0,get:function(){return r.CAllBuffer}});var o=n(157);Object.defineProperty(t,"CArray",{enumerable:!0,get:function(){return o.CArray}});var c=n(483);Object.defineProperty(t,"CBuffer",{enumerable:!0,get:function(){return c.CBuffer}});var i=n(193);Object.defineProperty(t,"CNumber",{enumerable:!0,get:function(){return i.CNumber}});var s=n(759);Object.defineProperty(t,"CObject",{enumerable:!0,get:function(){return s.CObject}});var d=n(129);Object.defineProperty(t,"CString",{enumerable:!0,get:function(){return d.CString}});var u=n(161);Object.defineProperty(t,"CVarArray",{enumerable:!0,get:function(){return u.CVarArray}});var a=n(5);Object.defineProperty(t,"CVarBuffer",{enumerable:!0,get:function(){return a.CVarBuffer}});var f=n(513);Object.defineProperty(t,"CVarString",{enumerable:!0,get:function(){return f.CVarString}});var h=n(492);Object.defineProperty(t,"CVarUIntBitcoin",{enumerable:!0,get:function(){return h.CVarUIntBitcoin}})},960:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.NumberTypes=void 0,(n=t.NumberTypes||(t.NumberTypes={})).Byte="UInt8",n.Int8="Int8",n.UInt8="UInt8",n.Int16BE="Int16BE",n.Int16LE="Int16LE",n.UInt16BE="UInt16BE",n.UInt16LE="UInt16LE",n.Int32BE="Int32BE",n.Int32LE="Int32LE",n.UInt32BE="UInt32BE",n.UInt32LE="UInt32LE",n.Int64BE="Int64BE",n.Int64LE="Int64LE",n.UInt64BE="UInt64BE",n.UInt64LE="UInt64LE",n.FloatBE="FloatBE",n.FloatLE="FloatLE",n.DoubleBE="DoubleBE",n.DoubleLE="DoubleLE"},554:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NumberTypes=void 0;var r=n(960);Object.defineProperty(t,"NumberTypes",{enumerable:!0,get:function(){return r.NumberTypes}})},882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calcAllLength=void 0,t.calcAllLength=(e,t,n=0)=>{let r=n;for(let n=0;n<e.length;n++)r+=t(e[n],n,r);return r}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e].call(c.exports,c,c.exports,r),c.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0});const t=r(554),n=r(915),c={AllBuffer:new n.CAllBuffer,Array:(e,t)=>new n.CArray(e,t),Buffer:e=>new n.CBuffer(e),Byte:new n.CNumber(t.NumberTypes.UInt8,1),Number:{Int8:new n.CNumber(t.NumberTypes.Int8,1),UInt8:new n.CNumber(t.NumberTypes.UInt8,1),Int16BE:new n.CNumber(t.NumberTypes.Int16BE,2),Int16LE:new n.CNumber(t.NumberTypes.Int16LE,2),UInt16BE:new n.CNumber(t.NumberTypes.UInt16BE,2),UInt16LE:new n.CNumber(t.NumberTypes.UInt16LE,2),Int32BE:new n.CNumber(t.NumberTypes.Int32BE,4),Int32LE:new n.CNumber(t.NumberTypes.Int32LE,4),UInt32BE:new n.CNumber(t.NumberTypes.UInt32BE,4),UInt32LE:new n.CNumber(t.NumberTypes.UInt32LE,4),Int64BE:new n.CNumber(t.NumberTypes.Int64BE,8),Int64LE:new n.CNumber(t.NumberTypes.Int64LE,8),UInt64BE:new n.CNumber(t.NumberTypes.UInt64BE,8),UInt64LE:new n.CNumber(t.NumberTypes.UInt64LE,8),FloatBE:new n.CNumber(t.NumberTypes.FloatBE,4),FloatLE:new n.CNumber(t.NumberTypes.FloatLE,4),DoubleBE:new n.CNumber(t.NumberTypes.DoubleBE,8),DoubleLE:new n.CNumber(t.NumberTypes.DoubleLE,8)},Object:e=>new n.CObject(e),String:(e,t="utf8")=>new n.CString(e,t),VarArray:(e,t)=>new n.CVarArray(e,t),VarBuffer:e=>new n.CVarBuffer(e),VarString:(e,t="utf8")=>new n.CVarString(e,t),VarUIntBitcoin:new n.CVarUIntBitcoin};e.default=c})(),e.exports=o})()},571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toTxSegwitBase=t.toTxSegwitParsed=t.toTxSegwit=void 0,t.toTxSegwit=e=>{const t={version:e.version,marker:e.marker,flag:e.flag,txIn:[],txOut:e.txOut,lockTime:e.lockTime};return e.txIn.forEach(((n,r)=>{t.txIn.push({previousOutput:n.previousOutput,signatureScript:n.signatureScript,witnessScripts:e.witnessScriptsArray[r],sequence:n.sequence})})),t},t.toTxSegwitParsed=e=>{const t={version:e.version,marker:e.marker,flag:e.flag,txIn:[],txOut:e.txOut,witnessScriptsArray:[],lockTime:e.lockTime};return e.txIn.forEach(((e,n)=>{t.txIn.push({previousOutput:e.previousOutput,signatureScript:e.signatureScript,sequence:e.sequence}),t.witnessScriptsArray.push(e.witnessScripts)})),t},t.toTxSegwitBase=(e,t)=>{const n={version:e.version,marker:e.marker,flag:e.flag,txIn:[],txOut:e.txOut,witnessScripts_lockTime:t,lockTime:e.lockTime};return e.txIn.forEach(((e,t)=>{n.txIn.push({previousOutput:e.previousOutput,signatureScript:e.signatureScript,sequence:e.sequence})})),n}},949:(e,t)=>{"use strict";function n(e){return e.length%2==0&&/^[0-9a-f]*$/.test(e.toLowerCase())}Object.defineProperty(t,"__esModule",{value:!0}),t.hex2buffer=t.isHex=t.buffer2hex=void 0,t.buffer2hex=function e(t){if(Buffer.isBuffer(t))return t.toString("hex");if(Array.isArray(t))t=t.map(e);else if("object"==typeof t)for(var n in t)t[n]=e(t[n]);return t},t.isHex=n,t.hex2buffer=function e(t){if(Buffer.isBuffer(t))return t;if("string"==typeof t&&n(t))return Buffer.from(t,"hex");if("object"==typeof t)for(var r in t)t[r]=e(t[r]);else Array.isArray(t)&&(t=t.map(e));return t}},607:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.TxArrayCodec=t.TxCodec=t.BlockCodec=t.BlockHeaderArrayCodec=t.BlockHeaderCodec=t.hex2buffer=t.buffer2hex=void 0,o(n(554),t);var c=n(949);Object.defineProperty(t,"buffer2hex",{enumerable:!0,get:function(){return c.buffer2hex}}),Object.defineProperty(t,"hex2buffer",{enumerable:!0,get:function(){return c.hex2buffer}});var i=n(969);Object.defineProperty(t,"BlockHeaderCodec",{enumerable:!0,get:function(){return i.BlockHeaderCodec}}),Object.defineProperty(t,"BlockHeaderArrayCodec",{enumerable:!0,get:function(){return i.BlockHeaderArrayCodec}}),Object.defineProperty(t,"BlockCodec",{enumerable:!0,get:function(){return i.BlockCodec}});var s=n(760);Object.defineProperty(t,"TxCodec",{enumerable:!0,get:function(){return s.TxCodec}}),Object.defineProperty(t,"TxArrayCodec",{enumerable:!0,get:function(){return s.TxArrayCodec}})},760:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TxArrayCodec=t.TxCodec=void 0;const o=r(n(715)),c=n(571),i=n(949),s=n(969),d=n(549);t.TxCodec=new class{length;encodingLength=()=>this.length;encodeBytes;decodeBytes;constructor(){this.length=0,this.encodeBytes=0,this.decodeBytes=0}encode=(e,t,n=0)=>{const r=(0,i.hex2buffer)(e);let o=Buffer.alloc(0);if(void 0===e.marker)o=s.Tx.encode(r),this.encodeBytes=s.Tx.encodeBytes,this.encodingLength=s.Tx.encodingLength;else{const t=new d.WitnessLocktimeCodec(e.txIn.length),n=e.txIn.map((e=>e.witnessScripts)),r=t.encode((0,i.hex2buffer)({witnessScriptsArray:n,lockTime:e.lockTime})),u=(0,i.buffer2hex)(r),a=(0,c.toTxSegwitBase)(e,u);o=s.TxWitnessBase.encode((0,i.hex2buffer)(a)),this.encodeBytes=s.TxWitnessBase.encodeBytes,this.encodingLength=s.TxWitnessBase.encodingLength}return o};decode=(e,t=0,n)=>{let r,o=e.slice(t,n);if("0001"!==(0,i.buffer2hex)(o).substr(8,4)){r=s.Tx.decode(o);const e=(0,i.buffer2hex)(r);return this.decodeBytes=s.Tx.decodeBytes,e}{const e=s.TxWitnessBase.decode(o),t=(0,i.buffer2hex)(e),n=new d.WitnessLocktimeCodec(t.txIn.length).decode((0,i.hex2buffer)(t.witnessScripts_lockTime)),r=(0,i.buffer2hex)(n),u={version:t.version,marker:t.marker,flag:t.flag,txIn:t.txIn,txOut:t.txOut,witnessScriptsArray:r.witnessScriptsArray,lockTime:r.lockTime};return(0,c.toTxSegwit)(u)}}},t.TxArrayCodec=o.default.VarArray(o.default.VarUIntBitcoin,t.TxCodec)},549:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WitnessLocktimeCodec=void 0;const o=r(n(715)),c=n(949);t.WitnessLocktimeCodec=class{witnessLocktimeData=o.default.Object([["witnessScriptsArray",o.default.VarArray(o.default.VarUIntBitcoin,o.default.VarArray(o.default.VarUIntBitcoin,o.default.VarBuffer(o.default.VarUIntBitcoin)))],["lockTime",o.default.Number.UInt32LE]]);inputsCount;encodeBytes;decodeBytes;encodingLength;constructor(e){this.inputsCount=e,this.encodeBytes=this.witnessLocktimeData.encodeBytes,this.decodeBytes=this.witnessLocktimeData.decodeBytes,this.encodingLength=this.witnessLocktimeData.encodingLength}encode=(e,t,n)=>{const r=this.witnessLocktimeData.encode(e,t,n).slice(1);return this.encodeBytes=this.witnessLocktimeData.encodeBytes,this.decodeBytes=this.witnessLocktimeData.decodeBytes,this.encodingLength=this.witnessLocktimeData.encodingLength,r};decode=(e,t,n)=>{const r=this.inputsCount.toString(16).padStart(2,"0"),o=(0,c.buffer2hex)(e),i=(0,c.hex2buffer)(r+o),s=this.witnessLocktimeData.decode(i,t,n);return this.encodeBytes=this.witnessLocktimeData.encodeBytes,this.decodeBytes=this.witnessLocktimeData.decodeBytes,this.encodingLength=this.witnessLocktimeData.encodingLength,s}}},969:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BlockCodec=t.BlockHeaderArrayCodec=t.BlockHeaderCodec=t.TxWitnessBase=t.Tx=void 0;const o=r(n(715)),c=n(760),i=o.default.Number.UInt32LE,s=o.default.Object([{name:"hash",type:o.default.Buffer(32)},{name:"index",type:o.default.Number.UInt32LE}]),d=o.default.Object([{name:"previousOutput",type:s},{name:"signatureScript",type:o.default.VarBuffer(o.default.VarUIntBitcoin)},{name:"sequence",type:o.default.Number.UInt32LE}]),u=o.default.VarArray(o.default.VarUIntBitcoin,d),a=o.default.Object([{name:"value",type:o.default.Number.Int64LE},{name:"pkScript",type:o.default.VarBuffer(o.default.VarUIntBitcoin)}]),f=o.default.VarArray(o.default.VarUIntBitcoin,a),h=o.default.Number.UInt32LE;t.Tx=o.default.Object([{name:"version",type:i},{name:"txIn",type:u},{name:"txOut",type:f},{name:"lockTime",type:h}]),t.TxWitnessBase=o.default.Object([{name:"version",type:i},{name:"marker",type:o.default.Byte},{name:"flag",type:o.default.Byte},{name:"txIn",type:u},{name:"txOut",type:f},{name:"witnessScripts_lockTime",type:o.default.AllBuffer}]),t.BlockHeaderCodec=o.default.Object([["version",o.default.Number.Int32LE],["prevBlock",o.default.Buffer(32)],["merkleRoot",o.default.Buffer(32)],["timestamp",o.default.Number.UInt32LE],["bits",o.default.Number.UInt32LE],["nonce",o.default.Number.UInt32LE],["txnCount",o.default.VarUIntBitcoin]]),t.BlockHeaderArrayCodec=o.default.VarArray(o.default.VarUIntBitcoin,t.BlockHeaderCodec),t.BlockCodec=o.default.Object([["version",o.default.Number.Int32LE],["prevBlock",o.default.Buffer(32)],["merkleRoot",o.default.Buffer(32)],["timestamp",o.default.Number.UInt32LE],["bits",o.default.Number.UInt32LE],["nonce",o.default.Number.UInt32LE],["txns",o.default.VarArray(o.default.VarUIntBitcoin,c.TxCodec)]])},554:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})}},t={},n=function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r].call(c.exports,c,c.exports,n),c.exports}(607);module.exports=n})();
//# sourceMappingURL=index.js.map