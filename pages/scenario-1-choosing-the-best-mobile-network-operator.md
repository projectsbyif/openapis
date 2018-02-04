There&rsquo;s no shortage of websites that&rsquo;ll help you find a new mobile phone contract or broadband provider.

Today&rsquo;s comparison sites are typically geared towards price, showing people find the cheapest deal. These sites usually get paid when a customer switches, so it&rsquo;s in their interest to waste no time and ask as few questions as possible. Your profile is reduced to just a few numbers:  how many minutes, texts and gigabytes.

What if a comparison service had access to richer information about you? What if it knew about the places you struggle with signal strength? Or your preference for strong ethics and privacy protections? Or your _real_ data usage, not just a single monthly number.

This type of data could enable totally new services for managing and switching between mobile network providers, for example, ones that optimise for privacy or for signal strength.

However, given the sensitivity of the data, it is also critical that services like this have clear and trusted mechanisms for people to control what data is used for what purpose.

To explore these ideas, we prototyped a service called &lsquo;AutoSwap&rsquo;.

[start_highlight]

## Prototype
### AutoSwap helps you choose the best provider for you

AutoSwap recommends the perfect phone contract by learning and understanding your behavior.

![AutoSwap blank screen with start button](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/autoswap-1.png)

With your permission, it uses the new Open Utility APIs to understand the types of calls you make, your internet usage and the areas where you really need good signal.

![AutoSwap requesting to access location, data, tariff, billing, then a confirmation SMS](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/autoswap-2.png)

By using your location data, AutoSwap can work out your commute and find the provider with the best signal strength for you and display it to you on a map.

![Fetching various data about you, then showing a map of your recent locations](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/autoswap-3.png)

For many people, it&rsquo;s not just about price. AutoSwap lets you prioritise what matters to you, and takes that into account when searching for providers.

![Prioritising most important feature of a phone company, and comparing two providers](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/autoswap-4.png)

Once you&rsquo;ve chosen a new provider, we&rsquo;ll send you a flexible SIM card which supports all UK telecoms companies. Next time you won&rsquo;t need to fiddle around swapping SIM cards, and it&rsquo;ll be even easier to switch again.

![A flexible SIM card being inserted into a phone](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/autoswap-5.png)

If your usage changes or a company launches a new deal, AutoSwap will immediately recalculate its recommendation. It can even switch provider automatically for you, handling all the paperwork and payments.

![A notification of automatic switching and a history of previous phone companies](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/autoswap-6.png)

[end_highlight]

## Summary of findings

## Potential design patterns from this prototype

* [Select what data a service can share](/potential-design-patterns-for-open-apis-in-the-utilities-sector#selectwhatdataaservicecanshare)
* [Authorising using another factor](/potential-design-patterns-for-open-apis-in-the-utilities-sector#authorisingusinganotherfactor)
* [Combining open, shared and private data](/potential-design-patterns-for-open-apis-in-the-utilities-sector#combiningopensharedandprivatedata)
* [Consent by SIM card](/potential-design-patterns-for-open-apis-in-the-utilities-sector#consentbysimcard)
* [Automated switching](/potential-design-patterns-for-open-apis-in-the-utilities-sector#automatedswitching)
* [Future switch notice](/potential-design-patterns-for-open-apis-in-the-utilities-sector#futureswitchnotice)
* [Account history across providers](/potential-design-patterns-for-open-apis-in-the-utilities-sector#accounthistoryacrossproviders)

## Potential APIs from this prototype