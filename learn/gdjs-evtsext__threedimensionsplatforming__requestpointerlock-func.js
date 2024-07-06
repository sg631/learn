
if (typeof gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock !== "undefined") {
  gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock = {};


gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.userFunc0x1063a28 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const canvas = runtimeScene.getGame().getRenderer().getCanvas();
canvas.requestPointerLock({ unadjustedMovement: true });
};
gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.userFunc0x1063a28(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ThreeDimensionsPlatforming"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ThreeDimensionsPlatforming"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.registeredGdjsCallbacks = [];