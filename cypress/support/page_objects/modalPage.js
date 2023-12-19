export class ModalPage{
    // dialogSection(){
    //     //Open Dialog
    //     cy.contains('nb-card', 'Open Dialog').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.contains('nb-card', 'This is a title passed to the dialog component').find('button', 'Dismiss Dialog').click();
    //         cy.wrap(button).eq(1).click();
    //         cy.contains('nb-card', 'Template Dialog').find('button', 'Close Dialog').click();
    //     })

    //     //Open Without Backdrop
    //     cy.contains('nb-card','Open Without Backdrop').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.get('body').type(' ');
    //         cy.wrap(button).eq(1).click();
    //         cy.get('body').type(' ');
    //     })

    //     //Open Without Esc Close
    //     cy.contains('nb-card', 'Open Without Esc Close').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.get('body').type('{esc}')
    //         cy.wrap(button).eq(1).click();
    //         cy.contains('nb-card','Template Dialog').find('button').click();
    //     })

    //     //Open Without Backdrop Click
    //     cy.contains('nb-card', 'Open Without Backdrop Click').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.get('body').type('{enter}')
    //         cy.wrap(button).eq(1).click();
    //         cy.get('body').type('{enter}')
    //     })

    //     //Return Result From Dialog
    //     cy.contains('nb-card', 'Return Result From Dialog').find('button').click();
    //     cy.contains('nb-card','Enter your name').then(menu=>{
    //         cy.wrap(menu).get('[placeholder="Name"]').type('Ardi Thaci')
    //         cy.wrap(menu).find('button').contains('Submit').click();
    //     })
    //     cy.get('ul li').should('contain','Ardi Thaci')
    // }

    // windowSection(){

    //     //Window Form
    //     cy.contains('nb-card', 'Window Form').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.get('nb-window').then(menu=>{
    //             cy.wrap(menu).find('.buttons').then(buttons=>{
    //                 cy.wrap(buttons).find('button').eq(0).click().wait(200)
    //                 cy.wrap(buttons).find('button').eq(1).click()
    //                     cy.wrap(menu).find('#subject').type('New years eve')
    //                     cy.wrap(menu).find('#text').type('We celebrating new years baby')
    //                     cy.wrap(buttons).find('button').eq(1).click()
    //                     cy.wrap(buttons).find('button').eq(2).click()
    //             })
    //         })
    //         cy.wrap(button).eq(1).click();
    //         cy.get('nb-window').then(menu=>{
    //             cy.wrap(menu).find('button').eq(0).click().wait(200)
    //             cy.wrap(menu).find('button').eq(1).click().wait(200)
    //             cy.wrap(menu).find('button').eq(2).click();
    //         })
    //     })

    //     //Window Without Backdrop
    //     cy.contains('nb-card','Window Without Backdrop').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.get('body').type('{esc}')
    //         cy.wrap(button).eq(1).click();
    //         cy.get('nb-window').then(menu=>{
    //             cy.wrap(menu).find('button').eq(0).click().wait(200)
    //             cy.wrap(menu).find('button').eq(2).click();
    //         })
    //     })
    // }

    // popoverSection(){

    //     //Popover Position
    //     cy.contains('nb-card', 'Popover Position').find('button').each(button=>{
    //         cy.wrap(button).trigger('mouseenter').wait(1000).trigger('mouseleave')
    //         // cy.wrap(button).realHover('mouse').wait(1000)

    //         //theres another way how to do the hover and that is by installing a plugin 'npm i cypress-real-events'
    //         // then add import "cypress-real-events/support"; at e2e.js in the support folder
    //         // and write this  cy.wrap(button).realHover('mouse').wait(1000)
    //     })
        
    //     //Simple Popovers
    //     cy.contains('nb-card', 'Simple Popovers').find('button').each(button=>{
    //         cy.wrap(button).realHover('mouse').wait(1000)
    //     })
    //     cy.contains('nb-card', 'Simple Popovers').find('button').eq(0).click();

    //     //Template Popovers
    //     cy.contains('nb-card', 'Template Popovers').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.get('nb-popover').then(tabsMenu=>{
    //             cy.wrap(tabsMenu).find('.content-active').invoke('text').should('contain', 'Such a wonderful day!')
    //             cy.wrap(tabsMenu).find('li').eq(1).click()
    //             cy.wrap(tabsMenu).find('[tabtitle="Second Tab"]').invoke('text').should('contain', 'Indeed!')
    //         })
    //         cy.wrap(button).eq(1).click();
    //         cy.get('nb-popover').then(formsMenu=>{
    //             cy.wrap(formsMenu).find('form').then(overlay=>{
    //                 cy.wrap(overlay).find('[placeholder="Recipients"]').type('Shoqnia e ardit')
    //                 cy.wrap(overlay).find('[placeholder="Subject"]').type('New years eve')
    //                 cy.wrap(overlay).find('[placeholder="Message"]').type('Congratulaions on the new years eve and shit brrap papapa')
    //                 cy.wrap(overlay).find('button').click()
    //             })
    //         })
    //         cy.wrap(button).eq(2).click();
    //         cy.get('nb-popover').then(cardsMenu=>{
    //             cy.wrap(cardsMenu).find('[status="warning"]').should('contain','Hello')
    //         })
    //     })

    //     //Component Popovers
    //     cy.contains('nb-card', 'Component Popovers').find('button').then(button=>{
    //         cy.wrap(button).eq(0).click();
    //         cy.get('nb-popover').then(tabsMenu=>{
    //             cy.wrap(tabsMenu).find('ul li').then(list=>{
    //                 cy.wrap(list).eq(0).find('a').click().should('contain', "What's up?")
    //                 cy.get('[ng-reflect-tab-title="What\'s up?"]').invoke('text').should('contain', 'Such a wonderful day!')
    //                 cy.wrap(list).eq(1).find('a').click().should('contain', 'Second Tab')
    //                 cy.get('[tabtitle="Second Tab"]').invoke('text').should('contain', 'Indeed!')
    //             })
    //         })

    //         cy.wrap(button).eq(1).click();
    //         cy.get('nb-popover').find('form').then(overlay=>{
    //             cy.wrap(overlay).find('[placeholder="Recipients"]').type('Random peole')
    //             cy.wrap(overlay).find('[placeholder="Subject"]').type('Happy eid')
    //             cy.wrap(overlay).find('[placeholder="Message"]').type('Eid mubarak')
    //             cy.wrap(overlay).find('button').click()
    //         })

    //         cy.wrap(button).eq(2).click();
    //         cy.get('nb-popover').find('nb-card-body').invoke('text').should('contain', 'Far far away, behind the word mountains')
    //         })
        
    //     //Event Debouncing 
    //     cy.contains('nb-card', 'Event Debouncing').find('button').each(button=>{
    //         // cy.wrap(button).trigger('mouseenter').wait(200).trigger('mouseleave')
    //         // or
    //         cy.wrap(button).realHover('mouse').wait(200)
    //     })

        
    // }

    toastrSection(){
        cy.contains('nb-card', 'Toaster configuration').find('.row').then(toastrMenu=>{
            cy.wrap(toastrMenu).find('.select-button').then(dropdownList=>{
            cy.wrap(dropdownList).eq(0).click()
            cy.get('.options-list').find('nb-option').each((positionList, index)=>{
                cy.wrap(positionList).click();
                cy.wrap(toastrMenu).find('[name="title"]').clear().type('Look here!!!!!!!')
                cy.wrap(toastrMenu).find('[name="content"]').clear().type('Random toastrrrrr')
                cy.wrap(toastrMenu).find('[name="timeout"]').clear().type('1500')
                cy.wrap(toastrMenu).find('.select-button').eq(1).click();

                cy.get('.options-list').find('nb-option').each((toastType, index)=>{
                    cy.wrap(toastType).click();
                    cy.get('button').contains('Show toast').click();
                    if(index<4){
                        cy.wrap(dropdownList).eq(1).click()
                    }
                })
                if(index < 7){
                    cy.wrap(dropdownList).eq(0).click()
                }
            })
        })


            //random toast button
            const numberOfClicks = 30;
            for (let i=0; i<numberOfClicks; i++){
                cy.get('button').contains('Random toast').click()
            }
        })
    }
}

export const onModalPage = new ModalPage();