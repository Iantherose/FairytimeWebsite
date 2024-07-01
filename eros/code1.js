gdjs.warningCode = {};
gdjs.warningCode.localVariables = [];
gdjs.warningCode.GDEzraObjects1= [];
gdjs.warningCode.GDEzraObjects2= [];
gdjs.warningCode.GDambroseObjects1= [];
gdjs.warningCode.GDambroseObjects2= [];
gdjs.warningCode.GDDialogueObjects1= [];
gdjs.warningCode.GDDialogueObjects2= [];
gdjs.warningCode.GDwarningObjects1= [];
gdjs.warningCode.GDwarningObjects2= [];
gdjs.warningCode.GDchoice1Objects1= [];
gdjs.warningCode.GDchoice1Objects2= [];
gdjs.warningCode.GDproceedObjects1= [];
gdjs.warningCode.GDproceedObjects2= [];
gdjs.warningCode.GDchoice2Objects1= [];
gdjs.warningCode.GDchoice2Objects2= [];
gdjs.warningCode.GDchoice3Objects1= [];
gdjs.warningCode.GDchoice3Objects2= [];
gdjs.warningCode.GDTitleObjects1= [];
gdjs.warningCode.GDTitleObjects2= [];
gdjs.warningCode.GDdayObjects1= [];
gdjs.warningCode.GDdayObjects2= [];
gdjs.warningCode.GDsnowObjects1= [];
gdjs.warningCode.GDsnowObjects2= [];
gdjs.warningCode.GDrightdustObjects1= [];
gdjs.warningCode.GDrightdustObjects2= [];
gdjs.warningCode.GDleftdustObjects1= [];
gdjs.warningCode.GDleftdustObjects2= [];
gdjs.warningCode.GDtextdoneObjects1= [];
gdjs.warningCode.GDtextdoneObjects2= [];
gdjs.warningCode.GDroomsObjects1= [];
gdjs.warningCode.GDroomsObjects2= [];
gdjs.warningCode.GDrooms2Objects1= [];
gdjs.warningCode.GDrooms2Objects2= [];
gdjs.warningCode.GDblackObjects1= [];
gdjs.warningCode.GDblackObjects2= [];
gdjs.warningCode.GDsettingsObjects1= [];
gdjs.warningCode.GDsettingsObjects2= [];
gdjs.warningCode.GDtransObjects1= [];
gdjs.warningCode.GDtransObjects2= [];
gdjs.warningCode.GDambroselightObjects1= [];
gdjs.warningCode.GDambroselightObjects2= [];
gdjs.warningCode.GDezralightObjects1= [];
gdjs.warningCode.GDezralightObjects2= [];
gdjs.warningCode.GDphonelightObjects1= [];
gdjs.warningCode.GDphonelightObjects2= [];
gdjs.warningCode.GDcursorObjects1= [];
gdjs.warningCode.GDcursorObjects2= [];
gdjs.warningCode.GDLargeExitButtonObjects1= [];
gdjs.warningCode.GDLargeExitButtonObjects2= [];
gdjs.warningCode.GDRedBoxObjects1= [];
gdjs.warningCode.GDRedBoxObjects2= [];
gdjs.warningCode.GDScreenshotObjects1= [];
gdjs.warningCode.GDScreenshotObjects2= [];
gdjs.warningCode.GDfpsObjects1= [];
gdjs.warningCode.GDfpsObjects2= [];


