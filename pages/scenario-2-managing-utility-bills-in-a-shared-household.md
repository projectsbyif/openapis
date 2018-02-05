When people live together in shared houses they may take on shared responsibility for paying and managing the bills. In many households, people come and go periodically, creating a paper trail that can be awkward to decipher.

Most utility companies do not optmise for this complexity - instead defaulting to a single, individual account holder.

When things go wrong, companies will only speak to the account holder, and adding people involves jumping through hoops. When people leave a house it can put the other housemates in a tricky situation.

What if it was simple to deal with companies as a group, while also allowing individuals to retain control over the data held about them? How might decision making work? What if utilities could be &rsquo;handed over&rsquo; to the next occupier, just like keys?

To explore this, we prototyped a service called &lsquo;BillsBox&rsquo; aimed at members of a shared household to manage their utility bills.

[start_highlight]

## Prototype
### Bills Box helps you share the running of the house

Bills Box helps you split the bills with others in your house while allowing everyone to see all the accounts in one place.

![Bills box app launch screen showing &rsquo;add an account&rsquo; and &rsquo;join house&rsquo; buttons](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bills-box-v3-1.png)


## Connect your utilities in one step

To get started, just point Bills Box at the standard barcode on the bottom of your utility bill.

![A mobile phone scanning a QR code on a physical utility bill](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bills-box-v3-2.png)

<p class="narrator">This is similar to the tariff comparison barcodes present on gas and electricity bills. The barcode would contain some sort of authentication token.</p>


As soon as you&rsquo;ve connected an account, Bills Box uses the Open Utility APIs to download your billing and usage information, so you&rsquo;ll always know how much using and what you&rsquo;re paying.

You can add any utility account that adheres to the Open Utility Standards. Now you can see all your household spending in one place.


![Two phone screens, one showing a single broadband bill and the other showing broadband, electricity, water and council tax on one screen](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bills-box-v3-3.png)


## Adding a housemate is simple

Bills Box helps you put new housemates on the bills - something that used to be time consuming and difficult. That way, there&rsquo;s no awkward surprise when the person who pays the gas moves out, forgetting to tell the others.


![The left phone generates a QR code to add a housemate, and the right phone scans it to join the house](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bills-box-v3-4.png)

Before joining, the new housemate can see what they&rsquo;re signing up for. Once they go ahead, they&rsquo;re automatically added to all the accounts.

![The left screen shows a confirmation to join a house and the right screen shows a number of welcome emails](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bills-box-v3-5.png)


## Moving house together

Some decisions involve the whole house, and Bills Box makes it easy for you to make decisions as a group. Take moving out, for example.

![The left screen shows the names of the housemates and the right screen shows a confirmation of moving out](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bills-box-v3-6.png)

One housemate can start off the process, then once everyone agrees, Bills Box can tell your provider that you&rsquo;ve all agreed to move out.

If you&rsquo;re all moving together, Bills Box can even take your accounts with you to the new address.

![The left screen shows one of three housemates having agreed to the move, the right screen shows a confirmation to move out](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/bills-box-v3-7.png)

## Helping out the next tenants

As well as tying up loose ends, Bills Box makes it simple for the next tenants. That helps ensure there&rsquo;s a clean switch, and no chasing bills months after you&rsquo;ve moved out.

And perhaps Bills Box will make your life simpler, next time you move into a new home.

![A letter to the new tenants in a house offering to take over the bills](https://s3-eu-west-1.amazonaws.com/projectsbyif.com/longform/openapis.projectsbyif.com/new-tenants-letter-1.png)

[end_highlight]

## Summary of findings

We learned that although people in shared houses use digital tools to help manage their bills - for example though the use of messenger apps - the experience is sub-optimal.

## Potential design patterns from this prototype

* [Authorising using a letter](/potential-design-patterns-for-open-apis-in-the-utilities-sector#authorisingusingaletter)
* [Displaying multiple utilities](/potential-design-patterns-for-open-apis-in-the-utilities-sector#displayingmultipleutilities)
* [Share, join a bill](/potential-design-patterns-for-open-apis-in-the-utilities-sector#sharejoinabill)
* [Getting group consent](/potential-design-patterns-for-open-apis-in-the-utilities-sector#gettinggroupconsent)
* [Handing over accounts to new people](/potential-design-patterns-for-open-apis-in-the-utilities-sector#handingoveraccountstonewpeople)


## Potential APIs from this prototype