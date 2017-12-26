// header-fixed
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.navbar-default').addClass("header-fixed");
    }
    else{
    $('.navbar-default').removeClass("header-fixed");
    }
    });


// map
function initMap() {
    var uluru = {lat: 49.068418, lng: 33.413098};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }


// animate content-text
  setTimeout(function(){
    $(".text-lash").addClass("enter-down-bounce");
   },1000);


$(window).scroll(function() {
    if ($(this).scrollTop() > 250){
    $('.content-text').addClass("flip-right");
    }
    else{
    $('.content-text').removeClass("flip-right");
    }
    });

$(window).scroll(function() {
    if ($(this).scrollTop() > 650){
    $('.content-text-1').addClass("flip-left");
    }
    else{
    $('.content-text-1').removeClass("flip-left");
    }
    });

///////////////////////////////////////

    $(window).scroll(function() {
        if ($(this).scrollTop() > 250){
        $('.content-img').addClass("enter-up-bounce");
        }
        else{
        $('.content-img').removeClass("enter-up-bounce");
        }
        });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 650){
        $('.content-img-1').addClass("enter-up-bounce");
        }
        else{
        $('.content-img-1').removeClass("enter-up-bounce");
        }
        }); 
        
        // animate-price
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1000){
            $('.h2').addClass("flip-bottom");
            }
            else{
            $('.h2').removeClass("flip-bottom");
            }
            }); 
           

 ////////////////////////////////////////////
//  service-box-info
    $( "#button-service-info-classic" ).click(function() {
    $( ".classic" ).fadeIn('slow').show("normal")
    });
    $( ".fa-times" ).click(function() {
        $( ".classic" ).fadeOut('slow').hide("normal")
        });
     
        
    $( "#button-service-info-size" ).click(function() {
        $( ".size" ).fadeIn('slow').show("normal")
        });
        $( ".fa-times" ).click(function() {
        $( ".size" ).fadeOut('slow').hide("normal")
        }); 
        
        
    $( "#button-service-info-botox" ).click(function() {
        $( ".botox" ).fadeIn('slow').show("normal")
        });
        $( ".fa-times" ).click(function() {
        $( ".botox" ).fadeOut('slow').hide("normal")
        });   
        
    $( "#button-service-info-eyebrows" ).click(function() {
        $( ".eyebrows" ).fadeIn('slow').show("normal")
        });
        $( ".fa-times" ).click(function() {
        $( ".eyebrows" ).fadeOut('slow').hide("normal")
        });     


        // training js
        $(window).scroll(function() {
            if ($(this).scrollTop() > 250){
            $('.training-entry').addClass("enter-right-bounce");
            }
            else{
            $('.training-entry').removeClass("enter-right-bounce");
            }
            });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 610){
            $('.text-training').addClass("flip-bottom");
            }
            else{
            $('.text-training').removeClass("flip-bottom");
            }
            });    

        $(window).scroll(function() {
            if ($(this).scrollTop() > 1200){
            $('#test').addClass("flip-bottom");
            }
            else{
            $('#test').removeClass("flip-bottom");
            }
            });  

        $(window).scroll(function() {
            if ($(this).scrollTop() > 1900){
            $('.h2').addClass("flip-bottom");
            }
            else{
            $('.h2').removeClass("flip-bottom");
            }
            });           
        
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
            // letter
            let spans = document.querySelectorAll('.word span');
            spans.forEach((span, idx) => {
                span.addEventListener('click', (e) => {
                    e.target.classList.add('active');
                });
                span.addEventListener('animationend', (e) => {
                    e.target.classList.remove('active');
                });
                
                // Initial animation
                setTimeout(() => {
                    span.classList.add('active');
                }, 750 * (idx+1))
            });
// ------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// about-js
$(window).scroll(function() {
    if ($(this).scrollTop() > 200){
    $('#about_img-1').addClass("flip-left");
    }
    else{
    $('#about_img-1').removeClass("flip-left");
    }
    }); 
$(window).scroll(function() {
    if ($(this).scrollTop() > 500){
    $('#about_img-2').addClass("flip-right");
    }
    else{
    $('#about_img-2').removeClass("flip-right");
    }
    });  
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000){
    $('#about_img-3').addClass("flip-left");
    }
    else{
    $('#about_img-3').removeClass("flip-left");
    }
    });    
$(window).scroll(function() {
    if ($(this).scrollTop() > 250){
    $('#about_text-1').addClass("rotate-flip");
    }
    else{
    $('#about_text-1').removeClass("rotate-flip");
    }
    });       
$(window).scroll(function() {
    if ($(this).scrollTop() > 550){
    $('#about_text-2').addClass("rotate-flip");
    }
    else{
    $('#about_text-2').removeClass("rotate-flip");
    }
    }); 
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000){
    $('#about_text-3').addClass("rotate-flip");
    }
    else{
    $('#about_text-3').removeClass("rotate-flip");
    }
    });            

    // -------------------------------------------------------
    // ------------------------------------------------------
    // --------------------------------------------------------

    // contact.js
    $(document).ready(function(){
        $('.frame').click(function(){
            $('.top').addClass('open');
            $('.message').addClass('pull');
        })
    });