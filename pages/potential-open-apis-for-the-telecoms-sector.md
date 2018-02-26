# Potential open APIs for the telecoms sector

Prototyping for the 3 scenarios shown in this report allowed us to understand the APIs that would need to exist if they were to be built.

##Potential APIs

### Account creation

[AutoSwap](/scenario-1-choosing-the-best-mobile-network-operator) and [Bills Box](/scenario-2-managing-utility-bills-in-a-shared-household) both require APIs for creating new accounts with a provider.

Before companies take on new customers they typically check their identity and credit rating.

* Would it be possible to transfer the identity checking from one company to another, rather than every company making separate checks?
* How can accounts be handed over to the next tenants, making it simpler for them when they move into a new house?
* How would people who are hard to identify digitally be included?


### Account closure

Creating a world in which people can easily move between providers also requires API access to close an account.

As well as being convenient, this is an opportunity to improve people&rsquo;s data protection. Companies are already obliged to delete data when it&rsquo;s no longer needed, and storing personal information is becoming increasingly risky for companies.

An API for closing an account should:

* Confirm what data has been deleted
* List any data that must be retained and the legislation requiring it
* Provide dates after which any retained data will be deleted


### Creation, updates and deletion of account holders

We found in our research that adding people to bills is time-consuming and awkward, but that not doing so can lead to difficulties.

[Bills Box](/scenario-2-managing-utility-bills-in-a-shared-household)  allowed people to easily add new account holders to their household bills: this would require new APIs to implement.

There are some considerations for implementing this API:

* How would companies deciding whether to accept a new account holder?
* Who gets to authorise removing an account holder – the person leaving, the group or someone else?

### Access to service-specific usage data

As people use telecoms companies, they generate a lot of data that&rsquo;s typically locked inside the company. The company is able to mine that data for its own benefit while the person that generated the data has little access.

* **Calls, texts and data usage** are the basic data needed for people to understand their usage and compare deals across different companies.
* **Call detail records** contain more granular information about who people call, for how long and at what times of day.
* **Detailed network data** like signal strength history, download latency and data volumes can be used to find the best network for a particular individual, while holding companies to their claims about performance.
* **Location records** are recorded from phones communicating with cell towers: these can tell where people are, 24 hours of the day.
* **Social graph** information can be derived from the records of who people call, text and are typically nearby according to their location records.
* **Internet connection records** detail every website people visit and every connection made by their apps. These are required to be held by the Investigatory Powers Act 2016, though the [public are largely unaware](https://www.independent.co.uk/life-style/gadgets-and-tech/news/snoopers-charter-investigatory-powers-bill-government-online-surveillance-majority-uk-unaware-a7749851.html) of this.

[AutoSwap](/scenario-1-choosing-the-best-mobile-network-operator) demonstrated the power of combining a person&rsquo;s location history with signal data. However, people should know what information is held about them and this should be made visible through APIs for transparency. For example:

- Should people be able to access insights learned about them from the data they provided?
- Is there a risk that showing people what&rsquo;s held about them might legitimise excessive collection of data?

### Deletion of usage data

People have the right to delete data held about them (except where it&rsquo;s legally required to be retained), but the process for exercising this right can be cumbersome.

[Bills Box](/scenario-2-managing-utility-bills-in-a-shared-household) hinted at how API access could make it easier for people to delete information they don&rsquo;t want to be stored about them.

- Instead of deleting data, can people ask for it not to be stored in the first place?
- For data which must be retained legally, can it be modified so it&rsquo;s not personally identifiable?

### Machine-readable policies

Company policies like &lsquo;terms and conditions&rsquo; are often locked away inside PDFs and are impenetrable to ordinary people.

[AutoSwap](/scenario-1-choosing-the-best-mobile-network-operator) demonstrated giving people choice about a company based on their privacy policy and social responsibility. This allowed more meaningful scrutiny and comparison, allowing people to choose a company based on their behaviour and not just price.
To enable this, policies should be available as data and published through standardised APIs.

Many types of policy could be available through APIs:

* **Terms and conditions** outline the agreement – or the terms of the contract – between the company and the user.
* **Social responsibility policies** outline what the company&rsquo;s values are and how it improves the world it operates in.
* **Data protection and privacy policies** help people to understand how data is treated, including whether it&rsquo;s sold to third parties.
* **Site-blocking policies** describe what filtering - or censorship - is carried out by the network, the default blocking policy, who provides the technology, what categories are blocked and how to dispute a blocked site.

When policies are updated they should be version-controlled, with each version being available indefinitely.

Enabling people to subscribe to policy updates through an API could give a better user experience than the familiar "our terms and conditions have been updated" letters in use today.

* How do we begin encoding policies as data?

### Access to anonymised bulk data

The [air quality prototype](/scenario-3-improving-a-citys-air-quality-using-bulk-location-data-from-mobile-phones) demonstrated that bulk data held by companies can provide public benefit, if used carefully.

This data could be made available through APIs with a built-in capability for minimising and anonymising data before handing it over.

By removing personally identifiable information before the data is handed over, risk-averse public bodies would be in a better position to use it without fear of invading people&rsquo;s privacy.

We imagine bulk data APIs would have similarities to planning applications, with public notices, public scrutiny and the power for citizens being the object.

* How do we ensure data applications are simple enough that anyone can understand and scrutinise them?

### Opt out of bulk data collection

Bulk data collection should be private by design, but should also allow people a convenient method to opt out. In the prototypes, we imagined building on existing infrastructure like the [SMS Cell Broadcast](https://en.wikipedia.org/wiki/Cell_Broadcast) and a shortcode opt-out mechanism.

## Further considerations

Making these APIs available isn&rsquo;t enough on its own. Real consideration needs to be given to designing access control and permissions systems that are both secure and legible to the people using them.

This requires investment in further research to understand what works, especially in areas where there are limited examples of what good design patterns look like, for example for multiple account holders and when there&rsquo;s shared access to data.
