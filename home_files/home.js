// Created by iWeb 3.0.2 local-build-20190818

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,589),url:'home_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'home_files/stroke_1.png'},{rect:new IWRect(2,-2,471,4),url:'home_files/stroke_2.png'},{rect:new IWRect(473,-2,4,4),url:'home_files/stroke_3.png'},{rect:new IWRect(473,2,4,589),url:'home_files/stroke_4.png'},{rect:new IWRect(473,591,4,5),url:'home_files/stroke_5.png'},{rect:new IWRect(2,591,471,5),url:'home_files/stroke_6.png'},{rect:new IWRect(-2,591,4,5),url:'home_files/stroke_7.png'}],new IWSize(475,593))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('home_files/homeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
