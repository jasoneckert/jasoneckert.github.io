// Created by iWeb 3.0.4 local-build-20200628

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,209),url:'blog_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'blog_files/stroke_1.png'},{rect:new IWRect(2,-2,684,4),url:'blog_files/stroke_2.png'},{rect:new IWRect(686,-2,4,4),url:'blog_files/stroke_3.png'},{rect:new IWRect(686,2,4,209),url:'blog_files/stroke_4.png'},{rect:new IWRect(686,211,4,4),url:'blog_files/stroke_5.png'},{rect:new IWRect(2,211,684,4),url:'blog_files/stroke_6.png'},{rect:new IWRect(-2,211,4,4),url:'blog_files/stroke_7.png'}],new IWSize(688,213))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://triosdevelopers.com/jason.eckert/Jason_Eckert_Homepage/blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('blog_files/blogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
