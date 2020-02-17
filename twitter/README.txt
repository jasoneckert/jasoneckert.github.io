INTRODUCTION
============
This archive was generated at the request of the following user:
- @username at the time the archive was generated: eckmeister
- Account ID: 14123330

This archive consists of machine-readable JSON files with a .js extension containing information associated with this account. We’ve included the information we believe is most relevant and useful, including profile information, Tweets, Direct Messages, Moments, images, videos and GIFs attached to Tweets, Direct Messages or Moments, followers, following, address book, Lists created, a member of, or subscribed to, interest and demographic information that we have inferred, information about ads seen or engaged with on Twitter, and more.

Each file contains detailed information about that category of data. To see this information, simply double click on one of the JSON files. Note that some information, such as the media shared via Direct Messages, is included in a folder instead of a JSON file. Separately, also note that some files may not contain any information if your account is not associated with any of the data they cover.

The information contained in this archive reflects the state of the account at the time when the archive was created.

FILE DESCRIPTIONS
=================
=== SENSORY INFORMATION ===
(Audio, electronic, visual, and similar information)

direct_messages_group_media
Folder of images, videos and gifs shared in the account’s Direct Message group conversations. Note:this folder does not include media hosted on other platforms but linked on Twitter (for example, YouTube videos).

If Group Direct Messages (Group DMs) have been produced and there is associated media, you can match the media to the Group DM data file. The filename for each media file in the direct_messages_group_media folder contains a numerical ID that corresponds to a Group DM in the direct-messages-group file. By searching the direct-messages-group file for the numeric portion of the filename of the media, you can find the corresponding Group DM.

If your production includes a direct-messages-group file and did not include a direct_messages_group_media folder, this is because there was no media associated with the direct-messages-group file.
----------------------
direct_messages_media
Folder of images, videos and gifs shared in the account’s one-on-one Direct Message conversations. Note: this folder does not include media hosted on other platforms but linked on Twitter (for example, YouTube videos).

If Direct Messages (DMs) have been produced and there is associated media, you can match the media to the DM data file. The filename for each media file in the direct_messages_media folder contains a numerical ID that corresponds to a DM in the direct-messages file. By searching the direct-messages file for the numeric portion of the filename of the media, you can find the corresponding DM.

