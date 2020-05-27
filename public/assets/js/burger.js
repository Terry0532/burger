$("#submit").on("click", function (event) {
    event.preventDefault();

    const burgerName = { burgerName: $("#burgerName").val() };
    console.log("burgerName");

    $.ajax("/api/burger", {
        type: "POST",
        data: burgerName
    }).then(function () {
        location.reload();
        console.log(burgerName);
    })
})