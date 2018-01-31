## Opt-out of bulk data collection


## Get anonymised bulk data

For example location records, call detail records, internet connection records


## Create an account

[Bills Box](#) and [AutoSwap](#) both require APIs for creating new accounts with a provider.

Before companies take on new customers they typically check their identity and credit rating.

- Would it be possible to provide a 'pre-identity-checked' customer, to simplify the onboarding for the company?
- How to include people who are hard to identify digitally?

## Close an account

To create a world where people can easily move between providers will also require API access to closing an account.

As well as being convenient, this is an opportunity to improve people's data protection. Companies are already obliged to delete data when it's no longer needed, and storing personal information is becoming increasingly risky for companies.

An API for closing an account should:

- confirm what data has been deleted
- list any data that must be retained, and the legislation requiring it
- provide dates after which any retained data will be deleted

## Create, update and delete account holders

As well as creating and closing accounts, companies should provide API access to adding and removing people to bills.

We heard from our research that adding people to bills is time consuming and awkward, but not doing so can [lead to difficulties](#).

There are some considerations for implementing this API:

- How to manage the process of companies deciding whether to accept a new account holder?
- Who gets to authorize removing an account holder? The person leaving, the group, or something else?

## Get service-specific usage data

Through using telecoms companies, we generate a lot of data which is typically locked inside the company. The company is able to mine that data for its own benefit while the user that generated the data has little access.

- **Calls, texts and data usage** are the basic data needed for users to understand their usage and compare deals across different companies.

- **Call detail records** contain more granular information about who we call, for how long, at what times of day.

- **Detailed network data** like signal strength history, download latency and data volumes can be used to find the best network for a particular individual, and hold companies to their claims about performance.

- **Location records** are recorded from phones communicating with cell towers. These can tell where we are, 24 hours of the day.

- **Social graph** information can be derived the records of who we call, text and who we're typically nearby according to our location records.

- **Internet connection records** detail every website we visit and every connection made by our apps. These are required to be held by the Investigatory Powers Act 2016, though the [public are largely unaware]. People should know what information is held about them and making this visible through APIs would be good for transparency.

## Get company policies

Company policies like terms and conditions are often locked away inside PDFs and are inpenetrable to ordinary people. This disempowers users and does nothing for trust.

Rather than pages of legalese, policies should be available as data and published through standardised APIs. This would allow more meaningful scrutiny and comparison of policies, giving users actual power to choose based on behaviour, not just price.

* Terms and conditions which are supposed to outline the agreement between the company and the user.
* Data protection and privacy policies are for users to understand how their data is treated, including whether it's sold to third parties and so on.
* Site blocking policy describes what filtering - or censorship - is carried out by the network, the default blocking policy, who provides the technology, what categories are blocked and how to dispute a blocked site.
