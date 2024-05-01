$(document).ready(function() {
    //efectos menú
    $('.nav li').each(function(index,elemento){
        $(this).css ({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        }, 2000 + (index * 500));
    });

    //Scroll elemento de menú
    var contacto =$('#contacto').offset().top;        
    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: contacto -100
        } ,500);
        window.location.href = 'index.html#contacto';

    });
   
});