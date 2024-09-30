gdjs.logoCode = {};
gdjs.logoCode.localVariables = [];
gdjs.logoCode.GDlogoObjects1= [];
gdjs.logoCode.GDlogoObjects2= [];
gdjs.logoCode.GDLogoObjects1= [];
gdjs.logoCode.GDLogoObjects2= [];
gdjs.logoCode.GDskipObjects1= [];
gdjs.logoCode.GDskipObjects2= [];
gdjs.logoCode.GDbgObjects1= [];
gdjs.logoCode.GDbgObjects2= [];
gdjs.logoCode.GDSquareGreenSliderObjects1= [];
gdjs.logoCode.GDSquareGreenSliderObjects2= [];
gdjs.logoCode.GDSquareGreenSlider2Objects1= [];
gdjs.logoCode.GDSquareGreenSlider2Objects2= [];
gdjs.logoCode.GDautoreadSpeedObjects1= [];
gdjs.logoCode.GDautoreadSpeedObjects2= [];
gdjs.logoCode.GDpanelObjects1= [];
gdjs.logoCode.GDpanelObjects2= [];
gdjs.logoCode.GDdialogboxObjects1= [];
gdjs.logoCode.GDdialogboxObjects2= [];
gdjs.logoCode.GDautoreadbtnObjects1= [];
gdjs.logoCode.GDautoreadbtnObjects2= [];
gdjs.logoCode.GDcloseObjects1= [];
gdjs.logoCode.GDcloseObjects2= [];
gdjs.logoCode.GDsaveObjects1= [];
gdjs.logoCode.GDsaveObjects2= [];
gdjs.logoCode.GDloadObjects1= [];
gdjs.logoCode.GDloadObjects2= [];
gdjs.logoCode.GDconfirmObjects1= [];
gdjs.logoCode.GDconfirmObjects2= [];
gdjs.logoCode.GDdenyObjects1= [];
gdjs.logoCode.GDdenyObjects2= [];
gdjs.logoCode.GDautoread_9595iconObjects1= [];
gdjs.logoCode.GDautoread_9595iconObjects2= [];
gdjs.logoCode.GDmessageObjects1= [];
gdjs.logoCode.GDmessageObjects2= [];
gdjs.logoCode.GDslotTitleObjects1= [];
gdjs.logoCode.GDslotTitleObjects2= [];
gdjs.logoCode.GDyesObjects1= [];
gdjs.logoCode.GDyesObjects2= [];
gdjs.logoCode.GDnoObjects1= [];
gdjs.logoCode.GDnoObjects2= [];
gdjs.logoCode.GDfpsObjects1= [];
gdjs.logoCode.GDfpsObjects2= [];
gdjs.logoCode.GDoptionObjects1= [];
gdjs.logoCode.GDoptionObjects2= [];
gdjs.logoCode.GDcursorObjects1= [];
gdjs.logoCode.GDcursorObjects2= [];
gdjs.logoCode.GDcursorAddObjects1= [];
gdjs.logoCode.GDcursorAddObjects2= [];
gdjs.logoCode.GDdustObjects1= [];
gdjs.logoCode.GDdustObjects2= [];
gdjs.logoCode.GDsnowObjects1= [];
gdjs.logoCode.GDsnowObjects2= [];
gdjs.logoCode.GDroseObjects1= [];
gdjs.logoCode.GDroseObjects2= [];
gdjs.logoCode.GDbutterflySlotObjects1= [];
gdjs.logoCode.GDbutterflySlotObjects2= [];
gdjs.logoCode.GDarrowForObjects1= [];
gdjs.logoCode.GDarrowForObjects2= [];
gdjs.logoCode.GDarrowbackObjects1= [];
gdjs.logoCode.GDarrowbackObjects2= [];
gdjs.logoCode.GDmirrorFrameObjects1= [];
gdjs.logoCode.GDmirrorFrameObjects2= [];
gdjs.logoCode.GDdateTimeObjects1= [];
gdjs.logoCode.GDdateTimeObjects2= [];
gdjs.logoCode.GDsaveDiaObjects1= [];
gdjs.logoCode.GDsaveDiaObjects2= [];
gdjs.logoCode.GDfairydust4Objects1= [];
gdjs.logoCode.GDfairydust4Objects2= [];
gdjs.logoCode.GDStarSparksObjects1= [];
gdjs.logoCode.GDStarSparksObjects2= [];
gdjs.logoCode.GDMagicCentreObjects1= [];
gdjs.logoCode.GDMagicCentreObjects2= [];
gdjs.logoCode.GDMagicSmokeObjects1= [];
gdjs.logoCode.GDMagicSmokeObjects2= [];
gdjs.logoCode.GDMagicSmokeCenterObjects1= [];
gdjs.logoCode.GDMagicSmokeCenterObjects2= [];
gdjs.logoCode.GDMagicObjects1= [];
gdjs.logoCode.GDMagicObjects2= [];
gdjs.logoCode.GDblackObjects1= [];
gdjs.logoCode.GDblackObjects2= [];
gdjs.logoCode.GDmothsObjects1= [];
gdjs.logoCode.GDmothsObjects2= [];
gdjs.logoCode.GDmoths2Objects1= [];
gdjs.logoCode.GDmoths2Objects2= [];
gdjs.logoCode.GDmoths3Objects1= [];
gdjs.logoCode.GDmoths3Objects2= [];
gdjs.logoCode.GDbackObjects1= [];
gdjs.logoCode.GDbackObjects2= [];
gdjs.logoCode.GDfps2Objects1= [];
gdjs.logoCode.GDfps2Objects2= [];
gdjs.logoCode.GDItemsObjects1= [];
gdjs.logoCode.GDItemsObjects2= [];
gdjs.logoCode.GDcurrentSpeakerSeeObjects1= [];
gdjs.logoCode.GDcurrentSpeakerSeeObjects2= [];


