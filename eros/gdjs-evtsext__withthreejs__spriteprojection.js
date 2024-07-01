
gdjs.evtsExt__WithThreeJS__SpriteProjection = gdjs.evtsExt__WithThreeJS__SpriteProjection || {};

/**
 * Behavior generated from 3D Sprite Projection
 */
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection = class SpriteProjection extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = "";
    this._behaviorData.FirstFrame = true;
    this._behaviorData.CurrentTextureId = "";
    this._behaviorData.ProjectionScale = behaviorData.ProjectionScale !== undefined ? behaviorData.ProjectionScale : Number("0.01") || 0;
    this._behaviorData.ViewMode = behaviorData.ViewMode !== undefined ? behaviorData.ViewMode : "Top Down";
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
    this._behaviorData.AlphaTest = behaviorData.AlphaTest !== undefined ? behaviorData.AlphaTest : Number("0") || 0;
    this._behaviorData.AntiAliasing = behaviorData.AntiAliasing !== undefined ? behaviorData.AntiAliasing : true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.CurrentTextureId !== newBehaviorData.CurrentTextureId)
      this._behaviorData.CurrentTextureId = newBehaviorData.CurrentTextureId;
    if (oldBehaviorData.ProjectionScale !== newBehaviorData.ProjectionScale)
      this._behaviorData.ProjectionScale = newBehaviorData.ProjectionScale;
    if (oldBehaviorData.ViewMode !== newBehaviorData.ViewMode)
      this._behaviorData.ViewMode = newBehaviorData.ViewMode;
    if (oldBehaviorData.Hide !== newBehaviorData.Hide)
      this._behaviorData.Hide = newBehaviorData.Hide;
    if (oldBehaviorData.AlphaTest !== newBehaviorData.AlphaTest)
      this._behaviorData.AlphaTest = newBehaviorData.AlphaTest;
    if (oldBehaviorData.AntiAliasing !== newBehaviorData.AntiAliasing)
      this._behaviorData.AntiAliasing = newBehaviorData.AntiAliasing;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Id: this._behaviorData.Id,
    FirstFrame: this._behaviorData.FirstFrame,
    CurrentTextureId: this._behaviorData.CurrentTextureId,
    ProjectionScale: this._behaviorData.ProjectionScale,
    ViewMode: this._behaviorData.ViewMode,
    Hide: this._behaviorData.Hide,
    AlphaTest: this._behaviorData.AlphaTest,
    AntiAliasing: this._behaviorData.AntiAliasing,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    
    if (networkSyncData.props.Id !== undefined)
      this._behaviorData.Id = networkSyncData.props.Id;
    if (networkSyncData.props.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = networkSyncData.props.FirstFrame;
    if (networkSyncData.props.CurrentTextureId !== undefined)
      this._behaviorData.CurrentTextureId = networkSyncData.props.CurrentTextureId;
    if (networkSyncData.props.ProjectionScale !== undefined)
      this._behaviorData.ProjectionScale = networkSyncData.props.ProjectionScale;
    if (networkSyncData.props.ViewMode !== undefined)
      this._behaviorData.ViewMode = networkSyncData.props.ViewMode;
    if (networkSyncData.props.Hide !== undefined)
      this._behaviorData.Hide = networkSyncData.props.Hide;
    if (networkSyncData.props.AlphaTest !== undefined)
      this._behaviorData.AlphaTest = networkSyncData.props.AlphaTest;
    if (networkSyncData.props.AntiAliasing !== undefined)
      this._behaviorData.AntiAliasing = networkSyncData.props.AntiAliasing;
  }

  // Properties:
  
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getCurrentTextureId() {
    return this._behaviorData.CurrentTextureId !== undefined ? this._behaviorData.CurrentTextureId : "";
  }
  _setCurrentTextureId(newValue) {
    this._behaviorData.CurrentTextureId = newValue;
  }
  _getProjectionScale() {
    return this._behaviorData.ProjectionScale !== undefined ? this._behaviorData.ProjectionScale : Number("0.01") || 0;
  }
  _setProjectionScale(newValue) {
    this._behaviorData.ProjectionScale = newValue;
  }
  _getViewMode() {
    return this._behaviorData.ViewMode !== undefined ? this._behaviorData.ViewMode : "Top Down";
  }
  _setViewMode(newValue) {
    this._behaviorData.ViewMode = newValue;
  }
  _getHide() {
    return this._behaviorData.Hide !== undefined ? this._behaviorData.Hide : true;
  }
  _setHide(newValue) {
    this._behaviorData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
  _getAlphaTest() {
    return this._behaviorData.AlphaTest !== undefined ? this._behaviorData.AlphaTest : Number("0") || 0;
  }
  _setAlphaTest(newValue) {
    this._behaviorData.AlphaTest = newValue;
  }
  _getAntiAliasing() {
    return this._behaviorData.AntiAliasing !== undefined ? this._behaviorData.AntiAliasing : true;
  }
  _setAntiAliasing(newValue) {
    this._behaviorData.AntiAliasing = newValue;
  }
  _toggleAntiAliasing() {
    this._setAntiAliasing(!this._getAntiAliasing());
  }
}

