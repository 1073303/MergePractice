window.onload = function(){
    //document.write("Hello JavaScript");

    
};
/************************************************************/
// $(function(){
//     $("input").on("click",function(){
//         alert("Hi");
//     });
// });
/**********************************************************/
// $(function(){
//     $("input").on("click",function(){
//         //alert("Hi");
//         $("h1").text("Hello");
//     });
// });

/********************************************************************/

// $(function(){
//     $("input").on("click",function(){
//         //alert("Hi");
//         $("h1").text($("li:first").text());
//     });
//  });

// $(function(){
//     $("input").on("click",function(){
//         //alert("Hi");
//         $("h1").text($("li:last").text());
//     });
// });

// $(function(){
//     $("input").on("click",function(){
//         //alert("Hi");
//         $("h1").text($("li").eq(1).text());
//     });
// });

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());        
        
        var foodimg = document.createElement("food");
        switch (randomChildNumber){
            case 0:
                foodimg.src="拉麵.jpg";
                foodimg.id ="food"
                var img_id=document.getElementById('img_id');
                img_id.appendChild(foodimg)
                break;
            case 1:
                foodimg.src="滷肉飯.jpg";
                foodimg.id ="food"
                var img_id=document.getElementById('img_id');
                img_id.appendChild(foodimg)
                break;
            case 2:
                foodimg.src="水餃.jpg";
                foodimg.id ="food"
                var img_id=document.getElementById('img_id');
                img_id.appendChild(foodimg)     
                break;       
        }
    });
});