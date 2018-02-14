There&rsquo;s no shortage of websites that&rsquo;ll help find a new mobile phone contract or broadband provider. However, today&rsquo;s comparison sites are typically geared towards price, helping people find the _cheapest_ deal.

What if a comparison service had access to richer information about its users? What if it knew about the places people struggle with signal strength? Or their preference for strong ethics? Or their _real_ data usage, not just a single monthly number. This type of data could enable new services for managing and switching between mobile network providers, for example, services that optimise for privacy or for signal strength.

However, given the sensitivity of the data, it is also critical that services like this have clear and trusted mechanisms for people to control what data is used for what purpose. To explore these ideas, we prototyped a service called &lsquo;AutoSwap&rsquo;.

[start_highlight]

## Prototype
### AutoSwap helps you choose the best provider for you

AutoSwap recommends the perfect phone contract by learning and understanding your behavior.

![AutoSwap start screen saying 'we help you find the perfect provider for your needs'](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-1_v2.jpg)

For many people, it&rsquo;s not just about price. AutoSwap lets you prioritise what matters to you, and takes that into account when searching for providers.

![Left screen asking for the two most important features out of blocked websites, price, privacy policy, signal strength and social responsibility. Right screen shows AutoSwap requesting to access to recent locations, data, tariff and billing](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-23_v2.jpg)

With your permission, it uses the new Open Utility APIs to understand the types of calls you make, your internet usage and the areas where you really need good signal.

![Left: A text message asking permission to share data with AutoSwap and a reply saying ALLOW. Right: AutoSwap fetching frequent locations, data usage, tariff, nearby cell towers and more](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-45_v2.jpg)

By using your location data, AutoSwap can work out your commute and find the provider with the best signal strength for you and display it to you on a map.

![Left: Autoswap showing your current mobile tariff with a map of signal strength. Right: Autoswap recommending a new phone company based on signal strength, and a map illustrating the improved signal over your normal commuting route](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-67_v2.jpg)

Once you&rsquo;ve chosen a new provider, we&rsquo;ll send you a flexible SIM card which supports all UK telecoms companies. Next time you won&rsquo;t need to fiddle around swapping SIM cards, and it&rsquo;ll be even easier to switch again.

![A 'flexible SIM card' with lots of phone companies icons printed on it, and a phone with its SIM card drawer open](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/Flexible-SIM-card_v1.jpg)

If your usage changes or a company launches a new deal, AutoSwap will immediately recalculate its recommendation. It can even switch provider automatically for you, handling all the paperwork and payments.

![Left: an email preview saying 'Autoswap will switch you from Fonico to Squid in 3 days because of better signal strength on your regular locations'. Right: A timeline of phone companies, showing when you switched and how long you were with each one, and how much you spent](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/AutoSwap_screen-89_v2.jpg)

[end_highlight]

## Summary of findings

### Location history signal strength

Some of the people we tested with welcomed the idea of using their location history to choose a phone company with better signal strength for them. The idea was more popular with people who commute and travel a lot. Others, who travel less often, found using location history for better signal strength less useful and had concerns what this meant for their privacy.

### Automatic swapping

Automatically swapping phone company is something that people could struggle to trust without good control over the decision to actually swap a contract.

People wanted more information about the reason a swap happened and what benefits came from it, like savings or better signal strength. Many people we spoke with used the language like &lsquo;contracts&rsquo; and &lsquo;signing&rsquo; when talking about moving networks. This suggests a current mental model that you stay with one phone company for months and years, not weeks and days like hinted at in the prototype we showed.

## Potential design patterns from this prototype

* [Select what data a service can share](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#selectwhatdataaservicecanshare)
* [Authorising using another factor](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#authorisingusinganotherfactor)
* [Combining open, shared and closed data](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#combiningopensharedandcloseddata)
* [Consent by SIM card](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#consentbysimcard)
* [Automated switching](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#automatedswitching)
* [Future switch notice](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#futureswitchnotice)
* [Account history across providers](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#accounthistoryacrossproviders)

## Potential APIs from this prototype

* [Access to service-specific usage data](/appendix-potential-open-apis-for-the-telecoms-sector#accesstoservicespecificusagedata)
* [Machine readable policies](/appendix-potential-open-apis-for-the-telecoms-sector#machinereadablepolicies)
* [Account creation](/appendix-potential-open-apis-for-the-telecoms-sector#accountcreation)
* [Account closure](/appendix-potential-open-apis-for-the-telecoms-sector#accountclosure)
* [Deletion of usage data](/appendix-potential-open-apis-for-the-telecoms-sector#deletionofusagedata)
