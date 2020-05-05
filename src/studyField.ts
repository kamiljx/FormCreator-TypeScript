import { Field } from './field';
class studyField implements Field {
    name: string;
    label: string;
    e: HTMLSelectElement;
    labelHTML: HTMLLabelElement;


    constructor(name:string, label:string, ...studyFields: string []) {
        this.name = name;
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
export {studyField}