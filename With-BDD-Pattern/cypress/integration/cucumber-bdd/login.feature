Feature: Testing automation practice site

    Performing automation task on practice site

    Scenario: Visit Test Site & go to Register Page
        Given I land on the test website
        When I click on the Login button
        Then I should see the text on login page is 'Authentication'

    Scenario: Enter registration page
        When I type a email in the email field
        When I click on Submit button
        Then I can see the page sub heading
    
    Scenario: Fill registration form for 1st accounts using a loop
        When I fill in the fields for registration and press submit button for 1st account
        Then I should see text indicating account login for 1st account
        And I should click on the logout button for 1st account

    Scenario: Fill registration form for 2nd accounts using a loop
        When I fill in the fields for registration and press submit button for 2nd account
        Then I should see text indicating account login for 2nd account
        And I should click on the logout button for 2nd account

    Scenario: Fill registration form for 3rd accounts using a loop
        When I fill in the fields for registration and press submit button for 3rd account
        Then I should see text indicating account login for 3rd account
        And I should click on the logout button for 3rd account

    Scenario: With a user created, add a product and checkout
        When I login to my 3rd account
        Then I search a product in the search box
        And I can see the available now title visible
        And I should be able to add to cart and checkout

    
    Scenario: Validate user information from setting to code
        When I Login and go to settings page
        Then I should validate first, last name and email


    