gdjs.warningCode.mapOfGDgdjs_9546warningCode_9546GDproceedObjects1Objects = Hashtable.newFrom({"proceed": gdjs.warningCode.GDproceedObjects1});
gdjs.warningCode.mapOfGDgdjs_9546warningCode_9546GDproceedObjects1Objects = Hashtable.newFrom({"proceed": gdjs.warningCode.GDproceedObjects1});
gdjs.warningCode.mapOfGDgdjs_9546warningCode_9546GDproceedObjects1Objects = Hashtable.newFrom({"proceed": gdjs.warningCode.GDproceedObjects1});
gdjs.warningCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("proceed"), gdjs.warningCode.GDproceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.warningCode.mapOfGDgdjs_9546warningCode_9546GDproceedObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "startscreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("proceed"), gdjs.warningCode.GDproceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.warningCode.mapOfGDgdjs_9546warningCode_9546GDproceedObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.warningCode.GDproceedObjects1 */
{for(var i = 0, len = gdjs.warningCode.GDproceedObjects1.length ;i < len;++i) {
    gdjs.warningCode.GDproceedObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("grow", 80, "easeInQuad", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("proceed"), gdjs.warningCode.GDproceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.warningCode.mapOfGDgdjs_9546warningCode_9546GDproceedObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.warningCode.GDproceedObjects1 */
{for(var i = 0, len = gdjs.warningCode.GDproceedObjects1.length ;i < len;++i) {
    gdjs.warningCode.GDproceedObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("textgrow", 70, "easeInQuad", 100, false);
}
}}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.warningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.warningCode.GDEzraObjects1.length = 0;
gdjs.warningCode.GDEzraObjects2.length = 0;
gdjs.warningCode.GDambroseObjects1.length = 0;
gdjs.warningCode.GDambroseObjects2.length = 0;
gdjs.warningCode.GDDialogueObjects1.length = 0;
gdjs.warningCode.GDDialogueObjects2.length = 0;
gdjs.warningCode.GDwarningObjects1.length = 0;
gdjs.warningCode.GDwarningObjects2.length = 0;
gdjs.warningCode.GDchoice1Objects1.length = 0;
gdjs.warningCode.GDchoice1Objects2.length = 0;
gdjs.warningCode.GDproceedObjects1.length = 0;
gdjs.warningCode.GDproceedObjects2.length = 0;
gdjs.warningCode.GDchoice2Objects1.length = 0;
gdjs.warningCode.GDchoice2Objects2.length = 0;
gdjs.warningCode.GDchoice3Objects1.length = 0;
gdjs.warningCode.GDchoice3Objects2.length = 0;
gdjs.warningCode.GDTitleObjects1.length = 0;
gdjs.warningCode.GDTitleObjects2.length = 0;
gdjs.warningCode.GDdayObjects1.length = 0;
gdjs.warningCode.GDdayObjects2.length = 0;
gdjs.warningCode.GDsnowObjects1.length = 0;
gdjs.warningCode.GDsnowObjects2.length = 0;
gdjs.warningCode.GDrightdustObjects1.length = 0;
gdjs.warningCode.GDrightdustObjects2.length = 0;
gdjs.warningCode.GDleftdustObjects1.length = 0;
gdjs.warningCode.GDleftdustObjects2.length = 0;
gdjs.warningCode.GDtextdoneObjects1.length = 0;
gdjs.warningCode.GDtextdoneObjects2.length = 0;
gdjs.warningCode.GDroomsObjects1.length = 0;
gdjs.warningCode.GDroomsObjects2.length = 0;
gdjs.warningCode.GDrooms2Objects1.length = 0;
gdjs.warningCode.GDrooms2Objects2.length = 0;
gdjs.warningCode.GDblackObjects1.length = 0;
gdjs.warningCode.GDblackObjects2.length = 0;
gdjs.warningCode.GDsettingsObjects1.length = 0;
gdjs.warningCode.GDsettingsObjects2.length = 0;
gdjs.warningCode.GDtransObjects1.length = 0;
gdjs.warningCode.GDtransObjects2.length = 0;
gdjs.warningCode.GDambroselightObjects1.length = 0;
gdjs.warningCode.GDambroselightObjects2.length = 0;
gdjs.warningCode.GDezralightObjects1.length = 0;
gdjs.warningCode.GDezralightObjects2.length = 0;
gdjs.warningCode.GDphonelightObjects1.length = 0;
gdjs.warningCode.GDphonelightObjects2.length = 0;
gdjs.warningCode.GDcursorObjects1.length = 0;
gdjs.warningCode.GDcursorObjects2.length = 0;
gdjs.warningCode.GDLargeExitButtonObjects1.length = 0;
gdjs.warningCode.GDLargeExitButtonObjects2.length = 0;
gdjs.warningCode.GDRedBoxObjects1.length = 0;
gdjs.warningCode.GDRedBoxObjects2.length = 0;
gdjs.warningCode.GDScreenshotObjects1.length = 0;
gdjs.warningCode.GDScreenshotObjects2.length = 0;
gdjs.warningCode.GDfpsObjects1.length = 0;
gdjs.warningCode.GDfpsObjects2.length = 0;

gdjs.warningCode.eventsList0(runtimeScene);

return;

}

gdjs['warningCode'] = gdjs.warningCode;
