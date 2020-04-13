$(document).ready(function(){
    
//    Efecto MENU!--------------------
    
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        })
        
        $(this).animate({
            top: '0'
        }, 500 + (index * 500)); 
    })
    
//    Efecto HEADER!------------------
    
    if($(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        })
        
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }
    
//    SCROLL ELEMENTOS MENU! ----
    
//    ACERCA DE-----
    
    var acercaDe = $('#acerca-de').offset().top;
    
    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 630
        }, 500);
    })
    
    
//    MENU DEL DIA-----
    
    var platillos = $('#platillos').offset().top;
    
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1300
        }, 500);
    })
    
//    GALERIA DE FOTOS-----
    
      var galeria = $('#galeria').offset().top;
    
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2050
        }, 500);
    })
    
    //    UBICACIÓN QUIN-CE-----
    
      var ubicacion = $('#ubicacion').offset().top;
    
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2750
        }, 500);
    })
})