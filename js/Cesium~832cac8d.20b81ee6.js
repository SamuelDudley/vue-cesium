(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~832cac8d"],{"091c":function(e,t,i){"use strict";var a=i("933b"),o=i("be18"),n=i("2f63"),s=i("7d62"),r=i("5ed2"),l=i("df07"),c=i("52f0"),d=i("7749"),h=i("ea72"),u=i("f806"),m=i("4082"),p=i("a307"),f=i("fef5"),_=i("2bbe"),b=i("40b2"),g=i("ea07"),O=i("1142"),v=i("2198"),j=i("d607"),y=i("a435"),C=60,w=1,S=new h["a"],T=new h["a"],x=new h["a"];function D(e){this.entity=e,this.polyline=void 0,this.index=void 0,this.updater=void 0}function A(e,t,i,a,o,s,l,c,d){var h,u=c;h=e.getValueInReferenceFrame(t,s,d[u]),Object(n["a"])(h)&&(d[u++]=h);var m,p,f,_=!Object(n["a"])(o)||r["a"].lessThanOrEquals(o,t)||r["a"].greaterThanOrEquals(o,i),b=0,g=a.length,O=a[b],v=i,j=!1;while(b<g){if(!_&&r["a"].greaterThanOrEquals(O,o)&&(h=e.getValueInReferenceFrame(o,s,d[u]),Object(n["a"])(h)&&(d[u++]=h),_=!0),r["a"].greaterThan(O,t)&&r["a"].lessThan(O,v)&&!O.equals(o)&&(h=e.getValueInReferenceFrame(O,s,d[u]),Object(n["a"])(h)&&(d[u++]=h)),b<g-1){if(l>0&&!j){var y=a[b+1],C=r["a"].secondsDifference(y,O);j=C>l,j&&(m=Math.ceil(C/l),p=0,f=C/Math.max(m,2),m=Math.max(m-1,1))}if(j&&p<m){O=r["a"].addSeconds(O,f,new r["a"]),p++;continue}}j=!1,b++,O=a[b]}return h=e.getValueInReferenceFrame(i,s,d[u]),Object(n["a"])(h)&&(d[u++]=h),u}function V(e,t,i,a,o,s,l,c){var d,h=0,u=l,m=t,p=Math.max(s,60),f=!Object(n["a"])(a)||r["a"].lessThanOrEquals(a,t)||r["a"].greaterThanOrEquals(a,i);while(r["a"].lessThan(m,i))!f&&r["a"].greaterThanOrEquals(m,a)&&(f=!0,d=e.getValueInReferenceFrame(a,o,c[u]),Object(n["a"])(d)&&(c[u]=d,u++)),d=e.getValueInReferenceFrame(m,o,c[u]),Object(n["a"])(d)&&(c[u]=d,u++),h++,m=r["a"].addSeconds(t,p*h,new r["a"]);return d=e.getValueInReferenceFrame(i,o,c[u]),Object(n["a"])(d)&&(c[u]=d,u++),u}function P(e,t,i,a,o,s,l,c){x.start=t,x.stop=i;for(var d=l,u=e.intervals,m=0;m<u.length;m++){var p=u.get(m);if(!h["a"].intersect(p,x,S).isEmpty){var f=p.start;p.isStartIncluded||(f=p.isStopIncluded?p.stop:r["a"].addSeconds(p.start,r["a"].secondsDifference(p.stop,p.start)/2,new r["a"]));var _=e.getValueInReferenceFrame(f,o,c[d]);Object(n["a"])(_)&&(c[d]=_,d++)}}return d}function B(e,t,i,a,o,s,r,l){var c=e.getValueInReferenceFrame(t,o,l[r]);return Object(n["a"])(c)&&(l[r++]=c),r}function E(e,t,i,a,o,n,s,l){T.start=t,T.stop=i;for(var c=s,d=e.intervals,u=0;u<d.length;u++){var m=d.get(u);if(!h["a"].intersect(m,T,S).isEmpty){var p=m.start,f=m.stop,_=t;r["a"].greaterThan(p,_)&&(_=p);var b=i;r["a"].lessThan(f,b)&&(b=f),c=F(m.data,_,b,a,o,n,c,l)}}return c}function F(e,t,i,a,o,n,s,r){while(e instanceof O["a"])e=e.resolvedProperty;if(e instanceof v["a"]){var l=e._property._times;s=A(e,t,i,l,a,o,n,s,r)}else s=e instanceof f["a"]?E(e,t,i,a,o,n,s,r):e instanceof y["a"]?P(e,t,i,a,o,n,s,r):e instanceof _["a"]||e instanceof j["a"]&&g["a"].isConstant(e)?B(e,t,i,a,o,n,s,r):V(e,t,i,a,o,n,s,r);return s}function L(e,t,i,a,o,s,r){Object(n["a"])(r)||(r=[]);var l=F(e,t,i,a,o,s,0,r);return r.length=l,r}var M=new l["a"];function R(e,t){this._unusedIndexes=[],this._polylineCollection=new m["a"],this._scene=e,this._referenceFrame=t,e.primitives.add(this._polylineCollection)}function I(e,t){t.collectionChanged.addEventListener(I.prototype._onCollectionChanged,this),this._scene=e,this._updaters={},this._entityCollection=t,this._items=new a["a"],this._onCollectionChanged(t,t.values,[],[])}R.prototype.update=function(e){if(this._referenceFrame===d["a"].INERTIAL){var t=u["a"].computeIcrfToFixedMatrix(e,M);Object(n["a"])(t)||(t=u["a"].computeTemeToPseudoFixedMatrix(e,M)),c["a"].fromRotationTranslation(t,o["a"].ZERO,this._polylineCollection.modelMatrix)}},R.prototype.updateObject=function(e,t){var i,a,o=t.entity,s=o._path,l=o._position,c=s._show,d=t.polyline,h=o.isShowing&&(!Object(n["a"])(c)||c.getValue(e));if(h){var u=g["a"].getValueOrUndefined(s._leadTime,e),m=g["a"].getValueOrUndefined(s._trailTime,e),p=o._availability,f=Object(n["a"])(p),_=Object(n["a"])(u),O=Object(n["a"])(m);if(h=f||_&&O,h){if(O&&(i=r["a"].addSeconds(e,-m,new r["a"])),_&&(a=r["a"].addSeconds(e,u,new r["a"])),f){var v=p.start,j=p.stop;O&&!r["a"].greaterThan(v,i)||(i=v),_&&!r["a"].lessThan(j,a)||(a=j)}h=r["a"].lessThan(i,a)}}if(h){if(!Object(n["a"])(d)){var y=this._unusedIndexes,S=y.length;if(S>0){var T=y.pop();d=this._polylineCollection.get(T),t.index=T}else t.index=this._polylineCollection.length,d=this._polylineCollection.add();d.id=o,t.polyline=d}var x=g["a"].getValueOrDefault(s._resolution,e,C);d.show=!0,d.positions=L(l,i,a,e,this._referenceFrame,x,d.positions.slice()),d.material=b["a"].getValue(e,s._material,d.material),d.width=g["a"].getValueOrDefault(s._width,e,w),d.distanceDisplayCondition=g["a"].getValueOrUndefined(s._distanceDisplayCondition,e,d.distanceDisplayCondition)}else Object(n["a"])(d)&&(this._unusedIndexes.push(t.index),t.polyline=void 0,d.show=!1,t.index=void 0)},R.prototype.removeObject=function(e){var t=e.polyline;Object(n["a"])(t)&&(this._unusedIndexes.push(e.index),e.polyline=void 0,t.show=!1,t.id=void 0,e.index=void 0)},R.prototype.destroy=function(){return this._scene.primitives.remove(this._polylineCollection),Object(s["a"])(this)},I.prototype.update=function(e){var t=this._updaters;for(var i in t)t.hasOwnProperty(i)&&t[i].update(e);var a=this._items.values;if(0===a.length&&Object(n["a"])(this._updaters)&&Object.keys(this._updaters).length>0){for(var o in t)t.hasOwnProperty(o)&&t[o].destroy();this._updaters={}}for(var s=0,r=a.length;s<r;s++){var l=a[s],c=l.entity,h=c._position,u=l.updater,m=d["a"].FIXED;this._scene.mode===p["a"].SCENE3D&&(m=h.referenceFrame);var f=this._updaters[m];u===f&&Object(n["a"])(f)?f.updateObject(e,l):(Object(n["a"])(u)&&u.removeObject(l),Object(n["a"])(f)||(f=new R(this._scene,m),f.update(e),this._updaters[m]=f),l.updater=f,Object(n["a"])(f)&&f.updateObject(e,l))}return!0},I.prototype.isDestroyed=function(){return!1},I.prototype.destroy=function(){this._entityCollection.collectionChanged.removeEventListener(I.prototype._onCollectionChanged,this);var e=this._updaters;for(var t in e)e.hasOwnProperty(t)&&e[t].destroy();return Object(s["a"])(this)},I.prototype._onCollectionChanged=function(e,t,i,a){var o,s,r,l=this._items;for(o=t.length-1;o>-1;o--)s=t[o],Object(n["a"])(s._path)&&Object(n["a"])(s._position)&&l.set(s.id,new D(s));for(o=a.length-1;o>-1;o--)s=a[o],Object(n["a"])(s._path)&&Object(n["a"])(s._position)?l.contains(s.id)||l.set(s.id,new D(s)):(r=l.get(s.id),Object(n["a"])(r)&&(Object(n["a"])(r.updater)&&r.updater.removeObject(r),l.remove(s.id)));for(o=i.length-1;o>-1;o--)s=i[o],r=l.get(s.id),Object(n["a"])(r)&&(Object(n["a"])(r.updater)&&r.updater.removeObject(r),l.remove(s.id))},I._subSample=L,t["a"]=I},a10a:function(e,t,i){"use strict";var a=i("933b"),o=i("cef5"),n=i("670c"),s=i("bd8d"),r=i("2f63"),l=i("7d62"),c=i("52f0"),d=i("d4ed"),h=i("c1f7"),u=i("2d75"),m=i("ce35"),p=i("8a9e"),f=i("c86b"),_=i("2d19"),b=i("ea07"),g=1,O=0,v=!0,j=!0,y=f["a"].ENABLED,C=u["a"].NONE,w=s["a"].RED,S=0,T=s["a"].WHITE,x=h["a"].HIGHLIGHT,D=.5,A=new n["a"](1,1),V=new c["a"],P=new c["a"];function B(e,t){t.collectionChanged.addEventListener(B.prototype._onCollectionChanged,this),this._scene=e,this._primitives=e.primitives,this._entityCollection=t,this._modelHash={},this._entitiesToVisualize=new a["a"],this._onCollectionChanged(t,t.values,[],[])}function E(e,t,i,a){var o=i[t.id];Object(r["a"])(o)&&(a.removeAndDestroy(o.modelPrimitive),delete i[t.id])}function F(e,t){var i=t[e.id];Object(r["a"])(i)&&(i.nodeTransformationsScratch={},i.articulationsScratch={})}function L(e,t,i){e.readyPromise.otherwise((function(e){console.error(e),i[t.id].loadFail=!0}))}B.prototype.update=function(e){for(var t=this._entitiesToVisualize.values,i=this._modelHash,a=this._primitives,o=0,n=t.length;o<n;o++){var s,l,h=t[o],u=h._model,f=i[h.id],_=h.isShowing&&h.isAvailable(e)&&b["a"].getValueOrDefault(u._show,e,!0);if(_&&(l=h.computeModelMatrix(e,V),s=d["a"].createIfNeeded(b["a"].getValueOrUndefined(u._uri,e)),_=Object(r["a"])(l)&&Object(r["a"])(s)),_){var B=Object(r["a"])(f)?f.modelPrimitive:void 0;if(Object(r["a"])(B)&&s.url===f.url||(Object(r["a"])(B)&&(a.removeAndDestroy(B),delete i[h.id]),B=m["a"].fromGltf({url:s,incrementallyLoadTextures:b["a"].getValueOrDefault(u._incrementallyLoadTextures,e,v),scene:this._scene}),B.id=h,a.add(B),f={modelPrimitive:B,url:s.url,animationsRunning:!1,nodeTransformationsScratch:{},articulationsScratch:{},loadFail:!1},i[h.id]=f,L(B,h,i)),B.show=!0,B.scale=b["a"].getValueOrDefault(u._scale,e,g),B.minimumPixelSize=b["a"].getValueOrDefault(u._minimumPixelSize,e,O),B.maximumScale=b["a"].getValueOrUndefined(u._maximumScale,e),B.modelMatrix=c["a"].clone(l,B.modelMatrix),B.shadows=b["a"].getValueOrDefault(u._shadows,e,y),B.heightReference=b["a"].getValueOrDefault(u._heightReference,e,C),B.distanceDisplayCondition=b["a"].getValueOrUndefined(u._distanceDisplayCondition,e),B.silhouetteColor=b["a"].getValueOrDefault(u._silhouetteColor,e,w,B._silhouetteColor),B.silhouetteSize=b["a"].getValueOrDefault(u._silhouetteSize,e,S),B.color=b["a"].getValueOrDefault(u._color,e,T,B._color),B.colorBlendMode=b["a"].getValueOrDefault(u._colorBlendMode,e,x),B.colorBlendAmount=b["a"].getValueOrDefault(u._colorBlendAmount,e,D),B.clippingPlanes=b["a"].getValueOrUndefined(u._clippingPlanes,e),B.clampAnimations=b["a"].getValueOrDefault(u._clampAnimations,e,j),B.imageBasedLightingFactor=b["a"].getValueOrDefault(u._imageBasedLightingFactor,e,A),B.lightColor=b["a"].getValueOrUndefined(u._lightColor,e),B.ready){var E=b["a"].getValueOrDefault(u._runAnimations,e,!0);f.animationsRunning!==E&&(E?B.activeAnimations.addAll({loop:p["a"].REPEAT}):B.activeAnimations.removeAll(),f.animationsRunning=E);var F=b["a"].getValueOrUndefined(u._nodeTransformations,e,f.nodeTransformationsScratch);if(Object(r["a"])(F))for(var M=Object.keys(F),R=0,I=M.length;R<I;++R){var z=M[R],N=F[z];if(Object(r["a"])(N)){var q=B.getNode(z);if(Object(r["a"])(q)){var U=c["a"].fromTranslationRotationScale(N,P);q.matrix=c["a"].multiply(q.originalMatrix,U,U)}}}var H=!1,k=b["a"].getValueOrUndefined(u._articulations,e,f.articulationsScratch);if(Object(r["a"])(k))for(var G=Object.keys(k),J=0,Y=G.length;J<Y;++J){var W=G[J],X=k[W];Object(r["a"])(X)&&(H=!0,B.setArticulationStage(W,X))}H&&B.applyArticulations()}}else Object(r["a"])(f)&&(f.modelPrimitive.show=!1)}return!0},B.prototype.isDestroyed=function(){return!1},B.prototype.destroy=function(){this._entityCollection.collectionChanged.removeEventListener(B.prototype._onCollectionChanged,this);for(var e=this._entitiesToVisualize.values,t=this._modelHash,i=this._primitives,a=e.length-1;a>-1;a--)E(this,e[a],t,i);return Object(l["a"])(this)},B.prototype.getBoundingSphere=function(e,t){var i=this._modelHash[e.id];if(!Object(r["a"])(i)||i.loadFail)return _["a"].FAILED;var a=i.modelPrimitive;if(!Object(r["a"])(a)||!a.show)return _["a"].FAILED;if(!a.ready)return _["a"].PENDING;if(a.heightReference===u["a"].NONE)o["a"].transform(a.boundingSphere,a.modelMatrix,t);else{if(!Object(r["a"])(a._clampedModelMatrix))return _["a"].PENDING;o["a"].transform(a.boundingSphere,a._clampedModelMatrix,t)}return _["a"].DONE},B.prototype._onCollectionChanged=function(e,t,i,a){var o,n,s=this._entitiesToVisualize,l=this._modelHash,c=this._primitives;for(o=t.length-1;o>-1;o--)n=t[o],Object(r["a"])(n._model)&&Object(r["a"])(n._position)&&s.set(n.id,n);for(o=a.length-1;o>-1;o--)n=a[o],Object(r["a"])(n._model)&&Object(r["a"])(n._position)?(F(n,l),s.set(n.id,n)):(E(this,n,l,c),s.remove(n.id));for(o=i.length-1;o>-1;o--)n=i[o],E(this,n,l,c),s.remove(n.id)},t["a"]=B},bd04:function(e,t,i){"use strict";var a=i("535a"),o=i("2f63"),n=i("9f1d"),s=i("21d7"),r=i("dde7"),l=i("0a43");function c(e){this._definitionChanged=new s["a"],this._show=void 0,this._showSubscription=void 0,this._leadTime=void 0,this._leadTimeSubscription=void 0,this._trailTime=void 0,this._trailTimeSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._resolution=void 0,this._resolutionSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(Object(a["a"])(e,a["a"].EMPTY_OBJECT))}Object(n["a"])(c.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(l["a"])("show"),leadTime:Object(l["a"])("leadTime"),trailTime:Object(l["a"])("trailTime"),width:Object(l["a"])("width"),resolution:Object(l["a"])("resolution"),material:Object(r["a"])("material"),distanceDisplayCondition:Object(l["a"])("distanceDisplayCondition")}),c.prototype.clone=function(e){return Object(o["a"])(e)?(e.show=this.show,e.leadTime=this.leadTime,e.trailTime=this.trailTime,e.width=this.width,e.resolution=this.resolution,e.material=this.material,e.distanceDisplayCondition=this.distanceDisplayCondition,e):new c(this)},c.prototype.merge=function(e){this.show=Object(a["a"])(this.show,e.show),this.leadTime=Object(a["a"])(this.leadTime,e.leadTime),this.trailTime=Object(a["a"])(this.trailTime,e.trailTime),this.width=Object(a["a"])(this.width,e.width),this.resolution=Object(a["a"])(this.resolution,e.resolution),this.material=Object(a["a"])(this.material,e.material),this.distanceDisplayCondition=Object(a["a"])(this.distanceDisplayCondition,e.distanceDisplayCondition)},t["a"]=c},d888:function(e,t,i){"use strict";var a=i("535a"),o=i("2f63"),n=i("9f1d"),s=i("21d7"),r=i("0a43"),l=i("3372"),c=i("ea07"),d=new l["a"],h=function(e){e=Object(a["a"])(e,a["a"].EMPTY_OBJECT),this._definitionChanged=new s["a"],this._translation=void 0,this._translationSubscription=void 0,this._rotation=void 0,this._rotationSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this.translation=e.translation,this.rotation=e.rotation,this.scale=e.scale};Object(n["a"])(h.prototype,{isConstant:{get:function(){return c["a"].isConstant(this._translation)&&c["a"].isConstant(this._rotation)&&c["a"].isConstant(this._scale)}},definitionChanged:{get:function(){return this._definitionChanged}},translation:Object(r["a"])("translation"),rotation:Object(r["a"])("rotation"),scale:Object(r["a"])("scale")}),h.prototype.getValue=function(e,t){return Object(o["a"])(t)||(t=new l["a"]),t.translation=c["a"].getValueOrClonedDefault(this._translation,e,d.translation,t.translation),t.rotation=c["a"].getValueOrClonedDefault(this._rotation,e,d.rotation,t.rotation),t.scale=c["a"].getValueOrClonedDefault(this._scale,e,d.scale,t.scale),t},h.prototype.equals=function(e){return this===e||e instanceof h&&c["a"].equals(this._translation,e._translation)&&c["a"].equals(this._rotation,e._rotation)&&c["a"].equals(this._scale,e._scale)};var u=h,m=i("f0a0");function p(e){return new u(e)}function f(e){return new m["a"](e,p)}function _(e){return new m["a"](e)}function b(e){this._definitionChanged=new s["a"],this._show=void 0,this._showSubscription=void 0,this._uri=void 0,this._uriSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this._minimumPixelSize=void 0,this._minimumPixelSizeSubscription=void 0,this._maximumScale=void 0,this._maximumScaleSubscription=void 0,this._incrementallyLoadTextures=void 0,this._incrementallyLoadTexturesSubscription=void 0,this._runAnimations=void 0,this._runAnimationsSubscription=void 0,this._clampAnimations=void 0,this._clampAnimationsSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._silhouetteColor=void 0,this._silhouetteColorSubscription=void 0,this._silhouetteSize=void 0,this._silhouetteSizeSubscription=void 0,this._color=void 0,this._colorSubscription=void 0,this._colorBlendMode=void 0,this._colorBlendModeSubscription=void 0,this._colorBlendAmount=void 0,this._colorBlendAmountSubscription=void 0,this._imageBasedLightingFactor=void 0,this._imageBasedLightingFactorSubscription=void 0,this._lightColor=void 0,this._lightColorSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._nodeTransformations=void 0,this._nodeTransformationsSubscription=void 0,this._articulations=void 0,this._articulationsSubscription=void 0,this._clippingPlanes=void 0,this._clippingPlanesSubscription=void 0,this.merge(Object(a["a"])(e,a["a"].EMPTY_OBJECT))}Object(n["a"])(b.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(r["a"])("show"),uri:Object(r["a"])("uri"),scale:Object(r["a"])("scale"),minimumPixelSize:Object(r["a"])("minimumPixelSize"),maximumScale:Object(r["a"])("maximumScale"),incrementallyLoadTextures:Object(r["a"])("incrementallyLoadTextures"),runAnimations:Object(r["a"])("runAnimations"),clampAnimations:Object(r["a"])("clampAnimations"),shadows:Object(r["a"])("shadows"),heightReference:Object(r["a"])("heightReference"),silhouetteColor:Object(r["a"])("silhouetteColor"),silhouetteSize:Object(r["a"])("silhouetteSize"),color:Object(r["a"])("color"),colorBlendMode:Object(r["a"])("colorBlendMode"),colorBlendAmount:Object(r["a"])("colorBlendAmount"),imageBasedLightingFactor:Object(r["a"])("imageBasedLightingFactor"),lightColor:Object(r["a"])("lightColor"),distanceDisplayCondition:Object(r["a"])("distanceDisplayCondition"),nodeTransformations:Object(r["a"])("nodeTransformations",void 0,f),articulations:Object(r["a"])("articulations",void 0,_),clippingPlanes:Object(r["a"])("clippingPlanes")}),b.prototype.clone=function(e){return Object(o["a"])(e)?(e.show=this.show,e.uri=this.uri,e.scale=this.scale,e.minimumPixelSize=this.minimumPixelSize,e.maximumScale=this.maximumScale,e.incrementallyLoadTextures=this.incrementallyLoadTextures,e.runAnimations=this.runAnimations,e.clampAnimations=this.clampAnimations,e.heightReference=this._heightReference,e.silhouetteColor=this.silhouetteColor,e.silhouetteSize=this.silhouetteSize,e.color=this.color,e.colorBlendMode=this.colorBlendMode,e.colorBlendAmount=this.colorBlendAmount,e.imageBasedLightingFactor=this.imageBasedLightingFactor,e.lightColor=this.lightColor,e.distanceDisplayCondition=this.distanceDisplayCondition,e.nodeTransformations=this.nodeTransformations,e.articulations=this.articulations,e.clippingPlanes=this.clippingPlanes,e):new b(this)},b.prototype.merge=function(e){this.show=Object(a["a"])(this.show,e.show),this.uri=Object(a["a"])(this.uri,e.uri),this.scale=Object(a["a"])(this.scale,e.scale),this.minimumPixelSize=Object(a["a"])(this.minimumPixelSize,e.minimumPixelSize),this.maximumScale=Object(a["a"])(this.maximumScale,e.maximumScale),this.incrementallyLoadTextures=Object(a["a"])(this.incrementallyLoadTextures,e.incrementallyLoadTextures),this.runAnimations=Object(a["a"])(this.runAnimations,e.runAnimations),this.clampAnimations=Object(a["a"])(this.clampAnimations,e.clampAnimations),this.shadows=Object(a["a"])(this.shadows,e.shadows),this.heightReference=Object(a["a"])(this.heightReference,e.heightReference),this.silhouetteColor=Object(a["a"])(this.silhouetteColor,e.silhouetteColor),this.silhouetteSize=Object(a["a"])(this.silhouetteSize,e.silhouetteSize),this.color=Object(a["a"])(this.color,e.color),this.colorBlendMode=Object(a["a"])(this.colorBlendMode,e.colorBlendMode),this.colorBlendAmount=Object(a["a"])(this.colorBlendAmount,e.colorBlendAmount),this.imageBasedLightingFactor=Object(a["a"])(this.imageBasedLightingFactor,e.imageBasedLightingFactor),this.lightColor=Object(a["a"])(this.lightColor,e.lightColor),this.distanceDisplayCondition=Object(a["a"])(this.distanceDisplayCondition,e.distanceDisplayCondition),this.clippingPlanes=Object(a["a"])(this.clippingPlanes,e.clippingPlanes);var t=e.nodeTransformations;if(Object(o["a"])(t)){var i=this.nodeTransformations;Object(o["a"])(i)?i.merge(t):this.nodeTransformations=new m["a"](t,p)}var n=e.articulations;if(Object(o["a"])(n)){var s=this.articulations;Object(o["a"])(s)?s.merge(n):this.articulations=new m["a"](n)}};t["a"]=b}}]);