gdjs.logoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.logoCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.logoCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.logoCode.GDLogoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.logoCode.GDLogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.logoCode.GDLogoObjects1.length;i<l;++i) {
    if ( gdjs.logoCode.GDLogoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.logoCode.GDLogoObjects1[k] = gdjs.logoCode.GDLogoObjects1[i];
        ++k;
    }
}
gdjs.logoCode.GDLogoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainmenu", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};

gdjs.logoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.logoCode.GDlogoObjects1.length = 0;
gdjs.logoCode.GDlogoObjects2.length = 0;
gdjs.logoCode.GDLogoObjects1.length = 0;
gdjs.logoCode.GDLogoObjects2.length = 0;
gdjs.logoCode.GDskipObjects1.length = 0;
gdjs.logoCode.GDskipObjects2.length = 0;
gdjs.logoCode.GDbgObjects1.length = 0;
gdjs.logoCode.GDbgObjects2.length = 0;
gdjs.logoCode.GDSquareGreenSliderObjects1.length = 0;
gdjs.logoCode.GDSquareGreenSliderObjects2.length = 0;
gdjs.logoCode.GDSquareGreenSlider2Objects1.length = 0;
gdjs.logoCode.GDSquareGreenSlider2Objects2.length = 0;
gdjs.logoCode.GDautoreadSpeedObjects1.length = 0;
gdjs.logoCode.GDautoreadSpeedObjects2.length = 0;
gdjs.logoCode.GDpanelObjects1.length = 0;
gdjs.logoCode.GDpanelObjects2.length = 0;
gdjs.logoCode.GDdialogboxObjects1.length = 0;
gdjs.logoCode.GDdialogboxObjects2.length = 0;
gdjs.logoCode.GDautoreadbtnObjects1.length = 0;
gdjs.logoCode.GDautoreadbtnObjects2.length = 0;
gdjs.logoCode.GDcloseObjects1.length = 0;
gdjs.logoCode.GDcloseObjects2.length = 0;
gdjs.logoCode.GDsaveObjects1.length = 0;
gdjs.logoCode.GDsaveObjects2.length = 0;
gdjs.logoCode.GDloadObjects1.length = 0;
gdjs.logoCode.GDloadObjects2.length = 0;
gdjs.logoCode.GDconfirmObjects1.length = 0;
gdjs.logoCode.GDconfirmObjects2.length = 0;
gdjs.logoCode.GDdenyObjects1.length = 0;
gdjs.logoCode.GDdenyObjects2.length = 0;
gdjs.logoCode.GDautoread_9595iconObjects1.length = 0;
gdjs.logoCode.GDautoread_9595iconObjects2.length = 0;
gdjs.logoCode.GDmessageObjects1.length = 0;
gdjs.logoCode.GDmessageObjects2.length = 0;
gdjs.logoCode.GDslotTitleObjects1.length = 0;
gdjs.logoCode.GDslotTitleObjects2.length = 0;
gdjs.logoCode.GDyesObjects1.length = 0;
gdjs.logoCode.GDyesObjects2.length = 0;
gdjs.logoCode.GDnoObjects1.length = 0;
gdjs.logoCode.GDnoObjects2.length = 0;
gdjs.logoCode.GDfpsObjects1.length = 0;
gdjs.logoCode.GDfpsObjects2.length = 0;
gdjs.logoCode.GDoptionObjects1.length = 0;
gdjs.logoCode.GDoptionObjects2.length = 0;
gdjs.logoCode.GDcursorObjects1.length = 0;
gdjs.logoCode.GDcursorObjects2.length = 0;
gdjs.logoCode.GDcursorAddObjects1.length = 0;
gdjs.logoCode.GDcursorAddObjects2.length = 0;
gdjs.logoCode.GDdustObjects1.length = 0;
gdjs.logoCode.GDdustObjects2.length = 0;
gdjs.logoCode.GDsnowObjects1.length = 0;
gdjs.logoCode.GDsnowObjects2.length = 0;
gdjs.logoCode.GDroseObjects1.length = 0;
gdjs.logoCode.GDroseObjects2.length = 0;
gdjs.logoCode.GDbutterflySlotObjects1.length = 0;
gdjs.logoCode.GDbutterflySlotObjects2.length = 0;
gdjs.logoCode.GDarrowForObjects1.length = 0;
gdjs.logoCode.GDarrowForObjects2.length = 0;
gdjs.logoCode.GDarrowbackObjects1.length = 0;
gdjs.logoCode.GDarrowbackObjects2.length = 0;
gdjs.logoCode.GDmirrorFrameObjects1.length = 0;
gdjs.logoCode.GDmirrorFrameObjects2.length = 0;
gdjs.logoCode.GDdateTimeObjects1.length = 0;
gdjs.logoCode.GDdateTimeObjects2.length = 0;
gdjs.logoCode.GDsaveDiaObjects1.length = 0;
gdjs.logoCode.GDsaveDiaObjects2.length = 0;
gdjs.logoCode.GDfairydust4Objects1.length = 0;
gdjs.logoCode.GDfairydust4Objects2.length = 0;
gdjs.logoCode.GDStarSparksObjects1.length = 0;
gdjs.logoCode.GDStarSparksObjects2.length = 0;
gdjs.logoCode.GDMagicCentreObjects1.length = 0;
gdjs.logoCode.GDMagicCentreObjects2.length = 0;
gdjs.logoCode.GDMagicSmokeObjects1.length = 0;
gdjs.logoCode.GDMagicSmokeObjects2.length = 0;
gdjs.logoCode.GDMagicSmokeCenterObjects1.length = 0;
gdjs.logoCode.GDMagicSmokeCenterObjects2.length = 0;
gdjs.logoCode.GDMagicObjects1.length = 0;
gdjs.logoCode.GDMagicObjects2.length = 0;
gdjs.logoCode.GDblackObjects1.length = 0;
gdjs.logoCode.GDblackObjects2.length = 0;
gdjs.logoCode.GDmothsObjects1.length = 0;
gdjs.logoCode.GDmothsObjects2.length = 0;
gdjs.logoCode.GDmoths2Objects1.length = 0;
gdjs.logoCode.GDmoths2Objects2.length = 0;
gdjs.logoCode.GDmoths3Objects1.length = 0;
gdjs.logoCode.GDmoths3Objects2.length = 0;
gdjs.logoCode.GDbackObjects1.length = 0;
gdjs.logoCode.GDbackObjects2.length = 0;
gdjs.logoCode.GDfps2Objects1.length = 0;
gdjs.logoCode.GDfps2Objects2.length = 0;
gdjs.logoCode.GDItemsObjects1.length = 0;
gdjs.logoCode.GDItemsObjects2.length = 0;
gdjs.logoCode.GDcurrentSpeakerSeeObjects1.length = 0;
gdjs.logoCode.GDcurrentSpeakerSeeObjects2.length = 0;

