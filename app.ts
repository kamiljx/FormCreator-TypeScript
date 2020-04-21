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
    render(): HTMLElement;
    getValue(): any;
}

class textInput implements Field {
    name: string;
    label: string;
    type: fieldType;
    e: HTMLInputElement;

    constructor(name: string, label: string){
        this.e = document.createElement('input') as HTMLInputElement
        this.name = name,
        this.label = label,
        this.e.name = this.name
    }

    render(): HTMLElement{
        return this.e
    }    
    getValue(): any {
        return this.e.value
    }
}

class Form {
    fields: Field[];
    formElement: HTMLElement;
constructor(id: string) {
this.fields = new Array();
this.formElement = document.getElementById(id);
}
    render(): void {
     // TODO: pętla wyświetlająca kolejne pola
}
getValue(): void {
// TODO: pętla wyświetlająca wartości kolejnych pól
} }