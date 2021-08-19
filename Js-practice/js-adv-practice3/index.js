$("#main").css({border: "1px solid grey"}).append("<p>Fourth</p>");
$("p").css({color: "red"})
$("<span> item</span>").appendTo("p");
$("p:nth-child(2)").css({color: "orange"})



$(document.createElement('btn')).css({color: "white", backgroundColor: "red"}).html("hide text").click(function (e) {
    $("p").hide()
}).appendTo("#main")