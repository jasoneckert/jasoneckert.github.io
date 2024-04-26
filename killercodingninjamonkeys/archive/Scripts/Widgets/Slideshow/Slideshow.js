//
//  iWeb - Slideshow.js
//  Copyright (c) 2007 Apple Inc. All rights reserved.
//

function SlideshowGlue(instanceID)
{if(instanceID!=null)
{Widget.apply(this,arguments);this.mInstanceID=instanceID;this.updateFromPreferences();}}
SlideshowGlue.prototype=new Widget();SlideshowGlue.prototype.constructor=SlideshowGlue;SlideshowGlue.prototype.widgetIdentifier="com-apple-iweb-widget-slideshow";SlideshowGlue.prototype.onload=function()
{}
SlideshowGlue.prototype.onunload=function()
{}
SlideshowGlue.prototype.loadFromStream=function(mediaStream)
{if(this.p_enabled())
{if(this.runningInApp)
{var slideshowDiv=this.getElementById("slideshow_placeholder");slideshowDiv.onmouseover=function()
{mediaStream.load(this.p_baseURL(),this.onStreamLoad.bind(this));}.bind(this);}
else
{mediaStream.load(this.p_baseURL(),this.onStreamLoad.bind(this));}}
else
{}}
SlideshowGlue.prototype.onStreamLoad=function(imageStream)
{var slideshowDiv=this.getElementById("slideshow_placeholder");if(this.mSlideshow!=null)
{this.mSlideshow.pause();slideshowDiv.innerHTML="";}
var skipStride=0;var nextToSkip=999999999;var transitionIndex=this.p_transitionIndex();var scrub=(transitionIndex==255);if(scrub)
{var numberToSkip=imageStream.length-50;if(numberToSkip>0)
{skipStride=imageStream.length/numberToSkip;nextToSkip=0;}}
var photos=[];var imageType=this.p_imageType();for(var i=0;i<imageStream.length;++i)
{if(i>nextToSkip)
{nextToSkip+=skipStride;}
else
{photos.push(imageStream[i].slideshowValue(imageType));}}
var options={backgroundColor:this.p_backgroundColor(),scaleMode:this.p_scaleMode(),movieMode:this.p_movieMode(),shouldTighten:false};this.mSlideshow=new Slideshow(slideshowDiv,photos,function(){},options);if(scrub)
{this.mSlideshow.setTransitionIndex(1,0);}
else
{this.mSlideshow.setTransitionIndex(transitionIndex,0);}
this.mSlideshow.pause();this.mSlideshow.photoDuration=this.p_photoDuration();var startIndex=this.p_startIndex();if(startIndex>=imageStream.length)
{startIndex=0;}
this.mSlideshow.showPhotoNumber(startIndex);if(this.runningInApp)
{window.onresize=function()
{this.p_onResize();}.bind(this)}
if(scrub)
{var heightPct="100%";for(var i=0;i<photos.length;++i)
{var div=document.createElement("div");div.className="scrubBand";div.style.position="absolute";div.style.top="0px";div.style.height=heightPct;div.style.zIndex=100;div.style.backgroundImage="url("+transparentGifURL()+")";div.onmouseover=this.p_scrub.bind(this,slideshowDiv,i);slideshowDiv.appendChild(div);}
this.p_positionScrubBands();}
slideshowDiv.onmouseover=null;if(this.p_showOnMouseOver())
{IWSetDivOpacity(slideshowDiv,0.0);if(scrub)
{var self=this;slideshowDiv.onmouseover=function()
{self.mLoadingImages=true;self.p_startLoadingImages();slideshowDiv.onmouseout=function()
{self.mLoadingImages=false;IWSetDivOpacity(slideshowDiv,0.0);}}}
else
{var self=this;slideshowDiv.onmouseover=function()
{self.p_startSlideshow(slideshowDiv);slideshowDiv.onmouseout=function()
{self.p_pauseSlideshow(slideshowDiv);}}}}
else
{if(scrub)
{slideshowDiv.onmouseout=function()
{this.mSlideshow.showPhotoNumber(0);}.bind(this);}
else
{this.p_startSlideshow(slideshowDiv);}}}
var DidStartLoadingImagesNotification="DidStartLoadingImages";SlideshowGlue.prototype.p_didStartLoadingImages=function(notification)
{if(notification.object()!==this)
{this.p_unloadImages();}}
SlideshowGlue.prototype.p_startLoadingImages=function()
{if(this.runningInApp)
{this.preferences.postCrossWidgetNotification(DidStartLoadingImagesNotification,{});}
else
{NotificationCenter.postNotification(new IWNotification(DidStartLoadingImagesNotification,this,{}));}
if(!this.mListeningForNotifications)
{this.mListeningForNotifications=true;NotificationCenter.addObserver(null,this.p_didStartLoadingImages.bind(this),DidStartLoadingImagesNotification,null);}
if(this.mCurrentLoadingImageIndex===undefined)
{this.mCurrentLoadingImageIndex=0;}
var loadImage=function()
{if(this.mLoadingImages)
{var index=this.mCurrentLoadingImageIndex;var photos=this.mSlideshow.photos;if(index<photos.length)
{var image=photos[index].image;image.load(function(image)
{if(this.mCurrentLoadingImageIndex<photos.length&&image===photos[this.mCurrentLoadingImageIndex].image)
{image.preventUnloading();++this.mCurrentLoadingImageIndex;loadImage();}}.bind(this,image),true);}}}.bind(this);loadImage();}
SlideshowGlue.prototype.p_unloadImages=function()
{var photos=this.mSlideshow.photos;for(var index=0;index<this.mCurrentLoadingImageIndex;++index)
{var image=photos[index].image;image.allowUnloading();image.unload(true);}
this.mCurrentLoadingImageIndex=0;}
SlideshowGlue.prototype.p_scrub=function(slideshowDiv,index)
{this.mSlideshow.showPhotoNumber(index);IWSetDivOpacity(slideshowDiv,1.0);this.mLoadingImages=true;}
SlideshowGlue.prototype.p_positionScrubBands=function()
{var slideshowDiv=this.getElementById("slideshow_placeholder");var left=0;var totalWidth=slideshowDiv.offsetWidth;var bands=slideshowDiv.select('.scrubBand');for(var i=0;i<bands.length;++i)
{var right=Math.round((i+1)*totalWidth/bands.length);var div=bands[i];div.style.left=left+"px";div.style.width=(right-left)+"px";left=right;}}
SlideshowGlue.prototype.p_onResize=function()
{if(this.mSlideshow)
{var slideshowDiv=this.getElementById("slideshow_placeholder");if(slideshowDiv.offsetWidth!=this.mSlideshowOffsetWidth)
{this.mSlideshowOffsetWidth=slideshowDiv.offsetWidth;this.mSlideshow.updateSize();this.p_positionScrubBands();}}}
SlideshowGlue.prototype.changedPreferenceForKey=function(key)
{if(key=="mediaStream")
{var mediaStream=this.p_mediaStream();if(mediaStream!==null)
{this.loadFromStream(mediaStream);}}}
SlideshowGlue.prototype.updateFromPreferences=function()
{var mediaStream=this.p_mediaStream();this.loadFromStream(mediaStream);}
SlideshowGlue.prototype.p_mediaStream=function()
{var mediaStream=null;if(this.preferences)
{mediaStream=this.preferenceForKey("mediaStreamObject");if(mediaStream==null||mediaStream==undefined)
{var mediaStreamCode=this.preferenceForKey("mediaStream");if(mediaStreamCode!=null&&mediaStreamCode.length>0)
{mediaStream=eval(mediaStreamCode);}}}
return mediaStream;}
SlideshowGlue.prototype.p_backgroundColor=function()
{var backgroundColor=null;if(this.preferences)
{backgroundColor=this.preferenceForKey("color");}
if(backgroundColor===undefined)
{backgroundColor="black";}
return backgroundColor;}
SlideshowGlue.prototype.p_baseURL=function()
{return this.preferenceForKey("baseURL");}
SlideshowGlue.prototype.p_enabled=function()
{var enabled=null;if(this.preferences)
{enabled=this.preferenceForKey("slideshowEnabled");}
if(enabled===undefined)
{enabled=false;}
return enabled;}
SlideshowGlue.prototype.p_fadeIn=function()
{var fadeIn=null;if(this.preferences)
{fadeIn=this.preferenceForKey("fadeIn");}
if(fadeIn===undefined)
{fadeIn=false;}
return fadeIn;}
SlideshowGlue.prototype.p_showOnMouseOver=function()
{var showOnMouseOver=null;if(this.preferences)
{showOnMouseOver=this.preferenceForKey("showOnMouseOver");}
if(showOnMouseOver===null||showOnMouseOver==undefined)
{showOnMouseOver=false;}
return showOnMouseOver;}
SlideshowGlue.prototype.p_photoDuration=function()
{var photoDuration=null;if(this.preferences)
{photoDuration=this.preferenceForKey("photoDuration")*1000;}
if(photoDuration===null)
{photoDuration=5000;}
return photoDuration;}
SlideshowGlue.prototype.p_startIndex=function()
{var startIndex=null;if(this.preferences)
{startIndex=this.preferenceForKey("startIndex");}
if(startIndex===undefined)
{startIndex=0;}
return startIndex;}
SlideshowGlue.prototype.p_scaleMode=function()
{var scaleMode=null;if(this.preferences)
{scaleMode=this.preferenceForKey("scaleMode");}
if(scaleMode===undefined)
{scaleMode="fit";}
return scaleMode;}
SlideshowGlue.prototype.p_transitionIndex=function()
{var transitionIndex=null;if(this.preferences)
{transitionIndex=this.preferenceForKey("transitionIndex");}
if(transitionIndex===undefined)
{transitionIndex=0;}
return transitionIndex;}
SlideshowGlue.prototype.p_imageType=function()
{var imageType=null;if(this.preferences)
{imageType=this.preferenceForKey("imageType");}
if(imageType===null||imageType==undefined)
{imageType="image";}
return imageType;}
SlideshowGlue.prototype.p_movieMode=function()
{var movieMode=null;if(this.preferences)
{movieMode=this.preferenceForKey("movieMode");}
if(movieMode===null||movieMode==undefined)
{movieMode=kShowMovie;}
return movieMode;}
SlideshowGlue.prototype.p_startSlideshow=function(slideshowDiv)
{if(this.mSlideshow&&this.p_enabled())
{if(this.p_fadeIn())
{var self=this;var startOpacity=slideshowDiv.getStyle("opacity");if(this.mFadeAnimation)
{this.mFadeAnimation.stop();}
this.mFadeAnimation=new SimpleAnimation(function()
{delete self.mFadeAnimation;self.mSlideshow.resume();});this.mFadeAnimation.pre=function()
{IWSetDivOpacity(slideshowDiv,startOpacity);}
this.mFadeAnimation.post=function()
{IWSetDivOpacity(slideshowDiv,1.0);}
this.mFadeAnimation.update=function(now)
{IWSetDivOpacity(slideshowDiv,startOpacity+now*(1.0-startOpacity));}
this.mFadeAnimation.start();}
else
{this.mSlideshow.resume();}}}
SlideshowGlue.prototype.p_pauseSlideshow=function(slideshowDiv)
{if(this.mSlideshow)
{this.mSlideshow.pause();if(this.p_fadeIn())
{var startOpacity=slideshowDiv.getStyle("opacity");if(this.mFadeAnimation)
{this.mFadeAnimation.stop();}
var self=this;this.mFadeAnimation=new SimpleAnimation(function()
{delete self.mFadeAnimation;var startIndex=self.p_startIndex();if(self.mSlideshow.currentPhotoNumber==startIndex-1&&startIndex<self.mSlideshow.photos.length)
{self.mSlideshow.showPhotoNumber(startIndex,true);}});this.mFadeAnimation.pre=function()
{IWSetDivOpacity(slideshowDiv,startOpacity);}
this.mFadeAnimation.post=function()
{IWSetDivOpacity(slideshowDiv,0);}
this.mFadeAnimation.update=function(now)
{IWSetDivOpacity(slideshowDiv,startOpacity*(1.0-now));}
this.mFadeAnimation.start();}}}
