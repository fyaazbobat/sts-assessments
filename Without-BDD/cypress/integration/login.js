/// <reference types="cypress"/>

const testData = [
    {
        //email: 'testfyaaz00.5@text.com',
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
        dobYear: '1999'
        
    },
    
]

it("Visit Test Site & go to Register PAge", () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.contains('Authentication').should('be.visible')
})


testData.forEach((credentials) => {
    it('Create First User', () => {
        cy.get('#email_create').type('test.0000.00@test.com')
        cy.get('#SubmitCreate > span').click()
        cy.get('.page-heading').should(
            "have.text", "Create an account"
        )
        cy.get(':nth-child(4) > .top').click()
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
        cy.contains('your account').should('be.visible')
        cy.get('.logout').click()
    })

    it('Create Second User', () => {
        cy.get('#email_create').type('test.000010@test.com')
        cy.get('#SubmitCreate > span').click()
        cy.get('.page-heading').should(
            "have.text", "Create an account"
        )
        cy.get(':nth-child(4) > .top').click()
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
        cy.contains('your account').should('be.visible')
        cy.get('.logout').click()
    })
    
    it('Create Second User', () => {
        cy.get('#email_create').type('test.000050@test.com')
        cy.get('#SubmitCreate > span').click()
        cy.get('.page-heading').should(
            "have.text", "Create an account"
        )
        cy.get(':nth-child(4) > .top').click()
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
        cy.contains('your account').should('be.visible')
        cy.get('.logout').click()
    })
});


it("Use the first created user to add a product and checkout", () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.contains('Authentication').should('be.visible')
    cy.get('#email').type('test.0000.00@test.com')
    cy.get('#passwd').type('password')
    cy.get('#SubmitLogin > span').click()
    cy.get('li > .btn > span').click()
    cy.get('#search_query_top').type('Faded Short Sleeve T-shirts')
    cy.get('#searchbox > .btn').click()
    cy.get('.available-now').should('be.visible')
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
    cy.get('.page-heading').should('be.visible')
})


it("Validate user information from setting to code", () =>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.contains('Authentication').should('be.visible')
    cy.get('#email').type('test.0000.0@test.com')
    cy.get('#passwd').type('password')
    cy.get('#SubmitLogin > span').click()
    cy.get('.account > span').click().should('be.visible')
    cy.get('.myaccount-link-list > :nth-child(4)').click()
    cy.get('#firstname').should('have.value', 'Testf')
    cy.get('#lastname').should('have.value', 'testf')
    cy.get('#email').should('have.value', 'test.0000.0@test.com')
})
