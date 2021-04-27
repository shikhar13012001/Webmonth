var flip=["https://instagram.flko6-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/172299140_613488356275846_3730183544406942097_n.jpg?tp=1&_nc_ht=instagram.flko6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=7i5-GuRrAeUAX_6rFbj&edm=AP_V10EAAAAA&ccb=7-4&oh=1a3911e09f8df7960bb496b24e67968b&oe=60A24ACD&_nc_sid=4f375e","https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?cs=srgb&dl=pexels-junior-teixeira-2047905.jpg&fm=jpg","https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?cs=srgb&dl=pexels-tranmautritam-285814.jpg&fm=jpg","https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?cs=srgb&dl=pexels-lisa-1161547.jpg&fm=jpg","https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?cs=srgb&dl=pexels-sharon-mccutcheon-1209843.jpg&fm=jpg"];
 
  function swap() {
console.log("successfull flip");
    // increase the 500 to larger values to lengthen the duration of the fadeout 
       // and/or fadein
       var random=Math.floor(Math.random()*5);
    $('.logo').fadeOut(500, function() {
        $('.logo').attr("src",flip[random]);
        $('.logo').fadeIn(500);
    });

}
setInterval(swap,3000);

