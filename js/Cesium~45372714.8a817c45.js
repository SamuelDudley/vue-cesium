(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~45372714"],{"1ce0":function(t,e,i){"use strict";var n=i("535a"),o=i("2f63"),s=i("9f1d"),a=i("21d7"),r=i("dde7"),h=i("0a43");function c(t){this._definitionChanged=new a["a"],this._show=void 0,this._showSubscription=void 0,this._length=void 0,this._lengthSubscription=void 0,this._topRadius=void 0,this._topRadiusSubscription=void 0,this._bottomRadius=void 0,this._bottomRadiusSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._numberOfVerticalLines=void 0,this._numberOfVerticalLinesSubscription=void 0,this._slices=void 0,this._slicesSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(Object(n["a"])(t,n["a"].EMPTY_OBJECT))}Object(s["a"])(c.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(h["a"])("show"),length:Object(h["a"])("length"),topRadius:Object(h["a"])("topRadius"),bottomRadius:Object(h["a"])("bottomRadius"),heightReference:Object(h["a"])("heightReference"),fill:Object(h["a"])("fill"),material:Object(r["a"])("material"),outline:Object(h["a"])("outline"),outlineColor:Object(h["a"])("outlineColor"),outlineWidth:Object(h["a"])("outlineWidth"),numberOfVerticalLines:Object(h["a"])("numberOfVerticalLines"),slices:Object(h["a"])("slices"),shadows:Object(h["a"])("shadows"),distanceDisplayCondition:Object(h["a"])("distanceDisplayCondition")}),c.prototype.clone=function(t){return Object(o["a"])(t)?(t.show=this.show,t.length=this.length,t.topRadius=this.topRadius,t.bottomRadius=this.bottomRadius,t.heightReference=this.heightReference,t.fill=this.fill,t.material=this.material,t.outline=this.outline,t.outlineColor=this.outlineColor,t.outlineWidth=this.outlineWidth,t.numberOfVerticalLines=this.numberOfVerticalLines,t.slices=this.slices,t.shadows=this.shadows,t.distanceDisplayCondition=this.distanceDisplayCondition,t):new c(this)},c.prototype.merge=function(t){this.show=Object(n["a"])(this.show,t.show),this.length=Object(n["a"])(this.length,t.length),this.topRadius=Object(n["a"])(this.topRadius,t.topRadius),this.bottomRadius=Object(n["a"])(this.bottomRadius,t.bottomRadius),this.heightReference=Object(n["a"])(this.heightReference,t.heightReference),this.fill=Object(n["a"])(this.fill,t.fill),this.material=Object(n["a"])(this.material,t.material),this.outline=Object(n["a"])(this.outline,t.outline),this.outlineColor=Object(n["a"])(this.outlineColor,t.outlineColor),this.outlineWidth=Object(n["a"])(this.outlineWidth,t.outlineWidth),this.numberOfVerticalLines=Object(n["a"])(this.numberOfVerticalLines,t.numberOfVerticalLines),this.slices=Object(n["a"])(this.slices,t.slices),this.shadows=Object(n["a"])(this.shadows,t.shadows),this.distanceDisplayCondition=Object(n["a"])(this.distanceDisplayCondition,t.distanceDisplayCondition)},e["a"]=c},"2bbe":function(t,e,i){"use strict";var n=i("be18"),o=i("535a"),s=i("2f63"),a=i("9f1d"),r=i("21d7"),h=i("7749"),c=i("c21f");function l(t,e){this._definitionChanged=new r["a"],this._value=n["a"].clone(t),this._referenceFrame=Object(o["a"])(e,h["a"].FIXED)}Object(a["a"])(l.prototype,{isConstant:{get:function(){return!Object(s["a"])(this._value)||this._referenceFrame===h["a"].FIXED}},definitionChanged:{get:function(){return this._definitionChanged}},referenceFrame:{get:function(){return this._referenceFrame}}}),l.prototype.getValue=function(t,e){return this.getValueInReferenceFrame(t,h["a"].FIXED,e)},l.prototype.setValue=function(t,e){var i=!1;n["a"].equals(this._value,t)||(i=!0,this._value=n["a"].clone(t)),Object(s["a"])(e)&&this._referenceFrame!==e&&(i=!0,this._referenceFrame=e),i&&this._definitionChanged.raiseEvent(this)},l.prototype.getValueInReferenceFrame=function(t,e,i){return c["a"].convertToReferenceFrame(t,this._value,this._referenceFrame,e,i)},l.prototype.equals=function(t){return this===t||t instanceof l&&n["a"].equals(this._value,t._value)&&this._referenceFrame===t._referenceFrame},e["a"]=l},"2d19":function(t,e,i){"use strict";var n=i("0e25"),o={DONE:0,PENDING:1,FAILED:2};e["a"]=Object(n["a"])(o)},"2d36":function(t,e,i){"use strict";var n=i("9f1d"),o=i("21d7");function s(t,e){this._callback=void 0,this._isConstant=void 0,this._definitionChanged=new o["a"],this.setCallback(t,e)}Object(n["a"])(s.prototype,{isConstant:{get:function(){return this._isConstant}},definitionChanged:{get:function(){return this._definitionChanged}}}),s.prototype.getValue=function(t,e){return this._callback(t,e)},s.prototype.setCallback=function(t,e){var i=this._callback!==t||this._isConstant!==e;this._callback=t,this._isConstant=e,i&&this._definitionChanged.raiseEvent(this)},s.prototype.equals=function(t){return this===t||t instanceof s&&this._callback===t._callback&&this._isConstant===t._isConstant},e["a"]=s},3422:function(t,e,i){"use strict";var n=i("535a"),o=i("2f63"),s=i("9f1d"),a=i("21d7"),r=i("dde7"),h=i("0a43");function c(t){this._definitionChanged=new a["a"],this._show=void 0,this._showSubscription=void 0,this._positions=void 0,this._positionsSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._extrudedHeight=void 0,this._extrudedHeightSubscription=void 0,this._extrudedHeightReference=void 0,this._extrudedHeightReferenceSubscription=void 0,this._cornerType=void 0,this._cornerTypeSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._classificationType=void 0,this._classificationTypeSubscription=void 0,this._zIndex=void 0,this._zIndexSubscription=void 0,this.merge(Object(n["a"])(t,n["a"].EMPTY_OBJECT))}Object(s["a"])(c.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(h["a"])("show"),positions:Object(h["a"])("positions"),width:Object(h["a"])("width"),height:Object(h["a"])("height"),heightReference:Object(h["a"])("heightReference"),extrudedHeight:Object(h["a"])("extrudedHeight"),extrudedHeightReference:Object(h["a"])("extrudedHeightReference"),cornerType:Object(h["a"])("cornerType"),granularity:Object(h["a"])("granularity"),fill:Object(h["a"])("fill"),material:Object(r["a"])("material"),outline:Object(h["a"])("outline"),outlineColor:Object(h["a"])("outlineColor"),outlineWidth:Object(h["a"])("outlineWidth"),shadows:Object(h["a"])("shadows"),distanceDisplayCondition:Object(h["a"])("distanceDisplayCondition"),classificationType:Object(h["a"])("classificationType"),zIndex:Object(h["a"])("zIndex")}),c.prototype.clone=function(t){return Object(o["a"])(t)?(t.show=this.show,t.positions=this.positions,t.width=this.width,t.height=this.height,t.heightReference=this.heightReference,t.extrudedHeight=this.extrudedHeight,t.extrudedHeightReference=this.extrudedHeightReference,t.cornerType=this.cornerType,t.granularity=this.granularity,t.fill=this.fill,t.material=this.material,t.outline=this.outline,t.outlineColor=this.outlineColor,t.outlineWidth=this.outlineWidth,t.shadows=this.shadows,t.distanceDisplayCondition=this.distanceDisplayCondition,t.classificationType=this.classificationType,t.zIndex=this.zIndex,t):new c(this)},c.prototype.merge=function(t){this.show=Object(n["a"])(this.show,t.show),this.positions=Object(n["a"])(this.positions,t.positions),this.width=Object(n["a"])(this.width,t.width),this.height=Object(n["a"])(this.height,t.height),this.heightReference=Object(n["a"])(this.heightReference,t.heightReference),this.extrudedHeight=Object(n["a"])(this.extrudedHeight,t.extrudedHeight),this.extrudedHeightReference=Object(n["a"])(this.extrudedHeightReference,t.extrudedHeightReference),this.cornerType=Object(n["a"])(this.cornerType,t.cornerType),this.granularity=Object(n["a"])(this.granularity,t.granularity),this.fill=Object(n["a"])(this.fill,t.fill),this.material=Object(n["a"])(this.material,t.material),this.outline=Object(n["a"])(this.outline,t.outline),this.outlineColor=Object(n["a"])(this.outlineColor,t.outlineColor),this.outlineWidth=Object(n["a"])(this.outlineWidth,t.outlineWidth),this.shadows=Object(n["a"])(this.shadows,t.shadows),this.distanceDisplayCondition=Object(n["a"])(this.distanceDisplayCondition,t.distanceDisplayCondition),this.classificationType=Object(n["a"])(this.classificationType,t.classificationType),this.zIndex=Object(n["a"])(this.zIndex,t.zIndex)},e["a"]=c},"448f":function(t,e,i){"use strict";var n=i("933b"),o=i("77af"),s=i("670c"),a=i("be18"),r=i("bd8d"),h=i("2f63"),c=i("7d62"),l=i("aee6"),d=i("6dfc"),u=i("2d75"),f=i("f61d"),p=i("05e5"),_=i("2d19"),g=i("ea07"),b=r["a"].WHITE,O=a["a"].ZERO,y=u["a"].NONE,v=s["a"].ZERO,m=1,C=0,j=a["a"].ZERO,w=f["a"].CENTER,D=p["a"].CENTER,V=!1,R=new a["a"],E=new r["a"],S=new a["a"],x=new s["a"],M=new d["a"],I=new d["a"],U=new d["a"],P=new o["a"],T=new l["a"];function A(t){this.entity=t,this.billboard=void 0,this.textureValue=void 0}function N(t,e){e.collectionChanged.addEventListener(N.prototype._onCollectionChanged,this),this._cluster=t,this._entityCollection=e,this._items=new n["a"],this._onCollectionChanged(e,e.values,[],[])}function H(t,e,i){Object(h["a"])(t)&&(t.billboard=void 0,i.removeBillboard(e))}N.prototype.update=function(t){for(var e=this._items.values,i=this._cluster,n=0,o=e.length;n<o;n++){var s,a,r=e[n],c=r.entity,l=c._billboard,d=r.billboard,u=c.isShowing&&c.isAvailable(t)&&g["a"].getValueOrDefault(l._show,t,!0);if(u&&(a=g["a"].getValueOrUndefined(c._position,t,R),s=g["a"].getValueOrUndefined(l._image,t),u=Object(h["a"])(a)&&Object(h["a"])(s)),u){g["a"].isConstant(c._position)||(i._clusterDirty=!0),Object(h["a"])(d)||(d=i.getBillboard(c),d.id=c,d.image=void 0,r.billboard=d),d.show=u,Object(h["a"])(d.image)&&r.textureValue===s||(d.image=s,r.textureValue=s),d.position=a,d.color=g["a"].getValueOrDefault(l._color,t,b,E),d.eyeOffset=g["a"].getValueOrDefault(l._eyeOffset,t,O,S),d.heightReference=g["a"].getValueOrDefault(l._heightReference,t,y),d.pixelOffset=g["a"].getValueOrDefault(l._pixelOffset,t,v,x),d.scale=g["a"].getValueOrDefault(l._scale,t,m),d.rotation=g["a"].getValueOrDefault(l._rotation,t,C),d.alignedAxis=g["a"].getValueOrDefault(l._alignedAxis,t,j),d.horizontalOrigin=g["a"].getValueOrDefault(l._horizontalOrigin,t,w),d.verticalOrigin=g["a"].getValueOrDefault(l._verticalOrigin,t,D),d.width=g["a"].getValueOrUndefined(l._width,t),d.height=g["a"].getValueOrUndefined(l._height,t),d.scaleByDistance=g["a"].getValueOrUndefined(l._scaleByDistance,t,M),d.translucencyByDistance=g["a"].getValueOrUndefined(l._translucencyByDistance,t,I),d.pixelOffsetScaleByDistance=g["a"].getValueOrUndefined(l._pixelOffsetScaleByDistance,t,U),d.sizeInMeters=g["a"].getValueOrDefault(l._sizeInMeters,t,V),d.distanceDisplayCondition=g["a"].getValueOrUndefined(l._distanceDisplayCondition,t,T),d.disableDepthTestDistance=g["a"].getValueOrUndefined(l._disableDepthTestDistance,t);var f=g["a"].getValueOrUndefined(l._imageSubRegion,t,P);Object(h["a"])(f)&&d.setImageSubRegion(d._imageId,f)}else H(r,c,i)}return!0},N.prototype.getBoundingSphere=function(t,e){var i=this._items.get(t.id);if(!Object(h["a"])(i)||!Object(h["a"])(i.billboard))return _["a"].FAILED;var n=i.billboard;if(n.heightReference===u["a"].NONE)e.center=a["a"].clone(n.position,e.center);else{if(!Object(h["a"])(n._clampedPosition))return _["a"].PENDING;e.center=a["a"].clone(n._clampedPosition,e.center)}return e.radius=0,_["a"].DONE},N.prototype.isDestroyed=function(){return!1},N.prototype.destroy=function(){this._entityCollection.collectionChanged.removeEventListener(N.prototype._onCollectionChanged,this);for(var t=this._entityCollection.values,e=0;e<t.length;e++)this._cluster.removeBillboard(t[e]);return Object(c["a"])(this)},N.prototype._onCollectionChanged=function(t,e,i,n){var o,s,a=this._items,r=this._cluster;for(o=e.length-1;o>-1;o--)s=e[o],Object(h["a"])(s._billboard)&&Object(h["a"])(s._position)&&a.set(s.id,new A(s));for(o=n.length-1;o>-1;o--)s=n[o],Object(h["a"])(s._billboard)&&Object(h["a"])(s._position)?a.contains(s.id)||a.set(s.id,new A(s)):(H(a.get(s.id),s,r),a.remove(s.id));for(o=i.length-1;o>-1;o--)s=i[o],H(a.get(s.id),s,r),a.remove(s.id)},e["a"]=N},4997:function(t,e,i){"use strict";var n=i("b482"),o=i("b081"),s=i("be18"),a=i("bd8d"),r=i("9541"),h=i("2f63"),c=i("9f1d"),l=i("77bc"),d=i("d940"),u=i("0276"),f=i("452d"),p=i("c2eb"),_=i("ac9c"),g=i("2d75"),b=i("d6db"),O=i("3a8e"),y=i("b83c"),v=i("9171"),m=i("3ba2"),C=i("6fa2"),j=i("ea07"),w=s["a"].ZERO,D=new s["a"],V=new s["a"],R=new a["a"];function E(t){this.id=t,this.vertexFormat=void 0,this.dimensions=void 0,this.offsetAttribute=void 0}function S(t,e){m["a"].call(this,{entity:t,scene:e,geometryOptions:new E(t),geometryPropertyName:"box",observedPropertyNames:["availability","position","orientation","box"]}),this._onEntityPropertyChanged(t,"box",t.box,void 0)}function x(t,e,i){v["a"].call(this,t,e,i)}Object(h["a"])(Object.create)&&(S.prototype=Object.create(m["a"].prototype),S.prototype.constructor=S),Object(c["a"])(S.prototype,{terrainOffsetProperty:{get:function(){return this._terrainOffsetProperty}}}),S.prototype.createFillGeometryInstance=function(t){var e,i=this._entity,o=i.isAvailable(t),s=new _["a"](o&&i.isShowing&&this._showProperty.getValue(t)&&this._fillProperty.getValue(t)),c=this._distanceDisplayConditionProperty.getValue(t),u=l["a"].fromDistanceDisplayCondition(c),f={show:s,distanceDisplayCondition:u,color:void 0,offset:void 0};this._materialProperty instanceof y["a"]&&(Object(h["a"])(this._materialProperty.color)&&(this._materialProperty.color.isConstant||o)&&(e=this._materialProperty.color.getValue(t,R)),Object(h["a"])(e)||(e=a["a"].WHITE),f.color=r["a"].fromColor(e));return Object(h["a"])(this._options.offsetAttribute)&&(f.offset=p["a"].fromCartesian3(j["a"].getValueOrDefault(this._terrainOffsetProperty,t,w,D))),new d["a"]({id:i,geometry:n["a"].fromDimensions(this._options),modelMatrix:i.computeModelMatrixForHeightReference(t,i.box.heightReference,.5*this._options.dimensions.z,this._scene.mapProjection.ellipsoid),attributes:f})},S.prototype.createOutlineGeometryInstance=function(t){var e=this._entity,i=e.isAvailable(t),n=j["a"].getValueOrDefault(this._outlineColorProperty,t,a["a"].BLACK,R),s=this._distanceDisplayConditionProperty.getValue(t),c={show:new _["a"](i&&e.isShowing&&this._showProperty.getValue(t)&&this._showOutlineProperty.getValue(t)),color:r["a"].fromColor(n),distanceDisplayCondition:l["a"].fromDistanceDisplayCondition(s),offset:void 0};return Object(h["a"])(this._options.offsetAttribute)&&(c.offset=p["a"].fromCartesian3(j["a"].getValueOrDefault(this._terrainOffsetProperty,t,w,D))),new d["a"]({id:e,geometry:o["a"].fromDimensions(this._options),modelMatrix:e.computeModelMatrixForHeightReference(t,e.box.heightReference,.5*this._options.dimensions.z,this._scene.mapProjection.ellipsoid),attributes:c})},S.prototype._computeCenter=function(t,e){return j["a"].getValueOrUndefined(this._entity.position,t,e)},S.prototype._isHidden=function(t,e){return!Object(h["a"])(e.dimensions)||!Object(h["a"])(t.position)||m["a"].prototype._isHidden.call(this,t,e)},S.prototype._isDynamic=function(t,e){return!t.position.isConstant||!j["a"].isConstant(t.orientation)||!e.dimensions.isConstant||!j["a"].isConstant(e.outlineWidth)},S.prototype._setStaticOptions=function(t,e){var i=j["a"].getValueOrDefault(e.heightReference,f["a"].MINIMUM_VALUE,g["a"].NONE),n=this._options;n.vertexFormat=this._materialProperty instanceof y["a"]?O["a"].VERTEX_FORMAT:b["a"].MaterialSupport.TEXTURED.vertexFormat,n.dimensions=e.dimensions.getValue(f["a"].MINIMUM_VALUE,n.dimensions),n.offsetAttribute=i!==g["a"].NONE?u["a"].ALL:void 0},S.prototype._onEntityPropertyChanged=C["a"],S.DynamicGeometryUpdater=x,Object(h["a"])(Object.create)&&(x.prototype=Object.create(v["a"].prototype),x.prototype.constructor=x),x.prototype._isHidden=function(t,e,i){var n=j["a"].getValueOrUndefined(t.position,i,V),o=this._options.dimensions;return!Object(h["a"])(n)||!Object(h["a"])(o)||v["a"].prototype._isHidden.call(this,t,e,i)},x.prototype._setOptions=function(t,e,i){var n=j["a"].getValueOrDefault(e.heightReference,i,g["a"].NONE),o=this._options;o.dimensions=j["a"].getValueOrUndefined(e.dimensions,i,o.dimensions),o.offsetAttribute=n!==g["a"].NONE?u["a"].ALL:void 0},e["a"]=S},"4b92":function(t,e,i){"use strict";var n=i("535a"),o=i("2f63"),s=i("9f1d"),a=i("21d7"),r=i("dde7"),h=i("0a43");function c(t){this._definitionChanged=new a["a"],this._show=void 0,this._showSubscription=void 0,this._dimensions=void 0,this._dimensionsSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(Object(n["a"])(t,n["a"].EMPTY_OBJECT))}Object(s["a"])(c.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(h["a"])("show"),dimensions:Object(h["a"])("dimensions"),heightReference:Object(h["a"])("heightReference"),fill:Object(h["a"])("fill"),material:Object(r["a"])("material"),outline:Object(h["a"])("outline"),outlineColor:Object(h["a"])("outlineColor"),outlineWidth:Object(h["a"])("outlineWidth"),shadows:Object(h["a"])("shadows"),distanceDisplayCondition:Object(h["a"])("distanceDisplayCondition")}),c.prototype.clone=function(t){return Object(o["a"])(t)?(t.show=this.show,t.dimensions=this.dimensions,t.heightReference=this.heightReference,t.fill=this.fill,t.material=this.material,t.outline=this.outline,t.outlineColor=this.outlineColor,t.outlineWidth=this.outlineWidth,t.shadows=this.shadows,t.distanceDisplayCondition=this.distanceDisplayCondition,t):new c(this)},c.prototype.merge=function(t){this.show=Object(n["a"])(this.show,t.show),this.dimensions=Object(n["a"])(this.dimensions,t.dimensions),this.heightReference=Object(n["a"])(this.heightReference,t.heightReference),this.fill=Object(n["a"])(this.fill,t.fill),this.material=Object(n["a"])(this.material,t.material),this.outline=Object(n["a"])(this.outline,t.outline),this.outlineColor=Object(n["a"])(this.outlineColor,t.outlineColor),this.outlineWidth=Object(n["a"])(this.outlineWidth,t.outlineWidth),this.shadows=Object(n["a"])(this.shadows,t.shadows),this.distanceDisplayCondition=Object(n["a"])(this.distanceDisplayCondition,t.distanceDisplayCondition)},e["a"]=c},"7b37":function(t,e,i){"use strict";var n=i("be18"),o=i("bd8d"),s=i("9541"),a=i("a22d"),r=i("93ab"),h=i("2f63"),c=i("9f1d"),l=i("77bc"),d=i("d940"),u=i("0276"),f=i("452d"),p=i("c2eb"),_=i("ac9c"),g=i("2d75"),b=i("d6db"),O=i("3a8e"),y=i("b83c"),v=i("9171"),m=i("3ba2"),C=i("6fa2"),j=i("ea07"),w=n["a"].ZERO,D=new n["a"],V=new n["a"],R=new o["a"];function E(t){this.id=t,this.vertexFormat=void 0,this.length=void 0,this.topRadius=void 0,this.bottomRadius=void 0,this.slices=void 0,this.numberOfVerticalLines=void 0,this.offsetAttribute=void 0}function S(t,e){m["a"].call(this,{entity:t,scene:e,geometryOptions:new E(t),geometryPropertyName:"cylinder",observedPropertyNames:["availability","position","orientation","cylinder"]}),this._onEntityPropertyChanged(t,"cylinder",t.cylinder,void 0)}function x(t,e,i){v["a"].call(this,t,e,i)}Object(h["a"])(Object.create)&&(S.prototype=Object.create(m["a"].prototype),S.prototype.constructor=S),Object(c["a"])(S.prototype,{terrainOffsetProperty:{get:function(){return this._terrainOffsetProperty}}}),S.prototype.createFillGeometryInstance=function(t){var e,i=this._entity,n=i.isAvailable(t),r=new _["a"](n&&i.isShowing&&this._showProperty.getValue(t)&&this._fillProperty.getValue(t)),c=this._distanceDisplayConditionProperty.getValue(t),u=l["a"].fromDistanceDisplayCondition(c),f={show:r,distanceDisplayCondition:u,color:void 0,offset:void 0};this._materialProperty instanceof y["a"]&&(Object(h["a"])(this._materialProperty.color)&&(this._materialProperty.color.isConstant||n)&&(e=this._materialProperty.color.getValue(t,R)),Object(h["a"])(e)||(e=o["a"].WHITE),f.color=s["a"].fromColor(e));return Object(h["a"])(this._options.offsetAttribute)&&(f.offset=p["a"].fromCartesian3(j["a"].getValueOrDefault(this._terrainOffsetProperty,t,w,D))),new d["a"]({id:i,geometry:new a["a"](this._options),modelMatrix:i.computeModelMatrixForHeightReference(t,i.cylinder.heightReference,.5*this._options.length,this._scene.mapProjection.ellipsoid),attributes:f})},S.prototype.createOutlineGeometryInstance=function(t){var e=this._entity,i=e.isAvailable(t),n=j["a"].getValueOrDefault(this._outlineColorProperty,t,o["a"].BLACK,R),a=this._distanceDisplayConditionProperty.getValue(t),c={show:new _["a"](i&&e.isShowing&&this._showProperty.getValue(t)&&this._showOutlineProperty.getValue(t)),color:s["a"].fromColor(n),distanceDisplayCondition:l["a"].fromDistanceDisplayCondition(a),offset:void 0};return Object(h["a"])(this._options.offsetAttribute)&&(c.offset=p["a"].fromCartesian3(j["a"].getValueOrDefault(this._terrainOffsetProperty,t,w,D))),new d["a"]({id:e,geometry:new r["a"](this._options),modelMatrix:e.computeModelMatrixForHeightReference(t,e.cylinder.heightReference,.5*this._options.length,this._scene.mapProjection.ellipsoid),attributes:c})},S.prototype._computeCenter=function(t,e){return j["a"].getValueOrUndefined(this._entity.position,t,e)},S.prototype._isHidden=function(t,e){return!Object(h["a"])(t.position)||!Object(h["a"])(e.length)||!Object(h["a"])(e.topRadius)||!Object(h["a"])(e.bottomRadius)||m["a"].prototype._isHidden.call(this,t,e)},S.prototype._isDynamic=function(t,e){return!t.position.isConstant||!j["a"].isConstant(t.orientation)||!e.length.isConstant||!e.topRadius.isConstant||!e.bottomRadius.isConstant||!j["a"].isConstant(e.slices)||!j["a"].isConstant(e.outlineWidth)||!j["a"].isConstant(e.numberOfVerticalLines)},S.prototype._setStaticOptions=function(t,e){var i=j["a"].getValueOrDefault(e.heightReference,f["a"].MINIMUM_VALUE,g["a"].NONE),n=this._options;n.vertexFormat=this._materialProperty instanceof y["a"]?O["a"].VERTEX_FORMAT:b["a"].MaterialSupport.TEXTURED.vertexFormat,n.length=e.length.getValue(f["a"].MINIMUM_VALUE),n.topRadius=e.topRadius.getValue(f["a"].MINIMUM_VALUE),n.bottomRadius=e.bottomRadius.getValue(f["a"].MINIMUM_VALUE),n.slices=j["a"].getValueOrUndefined(e.slices,f["a"].MINIMUM_VALUE),n.numberOfVerticalLines=j["a"].getValueOrUndefined(e.numberOfVerticalLines,f["a"].MINIMUM_VALUE),n.offsetAttribute=i!==g["a"].NONE?u["a"].ALL:void 0},S.prototype._onEntityPropertyChanged=C["a"],S.DynamicGeometryUpdater=x,Object(h["a"])(Object.create)&&(x.prototype=Object.create(v["a"].prototype),x.prototype.constructor=x),x.prototype._isHidden=function(t,e,i){var n=this._options,o=j["a"].getValueOrUndefined(t.position,i,V);return!Object(h["a"])(o)||!Object(h["a"])(n.length)||!Object(h["a"])(n.topRadius)||!Object(h["a"])(n.bottomRadius)||v["a"].prototype._isHidden.call(this,t,e,i)},x.prototype._setOptions=function(t,e,i){var n=j["a"].getValueOrDefault(e.heightReference,i,g["a"].NONE),o=this._options;o.length=j["a"].getValueOrUndefined(e.length,i),o.topRadius=j["a"].getValueOrUndefined(e.topRadius,i),o.bottomRadius=j["a"].getValueOrUndefined(e.bottomRadius,i),o.slices=j["a"].getValueOrUndefined(e.slices,i),o.numberOfVerticalLines=j["a"].getValueOrUndefined(e.numberOfVerticalLines,i),o.offsetAttribute=n!==g["a"].NONE?u["a"].ALL:void 0},e["a"]=S},"984f":function(t,e,i){"use strict";var n=i("2f63"),o=i("9f1d"),s=i("21d7");function a(t){this._value=void 0,this._hasClone=!1,this._hasEquals=!1,this._definitionChanged=new s["a"],this.setValue(t)}Object(o["a"])(a.prototype,{isConstant:{value:!0},definitionChanged:{get:function(){return this._definitionChanged}}}),a.prototype.getValue=function(t,e){return this._hasClone?this._value.clone(e):this._value},a.prototype.setValue=function(t){var e=this._value;if(e!==t){var i=Object(n["a"])(t),o=i&&"function"===typeof t.clone,s=i&&"function"===typeof t.equals,a=!s||!t.equals(e);a&&(this._hasClone=o,this._hasEquals=s,this._value=o?t.clone(this._value):t,this._definitionChanged.raiseEvent(this))}},a.prototype.equals=function(t){return this===t||t instanceof a&&(!this._hasEquals&&this._value===t._value||this._hasEquals&&this._value.equals(t._value))},a.prototype.valueOf=function(){return this._value},a.prototype.toString=function(){return String(this._value)},e["a"]=a},"99f6":function(t,e,i){"use strict";var n=i("535a"),o=i("2f63"),s=i("9f1d"),a=i("21d7"),r=i("0a43");function h(t){this._definitionChanged=new a["a"],this._show=void 0,this._showSubscription=void 0,this._image=void 0,this._imageSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this._pixelOffset=void 0,this._pixelOffsetSubscription=void 0,this._eyeOffset=void 0,this._eyeOffsetSubscription=void 0,this._horizontalOrigin=void 0,this._horizontalOriginSubscription=void 0,this._verticalOrigin=void 0,this._verticalOriginSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._color=void 0,this._colorSubscription=void 0,this._rotation=void 0,this._rotationSubscription=void 0,this._alignedAxis=void 0,this._alignedAxisSubscription=void 0,this._sizeInMeters=void 0,this._sizeInMetersSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._scaleByDistance=void 0,this._scaleByDistanceSubscription=void 0,this._translucencyByDistance=void 0,this._translucencyByDistanceSubscription=void 0,this._pixelOffsetScaleByDistance=void 0,this._pixelOffsetScaleByDistanceSubscription=void 0,this._imageSubRegion=void 0,this._imageSubRegionSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._disableDepthTestDistance=void 0,this._disableDepthTestDistanceSubscription=void 0,this.merge(Object(n["a"])(t,n["a"].EMPTY_OBJECT))}Object(s["a"])(h.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(r["a"])("show"),image:Object(r["a"])("image"),scale:Object(r["a"])("scale"),pixelOffset:Object(r["a"])("pixelOffset"),eyeOffset:Object(r["a"])("eyeOffset"),horizontalOrigin:Object(r["a"])("horizontalOrigin"),verticalOrigin:Object(r["a"])("verticalOrigin"),heightReference:Object(r["a"])("heightReference"),color:Object(r["a"])("color"),rotation:Object(r["a"])("rotation"),alignedAxis:Object(r["a"])("alignedAxis"),sizeInMeters:Object(r["a"])("sizeInMeters"),width:Object(r["a"])("width"),height:Object(r["a"])("height"),scaleByDistance:Object(r["a"])("scaleByDistance"),translucencyByDistance:Object(r["a"])("translucencyByDistance"),pixelOffsetScaleByDistance:Object(r["a"])("pixelOffsetScaleByDistance"),imageSubRegion:Object(r["a"])("imageSubRegion"),distanceDisplayCondition:Object(r["a"])("distanceDisplayCondition"),disableDepthTestDistance:Object(r["a"])("disableDepthTestDistance")}),h.prototype.clone=function(t){return Object(o["a"])(t)?(t.show=this._show,t.image=this._image,t.scale=this._scale,t.pixelOffset=this._pixelOffset,t.eyeOffset=this._eyeOffset,t.horizontalOrigin=this._horizontalOrigin,t.verticalOrigin=this._verticalOrigin,t.heightReference=this._heightReference,t.color=this._color,t.rotation=this._rotation,t.alignedAxis=this._alignedAxis,t.sizeInMeters=this._sizeInMeters,t.width=this._width,t.height=this._height,t.scaleByDistance=this._scaleByDistance,t.translucencyByDistance=this._translucencyByDistance,t.pixelOffsetScaleByDistance=this._pixelOffsetScaleByDistance,t.imageSubRegion=this._imageSubRegion,t.distanceDisplayCondition=this._distanceDisplayCondition,t.disableDepthTestDistance=this._disableDepthTestDistance,t):new h(this)},h.prototype.merge=function(t){this.show=Object(n["a"])(this._show,t.show),this.image=Object(n["a"])(this._image,t.image),this.scale=Object(n["a"])(this._scale,t.scale),this.pixelOffset=Object(n["a"])(this._pixelOffset,t.pixelOffset),this.eyeOffset=Object(n["a"])(this._eyeOffset,t.eyeOffset),this.horizontalOrigin=Object(n["a"])(this._horizontalOrigin,t.horizontalOrigin),this.verticalOrigin=Object(n["a"])(this._verticalOrigin,t.verticalOrigin),this.heightReference=Object(n["a"])(this._heightReference,t.heightReference),this.color=Object(n["a"])(this._color,t.color),this.rotation=Object(n["a"])(this._rotation,t.rotation),this.alignedAxis=Object(n["a"])(this._alignedAxis,t.alignedAxis),this.sizeInMeters=Object(n["a"])(this._sizeInMeters,t.sizeInMeters),this.width=Object(n["a"])(this._width,t.width),this.height=Object(n["a"])(this._height,t.height),this.scaleByDistance=Object(n["a"])(this._scaleByDistance,t.scaleByDistance),this.translucencyByDistance=Object(n["a"])(this._translucencyByDistance,t.translucencyByDistance),this.pixelOffsetScaleByDistance=Object(n["a"])(this._pixelOffsetScaleByDistance,t.pixelOffsetScaleByDistance),this.imageSubRegion=Object(n["a"])(this._imageSubRegion,t.imageSubRegion),this.distanceDisplayCondition=Object(n["a"])(this._distanceDisplayCondition,t.distanceDisplayCondition),this.disableDepthTestDistance=Object(n["a"])(this._disableDepthTestDistance,t.disableDepthTestDistance)},e["a"]=h},b74b:function(t,e,i){"use strict";var n=i("dd06"),o=i("be18"),s=i("bd8d"),a=i("9541"),r=i("6458"),h=i("64e4"),c=i("2f63"),l=i("77bc"),d=i("d940"),u=i("452d"),f=i("c2eb"),p=i("eace"),_=i("ac9c"),g=i("2d75"),b=i("d6db"),O=i("3a8e"),y=i("b83c"),v=i("9171"),m=i("3ba2"),C=i("c6e8"),j=i("ea07"),w=new s["a"],D=o["a"].ZERO,V=new o["a"],R=new p["a"];function E(t){this.id=t,this.vertexFormat=void 0,this.positions=void 0,this.width=void 0,this.cornerType=void 0,this.height=void 0,this.extrudedHeight=void 0,this.granularity=void 0,this.offsetAttribute=void 0}function S(t,e){C["a"].call(this,{entity:t,scene:e,geometryOptions:new E(t),geometryPropertyName:"corridor",observedPropertyNames:["availability","corridor"]}),this._onEntityPropertyChanged(t,"corridor",t.corridor,void 0)}function x(t,e,i){v["a"].call(this,t,e,i)}Object(c["a"])(Object.create)&&(S.prototype=Object.create(C["a"].prototype),S.prototype.constructor=S),S.prototype.createFillGeometryInstance=function(t){var e,i=this._entity,n=i.isAvailable(t),o={show:new _["a"](n&&i.isShowing&&this._showProperty.getValue(t)&&this._fillProperty.getValue(t)),distanceDisplayCondition:l["a"].fromDistanceDisplayCondition(this._distanceDisplayConditionProperty.getValue(t)),offset:void 0,color:void 0};this._materialProperty instanceof y["a"]&&(Object(c["a"])(this._materialProperty.color)&&(this._materialProperty.color.isConstant||n)&&(e=this._materialProperty.color.getValue(t,w)),Object(c["a"])(e)||(e=s["a"].WHITE),o.color=a["a"].fromColor(e));return Object(c["a"])(this._options.offsetAttribute)&&(o.offset=f["a"].fromCartesian3(j["a"].getValueOrDefault(this._terrainOffsetProperty,t,D,V))),new d["a"]({id:i,geometry:new r["a"](this._options),attributes:o})},S.prototype.createOutlineGeometryInstance=function(t){var e=this._entity,i=e.isAvailable(t),n=j["a"].getValueOrDefault(this._outlineColorProperty,t,s["a"].BLACK,w),o={show:new _["a"](i&&e.isShowing&&this._showProperty.getValue(t)&&this._showOutlineProperty.getValue(t)),color:a["a"].fromColor(n),distanceDisplayCondition:l["a"].fromDistanceDisplayCondition(this._distanceDisplayConditionProperty.getValue(t)),offset:void 0};return Object(c["a"])(this._options.offsetAttribute)&&(o.offset=f["a"].fromCartesian3(j["a"].getValueOrDefault(this._terrainOffsetProperty,t,D,V))),new d["a"]({id:e,geometry:new h["a"](this._options),attributes:o})},S.prototype._computeCenter=function(t,e){var i=j["a"].getValueOrUndefined(this._entity.corridor.positions,t);if(Object(c["a"])(i)&&0!==i.length)return o["a"].clone(i[Math.floor(i.length/2)],e)},S.prototype._isHidden=function(t,e){return!Object(c["a"])(e.positions)||!Object(c["a"])(e.width)||m["a"].prototype._isHidden.call(this,t,e)},S.prototype._isDynamic=function(t,e){return!e.positions.isConstant||!j["a"].isConstant(e.height)||!j["a"].isConstant(e.extrudedHeight)||!j["a"].isConstant(e.granularity)||!j["a"].isConstant(e.width)||!j["a"].isConstant(e.outlineWidth)||!j["a"].isConstant(e.cornerType)||!j["a"].isConstant(e.zIndex)||this._onTerrain&&!j["a"].isConstant(this._materialProperty)},S.prototype._setStaticOptions=function(t,e){var i=j["a"].getValueOrUndefined(e.height,u["a"].MINIMUM_VALUE),o=j["a"].getValueOrDefault(e.heightReference,u["a"].MINIMUM_VALUE,g["a"].NONE),s=j["a"].getValueOrUndefined(e.extrudedHeight,u["a"].MINIMUM_VALUE),a=j["a"].getValueOrDefault(e.extrudedHeightReference,u["a"].MINIMUM_VALUE,g["a"].NONE);Object(c["a"])(s)&&!Object(c["a"])(i)&&(i=0);var h=this._options;h.vertexFormat=this._materialProperty instanceof y["a"]?O["a"].VERTEX_FORMAT:b["a"].MaterialSupport.TEXTURED.vertexFormat,h.positions=e.positions.getValue(u["a"].MINIMUM_VALUE,h.positions),h.width=e.width.getValue(u["a"].MINIMUM_VALUE),h.granularity=j["a"].getValueOrUndefined(e.granularity,u["a"].MINIMUM_VALUE),h.cornerType=j["a"].getValueOrUndefined(e.cornerType,u["a"].MINIMUM_VALUE),h.offsetAttribute=C["a"].computeGeometryOffsetAttribute(i,o,s,a),h.height=C["a"].getGeometryHeight(i,o),s=C["a"].getGeometryExtrudedHeight(s,a),s===C["a"].CLAMP_TO_GROUND&&(s=n["a"].getMinimumMaximumHeights(r["a"].computeRectangle(h,R)).minimumTerrainHeight),h.extrudedHeight=s},S.DynamicGeometryUpdater=x,Object(c["a"])(Object.create)&&(x.prototype=Object.create(v["a"].prototype),x.prototype.constructor=x),x.prototype._isHidden=function(t,e,i){var n=this._options;return!Object(c["a"])(n.positions)||!Object(c["a"])(n.width)||v["a"].prototype._isHidden.call(this,t,e,i)},x.prototype._setOptions=function(t,e,i){var o=this._options,s=j["a"].getValueOrUndefined(e.height,i),a=j["a"].getValueOrDefault(e.heightReference,i,g["a"].NONE),h=j["a"].getValueOrUndefined(e.extrudedHeight,i),l=j["a"].getValueOrDefault(e.extrudedHeightReference,i,g["a"].NONE);Object(c["a"])(h)&&!Object(c["a"])(s)&&(s=0),o.positions=j["a"].getValueOrUndefined(e.positions,i),o.width=j["a"].getValueOrUndefined(e.width,i),o.granularity=j["a"].getValueOrUndefined(e.granularity,i),o.cornerType=j["a"].getValueOrUndefined(e.cornerType,i),o.offsetAttribute=C["a"].computeGeometryOffsetAttribute(s,a,h,l),o.height=C["a"].getGeometryHeight(s,a),h=C["a"].getGeometryExtrudedHeight(h,l),h===C["a"].CLAMP_TO_GROUND&&(h=n["a"].getMinimumMaximumHeights(r["a"].computeRectangle(o,R)).minimumTerrainHeight),o.extrudedHeight=h},e["a"]=S},b83c:function(t,e,i){"use strict";var n=i("bd8d"),o=i("2f63"),s=i("9f1d"),a=i("21d7"),r=i("0a43"),h=i("ea07");function c(t){this._definitionChanged=new a["a"],this._color=void 0,this._colorSubscription=void 0,this.color=t}Object(s["a"])(c.prototype,{isConstant:{get:function(){return h["a"].isConstant(this._color)}},definitionChanged:{get:function(){return this._definitionChanged}},color:Object(r["a"])("color")}),c.prototype.getType=function(t){return"Color"},c.prototype.getValue=function(t,e){return Object(o["a"])(e)||(e={}),e.color=h["a"].getValueOrClonedDefault(this._color,t,n["a"].WHITE,e.color),e},c.prototype.equals=function(t){return this===t||t instanceof c&&h["a"].equals(this._color,t._color)},e["a"]=c},dde1:function(t,e,i){"use strict";var n=i("9f1d"),o=i("21d7"),s=i("9023"),a=i("4820"),r=i("7d5d");function h(t){this._name=t,this._clock=void 0,this._changed=new o["a"],this._error=new o["a"],this._isLoading=!1,this._loading=new o["a"],this._entityCollection=new r["a"](this),this._entityCluster=new a["a"]}Object(n["a"])(h.prototype,{name:{get:function(){return this._name},set:function(t){this._name!==t&&(this._name=t,this._changed.raiseEvent(this))}},clock:{get:function(){return this._clock},set:function(t){this._clock!==t&&(this._clock=t,this._changed.raiseEvent(this))}},entities:{get:function(){return this._entityCollection}},isLoading:{get:function(){return this._isLoading},set:function(t){s["a"].setLoading(this,t)}},changedEvent:{get:function(){return this._changed}},errorEvent:{get:function(){return this._error}},loadingEvent:{get:function(){return this._loading}},show:{get:function(){return this._entityCollection.show},set:function(t){this._entityCollection.show=t}},clustering:{get:function(){return this._entityCluster},set:function(t){this._entityCluster=t}}}),e["a"]=h},fef5:function(t,e,i){"use strict";var n=i("535a"),o=i("2f63"),s=i("9f1d"),a=i("21d7"),r=i("7749"),h=i("eff8"),c=i("026b"),l=i("ea07");function d(t,e,i,n){function s(){i.raiseEvent(t)}var a=[];e.removeAll();for(var r=n.length,h=0;h<r;h++){var c=n.get(h);Object(o["a"])(c.data)&&-1===a.indexOf(c.data)&&e.add(c.data.definitionChanged,s)}}function u(){this._eventHelper=new h["a"],this._definitionChanged=new a["a"],this._intervals=new c["a"],this._intervals.changedEvent.addEventListener(u.prototype._intervalsChanged,this)}Object(s["a"])(u.prototype,{isConstant:{get:function(){return this._intervals.isEmpty}},definitionChanged:{get:function(){return this._definitionChanged}},intervals:{get:function(){return this._intervals}}}),u.prototype.getValue=function(t,e){var i=this._intervals.findDataForIntervalContainingDate(t);if(Object(o["a"])(i))return i.getValue(t,e)},u.prototype.equals=function(t){return this===t||t instanceof u&&this._intervals.equals(t._intervals,l["a"].equals)},u.prototype._intervalsChanged=function(){d(this,this._eventHelper,this._definitionChanged,this._intervals),this._definitionChanged.raiseEvent(this)};var f=u;function p(t){this._referenceFrame=Object(n["a"])(t,r["a"].FIXED),this._definitionChanged=new a["a"],this._composite=new f,this._composite.definitionChanged.addEventListener(p.prototype._raiseDefinitionChanged,this)}Object(s["a"])(p.prototype,{isConstant:{get:function(){return this._composite.isConstant}},definitionChanged:{get:function(){return this._definitionChanged}},intervals:{get:function(){return this._composite.intervals}},referenceFrame:{get:function(){return this._referenceFrame},set:function(t){this._referenceFrame=t}}}),p.prototype.getValue=function(t,e){return this.getValueInReferenceFrame(t,r["a"].FIXED,e)},p.prototype.getValueInReferenceFrame=function(t,e,i){var n=this._composite._intervals.findDataForIntervalContainingDate(t);if(Object(o["a"])(n))return n.getValueInReferenceFrame(t,e,i)},p.prototype.equals=function(t){return this===t||t instanceof p&&this._referenceFrame===t._referenceFrame&&this._composite.equals(t._composite,l["a"].equals)},p.prototype._raiseDefinitionChanged=function(){this._definitionChanged.raiseEvent(this)};e["a"]=p}}]);