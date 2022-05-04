$("#login").on("click", function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        datatype: "json",
        url: "https://api-kiriki.herokuapp.com/api/login_check",
        data: ({
            username: $('#username').val(),
            password: $('#password').val()
        }),
        success: function (json) {
            console.log(json);
            // Save token
            // Clear form
            // Redirect
        },
        error: function (result) {
            // Show error message
            console.log(result);
        }
    });
    return false;
});