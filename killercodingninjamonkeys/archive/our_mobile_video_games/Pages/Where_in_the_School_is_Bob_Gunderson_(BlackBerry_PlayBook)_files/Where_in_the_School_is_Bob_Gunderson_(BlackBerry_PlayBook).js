// Created by iWeb 2.0.4 local-build-20111124

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.jasoneckert.net/Site_2/our_mobile_video_games/Pages/Where_in_the_School_is_Bob_Gunderson_%28BlackBerry_PlayBook%29_files/rss.xml",false,true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.jasoneckert.net/Site_2/our_mobile_video_games/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.jasoneckert.net/Site_2/our_mobile_video_games/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(166,166),new IWSize(166,16),new IWSize(204,197),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Where_in_the_School_is_Bob_Gunderson_(BlackBerry_PlayBook)_files/Where_in_the_School_is_Bob_Gunderson_(BlackBerry_PlayBook)Moz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
