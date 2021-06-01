
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
  
// $("#sender-m").click(function(){ 
//     $(this).css("background-color","#65ba47");
//     $(this).css("color","white");
//     $(this).css('position','relative');
//     $(this).css('padding-right','10px');


//     $("#sender-id").css("background-color","white");
//     $("#sender-id").css("color","black");
//     $("#sender-id").css('position','unset');

//     $("#sender-id").css('padding-left','50px');

// });
// $("#sender-id").click(function(){ 
//     $(this).css("background-color","#65ba47");
//     $(this).css("color","white");
//     $(this).css('position','relative');
//     // $(this).css('padding-left','50px');
//     $(this).css('padding-left','15px');


//     $("#sender-m").css("background-color","white");
//     $("#sender-m").css("color","black");
//     $("#sender-m").css('position','unset');
//     $("#sender-m").css('padding-right','35px');

// });

$("#sender-mobile").click(function(){ 
    $(this).css("background-color","#65ba47");
    $(this).css("color","white");
    // $(this).css('position','relative');
    // $(this).css('padding-right','10px');


    $("#sender-ID").css("background-color","white");
    $("#sender-ID").css("color","black");
    // $("#sender-id").css('position','unset');

    // $("#sender-id").css('padding-left','50px');

});
$("#sender-ID").click(function(){ 
    $(this).css("background-color","#65ba47");
    $(this).css("color","white");
    // $(this).css('position','relative');
    // $(this).css('padding-left','50px');
    // $(this).css('padding-left','15px');


    $("#sender-mobile").css("background-color","white");
    $("#sender-mobile").css("color","black");
    // $("#sender-m").css('position','unset');
    // $("#sender-m").css('padding-right','35px');

});




function openNav() {

    
    var x = window.matchMedia("(min-width: 360px) and (max-width: 767px)");

    if(x.matches){
        document.getElementById("mySidenav").style.setProperty("height", "auto", "important");
    }else{
        document.getElementById("mySidenav").style.width = "250px";
    }
  }
  
  function closeNav() {
    var x = window.matchMedia("(min-width: 360px) and (max-width: 767px)");

    if(x.matches){
        document.getElementById("mySidenav").style.setProperty("height", "0", "important");
    }else{
        document.getElementById("mySidenav").style.width = "0";
    }
  }

  function openRightNav() {
    document.getElementById("rightSidenav").style.width = "250px";
    document.getElementById("rightSidenav").style.setProperty("padding-left", "10px", "important");
    // document.getElementById("rightSidenav").style.width = "250px";padding-left
  }
    
  function closeRightNav() {
    document.getElementById("rightSidenav").style.width = "0";
    document.getElementById("rightSidenav").style.setProperty("padding-left", "0px", "important");

  }

  function openMobileNav() {

    var x = window.matchMedia("(min-width: 360px)");

    if(x.matches){
        document.getElementById("mySidenav").style.setProperty("height", "auto", "important");
    }else{
        console.log('sdasd');
    }
    // console.log('sdas000d');


    // document.getElementById("mySidenav").style.height = "500px";
  }
  
  function closeMobileNav() {
    document.getElementById("mySidenav").style.setProperty("height", "0", "important");

    // document.getElementById("mySidenav").style.height = "500px";
  }
    
  
  
 
