import './styles/styles.scss';
import {username} from "./username"
import {comments} from './comments'
import {EmailField} from "./email";
import {countryField} from './country'
import {pushApp} from './pushApp'
import {studyField} from './studyField'

const textBox = new username('username', 'FIRST NAME & SURNAME')
const email = new EmailField('email', 'email')
const studyF = new studyField('studyField', 'What field do you study?', 'Law', 'Physics', 'IT technology', 'No one of above:(')
const com = new comments('comment', 'Leave a comment for developer')
const country = new countryField('country', 'Select country', 'default')

//const elear = new elearning('elearning', 'Do you prefer e-learning?', 'yes', 'no')

 document.getElementById('addForm').addEventListener('click', function(){
     var getForm = document.getElementById('getForm')
     getForm.style.height = "250px"         
     const renderForm = new pushApp(textBox, email,country, studyF, com, /*elear*/)
     renderForm.renderApp()


     
     
    })
    