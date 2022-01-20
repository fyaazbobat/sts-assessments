/// <reference types="cypress"/>
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPom from './LoginPom'
import login from './LoginPom'

Given('I land on the test website', () => {
   LoginPom.loadHomePage()
})

When('I click on the Login button', () => {
    LoginPom.loadSignInPage()
})

Then('I should see the text on login page is {string}', PageText=> {
    LoginPom.getPageText(PageText)      
}) 

When('I type a email in the email field', () => {
    LoginPom.typeRegisterEmail()
})

When('I click on Submit button', () => {
    LoginPom.selectSubmit()
})

Then('I can see the page sub heading', ( )=> {
    LoginPom.chkPageHeading()
})

When('I fill in the fields for registration and press submit button for 1st account', () => {
    LoginPom.fillRegisterationForm()        
})
Then('I should see text indicating account login for 1st account', () => {
    LoginPom.getAccountLogText()
})

And('I should click on the logout button for 1st account', () => {
    LoginPom.logoutButton()
})  
        
When('I fill in the fields for registration and press submit button for 2nd account', () => {
    LoginPom.formForSecondAccount()
})
Then('I should see text indicating account login for 2nd account', () => {
    LoginPom.getAccountLogText()
})

And('I should click on the logout button for 2nd account', () => {
    LoginPom.logoutButton()
}) 

When('I fill in the fields for registration and press submit button for 3rd account', () => {
    LoginPom.formForThirdAccount()   
})
Then('I should see text indicating account login for 3rd account', () => {
    LoginPom.getAccountLogText()
})
And('I should click on the logout button for 3rd account', () => {
    LoginPom.logoutButton()
}) 

When('I login to my 3rd account', () => {
    LoginPom.logIntoThirdAccount() 
})
Then('I search a product in the search box', () => {
    LoginPom.searchProduct()
})

And('I can see the available now title visible', () => {
    LoginPom.getAvailableText()
})

And('I should be able to add to cart and checkout', () => {
    LoginPom.addToCartCheckout()
})

When('I Login and go to settings page', () => {
    LoginPom.loginAndGoSettingPage()
})

Then('I should validate first, last name and email', () => {
    LoginPom.validateInfo()
})
