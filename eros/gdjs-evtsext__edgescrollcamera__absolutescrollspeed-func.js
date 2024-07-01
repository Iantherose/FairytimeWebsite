
if (typeof gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed !== "undefined") {
  gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed = {};


gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__EdgeScrollCamera").getChild("Style")) == "Progressive speed";
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (1 - Math.abs((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BorderDistance")) || 0 : 0)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__EdgeScrollCamera").getChild("ScreenMargin"))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__EdgeScrollCamera").getChild("ScrollSpeed")); }}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__EdgeScrollCamera").getChild("Style")) == "Constant speed";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (Math.abs((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BorderDistance")) || 0 : 0)) <= 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__EdgeScrollCamera").getChild("ScrollSpeed")); }}}

}


};

gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.func = function(runtimeScene, BorderDistance, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("EdgeScrollCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("EdgeScrollCamera"),
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
if (argName === "BorderDistance") return BorderDistance;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.registeredGdjsCallbacks = [];