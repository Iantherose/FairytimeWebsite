gdjs.loadCode = {};
gdjs.loadCode.localVariables = [];
gdjs.loadCode.GDSquareJoystickOuterObjects1= [];
gdjs.loadCode.GDSquareJoystickOuterObjects2= [];
gdjs.loadCode.GDEzraObjects1= [];
gdjs.loadCode.GDEzraObjects2= [];
gdjs.loadCode.GDambroseObjects1= [];
gdjs.loadCode.GDambroseObjects2= [];
gdjs.loadCode.GDDialogueObjects1= [];
gdjs.loadCode.GDDialogueObjects2= [];
gdjs.loadCode.GDwarningObjects1= [];
gdjs.loadCode.GDwarningObjects2= [];
gdjs.loadCode.GDchoice1Objects1= [];
gdjs.loadCode.GDchoice1Objects2= [];
gdjs.loadCode.GDproceedObjects1= [];
gdjs.loadCode.GDproceedObjects2= [];
gdjs.loadCode.GDchoice2Objects1= [];
gdjs.loadCode.GDchoice2Objects2= [];
gdjs.loadCode.GDchoice3Objects1= [];
gdjs.loadCode.GDchoice3Objects2= [];
gdjs.loadCode.GDTitleObjects1= [];
gdjs.loadCode.GDTitleObjects2= [];
gdjs.loadCode.GDdayObjects1= [];
gdjs.loadCode.GDdayObjects2= [];
gdjs.loadCode.GDsnowObjects1= [];
gdjs.loadCode.GDsnowObjects2= [];
gdjs.loadCode.GDrightdustObjects1= [];
gdjs.loadCode.GDrightdustObjects2= [];
gdjs.loadCode.GDleftdustObjects1= [];
gdjs.loadCode.GDleftdustObjects2= [];
gdjs.loadCode.GDtextdoneObjects1= [];
gdjs.loadCode.GDtextdoneObjects2= [];
gdjs.loadCode.GDroomsObjects1= [];
gdjs.loadCode.GDroomsObjects2= [];
gdjs.loadCode.GDrooms2Objects1= [];
gdjs.loadCode.GDrooms2Objects2= [];
gdjs.loadCode.GDblackObjects1= [];
gdjs.loadCode.GDblackObjects2= [];
gdjs.loadCode.GDsettingsObjects1= [];
gdjs.loadCode.GDsettingsObjects2= [];
gdjs.loadCode.GDtransObjects1= [];
gdjs.loadCode.GDtransObjects2= [];
gdjs.loadCode.GDambroselightObjects1= [];
gdjs.loadCode.GDambroselightObjects2= [];
gdjs.loadCode.GDezralightObjects1= [];
gdjs.loadCode.GDezralightObjects2= [];
gdjs.loadCode.GDphonelightObjects1= [];
gdjs.loadCode.GDphonelightObjects2= [];
gdjs.loadCode.GDcursorObjects1= [];
gdjs.loadCode.GDcursorObjects2= [];
gdjs.loadCode.GDLargeExitButtonObjects1= [];
gdjs.loadCode.GDLargeExitButtonObjects2= [];
gdjs.loadCode.GDRedBoxObjects1= [];
gdjs.loadCode.GDRedBoxObjects2= [];
gdjs.loadCode.GDScreenshotObjects1= [];
gdjs.loadCode.GDScreenshotObjects2= [];
gdjs.loadCode.GDfpsObjects1= [];
gdjs.loadCode.GDfpsObjects2= [];


gdjs.loadCode.mapOfGDgdjs_9546loadCode_9546GDScreenshotObjects1Objects = Hashtable.newFrom({"Screenshot": gdjs.loadCode.GDScreenshotObjects1});
gdjs.loadCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Screenshot"), gdjs.loadCode.GDScreenshotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.loadCode.mapOfGDgdjs_9546loadCode_9546GDScreenshotObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.saveState(runtimeScene.getGame().getVariables().getFromIndex(29));
}{gdjs.evtTools.storage.writeStringInJSONFile("slot1", "slot1", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(29)));
}}

}


};

