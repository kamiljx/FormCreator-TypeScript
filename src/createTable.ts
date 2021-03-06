import { Field } from './field';
import '../src/client'
import { Socket } from 'dgram';
import { username } from './username';
import { EmailField } from './email';

export class createTable {
    fields: Field[];
    tableID: number;
    table: HTMLElement
    deleteCell : HTMLElement
    editButton: HTMLElement
    // saveMeBtn: HTMLElement


    
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
        
        const editAsnwerButton = document.createElement('button') as HTMLButtonElement
        editAsnwerButton.innerText = "Edit answer"
        editAsnwerButton.className = "editAnswer"
        this.editButton = editAsnwerButton;
        
        // const saveMeButton = document.createElement('button') as HTMLButtonElement
        // saveMeButton.innerText = "Save to local storage"
        // saveMeButton.className = "saveLocalStorage"
        // this.saveMeBtn = editAsnwerButton;
        
        this.table = tableElement
        this.getTableContent()
        this.sendAnswerToServer()
        tableElement.appendChild(editAsnwerButton)
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
    
    sendAnswerToServer() : void {
        let socket = new WebSocket("ws://localhost:8080");
        this.fields.forEach(e => {
            socket.onmessage = function() {
                console.log(e.getValue())

       
            };
        })
    }

}
// export default {createTable}