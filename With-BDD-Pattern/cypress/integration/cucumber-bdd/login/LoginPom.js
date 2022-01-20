class LoginPom {

    static loadHomePage() {
        cy.visit('http://automationpractice.com/index.php')
    }

    static loadSignInPage() {
        cy.get('.login').click()
    }

    static getPageText(PageText) {
        cy.get('.page-heading').invoke('text').then((text1) => {
            expect(text1.trim()).to.equal(PageText)
        })
    }

    static typeRegisterEmail() {
        cy.get('#email_create').type('ststest0.@fyaaz.com')
    }

    static selectSubmit() {
        cy.get('#SubmitCreate > span').click()
        cy.wait(4000)
    }

    static chkPageHeading() {
        cy.get(':nth-child(1) > .page-subheading').should('be.visible')
        cy.wait(2000)
    }

    static fillRegisterationForm() {
        //https://stackoverflow.com/questions/63150659/how-to-run-a-test-multiple-times-with-different-sets-of-data-in-cypress
       const testData = [
            {
                //email: 'testfyaaz.@text.com',
                fname: 'testf',
                lname: 'testf',
                //password: 'password',
                addressfname: 'testf',
                addresslname: 'testf',
                address: '1 maple leafs road',
                city: 'Toronto',
                postalcose: '00000',
                mphone: '416-000-0000',
                state: 'Alabama',
                dobDay: 9,
                dobMonth: 'September',
                dobYear: '1999',
                
            },
            
        ]
        testData.forEach((credentials) => {
            cy.get('#customer_firstname').type(credentials.fname)
            cy.get('#customer_lastname').type(credentials.lname)
            cy.get('#passwd').type('password')
            cy.get('#firstname').type(credentials.addressfname)
            cy.get('#lastname').type(credentials.addresslname)
            cy.get('#address1').type(credentials.address)
            cy.get('#city').type(credentials.city)
            cy.get('#postcode').type(credentials.postalcose)
            cy.get('#phone_mobile').type(credentials.mphone)
            cy.get('#id_state').select(credentials.state)
            cy.get('#days').select(credentials.dobDay)
            cy.get('#months').select(credentials.dobMonth)
            cy.get('#years').select(credentials.dobYear)
            cy.get('#submitAccount > span').click()
            cy.wait(4000)   
        })
    }

    static getAccountLogText() {
        cy.contains('your account').should('be.visible')
    }

    static logoutButton() {
        cy.get('.logout').click()
    }

    static formForSecondAccount() {
        cy.get('#email_create').type('ststest1.@fyaaz.com')
        cy.get('#SubmitCreate > span').click()
        this.fillRegisterationForm()
    }
    
    static formForThirdAccount() {
        cy.get('#email_create').type('ststest3.@fyaaz.com')
        cy.get('#SubmitCreate > span').click()
        this.fillRegisterationForm()
    }

    static logIntoThirdAccount() {
        this.loadSignInPage()
        cy.contains('Authentication').should('be.visible')
        cy.get('#email').type('ststest3.@fyaaz.com')
        cy.get('#passwd').type('password')
        cy.get('#SubmitLogin > span').click()
    }

    static searchProduct() {
        cy.get('#search_query_top').type('Faded Short Sleeve T-shirts')
        cy.get('#searchbox > .btn').click()
    }

    static getAvailableText() {
        cy.get('.available-now').should('be.visible')
    }

    static addToCartCheckout() {
        cy.get('.ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span').click()
        cy.get('#columns > :nth-child(3)').should('be.visible')
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('#cgv').should('be.checked')
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('.cart_navigation > .button > span').click()
    }

    static loginAndGoSettingPage() {
        cy.get('.account').click()
        this.logIntoThirdAccount()
        cy.get('.myaccount-link-list > :nth-child(4)').click()
    }

    static validateInfo() {
        cy.get('#firstname').should('have.value', 'testf')
        cy.get('#lastname').should('have.value', 'testf')
        cy.get('#email').should('have.value', 'ststest3.@fyaaz.com')
    }
}

export default LoginPom;