var fieldType;
(function (fieldType) {
    fieldType[fieldType["textBox"] = 1] = "textBox";
    fieldType[fieldType["textArea"] = 2] = "textArea";
    fieldType[fieldType["data"] = 3] = "data";
    fieldType[fieldType["email"] = 4] = "email";
    fieldType[fieldType["checkBox"] = 5] = "checkBox";
    fieldType[fieldType["select"] = 6] = "select";
})(fieldType || (fieldType = {}));
//NAME
var username = /** @class */ (function () {
    function username(name, label) {
        this.name = name;
        this.type = fieldType.textBox;
        this.e = document.createElement('input');
        this.e.name = this.name;
        this.labelHTML = document.createElement('label');
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;
    }
    username.prototype.render = function () {
        return this.e;
    };
    username.prototype.getValue = function () {
        return this.e.value;
    };
    return username;
}());
//DO YOU PREFER E-LEARNING
var elearning = /** @class */ (function () {
    function elearning(name, label) {
        this.name = name;
        this.type = fieldType.checkBox;
        this.e = document.createElement('input');
        this.e.name = this.name;
        this.labelHTML = document.createElement('label');
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;
    }
    elearning.prototype.render = function () {
        return this.e;
    };
    elearning.prototype.getValue = function () {
        return this.e.value;
    };
    return elearning;
}());
//Field of study 
var studyField = /** @class */ (function () {
    function studyField(name, label) {
        this.name = name;
        this.type = fieldType.select;
        this.e = document.createElement('input');
        this.e.name = this.name;
        this.labelHTML = document.createElement('label');
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;
    }
    studyField.prototype.render = function () {
        return this.e;
    };
    studyField.prototype.getValue = function () {
        return this.e.value;
    };
    return studyField;
}());
//COMMENTS
var comments = /** @class */ (function () {
    function comments(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = fieldType.textArea;
        this.element.name = this.name;
        this.element.type = 'textArea';
    }
    comments.prototype.render = function () {
        return this.element;
    };
    comments.prototype.getValue = function () {
        return this.element.value;
    };
    return comments;
}());
//email
var EmailField = /** @class */ (function () {
    function EmailField(name, label) {
        this.name = name;
        this.type = fieldType.textArea;
        this.e = document.createElement('input');
        this.e.name = this.name;
        this.labelHTML = document.createElement('label');
        this.labelHTML.innerHTML = label;
        this.labelHTML.htmlFor = name;
        this.label = label;
    }
    EmailField.prototype.render = function () {
        return this.e;
    };
    EmailField.prototype.getValue = function () {
        return this.e.value;
    };
    return EmailField;
}());
var Form = /** @class */ (function () {
    function Form(id, idValue) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () {
        var _this = this;
        this.fields.forEach(function (e) {
            _this.formElement.appendChild(e.labelHTML);
            _this.formElement.appendChild(e.render());
        });
    };
    Form.prototype.getValue = function () {
        // TODO: pętla wyświetlająca wartości kolejnych pól
    };
    return Form;
}());
var pushApp = /** @class */ (function () {
    function pushApp() {
        var _a;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        this.form = new Form('container', 'answer');
        (_a = this.form.fields).push.apply(_a, e);
    }
    pushApp.prototype.renderApp = function () {
        this.form.render();
    };
    return pushApp;
}());
var textBox = new username('username', 'FIRST NAME & SURNAME');
var email = new EmailField('email', 'email');
document.getElementById('addForm').addEventListener('click', function () {
    var renderForm = new pushApp(textBox, email);
    renderForm.renderApp();
});
