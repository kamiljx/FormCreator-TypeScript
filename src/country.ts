import { Field } from './field';


export class countryField implements Field {
     name : string;
     label : string;
     e : HTMLSelectElement;
     regEl : HTMLSelectElement;
     _e : HTMLElement;
     selElement : HTMLSelectElement; 
     labelHTML: HTMLLabelElement;
     regOpt : HTMLSelectElement;

     continent : string[] = ['Select one' ,'Europe', 'Asia', 'Africa', 'Americas', 'Oceania']

     constructor (name: string, label: string, defaultValue? : string)
     {
         this.name = name;
         this._e = document.createElement('div') as HTMLDivElement 
         this.e = document.createElement('select') as HTMLSelectElement
         this.regEl = document.createElement('select') as HTMLSelectElement
         this.regEl.setAttribute("id", "RegionValue")
         if(defaultValue)
            this.e.value = defaultValue;
        this.fetchOptions<{name : string, region: string}>("https://restcountries.eu/rest/v2/all").then((data) => {
            data.filter(regionX => regionX.region ==  this.returnRegionValue()).
            map(x => x.name).forEach(e => {
                
                
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


        let regionOption1 = document.createElement('option') as HTMLOptionElement
        let regionOption2 = document.createElement('option') as HTMLOptionElement
        let regionOption3 = document.createElement('option') as HTMLOptionElement
        let regionOption4 = document.createElement('option') as HTMLOptionElement
        let regionOption5 = document.createElement('option') as HTMLOptionElement
        let regionOption6 = document.createElement('option') as HTMLOptionElement


        regionOption1.text = 'Americas'
        regionOption1.value = 'Americas'
        regionOption2.text = 'Europe'
        regionOption2.value = 'Europe'
        regionOption3.text = 'Asia'
        regionOption3.value = 'Asia'
        regionOption4.text = 'Africa'
        regionOption4.value = 'Africa'
        regionOption5.text = 'Oceania'
        regionOption5.value = 'Oceania'
        regionOption6.text = 'Polar'
        regionOption6.value = 'Polar'

        this.regEl.appendChild(regionOption1 )
        this.regEl.appendChild(regionOption2 )
        this.regEl.appendChild(regionOption3 )
        this.regEl.appendChild(regionOption4 )
        this.regEl.appendChild(regionOption5 )
        this.regEl.appendChild(regionOption6 )

 
        this._e.appendChild(this.regEl)
        this._e.appendChild(this.e)
     }

    //  selectRegion () : void{
    //     var selectRegion = this.regEl.options[this.regEl]
    //  }


    var cos =returnRegionValue () {
        return this.regEl.value
        console.log("region has been changed")

        
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
        return this._e 
    }
    getValue() {
        return this.e.value
    }
}