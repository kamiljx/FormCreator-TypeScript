import {Form} from './form'
import { Field } from './field';
import EmailField from './email'

class pushApp{
    form: Form;
    submit : HTMLElement;

    constructor(...e: Field[]) {
        this.form = new Form ('getForm', 'answer')
        this.form.fields.push(...e)
        this.submit = document.getElementById('submit');
        this.submit.addEventListener('click', () =>{
            this.buttons()}
            )
                    
    }
    renderApp() : void {
        this.form.render();
    }
    buttons() : void {
        this.form.getValue()
        this.form.createTable.forEach(e => {
            e.deleteCell.addEventListener('click', ()=>
            this.deleteAnswer(e.tableID))
        })
    }
    deleteAnswer(ansID : number) : void{
        const answer = document.getElementById(ansID as unknown as string)
        this.form.elementContent.removeChild(answer)
    }
}
export {pushApp}