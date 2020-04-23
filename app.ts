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
class elearning implements Field {
    name: string;
    label: string;
    type: fieldType;
    e: HTMLInputElement;
    labelHTML: HTMLLabelElement;


    constructor(name:string, label:string, ...YoN : string[] ) {
        this.name = name;
        this.type = fieldType.checkBox;
        this.e = document.createElement('input') as HTMLInputElement;
        this.e.name = this.name;
        this.e.type = 'checkbox'
        // YoN.forEach(e => {
        //     const check = document.createElement('option');
        //     check.value = e;
        //     check.text = e;
        //     this.e.add(check)
        // })

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

    constructor(id: string, idValue: string) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
        //this.elementContent = document.getElementById(idValue)
    }
    render(): void {    
        this.fields.forEach(e => {
            this.formElement.appendChild(e.labelHTML);
            this.formElement.appendChild(e.render())
            
        });
    }
    
    
    getValue(): void {
        // TODO: pętla wyświetlająca wartości kolejnych pól
    } }

    class pushApp{
        form: Form;
        
        constructor(...e: Field[]) {
            this.form = new Form ('getForm', 'answer')
            this.form.fields.push(...e)
        }
        renderApp(){
            this.form.render();
        }
    }


    const textBox = new username('username', 'FIRST NAME & SURNAME')
    const email = new EmailField('email', 'email')
    const studyF = new studyField('studyField', 'What field do you study?', 'Law', 'Physics', 'IT technology', 'No one of above:(')
    const com = new comments('comment', 'Please leave a comment below')
    const elear = new elearning('elearning', 'Do you prefer e-learning?', 'yes', 'no')

     document.getElementById('addForm').addEventListener('click', function(){
         const renderForm = new pushApp(textBox, email, studyF, com, elear)
         renderForm.renderApp()
     })
