(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~a57d3e3a"],{"7f9b":function(t,e,a){"use strict";var n=a("be18"),r=a("535a"),i=a("2f63"),o=a("66bf");function c(t,e,a){this.minimum=n["a"].clone(Object(r["a"])(t,n["a"].ZERO)),this.maximum=n["a"].clone(Object(r["a"])(e,n["a"].ZERO)),a=Object(i["a"])(a)?n["a"].clone(a):n["a"].midpoint(this.minimum,this.maximum,new n["a"]),this.center=a}c.fromPoints=function(t,e){if(Object(i["a"])(e)||(e=new c),!Object(i["a"])(t)||0===t.length)return e.minimum=n["a"].clone(n["a"].ZERO,e.minimum),e.maximum=n["a"].clone(n["a"].ZERO,e.maximum),e.center=n["a"].clone(n["a"].ZERO,e.center),e;for(var a=t[0].x,r=t[0].y,o=t[0].z,u=t[0].x,s=t[0].y,m=t[0].z,h=t.length,f=1;f<h;f++){var l=t[f],x=l.x,d=l.y,y=l.z;a=Math.min(x,a),u=Math.max(x,u),r=Math.min(d,r),s=Math.max(d,s),o=Math.min(y,o),m=Math.max(y,m)}var b=e.minimum;b.x=a,b.y=r,b.z=o;var g=e.maximum;return g.x=u,g.y=s,g.z=m,e.center=n["a"].midpoint(b,g,e.center),e},c.clone=function(t,e){if(Object(i["a"])(t))return Object(i["a"])(e)?(e.minimum=n["a"].clone(t.minimum,e.minimum),e.maximum=n["a"].clone(t.maximum,e.maximum),e.center=n["a"].clone(t.center,e.center),e):new c(t.minimum,t.maximum,t.center)},c.equals=function(t,e){return t===e||Object(i["a"])(t)&&Object(i["a"])(e)&&n["a"].equals(t.center,e.center)&&n["a"].equals(t.minimum,e.minimum)&&n["a"].equals(t.maximum,e.maximum)};var u=new n["a"];c.intersectPlane=function(t,e){u=n["a"].subtract(t.maximum,t.minimum,u);var a=n["a"].multiplyByScalar(u,.5,u),r=e.normal,i=a.x*Math.abs(r.x)+a.y*Math.abs(r.y)+a.z*Math.abs(r.z),c=n["a"].dot(t.center,r)+e.distance;return c-i>0?o["a"].INSIDE:c+i<0?o["a"].OUTSIDE:o["a"].INTERSECTING},c.prototype.clone=function(t){return c.clone(this,t)},c.prototype.intersectPlane=function(t){return c.intersectPlane(this,t)},c.prototype.equals=function(t){return c.equals(this,t)},e["a"]=c},9201:function(t,e,a){"use strict";var n=a("0e25"),r={NONE:0,GEODESIC:1,RHUMB:2};e["a"]=Object(n["a"])(r)},"933b":function(t,e,a){"use strict";var n=a("2f63"),r=a("9f1d");function i(){this._array=[],this._hash={}}Object(r["a"])(i.prototype,{length:{get:function(){return this._array.length}},values:{get:function(){return this._array}}}),i.prototype.contains=function(t){return Object(n["a"])(this._hash[t])},i.prototype.set=function(t,e){var a=this._hash[t];e!==a&&(this.remove(t),this._hash[t]=e,this._array.push(e))},i.prototype.get=function(t){return this._hash[t]},i.prototype.remove=function(t){var e=this._hash[t],a=Object(n["a"])(e);if(a){var r=this._array;r.splice(r.indexOf(e),1),delete this._hash[t]}return a},i.prototype.removeAll=function(){var t=this._array;t.length>0&&(this._hash={},t.length=0)},e["a"]=i},c8d1:function(t,e,a){"use strict";var n=a("670c"),r=a("be18"),i=a("2f63"),o=a("93da"),c=1/256,u=256,s={octEncodeInRange:function(t,e,a){if(a.x=t.x/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),a.y=t.y/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),t.z<0){var n=a.x,r=a.y;a.x=(1-Math.abs(r))*o["a"].signNotZero(n),a.y=(1-Math.abs(n))*o["a"].signNotZero(r)}return a.x=o["a"].toSNorm(a.x,e),a.y=o["a"].toSNorm(a.y,e),a},octEncode:function(t,e){return s.octEncodeInRange(t,255,e)}},m=new n["a"],h=new Uint8Array(1);function f(t){return h[0]=t,h[0]}s.octEncodeToCartesian4=function(t,e){return s.octEncodeInRange(t,65535,m),e.x=f(m.x*c),e.y=f(m.x),e.z=f(m.y*c),e.w=f(m.y),e},s.octDecodeInRange=function(t,e,a,n){if(n.x=o["a"].fromSNorm(t,a),n.y=o["a"].fromSNorm(e,a),n.z=1-(Math.abs(n.x)+Math.abs(n.y)),n.z<0){var i=n.x;n.x=(1-Math.abs(n.y))*o["a"].signNotZero(i),n.y=(1-Math.abs(i))*o["a"].signNotZero(n.y)}return r["a"].normalize(n,n)},s.octDecode=function(t,e,a){return s.octDecodeInRange(t,e,255,a)},s.octDecodeFromCartesian4=function(t,e){var a=t.x,n=t.y,r=t.z,i=t.w,o=a*u+n,c=r*u+i;return s.octDecodeInRange(o,c,65535,e)},s.octPackFloat=function(t){return 256*t.x+t.y};var l=new n["a"];function x(t){return t>>1^-(1&t)}s.octEncodeFloat=function(t){return s.octEncode(t,l),s.octPackFloat(l)},s.octDecodeFloat=function(t,e){var a=t/256,n=Math.floor(a),r=256*(a-n);return s.octDecode(n,r,e)},s.octPack=function(t,e,a,n){var r=s.octEncodeFloat(t),i=s.octEncodeFloat(e),o=s.octEncode(a,l);return n.x=65536*o.x+r,n.y=65536*o.y+i,n},s.octUnpack=function(t,e,a,n){var r=t.x/65536,i=Math.floor(r),o=65536*(r-i);r=t.y/65536;var c=Math.floor(r),u=65536*(r-c);s.octDecodeFloat(o,e),s.octDecodeFloat(u,a),s.octDecode(i,c,n)},s.compressTextureCoordinates=function(t){var e=4095*t.x|0,a=4095*t.y|0;return 4096*e+a},s.decompressTextureCoordinates=function(t,e){var a=t/4096,n=Math.floor(a);return e.x=n/4095,e.y=(t-4096*n)/4095,e},s.zigZagDeltaDecode=function(t,e,a){for(var n=t.length,r=0,o=0,c=0,u=0;u<n;++u)r+=x(t[u]),o+=x(e[u]),t[u]=r,e[u]=o,Object(i["a"])(a)&&(c+=x(a[u]),a[u]=c)},e["a"]=s},dd06:function(t,e,a){"use strict";var n=a("cef5"),r=a("7229"),i=a("670c"),o=a("be18"),c=a("bef8"),u=a("535a"),s=a("2f63"),m=a("9f1d"),h=a("c52f"),f=a("5d5c"),l=a("eace"),x=a("d4ed"),d=new o["a"],y=new o["a"],b=new c["a"],g=new o["a"],v=new o["a"],M=new n["a"],p=new f["a"],O=[new c["a"],new c["a"],new c["a"],new c["a"]],_=new i["a"],w={};function j(t){c["a"].fromRadians(t.east,t.north,0,O[0]),c["a"].fromRadians(t.west,t.north,0,O[1]),c["a"].fromRadians(t.east,t.south,0,O[2]),c["a"].fromRadians(t.west,t.south,0,O[3]);var e,a=0,n=0,r=0,i=0,o=w._terrainHeightsMaxLevel;for(e=0;e<=o;++e){for(var u=!1,s=0;s<4;++s){var m=O[s];if(p.positionToTileXY(m,e,_),0===s)r=_.x,i=_.y;else if(r!==_.x||i!==_.y){u=!0;break}}if(u)break;a=r,n=i}if(0!==e)return{x:a,y:n,level:e>o?o:e-1}}w.initialize=function(){var t=w._initPromise;return Object(s["a"])(t)?t:(t=x["a"].fetchJson(Object(r["a"])("Assets/approximateTerrainHeights.json")).then((function(t){w._terrainHeights=t})),w._initPromise=t,t)},w.getMinimumMaximumHeights=function(t,e){e=Object(u["a"])(e,h["a"].WGS84);var a=j(t),n=w._defaultMinTerrainHeight,r=w._defaultMaxTerrainHeight;if(Object(s["a"])(a)){var i=a.level+"-"+a.x+"-"+a.y,c=w._terrainHeights[i];Object(s["a"])(c)&&(n=c[0],r=c[1]),e.cartographicToCartesian(l["a"].northeast(t,b),d),e.cartographicToCartesian(l["a"].southwest(t,b),y),o["a"].midpoint(y,d,g);var m=e.scaleToGeodeticSurface(g,v);if(Object(s["a"])(m)){var f=o["a"].distance(g,m);n=Math.min(n,-f)}else n=w._defaultMinTerrainHeight}return n=Math.max(w._defaultMinTerrainHeight,n),{minimumTerrainHeight:n,maximumTerrainHeight:r}},w.getBoundingSphere=function(t,e){e=Object(u["a"])(e,h["a"].WGS84);var a=j(t),r=w._defaultMaxTerrainHeight;if(Object(s["a"])(a)){var i=a.level+"-"+a.x+"-"+a.y,o=w._terrainHeights[i];Object(s["a"])(o)&&(r=o[1])}var c=n["a"].fromRectangle3D(t,e,0);return n["a"].fromRectangle3D(t,e,r,M),n["a"].union(c,M,c)},w._terrainHeightsMaxLevel=6,w._defaultMaxTerrainHeight=9e3,w._defaultMinTerrainHeight=-1e5,w._terrainHeights=void 0,w._initPromise=void 0,Object(m["a"])(w,{initialized:{get:function(){return Object(s["a"])(w._terrainHeights)}}}),e["a"]=w}}]);