gdjs.loadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadCode.GDSquareJoystickOuterObjects1.length = 0;
gdjs.loadCode.GDSquareJoystickOuterObjects2.length = 0;
gdjs.loadCode.GDEzraObjects1.length = 0;
gdjs.loadCode.GDEzraObjects2.length = 0;
gdjs.loadCode.GDambroseObjects1.length = 0;
gdjs.loadCode.GDambroseObjects2.length = 0;
gdjs.loadCode.GDDialogueObjects1.length = 0;
gdjs.loadCode.GDDialogueObjects2.length = 0;
gdjs.loadCode.GDwarningObjects1.length = 0;
gdjs.loadCode.GDwarningObjects2.length = 0;
gdjs.loadCode.GDchoice1Objects1.length = 0;
gdjs.loadCode.GDchoice1Objects2.length = 0;
gdjs.loadCode.GDproceedObjects1.length = 0;
gdjs.loadCode.GDproceedObjects2.length = 0;
gdjs.loadCode.GDchoice2Objects1.length = 0;
gdjs.loadCode.GDchoice2Objects2.length = 0;
gdjs.loadCode.GDchoice3Objects1.length = 0;
gdjs.loadCode.GDchoice3Objects2.length = 0;
gdjs.loadCode.GDTitleObjects1.length = 0;
gdjs.loadCode.GDTitleObjects2.length = 0;
gdjs.loadCode.GDdayObjects1.length = 0;
gdjs.loadCode.GDdayObjects2.length = 0;
gdjs.loadCode.GDsnowObjects1.length = 0;
gdjs.loadCode.GDsnowObjects2.length = 0;
gdjs.loadCode.GDrightdustObjects1.length = 0;
gdjs.loadCode.GDrightdustObjects2.length = 0;
gdjs.loadCode.GDleftdustObjects1.length = 0;
gdjs.loadCode.GDleftdustObjects2.length = 0;
gdjs.loadCode.GDtextdoneObjects1.length = 0;
gdjs.loadCode.GDtextdoneObjects2.length = 0;
gdjs.loadCode.GDroomsObjects1.length = 0;
gdjs.loadCode.GDroomsObjects2.length = 0;
gdjs.loadCode.GDrooms2Objects1.length = 0;
gdjs.loadCode.GDrooms2Objects2.length = 0;
gdjs.loadCode.GDblackObjects1.length = 0;
gdjs.loadCode.GDblackObjects2.length = 0;
gdjs.loadCode.GDsettingsObjects1.length = 0;
gdjs.loadCode.GDsettingsObjects2.length = 0;
gdjs.loadCode.GDtransObjects1.length = 0;
gdjs.loadCode.GDtransObjects2.length = 0;
gdjs.loadCode.GDambroselightObjects1.length = 0;
gdjs.loadCode.GDambroselightObjects2.length = 0;
gdjs.loadCode.GDezralightObjects1.length = 0;
gdjs.loadCode.GDezralightObjects2.length = 0;
gdjs.loadCode.GDphonelightObjects1.length = 0;
gdjs.loadCode.GDphonelightObjects2.length = 0;
gdjs.loadCode.GDcursorObjects1.length = 0;
gdjs.loadCode.GDcursorObjects2.length = 0;
gdjs.loadCode.GDLargeExitButtonObjects1.length = 0;
gdjs.loadCode.GDLargeExitButtonObjects2.length = 0;
gdjs.loadCode.GDRedBoxObjects1.length = 0;
gdjs.loadCode.GDRedBoxObjects2.length = 0;
gdjs.loadCode.GDScreenshotObjects1.length = 0;
gdjs.loadCode.GDScreenshotObjects2.length = 0;
gdjs.loadCode.GDfpsObjects1.length = 0;
gdjs.loadCode.GDfpsObjects2.length = 0;

gdjs.loadCode.eventsList0(runtimeScene);

return;

}

gdjs['loadCode'] = gdjs.loadCode;
