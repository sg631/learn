
if (typeof gdjs.evtsExt__ObjectPickingTools__PickNthAction !== "undefined") {
  gdjs.evtsExt__ObjectPickingTools__PickNthAction.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectPickingTools__PickNthAction = {};
gdjs.evtsExt__ObjectPickingTools__PickNthAction.GDobjectObjects1= [];


gdjs.evtsExt__ObjectPickingTools__PickNthAction.userFunc0x19498f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const lists = eventsFunctionContext.getObjectsLists("object").items;
const n = eventsFunctionContext.getObjectsLists("n");

for (const listName in lists) {
    const list = lists[listName];
    if (n >= list.length) continue;
    list[0] = list[n];
    list.length = 1;
}

};
gdjs.evtsExt__ObjectPickingTools__PickNthAction.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectPickingTools__PickNthAction.userFunc0x19498f8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectPickingTools__PickNthAction.func = function(runtimeScene, object, n, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"object": object
},
  _objectArraysMap: {
"object": gdjs.objectsListsToArray(object)
},
  _behaviorNamesMap: {
},
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
if (argName === "n") return n;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectPickingTools__PickNthAction.GDobjectObjects1.length = 0;

gdjs.evtsExt__ObjectPickingTools__PickNthAction.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ObjectPickingTools__PickNthAction.registeredGdjsCallbacks = [];