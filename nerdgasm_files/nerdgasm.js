// Created by iWeb 3.0.2 local-build-20190818

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,383),url:'nerdgasm_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'nerdgasm_files/stroke_1.png'},{rect:new IWRect(2,-2,673,4),url:'nerdgasm_files/stroke_2.png'},{rect:new IWRect(675,-2,4,4),url:'nerdgasm_files/stroke_3.png'},{rect:new IWRect(675,2,4,383),url:'nerdgasm_files/stroke_4.png'},{rect:new IWRect(675,385,4,4),url:'nerdgasm_files/stroke_5.png'},{rect:new IWRect(2,385,673,4),url:'nerdgasm_files/stroke_6.png'},{rect:new IWRect(-2,385,4,4),url:'nerdgasm_files/stroke_7.png'}],new IWSize(677,387))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('nerdgasm_files/nerdgasmMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
