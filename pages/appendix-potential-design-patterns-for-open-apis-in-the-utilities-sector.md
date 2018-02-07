The prototyping for this report uncovered several potential [design patterns](https://catalogue.projectsbyif.com) for solving different problems, from authentication to giving consent to controlling access and transparency. We believe many of these may be useful for designing services for open APIs in the wider utilities sector.

* [Select what data a service can share](#selectwhatdataaservicecanshare)
* [Authorising using a letter](#authorisingusingaletter)
* [Authorising using another factor](#authorisingusinganotherfactor)
* [Combining open, shared and closed data](#combiningopensharedandcloseddata)
* [Consent by SIM card](#consentbysimcard)
* [Automated switching](#automatedswitching)
* [Future switch notice](#futureswitchnotice)
* [Account history across providers](#accounthistoryacrossproviders)
* [Displaying multiple utilities](#displayingmultipleutilities)
* [Adding another person to an account](#addinganotherpersontoanaccount)
* [Getting group consent](#gettinggroupconsent)
* [Handing over accounts to new people](#handingoveraccountstonewpeople)
* [Public space notices](#publicspacenotices)
* [Human-readable data request](#humanreadabledatarequest)
* [Machine-readable data request](#machinereadabledatarequest)
* [Minimising data collection](#minimisingdatacollection)
* [Plenty of time to opt-out](#plentyoftimetooptout)
* [Opting out by text](#optingoutbytext)
* [Opting out by WiFi proximity](#optingoutbywifiproximity) 

## Select what data a service can share

Deciding what types of data one service is allowed request from another using an Open API. This empowers people to control what data they reveal to an organisation.

![Left screen asking for the two most important features out of blocked websites, price, privacy policy, signal strength and social responsibility. Right screen shows AutoSwap requesting to access to recent locations, data, tariff and billing](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-23_v2.jpg)

## Authorising using a letter

Letters with printed codes to access data from telecoms and other utilities. Using a letter connects the recipient to a physical address. Codes can be used in conjunction with other information, and can be limited to single-use to reduce the risk of fraudulent access.

![A mobile phone scanning a QR code on a physical utility bill](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox-scan-letter_v1.jpg)

## Authorising using another factor

Emails or text messages are used as extra authentication when data is requested from open APIs. This restricts access to whoever controls a known email address or phone number.

![An email preview saying 'Bills Box Ltd is asking to access your account information to show and pay your monthly broadband bills...'](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-8_v1.jpg)

## Combining open, shared and closed data

Making more informed decisions by combining data about networks and people.

![Left: Autoswap showing your current mobile tariff with a map of signal strength. Right: Autoswap recommending a new phone company based on signal strength, and a map illustrating the improved signal over your normal commuting route](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-67_v2.jpg)

## Consent by SIM card

Putting a virtual SIM card into a phone gives it the ability to freely switch between networks. Physically putting this small microchip into a device is a moment of consent which grants the phone permission to work on a number of networks.

There are parallels with electricity meters in the home which are considered as infrastructure rather than being tied to a particular supplier.

![A 'flexible SIM card' with lots of phone companies icons printed on it, and a phone with its SIM card drawer open](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Flexible-SIM-card_v1.jpg)

## Automated switching

Giving delegated authority to automatically find and switch service providers. The first step is setting preferences to seed recommendations and initially there is no automation.

Over time as trust increases, more automony may be acceptable to switch automatically without explicit permission each time. 

![Left: an email preview saying 'Autoswap will switch you from Fonico to Squid in 3 days because of better signal strength on your regular locations'. Right: A timeline of phone companies, showing when you switched and how long you were with each one, and how much you spent](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-89_v2.jpg)

## Future switch notice

To accompany an automated action like switching phone company, plenty of notice should be given to allow the person to review or cancel the action.

![Left: an email preview saying 'Autoswap will switch you from Fonico to Squid in 3 days because of better signal strength on your regular locations'. Right: A timeline of phone companies, showing when you switched and how long you were with each one, and how much you spent](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-89_v2.jpg)

## Account history across providers

Seeing history of data usage, access and spending for one person from a series of historical accounts.

![Left: an email preview saying 'Autoswap will switch you from Fonico to Squid in 3 days because of better signal strength on your regular locations'. Right: A timeline of phone companies, showing when you switched and how long you were with each one, and how much you spent](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-89_v2.jpg)

## Displaying multiple utilities

Multiple utilities visible and manageable from one service.  

![Two phone screens, one showing a single broadband bill and the other showing broadband, electricity, water and council tax on one screen](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-23_v1.jpg)

## Adding another person to an account

Codes generated to share the rights and responsibilities for a bill and shared data. 

![The left phone generates a QR code to add a housemate, and the right phone scans it to join the house](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-45_v1.jpg)

![The left screen shows a confirmation to join a house and the right screen shows a number of emails from different providers saying 'you've been added to this account'](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-67_v1.jpg)

## Getting group consent

Collecting consent for group decisions for actions which affect multiple account holders, for example people moving out of a shared home.

![The left screen shows three names housemates and the right screen collects information about everyone moving out on 29th January 2021, and requesting to move the bills to the new address](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-910_v1.jpg)

![The left screen shows one of three housemates having agreed to the move, with the other two 'waiting'. The right screen shows a confirmation screen each housemate would have to agree to in order to move out](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-1112_v1.jpg)

## Handing over accounts to new people

Allowing people to take over rights and responsibility for bills. 

![A letter to the new tenants in a house with costs of the bills from previous months, and offering to take over the bills using a unique code](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox-setup-bills-letter_v1.jpg)


## Public space notices

Communicating that certain data about you is collected when entering a space. Includes the reason for data collection, what data is collected and how to opt-out.

![A portable electronic sign on the pavement notifying that mobile phone locations will be collected](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/variable-message-signs_v2.gif)

## Human-readable data request

Explaining potential data collection in plain, accessible language. 

![Left: an SMS notifying that mobile phone locations will be collected. Right: a web page with subtitles about the collection, including what's being colleted, how it works, how data will be minimised, how to opt out](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Saxford-council_prototype-v1.jpg)

## Machine-readable data request

Formatting a data request in format a computer can easily access and analyse.  

Data requests could be submitted to regulators, posted to public notices, and submitted to telecoms companies in exactly the same format, giving traceability of a particular request.

[JSON data request on Github](https://gist.githubusercontent.com/paulfurley/21ac195a66803588a27870f634dfef02/raw/428a6aebd1f5879275ad4225ce09a294bc821212/collection_request.json)

## Minimising data collection

Limiting bulk data collection to certain times, location accuracy and other restrictions, to ensure data doesn't contain personally identifiable information. 

## Plenty of time to opt-out

Before data collection happens, people are given ample time to find out more and decide whether to opt-out or not. 

## Opting out by text

Text messages to inform people of data collection and replying to opt-out. Text messages can be sent to people in specific locations using a system like [Cell Broadcast.](https://en.wikipedia.org/wiki/Cell_Broadcast)


![Left: an SMS notifying that mobile phone locations will be collected. Right: a web page with subtitles about the collection, including what's being collected, how it works, how data will be minimised, how to opt out](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Saxford-council_prototype-v1.jpg)

## Opting out by WiFi proximity 

Holding a phone close to a WiFi hotspot to stop it collecting data about you. The hotspot detects the device is close by the latency and radio strength. 

![Left: a wifi hotspot with a screen announcing that locations are being tracked. It says 'hold your phone here to remove tracking' Right: The screen switched to saying 'hold 2 more seconds to remove location tracking'](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/data-for-research-campaigns-4.png)



