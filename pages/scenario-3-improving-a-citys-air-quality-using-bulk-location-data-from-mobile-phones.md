Telecommunication providers generate a huge amount of data about people's activities from running their services.

Through cell towers, mobile phone companies know the approximate location of all their subscribers at all times, while WiFi hotspot providers record the venues that people frequent, and laws such as the [Investigatory Powers Act](http://www.legislation.gov.uk/ukpga/2016/25/contents/enacted) require internet service providers to retain &lsquo;Internet Connection Records&rsquo; for their users&rsquo; network usage.

How data like this is collected and used is often opaque - as was shown with the [use of mobile location data by the Royal Parks](https://www.theguardian.com/world/2015/dec/25/hyde-park-visitors-tracked-mobile-phone-data-ee) to understand movement of people through Hyde Park.

While there is undoubtedly public value to be derived from the data currently locked inside telecoms providers, there is also potential for misuse.

Is it possible to give people a clear understanding of what data is being collected, how it might be used and clear routes to opt-out or object, much as they can do to a controversial planning application?

To explore how this, we imagined how a local authority would go about notifying local residents of plans to use mobile phone location data to identify potential roads for pedestrianisation, as part of a plan to improve air quality.


[start_highlight]

## Prototype
### Improving air quality in Saxford City using mobile phone location data

Saxford City Council is planning to pedestrianize key streets in the city centre to tackle poor air quality.

Although we have rich, street-level data about air quality in Saxford, we lack footfall and cyclist data. Better data would help to prioritise the streets in which the highest number of people are affected by poor air quality.

The Council is confident that cellular location and WiFi hotspot data would help provide the information we need. So, we have applied to the [Data Protection Office](#) for permission to request bulk data from two telecommunications companies:

 * Morlyn Mobile
 * Cabler Telecom 


You are invited to read and comment on the full request, [which is available on saxford.gov.uk](https://gist.github.com/paulfurley/21ac195a66803588a27870f634dfef02#file-collection_request-md) and as [machine-readable data.](https://gist.githubusercontent.com/paulfurley/21ac195a66803588a27870f634dfef02/raw/75910d4dd41091f1fd7e49636169c0e09957b76c/collection_request.json)

#### Public information notices

The Council will take every practical measure to ensure citizens are informed about the purpose of the project and the measures in place to ensure individual privacy is protected.

The council will use the Local Alert Broadcasting system to issue SMS alerts to people entering the affected area during the 30 days preceding the trial.

![](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/data-for-research-campaigns-1.png)

The council will also use variable display devices at strategic locations in the city to alert pedestrians and drivers.

![](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/data-for-research-campaigns-2.png)

![](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/data-for-research-campaigns-3.png)

#### Opting out

During the trial itself, the privately operated WiFi hotspot screens will be switched from advertising mode to a notification screen. This will display the number of users and allow users to opt out.

![](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/data-for-research-campaigns-4.png)

[end_highlight]

## Summary of findings

## Potential design patterns from this prototype

* [Public space notices](/potential-design-patterns-for-open-apis-in-the-utilities-sector#publicspacenotices)
* [Human-understandable data request](/potential-design-patterns-for-open-apis-in-the-utilities-sector#humanunderstandabledatarequest)
* [Machine-readable data request](/potential-design-patterns-for-open-apis-in-the-utilities-sector#machinereadabledatarequest)
* [Data collection minimisation](/potential-design-patterns-for-open-apis-in-the-utilities-sector#datacollectionminimisation)
* [Plenty of time to opt-out](/potential-design-patterns-for-open-apis-in-the-utilities-sector#plentyoftimetooptout)
* [Opting out by text](/potential-design-patterns-for-open-apis-in-the-utilities-sector#optingoutbytext)
* [Opting out by WiFi proximity](/potential-design-patterns-for-open-apis-in-the-utilities-sector#optingoutbywifiproximity)

## Potential APIs from this prototype