(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~1056ba16"],{"01c0":function(t,e,r){"use strict";var a=r("535a"),i=r("9f1d"),o=r("7d62"),n=r("ddf7"),s=r("9fef");function c(t){t=Object(a["a"])(t,a["a"].EMPTY_OBJECT);var e=Object(s["a"])(t.container);this._container=e;var r=document.createElement("div");r.className="cesium-performanceDisplay";var i=document.createElement("div");i.className="cesium-performanceDisplay-fps",this._fpsText=document.createTextNode(""),i.appendChild(this._fpsText);var o=document.createElement("div");o.className="cesium-performanceDisplay-ms",this._msText=document.createTextNode(""),o.appendChild(this._msText),r.appendChild(o),r.appendChild(i),this._container.appendChild(r),this._lastFpsSampleTime=Object(n["a"])(),this._lastMsSampleTime=Object(n["a"])(),this._fpsFrameCount=0,this._msFrameCount=0,this._throttled=!1;var c=document.createElement("div");c.className="cesium-performanceDisplay-throttled",this._throttledText=document.createTextNode(""),c.appendChild(this._throttledText),r.appendChild(c)}Object(i["a"])(c.prototype,{throttled:{get:function(){return this._throttled},set:function(t){this._throttled!==t&&(this._throttledText.nodeValue=t?"(throttled)":"",this._throttled=t)}}}),c.prototype.update=function(t){var e=Object(n["a"])(),r=Object(a["a"])(t,!0);this._fpsFrameCount++;var i=e-this._lastFpsSampleTime;if(i>1e3){var o="N/A";r&&(o=1e3*this._fpsFrameCount/i|0),this._fpsText.nodeValue=o+" FPS",this._lastFpsSampleTime=e,this._fpsFrameCount=0}this._msFrameCount++;var s=e-this._lastMsSampleTime;if(s>200){var c="N/A";r&&(c=(s/this._msFrameCount).toFixed(2)),this._msText.nodeValue=c+" MS",this._lastMsSampleTime=e,this._msFrameCount=0}},c.prototype.destroy=function(){return Object(o["a"])(this)},e["a"]=c},"1b40":function(t,e,r){"use strict";var a=r("be18"),i=r("abab"),o=r("2f63"),n=r("9f1d"),s=r("7d62"),c=r("0123"),u=r("c67a"),h=r("e42d"),p=r("f20a"),d=r("8b68"),l=r("5b54"),_=r("9ab9"),f=r("6ef5"),m=r("e90c"),v=r("a913"),x=r("7c5e"),y=r("cb10"),b=r("3018"),g=r("99fa"),T=r("a58e");function O(t){this._url=t,this._cubeMapBuffers=void 0,this._cubeMaps=void 0,this._texture=void 0,this._mipTextures=void 0,this._va=void 0,this._sp=void 0,this._maximumMipmapLevel=void 0,this._loading=!1,this._ready=!1,this._readyPromise=T["a"].defer()}Object(n["a"])(O.prototype,{url:{get:function(){return this._url}},texture:{get:function(){return this._texture}},maximumMipmapLevel:{get:function(){return this._maximumMipmapLevel}},ready:{get:function(){return this._ready}},readyPromise:{get:function(){return this._readyPromise.promise}}}),O.isSupported=function(t){return t.colorBufferHalfFloat&&t.halfFloatingPointTexture||t.floatingPointTexture&&t.colorBufferFloat};for(var S=new a["a"](1,0,0),j=new a["a"](0,0,1),A=new a["a"](-1,0,0),w=new a["a"](0,0,-1),F=new a["a"](0,1,0),M=new a["a"](0,-1,0),C=[F,A,j,M,S,F,w,F,F],L=C.length,E=new Float32Array(3*L),P=0,B=0;B<L;++B,P+=3)a["a"].pack(C[B],E,P);var D=new Float32Array([-1,1,-1,0,0,1,0,0,1,0,1,1,0,-1,-1,-1,1,-1]),N=new Uint16Array([0,1,2,2,3,1,7,6,1,3,6,1,2,5,4,3,4,2,4,8,6,3,4,6]);function R(t){var e=p["a"].createVertexBuffer({context:t,typedArray:D,usage:d["a"].STATIC_DRAW}),r=p["a"].createVertexBuffer({context:t,typedArray:E,usage:d["a"].STATIC_DRAW}),a=p["a"].createIndexBuffer({context:t,typedArray:N,usage:d["a"].STATIC_DRAW,indexDatatype:c["a"].UNSIGNED_SHORT}),o=[{index:0,vertexBuffer:e,componentsPerAttribute:2,componentDatatype:i["a"].FLOAT},{index:1,vertexBuffer:r,componentsPerAttribute:3,componentDatatype:i["a"].FLOAT}];return new x["a"]({context:t,attributes:o,indexBuffer:a})}function I(t){return function(){return t}}function Y(t){var e,r;t._va=t._va&&t._va.destroy(),t._sp=t._sp&&t._sp.destroy();var a=t._cubeMaps;if(Object(o["a"])(a))for(r=a.length,e=0;e<r;++e)a[e].destroy();var i=t._mipTextures;if(Object(o["a"])(i))for(r=i.length,e=0;e<r;++e)i[e].destroy();t._va=void 0,t._sp=void 0,t._cubeMaps=void 0,t._cubeMapBuffers=void 0,t._mipTextures=void 0}O.prototype.update=function(t){var e=t.context;if(O.isSupported(e)&&(Object(o["a"])(this._texture)&&Object(o["a"])(this._va)&&Y(this),!Object(o["a"])(this._texture))){if(!Object(o["a"])(this._texture)&&!this._loading){var r=e.textureCache.getTexture(this._url);if(Object(o["a"])(r))return Y(this),this._texture=r,this._maximumMipmapLevel=this._texture.maximumMipmapLevel,this._ready=!0,void this._readyPromise.resolve()}var a=this._cubeMapBuffers;if(!Object(o["a"])(a)&&!this._loading){var i=this;Object(u["a"])(this._url).then((function(t){i._cubeMapBuffers=t,i._loading=!1})).otherwise(this._readyPromise.reject),this._loading=!0}if(Object(o["a"])(this._cubeMapBuffers)){this._va=R(e),this._sp=m["a"].fromCache({context:e,vertexShaderSource:g["a"],fragmentShaderSource:b["a"],attributeLocations:{position:0,cubeMapCoordinates:1}});var n=Math.min(a.length,6);this._maximumMipmapLevel=n-1;for(var s=this._cubeMaps=new Array(n),c=this._mipTextures=new Array(n),p=2*a[0].positiveX.width,d={originalSize:function(){return p}},x=e.halfFloatingPointTexture?f["a"].HALF_FLOAT:f["a"].FLOAT,T=h["a"].RGBA,S=0;S<n;++S){var j=a[S].positiveY;a[S].positiveY=a[S].negativeY,a[S].negativeY=j;var A=s[S]=new _["a"]({context:e,source:a[S]}),w=2*s[S].width,F=c[S]=new v["a"]({context:e,width:w,height:w,pixelDatatype:x,pixelFormat:T}),M=new l["a"]({vertexArray:this._va,shaderProgram:this._sp,uniformMap:{cubeMap:I(A)},outputTexture:F,persists:!0,owner:this});t.commandList.push(M),d["texture"+S]=I(F)}this._texture=new v["a"]({context:e,width:1.5*p+2,height:p,pixelDatatype:x,pixelFormat:T}),this._texture.maximumMipmapLevel=this._maximumMipmapLevel,e.textureCache.addTexture(this._url,this._texture);var C=new l["a"]({fragmentShaderSource:y["a"],uniformMap:d,outputTexture:this._texture,persists:!1,owner:this});t.commandList.push(C),this._ready=!0,this._readyPromise.resolve()}}},O.prototype.isDestroyed=function(){return!1},O.prototype.destroy=function(){return Y(this),this._texture=this._texture&&this._texture.destroy(),Object(s["a"])(this)},e["a"]=O},"3a8e":function(t,e,r){"use strict";var a=r("535a"),i=r("9f1d"),o=r("0541"),n=r("f533"),s=r("2c4b"),c=r("d3f9"),u=r("9c89"),h=r("5cb0");function p(t){t=Object(a["a"])(t,a["a"].EMPTY_OBJECT);var e=Object(a["a"])(t.translucent,!0),r=Object(a["a"])(t.closed,!1),i=Object(a["a"])(t.flat,!1),o=i?u["a"]:s["a"],d=i?c["a"]:n["a"],l=i?p.FLAT_VERTEX_FORMAT:p.VERTEX_FORMAT;this.material=void 0,this.translucent=e,this._vertexShaderSource=Object(a["a"])(t.vertexShaderSource,o),this._fragmentShaderSource=Object(a["a"])(t.fragmentShaderSource,d),this._renderState=h["a"].getDefaultRenderState(e,r,t.renderState),this._closed=r,this._vertexFormat=l,this._flat=i,this._faceForward=Object(a["a"])(t.faceForward,!r)}Object(i["a"])(p.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}},vertexFormat:{get:function(){return this._vertexFormat}},flat:{get:function(){return this._flat}},faceForward:{get:function(){return this._faceForward}}}),p.VERTEX_FORMAT=o["a"].POSITION_AND_NORMAL,p.FLAT_VERTEX_FORMAT=o["a"].POSITION_ONLY,p.prototype.getFragmentShaderSource=h["a"].prototype.getFragmentShaderSource,p.prototype.isTranslucent=h["a"].prototype.isTranslucent,p.prototype.getRenderState=h["a"].prototype.getRenderState,e["a"]=p},"3d43":function(t,e,r){"use strict";var a=r("535a"),i=r("2f63"),o=r("9f1d"),n=r("7d62"),s=r("738d");function c(){this._length=0,this._collections={},this._collectionsArray=[],this.show=!0}Object(o["a"])(c.prototype,{length:{get:function(){return this._length}}}),c.prototype.add=function(t,e){e=Object(a["a"])(e,0);var r=this._collections[e];if(!Object(i["a"])(r)){r=new s["a"]({destroyPrimitives:!1}),r._zIndex=e,this._collections[e]=r;var o=this._collectionsArray,n=0;while(n<o.length&&o[n]._zIndex<e)n++;o.splice(n,0,r)}return r.add(t),this._length++,t._zIndex=e,t},c.prototype.set=function(t,e){return e===t._zIndex?t:(this.remove(t,!0),this.add(t,e),t)},c.prototype.remove=function(t,e){if(this.contains(t)){var r,a=t._zIndex,i=this._collections[a];return r=e?i.remove(t):i.removeAndDestroy(t),r&&this._length--,0===i.length&&(this._collectionsArray.splice(this._collectionsArray.indexOf(i),1),this._collections[a]=void 0,i.destroy()),r}return!1},c.prototype.removeAll=function(){for(var t=this._collectionsArray,e=0;e<t.length;e++){var r=t[e];r.destroyPrimitives=!0,r.destroy()}this._collections={},this._collectionsArray=[],this._length=0},c.prototype.contains=function(t){if(!Object(i["a"])(t))return!1;var e=this._collections[t._zIndex];return Object(i["a"])(e)&&e.contains(t)},c.prototype.update=function(t){if(this.show)for(var e=this._collectionsArray,r=0;r<e.length;r++)e[r].update(t)},c.prototype.isDestroyed=function(){return!1},c.prototype.destroy=function(){return this.removeAll(),Object(n["a"])(this)},e["a"]=c},"9ccd":function(t,e,r){"use strict";var a=r("8dfe"),i=r("535a"),o=r("2f63"),n=r("eace"),s=r("d4ed"),c=r("d3a0"),u=r("e288"),h=new a["a"]("MapQuest, Open Street Map and contributors, CC-BY-SA");function p(t){t=Object(i["a"])(t,i["a"].EMPTY_OBJECT);var e=s["a"].createIfNeeded(Object(i["a"])(t.url,"https://a.tile.openstreetmap.org/"));e.appendForwardSlash(),e.url+="{z}/{x}/{y}."+Object(i["a"])(t.fileExtension,"png");var r=new c["a"]({ellipsoid:t.ellipsoid}),o=256,p=256,d=Object(i["a"])(t.minimumLevel,0),l=t.maximumLevel,_=Object(i["a"])(t.rectangle,r.rectangle),f=r.positionToTileXY(n["a"].southwest(_),d),m=r.positionToTileXY(n["a"].northeast(_),d),v=(Math.abs(m.x-f.x),Math.abs(m.y-f.y),Object(i["a"])(t.credit,h));"string"===typeof v&&(v=new a["a"](v)),u["a"].call(this,{url:e,credit:v,tilingScheme:r,tileWidth:o,tileHeight:p,minimumLevel:d,maximumLevel:l,rectangle:_})}Object(o["a"])(Object.create)&&(p.prototype=Object.create(u["a"].prototype),p.prototype.constructor=p),e["a"]=p}}]);