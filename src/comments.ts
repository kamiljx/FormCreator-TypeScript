import { Field } from './field';

export class comments implements Field {
    name: string;
    label: string;
    e: HTMLTextAreaElement;
    labelHTML: HTMLLabelElement;



    constructor(name:string, label:string) {
        this.name = name;
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


