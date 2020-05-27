import {Form} from './form'
import { Field } from './field';



class pushApp{
    form: Form;
    submit : HTMLElement;
    saveMe: HTMLElement;
    getMe: HTMLElement
    clearMe: HTMLElement;
    sendToServer : HTMLElement;


    constructor(...e: Field[]) {
        this.form = new Form ('getForm', 'answer')
        this.form.fields.push(...e)
        this.submit = document.getElementById('submit');
        this.submit.addEventListener('click', () =>{
            this.buttons()}
            );
        this.saveMe = document.getElementById('saveLocalStorage');
        this.saveMe.addEventListener('click', this.setLocalStorage)
        this.getMe = document.getElementById('getLocalStorage');
        this.getMe.addEventListener('click', this.getLocalStorage)
        this.clearMe = document.getElementById('clearLocalStorage');
        this.clearMe.addEventListener('click', this.clearLocalStorage)
        // this.sendToServer = document.getElementById('sendToServer')
        // this.sendToServer.addEventListener('click', this.sendMessage)
                    
    }

    renderApp() : void {
        this.form.render();
    }
    clearLocalStorage() : void {
        localStorage.clear()
    }
    setLocalStorage() : void {
        const storageMe = document.getElementById('answer')
        const pastStorage = document.getElementById('answerLocal')
        const myStorage = JSON.stringify(storageMe)
        localStorage.setItem('storageMe', storageMe.outerHTML + pastStorage.innerHTML)
        console.log(localStorage)
    }
    // sendMessage () : void{
    //         socket.send('new message')
    // }
    getLocalStorage () : void {
        const answerDiv = document.getElementById('answerLocal')
     for (var i = 0; i< localStorage.length; i++){
        const answer = localStorage.storageMe
        answerDiv.outerHTML += answer
     }
    }

    buttons() : void {
        this.form.getValue()
        this.form.createTable.forEach(e => {
            e.deleteCell.addEventListener('click', ()=>
            this.deleteAnswer(e.tableID))
            e.editButton.addEventListener('click', ()=> {
                this.editAnswer(e.tableID)
            })
        })
        
        
    }

    deleteAnswer(ansID : number) : void{
        const answer = document.getElementById(ansID as unknown as string)
        this.form.elementContent.removeChild(answer)
    }
    changeEditMode = () => {
            console.log("should be edited")}

    editAnswer(ansID: number) : void  {
        console.log(ansID)
        const getAnswer = document.getElementsByTagName('td');
        for (let i = 0; i < getAnswer.length; i++){
            // getAnswer[i].addEventListener('dblclick', function(){

                console.log("that should be changed" + getAnswer[i] )
                if(getAnswer[i].isContentEditable === false){
                    getAnswer[i].setAttribute('contenteditable', 'true');

                }else {
                    getAnswer[i].setAttribute('contenteditable', 'false');

                }
            // })
        }
        
        console.log("hello")
        
    }
    }


export {pushApp}