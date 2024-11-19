describe('Enviar mensaje',{testIsolation:false},() =>{


    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')

        cy.get('p').contains('El Nombre no debe estar vacio')
        cy.get('p').contains('Email no debe estar vacio')
        cy.get('p').contains('Phone no debe estar vacio')
        cy.get('p').contains('Phone debe contener entre 11 y 21 caracteres.')
        cy.get('p').contains('El asunto debe contener entre 5 y 100 caracteres.')
        cy.get('p').contains('El asunto no debe estar en blanco')
        cy.get('p').contains('El mensaje debe contener entre 20 y 2000 caracteres.')
        cy.get('p').contains('El mensaje no debe estar en blanco')

    })

    it('Validar envío de form con data incorrecta',()=>{
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('asd')
        cy.get('input[placeholder="Email"]').type('asdasd')
        cy.get('input[placeholder="Phone"]').type('asdasd')
        cy.get('input[placeholder="Subject"]').type('asdasd')
        cy.get('[data-testid="ContactDescription"]').type('asdasd')
        cy.get('#submitContact').click()

        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Phone debe contener entre 11 y 21 caracteres')
        cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
        cy.get('p').contains('El mensaje debe contener entre 20 y 2000 caracteres.')
    })


    it('Validar envío de form con data correcta',()=>{
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('Viviana G')
        cy.get('input[placeholder="Email"]').type('viviana@gmail.com')
        cy.get('input[placeholder="Phone"]').type('3519876543')
        cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha 12/12/2025')
        cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo') 
        cy.get('#submitContact').click()
    })


})