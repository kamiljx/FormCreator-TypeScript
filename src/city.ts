import { Field } from './field';


export class cityField implements Field {
     name : string;
     label : string;
     e : HTMLSelectElement;
     labelHTML: HTMLLabelElement;

     

     constructor (name: string, label: string, defaultValue? : string)
     {
         this.name = name;
         this.e = document.createElement('select') as HTMLSelectElement
         if(defaultValue)
            this.e.value = defaultValue;
        this.fetchOptions<{name : string, region: string}>("https://restcountries.eu/rest/v2/all").then((data) => {
            data.map(x => x.name).forEach(e => {
                let option = document.createElement('option') as HTMLOptionElement;
                option.text = e;
                option.value = e;
                this.e.options.add(option)
            })
        })
        this.labelHTML = document.createElement('label') as HTMLLabelElement;
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;
     }
     fetchOptions<T>(url : string) : Promise<T[]>{
         return fetch(url)
            .then (res => res.json())
            .then (res => {
                return res
            })
            .catch ((e) => {
                console.warn("API ERROR FETCHUNG")
            })
     }
    render(): HTMLElement {
        return this.e;
    }
    getValue() {
        return this.e.value
    }
}