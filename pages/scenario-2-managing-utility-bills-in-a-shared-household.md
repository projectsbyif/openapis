When people live together in shared houses they may take on shared responsibility for paying and managing the bills. In many households, people come and go periodically.

Most utility companies do not optmise for this complexity - instead defaulting to a single, individual account holder and shifting the administrative burden on to them.

When things go wrong, companies will only speak to the account holder. People joining or leaving a household also involves additional overhead.

What if it was simple to deal with companies as a group, while also allowing individuals to retain control over the data held about them? How might decision making work? What if utilities could be &rsquo;handed over&rsquo; to the next occupier, just like keys?

To explore this, we prototyped a service called &lsquo;Bills Box&rsquo; aimed at members of a shared household to manage their utility bills.

[start_highlight]

## Prototype
### Bills Box helps you share the running of the house

Bills Box helps you split the bills with others in your house while allowing everyone to see all the accounts in one place.

![Bills box app launch screen showing &rsquo;add an account&rsquo; and &rsquo;join house&rsquo; buttons](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-1_v1.jpg)


#### Connect your utilities in one step

To get started, just point Bills Box at the standard barcode on the bottom of your utility bill.

![A mobile phone scanning a QR code on a physical utility bill](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox-scan-letter_v1.jpg)

You give permission to your utility company to share information will Bills Box.

![An email preview saying 'Bills Box Ltd is asking to access your account information to show and pay your monthly broadband bills...](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-8_v1.jpg)

As soon as you&rsquo;ve connected an account, Bills Box uses the Open Utility APIs to download your billing and usage information, so you&rsquo;ll always know how much you're using and what you're paying.

You can add any utility account that adheres to the Open Utility Standards. Now you can see all your household spending in one place.


![Two phone screens, one showing a single broadband bill and the other showing broadband, electricity, water and council tax on one screen](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-23_v1.jpg)


#### Adding a housemate is simple

Bills Box helps you put new housemates on the bills - something that used to be time consuming and difficult. That way, there&rsquo;s no awkward surprise when the person who pays the gas moves out, forgetting to tell the others.


![The left phone generates a QR code to add a housemate, and the right phone scans it to join the house](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-45_v1.jpg)

Before joining, the new housemate can see what they&rsquo;re signing up for. Once they go ahead, they&rsquo;re automatically added to all the accounts.

![The left screen shows a confirmation to join a house and the right screen shows a number of emails from different providers saying 'you've been added to this account'](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-67_v1.jpg)


#### Moving house together

Some decisions involve the whole house, and Bills Box makes it easy for you to make decisions as a group. Take moving out, for example.

![The left screen shows three names housemates and the right screen collects information about everyone moving out on 29th January 2021, and requesting to move the bills to the new address](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-910_v1.jpg)

One housemate can start off the process, then once everyone agrees, Bills Box can tell your provider that you&rsquo;ve all agreed to move out.

If you&rsquo;re all moving together, Bills Box can even take your accounts with you to the new address.

![The left screen shows one of three housemates having agreed to the move, with the other two 'waiting'. The right screen shows a confirmation screen each housemate would have to agree to in order to move out](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox_screen-1112_v1.jpg)

#### Helping out the next tenants

As well as tying up loose ends, Bills Box makes it simple for the next tenants. That helps ensure there&rsquo;s a clean switch, and no chasing bills months after you&rsquo;ve moved out.

And perhaps Bills Box will make your life simpler, next time you move into a new home.

![A letter to the new tenants in a house with costs of the bills from previous months, and offering to take over the bills using a unique code](http://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/BillsBox-setup-bills-letter_v1.jpg)

[end_highlight]

## Summary of findings

We learned that although people in shared houses use digital tools to help manage their bills - for example though the use of messenger apps - the experience is sub-optimal.

There was a lot of enthusiasm for group consent for joint decisions and shared data, like those in shared households.

### All the bills in one place

The prospect of being able to see and manage all your bills in one place was well received by nearly everyone we spoke to. Some people said they would feel more in control by seeing how much they need to pay and how much they were using.

A couple of participants said they would be nervous about so much utilities data about them being available from their phone or single service like Bills Box.

### Shared billing

There is a clear burden of managing shared bills in a shared household. People struggle to know who&rsquo;s paid what or to fix anything, unless they&rsquo;re the &lsquo;named&rsquo; person with the utility company.

The potential to share rights and responsibilities for bills and data was something nearly all participants found to be a empowering prospect. There was even excitement about it being easy to be recognised as a group by utility companies, acknowledging different living situations many people have.

### Moving house

Nearly each person we spoke was very positive about the idea they could move and transfer bills when moving house. They spoke about saving all the time involved when cancelling and setting up billing from one property to the next.

The concept was especially promising to those we spoke to who rent, moving house more often with a regular churn of people moving in and out.

## Potential design patterns from this prototype

* [Authorising using a letter](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#authorisingusingaletter)
* [Displaying multiple utilities](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#displayingmultipleutilities)
* [Adding another person to an account](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#addinganotherpersontoanaccount)
* [Getting group consent](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#gettinggroupconsent)
* [Handing over accounts to new people](/appendix-potential-design-patterns-for-open-apis-in-the-utilities-sector#handingoveraccountstonewpeople)


## Potential APIs from this prototype

* [Creation, updating and deletion of account holders](/appendix-potential-open-apis-for-the-telecoms-sector#creationupdatinganddeletionofaccountholders)
* [Account creation](/appendix-potential-open-apis-for-the-telecoms-sector#accountcreation)
* [Account closure](/appendix-potential-open-apis-for-the-telecoms-sector#accountclosure)
* [Access to service-specific usage data](/appendix-potential-open-apis-for-the-telecoms-sector#accesstoservicespecificusagedata)
* [Deletion of usage data](/appendix-potential-open-apis-for-the-telecoms-sector#deletionofusagedata)
