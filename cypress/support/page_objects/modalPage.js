export class ModalPage{
    dialogSection(){
        //Open Dialog
        cy.contains('nb-card', 'Open Dialog').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.contains('nb-card', 'This is a title passed to the dialog component').find('button', 'Dismiss Dialog').click();
            cy.wrap(button).eq(1).click();
            cy.contains('nb-card', 'Template Dialog').find('button', 'Close Dialog').click();
        })

        //Open Without Backdrop
        cy.contains('nb-card','Open Without Backdrop').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('body').type(' ');
            cy.wrap(button).eq(1).click();
            cy.get('body').type(' ');
        })

        //Open Without Esc Close
        cy.contains('nb-card', 'Open Without Esc Close').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('body').type('{esc}')
            cy.wrap(button).eq(1).click();
            cy.contains('nb-card','Template Dialog').find('button').click();
        })

        //Open Without Backdrop Click
        cy.contains('nb-card', 'Open Without Backdrop Click').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('body').type('{enter}')
            cy.wrap(button).eq(1).click();
            cy.get('body').type('{enter}')
        })

        //Return Result From Dialog
        cy.contains('nb-card', 'Return Result From Dialog').find('button').click();
        cy.contains('nb-card','Enter your name').then(menu=>{
            cy.wrap(menu).get('[placeholder="Name"]').type('Ardi Thaci')
            cy.wrap(menu).find('button').contains('Submit').click();
        })
        cy.get('ul li').should('contain','Ardi Thaci')
    }

    windowSection(){

        //Window Form
        cy.contains('nb-card', 'Window Form').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('nb-window').then(menu=>{
                cy.wrap(menu).find('.buttons').then(buttons=>{
                    cy.wrap(buttons).find('button').eq(0).click().wait(200)
                    cy.wrap(buttons).find('button').eq(1).click()
                        cy.wrap(menu).find('#subject').type('New years eve')
                        cy.wrap(menu).find('#text').type('We celebrating new years baby')
                        cy.wrap(buttons).find('button').eq(1).click()
                        cy.wrap(buttons).find('button').eq(2).click()
                })
            })
            cy.wrap(button).eq(1).click();
            cy.get('nb-window').then(menu=>{
                cy.wrap(menu).find('button').eq(0).click().wait(200)
                cy.wrap(menu).find('button').eq(1).click().wait(200)
                cy.wrap(menu).find('button').eq(2).click();
            })
        })

        //Window Without Backdrop
        cy.contains('nb-card','Window Without Backdrop').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('body').type('{esc}')
            cy.wrap(button).eq(1).click();
            cy.get('nb-window').then(menu=>{
                cy.wrap(menu).find('button').eq(0).click().wait(200)
                cy.wrap(menu).find('button').eq(2).click();
            })
        })
    }
    popoverSection(){

        // //Popover Position
        // cy.contains('nb-card', 'Popover Position').find('button').each(button=>{
        //     cy.wrap(button).trigger('mouseenter').wait(1000).trigger('mouseleave')
        //     // cy.wrap(button).realHover('mouse').wait(1000)

        //     //theres another way how to do the hover and that is by installing a plugin 'npm i cypress-real-events'
        //     // then add import "cypress-real-events/support"; at e2e.js in the support folder
        //     // and write this  cy.wrap(button).realHover('mouse').wait(1000)
        // })
        
        // //Simple Popovers
        // cy.contains('nb-card', 'Simple Popovers').find('button').each(button=>{
        //     cy.wrap(button).realHover('mouse').wait(1000)
        // })
        // cy.contains('nb-card', 'Simple Popovers').find('button').eq(0).click();

        //Template Popovers
        cy.contains('nb-card', 'Template Popovers').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('nb-popover').eq(0).then(popoverMenu=>{
                cy.wrap(popoverMenu).find('.content-active').invoke('text').should('contain', 'Such a wonderful day!')
                cy.wrap(popoverMenu).find('li').eq(1).click()
                cy.wrap(popoverMenu).find('[tabtitle="Second Tab"]').invoke('text').should('contain', 'Indeed!')
    
            })
        })
    }

}

export const onModalPage = new ModalPage();