gdjs.logoCode.eventsList0(runtimeScene);
gdjs.logoCode.GDlogoObjects1.length = 0;
gdjs.logoCode.GDlogoObjects2.length = 0;
gdjs.logoCode.GDLogoObjects1.length = 0;
gdjs.logoCode.GDLogoObjects2.length = 0;
gdjs.logoCode.GDskipObjects1.length = 0;
gdjs.logoCode.GDskipObjects2.length = 0;
gdjs.logoCode.GDbgObjects1.length = 0;
gdjs.logoCode.GDbgObjects2.length = 0;
gdjs.logoCode.GDSquareGreenSliderObjects1.length = 0;
gdjs.logoCode.GDSquareGreenSliderObjects2.length = 0;
gdjs.logoCode.GDSquareGreenSlider2Objects1.length = 0;
gdjs.logoCode.GDSquareGreenSlider2Objects2.length = 0;
gdjs.logoCode.GDautoreadSpeedObjects1.length = 0;
gdjs.logoCode.GDautoreadSpeedObjects2.length = 0;
gdjs.logoCode.GDpanelObjects1.length = 0;
gdjs.logoCode.GDpanelObjects2.length = 0;
gdjs.logoCode.GDdialogboxObjects1.length = 0;
gdjs.logoCode.GDdialogboxObjects2.length = 0;
gdjs.logoCode.GDautoreadbtnObjects1.length = 0;
gdjs.logoCode.GDautoreadbtnObjects2.length = 0;
gdjs.logoCode.GDcloseObjects1.length = 0;
gdjs.logoCode.GDcloseObjects2.length = 0;
gdjs.logoCode.GDsaveObjects1.length = 0;
gdjs.logoCode.GDsaveObjects2.length = 0;
gdjs.logoCode.GDloadObjects1.length = 0;
gdjs.logoCode.GDloadObjects2.length = 0;
gdjs.logoCode.GDconfirmObjects1.length = 0;
gdjs.logoCode.GDconfirmObjects2.length = 0;
gdjs.logoCode.GDdenyObjects1.length = 0;
gdjs.logoCode.GDdenyObjects2.length = 0;
gdjs.logoCode.GDautoread_9595iconObjects1.length = 0;
gdjs.logoCode.GDautoread_9595iconObjects2.length = 0;
gdjs.logoCode.GDmessageObjects1.length = 0;
gdjs.logoCode.GDmessageObjects2.length = 0;
gdjs.logoCode.GDslotTitleObjects1.length = 0;
gdjs.logoCode.GDslotTitleObjects2.length = 0;
gdjs.logoCode.GDyesObjects1.length = 0;
gdjs.logoCode.GDyesObjects2.length = 0;
gdjs.logoCode.GDnoObjects1.length = 0;
gdjs.logoCode.GDnoObjects2.length = 0;
gdjs.logoCode.GDfpsObjects1.length = 0;
gdjs.logoCode.GDfpsObjects2.length = 0;
gdjs.logoCode.GDoptionObjects1.length = 0;
gdjs.logoCode.GDoptionObjects2.length = 0;
gdjs.logoCode.GDcursorObjects1.length = 0;
gdjs.logoCode.GDcursorObjects2.length = 0;
gdjs.logoCode.GDcursorAddObjects1.length = 0;
gdjs.logoCode.GDcursorAddObjects2.length = 0;
gdjs.logoCode.GDdustObjects1.length = 0;
gdjs.logoCode.GDdustObjects2.length = 0;
gdjs.logoCode.GDsnowObjects1.length = 0;
gdjs.logoCode.GDsnowObjects2.length = 0;
gdjs.logoCode.GDroseObjects1.length = 0;
gdjs.logoCode.GDroseObjects2.length = 0;
gdjs.logoCode.GDbutterflySlotObjects1.length = 0;
gdjs.logoCode.GDbutterflySlotObjects2.length = 0;
gdjs.logoCode.GDarrowForObjects1.length = 0;
gdjs.logoCode.GDarrowForObjects2.length = 0;
gdjs.logoCode.GDarrowbackObjects1.length = 0;
gdjs.logoCode.GDarrowbackObjects2.length = 0;
gdjs.logoCode.GDmirrorFrameObjects1.length = 0;
gdjs.logoCode.GDmirrorFrameObjects2.length = 0;
gdjs.logoCode.GDdateTimeObjects1.length = 0;
gdjs.logoCode.GDdateTimeObjects2.length = 0;
gdjs.logoCode.GDsaveDiaObjects1.length = 0;
gdjs.logoCode.GDsaveDiaObjects2.length = 0;
gdjs.logoCode.GDfairydust4Objects1.length = 0;
gdjs.logoCode.GDfairydust4Objects2.length = 0;
gdjs.logoCode.GDStarSparksObjects1.length = 0;
gdjs.logoCode.GDStarSparksObjects2.length = 0;
gdjs.logoCode.GDMagicCentreObjects1.length = 0;
gdjs.logoCode.GDMagicCentreObjects2.length = 0;
gdjs.logoCode.GDMagicSmokeObjects1.length = 0;
gdjs.logoCode.GDMagicSmokeObjects2.length = 0;
gdjs.logoCode.GDMagicSmokeCenterObjects1.length = 0;
gdjs.logoCode.GDMagicSmokeCenterObjects2.length = 0;
gdjs.logoCode.GDMagicObjects1.length = 0;
gdjs.logoCode.GDMagicObjects2.length = 0;
gdjs.logoCode.GDblackObjects1.length = 0;
gdjs.logoCode.GDblackObjects2.length = 0;
gdjs.logoCode.GDmothsObjects1.length = 0;
gdjs.logoCode.GDmothsObjects2.length = 0;
gdjs.logoCode.GDmoths2Objects1.length = 0;
gdjs.logoCode.GDmoths2Objects2.length = 0;
gdjs.logoCode.GDmoths3Objects1.length = 0;
gdjs.logoCode.GDmoths3Objects2.length = 0;
gdjs.logoCode.GDbackObjects1.length = 0;
gdjs.logoCode.GDbackObjects2.length = 0;
gdjs.logoCode.GDfps2Objects1.length = 0;
gdjs.logoCode.GDfps2Objects2.length = 0;
gdjs.logoCode.GDItemsObjects1.length = 0;
gdjs.logoCode.GDItemsObjects2.length = 0;
gdjs.logoCode.GDcurrentSpeakerSeeObjects1.length = 0;
gdjs.logoCode.GDcurrentSpeakerSeeObjects2.length = 0;


return;

}

gdjs['logoCode'] = gdjs.logoCode;
