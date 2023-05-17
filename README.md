#PIN
My website is all about helping people , Like people will post their campaign for fundraise ,where donaters can donate their to help them.as a crowdfunding website called PIN people in need.

Problem statement:https://docs.google.com/document/d/1ywrlTzh2-eYc2JM_-nDt5jkd44QOeoSt/edit?usp=sharing&ouid=112082199127336545142&rtpof=true&sd=true

Market Research:https://docs.google.com/document/d/1KPghyFuQHMrcD6AFGFzjYWeNGxlrN5jyzywCQjlVW6g/edit?usp=sharing

User flow: https://drive.google.com/drive/folders/11ypZUPewWczeGxdwT-OqPPCUQzaJznZL

Wire Frame: https://drive.google.com/drive/folders/1S7fsqLL22TnEX0UxDrs3clE4ZJsUPb4k

Sonar cloud:https://sonarcloud.io/project/configuration?id=fssa-batch3_gopikannan.saravanan__web_project

// My Progress Table
CRUD For User module
=> Create user account,regiterand login page [completed]
=> Read User details [completed]
=> Update user details [completed]
=> Delete user details [completed]

CRUD For User Features page
=> Create fundraise card/list [completed]
=> Read fundraise Data For card [completed]
=> Update fundraise details For card [completed]
=> Deactivate fundraise Card [completed]
=> Details page for fundraise Card [completed]

CRUD For donater comment module
=> Create comment [completed]
=> Read comment [completed]
=> Update comment [completed]
=> delete comment [completed]

My donation module
=> Create donation [completed]
=> Read donation [completed]
=> Update donation [completed]
=> delete donation [completed]

Payment module
=> Create paymnet [yet to finish]
=> Read donation [yet to finish]
=> Update donation [yet to finish]
=> delete donation [yet to finish]

# Crowd funding website

# user

-Scenario 1: Successfully create an account - Steps: 1. Navigate to the registration page. 2. Enter the required information such as name, email, and password. 3. Click the "Create Account" button. - Expected Result: - The user is redirected to the login page.

### Create an account

- Scenario 1: Successfully login in to account
  - Steps:
    1. Navigate to the login page.
    2. Enter the required information such as email, and password.
    3. Click the "login" button.
  - Expected Result:
    - The user is redirected to the user profile page.

### View Profile details

- Scenario 1: Successfully profile details shown to the user
  - Steps:
    1. After the User login.
    2. Navigate to the Home page.
    3. Click the "profile" button in the nav.
    4. Navigate to the profile page.
    5. User can view and edit their profile details here.
  - Expected Result:
    - The user's account details are shown in the profile page.

### Edit Profile details

- Scenario 1: Successfully edit account details
  - Steps:
    1.After the User login. 2. Navigate to the account page. 3. Click the "Edit Account" button. 4. Update the account details. 5. Click the "Save Changes" button to save the edited profile.
  - Expected Result:
    - The user's account details are updated.

## Delete Profile details

- Scenario 1: Successfully delete the account details
  - Steps:
    1.After the User login. 2. Navigate to the account page. 3. Click the "Delete Account" button. 4. Delete the account details. 5. Click the "delete" button to delete the profile.
  - Expected Result:
    - The user's account details are deleted.

### Create a new fundraise to raise fund

- Scenario 1: Successfully create a new fundraise card to raise fund
  - Steps:
    1. Log in as a user.
       2.click new fundraise button
    2. Navigate to the Fundraise form page.
    3. Enter the fundraise details such as name, image,description, amount they need to raise, and their story.
    4. Click the "Create" button.
  - Expected Result:
    - The new fundraise is created and added to the fundraise's list shown in the donater page where the donater donates.

### View list of fundraise cards to the donator

- Scenario 1: Successfully view list of fundraise card
  - Steps:
    1. Log in as a user role as a donator.
    2. Navigate to the donate page.
    3. View the list of fundraise .
  - Expected Result:
    - The user as a donator can view the list of fundraise card to donate.

### Edit fundraise details

- Scenario 1: Successfully edit fundraise details
  - Steps:
    1. Log in as a seller.
    2. Navigate to the my fundraise page.
    3. Select a fundraise card to edit.
    4. Edit option will be shown only for the user who created the fundraise card or the page will be empty
    5. Click the "Edit" pencil button.
    6. Update the fundraise details in the edit form page.
    7. Click the "Save Changes" button.
  - Expected Result:
    - The fundraise details are updated.

### View details page of the fundraise card

- Scenario 1: Successfully view the details of fundraise card in the details page
  - Steps:
    1. Log in as a user role as a donator.
    2. Navigate to the donate page.
    3. View the list of fundraise cards.
    4. Click the card wish to donate
    5. Redirect to the details of the fundraise card
  - Expected Result:
    - The user as a donator can view the details of fundraise card to donate.

### Donater donate the card

- Scenario 1: Successfully donated to the fundraise card
  - Steps:
    1. Log in as a user role as a donator.
    2. Navigate to the donate page.
    3. View the list of fundraise cards.
    4. Click the card wish to donate
    5. Redirect to the details of the fundraise card
    6. View the details and click donate button in the page
    7. Redirect to the payment process page and put your contribution then click how you want to donate using
       card or direct bank transfer as per the donater wish
  - Expected Result:
    - The user as a donator can view the details of fundraise card to donate and successfully donated.

### Payment using debit card

- Scenario 1: Successfully donated to the fundraise card
  - Steps:
    1. Log in as a user role as a donator.
    2. Navigate to the donate page.
    3. View the list of fundraise cards.
    4. Click the card wish to donate
    5. Redirect to the details of the fundraise card
    6. View the details and click donate button in the page
    7. Redirect to the payment process page and put your contribution and if the donater click debit card
    8. It redirects to the card payment page
    9. Fill the donater card details and donate
  - Expected Result:
    - The user as a donater successfully donated using debit card.

