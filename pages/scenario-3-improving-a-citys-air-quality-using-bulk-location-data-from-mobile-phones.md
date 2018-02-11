Telecommunication providers generate a huge amount of data about people&rsquo;s activities from running their services.

Through cell towers, mobile phone companies know the approximate location of all their subscribers at all times, while WiFi hotspot providers record the venues that people frequent, and laws such as the [Investigatory Powers Act](http://www.legislation.gov.uk/ukpga/2016/25/contents/enacted) require internet service providers to retain &lsquo;Internet Connection Records&rsquo; for their users&rsquo; network usage.

How data like this is collected and used is often opaque - as was shown with the [use of mobile location data by the Royal Parks](https://www.theguardian.com/world/2015/dec/25/hyde-park-visitors-tracked-mobile-phone-data-ee) to understand movement of people through Hyde Park.

While there is undoubtedly public value to be derived from the data currently locked inside telecoms providers, there is also potential for misuse.

Is it possible to give people a clear understanding of what data is being collected, how it might be used and clear routes to opt-out or object, much as they can do to a controversial planning application?

To explore this, we imagined how a local authority might use mobile phone location data to decide which roads should become car-free zones as part of a plan to improve air quality, and how it might notify residents and give them a clear opt-out.


[start_highlight]

## Prototype
### Improving air quality in Saxford City using mobile phone location data

Saxford City Council is planning to pedestrianize key streets in the city centre to tackle poor air quality.

Although we have rich, street-level data about air quality in Saxford, we lack footfall and cyclist data. Better data would help to prioritise the streets in which the highest number of people are affected by poor air quality.

The Council is confident that cellular location and WiFi hotspot data would help provide the information we need. We have applied to the Data Protection Office for permission to request bulk data from two telecommunications companies:

 * Morlyn Mobile
 * Cabler Telecom 


You are invited to read and comment on the full request, [which is available on saxford.gov.uk](https://gist.github.com/paulfurley/21ac195a66803588a27870f634dfef02#file-collection_request-md) and as [machine-readable data.](https://gist.githubusercontent.com/paulfurley/21ac195a66803588a27870f634dfef02/raw/75910d4dd41091f1fd7e49636169c0e09957b76c/collection_request.json)

#### Public information notices

The Council will take every practical measure to ensure citizens are informed about the purpose of the project and the measures in place to ensure individual privacy is protected.

The council will use the [Cell Broadcast](https://en.wikipedia.org/wiki/Cell_Broadcast) system to issue SMS alerts to people entering the affected area during the 30 days preceding the trial.

![Left: an SMS notifying that mobile phone locations will be collected. Right: a web page with subtitles about the collection, including what's being collected, how it works, how data will be minimised, how to opt out](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Saxford-council_prototype-v1.jpg)

The council will also use variable display devices at strategic locations in the city to alert pedestrians and drivers.

![A portable electronic sign on the pavement notifying that mobile phone locations will be collected](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/variable-message-signs_v2.gif)

#### Opting out

During the trial itself, the privately operated WiFi hotspot screens will be switched from advertising mode to a notification screen. This will display the number of users and allow users to opt out.

![Left: a wifi hotspot with a screen announcing that locations are being tracked. It says 'hold your phone here to remove tracking' Right: The screen switched to saying 'hold 2 more seconds to remove location tracking'](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bus-stop-ad_v1.gif)

[end_highlight]

## Summary of findings

### Using data to improve air quality

When it helps make positive changes for their community people responded well to a council using data about them. It was clear that people felt they wanted to understand what data would be collected, when it will happen and why. 

### Public notices

A couple of participants appreciated being able to look into the detail of how and why data was being collected. It empowered them to make an informed decision whether to be included or not. Although they described themselves as privacy conscious, the level of detail gave these people confidence that the data collection was a positive thing.

That said, there was limited understanding by most people how their location could be collected and what &lsquo;anonymised&rsquo; meant.

Providing those who want it with good information and a convenient opt-out mechanism is important to this sort of collection. For everyone else, many will not have the time or capacity to make decisions about their data.

This supports the case for strong privacy by default, or alternative [group based consent models](https://www.connectedhealthcities.org/get-involved/citizens-juries/) for scenarios like these.

### Opt-out mechanisms

Some of the participants said they would hesitate opting-out, because they either would not trust texting a random number or feel self-conscious about doing it in a way others could see.

The same participants said they would be worried that if they didn't see the signs, data about them would get collected anyway, and that wouldn't be real consent.

As such, undertanding how people can meaningfully opt-out of data collection in public spaces is something that needs more research.

## Potential design patterns from this prototype

* [Public space notices](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#publicspacenotices)
* [Human-readable data request](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#humanreadabledatarequest)
* [Machine-readable data request](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#machinereadabledatarequest)
* [Minimising data collection](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#minimisingdatacollection)
* [Plenty of time to opt-out](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#plentyoftimetooptout)
* [Opting out by text](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#optingoutbytext)
* [Opting out by WiFi proximity](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#optingoutbywifiproximity)

## Potential APIs from this prototype

* [Machine readable policies](/appendix-potential-open-apis-for-the-telecoms-sector#machinereadablepolicies)
* [Access to anonymised bulk data](/appendix-potential-open-apis-for-the-telecoms-sector#accesstoanonymisedbulkdata)
* [Opt-out for bulk data collection](/appendix-potential-open-apis-for-the-telecoms-sector#optoutforbulkdatacollection)

