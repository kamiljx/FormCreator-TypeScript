var fieldType;
(function (fieldType) {
    fieldType[fieldType["textBox"] = 1] = "textBox";
    fieldType[fieldType["textArea"] = 2] = "textArea";
    fieldType[fieldType["data"] = 3] = "data";
    fieldType[fieldType["email"] = 4] = "email";
    fieldType[fieldType["checkBox"] = 5] = "checkBox";
    fieldType[fieldType["select"] = 6] = "select";
})(fieldType || (fieldType = {}));
var textInput = /** @class */ (function () {
    function textInput(name, label, type) {
        this.e = document.createElement('input');
        this.name = name,
            this.label = label,
            this.type = 1;
    }
    textInput.prototype.render = function () {
        return this.e;
    };
    textInput.prototype.getValue = function () {
        return this.e.value;
    };
    return textInput;
}());
