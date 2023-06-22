
function register_form() {
    window.location.href = "signup.html"
}

function login_form() {

    window.location.href = "test.html"


}






function Validator(options) {
    var selectorRules = {};

    //ham thuc hien Validate//
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var erroMessage;

        //lay cac rule cua selevtor
        var rules = selectorRules[rule.selector];

        //lap qua tung rule (kiemtra)
        //neu co loi -> dung kiem tra
        for (var i = 0; i < rules.length; i++) {
            erroMessage = rules[i](inputElement.value);
            if (erroMessage) break;
        }


        if (erroMessage) {
            errorElement.innerText = erroMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }

    }
    //thuc hien lay Element//
    var formElement = document.querySelector(options.form)

    if (formElement) {
        options.rules.forEach(function (rule) {
            //save rule in each input

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }


            var inputElement = formElement.querySelector(rule.selector)

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule)


                }

                //truong hop nguoi dung nhap input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message')

                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')

                }

            }
        });


    }

}


/*Rules*/

Validator.isrequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';



        }
    }

}

Validator.isName = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[a-zA-Z ]+$/;

            return regex.test(value) ? undefined : message || 'Vui lòng nhập tên của bạn';



        }
    }

}

Validator.minName = function (selector, min,) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Tên chứa ít nhất ${min} kí tự`

        }
    }

}
Validator.isConfirmEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {

            return value ? undefined : 'Vui lòng nhập email';



        }
    }

}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {

            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng Email'
        }
    }

}

// Validator.isRequired = function (selector) {
//     return {
//         selector: selector,
//         test: function (value) {
//             return value ? underfind : 'vui long nhap mat khau'
//         }
//     }

// }



Validator.minlength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập ${min} kí tự`

        }
    }

}
Validator.isConfirmPWD = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Gía trị nhập vào không chính xác'

        }
    }
}