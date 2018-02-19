###### Scenario 1
# Choosing a new mobile network

There&rsquo;s no shortage of comparison websites: finding a new mobile phone contract or broadband provider is easier than ever. But today&rsquo;s comparison sites are typically geared towards price, helping people find the _cheapest_ deal.

What if a comparison service had access to richer information about its users instead? What if it knew about the places where people struggle with signal strength, their preference for strong ethics, or their _real_ data usage rather than a single monthly number?

Data like this could enable the creation of services for managing and switching between mobile network providers: ones that optimise based on privacy or signal strength.

Of course, given the sensitivity of this type of data, it&rsquo;s also critical that services like this have clear and trusted mechanisms for people to control what data is used for what purpose.

To explore these ideas, we prototyped a service called AutoSwap.


[start_highlight]

## Prototype
### AutoSwap helps you choose the best provider for you

It&rsquo;s not just about price. AutoSwap lets you prioritise what matters to you, taking that into account when searching for the provider that fits the way you use your phone.

![AutoSwap start screen saying 'we help you find the perfect provider for your needs'](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-1_v2.jpg)

AutoSwap recommends the perfect phone contract by learning and understanding your behaviour.

![Left screen asking for the two most important features out of blocked websites, price, privacy policy, signal strength and social responsibility. Right screen shows AutoSwap requesting to access to recent locations, data, tariff and billing](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-23_v2.jpg)

With your permission, it uses the new Open Utility APIs to understand the types of calls you make, your internet usage and the areas where you really need good signal.

![Left: A text message asking permission to share data with AutoSwap and a reply saying ALLOW. Right: AutoSwap fetching frequent locations, data usage, tariff, nearby cell towers and more](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-45_v2.jpg)

By using your location data, AutoSwap can even work out your commute and find the provider with the best signal strength for you.

![Left: Autoswap showing your current mobile tariff with a map of signal strength. Right: Autoswap recommending a new phone company based on signal strength, and a map illustrating the improved signal over your normal commuting route](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-67_v2.jpg)

Once you&rsquo;ve chosen a new provider, we&rsquo;ll send you a flexible SIM card which supports all UK telecoms companies. So next time you want to switch, it&rsquo;ll be even easier.

![A 'flexible SIM card' with lots of phone companies icons printed on it, and a phone with its SIM card drawer open](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Flexible-SIM-card_v1.jpg)

Plus, if your usage changes or a company launches a new deal, AutoSwap immediately recalculates its recommendation. It can even switch provider automatically for you, handling all the paperwork and payments.

![Left: an email preview saying 'Autoswap will switch you from Fonico to Squid in 3 days because of better signal strength on your regular locations'. Right: A timeline of phone companies, showing when you switched and how long you were with each one, and how much you spent](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-89_v2.jpg)

[end_highlight]

## Summary of findings

### Location history and signal strength

Some of the people we tested with welcomed the idea of using their location history to choose a phone company with better signal strength for them. The idea was more popular with people who commute and travel a lot.

Others, who travel less often, didn&rsquo;t find this feature as useful and even had concerns regarding what it might mean for their privacy.

### Automatic swapping

Automatically switching to a new phone company with a better deal is something that people could struggle to trust without good control over the decision to swap a contract.

People wanted more information about the reason a swap happened and what benefits came from it, for example savings they would make, or whether they would get better signal strength.

Many people we spoke with used words like &lsquo;contracts&rsquo; and &lsquo;signing&rsquo; when talking about moving networks. This suggests a current mental model that you stay with one phone company for months and years, rather than the weeks and days we hinted at in our prototype.


## Potential design patterns from this prototype

* [Select what data a service can share](/potential-design-patterns-for-open-apis-in-the-utilities-sector#selectwhatdataaservicecanshare)
* [Authorise using another factor](/potential-design-patterns-for-open-apis-in-the-utilities-sector#authoriseusinganotherfactor)
* [Combine open, shared and closed data](/potential-design-patterns-for-open-apis-in-the-utilities-sector#combineopensharedandcloseddata)
* [Consent by SIM card](/potential-design-patterns-for-open-apis-in-the-utilities-sector#consentbysimcard)
* [Automated switching](/potential-design-patterns-for-open-apis-in-the-utilities-sector#automatedswitching)
* [Future switch notice](/potential-design-patterns-for-open-apis-in-the-utilities-sector#futureswitchnotice)
* [Account history across providers](/potential-design-patterns-for-open-apis-in-the-utilities-sector#accounthistoryacrossproviders)

## Potential APIs from this prototype

* [Access to service-specific usage data](/potential-open-apis-for-the-telecoms-sector#accesstoservicespecificusagedata)
* [Machine-readable policies](/potential-open-apis-for-the-telecoms-sector#machinereadablepolicies)
* [Account creation](/potential-open-apis-for-the-telecoms-sector#accountcreation)
* [Account closure](/potential-open-apis-for-the-telecoms-sector#accountclosure)
* [Deletion of usage data](/potential-open-apis-for-the-telecoms-sector#deletionofusagedata)
