(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~3a5a00ac"],{"49c4":function(e,t,i){"use strict";var n=i("dd06"),r=i("670c"),a=i("be18"),s=i("bef8"),o=i("8dfe"),c=i("535a"),l=i("2f63"),u=i("9f1d"),m=i("45c5"),h=i("7d62"),d=i("c52f"),f=i("21d7"),p=i("5ed2"),_=i("7524"),g=i("93da"),b=i("52f0"),v=i("d4ed"),y=i("283e"),S=i("f806"),O=i("f845"),L=i("d289"),T=i("6dc0"),M=i("a58e"),x=i("b08e"),E=i("c0a9"),P=i("656b"),C=i("7abe"),A=i("9f0f"),w=i("d150"),D=i("c4a1"),F=i("8f14");function j(){this._list=new F["a"],this._sentinel=this._list.add(),this._trimTiles=!1}j.prototype.reset=function(){this._list.splice(this._list.tail,this._sentinel)},j.prototype.touch=function(e){var t=e.cacheNode;Object(l["a"])(t)&&this._list.splice(this._sentinel,t)},j.prototype.add=function(e){Object(l["a"])(e.cacheNode)||(e.cacheNode=this._list.add(e))},j.prototype.unloadTile=function(e,t,i){var n=t.cacheNode;Object(l["a"])(n)&&(this._list.remove(n),t.cacheNode=void 0,i(e,t))},j.prototype.unloadTiles=function(e,t){var i=this._trimTiles;this._trimTiles=!1;var n=this._list,r=1024*e.maximumMemoryUsage*1024,a=this._sentinel,s=n.head;while(s!==a&&(e.totalMemoryUsageInBytes>r||i)){var o=s.item;s=s.next,this.unloadTile(e,o,t)}},j.prototype.trim=function(){this._trimTiles=!0};var k=j,U=i("bd8d");function R(e){this.tilePropertyName=e,this._minimum=Number.MAX_VALUE,this._maximum=-Number.MAX_VALUE,this._previousMinimum=Number.MAX_VALUE,this._previousMaximum=-Number.MAX_VALUE,this._referenceMinimum={},this._referenceMaximum={}}function N(e,t){var i;return i="_loadTimestamp"===t?p["a"].toDate(e).getTime():e,i}function V(e,t){var i=e.tilePropertyName;if(Object(l["a"])(i)){var n=N(t[i],i);return Object(l["a"])(n)?(e._maximum=Math.max(n,e._maximum),e._minimum=Math.min(n,e._minimum),n):(e.tilePropertyName=void 0,n)}}R.prototype.setReferenceMinimumMaximum=function(e,t,i){this._referenceMinimum[i]=N(e,i),this._referenceMaximum[i]=N(t,i)};var B=[new U["a"](.1,.1,.1,1),new U["a"](.153,.278,.878,1),new U["a"](.827,.231,.49,1),new U["a"](.827,.188,.22,1),new U["a"](1,.592,.259,1),new U["a"](1,.843,0,1)];R.prototype.colorize=function(e,t){var i=this.tilePropertyName;if(Object(l["a"])(i)&&e.contentAvailable&&e._selectedFrame===t.frameNumber){var n=V(this,e),r=this._previousMinimum,a=this._previousMaximum;if(r!==Number.MAX_VALUE&&a!==-Number.MAX_VALUE){var s=a-r+g["a"].EPSILON7,o=g["a"].clamp(n-r,0,s),c=o/s,u=B.length-1,m=c*u,h=Math.floor(m),d=Math.ceil(m),f=m-h,p=B[h],_=B[d],b=U["a"].clone(U["a"].WHITE);b.red=g["a"].lerp(p.red,_.red,f),b.green=g["a"].lerp(p.green,_.green,f),b.blue=g["a"].lerp(p.blue,_.blue,f),e._debugColor=b}}},R.prototype.resetMinimumMaximum=function(){var e=this.tilePropertyName;if(Object(l["a"])(e)){var t=this._referenceMinimum[e],i=this._referenceMaximum[e],n=Object(l["a"])(t)&&Object(l["a"])(i);this._previousMinimum=n?t:this._minimum,this._previousMaximum=n?i:this._maximum,this._minimum=Number.MAX_VALUE,this._maximum=-Number.MAX_VALUE}};var W=R;function q(){this.selected=0,this.visited=0,this.numberOfCommands=0,this.numberOfAttemptedRequests=0,this.numberOfPendingRequests=0,this.numberOfTilesProcessing=0,this.numberOfTilesWithContentReady=0,this.numberOfTilesTotal=0,this.numberOfLoadedTilesTotal=0,this.numberOfFeaturesSelected=0,this.numberOfFeaturesLoaded=0,this.numberOfPointsSelected=0,this.numberOfPointsLoaded=0,this.numberOfTrianglesSelected=0,this.numberOfTilesStyled=0,this.numberOfFeaturesStyled=0,this.numberOfTilesCulledWithChildrenUnion=0,this.geometryByteLength=0,this.texturesByteLength=0,this.batchTableByteLength=0}function I(e,t,i,n){var r=t.innerContents,a=t.pointsLength,s=t.trianglesLength,o=t.featuresLength,c=t.geometryByteLength,u=t.texturesByteLength,m=t.batchTableByteLength;if(n?(e.numberOfFeaturesLoaded+=i?-o:o,e.numberOfPointsLoaded+=i?-a:a,e.geometryByteLength+=i?-c:c,e.texturesByteLength+=i?-u:u,e.batchTableByteLength+=i?-m:m):(e.numberOfFeaturesSelected+=i?-o:o,e.numberOfPointsSelected+=i?-a:a,e.numberOfTrianglesSelected+=i?-s:s),Object(l["a"])(r))for(var h=r.length,d=0;d<h;++d)I(e,r[d],i,n)}q.prototype.clear=function(){this.selected=0,this.visited=0,this.numberOfCommands=0,this.numberOfAttemptedRequests=0,this.numberOfFeaturesSelected=0,this.numberOfPointsSelected=0,this.numberOfTrianglesSelected=0,this.numberOfTilesStyled=0,this.numberOfFeaturesStyled=0,this.numberOfTilesCulledWithChildrenUnion=0},q.prototype.incrementSelectionCounts=function(e){I(this,e,!1,!1)},q.prototype.incrementLoadCounts=function(e){I(this,e,!1,!0)},q.prototype.decrementLoadCounts=function(e){I(this,e,!0,!0)},q.clone=function(e,t){t.selected=e.selected,t.visited=e.visited,t.numberOfCommands=e.numberOfCommands,t.selected=e.selected,t.numberOfAttemptedRequests=e.numberOfAttemptedRequests,t.numberOfPendingRequests=e.numberOfPendingRequests,t.numberOfTilesProcessing=e.numberOfTilesProcessing,t.numberOfTilesWithContentReady=e.numberOfTilesWithContentReady,t.numberOfTilesTotal=e.numberOfTilesTotal,t.numberOfFeaturesSelected=e.numberOfFeaturesSelected,t.numberOfFeaturesLoaded=e.numberOfFeaturesLoaded,t.numberOfPointsSelected=e.numberOfPointsSelected,t.numberOfPointsLoaded=e.numberOfPointsLoaded,t.numberOfTrianglesSelected=e.numberOfTrianglesSelected,t.numberOfTilesStyled=e.numberOfTilesStyled,t.numberOfFeaturesStyled=e.numberOfFeaturesStyled,t.numberOfTilesCulledWithChildrenUnion=e.numberOfTilesCulledWithChildrenUnion,t.geometryByteLength=e.geometryByteLength,t.texturesByteLength=e.texturesByteLength,t.batchTableByteLength=e.batchTableByteLength};var H=q,X=i("9e51"),z=i("43ee"),G=i("04e1"),J=i("2ab8"),Q=i("7b4a"),Y=i("a307"),Z=i("c86b"),K=i("3626"),$=i("1ec0"),ee=i("eb1f"),te=i("8cfb");function ie(e){e=Object(c["a"])(e,c["a"].EMPTY_OBJECT),this._url=void 0,this._basePath=void 0,this._root=void 0,this._asset=void 0,this._properties=void 0,this._geometricError=void 0,this._extensionsUsed=void 0,this._gltfUpAxis=void 0,this._cache=new k,this._processingQueue=[],this._selectedTiles=[],this._emptyTiles=[],this._requestedTiles=[],this._selectedTilesToStyle=[],this._loadTimestamp=void 0,this._timeSinceLoad=0,this._updatedVisibilityFrame=0,this._extras=void 0,this._credits=void 0,this._cullWithChildrenBounds=Object(c["a"])(e.cullWithChildrenBounds,!0),this._allTilesAdditive=!0,this._hasMixedContent=!1,this._stencilClearCommand=void 0,this._backfaceCommands=new _["a"],this._maximumScreenSpaceError=Object(c["a"])(e.maximumScreenSpaceError,16),this._maximumMemoryUsage=Object(c["a"])(e.maximumMemoryUsage,512),this._styleEngine=new X["a"],this._modelMatrix=Object(l["a"])(e.modelMatrix)?b["a"].clone(e.modelMatrix):b["a"].clone(b["a"].IDENTITY),this._statistics=new H,this._statisticsLast=new H,this._statisticsPerPass=new Array(w["a"].NUMBER_OF_PASSES);for(var t=0;t<w["a"].NUMBER_OF_PASSES;++t)this._statisticsPerPass[t]=new H;this._requestedTilesInFlight=[],this._maximumPriority={foveatedFactor:-Number.MAX_VALUE,depth:-Number.MAX_VALUE,distance:-Number.MAX_VALUE,reverseScreenSpaceError:-Number.MAX_VALUE},this._minimumPriority={foveatedFactor:Number.MAX_VALUE,depth:Number.MAX_VALUE,distance:Number.MAX_VALUE,reverseScreenSpaceError:Number.MAX_VALUE},this._heatmap=new W(e.debugHeatmapTilePropertyName),this.cullRequestsWhileMoving=Object(c["a"])(e.cullRequestsWhileMoving,!0),this.cullRequestsWhileMovingMultiplier=Object(c["a"])(e.cullRequestsWhileMovingMultiplier,60),this.progressiveResolutionHeightFraction=g["a"].clamp(Object(c["a"])(e.progressiveResolutionHeightFraction,.3),0,.5),this.preferLeaves=Object(c["a"])(e.preferLeaves,!1),this._tilesLoaded=!1,this._initialTilesLoaded=!1,this._tileDebugLabels=void 0,this._readyPromise=M["a"].defer(),this._classificationType=e.classificationType,this._ellipsoid=Object(c["a"])(e.ellipsoid,d["a"].WGS84),this._initialClippingPlanesOriginMatrix=b["a"].IDENTITY,this._clippingPlanesOriginMatrix=void 0,this._clippingPlanesOriginMatrixDirty=!0,this.preloadWhenHidden=Object(c["a"])(e.preloadWhenHidden,!1),this.preloadFlightDestinations=Object(c["a"])(e.preloadFlightDestinations,!0),this._pass=void 0,this.dynamicScreenSpaceError=Object(c["a"])(e.dynamicScreenSpaceError,!1),this.foveatedScreenSpaceError=Object(c["a"])(e.foveatedScreenSpaceError,!0),this._foveatedConeSize=Object(c["a"])(e.foveatedConeSize,.1),this._foveatedMinimumScreenSpaceErrorRelaxation=Object(c["a"])(e.foveatedMinimumScreenSpaceErrorRelaxation,0),this.foveatedInterpolationCallback=Object(c["a"])(e.foveatedInterpolationCallback,g["a"].lerp),this.foveatedTimeDelay=Object(c["a"])(e.foveatedTimeDelay,.2),this.dynamicScreenSpaceErrorDensity=.00278,this.dynamicScreenSpaceErrorFactor=4,this.dynamicScreenSpaceErrorHeightFalloff=.25,this._dynamicScreenSpaceErrorComputedDensity=0,this.shadows=Object(c["a"])(e.shadows,Z["a"].ENABLED),this.show=Object(c["a"])(e.show,!0),this.colorBlendMode=P["a"].HIGHLIGHT,this.colorBlendAmount=.5,this.pointCloudShading=new Q["a"](e.pointCloudShading),this._pointCloudEyeDomeLighting=new J["a"],this.loadProgress=new f["a"],this.allTilesLoaded=new f["a"],this.initialTilesLoaded=new f["a"],this.tileLoad=new f["a"],this.tileUnload=new f["a"],this.tileFailed=new f["a"],this.tileVisible=new f["a"],this.skipLevelOfDetail=Object(c["a"])(e.skipLevelOfDetail,!0),this._skipLevelOfDetail=this.skipLevelOfDetail,this._disableSkipLevelOfDetail=!1,this.baseScreenSpaceError=Object(c["a"])(e.baseScreenSpaceError,1024),this.skipScreenSpaceErrorFactor=Object(c["a"])(e.skipScreenSpaceErrorFactor,16),this.skipLevels=Object(c["a"])(e.skipLevels,1),this.immediatelyLoadDesiredLevelOfDetail=Object(c["a"])(e.immediatelyLoadDesiredLevelOfDetail,!1),this.loadSiblings=Object(c["a"])(e.loadSiblings,!1),this._clippingPlanes=void 0,this.clippingPlanes=e.clippingPlanes,this._imageBasedLightingFactor=new r["a"](1,1),r["a"].clone(e.imageBasedLightingFactor,this._imageBasedLightingFactor),this.lightColor=e.lightColor,this.luminanceAtZenith=Object(c["a"])(e.luminanceAtZenith,.2),this.sphericalHarmonicCoefficients=e.sphericalHarmonicCoefficients,this.specularEnvironmentMaps=e.specularEnvironmentMaps,this.debugFreezeFrame=Object(c["a"])(e.debugFreezeFrame,!1),this.debugColorizeTiles=Object(c["a"])(e.debugColorizeTiles,!1),this.debugWireframe=Object(c["a"])(e.debugWireframe,!1),this.debugShowBoundingVolume=Object(c["a"])(e.debugShowBoundingVolume,!1),this.debugShowContentBoundingVolume=Object(c["a"])(e.debugShowContentBoundingVolume,!1),this.debugShowViewerRequestVolume=Object(c["a"])(e.debugShowViewerRequestVolume,!1),this._tileDebugLabels=void 0,this.debugPickedTileLabelOnly=!1,this.debugPickedTile=void 0,this.debugPickPosition=void 0,this.debugShowGeometricError=Object(c["a"])(e.debugShowGeometricError,!1),this.debugShowRenderingStatistics=Object(c["a"])(e.debugShowRenderingStatistics,!1),this.debugShowMemoryUsage=Object(c["a"])(e.debugShowMemoryUsage,!1),this.debugShowUrl=Object(c["a"])(e.debugShowUrl,!1);var i,a=this;Object(M["a"])(e.url).then((function(e){var t;return i=v["a"].createIfNeeded(e),a._credits=i.credits,"json"===i.extension?t=i.getBaseUri(!0):i.isDataUri&&(t=""),a._url=i.url,a._basePath=t,ie.loadJson(i)})).then((function(e){a._root=a.loadTileset(i,e);var t=Object(l["a"])(e.asset.gltfUpAxis)?x["a"].fromName(e.asset.gltfUpAxis):x["a"].Y,r=e.asset;a._asset=r,a._properties=e.properties,a._geometricError=e.geometricError,a._extensionsUsed=e.extensionsUsed,a._gltfUpAxis=t,a._extras=e.extras;var s=r.extras;if(Object(l["a"])(s)&&Object(l["a"])(s.cesium)&&Object(l["a"])(s.cesium.credits)){var c=s.cesium.credits,u=a._credits;Object(l["a"])(u)||(u=[],a._credits=u);for(var m=0;m<c.length;++m){var h=c[m];u.push(new o["a"](h.html,h.showOnScreen))}}var d=a._root.createBoundingVolume(e.root.boundingVolume,b["a"].IDENTITY),f=d.boundingSphere.center,p=a._ellipsoid.cartesianToCartographic(f);Object(l["a"])(p)&&p.height>n["a"]._defaultMinTerrainHeight&&(a._initialClippingPlanesOriginMatrix=S["a"].eastNorthUpToFixedFrame(f)),a._clippingPlanesOriginMatrix=b["a"].clone(a._initialClippingPlanesOriginMatrix),a._readyPromise.resolve(a)})).otherwise((function(e){a._readyPromise.reject(e)}))}Object(u["a"])(ie.prototype,{asset:{get:function(){return this._asset}},clippingPlanes:{get:function(){return this._clippingPlanes},set:function(e){z["a"].setOwner(e,this,"_clippingPlanes")}},properties:{get:function(){return this._properties}},ready:{get:function(){return Object(l["a"])(this._root)}},readyPromise:{get:function(){return this._readyPromise.promise}},tilesLoaded:{get:function(){return this._tilesLoaded}},url:{get:function(){return this._url}},basePath:{get:function(){return Object(m["a"])("Cesium3DTileset.basePath","Cesium3DTileset.basePath has been deprecated. All tiles are relative to the url of the tileset JSON file that contains them. Use the url property instead."),this._basePath}},style:{get:function(){return this._styleEngine.style},set:function(e){this._styleEngine.style=e}},maximumScreenSpaceError:{get:function(){return this._maximumScreenSpaceError},set:function(e){this._maximumScreenSpaceError=e}},maximumMemoryUsage:{get:function(){return this._maximumMemoryUsage},set:function(e){this._maximumMemoryUsage=e}},root:{get:function(){return this._root}},boundingSphere:{get:function(){return this._root.updateTransform(this._modelMatrix),this._root.boundingSphere}},modelMatrix:{get:function(){return this._modelMatrix},set:function(e){this._modelMatrix=b["a"].clone(e,this._modelMatrix)}},timeSinceLoad:{get:function(){return this._timeSinceLoad}},totalMemoryUsageInBytes:{get:function(){var e=this._statistics;return e.texturesByteLength+e.geometryByteLength+e.batchTableByteLength}},clippingPlanesOriginMatrix:{get:function(){return Object(l["a"])(this._clippingPlanesOriginMatrix)?(this._clippingPlanesOriginMatrixDirty&&(b["a"].multiply(this.root.computedTransform,this._initialClippingPlanesOriginMatrix,this._clippingPlanesOriginMatrix),this._clippingPlanesOriginMatrixDirty=!1),this._clippingPlanesOriginMatrix):b["a"].IDENTITY}},styleEngine:{get:function(){return this._styleEngine}},statistics:{get:function(){return this._statistics}},classificationType:{get:function(){return this._classificationType}},ellipsoid:{get:function(){return this._ellipsoid}},foveatedConeSize:{get:function(){return this._foveatedConeSize},set:function(e){this._foveatedConeSize=e}},foveatedMinimumScreenSpaceErrorRelaxation:{get:function(){return this._foveatedMinimumScreenSpaceErrorRelaxation},set:function(e){this._foveatedMinimumScreenSpaceErrorRelaxation=e}},extras:{get:function(){return this._extras}},imageBasedLightingFactor:{get:function(){return this._imageBasedLightingFactor},set:function(e){r["a"].clone(e,this._imageBasedLightingFactor)}}}),ie.loadJson=function(e){var t=v["a"].createIfNeeded(e);return t.fetchJson()},ie.prototype.makeStyleDirty=function(){this._styleEngine.makeDirty()},ie.prototype.loadTileset=function(e,t,i){var n=t.asset;if(!Object(l["a"])(n))throw new y["a"]("Tileset must have an asset property.");if("0.0"!==n.version&&"1.0"!==n.version)throw new y["a"]("The tileset must be 3D Tiles version 0.0 or 1.0.");var r=this._statistics,a=n.tilesetVersion;Object(l["a"])(a)&&(this._basePath+="?v="+a,e.setQueryParameters({v:a}));var s=new E["a"](this,e,t.root,i);Object(l["a"])(i)&&(i.children.push(s),s._depth=i._depth+1);var o=[];o.push(s);while(o.length>0){var c=o.pop();++r.numberOfTilesTotal,this._allTilesAdditive=this._allTilesAdditive&&c.refine===D["a"].ADD;var u=c._header.children;if(Object(l["a"])(u))for(var m=u.length,h=0;h<m;++h){var d=u[h],f=new E["a"](this,e,d,c);c.children.push(f),f._depth=c._depth+1,o.push(f)}this._cullWithChildrenBounds&&A["a"].checkChildrenWithinParent(c)}return s};var ne=new a["a"],re=new s["a"],ae=new b["a"],se=new a["a"],oe=new a["a"],ce=new a["a"];function le(e,t){var i,n,r,o,c,l=t.camera,u=e._root,m=u.contentBoundingVolume;if(m instanceof $["a"])i=a["a"].normalize(l.positionWC,ne),n=l.directionWC,r=l.positionCartographic.height,o=m.minimumHeight,c=m.maximumHeight;else{var h=b["a"].inverseTransformation(u.computedTransform,ae),d=t.mapProjection.ellipsoid,f=m.boundingVolume,p=b["a"].multiplyByPoint(h,f.center,se);if(a["a"].magnitude(p)>d.minimumRadius){var _=s["a"].fromCartesian(p,d,re);i=a["a"].normalize(l.positionWC,ne),n=l.directionWC,r=l.positionCartographic.height,o=0,c=2*_.height}else{var v=b["a"].multiplyByPoint(h,l.positionWC,oe);if(i=a["a"].UNIT_Z,n=b["a"].multiplyByPointAsVector(h,l.directionWC,ce),n=a["a"].normalize(n,n),r=v.z,m instanceof te["a"]){var y=u._header.boundingVolume.box[11];o=p.z-y,c=p.z+y}else if(m instanceof ee["a"]){var S=f.radius;o=p.z-S,c=p.z+S}}}var O=e.dynamicScreenSpaceErrorHeightFalloff,L=o+(c-o)*O,T=c,M=g["a"].clamp((r-L)/(T-L),0,1),x=Math.abs(a["a"].dot(n,i)),E=1-x;E*=1-M;var P=e.dynamicScreenSpaceErrorDensity;P*=E,e._dynamicScreenSpaceErrorComputedDensity=P}function ue(e,t){if(!t.hasEmptyContent){var i=e._statistics,n=t.contentExpired,r=t.requestContent();r?(n&&(t.hasTilesetContent?Ee(e,t):(i.decrementLoadCounts(t.content),--i.numberOfTilesWithContentReady)),++i.numberOfPendingRequests,e._requestedTilesInFlight.push(t),t.contentReadyToProcessPromise.then(fe(e,t)),t.contentReadyPromise.then(_e(e,t)).otherwise(pe(e,t))):++i.numberOfAttemptedRequests}}function me(e,t){return e._priority-t._priority}function he(e,t){for(var i=e._requestedTilesInFlight,n=0,r=i.length,a=0;a<r;++a){var s=i[a],o=t.frameNumber-s._touchedFrame>=1;s._contentState===C["a"].LOADING?o?(s._request.cancel(),++n):n>0&&(i[a-n]=s):++n}i.length-=n}function de(e,t){var i=e._requestedTiles,n=i.length;i.sort(me);for(var r=0;r<n;++r)ue(e,i[r])}function fe(e,t){return function(){e._processingQueue.push(t),--e._statistics.numberOfPendingRequests,++e._statistics.numberOfTilesProcessing}}function pe(e,t){return function(i){e._processingQueue.indexOf(t)>=0?--e._statistics.numberOfTilesProcessing:--e._statistics.numberOfPendingRequests;var n=t._contentResource.url,r=Object(l["a"])(i.message)?i.message:i.toString();e.tileFailed.numberOfListeners>0?e.tileFailed.raiseEvent({url:n,message:r}):(console.log("A 3D tile failed to load: "+n),console.log("Error: "+r))}}function _e(e,t){return function(){--e._statistics.numberOfTilesProcessing,t.hasTilesetContent||(e._statistics.incrementLoadCounts(t.content),++e._statistics.numberOfTilesWithContentReady,++e._statistics.numberOfLoadedTilesTotal,e._cache.add(t)),e.tileLoad.raiseEvent(t)}}function ge(e){for(var t=e._processingQueue,i=t.length,n=0,r=0;r<i;++r){var a=t[r];a._contentState===C["a"].PROCESSING?n>0&&(t[r-n]=a):++n}t.length-=n}function be(e,t){ge(e);for(var i=e._processingQueue,n=i.length,r=0;r<n;++r)i[r].process(e,t)}ie.prototype.postPassesUpdate=function(e){this.ready&&(he(this,e),Ae(this,e),this._cache.unloadTiles(this,Pe))},ie.prototype.prePassesUpdate=function(e){if(this.ready){be(this,e);var t=this._clippingPlanes;this._clippingPlanesOriginMatrixDirty=!0,Object(l["a"])(t)&&t.enabled&&t.update(e),Object(l["a"])(this._loadTimestamp)||(this._loadTimestamp=p["a"].clone(e.time)),this._timeSinceLoad=Math.max(1e3*p["a"].secondsDifference(e.time,this._loadTimestamp),0),this._skipLevelOfDetail=this.skipLevelOfDetail&&!Object(l["a"])(this._classificationType)&&!this._disableSkipLevelOfDetail&&!this._allTilesAdditive,this.dynamicScreenSpaceError&&le(this,e),e.newFrame&&this._cache.reset()}};var ve=new a["a"],ye={maximumFractionDigits:3};function Se(e){var t=e/1048576;return t<1?t.toLocaleString(void 0,ye):Math.round(t).toLocaleString()}function Oe(e){var t=e.boundingVolume.boundingVolume,i=t.halfAxes,n=t.radius,r=a["a"].clone(t.center,ve);if(Object(l["a"])(i))r.x+=.75*(i[0]+i[3]+i[6]),r.y+=.75*(i[1]+i[4]+i[7]),r.z+=.75*(i[2]+i[5]+i[8]);else if(Object(l["a"])(n)){var s=a["a"].normalize(t.center,ve);s=a["a"].multiplyByScalar(s,.75*n,ve),r=a["a"].add(s,t.center,ve)}return r}function Le(e,t,i){var n="",r=0;if(t.debugShowGeometricError&&(n+="\nGeometric error: "+e.geometricError,r++),t.debugShowRenderingStatistics){n+="\nCommands: "+e.commandsLength,r++;var a=e.content.pointsLength;a>0&&(n+="\nPoints: "+e.content.pointsLength,r++);var s=e.content.trianglesLength;s>0&&(n+="\nTriangles: "+e.content.trianglesLength,r++),n+="\nFeatures: "+e.content.featuresLength,r++}t.debugShowMemoryUsage&&(n+="\nTexture Memory: "+Se(e.content.texturesByteLength),n+="\nGeometry Memory: "+Se(e.content.geometryByteLength),r+=2),t.debugShowUrl&&(n+="\nUrl: "+e._header.content.uri,r++);var o={text:n.substring(1),position:i,font:19-r+"px sans-serif",showBackground:!0,disableDepthTestDistance:Number.POSITIVE_INFINITY};return t._tileDebugLabels.add(o)}function Te(e,t){var i,n,a=e._selectedTiles,s=a.length,o=e._emptyTiles,c=o.length;if(e._tileDebugLabels.removeAll(),e.debugPickedTileLabelOnly){if(Object(l["a"])(e.debugPickedTile)){var u=Object(l["a"])(e.debugPickPosition)?e.debugPickPosition:Oe(e.debugPickedTile),m=Le(e.debugPickedTile,e,u);m.pixelOffset=new r["a"](15,-15)}}else{for(i=0;i<s;++i)n=a[i],Le(n,e,Oe(n));for(i=0;i<c;++i)n=o[i],n.hasTilesetContent&&Le(n,e,Oe(n))}e._tileDebugLabels.update(t)}function Me(e,t,i){e._styleEngine.applyStyle(e,t);var n,r,a=e._statistics,s=t.commandList,o=s.length,c=e._selectedTiles,u=c.length,m=e._emptyTiles,h=m.length,d=e.tileVisible,f=e._skipLevelOfDetail&&e._hasMixedContent&&t.context.stencilBuffer&&u>0;e._backfaceCommands.length=0,f&&(Object(l["a"])(e._stencilClearCommand)||(e._stencilClearCommand=new O["a"]({stencil:0,pass:L["a"].CESIUM_3D_TILE,renderState:T["a"].fromCache({stencilMask:K["a"].SKIP_LOD_MASK})})),s.push(e._stencilClearCommand));var p=s.length;for(n=0;n<u;++n)r=c[n],i&&d.raiseEvent(r),r.update(e,t),a.incrementSelectionCounts(r.content),++a.selected;for(n=0;n<h;++n)r=m[n],r.update(e,t);var _=s.length-p;if(e._backfaceCommands.trim(),f){var g=e._backfaceCommands.values,b=g.length;for(s.length+=b,n=_-1;n>=0;--n)s[p+b+n]=s[p+n];for(n=0;n<b;++n)s[p+n]=g[n]}_=s.length-o,a.numberOfCommands=_,i&&e.pointCloudShading.attenuation&&e.pointCloudShading.eyeDomeLighting&&_>0&&e._pointCloudEyeDomeLighting.update(t,o,e.pointCloudShading),i&&(e.debugShowGeometricError||e.debugShowRenderingStatistics||e.debugShowMemoryUsage||e.debugShowUrl?(Object(l["a"])(e._tileDebugLabels)||(e._tileDebugLabels=new G["a"]),Te(e,t)):e._tileDebugLabels=e._tileDebugLabels&&e._tileDebugLabels.destroy())}var xe=[];function Ee(e,t){var i=t,n=xe;n.push(t);while(n.length>0){t=n.pop();for(var r=t.children,a=r.length,s=0;s<a;++s)n.push(r[s]);t!==i&&(Ce(e,t),--e._statistics.numberOfTilesTotal)}i.children=[]}function Pe(e,t){e.tileUnload.raiseEvent(t),e._statistics.decrementLoadCounts(t.content),--e._statistics.numberOfTilesWithContentReady,t.unloadContent()}function Ce(e,t){e._cache.unloadTile(e,t,Pe),t.destroy()}function Ae(e,t){var i=e._statistics,n=e._statisticsLast,r=i.numberOfPendingRequests,a=i.numberOfTilesProcessing,s=n.numberOfPendingRequests,o=n.numberOfTilesProcessing;H.clone(i,n);var c=r!==s||a!==o;c&&t.afterRender.push((function(){e.loadProgress.raiseEvent(r,a)})),e._tilesLoaded=0===i.numberOfPendingRequests&&0===i.numberOfTilesProcessing&&0===i.numberOfAttemptedRequests,c&&e._tilesLoaded&&(t.afterRender.push((function(){e.allTilesLoaded.raiseEvent()})),e._initialTilesLoaded||(e._initialTilesLoaded=!0,t.afterRender.push((function(){e.initialTilesLoaded.raiseEvent()}))))}function we(e){e._heatmap.resetMinimumMaximum(),e._minimumPriority.depth=Number.MAX_VALUE,e._maximumPriority.depth=-Number.MAX_VALUE,e._minimumPriority.foveatedFactor=Number.MAX_VALUE,e._maximumPriority.foveatedFactor=-Number.MAX_VALUE,e._minimumPriority.distance=Number.MAX_VALUE,e._maximumPriority.distance=-Number.MAX_VALUE,e._minimumPriority.reverseScreenSpaceError=Number.MAX_VALUE,e._maximumPriority.reverseScreenSpaceError=-Number.MAX_VALUE}function De(e,t,i,n){if(t.mode===Y["a"].MORPHING)return!1;if(!e.ready)return!1;var r=e._statistics;r.clear();var a=n.isRender;++e._updatedVisibilityFrame,we(e);var s=n.traversal.selectTiles(e,t);if(n.requestTiles&&de(e),Me(e,t,a),H.clone(r,i),a){var o=e._credits;if(Object(l["a"])(o)&&0!==r.selected)for(var c=o.length,u=0;u<c;++u)t.creditDisplay.addCredit(o[u])}return s}ie.prototype.trimLoadedTiles=function(){this._cache.trim()},ie.prototype.update=function(e){this.updateForPass(e,e.tilesetPassState)},ie.prototype.updateForPass=function(e,t){var i=t.pass;if((i!==w["a"].PRELOAD||this.preloadWhenHidden&&!this.show)&&(i!==w["a"].PRELOAD_FLIGHT||this.preloadFlightDestinations&&(this.show||this.preloadWhenHidden))&&(i!==w["a"].REQUEST_RENDER_MODE_DEFER_CHECK||!(!this.cullRequestsWhileMoving&&this.foveatedTimeDelay<=0||!this.show))){var n=e.commandList,r=e.camera,a=e.cullingVolume;t.ready=!1;var s=w["a"].getPassOptions(i),o=s.ignoreCommands,l=Object(c["a"])(t.commandList,n),u=l.length;e.commandList=l,e.camera=Object(c["a"])(t.camera,r),e.cullingVolume=Object(c["a"])(t.cullingVolume,a);var m=this._statisticsPerPass[i];(this.show||o)&&(this._pass=i,t.ready=De(this,e,m,s)),o&&(l.length=u),e.commandList=n,e.camera=r,e.cullingVolume=a}},ie.prototype.hasExtension=function(e){return!!Object(l["a"])(this._extensionsUsed)&&this._extensionsUsed.indexOf(e)>-1},ie.prototype.isDestroyed=function(){return!1},ie.prototype.destroy=function(){if(this._tileDebugLabels=this._tileDebugLabels&&this._tileDebugLabels.destroy(),this._clippingPlanes=this._clippingPlanes&&this._clippingPlanes.destroy(),Object(l["a"])(this._root)){var e=xe;e.push(this._root);while(e.length>0){var t=e.pop();t.destroy();for(var i=t.children,n=i.length,r=0;r<n;++r)e.push(i[r])}}return this._root=void 0,Object(h["a"])(this)};t["a"]=ie},"859c":function(e,t,i){"use strict";var n=i("2f63"),r=i("66bf"),a=i("7524"),s=i("6380"),o=i("c4a1");function c(){}function l(e){return e._visible&&e._inRequestVolume}var u={stack:new a["a"],stackMaximumLength:0},m={stack:new a["a"],stackMaximumLength:0},h={stack:new a["a"],stackMaximumLength:0},d={stack:new a["a"],stackMaximumLength:0,ancestorStack:new a["a"],ancestorStackMaximumLength:0},f=2;function p(e,t,i){var n=e._maximumScreenSpaceError,r=e._maximumScreenSpaceError;W(e,t,n,r,i)}function _(e,t,i){var n=Number.MAX_VALUE,r=e._maximumScreenSpaceError;W(e,t,n,r,i),I(e,t,i)}function g(e,t,i){var n=Math.max(e.baseScreenSpaceError,e.maximumScreenSpaceError),r=e.maximumScreenSpaceError;W(e,t,n,r,i),I(e,t,i)}function b(e){return e._skipLevelOfDetail}function v(e,t){e._emptyTiles.push(t)}function y(e,t,i){if(t.contentVisibility(i)!==r["a"].OUTSIDE){var n=t.content;n.featurePropertiesDirty?(n.featurePropertiesDirty=!1,t.lastStyleTime=0,e._selectedTilesToStyle.push(t)):t._selectedFrame<i.frameNumber-1&&e._selectedTilesToStyle.push(t),t._selectedFrame=i.frameNumber,e._selectedTiles.push(t)}}function S(e,t,i){var n=h.stack;n.push(t);while(n.length>0){h.stackMaximumLength=Math.max(h.stackMaximumLength,n.length);for(var r=n.pop(),a=r.children,s=a.length,o=0;o<s;++o){var c=a[o];l(c)&&(c.contentAvailable?(D(e,c,i),T(e,c,i),y(e,c,i)):c._depth-t._depth<f&&n.push(c))}}}function O(e,t,i){if(b(e)){var r=t.contentAvailable?t:t._ancestorWithContentAvailable;Object(n["a"])(r)?r._shouldSelect=!0:S(e,t,i)}else t.contentAvailable&&y(e,t,i)}function L(e,t,i){++e._statistics.visited,t._visitedFrame=i.frameNumber}function T(e,t,i){t._touchedFrame!==i.frameNumber&&(e._cache.touch(t),t._touchedFrame=i.frameNumber)}function M(e,t){e._maximumPriority.distance=Math.max(t._priorityHolder._distanceToCamera,e._maximumPriority.distance),e._minimumPriority.distance=Math.min(t._priorityHolder._distanceToCamera,e._minimumPriority.distance),e._maximumPriority.depth=Math.max(t._depth,e._maximumPriority.depth),e._minimumPriority.depth=Math.min(t._depth,e._minimumPriority.depth),e._maximumPriority.foveatedFactor=Math.max(t._priorityHolder._foveatedFactor,e._maximumPriority.foveatedFactor),e._minimumPriority.foveatedFactor=Math.min(t._priorityHolder._foveatedFactor,e._minimumPriority.foveatedFactor),e._maximumPriority.reverseScreenSpaceError=Math.max(t._priorityReverseScreenSpaceError,e._maximumPriority.reverseScreenSpaceError),e._minimumPriority.reverseScreenSpaceError=Math.min(t._priorityReverseScreenSpaceError,e._minimumPriority.reverseScreenSpaceError)}function x(e,t,i){if(!e.cullRequestsWhileMoving)return!0;var n=t.boundingSphere,r=Math.max(2*n.radius,1),a=i.camera,s=0!==a.positionWCDeltaMagnitude?a.positionWCDeltaMagnitude:a.positionWCDeltaMagnitudeLastFrame,o=e.cullRequestsWhileMovingMultiplier*s/r;return o<1}function E(e,t,i){if(t._requestedFrame!==i.frameNumber&&(k(t)||t.contentExpired)&&x(e,t,i)){var n=i.camera.timeSinceMoved<e.foveatedTimeDelay;t.priorityDeferred&&n||(t._requestedFrame=i.frameNumber,e._requestedTiles.push(t))}}function P(e,t,i){t._updatedVisibilityFrame!==e._updatedVisibilityFrame&&(t.updateVisibility(i),t._updatedVisibilityFrame=e._updatedVisibilityFrame)}function C(e,t,i){for(var n=!1,r=t.children,a=r.length,s=0;s<a;++s){var o=r[s];P(e,o,i),n=n||l(o)}return n}function A(e,t,i){var r=t.parent;return!(!Object(n["a"])(r)||r.hasTilesetContent||r.refine!==o["a"].ADD)&&t.getScreenSpaceError(i,!0)<=e._maximumScreenSpaceError}function w(e,t,i){if(P(e,t,i),l(t)){var n=t.children.length>0;if(t.hasTilesetContent&&n){var r=t.children[0];return w(e,r,i),void(t._visible=r._visible)}if(!A(e,t,i)){var a=t.refine===o["a"].REPLACE,c=t._optimChildrenWithinParent===s["a"].USE_OPTIMIZATION;return a&&c&&n&&!C(e,t,i)?(++e._statistics.numberOfTilesCulledWithChildrenUnion,void(t._visible=!1)):void 0}t._visible=!1}}function D(e,t,i){w(e,t,i),t.updateExpiration(),t._wasMinPriorityChild=!1,t._priorityHolder=t,M(e,t),t._shouldSelect=!1,t._finalResolution=!0}function F(e,t){e._ancestorWithContent=void 0,e._ancestorWithContentAvailable=void 0;var i=e.parent;if(Object(n["a"])(i)){var r=!k(i)||i._requestedFrame===t.frameNumber;e._ancestorWithContent=r?i:i._ancestorWithContent,e._ancestorWithContentAvailable=i.contentAvailable?i:i._ancestorWithContentAvailable}}function j(e){return e.hasEmptyContent||e.hasTilesetContent}function k(e){return!j(e)&&e.contentUnloaded}function U(e,t){var i=t._ancestorWithContent;return!e.immediatelyLoadDesiredLevelOfDetail&&(t._priorityProgressiveResolutionScreenSpaceErrorLeaf||Object(n["a"])(i)&&t._screenSpaceError<i._screenSpaceError/e.skipScreenSpaceErrorFactor&&t._depth>i._depth+e.skipLevels)}function R(e,t){return 0===t._distanceToCamera&&0===e._distanceToCamera?t._centerZDepth-e._centerZDepth:t._distanceToCamera-e._distanceToCamera}function N(e,t,i,n){var r,a=t.refine===o["a"].REPLACE,s=t.children,c=s.length;for(r=0;r<c;++r)D(e,s[r],n);s.sort(R);var u,m=!b(e)&&a&&!j(t),h=!0,d=!1,f=-1,p=Number.MAX_VALUE;for(r=0;r<c;++r){var _;if(u=s[r],l(u)?(i.push(u),u._foveatedFactor<p&&(f=r,p=u._foveatedFactor),d=!0):(m||e.loadSiblings)&&(u._foveatedFactor<p&&(f=r,p=u._foveatedFactor),E(e,u,n),T(e,u,n)),m)_=!!u._inRequestVolume&&(j(u)?q(e,u,n):u.contentAvailable),h=h&&_}if(d||(h=!1),-1!==f&&!b(e)&&a){var g=s[f];g._wasMinPriorityChild=!0;var v=(t._wasMinPriorityChild||t===e.root)&&p<=t._priorityHolder._foveatedFactor?t._priorityHolder:t;for(v._foveatedFactor=Math.min(g._foveatedFactor,v._foveatedFactor),v._distanceToCamera=Math.min(g._distanceToCamera,v._distanceToCamera),r=0;r<c;++r)u=s[r],u._priorityHolder=v}return h}function V(e,t,i){return!b(e)||!e.immediatelyLoadDesiredLevelOfDetail&&(!Object(n["a"])(t._ancestorWithContent)||(0===t._screenSpaceError?t.parent._screenSpaceError>i:t._screenSpaceError>i))}function B(e,t){return 0!==t.children.length&&(t.hasTilesetContent?!t.contentExpired:t._screenSpaceError>e._maximumScreenSpaceError)}function W(e,t,i,r,a){var s=u.stack;s.push(t);while(s.length>0){u.stackMaximumLength=Math.max(u.stackMaximumLength,s.length);var c=s.pop();F(c,a);var l=V(e,c,i),m=c.refine===o["a"].ADD,h=c.refine===o["a"].REPLACE,d=c.parent,f=!Object(n["a"])(d)||d._refines,p=!1;B(e,c)&&(p=N(e,c,s,a)&&f);var _=!p&&f;j(c)?(v(e,c,a),E(e,c,a),_&&O(e,c,a)):m?(O(e,c,a),E(e,c,a)):h&&(l?(E(e,c,a),_&&O(e,c,a)):_?(O(e,c,a),E(e,c,a)):U(e,c)&&E(e,c,a)),L(e,c,a),T(e,c,a),c._refines=p}}function q(e,t,i){var n=!0,r=m.stack;r.push(t);while(r.length>0){m.stackMaximumLength=Math.max(m.stackMaximumLength,r.length);var a=r.pop(),s=a.children,o=s.length,c=j(a)&&B(e,a);if(c||a.contentAvailable||(n=!1),D(e,a,i),l(a)||(E(e,a,i),T(e,a,i)),c)for(var u=0;u<o;++u){var h=s[u];r.push(h)}}return n}function I(e,t,i){var r,a=d.stack,s=d.ancestorStack;a.push(t);while(a.length>0||s.length>0){if(d.stackMaximumLength=Math.max(d.stackMaximumLength,a.length),d.ancestorStackMaximumLength=Math.max(d.ancestorStackMaximumLength,s.length),s.length>0){var c=s.peek();if(c._stackLength===a.length){s.pop(),c!==r&&(c._finalResolution=!1),y(e,c,i);continue}}var u=a.pop();if(Object(n["a"])(u)){var m=u.refine===o["a"].ADD,h=u._shouldSelect,f=u.children,p=f.length,_=B(e,u);if(h)if(m)y(e,u,i);else{if(u._selectionDepth=s.length,u._selectionDepth>0&&(e._hasMixedContent=!0),r=u,!_){y(e,u,i);continue}s.push(u),u._stackLength=a.length}if(_)for(var g=0;g<p;++g){var b=f[g];l(b)&&a.push(b)}}}}c.selectTiles=function(e,t){if(e._requestedTiles.length=0,!e.debugFreezeFrame){e._selectedTiles.length=0,e._selectedTilesToStyle.length=0,e._emptyTiles.length=0,e._hasMixedContent=!1;var i=e.root;if(D(e,i,t),l(i)&&!(i.getScreenSpaceError(t,!0)<=e._maximumScreenSpaceError)){b(e)?e.immediatelyLoadDesiredLevelOfDetail?_(e,i,t):g(e,i,t):p(e,i,t),u.stack.trim(u.stackMaximumLength),m.stack.trim(m.stackMaximumLength),h.stack.trim(h.stackMaximumLength),d.stack.trim(d.stackMaximumLength),d.ancestorStack.trim(d.ancestorStackMaximumLength);for(var n=e._requestedTiles,r=n.length,a=0;a<r;++a)n[a].updatePriority()}}},t["a"]=c},8981:function(e,t,i){"use strict";var n=i("66bf"),r=i("7524"),a=i("c4a1");function s(){}var o={stack:new r["a"],stackMaximumLength:0};function c(e){return e._visible&&e._inRequestVolume}function l(e){return e.hasEmptyContent||e.hasTilesetContent}function u(e){return!l(e)&&e.contentUnloaded}function m(e,t){return 0!==t.children.length&&(t.hasTilesetContent?!t.contentExpired:(t.hasEmptyContent,!0))}function h(e,t,i,n){for(var r=t.children,a=r.length,s=0;s<a;++s){var o=r[s];o.updateVisibility(n),c(o)&&i.push(o)}}function d(e,t){(u(t)||t.contentExpired)&&(t._priority=0,e._requestedTiles.push(t))}function f(e,t,i){t._touchedFrame!==i.frameNumber&&(e._cache.touch(t),t._touchedFrame=i.frameNumber)}function p(e){++e.statistics.visited}function _(e,t,i){t.contentAvailable&&t.contentVisibility(i)!==n["a"].OUTSIDE&&e._selectedTiles.push(t)}s.selectTiles=function(e,t){e._selectedTiles.length=0,e._requestedTiles.length=0,e._hasMixedContent=!1;var i=!0,n=e.root;if(n.updateVisibility(t),!c(n))return i;var r=o.stack;r.push(e.root);while(r.length>0){o.stackMaximumLength=Math.max(o.stackMaximumLength,r.length);var s=r.pop(),u=s.refine===a["a"].ADD,g=s.refine===a["a"].REPLACE,b=m(e,s);b&&h(e,s,r,t),(u||g&&!b)&&(d(e,s),f(e,s,t),_(e,s,t),l(s)||s.contentAvailable||(i=!1)),p(e)}return o.stack.trim(o.stackMaximumLength),i},t["a"]=s}}]);