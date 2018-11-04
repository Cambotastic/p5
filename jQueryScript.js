$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
    $("#p1").mouseenter(function () {
        alert("You entered p1!");
    });
    $("#p1").mouseleave(function () {
        alert("Bye! You now leave p1!");
    });
    $("input").focus(function () {
        $(this).css("background-color", "#aquamarine");
    });
    $("input").blur(function () {
        $(this).css("background-color", "#orange");
    });
    $("h2").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });
    $("button").dblclick(function () {
        $(".panel-footer").hide();
        // the . means class
    });
    $("button").click(function () {
        $(".panel-footer").show();
    });
});