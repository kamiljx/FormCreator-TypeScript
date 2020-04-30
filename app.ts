enum fieldType {
    textBox = 1,
    textArea = 2,
    data = 3,
    email = 4,
    checkBox = 5, 
    select = 6
}

interface Field {
    name: string;
    label: string;
    type: fieldType;
    labelHTML: HTMLLabelElement;
    render(): HTMLElement;
    getValue(): any;
}

//NAME
class username implements Field {
    name: string;
    label: string;
    type: fieldType;
    e: HTMLInputElement;
    labelHTML: HTMLLabelElement;

    constructor(name: string, label: string){
        this.name = name;
        this.type = fieldType.textBox;
        this.e = <HTMLInputElement>document.createElement('input');
        this.e.name = this.name;
        this.labelHTML = <HTMLLabelElement>document.createElement('label');
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;
    }

    render(): HTMLElement{
        return this.e
    }    
    getValue(): any {
        return this.e.value
    }
}

//DO YOU PREFER E-LEARNING
// class elearning implements Field {
//     name: string;
//     label: string;
//     type: fieldType;
//     e: HTMLInputElement;
//     labelHTML: HTMLLabelElement;


//     constructor(name:string, label:string, ...YoN : string[] ) {
//         this.name = name;
//         this.type = fieldType.checkBox;
//         this.e = document.createElement('input') as HTMLInputElement;
//         this.e.name = this.name;
//         this.e.type = 'checkbox'
//         // YoN.forEach(e => {
//         //     const check = document.createElement('option');
//         //     check.value = e;
//         //     check.text = e;
//         //     this.e.add(check)
//         // })

//         this.labelHTML = document.createElement('label') as HTMLLabelElement;
//         this.labelHTML.innerHTML = label;
//         this.labelHTML.htmlFor = name;
//         this.label = label;

//     }

//     render(): HTMLElement {
//         return this.e;
//     }
//     getValue(): any {
//         return this.e.value
//     }

// }

//Field of study 
class studyField implements Field {
    name: string;
    label: string;
    type: fieldType;
    e: HTMLSelectElement;
    labelHTML: HTMLLabelElement;


    constructor(name:string, label:string, ...studyFields: string []) {
        this.name = name;
        this.type = fieldType.select;
        this.e = document.createElement('select') as HTMLSelectElement;
        studyFields.forEach(e =>{
           const field = document.createElement('option')
           field.value = e;
           field.text = e;
           this.e.add(field);
        })
        this.e.name = this.name;
        this.labelHTML = <HTMLLabelElement>document.createElement('label');
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;

    }

    render(): HTMLElement {
        return this.e;
    }
    getValue(): any {
        return this.e.value
    }

}

//COMMENTS
class comments implements Field {
    name: string;
    label: string;
    type: fieldType;
    e: HTMLTextAreaElement;
    labelHTML: HTMLLabelElement;



    constructor(name:string, label:string) {
        this.name = name;
        this.type = fieldType.textArea;
        this.e = document.createElement('textarea') as HTMLTextAreaElement;
        this.e.name = this.name;
        this.labelHTML = document.createElement('label') as HTMLLabelElement;
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;

    }

    render(): HTMLElement {
        return this.e;
    }
    getValue(): any {
        return this.e.value
    }

}

//email
class EmailField implements Field {
    name: string;
    label: string;
    type: fieldType;
    e: HTMLInputElement;
    labelHTML: HTMLLabelElement;



    constructor(name:string, label:string) {
        this.name = name;
        this.type = fieldType.textArea;
        this.e = <HTMLInputElement>document.createElement('input');
        this.e.name = this.name;
        this.labelHTML = <HTMLLabelElement>document.createElement('label');
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;

    }

    render(): HTMLElement {
        return this.e;
    }
    getValue(): any {
        return this.e.value
    }

}




class Form {
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

    }
    render(): void {    
        this.fields.forEach(e => {
            this.formElement.appendChild(e.labelHTML);
            this.formElement.appendChild(e.render())
            
        });
    }
    
    
    getValue(): void {


        ///////////// MOVED TO CREATETABLE//////////////


        // const answer = document.createElement('div');
        // answer.className = "answer"
        // this.elementContent.appendChild(answer)
        // this.cell.className = "cel"
        // this.fields.forEach(e =>{
        //     const tr = document.createElement('tr')
        //     tr.innerText = e.label + " " +  e.getValue() 
        //     answer.appendChild(this.cell)
        //     this.cell.appendChild(tr)

        // })

        const answer = new createTable(this.tableID, this.fields);
        this.tableID++;
        this.elementContent.appendChild(answer.table)
        this.createTable.push(answer)

    } }
    class createTable {
        fields: Field[];
        tableID: number;
        table: HTMLElement
        
        
        constructor(tableID: number, fields: Field[]){
            this.fields = fields;
            this.tableID = tableID;

    
            const tableElement = document.createElement('table') as HTMLElement
            tableElement.className = 'answerTable'
            tableElement.id = tableID as unknown as string

            this.table = tableElement
            this.getValue()
        }
        getValue() : void{
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

    class pushApp{
        form: Form;
        submit : HTMLElement;

        constructor(...e: Field[]) {
            this.form = new Form ('getForm', 'answer')
            this.form.fields.push(...e)
            this.submit = document.getElementById('submit');
            this.submit.addEventListener('click', () =>{
                this.form.getValue()}
                )
                        
        }
        renderApp(){
            this.form.render();
        }
    }


    const textBox = new username('username', 'FIRST NAME & SURNAME')
    const email = new EmailField('email', 'email')
    const studyF = new studyField('studyField', 'What field do you study?', 'Law', 'Physics', 'IT technology', 'No one of above:(')
    const com = new comments('comment', 'Please leave a comment below')
    //const elear = new elearning('elearning', 'Do you prefer e-learning?', 'yes', 'no')

     document.getElementById('addForm').addEventListener('click', function(){
         var getForm = document.getElementById('getForm')
         getForm.style.height = "250px"         

         const renderForm = new pushApp(textBox, email, studyF, com, /*elear*/)
         renderForm.renderApp()
     })
