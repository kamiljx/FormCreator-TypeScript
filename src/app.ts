import {username} from "./username"
import {comments} from './comments'
import {createTable} from './createTable';
import EmailField from "./email";
import { Field } from './field';
import { fieldType } from './fieldType';
import {Form} from './form';
import {pushApp} from './pushApp'
import {studyField} from './studyField'

const textBox = new username('username', 'FIRST NAME & SURNAME')
const email = new EmailField('email', 'email')
const studyF = new studyField('studyField', 'What field do you study?', 'Law', 'Physics', 'IT technology', 'No one of above:(')
const com = new comments('comment', 'Please leave a comment below')
//const elear = new elearning('elearning', 'Do you prefer e-learning?', 'yes', 'no')

 document.getElementById('addForm').addEventListener('click', function(){
     var getForm = document.getElementById('getForm')
     getForm.style.height = "250px"         
     const renderForm = new pushApp(textBox, email, studyF, com, /*elear*/)
     renderForm.renderApp()
 })
