$(document).ready(function () {
    $("li").each(function (index) {
         var nodeli=$(this);
       $(this).mouseover(function () {
           var time=setTimeout(function () {
               $("div.show-box").removeClass("show-box");
               $(".tab li.show-li").removeClass("show-li");
               $("div").eq(index).addClass("show-box");
               nodeli.addClass("show-li");
           },300)
       });
    })
});