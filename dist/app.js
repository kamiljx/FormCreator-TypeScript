var textBox = new username('username', 'FIRST NAME & SURNAME');
var email = new EmailField('email', 'email');
var studyF = new studyField('studyField', 'What field do you study?', 'Law', 'Physics', 'IT technology', 'No one of above:(');
var com = new comments('comment', 'Please leave a comment below');
//const elear = new elearning('elearning', 'Do you prefer e-learning?', 'yes', 'no')
document.getElementById('addForm').addEventListener('click', function () {
    var getForm = document.getElementById('getForm');
    getForm.style.height = "250px";
    var renderForm = new pushApp(textBox, email, studyF, com);
    renderForm.renderApp();
});
