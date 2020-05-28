$(function () {
    //click submit button
    $("#submit").on("click", function (event) {
        //prevent default on submit event
        event.preventDefault();

        //get burger name from user input
        const burgerName = { burgerName: $("#burgerName").val() };

        //send post request
        $.ajax("/api/burger", {
            type: "POST",
            data: burgerName
        }).then(function () {
            //reload page after receive response
            location.reload();
        });
    });

    $(".devoureIt").on("click", function (event) {
        //prevent default on submit event
        event.preventDefault();

        //get burger id from attribute 'burgerId'
        const burgerId = { burgerId: $(this).attr("burgerId") };

        //send put request
        $.ajax("/api/burger", {
            type: "PUT",
            data: burgerId
        }).then(function () {
            //reload page after receive response
            location.reload();
        });
    });
});