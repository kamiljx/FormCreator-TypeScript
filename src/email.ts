import { Field } from './field';

class EmailField implements Field {
    name: string;
    label: string;
    e: HTMLInputElement;
    labelHTML: HTMLLabelElement;



    constructor(name:string, label:string) {
        this.name = name;
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
export default EmailField