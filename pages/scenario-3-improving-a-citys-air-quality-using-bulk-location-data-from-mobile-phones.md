###### Scenario 3
# Improving a city’s air quality using bulk location data from mobile phones

Telecommunication providers generate a huge amount of data about people’s activities as they run their services.

Cell towers allow mobile phone companies to see the approximate location of their subscribers at all times, while WiFi hotspot providers record the venues that people frequent. Meanwhile, laws such as the [Investigatory Powers Act](http://www.legislation.gov.uk/ukpga/2016/25/contents/enacted) require internet service providers to retain Internet Connection Records for their users’ network usage.

How data like this is collected and used is often opaque – as was shown through the [use of mobile location data by the Royal Parks](https://www.theguardian.com/world/2015/dec/25/hyde-park-visitors-tracked-mobile-phone-data-ee) to understand the movement of people through Hyde Park.

While there’s undoubtedly public value to be derived from the data currently locked inside telecoms providers, there’s also potential for misuse.

Is it possible to give people a clear understanding of what data is being collected, how it might be used and clear routes to opt-out or object &mdash; much as they can when it comes to a controversial planning application?

To explore this we imagined how a local authority might use mobile phone location data to decide which roads should become car-free zones as part of a plan to improve air quality. We also looked at how they might notify residents and give them a clear opt-out.


[start_highlight]

## Prototype
### Using mobile phone location data to improve air quality in Saxford City

Saxford City Council is planning to pedestrianise key streets in the city centre to tackle poor air quality.

Although we have rich street-level data about air quality in Saxford, we lack footfall and cyclist data. Better data would help to prioritise the streets in which the highest number of people are affected by poor air quality.


The Council is confident that cellular location and WiFi hotspot data would help provide the information we need. We have applied to the Data Protection Office for permission to request bulk data from two telecommunications companies:

 * Morlyn Mobile
 * Cabler Telecom


You are invited to read and comment on the full request, [which is available on saxford.gov.uk](https://gist.github.com/paulfurley/21ac195a66803588a27870f634dfef02#file-collection_request-md) and as [machine-readable data.](https://gist.githubusercontent.com/paulfurley/21ac195a66803588a27870f634dfef02/raw/75910d4dd41091f1fd7e49636169c0e09957b76c/collection_request.json)

#### Public information notices

The Council will take every practical measure to ensure citizens are informed about the purpose of the project and the measures in place to ensure individual privacy is protected.

The council will use the [Cell Broadcast](https://en.wikipedia.org/wiki/Cell_Broadcast) system to issue SMS alerts to people entering the affected area during the 30 days preceding the trial.

![Left: an SMS notifying that mobile phone locations will be collected. Right: a web page with subtitles about the collection, including what's being collected, how it works, how data will be minimised, how to opt out](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Saxford-council_prototype-v1.jpg)

The council will also use variable display devices placed at strategic locations in the city to alert pedestrians and drivers.

![A portable electronic sign on the pavement notifying that mobile phone locations will be collected](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/variable-message-signs_v2.gif)

#### Opting out

During the trial itself, the privately operated WiFi hotspot screens will be switched from advertising mode to a notification screen. This will display the number of users and allow users to opt out.

![A wifi hotspot with a screen announcing that locations are being tracked. It says 'hold your phone here to remove tracking' Then, the screen switches to saying 'hold 2 more seconds to remove location tracking'](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bus-stop-ad_v1.gif)

[end_highlight]

## Summary of findings

### Using data to improve air quality

People responded well to a council using data about them when it was being used to make positive changes in their community. It was clear that people felt they wanted to understand what data would be collected, when it will happen and why.

### Public notices

A couple of participants appreciated being able to look into the detail of how and why data was being collected, as it allowed them to make an informed decision about whether to be included or not. Although they described themselves as privacy-conscious, the level of detail gave these people confidence that the data collection was a positive thing.

Nonetheless, there was limited understanding by most people about how their location could be collected and what ‘anonymised’ meant.

Providing those who want it with good information and a convenient opt-out mechanism is important to this sort of collection. For everyone else, many will not have the time or capacity to make decisions about their data.

This supports the case for strong privacy by default, or alternative [group based consent models](https://www.connectedhealthcities.org/get-involved/citizens-juries/) for such scenarios.

### Opt-out mechanisms

Some of the participants said they would hesitate before opting-out, because they either would not trust texting a random number or would feel self-conscious about doing it in a way others could see.

The same participants voiced concern about how legitimate the consent was: if they didn't see the signs, data about them would get collected anyway.

As such, understanding how people can meaningfully opt-out of data collection in public spaces is something that needs more research.

## Potential design patterns from this prototype

* [Public space notices](/potential-design-patterns-for-open-apis-in-the-utilities-sector#publicspacenotices)
* [Human-readable data request](/potential-design-patterns-for-open-apis-in-the-utilities-sector#humanreadabledatarequest)
* [Machine-readable data request](/potential-design-patterns-for-open-apis-in-the-utilities-sector#machinereadabledatarequest)
* [Minimise data collection](/potential-design-patterns-for-open-apis-in-the-utilities-sector#minimisedatacollection)
* [Plenty of time to opt-out](/potential-design-patterns-for-open-apis-in-the-utilities-sector#plentyoftimetooptout)
* [Opt out by text](/potential-design-patterns-for-open-apis-in-the-utilities-sector#optoutbytext)
* [Opt out by WiFi proximity](/potential-design-patterns-for-open-apis-in-the-utilities-sector#optoutbywifiproximity)

## Potential APIs from this prototype

* [Machine-readable policies](/potential-open-apis-for-the-telecoms-sector#machinereadablepolicies)
* [Access to anonymised bulk data](/potential-open-apis-for-the-telecoms-sector#accesstoanonymisedbulkdata)
* [Opt out of bulk data collection](/potential-open-apis-for-the-telecoms-sector#optoutofbulkdatacollection)
