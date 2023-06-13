function Validator(options) {
    var formElement = document.querySelector(options.form)

    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)

            if (inputElement) {
                inputElement.onblur = function () {

                    var erroMessage = rule.test(inputElement.value)
                    console.log(erroMessage);


                }
            }
        })

    }

}


/*Rules*/


Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập Email';
        }
    }

}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    }

}


Validator.isComfirm = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    }

}
