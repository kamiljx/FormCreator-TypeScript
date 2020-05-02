import { Field } from './field';

export default class createTable {
    fields: Field[];
    tableID: number;
    table: HTMLElement
    deleteCell : HTMLElement

    
    constructor(tableID: number, fields: Field[]){
        this.fields = fields;
        this.tableID = tableID;


        const tableElement = document.createElement('table') as HTMLElement
        tableElement.className = 'answerTable'
        tableElement.id = tableID as unknown as string

        const deleteCellButton = document.createElement('button') as HTMLButtonElement
        deleteCellButton.innerHTML = "Remove this answer"
        deleteCellButton.className = "delete"
        this.deleteCell = deleteCellButton;
        
        
        this.table = tableElement
        this.getTableContent()
        tableElement.appendChild(deleteCellButton)
    }
    getTableContent() : void{
        this.fields.forEach(e =>{
            const row = document.createElement('tr');
            const boldCell = document.createElement('th');
            const cell = document.createElement('td');
            boldCell.innerHTML = e.label
            cell.innerHTML = e.getValue();
            row.appendChild(boldCell)
            row.appendChild(cell)
            this.table.appendChild(row)
            
        })
    }
}
// export default {createTable}