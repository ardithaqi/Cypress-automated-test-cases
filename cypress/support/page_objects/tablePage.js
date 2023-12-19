export class TablePage{
    smartTableSection(){
        cy.contains('nb-card', 'Smart Table')
    }

    treeGridSection(){

    }

}

export const onTablePage = new TablePage();