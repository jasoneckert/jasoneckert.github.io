//
//  iWeb - PlayButton.js
//  Copyright (c) 2007 Apple Inc. All rights reserved.
//

function PlayButton(instanceID)
{if(instanceID!=null)
{Widget.apply(this,arguments);if(windowsInternetExplorer&&browserVersion>=7)
{this.enableIE7Hack=true;}
this.updateFromPreferences();}}
PlayButton.prototype=new Widget();PlayButton.prototype.constructor=PlayButton;PlayButton.prototype.widgetIdentifier="com-apple-iweb-widget-playbutton";PlayButton.prototype.onload=function()
{}
PlayButton.prototype.onunload=function()
{}
PlayButton.prototype.changedPreferenceForKey=function(key)
{}
PlayButton.prototype.setDivOpacity=function(playButtonDiv,opacity)
{if(this.enableIE7Hack)
{playButtonDiv.style.visibility=(opacity>0.5)?"visible":"hidden";}
else
{IWSetDivOpacity(playButtonDiv,opacity,true);}}
PlayButton.prototype.updateFromPreferences=function()
{var playButtonDiv=this.getElementById("play_button");playButtonDiv.ensureHasLayoutForIE();var self=this;self.opacity=0;this.setDivOpacity(playButtonDiv,self.opacity);var mouseEventDiv=this.enableIE7Hack?playButtonDiv.parentNode:playButtonDiv;mouseEventDiv.onmouseover=function()
{self.p_fadeIn(playButtonDiv);mouseEventDiv.onmouseout=function()
{self.p_fadeOut(playButtonDiv);}}
fixupIEPNGBGsInTree(playButtonDiv);}
PlayButton.prototype.p_fadeIn=function(playButtonDiv)
{var self=this;var startOpacity=this.opacity;if(this.mFadeAnimation)
{this.mFadeAnimation.stop();}
this.mFadeAnimation=new SimpleAnimation(function()
{delete self.mFadeAnimation;});this.mFadeAnimation.pre=function()
{self.opacity=startOpacity;self.setDivOpacity(playButtonDiv,self.opacity);}
this.mFadeAnimation.post=function()
{self.opacity=1.0;self.setDivOpacity(playButtonDiv,self.opacity);}
this.mFadeAnimation.update=function(now)
{self.opacity=startOpacity+now*(1.0-startOpacity);self.setDivOpacity(playButtonDiv,self.opacity);}
this.mFadeAnimation.start();}
PlayButton.prototype.p_fadeOut=function(playButtonDiv)
{var startOpacity=this.opacity;if(this.mFadeAnimation)
{this.mFadeAnimation.stop();}
var self=this;this.mFadeAnimation=new SimpleAnimation(function()
{delete self.mFadeAnimation;});this.mFadeAnimation.pre=function()
{self.opacity=startOpacity;self.setDivOpacity(playButtonDiv,self.opacity);}
this.mFadeAnimation.post=function()
{self.opacity=0.0;self.setDivOpacity(playButtonDiv,self.opacity);}
this.mFadeAnimation.update=function(now)
{self.opacity=startOpacity*(1.0-now);self.setDivOpacity(playButtonDiv,self.opacity);}
this.mFadeAnimation.start();}
