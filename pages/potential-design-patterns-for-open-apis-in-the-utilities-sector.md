# Potential design patterns for open APIs in the utilities sector

The prototyping for this report uncovered several potential [design patterns](https://catalogue.projectsbyif.com) for solving different problems, from authentication to giving consent to controlling access and transparency. Many of these could be useful for designing services for open APIs in the wider utilities sector.

* [Select what data a service can share](#selectwhatdataaservicecanshare)
* [Authorise using a letter](#authoriseusingaletter)
* [Authorise using another factor](#authoriseusinganotherfactor)
* [Combine open, shared and closed data](#combineopensharedandcloseddata)
* [Consent by SIM card](#consentbysimcard)
* [Automated switching](#automatedswitching)
* [Future switch notice](#futureswitchnotice)
* [Account history across providers](#accounthistoryacrossproviders)
* [Display multiple utilities](#displaymultipleutilities)
* [Add another person to an account](#addanotherpersontoanaccount)
* [Get group consent](#getgroupconsent)
* [Hand over accounts to new people](#handoveraccountstonewpeople)
* [Public space notices](#publicspacenotices)
* [Human-readable data request](#humanreadabledatarequest)
* [Machine-readable data request](#machinereadabledatarequest)
* [Minimise data collection](#minimisedatacollection)
* [Plenty of time to opt-out](#plentyoftimetooptout)
* [Opt out by text](#optoutbytext)
* [Opt out by WiFi proximity](#optoutbywifiproximity)

## Select what data a service can share

Deciding what types of data one service is allowed to request from another using an open API. This gives people control over what data they reveal to an organisation.

![Screen shows AutoSwap requesting to access recent locations, data, tariff and billing](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Pattern_select_what_data_a_service-can_share.jpg)

## Authorise using a letter

Letters with printed codes to access data from telecoms and other utilities. Using a letter connects the recipient to a physical address. Codes can be used in conjunction with other information and can be limited to single-use to reduce the risk of fraudulent access.

![A mobile phone scanning a QR code on a physical utility bill](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox-scan-letter_v1.jpg)

## Authorise using another factor

Emails or text messages are used as extra authentication when data is requested from open APIs. This restricts access to whoever controls a known email address or phone number.

![An email preview saying 'Bills Box Ltd is asking to access your account information to show and pay your monthly broadband bills...'](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-8_v1.jpg)

## Combine open, shared and closed data

Making more informed decisions by combining data about networks and people.

![Left: Autoswap showing your current mobile tariff with a map of signal strength. Right: Autoswap recommending a new phone company based on signal strength, and a map illustrating the improved signal over your normal commuting route](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-67_v2.jpg)

## Consent by SIM card

Putting a virtual SIM card into a phone gives it the ability to freely switch between networks. Physically putting this small microchip into a device creates a moment of consent, which grants the phone permission to work on a number of networks.

There are parallels with electricity meters in the home, which are considered as infrastructure rather than being tied to a particular supplier.


![A 'flexible SIM card' with lots of phone companies icons printed on it, and a phone with its SIM card drawer open](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Flexible-SIM-card_v1.jpg)

## Automated switching

Delegated authority allows a service to automatically find and switch service providers. The first step is setting preferences to seed recommendations &mdash; initially there is no automation.

Over time, as trust increases, more autonomy might be acceptable, leading to automatic switches without explicit permission each time.

![Left: an email preview saying 'Autoswap will switch you from Fonico to Squid in 3 days because of better signal strength on your regular locations'. Right: A timeline of phone companies, showing when you switched and how long you were with each one, and how much you spent](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-89_v2.jpg)

## Future switch notice

An automated action, like switching phone company, includes plenty of notice to allow the person to review or cancel the action.

![An email preview saying 'Autoswap will switch you from Fonico to Squid in 3 days because of better signal strength on your regular locations'.](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Pattern_future_switch_notice.jpg)

## Account history across providers

A visible history of data usage, access and spending for one person from a series of historical accounts.

![A timeline of phone companies, showing when you switched and how long you were with each one, and how much you spent](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Pattern_account_history_across_providers.jpg)

## Display multiple utilities

Multiple utilities can be made visible and manageable from one service.

![Two phone screens, one showing a single broadband bill and the other showing broadband, electricity, water and council tax on one screen](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-23_v1.jpg)

## Add another person to an account

Codes generated allow people to share the rights and responsibilities for a bill and shared data.

![The left phone generates a QR code to add a housemate, and the right phone scans it to join the house](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-45_v1.jpg)

![The left screen shows a confirmation to join a house and the right screen shows a number of emails from different providers saying 'you've been added to this account'](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-67_v1.jpg)

## Get group consent

Collect consent for group decisions for actions which affect multiple account holders, for example people moving out of a shared home.

![The left screen shows three names housemates and the right screen collects information about everyone moving out on 29th January 2021, and requesting to move the bills to the new address](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-910_v1.jpg)

![The left screen shows one of three housemates having agreed to the move, with the other two 'waiting'. The right screen shows a confirmation screen each housemate would have to agree to in order to move out](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-1112_v1.jpg)

## Hand over accounts to new people

Allow people to take over rights and responsibility for bills.

![A letter to the new tenants in a house with costs of the bills from previous months, and offering to take over the bills using a unique code](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox-setup-bills-letter_v1.jpg)


## Public space notices

Communicate when certain data about a person is collected as  they enter a space. This includes the reason for data collection, what data is collected and how to opt out.

![A portable electronic sign on the pavement notifying that mobile phone locations will be collected](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/variable-message-signs_v2.gif)

## Human-readable data request

Explain potential data collection in plain, accessible language.

![A web page with subtitles about the collection, including what's being colleted, how it works, how data will be minimised, how to opt out](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Pattern_human-readable_data_request.jpg)

## Machine-readable data request

Place  a data request in a format a computer can easily access and analyse.

Data requests could be submitted to regulators, posted to public notices and submitted to telecoms companies in exactly the same format, ensuring traceability of a particular request.


[JSON data request on Github](https://gist.githubusercontent.com/paulfurley/21ac195a66803588a27870f634dfef02/raw/428a6aebd1f5879275ad4225ce09a294bc821212/collection_request.json)

## Minimise data collection

Limit bulk data collection to certain times, location accuracy and other restrictions, to ensure data doesn't contain personally identifiable information.

## Plenty of time to opt-out

Before data collection happens, people are given ample time to find out more and decide whether to opt out or not.

## Opt out by text

Text messages inform people of data collection and let them reply to opt out. Text messages can be sent to people in specific locations using a system such as [Cell Broadcast.](https://en.wikipedia.org/wiki/Cell_Broadcast)

![A notification on a mobile phone to inform people of data collection and let them reply to the text so to opt out](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Pattern_opting_out_by_text.jpg)

## Opt out by WiFi proximity

Hold a phone close to a WiFi hotspot to stop it collecting data about you. The hotspot detects the device is close by the latency and radio strength.

![A wifi hotspot with a screen announcing that locations are being tracked. It says 'hold your phone here to remove tracking'. The screen switched to saying 'hold 2 more seconds to remove location tracking'](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bus-stop-ad_v1.gif)
