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

    constructor(name: string, label: string, type: number){
        this.e = document.createElement('input') as HTMLInputElement
        this.name = name,
        this.label = label,
        this.type = 1
    }

    render(): HTMLElement{
        return this.e
    }    
    getValue(): any {
        return this.e.value
    }
}

