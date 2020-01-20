//
//  iWeb - YouTube.js
//  Copyright (c) 2008 Apple Inc. All rights reserved.
//

var YouTubeWidget=Class.create(Widget,{widgetIdentifier:"com-apple-iweb-widget-YouTube",thumbnailURL:null,initialize:function($super,instanceID,widgetPath,sharedPath,sitePath,preferences,runningInApp)
{if(instanceID)
{$super(instanceID,widgetPath,sharedPath,sitePath,preferences,runningInApp);if(this.runningInApp)
{window.onresize=this.resize.bind(this);}
var parentDiv=this.div("youTube");this.m_views={};this.m_views["movie"]=new YouTubeMovieView(this,parentDiv);if(runningInApp)
{this.m_views["no-movie-status"]=new YouTubeNoMovieStatus(this,parentDiv);this.m_views["invalid-url-status"]=new YouTubeInvalidURLStatus(this,parentDiv);this.m_views["user-offline-status"]=new YouTubeUserOfflineStatus(this,parentDiv);}
else
{this.m_views["no-movie-status"]=new YouTubePublishedErrorStatus(this,parentDiv);this.m_views["invalid-url-status"]=this.m_views["no-movie-status"];this.m_views["user-offline-status"]=this.m_views["no-movie-status"];}
this.showView("no-movie-status");this.setPreferenceForKey(false,"x-snapshotAvailable",false);this.updateFromPreferences();}},changedPreferenceForKey:function(key)
{var widgetDiv=this.div();if(this.preferenceForKey("x-online")===false)
{this.showView("user-offline-status");}
else if((key=='showRelatedVideos')||(key=='address'))
{this.updateFromPreferences();}
else if(key=='x-thumbnailMode')
{if(this.thumbnailURL!=null)
{if(this.preferenceForKey(key))
{this.m_views["movie"].showThumbnail(true);}
else
{this.m_views["movie"].showThumbnail(false);}}
else
{}}},updateFromPreferences:function()
{if(!this.normalizingAddress)
{this.normalizingAddress=true;var specifiedAddress=this.preferenceForKey("address");var viewToShow="no-movie-status";if(specifiedAddress&&(specifiedAddress.length>0))
{var movieURL=this.preferenceForKey("movieURL");if(specifiedAddress!=this.preferenceForKey('lastNormalizedAddress'))
{movieURL=null;this.setPreferenceForKey(0,"x-mediaDuration",false);var youTubeURL=this.p_scrapeYouTubeURLFromString(specifiedAddress);var videoGUID=this.p_scrapeVideoGUIDFromString(youTubeURL);var params=youTubeURL.toQueryParams();if(videoGUID&&videoGUID.length>0)
{var newQueryParams={};['color1','color2','border'].each(function(property){var value=params[property];if(value)
{newQueryParams[property]=value;}});movieURL="http://www.youtube.com/v/"+videoGUID;var queryParamString=$H(newQueryParams).toQueryString();movieURL+=((queryParamString.length==0)?"":("&"+queryParamString));if(movieURL!=this.preferenceForKey("movieURL"))
{this.redoThumbnail(videoGUID);}
var normalizedAddress="http://www.youtube.com/watch?v="+videoGUID;this.setPreferenceForKey(normalizedAddress,"lastNormalizedAddress",false);this.setPreferenceForKey(normalizedAddress,"address",false);var rel=params['rel'];if(rel!==undefined)
{this.setPreferenceForKey((rel!=="0"),"showRelatedVideos",false);}
this.setPreferenceForKey(true,"x-snapshotAvailable",false);}}
var showRelatedVideos=this.preferenceForKey("showRelatedVideos");if(movieURL&&(showRelatedVideos!==undefined))
{var tempQueryParams=$H(movieURL.httpURLQueryString().toQueryParams());if(showRelatedVideos)
{tempQueryParams.unset("rel");}
else
{tempQueryParams.set("rel","0");}
movieURL=movieURL.split("&")[0];var queryParamString=tempQueryParams.toQueryString();movieURL+=((queryParamString.length==0)?"":("&"+queryParamString));}
if(movieURL!=this.preferenceForKey("movieURL"))
{this.setPreferenceForKey(movieURL,"movieURL",false);}
var viewToShow=(movieURL&&movieURL.isHTTPURL&&movieURL.isHTTPURL()?"movie":"invalid-url-status");this.m_views[viewToShow].render();}
this.m_currentViewName=viewToShow;this.showView(viewToShow);this.normalizingAddress=undefined;}},redoThumbnail:function(videoGUID)
{this.thumbnailURL=null;var thumbnailURL=null;new Ajax.Request("http://gdata.youtube.com/feeds/api/videos/"+videoGUID,{method:'get',onFailure:function(request)
{this.setPreferenceForKey(false,"x-snapshotAvailable",false);this.render();}.bind(this),onSuccess:function(request)
{var entryNode=ajaxGetDocumentElement(request);var mediaNS="http://search.yahoo.com/mrss/";var youTubeNS="http://gdata.youtube.com/schemas/2007";var mediaGroup=entryNode.getElementsByTagNameNS(mediaNS,"group");if(mediaGroup&&mediaGroup[0])
{var maxHeight=0;var mediaThumbnails=mediaGroup[0].getElementsByTagNameNS(mediaNS,"thumbnail");$A(mediaThumbnails).each(function(element)
{var height=parseInt(element.getAttribute("height"));if(height>maxHeight)
{maxHeight=height;thumbnailURL=element.getAttribute("url");}}.bind(this));this.m_views["movie"].setThumbnailURL(thumbnailURL);this.thumbnailImage=IWCreateImage(thumbnailURL);this.thumbnailImage.load(function()
{this.thumbnailURL=thumbnailURL;this.setPreferenceForKey(true,"x-snapshotAvailable",false);this.setPreferenceForKey(true,"x-snapshotReady",false);}.bind(this));var duration=mediaGroup[0].getElementsByTagNameNS(youTubeNS,"duration");if(duration&&duration[0])
{var seconds=parseFloat(duration[0].getAttribute("seconds"));if(seconds>0)
{this.setPreferenceForKey(seconds,"x-mediaDuration",false);}}}}.bind(this)});},resize:function()
{$H(this.m_views).each(function(pair){pair.value.resize();});},onload:function()
{if(!this.runningInApp)
{}},onunload:function()
{},p_scrapeYouTubeURLFromString:function(specifiedAddress)
{var address=specifiedAddress;var match=specifiedAddress.match(/(value|src)\s*\=\s*([']([^']+)[']|["]([^"]+)["])/);if(match&&match.length==5)
{address=match[3]||match[4];}
return address.strip();},p_scrapeVideoGUIDFromString:function(specifiedAddress)
{var videoGUID=null;var match=specifiedAddress.match(/^([a-zA-Z0-9_\-]*\d[a-zA-Z0-9_\-]*)$/);if(match)
{videoGUID=match[1];}
else
{match=specifiedAddress.match(/^(http[s]?:\/\/)?(\w+\.)?youtube\.com(\/.+)$/);if(match&&match.length==4)
{var pathAndParams=match[3];var params=specifiedAddress.toQueryParams();var videoGUID=params["v"];if(videoGUID==null)
{match=pathAndParams.match(/^\/v\/([^\/&\?]+)/);if(match)
{videoGUID=match[1];}}}}
return videoGUID;}});var YouTubeMovieView=Class.create(View,{m_divId:"movie",m_divClass:"YouTubeMovie",m_thumbnailURL:"",setThumbnailURL:function(url)
{if(this.m_thumbnailURL!=url)
{this.m_thumbnailURL=url;this.render();}},render:function()
{if(this.preferences&&this.preferences.postNotification)
{this.m_widget.preferences.postNotification("BLWidgetIsSafeToDrawNotification",0);}
var markup='<img style="visibility: hidden; position: absolute; width:100%; height:100%;" src="'+this.m_thumbnailURL+'" />'+'<object style="visibility: visible; position:absolute; width:100%; height:100%">'+'<param name="movie" value="'+this.m_widget.preferenceForKey('movieURL')+'"></param>'+'<param name="wmode" value="transparent">'+'<embed src="'+this.m_widget.preferenceForKey('movieURL')+'" type="application/x-shockwave-flash" wmode="transparent" width="100%" height="100%"></embed>'+'</object>';this.ensureDiv().update(markup);if(this.runningInApp)
{setTimeout(function()
{if(this.preferences&&this.preferences.postNotification)
{this.m_widget.preferences.postNotification("BLWidgetIsSafeToDrawNotification",1);}
if(this.m_widget.preferenceForKey("x-snapshotAvailable")===false)
{this.m_widget.setPreferenceForKey(true,"x-timeElapsedAfterMovieLoad",false);}}.bind(this),1000);}},showThumbnail:function(flag)
{var theImg=this.ensureDiv().select('img')[0];var theObj=this.ensureDiv().select('object')[0];if(theImg&&theObj)
{if(flag)
{theObj.setStyle({visibility:"hidden"});theImg.setStyle({visibility:"visible"});}
else
{theImg.setStyle({visibility:"hidden"});theObj.setStyle({visibility:"visible"});}}}});var YouTubeNoMovieStatus=Class.create(StatusView,{m_divId:"no-movie-status",m_divClass:"YouTubeStatusView",badgeImage:"youtube-placeholder.png",badgeImageWidth:128,badgeImageHeight:69});var YouTubeInvalidURLStatus=Class.create(StatusView,{m_divId:"invalid-url-status",m_divClass:"YouTubeStatusView",badgeImage:"youtube-placeholder_disabled.png",badgeImageWidth:128,badgeImageHeight:69,statusMessageKey:"<b>The YouTube URL you entered is invalid.</b><br />Double-check the URL on YouTube, and then try again.",upperRightBadge:"error-glyph.png",upperRightBadgeWidth:24,upperRightBadgeHeight:19});var YouTubeUserOfflineStatus=Class.create(StatusView,{m_divId:"user-offline-status",m_divClass:"YouTubeStatusView",badgeImage:"youtube-placeholder_disabled.png",badgeImageWidth:128,badgeImageHeight:69,statusMessageKey:"<b>You must be connected to the Internet to view the YouTube movie.</b>",upperRightBadge:"error-glyph.png",upperRightBadgeWidth:24,upperRightBadgeHeight:19});var YouTubePublishedErrorStatus=Class.create(StatusView,{m_divId:"published-error-status",m_divClass:"YouTubeStatusView",badgeImage:"youtube-placeholder.png",badgeImageWidth:128,badgeImageHeight:69});