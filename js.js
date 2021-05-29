
// var qnum = 0 ;

// function GetQuestionNumper() {

//     var questinoNumber = document.getElementsByClassName("question")[0].id;

//     qnum = questinoNumber;
//     var number=document.getElementById(qnum).classList.add('show');  

// }

// $(document).ready(function() {
//   $('#show-hidden-menu').click(function() {
//     $('.hidden-menu').slideToggle("slow");
//     // Alternative animation for example
//     // slideToggle("fast");
//   });
// });


// $(document).ready(function() {
//     $('#sender-m').click(function() {
//         document.getElementById("#sender-m").style.background='#000000';
//     });
//   });
  
$("#sender-m").click(function(){ 
    $(this).css("background-color","#65ba47");
    $(this).css("color","white");
    $(this).css('position','relative');
    $(this).css('padding-right','10px');


    $("#sender-id").css("background-color","white");
    $("#sender-id").css("color","black");
    $("#sender-id").css('position','unset');

    $("#sender-id").css('padding-left','50px');

});
$("#sender-id").click(function(){ 
    $(this).css("background-color","#65ba47");
    $(this).css("color","white");
    $(this).css('position','relative');
    // $(this).css('padding-left','50px');
    $(this).css('padding-left','15px');


    $("#sender-m").css("background-color","white");
    $("#sender-m").css("color","black");
    $("#sender-m").css('position','unset');
    $("#sender-m").css('padding-right','35px');


});





 