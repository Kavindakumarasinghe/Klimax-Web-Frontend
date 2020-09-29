
   $(document).ready(function(){
       $('.customer-logos').slick({
           slidesToShow:4,
           slidesToScroll:1,
           autoplay:true,
           autoplaySpeed:1500,
           arrows:false,
           pauseOnHover:true

       });

       var scrolllink =$('.scroll');
       scrolllink.click(function(e){
           e.preventDefault();

           $('body,html').animate({
               scrollTop:$(this.hash).offset().top
           }, 1500)
       })

   });


