(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~cfef56d2"],{"0646":function(e,t,i){"use strict";var n=i("1518"),r=i("93da"),s=i("b071"),a={};function h(e,t,i,a){var h=e*e,o=t-3*h/8,c=i-t*e/2+h*e/8,u=a-i*e/4+t*h/16-3*h*h/256,d=n["a"].computeRealRoots(1,2*o,o*o-4*u,-c*c);if(d.length>0){var g=-e/4,l=d[d.length-1];if(Math.abs(l)<r["a"].EPSILON14){var m=s["a"].computeRealRoots(1,o,u);if(2===m.length){var _,v=m[0],I=m[1];if(v>=0&&I>=0){var f=Math.sqrt(v),p=Math.sqrt(I);return[g-p,g-f,g+f,g+p]}if(v>=0&&I<0)return _=Math.sqrt(v),[g-_,g+_];if(v<0&&I>=0)return _=Math.sqrt(I),[g-_,g+_]}return[]}if(l>0){var S=Math.sqrt(l),H=(o+l-c/S)/2,k=(o+l+c/S)/2,x=s["a"].computeRealRoots(1,S,H),b=s["a"].computeRealRoots(1,-S,k);return 0!==x.length?(x[0]+=g,x[1]+=g,0!==b.length?(b[0]+=g,b[1]+=g,x[1]<=b[0]?[x[0],x[1],b[0],b[1]]:b[1]<=x[0]?[b[0],b[1],x[0],x[1]]:x[0]>=b[0]&&x[1]<=b[1]?[b[0],x[0],x[1],b[1]]:b[0]>=x[0]&&b[1]<=x[1]?[x[0],b[0],b[1],x[1]]:x[0]>b[0]&&x[0]<b[1]?[b[0],x[0],b[1],x[1]]:[x[0],b[0],x[1],b[1]]):x):0!==b.length?(b[0]+=g,b[1]+=g,b):[]}}return[]}function o(e,t,i,a){var h=i*i,o=t*t,c=e*e,u=-2*t,d=i*e+o-4*a,g=c*a-i*t*e+h,l=n["a"].computeRealRoots(1,u,d,g);if(l.length>0){var m,_,v,I,f,p,S=l[0],H=t-S,k=H*H,x=e/2,b=H/2,T=k-4*a,w=k+4*Math.abs(a),N=c-4*S,M=c+4*Math.abs(S);if(S<0||T*M<N*w){var R=Math.sqrt(N);m=R/2,_=0===R?0:(e*b-i)/R}else{var y=Math.sqrt(T);m=0===y?0:(e*b-i)/y,_=y/2}0===x&&0===m?(v=0,I=0):r["a"].sign(x)===r["a"].sign(m)?(v=x+m,I=S/v):(I=x-m,v=S/I),0===b&&0===_?(f=0,p=0):r["a"].sign(b)===r["a"].sign(_)?(f=b+_,p=a/f):(p=b-_,f=a/p);var O=s["a"].computeRealRoots(1,v,f),E=s["a"].computeRealRoots(1,I,p);if(0!==O.length)return 0!==E.length?O[1]<=E[0]?[O[0],O[1],E[0],E[1]]:E[1]<=O[0]?[E[0],E[1],O[0],O[1]]:O[0]>=E[0]&&O[1]<=E[1]?[E[0],O[0],O[1],E[1]]:E[0]>=O[0]&&E[1]<=O[1]?[O[0],E[0],E[1],O[1]]:O[0]>E[0]&&O[0]<E[1]?[E[0],O[0],E[1],O[1]]:[O[0],E[0],O[1],E[1]]:O;if(0!==E.length)return E}return[]}a.computeDiscriminant=function(e,t,i,n,r){var s=e*e,a=s*e,h=t*t,o=h*t,c=i*i,u=c*i,d=n*n,g=d*n,l=r*r,m=l*r,_=h*c*d-4*o*g-4*e*u*d+18*e*t*i*g-27*s*d*d+256*a*m+r*(18*o*i*n-4*h*u+16*e*c*c-80*e*t*c*n-6*e*h*d+144*s*i*d)+l*(144*e*h*i-27*h*h-128*s*c-192*s*t*n);return _},a.computeRealRoots=function(e,t,i,s,a){if(Math.abs(e)<r["a"].EPSILON15)return n["a"].computeRealRoots(t,i,s,a);var c=t/e,u=i/e,d=s/e,g=a/e,l=c<0?1:0;switch(l+=u<0?l+1:l,l+=d<0?l+1:l,l+=g<0?l+1:l,l){case 0:return h(c,u,d,g);case 1:return o(c,u,d,g);case 2:return o(c,u,d,g);case 3:return h(c,u,d,g);case 4:return h(c,u,d,g);case 5:return o(c,u,d,g);case 6:return h(c,u,d,g);case 7:return h(c,u,d,g);case 8:return o(c,u,d,g);case 9:return h(c,u,d,g);case 10:return h(c,u,d,g);case 11:return o(c,u,d,g);case 12:return h(c,u,d,g);case 13:return h(c,u,d,g);case 14:return h(c,u,d,g);case 15:return h(c,u,d,g);default:return}},t["a"]=a},"1b8d":function(e,t,i){"use strict";var n=i("0e25"),r=i("daa2"),s={POINTS:r["a"].POINTS,LINES:r["a"].LINES,LINE_LOOP:r["a"].LINE_LOOP,LINE_STRIP:r["a"].LINE_STRIP,TRIANGLES:r["a"].TRIANGLES,TRIANGLE_STRIP:r["a"].TRIANGLE_STRIP,TRIANGLE_FAN:r["a"].TRIANGLE_FAN,validate:function(e){return e===s.POINTS||e===s.LINES||e===s.LINE_LOOP||e===s.LINE_STRIP||e===s.TRIANGLES||e===s.TRIANGLE_STRIP||e===s.TRIANGLE_FAN}};t["a"]=Object(n["a"])(s)},b071:function(e,t,i){"use strict";var n=i("93da"),r={};function s(e,t,i){var r=e+t;return n["a"].sign(e)!==n["a"].sign(t)&&Math.abs(r/Math.max(Math.abs(e),Math.abs(t)))<i?0:r}r.computeDiscriminant=function(e,t,i){var n=t*t-4*e*i;return n},r.computeRealRoots=function(e,t,i){var r;if(0===e)return 0===t?[]:[-i/t];if(0===t){if(0===i)return[0,0];var a=Math.abs(i),h=Math.abs(e);if(a<h&&a/h<n["a"].EPSILON14)return[0,0];if(a>h&&h/a<n["a"].EPSILON14)return[];if(r=-i/e,r<0)return[];var o=Math.sqrt(r);return[-o,o]}if(0===i)return r=-t/e,r<0?[r,0]:[0,r];var c=t*t,u=4*e*i,d=s(c,-u,n["a"].EPSILON14);if(d<0)return[];var g=-.5*s(t,n["a"].sign(t)*Math.sqrt(d),n["a"].EPSILON14);return t>0?[g/e,i/g]:[i/g,g/e]},t["a"]=r},d0ea:function(e,t,i){"use strict";var n=i("a58e"),r=i("cef5"),s=i("670c"),a=i("be18"),h=i("535a"),o=i("2f63"),c=i("9f1d"),u=i("0123"),d=i("c8f9"),g=i("93da"),l=i("78e5"),m=i("6a29"),_=i("0769"),v=i("4261");function I(e){this._quantizedVertices=e.quantizedVertices,this._encodedNormals=e.encodedNormals,this._indices=e.indices,this._minimumHeight=e.minimumHeight,this._maximumHeight=e.maximumHeight,this._boundingSphere=e.boundingSphere,this._orientedBoundingBox=e.orientedBoundingBox,this._horizonOcclusionPoint=e.horizonOcclusionPoint,this._credits=e.credits;var t=this._quantizedVertices.length/3,i=this._uValues=this._quantizedVertices.subarray(0,t),n=this._vValues=this._quantizedVertices.subarray(t,2*t);function r(e,t){return n[e]-n[t]}function s(e,t){return i[e]-i[t]}this._heightValues=this._quantizedVertices.subarray(2*t,3*t),this._westIndices=p(e.westIndices,r,t),this._southIndices=p(e.southIndices,s,t),this._eastIndices=p(e.eastIndices,r,t),this._northIndices=p(e.northIndices,s,t),this._westSkirtHeight=e.westSkirtHeight,this._southSkirtHeight=e.southSkirtHeight,this._eastSkirtHeight=e.eastSkirtHeight,this._northSkirtHeight=e.northSkirtHeight,this._childTileMask=Object(h["a"])(e.childTileMask,15),this._createdByUpsampling=Object(h["a"])(e.createdByUpsampling,!1),this._waterMask=e.waterMask,this._mesh=void 0}Object(c["a"])(I.prototype,{credits:{get:function(){return this._credits}},waterMask:{get:function(){return this._waterMask}},childTileMask:{get:function(){return this._childTileMask}},canUpsample:{get:function(){return Object(o["a"])(this._mesh)}}});var f=[];function p(e,t,i){f.length=e.length;for(var n=!1,r=0,s=e.length;r<s;++r)f[r]=e[r],n=n||r>0&&t(e[r-1],e[r])>0;return n?(f.sort(t),u["a"].createTypedArray(i,f)):e}var S=new m["a"]("createVerticesFromQuantizedTerrainMesh");I.prototype.createMesh=function(e,t,i,s,c){var d=e.ellipsoid,g=e.tileXYToRectangle(t,i,s);c=Object(h["a"])(c,1);var m=S.scheduleTask({minimumHeight:this._minimumHeight,maximumHeight:this._maximumHeight,quantizedVertices:this._quantizedVertices,octEncodedNormals:this._encodedNormals,includeWebMercatorT:!0,indices:this._indices,westIndices:this._westIndices,southIndices:this._southIndices,eastIndices:this._eastIndices,northIndices:this._northIndices,westSkirtHeight:this._westSkirtHeight,southSkirtHeight:this._southSkirtHeight,eastSkirtHeight:this._eastSkirtHeight,northSkirtHeight:this._northSkirtHeight,rectangle:g,relativeToCenter:this._boundingSphere.center,ellipsoid:d,exaggeration:c});if(Object(o["a"])(m)){var I=this;return Object(n["a"])(m,(function(e){var t=I._quantizedVertices.length/3;t+=I._westIndices.length+I._southIndices.length+I._eastIndices.length+I._northIndices.length;var i=u["a"].createTypedArray(t,e.indices),n=new Float32Array(e.vertices),s=e.center,o=e.minimumHeight,d=e.maximumHeight,g=Object(h["a"])(r["a"].clone(e.boundingSphere),I._boundingSphere),m=Object(h["a"])(l["a"].clone(e.orientedBoundingBox),I._orientedBoundingBox),f=a["a"].clone(I._horizonOcclusionPoint),p=e.vertexStride,S=_["a"].clone(e.encoding);return I._skirtIndex=e.skirtIndex,I._vertexCountWithoutSkirts=I._quantizedVertices.length/3,I._mesh=new v["a"](s,n,i,o,d,g,f,p,m,S,c,e.westIndicesSouthToNorth,e.southIndicesEastToWest,e.eastIndicesNorthToSouth,e.northIndicesWestToEast),I._quantizedVertices=void 0,I._encodedNormals=void 0,I._indices=void 0,I._uValues=void 0,I._vValues=void 0,I._heightValues=void 0,I._westIndices=void 0,I._southIndices=void 0,I._eastIndices=void 0,I._northIndices=void 0,I._mesh}))}};var H=new m["a"]("upsampleQuantizedTerrainMesh");I.prototype.upsample=function(e,t,i,s,h,c,d){var g=this._mesh;if(Object(o["a"])(this._mesh)){var m=2*t!==h,_=2*i===c,v=e.ellipsoid,f=e.tileXYToRectangle(h,c,d),p=H.scheduleTask({vertices:g.vertices,vertexCountWithoutSkirts:this._vertexCountWithoutSkirts,indices:g.indices,skirtIndex:this._skirtIndex,encoding:g.encoding,minimumHeight:this._minimumHeight,maximumHeight:this._maximumHeight,isEastChild:m,isNorthChild:_,childRectangle:f,ellipsoid:v,exaggeration:g.exaggeration});if(Object(o["a"])(p)){var S=Math.min(this._westSkirtHeight,this._eastSkirtHeight);S=Math.min(S,this._southSkirtHeight),S=Math.min(S,this._northSkirtHeight);var k=m?.5*S:this._westSkirtHeight,x=_?.5*S:this._southSkirtHeight,b=m?this._eastSkirtHeight:.5*S,T=_?this._northSkirtHeight:.5*S,w=this._credits;return Object(n["a"])(p).then((function(e){var t,i=new Uint16Array(e.vertices),n=u["a"].createTypedArray(i.length/3,e.indices);return Object(o["a"])(e.encodedNormals)&&(t=new Uint8Array(e.encodedNormals)),new I({quantizedVertices:i,indices:n,encodedNormals:t,minimumHeight:e.minimumHeight,maximumHeight:e.maximumHeight,boundingSphere:r["a"].clone(e.boundingSphere),orientedBoundingBox:l["a"].clone(e.orientedBoundingBox),horizonOcclusionPoint:a["a"].clone(e.horizonOcclusionPoint),westIndices:e.westIndices,southIndices:e.southIndices,eastIndices:e.eastIndices,northIndices:e.northIndices,westSkirtHeight:k,southSkirtHeight:x,eastSkirtHeight:b,northSkirtHeight:T,childTileMask:0,credits:w,createdByUpsampling:!0})}))}}};var k=32767,x=new a["a"];function b(e,t,i,n,r,s,a,h){var o=Math.min(i,r,a),c=Math.max(i,r,a),u=Math.min(n,s,h),d=Math.max(n,s,h);return e>=o&&e<=c&&t>=u&&t<=d}I.prototype.interpolateHeight=function(e,t,i){var n=g["a"].clamp((t-e.west)/e.width,0,1);n*=k;var r=g["a"].clamp((i-e.south)/e.height,0,1);return r*=k,Object(o["a"])(this._mesh)?M(this,n,r):R(this,n,r)};var T=new s["a"],w=new s["a"],N=new s["a"];function M(e,t,i){for(var n=e._mesh,r=n.vertices,s=n.encoding,a=n.indices,h=0,o=a.length;h<o;h+=3){var c=a[h],u=a[h+1],g=a[h+2],l=s.decodeTextureCoordinates(r,c,T),m=s.decodeTextureCoordinates(r,u,w),_=s.decodeTextureCoordinates(r,g,N);if(b(t,i,l.x,l.y,m.x,m.y,_.x,_.y)){var v=d["a"].computeBarycentricCoordinates(t,i,l.x,l.y,m.x,m.y,_.x,_.y,x);if(v.x>=-1e-15&&v.y>=-1e-15&&v.z>=-1e-15){var I=s.decodeHeight(r,c),f=s.decodeHeight(r,u),p=s.decodeHeight(r,g);return v.x*I+v.y*f+v.z*p}}}}function R(e,t,i){for(var n=e._uValues,r=e._vValues,s=e._heightValues,a=e._indices,h=0,o=a.length;h<o;h+=3){var c=a[h],u=a[h+1],l=a[h+2],m=n[c],_=n[u],v=n[l],I=r[c],f=r[u],p=r[l];if(b(t,i,m,I,_,f,v,p)){var S=d["a"].computeBarycentricCoordinates(t,i,m,I,_,f,v,p,x);if(S.x>=-1e-15&&S.y>=-1e-15&&S.z>=-1e-15){var H=S.x*s[c]+S.y*s[u]+S.z*s[l];return g["a"].lerp(e._minimumHeight,e._maximumHeight,H/k)}}}}I.prototype.isChildAvailable=function(e,t,i,n){var r=2;return i!==2*e&&++r,n!==2*t&&(r-=2),0!==(this._childTileMask&1<<r)},I.prototype.wasCreatedByUpsampling=function(){return this._createdByUpsampling},t["a"]=I}}]);