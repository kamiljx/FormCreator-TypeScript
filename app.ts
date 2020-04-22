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


    constructor(name:string, label:string) {
        this.name = name;
        this.type = fieldType.checkBox;
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

//Field of study 
class studyField implements Field {
    name: string;
    label: string;
    type: fieldType;
    e: HTMLInputElement;
    labelHTML: HTMLLabelElement;


    constructor(name:string, label:string) {
        this.name = name;
        this.type = fieldType.select;
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

//COMMENTS
class comments implements Field {
    name: string;
    label: string;
    type: fieldType;
    element: HTMLInputElement;
    labelHTML: HTMLLabelElement;



    constructor(name:string, label:string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.type= fieldType.textArea;
        this.element.name =this.name;
        this.element.type = 'textArea';

    }

    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
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
            this.form = new Form ('container', 'answer')
            this.form.fields.push(...e)
        }
        renderApp(){
            this.form.render();
        }
    }


    const textBox = new username('username', 'FIRST NAME & SURNAME')
    const email = new EmailField('email', 'email')

     document.getElementById('addForm').addEventListener('click', function(){
         const renderForm = new pushApp(textBox, email)
         renderForm.renderApp()
     })
