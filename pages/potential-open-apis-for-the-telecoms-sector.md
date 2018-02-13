# Potential open APIs for the telecoms sector

Prototyping for the 3 scenarios shown in this report allowed us to understand the APIs that would need to exist to build them for real.

##Potential APIs

### Account creation

[AutoSwap](/scenario-1-choosing-the-best-mobile-network-operator) and [Bills Box](/scenario-2-managing-utility-bills-in-a-shared-household) both require APIs for creating new accounts with a provider.

Before companies take on new customers they typically check their identity and credit rating.

- Would it be possible to transfer the identity checking from one company to another, rather than every company doing it separately?
- How can accounts be &lsquo;handed over&rsquo; to the next tenants, making it simpler for them when they move into a new house?
- How to include people who are hard to identify digitally?

### Account closure

To create a world where people can easily move between providers will also require API access to closing an account.

As well as being convenient, this is an opportunity to improve people&rsquo;s data protection. Companies are already obliged to delete data when it&rsquo;s no longer needed, and storing personal information is becoming increasingly risky for companies.

An API for closing an account should:

- confirm what data has been deleted
- list any data that must be retained, and the legislation requiring it
- provide dates after which any retained data will be deleted

### Creation, updating and deletion of account holders

We heard from our research that adding people to bills is time consuming and awkward, but not doing so can lead to difficulties.

[Bills Box](/scenario-2-managing-utility-bills-in-a-shared-household) allowed people easily add new account holders to their household bills, which would require new APIs to implement.

There are some considerations for implementing this API:

- How to manage the process of companies deciding whether to accept a new account holder?
- Who gets to authorize removing an account holder? The person leaving, the group, or something else?

### Access to service-specific usage data

Through using telecoms companies, we generate a lot of data which is typically locked inside the company. The company is able to mine that data for its own benefit while the person that generated the data has little access.


- **Calls, texts and data usage** are the basic data needed for people to understand their usage and compare deals across different companies.

- **Call detail records** contain more granular information about who we call, for how long, at what times of day.

- **Detailed network data** like signal strength history, download latency and data volumes can be used to find the best network for a particular individual, and hold companies to their claims about performance.

- **Location records** are recorded from phones communicating with cell towers. These can tell where we are, 24 hours of the day.

- **Social graph** information can be derived the records of who we call, text and who we&rsquo;re typically nearby according to our location records.

- **Internet connection records** detail every website we visit and every connection made by our apps. These are required to be held by the Investigatory Powers Act 2016, though the [public are largely unaware](https://www.independent.co.uk/life-style/gadgets-and-tech/news/snoopers-charter-investigatory-powers-bill-government-online-surveillance-majority-uk-unaware-a7749851.html).

[AutoSwap](/scenario-1-choosing-the-best-mobile-network-operator) demonstrated the power of combining a person&rsquo;s location history with signal data.

- Should people be able to access insights learned about them by the company from the data they provided?
- Is there a risk that showing people what&rsquo;s held about them might legitimise excessive collection of data?
- People should know what information is held about them and making this visible through APIs would be good for transparency.

### Deletion of usage data

People have the right to delete data held about them (except where it&rsquo;s legally required to be retained), but the process for exercising this right can be cumbersome.

[Bills Box](/scenario-2-managing-utility-bills-in-a-shared-household) hinted at how API access could make it easier for people to delete information they don&rsquo;t want to be stored about them.

- Instead of deleting data, why can&rsquo;t people ask for it not to be stored in the first place?
- For data which must be retained legally, can it be modified so it&rsquo;s not personally identifiable?

### Machine readable policies

Company policies like terms and conditions are often locked away inside PDFs and are inpenetrable to ordinary people. This disempowers people and does nothing for trust.

[AutoSwap](/scenario-1-choosing-the-best-mobile-network-operator) demonstrated giving people choice about a company based on their privacy policy and social responsibility. This allowed more meaningful scrutiny and comparison, empowering people to choose a company based on their behaviour and not just price.
To enable this, policies should be available as data and published through standardised APIs.

Many types of policy could be available through APIs:

* **Terms and conditions** outline the agreement - or the terms of the contract - between the company and the user.
* **Social responsiblity** policies outline what the companies values are and how it improves the world it operates in.
* **Data protection and privacy policies** help people to understand how data is treated, including whether it&rsquo;s sold to third parties.
* **Site blocking policies** describe what filtering - or censorship - is carried out by the network, the default blocking policy, who provides the technology, what categories are blocked and how to dispute a blocked site.

When policies are updated they should be version controlled and each version should be available indefinitely.

Enabling people to subscribe to updates to policies through an API could give a better user experience than the familiar "our terms and conditions have been updated" letters in use today.

* How do we begin encoding policies as data?

### Access to anonymised bulk data

The [air quality prototype](/scenario-3-improving-a-citys-air-quality-using-bulk-location-data-from-mobile-phones) demonstrated that bulk data held by companies can provide public benefit, if used carefully.

This data could be made available through APIs with a built-in capability for minimising and anonymising data before handing it over.

By removing personally identifiable information before the data is handed over, risk-averse public bodies would be in a better position to use it without fear of invading peoples&rsquo; privacy.

We imagined bulk data APIs would have similarities to planning applications, with public notices, public scrutiny and the power for citizens the object.

* How do we ensure data applications are simple enough that anyone can understand and scrutinise them?

### Opt-out for bulk data collection

Bulk data collection should be private by design, but should also allow people a convenient method to opt out. In the prototypes we imagined building on existing infrastructure like the [SMS Cell Broadcast](https://en.wikipedia.org/wiki/Cell_Broadcast) and shortcode opt-out mechanism.

## Further considerations

Making these APIs available will not be enough on its own. Real consideration also needs to be given to designing access control and permissions systems that are both secure and legible to the people using them.

This will require investment in further research to understand what works, especially in areas where the are limited examples of what good design patterns look like - for example for multiple account holders and shared access to data.
