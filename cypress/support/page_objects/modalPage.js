export class ModalPage{
    dialogSection(){
        cy.contains('nb-card', 'Open Dialog').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.contains('nb-card', 'This is a title passed to the dialog component').find('button', 'Dismiss Dialog').click();
            cy.wrap(button).eq(1).click();
            cy.contains('nb-card', 'Template Dialog').find('button', 'Close Dialog').click();
        })

        cy.contains('nb-card','Open Without Backdrop').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('body').type(' ');
            cy.wrap(button).eq(1).click();
            cy.get('body').type(' ');
        })

        cy.contains('nb-card', 'Open Without Esc Close').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('body').type('{esc}')
            cy.wrap(button).eq(1).click();
            cy.contains('nb-card','Template Dialog').find('button').click();
        })

        cy.contains('nb-card', 'Open Without Backdrop Click').find('button').then(button=>{
            cy.wrap(button).eq(0).click();
            cy.get('body').type('{enter}')
            cy.wrap(button).eq(1).click();
            cy.get('body').type('{enter}')
        })

        cy.contains('nb-card', 'Return Result From Dialog').find('button').click();
        cy.contains('nb-card','Enter your name').then(menu=>{
            cy.wrap(menu).get('[placeholder="Name"]').type('Ardi Thaci')
            cy.wrap(menu).find('button').contains('Submit').click();
        })
        cy.get('ul li').should('contain','Ardi Thaci')
    }

    windowSection(){
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


}

export const onModalPage = new ModalPage();