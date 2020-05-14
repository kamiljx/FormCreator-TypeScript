import { Field } from "./field";
import {createTable} from "./createTable";

export class Form {
    fields: Field[];
    formElement: HTMLElement;
    elementContent: HTMLElement;
    cell: HTMLElement
    tableID: number =0;
    createTable: createTable[]

    constructor(id: string, idValue: string) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
        this.elementContent = document.getElementById(idValue)
        this.createTable = new Array();

    }
    render(): void {    
        this.fields.forEach(e => {
            this.formElement.appendChild(e.labelHTML);
            this.formElement.appendChild(e.render())
            
        });
    }
    
    
    getValue(): void {

        const answer = new createTable(this.tableID, this.fields);
        this.tableID++;
        this.elementContent.appendChild(answer.table)
        this.createTable.push(answer)
    } }
