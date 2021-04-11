var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// General Functions General Functions General Functions General Functions General Functions General Functions General Functions
var locals = function (key, func) {
    var val = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        val[_i - 2] = arguments[_i];
    }
    if (func === 'get') {
        var a = localStorage.getItem(key);
        return a;
    }
    else if (func === 'set') {
        var a = localStorage.setItem(key, JSON.stringify(val[0]));
        return a;
    }
    else if (func === 'remove') {
        var a = localStorage.removeItem(key);
        return a;
    }
    else if (func === 'clear') {
        localStorage.clear();
    }
    else {
        return false;
    }
};
var routeTo = function (from, to, toName) {
    from.style.transform = "translateX(-120%)";
    to.style.transform = "translateX(0%)";
    window.location.hash = '#' + toName;
    console.log(window.location.hash);
};
var routeBack = function (from, to, toName) {
    from.style.transform = "translateX(120%)";
    to.style.transform = "translateX(0%)";
    window.location.hash = '#' + toName;
    console.log(window.location.hash);
};
var d = function (form) {
    var att = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        att[_i - 1] = arguments[_i];
    }
    var d = new Date();
    var result;
    if (att[0] === 'nor' && form === 'hr') {
        result = d.getHours();
    }
    else {
        switch (form) {
            case 'sec':
                if (d.getSeconds() > 9) {
                    result = d.getSeconds();
                }
                else {
                    result = '0' + d.getSeconds();
                }
                break;
            case 'min':
                if (d.getMinutes() > 9) {
                    result = d.getMinutes();
                }
                else {
                    result = '0' + d.getMinutes().toString();
                }
                break;
            case 'hr':
                if (d.getHours() > 12) {
                    var res = d.getHours() - 12;
                    if (res > 9) {
                        result = res;
                    }
                    else {
                        result = '0' + res;
                    }
                }
                else {
                    if (d.getHours() > 9) {
                        result = d.getHours();
                    }
                    else {
                        result = '0' + d.getHours();
                    }
                }
                break;
            case 'day':
                result = d.getDay();
                break;
            case 'date':
                result = d.getDate();
                break;
            case 'yr':
                result = d.getFullYear();
                break;
            case 'mth':
                result = d.getMonth();
                break;
            default:
                result = false;
                break;
        }
        return result;
    }
};
var Ai = function (n) {
    var dash = document.querySelector('.banner').children;
    var greetUp = ['Hi ' + n + ' 👋', 'Hello ' + n + ' 👋', 'Welcome Back ' + n + ' 😀', 'Welcome ' + n + ' 😀'];
    var greetDown = ['Let\'s create a new task together 😉', 'God\'s Loves you 😘🧡', 'How are you doing?,Great right 👍'];
    var upFunc = function () {
        if (d('day') === 0) {
            dash[0].innerHTML = 'Happy Sunday ' + n + ' ⛪';
            setTimeout(function () {
                var ran = Math.floor(Math.random() * greetUp.length);
                dash[0].innerHTML = greetUp[ran];
            }, 10000);
        }
        else {
            var ran = Math.floor(Math.random() * greetUp.length);
            dash[0].innerHTML = greetUp[ran];
        }
    };
    var downFunc = function () { };
    upFunc();
    downFunc();
}; // incomplete
// General Functions General Functions General Functions General Functions General Functions General Functions General Functions 
// Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.Login = function (name, pass) {
        return __awaiter(this, void 0, void 0, function () {
            var result, Users, Ures, UsersJSON, dataArr;
            return __generator(this, function (_a) {
                Users = locals('Users', 'get');
                if (Users) {
                    if (Users === '[]') {
                        result = 'signin';
                    }
                    else {
                        Ures = void 0;
                        UsersJSON = JSON.parse(Users);
                        dataArr = UsersJSON.map(function (a) {
                            var res;
                            if (a.name === name) {
                                if (a.password === pass) {
                                    res = { name: a.name, email: a.email, key: a.key };
                                }
                                else {
                                    res = 'password';
                                }
                            }
                            else {
                                res = 'name';
                            }
                            return res;
                        });
                        if (dataArr.some(function (b) { return typeof b === 'object'; })) {
                            Ures = dataArr.find(function (a) { return typeof a === 'object'; });
                        }
                        else if (dataArr.some(function (c) { return c === 'password'; })) {
                            Ures = 'password';
                        }
                        else if (dataArr.some(function (d) { return d === 'name'; })) {
                            Ures = 'name';
                        }
                        else {
                            console.log('I Dont Know');
                        }
                        result = Ures;
                    }
                }
                else {
                    result = 'signin';
                }
                return [2 /*return*/, result];
            });
        });
    };
    Auth.prototype.Signin = function (name, pass, email) {
        return __awaiter(this, void 0, void 0, function () {
            var result, Users, UsersJSON_1, getKey_1, UsersJSON, keyRan, key;
            return __generator(this, function (_a) {
                Users = locals('Users', 'get');
                if (Users) {
                    UsersJSON_1 = JSON.parse(Users);
                    if (UsersJSON_1.some(function (value) { return value.password === pass && value.name === name; })) {
                        result = 'exist';
                    }
                    else {
                        getKey_1 = function () {
                            var keyRan = Math.floor(Math.random() * 7102) + 2102;
                            var Rkey = name[0] + keyRan.toString() + name[name.length - 1];
                            if (UsersJSON_1.some(function (a) { return a.key === Rkey; })) {
                                getKey_1();
                            }
                            else {
                                return Rkey;
                            }
                        };
                        UsersJSON_1.push({ name: name, password: pass, email: email, key: getKey_1() });
                        locals('Users', 'remove');
                        locals('Users', 'set', UsersJSON_1);
                        result = { name: name, pass: pass };
                    }
                }
                else {
                    UsersJSON = [];
                    keyRan = Math.floor(Math.random() * 5102) + 2102;
                    key = name[0] + keyRan.toString() + name[name.length - 1];
                    UsersJSON.push({ name: name, password: pass, email: email, key: key });
                    locals('Users', 'remove');
                    locals('Users', 'set', UsersJSON);
                    result = { name: name, pass: pass };
                }
                return [2 /*return*/, result];
            });
        });
    };
    return Auth;
}());
var MainUI = /** @class */ (function () {
    function MainUI() {
    }
    MainUI.prototype.displayList = function (data, email) {
        var navEmail = document.querySelector('#nav-email');
        var empty = document.querySelector('.empty');
        var listUi = document.querySelector('.list-ui');
        navEmail.innerHTML = email;
        if (data === 'no-result') {
            empty.style.display = 'grid';
            empty.style.fontSize = '35px';
            listUi.style.display = 'none';
            empty.children[1].innerHTML = 'No Result Found';
        }
        else if (data === 'empty') {
            empty.style.display = 'grid';
            listUi.style.display = 'none';
        }
        else {
            if (typeof data === 'object') {
                listUi.style.display = 'block';
                empty.style.display = 'none';
                var result = void 0;
                result = data.map(function (a, i) {
                    return ("\n                        <div title=\"Click On Content To View More\" class=\"card\">\n                            <h3 class=\"title\">" + a.title + "</h3>\n                            <div class=\"body\">" + a.body + "</div>\n                            <div title=\"Edith Note\" class='edith'></div>\n                            <div class=\"delete\" title=\"Delete\" data-id=\"" + i + "\">\u2716</div>\n                            <div class=\"time\" titlte=\"Time\">" + (a.date.day + ' ' + a.date.time) + "</div>\n                        </div>\n                    ");
                });
                listUi.innerHTML = result.join(" ");
            }
            else {
                empty.style.display = 'grid';
                listUi.style.display = 'none';
            }
        }
    };
    return MainUI;
}());
var Notes = /** @class */ (function () {
    function Notes() {
    }
    Notes.prototype.getNote = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, dataJSON;
            return __generator(this, function (_a) {
                if (locals(key, 'get')) {
                    if (locals(key, 'get') === '[]') {
                        result = 'empty';
                    }
                    else {
                        data = localStorage.getItem(key);
                        dataJSON = JSON.parse(data);
                        localStorage.removeItem(key);
                        locals(key, 'set', dataJSON);
                        result = dataJSON;
                    }
                }
                else {
                    locals(key, 'set', []);
                    result = 'empty';
                }
                return [2 /*return*/, result];
            });
        });
    };
    Notes.prototype.createNote = function (title, body, key) {
        var data = localStorage.getItem(key);
        var dataJSON = JSON.parse(data);
        var newtime = d('hr') + ':' + d('min');
        var newday = new Date().toDateString();
        var obj = { title: title, body: body, date: { day: newday, time: newtime } };
        dataJSON.push(obj);
        localStorage.removeItem(key);
        locals(key, 'set', dataJSON);
    };
    Notes.prototype.deleteNote = function (key, i) {
        var data = localStorage.getItem(key);
        var dataJSON = JSON.parse(data);
        var del = dataJSON.splice(i, 1);
        localStorage.removeItem(key);
        locals(key, 'set', dataJSON);
    };
    Notes.prototype.edithNote = function (key, i, obj) { };
    Notes.prototype.searchNote = function (key, input) {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, dataJSON, inp_1, resArr_1;
            return __generator(this, function (_a) {
                data = localStorage.getItem(key);
                if (data !== '[]') {
                    dataJSON = JSON.parse(data);
                    inp_1 = input.toLowerCase();
                    if (inp_1 !== '') {
                        resArr_1 = [];
                        dataJSON.forEach(function (a) {
                            var filterTitle = a.title.toLowerCase();
                            var filterBody = a.body.toLowerCase();
                            if (filterTitle.indexOf(inp_1) > -1 || filterBody.indexOf(inp_1) > -1) {
                                resArr_1.push(a);
                            }
                        });
                        if (resArr_1.length === 0) {
                            result = 'no-result';
                        }
                        else {
                            result = resArr_1;
                        }
                    }
                    else {
                        console.log('no value inputed');
                    }
                }
                else {
                    result = 'no-result';
                }
                return [2 /*return*/, result];
            });
        });
    };
    return Notes;
}());
var Validate = /** @class */ (function () {
    function Validate() {
    }
    Validate.prototype.Login = function () {
        var navEmail = document.querySelector('#nav-email');
        navEmail.innerHTML = 'Your Email';
        var valid = function () {
            var nameDOM = document.querySelector('#log-name');
            var passDOM = document.querySelector('#log-pass');
            var submit = document.querySelector('#log-submit');
            nameDOM.addEventListener('input', function () {
                var name = nameDOM.value;
                var nameArr = [];
                for (var i = 0; i < name.length; i++) {
                    nameArr.push(name[i]);
                }
                if (nameArr.some(function (a) { return a === ' '; })) {
                    var nameDOM_1 = document.querySelector('#log-name');
                    var valInfo = document.querySelector('#val-info');
                    nameDOM_1.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Nick-Name only with no space';
                }
                else if (nameArr.length > 10) {
                    var nameDOM_2 = document.querySelector('#log-name');
                    var valInfo = document.querySelector('#val-info');
                    nameDOM_2.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Not More Than 10 Characters';
                }
                else {
                    var valInfo = document.querySelector('#val-info');
                    var nameDOM_3 = document.querySelector('#log-name');
                    nameDOM_3.style.border = 'solid 2px #56d2f8e8';
                    valInfo.style.padding = '0px';
                    valInfo.innerHTML = '';
                }
            });
            passDOM.addEventListener('blur', function () {
                var pass = passDOM.value;
                var passArr = [];
                for (var i = 0; i < pass.length; i++) {
                    passArr.push(pass[i]);
                }
                if (passArr.length < 8) {
                    var passDOM_1 = document.querySelector('#log-pass');
                    var valInfo = document.querySelector('#val-info');
                    passDOM_1.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = '8 Characters Needed For Password';
                }
                else {
                    var valInfo = document.querySelector('#val-info');
                    var passDOM_2 = document.querySelector('#log-pass');
                    passDOM_2.style.border = 'solid 2px #56d2f8e8';
                    valInfo.style.padding = '0px';
                    valInfo.innerHTML = '';
                }
            });
            submit.addEventListener('click', function () {
                var name = nameDOM.value;
                var pass = passDOM.value;
                var nameArr = [];
                var passArr = [];
                for (var i = 0; i < name.length; i++) {
                    nameArr.push(name[i]);
                }
                for (var i = 0; i < pass.length; i++) {
                    passArr.push(pass[i]);
                }
                if (name === '' || pass === '') {
                    var passDOM_3 = document.querySelector('#log-pass');
                    var nameDOM_4 = document.querySelector('#log-name');
                    var valInfo = document.querySelector('#val-info');
                    passDOM_3.style.border = 'solid 2px #cc4141';
                    nameDOM_4.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Fill The Fileds';
                }
                else if (nameArr.some(function (a) { return a === ' '; })) {
                    var nameDOM_5 = document.querySelector('#log-name');
                    var valInfo = document.querySelector('#val-info');
                    nameDOM_5.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Nick-Name only with no space';
                }
                else if (nameArr.length > 10) {
                    var nameDOM_6 = document.querySelector('#log-name');
                    var valInfo = document.querySelector('#val-info');
                    nameDOM_6.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Not More Than 10 Characters';
                }
                else if (passArr.length < 8) {
                    var passDOM_4 = document.querySelector('#log-pass');
                    var valInfo = document.querySelector('#val-info');
                    passDOM_4.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = '8 Characters Needed For Password';
                }
                else {
                    var passDOM_5 = document.querySelector('#log-pass');
                    var nameDOM_7 = document.querySelector('#log-name');
                    var valInfo = document.querySelector('#val-info');
                    passDOM_5.style.border = 'solid 2px transparent';
                    nameDOM_7.style.border = 'solid 2px transparent';
                    valInfo.style.padding = '0px';
                    valInfo.innerHTML = '';
                    new Head().Login(nameDOM_7, passDOM_5);
                }
            });
        };
        var Users = locals('Users', 'get');
        if (Users) {
            valid();
        }
        else {
            this.Signin();
        }
    };
    Validate.prototype.Signin = function () {
        var signinDOM = document.querySelector('#sign-in');
        var loginDOM = document.querySelector('#log-in');
        routeTo(loginDOM, signinDOM, 'Sign-in');
        var valid = function () {
            var nameDOM = document.querySelector('#sn-name');
            var emailDOM = document.querySelector('#sn-email');
            var conpassDOM = document.querySelector('#sn-conpass');
            var passDOM = document.querySelector('#sn-pass');
            var submit = document.querySelector('#sn-submit');
            nameDOM.addEventListener('input', function () {
                var name = nameDOM.value;
                var nameArr = [];
                for (var i = 0; i < name.length; i++) {
                    nameArr.push(name[i]);
                }
                if (nameArr.some(function (a) { return a === ' '; })) {
                    var nameDOM_8 = document.querySelector('#sn-name');
                    var valInfo = document.querySelector('#snval-info');
                    nameDOM_8.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Nick-Name only with no space';
                }
                else if (nameArr.length > 10) {
                    var nameDOM_9 = document.querySelector('#sn-name');
                    var valInfo = document.querySelector('#snval-info');
                    nameDOM_9.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Not More Than 10 Characters';
                }
                else {
                    var valInfo = document.querySelector('#snval-info');
                    var nameDOM_10 = document.querySelector('#sn-name');
                    nameDOM_10.style.border = 'solid 2px #56d2f8e8';
                    valInfo.style.padding = '0px';
                    valInfo.innerHTML = '';
                }
            });
            emailDOM.addEventListener('blur', function () {
                var email = emailDOM.value;
                var emailArr = [];
                for (var i = 0; i < email.length; i++) {
                    emailArr.push(email[i]);
                }
                if (emailArr.some(function (a) { return a === '@'; }) === false || emailArr.some(function (a) { return a === '.'; }) === false) {
                    var emailDOM_1 = document.querySelector('#sn-email');
                    var valInfo = document.querySelector('#snval-info');
                    emailDOM_1.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Input The A Valid Email';
                }
                else if (emailArr.some(function (a) { return a === ' '; }) === true) {
                    var emailDOM_2 = document.querySelector('#sn-email');
                    var valInfo = document.querySelector('#snval-info');
                    emailDOM_2.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Do Not Add \'Space\' To Email';
                }
                else {
                    var emailDOM_3 = document.querySelector('#sn-email');
                    var valInfo = document.querySelector('#snval-info');
                    emailDOM_3.style.border = 'solid 2px #56d2f8e8';
                    valInfo.style.padding = '0px';
                    valInfo.innerHTML = '';
                }
            });
            passDOM.addEventListener('blur', function () {
                var conpassDOM = document.querySelector('#sn-conpass');
                var pass = passDOM.value;
                var passArr = [];
                for (var i = 0; i < pass.length; i++) {
                    passArr.push(pass[i]);
                }
                if (passArr.length < 8) {
                    var passDOM_6 = document.querySelector('#sn-pass');
                    var valInfo = document.querySelector('#snval-info');
                    passDOM_6.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = '8 Characters Needed For Password';
                }
                else {
                    var passDOM_7 = document.querySelector('#sn-pass');
                    var valInfo = document.querySelector('#snval-info');
                    passDOM_7.style.border = 'solid 2px #56d2f8e8';
                    valInfo.style.padding = '0px';
                    valInfo.innerHTML = '';
                }
                conpassDOM.addEventListener('blur', function () {
                    var conpass = conpassDOM.value;
                    if (pass !== conpass) {
                        var passDOM_8 = document.querySelector('#sn-pass');
                        var conpassDOM_1 = document.querySelector('#sn-conpass');
                        var valInfo = document.querySelector('#snval-info');
                        passDOM_8.style.border = 'solid 2px #cc4141';
                        conpassDOM_1.style.border = 'solid 2px #cc4141';
                        valInfo.style.padding = '5px';
                        valInfo.innerHTML = 'Password\'s Should Be The Same';
                    }
                    else {
                        var passDOM_9 = document.querySelector('#sn-pass');
                        var conpassDOM_2 = document.querySelector('#sn-conpass');
                        var valInfo = document.querySelector('#snval-info');
                        passDOM_9.style.border = 'solid 2px #56d2f8e8';
                        conpassDOM_2.style.border = 'solid 2px #56d2f8e8';
                        valInfo.style.padding = '0px';
                        valInfo.innerHTML = '';
                    }
                });
            });
            submit.addEventListener('click', function () {
                var name = nameDOM.value;
                var email = emailDOM.value;
                var pass = passDOM.value;
                var conpass = conpassDOM.value;
                var nameArr = [];
                var emailArr = [];
                var passArr = [];
                var conpassArr = [];
                for (var i = 0; i < name.length; i++) {
                    nameArr.push(name[i]);
                }
                for (var i = 0; i < email.length; i++) {
                    emailArr.push(email[i]);
                }
                for (var i = 0; i < pass.length; i++) {
                    passArr.push(pass[i]);
                }
                for (var i = 0; i < conpass.length; i++) {
                    conpassArr.push(conpass[i]);
                }
                if (nameDOM.value === '' || passDOM.value === '' || conpassDOM.value === '') {
                    var nameDOM_11 = document.querySelector('#sn-name');
                    var emailDOM_4 = document.querySelector('#sn-email');
                    var passDOM_10 = document.querySelector('#sn-pass');
                    var conpassDOM_3 = document.querySelector('#sn-conpass');
                    var valInfo = document.querySelector('#snval-info');
                    nameDOM_11.style.border = 'solid 2px #cc4141';
                    emailDOM_4.style.border = 'solid 2px #cc4141';
                    passDOM_10.style.border = 'solid 2px #cc4141';
                    conpassDOM_3.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Fill The Fileds';
                }
                else if (nameArr.some(function (a) { return a === ' '; })) {
                    var nameDOM_12 = document.querySelector('#sn-name');
                    var valInfo = document.querySelector('#snval-info');
                    nameDOM_12.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Nick-Name only with no space';
                }
                else if (nameArr.length > 9) {
                    var nameDOM_13 = document.querySelector('#sn-name');
                    var valInfo = document.querySelector('#snval-info');
                    nameDOM_13.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Not More Than 9 Characters';
                }
                else if (emailArr.some(function (a) { return a === '@'; }) === false || emailArr.some(function (a) { return a === '.'; }) === false) {
                    var emailDOM_5 = document.querySelector('#sn-email');
                    var valInfo = document.querySelector('#snval-info');
                    emailDOM_5.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Input The A Valid Email';
                }
                else if (emailArr.some(function (a) { return a === ' '; })) {
                    var emailDOM_6 = document.querySelector('#sn-email');
                    var valInfo = document.querySelector('#snval-info');
                    emailDOM_6.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Do Not Add \'Space\' To Email';
                }
                else if (passArr.length < 8) {
                    var passDOM_11 = document.querySelector('#sn-pass');
                    var valInfo = document.querySelector('#snval-info');
                    passDOM_11.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = '8 Characters Needed For Password';
                }
                else if (pass !== conpass) {
                    var passDOM_12 = document.querySelector('#sn-pass');
                    var conpassDOM_4 = document.querySelector('#sn-conpass');
                    var valInfo = document.querySelector('#snval-info');
                    passDOM_12.style.border = 'solid 2px #cc4141';
                    conpassDOM_4.style.border = 'solid 2px #cc4141';
                    valInfo.style.padding = '5px';
                    valInfo.innerHTML = 'Password\'s Should Be The Same';
                }
                else {
                    var passDOM_13 = document.querySelector('#sn-pass');
                    var nameDOM_14 = document.querySelector('#sn-name');
                    var conpassDOM_5 = document.querySelector('#sn-conpass');
                    var emailDOM_7 = document.querySelector('#sn-email');
                    var valInfo = document.querySelector('#snval-info');
                    passDOM_13.style.border = 'solid 2px transparent';
                    conpassDOM_5.style.border = 'solid 2px transparent';
                    nameDOM_14.style.border = 'solid 2px transparent';
                    emailDOM_7.style.border = 'solid 2px transparent';
                    valInfo.style.padding = '0px';
                    valInfo.innerHTML = '';
                    new Head().Signin(nameDOM_14, emailDOM_7, passDOM_13, conpassDOM_5);
                }
            });
        };
        valid();
    };
    return Validate;
}());
var Head = /** @class */ (function () {
    function Head() {
    }
    Head.prototype.Login = function (nameDOM, passDOM) {
        // All varibles needed
        var name = nameDOM.value;
        var pass = passDOM.value;
        var alert = document.querySelector('#alert');
        var msg = document.querySelector('#msg');
        var snBtn = document.querySelector('.sn-btn');
        var auth = new Auth();
        var val = new Validate();
        var notes = new Notes();
        auth.Login(name, pass).then(function (data) {
            if (data === 'signin') {
                name = '';
                pass = '';
                nameDOM.style.border = '2px solid transparent';
                passDOM.style.border = '2px solid transparent';
                msg.innerHTML = 'User Not Found /';
                snBtn.innerHTML = 'Sign In';
                alert.style.backgroundColor = '#cc4141';
                alert.setAttribute('class', '');
                snBtn.addEventListener('click', function () {
                    alert.setAttribute('class', 'alert-hidden');
                    val.Signin();
                });
                setTimeout(function () { alert.setAttribute('class', 'alert-hidden'); }, 4000);
            }
            else if (data === 'name') {
                name = '';
                nameDOM.style.border = '2px solid red';
                msg.innerHTML = 'Incorrect Name /';
                snBtn.innerHTML = 'Sign In';
                alert.style.backgroundColor = '#cc4141';
                alert.setAttribute('class', '');
                snBtn.addEventListener('click', function () {
                    val.Signin();
                    alert.setAttribute('class', 'alert-hidden');
                });
                setTimeout(function () { alert.setAttribute('class', 'alert-hidden'); }, 4000);
            }
            else if (data === 'password') {
                pass = '';
                passDOM.style.border = '2px solid red';
                msg.innerHTML = 'Incorrect Password /';
                snBtn.innerHTML = 'Sign In';
                alert.style.padding = '8px 15px';
                alert.style.backgroundColor = '#cc4141';
                alert.setAttribute('class', '');
                snBtn.addEventListener('click', function () {
                    alert.setAttribute('class', 'alert-hidden');
                    val.Signin();
                });
                setTimeout(function () { alert.setAttribute('class', 'alert-hidden'); }, 4000);
            }
            else if (typeof data === 'object') {
                nameDOM.style.border = '2px solid #60cc60';
                passDOM.style.border = '2px solid #60cc60';
                msg.innerHTML = 'Success';
                snBtn.innerHTML = '';
                snBtn.style.padding = '0';
                alert.style.backgroundColor = '#60cc60';
                alert.setAttribute('class', '');
                setTimeout(function () { alert.setAttribute('class', 'alert-hidden'); }, 1500);
                DNote(data);
                setTimeout(function () {
                    var listDOM = document.querySelector('#list');
                    var loginDOM = document.querySelector('#log-in');
                    routeTo(loginDOM, listDOM, 'List');
                }, 2000);
            }
            else {
                val.Signin();
            }
        })["catch"](function (err) { return console.log(err); });
    };
    Head.prototype.Signin = function (nameDOM, emailDOM, passDOM, conpassDOM) {
        var name = nameDOM.value;
        var email = emailDOM.value;
        var pass = passDOM.value;
        var alert = document.querySelector('#alert');
        var msg = document.querySelector('#msg');
        var snBtn = document.querySelector('.sn-btn');
        var auth = new Auth();
        var val = new Validate();
        var notes = new Notes();
        auth.Signin(name, pass, email).then(function (data) {
            if (data === 'exist') {
                nameDOM.style.border = '2px solid red';
                passDOM.style.border = '2px solid red';
                conpassDOM.style.border = '2px solid red';
                msg.innerHTML = 'User Already Exist /';
                snBtn.innerHTML = 'Log In';
                alert.style.padding = '8px 15px';
                alert.style.backgroundColor = '#cc4141';
                alert.setAttribute('class', '');
                snBtn.addEventListener('click', function () {
                    alert.setAttribute('class', 'alert-hidden');
                    var signinDOM = document.querySelector('#sign-in');
                    var loginDOM = document.querySelector('#log-in');
                    routeTo(signinDOM, loginDOM, 'Login');
                    val.Login();
                });
                setTimeout(function () { alert.setAttribute('class', 'alert-hidden'); }, 4000);
                val.Signin();
            }
            else if (typeof data === "object") {
                var conpass = conpassDOM.value;
                nameDOM.style.border = '2px solid #60cc60';
                emailDOM.style.border = '2px solid #60cc60';
                passDOM.style.border = '2px solid #60cc60';
                conpassDOM.style.border = '2px solid #60cc60';
                msg.innerHTML = 'Success';
                snBtn.innerHTML = '';
                snBtn.style.padding = '0px';
                alert.style.backgroundColor = '#60cc60';
                alert.setAttribute('class', '');
                name = '';
                email = '';
                pass = '';
                conpass = '';
                setTimeout(function () { alert.setAttribute('class', 'alert-hidden'); }, 1000);
                setTimeout(function () {
                    var signinDOM = document.querySelector('#sign-in');
                    var loginDOM = document.querySelector('#log-in');
                    routeTo(signinDOM, loginDOM, 'Login');
                    var name = data.name;
                    var pass = data.pass;
                    auth.Login(name, pass).then(function (data) {
                        var nameDOM = document.querySelector('#log-name');
                        var passDOM = document.querySelector('#log-pass');
                        nameDOM.value = name;
                        passDOM.value = pass;
                        DNote(data);
                        setTimeout(function () {
                            var listDOM = document.querySelector('#list');
                            var loginDOM = document.querySelector('#log-in');
                            routeTo(loginDOM, listDOM, 'List');
                        }, 500);
                    })["catch"](function (err) { console.log(err); });
                }, 1080);
            }
            else {
                val.Signin();
                console.log('Not Doing Anything');
            }
        });
    };
    return Head;
}());
// Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes Classes
// Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key
document.addEventListener("DOMContentLoaded", function () { new Validate().Login(); window.location.hash = ''; });
// Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key Key
// Events Events Events Events Events Events Events Events Events Events Events Events Events Events
var DNote = function (obj) {
    new Notes().getNote(obj.key).then(function (data) {
        new MainUI().displayList(data, obj.email);
        Ai(obj.name);
        Events(obj);
    })["catch"](function (err) { return console.log(err); });
};
var detailDelete = document.querySelector('#delete');
var Events = function (obj) {
    var add = document.querySelector('#add');
    var search = document.querySelector('#search');
    var returnBtn = document.querySelector('#return');
    var body = __spreadArrays(document.querySelectorAll('.body'));
    var listDelete = __spreadArrays(document.querySelectorAll('.delete'));
    var listEdith = __spreadArrays(document.querySelectorAll('.edith'));
    var create = document.querySelector('#create');
    var edith = document.querySelector('#edith');
    var cancel = document.querySelector('#cancel');
    var logOut = document.querySelector('#log-out');
    var newDOM = document.querySelector('#new');
    var listDOM = document.querySelector('#list');
    var edithIndex;
    // To-add event
    add.addEventListener('click', function () {
        create.style.display = 'block';
        edith.style.display = 'none';
        routeTo(listDOM, newDOM, 'Create-List');
    });
    // To-search for a note event
    search.addEventListener('input', function (e) {
        e.preventDefault();
        if (search.value.length === 0) {
            search.style.backgroundColor = "#dcdcdca2";
            new Notes().getNote(obj.key).then(function (data) {
                new MainUI().displayList(data, obj.email);
                Events(obj);
            })["catch"](function (err) { return console.log(err); });
        }
        else {
            search.style.backgroundColor = " #bbbbbbb9";
            new Notes().searchNote(obj.key, search.value).then(function (data) {
                new MainUI().displayList(data, obj.email);
            })["catch"](function (err) { return console.log(err); });
        }
    });
    // To-log out event
    logOut.addEventListener('click', function () {
        var listUi = document.querySelector('.list-ui');
        var navEmail = document.querySelector('#nav-email');
        var loginDOM = document.querySelector('#log-in');
        navEmail.innerHTML = 'Your Email';
        routeBack(listDOM, loginDOM, 'Login');
        window.location.reload();
        listUi.style.display = 'none';
    });
    // To-top event
    document.addEventListener('mousemove', function () {
        var toTop = document.querySelector('#to-top');
        var listUi = document.querySelector('.list-ui');
        var min = listUi.scrollHeight / 5;
        if (listUi.scrollTop <= min) {
            toTop.style.cursor = 'pointer';
            toTop.innerText = '⇣ Down';
            toTop.setAttribute('title', 'To Bottom');
            toTop.addEventListener('click', function () {
                var listUi = document.querySelector('.list-ui');
                listUi.scrollTo(listUi.scrollHeight, listUi.scrollHeight);
            });
        }
        else {
            toTop.innerText = '⇡ Up';
            toTop.style.cursor = 'pointer';
            toTop.setAttribute('title', 'Back To Top');
            toTop.addEventListener('click', function () {
                var listUi = document.querySelector('.list-ui');
                listUi.scrollTo(0, 0);
            });
        }
    });
    // To-cancel new
    cancel.addEventListener('click', function () {
        var newTitle = document.querySelector('#new-title');
        var newBody = document.querySelector('#new-body');
        var info = document.querySelector('#new-info');
        newTitle.value = '';
        newBody.value = '';
        info.innerHTML = '';
        routeBack(newDOM, listDOM, 'List');
    });
    // To-edith Note
    listEdith.forEach(function (e, i) {
        e.addEventListener('click', function () {
            var newTitle = document.querySelector('#new-title');
            var newBody = document.querySelector('#new-body');
            var create = document.querySelector('#create');
            var edith = document.querySelector('#edith');
            var newDOM = document.querySelector('#new');
            var listDOM = document.querySelector('#list');
            create.style.display = 'none';
            edith.style.display = 'block';
            var title = __spreadArrays(document.querySelectorAll('.title'));
            var body = __spreadArrays(document.querySelectorAll('.body'));
            newTitle.value = title[i].innerHTML;
            newBody.value = body[i].innerHTML;
            routeTo(listDOM, newDOM, 'Create-List');
            console.log(i + ' has been clicked');
            edithIndex = i;
            console.log(edithIndex);
        });
    });
    edith.addEventListener('click', function () {
        var info = document.querySelector('#new-info');
        var newTitle = document.querySelector('#new-title');
        var newBody = document.querySelector('#new-body');
        console.log(edithIndex);
        if (newTitle.value === '' || newTitle.value === ' ' || newBody.value === '' || newBody.value === ' ') {
            info.innerHTML = 'Fill The Fileds / Cancel';
        }
        else {
            var newobj = { title: newTitle.value, body: newBody.value };
            new Notes().getNote(obj.key).then(function (data) {
                new MainUI().displayList(data, obj.email);
                Events(obj);
                create.innerText = 'Done';
            })["catch"](function (err) { return console.log(err); });
        }
    });
    // To-create New Notes
    var createNote = function () {
        var newDOM = document.querySelector('#new');
        var newTitle = document.querySelector('#new-title');
        var newBody = document.querySelector('#new-body');
        var info = document.querySelector('#new-info');
        var listDOM = document.querySelector('#list');
        if (newTitle.value === '' || newTitle.value === ' ' || newBody.value === '' || newBody.value === ' ') {
            info.innerHTML = 'Fill The Fileds / Cancel';
        }
        else {
            new Notes().createNote(newTitle.value, newBody.value, obj.key);
            new Notes().getNote(obj.key).then(function (data) {
                new MainUI().displayList(data, obj.email);
                routeBack(newDOM, listDOM, 'List');
                Events(obj);
            })["catch"](function (err) { return console.log(err); });
            newTitle.value = '';
            newBody.value = '';
            info.innerHTML = '';
            newTitle.style.border = 'solid 2px #56d2f8e8';
            newBody.style.border = 'solid 2px #56d2f8e8';
        }
    };
    create.addEventListener('click', function () { createNote(); });
    // To-display details
    body.forEach(function (e, i) {
        e.addEventListener('click', function () {
            var detailDOM = document.querySelector('#detail');
            var time = __spreadArrays(document.querySelectorAll('.time'));
            var detailTime = document.querySelector('#detail-time');
            var title = __spreadArrays(document.querySelectorAll('.title'));
            var detailTitle = document.querySelector('#detail-title');
            var body = __spreadArrays(document.querySelectorAll('.body'));
            var detailBody = document.querySelector('#detail-body');
            detailTime.innerHTML = time[i].innerHTML;
            detailTitle.innerHTML = title[i].innerHTML;
            detailBody.innerHTML = body[i].innerHTML;
            routeTo(listDOM, detailDOM, 'Detail');
        });
    });
    // To-return from detail
    returnBtn.addEventListener('click', function () {
        var detailDOM = document.querySelector('#detail');
        routeBack(detailDOM, listDOM, 'List');
    });
    // To-delete from list
    listDelete.forEach(function (e, i) {
        e.addEventListener('click', function () {
            var card = __spreadArrays(document.querySelectorAll('.card'));
            card[i].style.width = '0px';
            card[i].style.padding = '0px';
            card[i].style.height = '0px';
            setTimeout(function () {
                new Notes().deleteNote(obj.key, i);
                new Notes().getNote(obj.key).then(function (data) {
                    new MainUI().displayList(data, obj.email);
                    Events(obj);
                })["catch"](function (err) { return console.log(err); });
            }, 800);
            var alert = document.querySelector('#alert');
            var msg = document.querySelector('#msg');
            var snBtn = document.querySelector('.sn-btn');
            msg.innerHTML = 'Deleted';
            snBtn.innerHTML = '';
            snBtn.style.padding = '0px';
            alert.style.padding = '8px 15px';
            alert.style.backgroundColor = '#60cc60';
            alert.setAttribute('class', '');
            setTimeout(function () { alert.setAttribute('class', 'alert-hidden'); }, 1500);
            console.log('Deleted');
        });
    });
};
// Events Events Events Events Events Events Events Events Events Events Events Events Events Events
