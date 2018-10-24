# DML Frontend

```shell
yarn start

yarn run cypress:open # to open Cypress
```

## User Stories

User Types:
  Business User

  Developer (if they have Github connected)

  BOTH user types require wallet address

===============================================

Login

  EDGE CASE: If an existing user does not have MetaMask installed, a notice should be shown. - user had metamask when they signed up, but uninstalled it

  A new user should be able to attempt to create a new account with an email and a password.

  If a new user enters an email and address, but does not accept Terms of Service, they should not be able to create an account.

  If a new user enters an email and address and does accept Terms of Service, their account should be created, they should be logged in, and then taken to Onboarding.

  A user should be able to log in with an existing account using email and password.

  If an existing user does not have first name and last name stored, they should be taken to Onboarding Step 1 (Account Details).

  If an existing user has a first and last name stored without having their wallet address stored, they should be taken to Onboarding Step 2 (Metamask).

  If an existing user does not have a first name named, last name, or wallet address stored, they should be taken to Onboarding Step 1 (Account Details). [guard]

  If an existing user has first name, last name, and wallet address stored, they should be taken to the Marketplace.

  A user should be able to connect their Github account.

  - Step 1 (Account Details) - https://projects.invisionapp.com/share/DYKZFWJGX73#/screens/301000500, https://projects.invisionapp.com/share/DYKZFWJGX73#/screens/301000501
    - Step 2 (MetaMask)
        if MetaMask is not installed: https://projects.invisionapp.com/share/DYKZFWJGX73#/screens/301000502
          if "Install MetaMask" is clicked: https://projects.invisionapp.com/share/DYKZFWJGX73#/screens/300703355
            when you hit proceed, refresh page
        once MetaMask is installed
          if your MetaMask is locked,
            unlock: https://projects.invisionapp.com/share/DYKZFWJGX73#/screens/300703354
          once MetaMask is unlocked,
            ask user to confirm address [NO DESIGN]

Account Profile

  A user should be able to change their profile information.

    First Name
    Last Name
    Email Address
    Bio

  If a user enters an invalid email address, they should see a message.

  A user should be able to connect their Github account.

  A user should be able to upload a profile photo.

  If a user tries to save their changes, they should see a status of the result of those changes.

  If a user is currently saving changes, they should not be able to submit another request.
    Disabled button

  A user should be able to see how many DML tokens they have in their wallet.

  A user should be able to see their address.

  If a user clicks on their address, they should be taken to another page.

  Users should be able to change debit limit on their DML balances.

  A user should not be able to update their debit limit to a negative number.

Marketplace

  A user should see all available algorithms.

  A user should be able to sort algorithms by Price.
  A user should be able to sort algorithms by Downloads.
  A user should be able to sort algorithms by Rating.

  A user should be able to filter algorithms by Image.
  A user should be able to filter algorithms by Text.

  A user should be able to filter algorithms by tags.

  A user should be able to search for an algorithm based off of name.
    If the search box is empty, all results should be shown.

  Results should compose filters (multiple conditions).

  A user should be able to see Algorithm details when clicking an Algorithm.

    Name
    Description
    Downloads
    Rating
    Tags
      Three or more tags should be collapsed
        A user should be able to click on the collapsed tags to see all tags.

    Fee

  A user should be able to see an info tooltip describing the per-device fee on hover.

  A user should be able to purchase a specific algorithm from its detail view.

  A user should be able to demo an algorith.

  A user should be able to see Job History for a given algo.

  A user should be able to see a Reviews for a given algo.

Algorithms
    A non-developer (has not connected GitHub) should not be able to submit an algo.

    A developer should be fill out information about their algo.

    A developer should not be able to enter a negative per device fee.

    A user should be able to save their progress.

    A user should be able to delete an algorithm.

    Developers should be able to upload an algo and try it out in browser.

    Developers should be able to submit an algo upload for review.

    Developers should be able to see a list of all uploaded algo, as well as relative stats (e.g. # of downloads, total earnings, stars, review status, etc).

    Developers should be able to manage their algos (e.g. remove from marketplace, change price, change title, change descriptions, upload new algo, etc).

    Developers must agree to some kind of Agreement before uploading an algo.

Bounties

  A user should see all available bounties.

  A user should be able to sort bounties by Deadline.
  A user should be able to sort bounties by Prize Pool.

  A user should be able to filter bounties by Status.

    Open for Enrollment
    Open for Submissions
    Under Evaluation
    Finished

  A user should be able to search for an bounty based off of name.
    If the search box is empty, all results should be shown.

  Results should compose filters (multiple conditions).

  A user should be able to see Bounty details when clicking an Bounty.

    Name
    Description
    Users Enrolled
    Enrollment Closes Date
    Submissions Date
    Enrollment Fee

  A developer should be able to enroll in a bounty.

  A bounty creator should be able to create a new bounty.

  Bounty Creator should be able to update bounty details with descriptions, data source/links, evaluations guidelines, rules.

  Bounty Creator should be able to fund the bounty.

  Bounty Creator should be able to begin enrollment of the bounty.

  Bounty Creator should be able to end enrollment of the bounty.

  Bounty Creator should be able to begin accepting submissions.

  Bounty Creator should be able to stop accepting submissions.

  Bounty Creator should be able to pick winners.

  Bounty Creator should be able to pay out all winners.

  Bounty Creator should be able to view all submissions.

  A bounty creator should not be able to put a negative prize amount.

  Developers should be able to enroll in a bounty.

  Developers should be able to view bounty details.

  Developer should be able to submit results.

  Developer should be able to view their own submissions.

  Developer should be able to see how many people have submitted.
