//jquery
var $displayIcon = $(".icon-error");
var $displayError = $(".error-message");

function validateEmail(email) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}

$('#btn_Validate_email').on('click', function() {
    var txt_value = $('#txt_email').val();
    if (validateEmail(txt_value) === true) {
        $('#message').text("Email is Valid");
        $('#message').css("color", "Green");
    } else {
        $displayIcon.css("display", "block");
        $displayError.css("display", "block");
    }
});