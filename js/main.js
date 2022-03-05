$(function(){

  // $("img").click(function(){
  //   let img_tag = "<img src='"+$(this).attr('src')+"' />";  

  //   lity(img_tag);
  // });

  $("img").click(function(){
    let messsage = $(this).attr('data-lity-message');
  
    let img_tag = "<img src='"+$(this).attr('src')+"' />";  
    let message_tag = "<p style='color:white;font-size:2em;'>"+messsage+"</p>";
  
    if (messsage !== undefined && messsage !== null && messsage !== ""){
      lity(img_tag + message_tag);
    } else {
      lity(img_tag);
    }
  });

});// /jquery