If your production includes a direct-messages file and did not include a direct_messages_media folder, this is because there was no media associated with the direct-messages file.
----------------------
moments_media
Folder of images, videos and gifs uploaded through Twitter’s photo hosting service for Tweets that have been added as Moment cover media. This media may or may not have been originally posted by the account that created the Moment. Note: this folder does not include media hosted on other platforms but linked on Twitter (for example, YouTube videos)
----------------------
moments_tweets_media
Folder of images, videos and gifs uploaded through Twitter’s photo hosting service for Tweets that have been included in a Moment. This media may or may not have been originally posted by the account that created the Moment. Note: this folder does not include media hosted on other platforms but linked on Twitter (for example, YouTube videos)
----------------------
periscope_broadcast_media
Folder containing the encoded live broadcast video files created by the shell account. These files can be viewed by using QuickTime or VLC Media Player (https://www.videolan.org/vlc/). VLC Media Player is an open-source application that gives you the ability to play media from your computer or a disk, or to stream it from the Web.
----------------------
periscope-expired-broadcasts.js
- broadcastIds: A list of the broadcast IDs posted by the shell account that have expired and cannot be encoded.
- reason: Explanation of why broadcast replay files are unavailable (hard-coded).
----------------------
profile_media
Folder including current profile avatar image and header/banner image from the account profile, if they have been uploaded.
----------------------
tweet_media
Folder of images, videos, and/or gifs shared in the account’s Tweets. Note: this folder does not include media hosted on other platforms but linked on Twitter (for example, Youtube videos).

If Tweets have been produced and there is associated media, you can match the media to the Tweet data file. The filename for each media file in the tweet_media folder contains a numerical ID that corresponds to a Tweet in the Tweet file. By searching the Tweet file for the numeric portion of the filename of the media, you can find the corresponding Tweet.

If your production includes a Tweet file and did not include a tweet_media folder, this is because there was no media associated with the Tweet file.
----------------------

=== IDENTIFIERS ===
(Real name, alias, postal address, telephone number, unique identifiers (such as a device identifier, cookies, mobile ad identifiers), customer number, Internet Protocol address, email address, account name, and other similar identifiers)

account-creation-ip.js
- accountId: Unique identifier for the account.
- userCreationIp: IP address at account creation.
----------------------
contact.js
- id: Unique identifiers for the contacts imported to the account.
- emails: Emails of the contacts imported to the account.
- phoneNumbers: Phone numbers of the contacts imported to the account.
----------------------
email-address-change.js
- accountId: Unique identifier for the account.
- changedAt: Date and time the email address was changed.
- changedFrom: Email address associated with the account prior to the change.
- changedTo: New email address associated with the account.
----------------------
ip-audit.js
- accountId: Unique identifier for the account.
- createdAt: Date and time of a login to the account.
- loginIp: IP address associated with the login.
----------------------
periscope-account-information.js
- id: Periscope shell account unique identifier automatically created as soon as the user goes to the "Live" section of the News Camera. A Periscope shell account will be created for the Twitter user before the user goes live.
- displayName: Periscope account name ported over from the Twitter account when the shell account was created.
- username: Periscope account @username ported over from the Twitter account when the shell account was created.
- createdAt: Date and time the "shell account" was created.
- isTwitterUser: Indicates whether the Periscope account is also a Twitter user. This is always true.
- twitterId: Unique identifier for the Twitter account.
- twitterScreenName: The Twitter account’s current @username. Note that the @username may change but the account ID will remain the same for the lifetime of the account.
- isTwitterVerified: Indicates if the associated Twitter account is verified, if applicable.
----------------------
periscope-ban-information.js
- periscopeBanActions: A list of timestamps and reasons an account was disabled.
- periscopeBanOverrideActions: A list of timestamps and ban reasons that an administrator has determined were incorrectly automatically applied to the account.
----------------------
phone-number.js
- phoneNumber: Phone number currently associated with the account if a phone number has been provided.
----------------------
screen-name-change.js
- accountId: Unique identifier for the account.
- changedAt: Date and time the name was changed.
- changedFrom: Previous screen name associated with the account.
- changedTo: New screen name associated with the account.
----------------------

=== ONLINE ACTIVITY ===
(Internet and other electronic network activity information, including, but not limited to, information regarding interactions with websites, applications, or advertisements)

account.js
- phoneNumber: Phone number currently associated with the account if a phone number has been provided.
- email: Email address currently associated with the account if an email address has been provided.
- createdVia: Client application used when the account was created. For example: “web” if the  account was created from a browser.
- username: The account’s current @username. Note that the @username may change but the account ID will remain the same for the lifetime of the account.
- accountId: Unique identifier for the account.
- createdAt: Date and time when the account was created.
- accountDisplayName: The account’s name as displayed on the profile.
----------------------
account-suspension.js
- timeStamp: Date and time of a suspension action.
- action: Action taken regarding account suspension. Accounts are unsuspended by default. This file will be empty unless the account was suspended at some point.
----------------------
account-timezone.js
- accountId: Unique identifier for the account.
- timeZone: Timezone currently associated with the account.
----------------------
ad-engagements.js
- ad: Promoted Tweets the account has engaged with and any associated metadata.
- deviceInfo: Information about the device where the engagement occurred such as its ID and operating system.
- displayLocation: Location where the ad was engaged with on Twitter.
- promotedTweetInfo: Information about the associated tweet such as unique identifier, text, URLs and media when applicable.
- advertiserInfo: Advertiser name and screen name.
- matchedTargetingCriteria: Targeting criteria that were used to run the campaign.
- impressionTime: Date and time when the ad was viewed.
- engagementAttributes: Type of engagement as well as date and time when it occurred.
----------------------
ad-impressions.js
- ad: Promoted Tweets the account has viewed and any associated metadata.
- deviceInfo: Information about the device where the impression was viewed such as its ID and operating system.
- displayLocation: Location where the ad was viewed on Twitter.
- promotedTweetInfo: Information about the associated tweet such as unique identifier, text, URLs and media when applicable.
- advertiserInfo: Advertiser name and screen name.
- matchedTargetingCriteria: Targeting criteria that were used to run the campaign.
- impressionTime: Date and time when the ad was viewed.
----------------------
ad-mobile-conversions-attributed.js
- ad: Mobile application events associated with the account in the last 90 days which are attributable to a Promoted Tweet engagement on Twitter.
- attributedConversionType: Type of activity specifically associated with the event.
- mobilePlatform: Platform on which the event happened. For example: iOS or Android.
- conversionEvent: Information about the event itself such as installing or signing up.
- applicationName: Name of the application in which the event occurred.
- conversionValue: Value associated with the event.
- conversionTime: Date and time of the event.
- additionalParameters: Other optional parameters associated with the event such as a currency or product category.
----------------------
ad-mobile-conversions-unattributed.js
- ad: Mobile application events associated with the account in the last 10 days which may become attributable to a Promoted Tweet engagement on Twitter in the future.
- mobilePlatform: Platform on which the event happened. For example: iOS or Android.
- conversionEvent: Information about the event itself such as installing or signing up.
- applicationName: Name of the application in which the event occurred.
- conversionValue: Value associated with the event.
- conversionTime: Date and time of the event.
- additionalParameters: Other optional parameters associated with the event such as a currency.
----------------------
ad-online-conversions-attributed.js
- ad: Web events associated with the account in the last 90 days which are attributable to a Promoted Tweet engagement on Twitter.
- attributedConversionType: Type of activity specifically associated with the event.
- eventType: Information about the event itself such as viewing a page.
- conversionPlatform: Platform on which the event happened. For example: desktop.
- advertiserInfo: Advertiser name and screen name.
- conversionValue: Value associated with the event.
- conversionTime: Date and time of the event.
- additionalParameters: Other optional parameters associated with the event such as a currency or product category.
----------------------
ad-online-conversions-unattributed.js
- ad: Web events associated with the account in the last 90 days which may become attributable to a Promoted Tweet engagement on Twitter in the future.
- eventType: Information about the event itself such as viewing a page.
- conversionPlatform: Platform on which the event happened. For example: desktop.
- conversionUrl: URL of the website on which the event occurred.
- advertiserInfo: Advertiser name and screen name.
- conversionValue: Value associated with the event.
- conversionTime: Date and time of the event.
- additionalParameters: Other optional parameters associated with the event such as a currency or product category.
----------------------
block.js
- accountId: Unique identifiers of accounts currently blocked by the account.
- userLink: Link to information about the blocked users’ profiles if accessible to the account. For example, this information might not be accessible if blocked profiles are protected or deactivated.
----------------------
branch-links.js
- timestamp: Date and time of when the user clicked on the external (off-Twitter) link that prompted them, for example, to download the Twitter app. Data is limited to the last 21 days on iOS and Android devices.
- landingPage: URL indicating where the user landed on Twitter.
- externalReferrerUrl: URL indicating where the user came from before landing on Twitter.
- channel: Tracking parameter always set to Twitter.
- feature: Tracking parameter indicating the Twitter product surface area where the user clicked.
- campaign: Tracking parameter indicating the name of the marketing campaign which the user clicked.
----------------------
connected-application.js
- name: Name of the application.
- description: Brief description of the application as provided by the organization.
- approvedAt: Date and time when the account authorized the application.
- permissions: List of permissions granted to the connected application by the Twitter account. For example: read or write.
- id: Unique identifier for the application.
----------------------
device-token.js
- token: Token associated with a mobile device or web browser that was used to sign up or log in to this account through twitter.com or one of the other Twitter owned or operated apps within the last 18 months.
- lastSeenAt: Date and time of most recent use. Please note that there may be instances where older tokens do show this information.
- clientApplicationId: Unique identifier of the application associated with the token. Please note that there may be instances where older tokens do not have a unique identifier associated with them.
- clientApplicationName: Name of the application associated with the token. Please note that there may be instances where older tokens do not have an application name associated with them.
- createdAt: Data and time of the creation of the token.
----------------------
direct-message-group-headers.js
- conversationId: Unique identifier for the Direct Message group conversation. Each conversation has a unique randomly generated conversation ID. Within a conversation, the Direct Messages are ordered in reverse chronological order, meaning that the latest Direct Message will be at the top of the list.
- id: Unique identifier for a specific Direct Message within the conversation.
- senderId: Unique identifier for the account who sent the Direct Message.
- createdAt: Date and time the Direct Message was sent.
- joinConversation: Metadata about when the account joined the conversation.
- participantsJoin: Metadata about when another participant joined the conversation. This data is only available if the account was in the conversation when another participant joined.
- participantsLeave: Metadata about when another participant left the conversation. This data is only available if the account was in the conversation when another participant left.
- conversationNameUpdate: Metadata about when a participant changed the name of the conversation.
----------------------
direct-message-headers.js
- id: Unique identifier for a specific Direct Message within the conversation.
- senderId: Unique identifier for the account who sent the Direct Message.
- recipientId: Unique identifier for the account who received the Direct Message.
- createdAt: Date and time the Direct Message was sent.
----------------------
direct-messages.js
- recipientId: Unique identifier for the account who received the Direct Message.
- text: Text content of the Direct Message.
- mediaUrls: Link included in the Direct Message if applicable.
- senderId: Unique identifier for the account who sent the Direct Message.
- id: Unique identifier for a specific Direct Message within the conversation.
- createdAt: Date and time the Direct Message was sent.
----------------------
direct-messages-group.js
- conversationId: Unique identifier for the Direct Message group conversation. Each conversation has a unique randomly generated conversation ID. Within a conversation, the Direct Messages are ordered in reverse chronological order, meaning that the latest Direct Message will be at the top of the list.
- text: Text content of the Direct Message.
- mediaUrls: Link included in the Direct Message if applicable.
- senderId: Unique identifier for the account who sent the Direct Message.
- id: Unique identifier for a specific Direct Message within the conversation.
- createdAt: Day and time of when the Direct Message was sent.
- joinConversation: Metadata about when the account joined the conversation. This field might not be available due to deletions initiated by the account or other participants.
- participantsJoin: Metadata about when another participant joined the conversation. This field might not be available due to deletions initiated by the account or other participants.
- participantsLeave: Metadata about when another participant left the conversation. This field might not be available due to deletions initiated by the account or other participants.
- conversationNameUpdate: Metadata about when a participant changed the name of the conversation including it name.
----------------------
follower.js
- accountId: Unique identifiers for the other accounts that follow this account.
- userLink: Link to information about the blocked users’ profiles if accessible to the account. For example, this information might not be accessible if blocked profiles are protected or deactivated.
----------------------
following.js
- accountId: Unique identifiers for the other accounts this account follows.
- userLink: Link to information about the blocked users’ profiles if accessible to the account. For example, this information might not be accessible if blocked profiles are protected or deactivated.
----------------------
like.js
- tweetId: Unique identifiers for the Tweets liked.
- expandedUrl: Link to the actual tweet on twitter.com if the account has access to it.
- fullText: Text as visible in the tweet if the account has access to it.
----------------------
lists-created.js
- urls: URLs of Lists created by the account.
----------------------
lists-member.js
- urls: URLs of Lists the account has been added to and is eligible to access.
----------------------
lists-subscribed.js
- urls: URLs of Lists the account has subscribed to.
----------------------
moment.js
- momentId: Unique identifier for the Moment.
- createdAt: Date and time the Moment was created.
- createdBy: Unique identifier for the Moment generated by the account.
- title: Title attributed to the Moment.
- tweets: Tweets included in the Moment, including Tweets by other accounts.
- description: Description text on the cover page of the Moment.
----------------------
mute.js
- accountId: Unique identifiers for currently muted accounts.
- userLink: Link to information about the blocked users’ profiles if accessible to the account. For example, this information might not be accessible if blocked profiles are protected or deactivated.
----------------------
ni-devices.js
- deviceType: Manufacturer for devices that are marked as “pushDevice”. For devices marked as “messagingDevice”, the field will indicate “Auth” if the device is only used for two-factor authentication purposes, and “Full” if the device is set to receive notifications from Twitter.
- carrier: Optional field indicating the carrier associated with the device.
- phone_number: Phone number associated with the device.
- deviceVersion: Operating system version associated with the device.
- createdDate: Field indicating when the association between the device and the Twitter account was made.
- updatedDate: Field indicating the last time this association was updated.
----------------------
periscope-broadcast-metadata.js
- id: Unique id for the broadcast posted by the shell account.
- hasLocation: Flag to indicate if the broadcast has associated location.
- latitude: Specific latitude for the broadcast’s location.
- longitude: Specific longitude for the broadcast’s location.
- city: (optional) City where the broadcast took place.
- country: (optional) Country where the broadcast took place.
- createdAt: Time broadcast was created.
- updatedAt: Time broadcast was updated or modified.
----------------------
periscope-comments-made-by-user.js
- broadcastId: Unique id for the broadcast posted by the shell account.
- byAccountId: Account ID of the commenter.
- createdAt: Time comment was made.
- text: The comment text.
----------------------
periscope-followers.js
Other accounts that follow this shell account.
----------------------
periscope-profile-description.js
- description: Periscope account description ported over from the Twitter account when the shell account was created.
- profileImageUrls: URLs of the profile images used with the Twitter account when the shell account was created.
----------------------
profile.js
- bio: Current account bio as displayed on the profile, if the user has provided one.
- website: Current account website as displayed on the profile, if the user has provided one.
- location: Current account location as displayed on the profile, if the user has provided one.
- avatarMediaUrl: Link to the current profile avatar image, if the user has provided one.
- headerMediaUrl: Link to the current profile header image, if the user has provided one.
----------------------
protected-history.js
- protectedAt: Date and time the "Protect your Tweets" setting was used in the last six months.
- action: Whether the account is protected or unprotected.
----------------------
saved-search.js
- savedSearchId: Unique identifier for a saved search.
- query: Actual search query entered by the account.
----------------------
tweet.js
This JSON file contains all the Tweets posted and not deleted. The definitions for each of the variables that may be included in any particular Tweet are available in our API documentation: https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update.
----------------------
verified.js
- accountId: Unique identifier for the account.
- verified: Indicates whether the account is verified.
----------------------

=== INFERENCES ===
(Inferences drawn to create a profile about the user reflecting their preferences, characteristics, predispositions, behavior, and attitudes)

personalization.js
- languages: Languages associated with the account. Please note that this information may be inferred.
- genderInfo: Gender associated with the account. Please note that this information may be inferred.
- interests: Interests associated with the account. Please note that this information may be inferred.
- partnerInterests: Interests from partners that are associated with the account.
- numAudiences: Number of tailored audiences (audiences generated by advertisers) the account is a part of.
- advertisers: List of screennames for the advertisers that own the tailored audiences the account is a part of.
- inferredAgeInfo: Date of birth Twitter has inferred about the account and corresponding current age.
- locationHistory: Location history associated with the account based on activity from the last 60 days.
----------------------

=== PROTECTED CLASSIFICATIONS ===
(Characteristics of certain legally protected classifications.)

For information about the language(s), gender, and age associated with the account (which may be inferred), please refer to personalization.js.

ageinfo.js
- ageInfo: Date of birth provided to Twitter and corresponding current age.
----------------------

=== LOCATION DATA ===

For location data associated with the account, please refer to location in profile.js and locationHistory in personalization.js. For information about a Periscope broadcast location, please refer to periscope-broadcast-metadata.js.
----------------------


INFORMATION REGARDING DATA COLLECTION, PROCESSING, AND DISCLOSURE
===================
For information about the sources from which we collect personal information, our purposes for collection, and how we may share it, please read the Twitter Privacy Policy (www.twitter.com/privacy) and https://help.twitter.com/rules-and-policies/data-processing-legal-bases.
