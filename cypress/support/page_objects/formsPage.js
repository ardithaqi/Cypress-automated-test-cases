export class FormsPage{

    formsSection(){
        //Inline form
        cy.contains('nb-card', 'Inline form').find('form').then(inlineMenu=>{
            cy.wrap(inlineMenu).find('[placeholder="Jane Doe"]').type('Ardi Thaci');
            cy.wrap(inlineMenu).find('[placeholder="Email"]').type('ardithaci@test.com');
            cy.wrap(inlineMenu).find('[type="checkbox"]').check({force:true})
            cy.wrap(inlineMenu).submit();
        })


        //Using the Grid
        cy.contains('nb-card', 'Using the Grid').find('form').then(gridMenu=>{
            cy.wrap(gridMenu).find('[placeholder="Email"]').type('ardithaci@test.com')
            cy.wrap(gridMenu).find('[placeholder="Password"]').type('arditest');
            cy.wrap(gridMenu).find('[type="radio"]').each(radioCheck=>{
                cy.wrap(radioCheck).check({force:true})
            })
            // cy.wrap(gridMenu).submit();

        //assertion for this section
            cy.wrap(gridMenu).find('#inputEmail1').invoke('prop', 'value').should('contain', 'ardithaci@test.com')
            cy.wrap(gridMenu).find('#inputPassword2').invoke('prop', 'value').should('contain', 'arditest')
            cy.wrap(gridMenu).find('[type="radio"]').eq(2).should('be.disabled')
            cy.wrap(gridMenu).submit();
        })


        //Basic form
        cy.contains('nb-card', 'Basic form').find('form').then(basicMenu=>{
            cy.wrap(basicMenu).find('#exampleInputEmail1').type('ardithaci@test.com')
            cy.wrap(basicMenu).find('#exampleInputPassword1').type('arditest')
            cy.wrap(basicMenu).find('[type="checkbox"]').click({force:true});
            // cy.wrap(basicMenu).submit();

            //assertion for this section
            cy.wrap(basicMenu).find('[for="exampleInputEmail1"]').invoke('text').then(emailValidation=>{
                expect(emailValidation).to.equal('Email address')
            })
            cy.wrap(basicMenu).find('[for="exampleInputPassword1"]').then(passwordValidation=>{
                const passwordText = passwordValidation.text().trim();
                expect(passwordText).to.equal('Password')

                //one last assertion with the second section
                cy.contains('nb-card', 'Using the Grid').find('form').then(gridSection=>{
                    cy.wrap(gridSection).find('[for="inputPassword2"]').invoke('text').then(gridLabelPassword=>{
                        expect(gridLabelPassword).to.equal(passwordText)
                    })
                })
            })
            cy.wrap(basicMenu).submit();


        })

         //Form without labels
            cy.contains('nb-card', 'Form without label').find('form').then(labelMenu=>{
                cy.wrap(labelMenu).find('[placeholder="Recipients"]').type('Shoqnia')
                cy.wrap(labelMenu).find('[placeholder="Subject"]').type('Viti i ri')
                cy.wrap(labelMenu).find('[placeholder="Message"]').type('Hajde mer perhajr')
                cy.wrap(labelMenu).submit();
            })


        
         //Block form
            cy.contains('nb-card', 'Block form').find('nb-card-body').then(blockMenu=>{
                cy.wrap(blockMenu).find('.row').eq(0).then(firstRow=>{
                    cy.wrap(firstRow).find('#inputFirstName').type('First Name')
                    cy.wrap(firstRow).find('#inputLastName').type('Last Name')

                    //assertion
                    cy.wrap(firstRow).find('[for="inputFirstName"]').invoke('text').then(firstNameLabel=>{
                        cy.wrap(firstRow).find('#inputFirstName').invoke('prop', 'value').then(firstName=>{
                            expect(firstName).to.equal(firstNameLabel)
                        })
                    })
                    cy.wrap(firstRow).find('[for="inputLastName"]').invoke('text').then(lastNameLabel=>{
                        cy.wrap(firstRow).find('#inputLastName').invoke('prop', 'value').then(lastName=>{
                            expect(lastName).to.equal(lastNameLabel)
                        })
                    })
                })
                cy.wrap(blockMenu).find('.row').eq(1).then(secondRow=>{
                    cy.wrap(secondRow).find('#inputEmail').type('ardithaci@test.com')
                    cy.wrap(secondRow).find('#inputWebsite').type('linkedin.com/ardithaqi')
                })
                cy.wrap(blockMenu).find('button').click();
            })
            

            //Horizontal form
            cy.contains('nb-card', 'Horizontal form').find('form').then(horizontalMenu=>{
                cy.wrap(horizontalMenu).find('#inputEmail3').type('ardithaci@test.com')
                cy.wrap(horizontalMenu).find('#inputPassword3').type('arditest')
                cy.wrap(horizontalMenu).find('[type="checkbox"]').check({force:true})
                cy.wrap(horizontalMenu).submit();
            })

    }

    datepickerSection(){
        cy.contains('nb-card', 'Common Datepicker').find('input').click();
    }
}

export const onFormsPage = new FormsPage();