/**
 * Shared data generated from 3D Sprite Projection
 */
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.SharedData = class SpriteProjectionSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_SpriteProjectionSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_SpriteProjectionSharedData = new gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_SpriteProjectionSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0xa88318 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    gdjs.__WithThreeJS.set("Textures", new Map());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("SpriteProjection");
const Id = objects[0].name + objects[0].id;
// const X = objects[0].x;
// const Y = objects[0].y;
// const Z = objects[0].zOrder;
const ProjectionScale = Behavior.ProjectionScale();
const ViewMode = Behavior.ViewMode();
const AlphaTest = Behavior.AlphaTest();
const Transparent = AlphaTest !== 0;
const AntiAliasing = Behavior.AntiAliasing();
// const Blend = THREE.NormalBlending;
// const Opacity = 1.0;
//
//スプライトのすべてのアニメーション画像を取得
let AllAnimationSources = [];
for(const V of objects[0]._animations) {
    for(const VV of V.directions[0].frames) {
        AllAnimationSources.push(VV.texture.baseTexture.resource);
    }
}
//その画像がTexturesに登録されているか確認。未登録の場合は作成。
for(const V of AllAnimationSources) {
    const TexId = "_" + V.url;
    if (!Textures.has(TexId)) {
        const T = new THREE.Texture();
        T.image = V.source;
        T.wrapS = THREE.MirroredRepeatWrapping;
        T.wrapT = THREE.MirroredRepeatWrapping;
        if (!AntiAliasing) {
            T.magFilter = THREE.NearestFilter;// THREE.LinearFilter
            T.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
        }
        T.needsUpdate = true;//必須
        Textures.set(TexId, T);
        //FlipX
        const T_FlipX = T.clone();
        T_FlipX.offset.x = 1;
        Textures.set(TexId + "_FlipX", T_FlipX);
        //FlipY
        const T_FlipY = T.clone();
        T_FlipY.offset.y = 1;
        Textures.set(TexId + "_FlipY", T_FlipY);
        //FlipXY
        const T_FlipXY = T.clone();
        T_FlipXY.offset.x = 1;
        T_FlipXY.offset.y = 1;
        Textures.set(TexId + "_FlipX_FlipY", T_FlipXY);
    }
}
//
const TextureId = "_" + objects[0].getRendererObject().texture.baseTexture.resource.url;
Behavior.SetCurrentTextureId(TextureId);
const Texture = Textures.get(TextureId);
const TextureWidth = Texture.image.width;
const TextureHeight = Texture.image.height;
const Material = new THREE.SpriteMaterial({map:Texture, transparent:Transparent, alphaTest:AlphaTest});// blendingとopacityは2D依存
const Sprite = new THREE.Sprite(Material);
Sprite.name = Id;
Sprite.scale.set(TextureWidth * ProjectionScale, TextureHeight * ProjectionScale, 1);
Behavior.SetId(Id);
Scene.add(Sprite);


};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0xa88318(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0xae69b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("SpriteProjection");
const Id = Behavior.Id();
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
const ProjectionScale = Behavior.ProjectionScale();
const ViewMode = Behavior.ViewMode();
//
const Sprite = Scene.getObjectByName(Id);
let TextureId = "_" + objects[0].getRendererObject().texture.baseTexture.resource.url;
// Flip
if (objects[0].isFlippedX()) {
    TextureId += "_FlipX";
}
if (objects[0].isFlippedY()) {
    TextureId += "_FlipY";
}
// Animation
const Texture = Textures.get(TextureId);
if (TextureId !== Behavior.CurrentTextureId()) {
    Sprite.material.map = Texture;
    Behavior.SetCurrentTextureId(TextureId);
}
// Blend
Sprite.material.blending = gdjs.__WithThreeJS.get("Blend2Dto3D")[objects[0].getBlendMode()];
// Opacity
const Opacity = objects[0].getOpacity() / 255;
if (!Sprite.material.transparent) {
    if (Sprite.material.alphaTest !== 0 || Opacity !== 1) {
        Sprite.material.transparent = true;
        Sprite.material.needsUpdate = true;
    }
}
Sprite.material.opacity = Opacity;
// Scale
const TextureWidth = Texture.image.width;
const TextureHeight = Texture.image.height;
Sprite.scale.set(TextureWidth * ProjectionScale * objects[0].getScaleX(), TextureHeight * ProjectionScale * objects[0].getScaleY(), 1);
// Move
if (ViewMode == "Top Down") {
    Sprite.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
} else {
    Sprite.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
}


};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame(false);
}
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0xae69b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.userFunc0xa88318 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// 生成と同時に削除された場合、3D化されていないので回避
// FirstFrame == true のほうが理想的だが取得がめんどくさいので Id を利用。
const Behavior = objects[0].getBehavior("SpriteProjection");
const Id = Behavior.Id();
if (Id === "") {
    return;
}
//
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Sprite = Scene.getObjectByName(Id);
//
Sprite.material.dispose();
Sprite.removeFromParent();
};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.userFunc0xa88318(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectionScale()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewMode()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewMode = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlphaTest()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTest = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentTextureId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentTextureId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::SpriteProjection", gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection);
