$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

$(document).ready(function(){
    $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/*document.getElementById('sendMail').addEventListener('click', function(e){
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    e.preventDefault();

    let ele = document.getElementById("contactForm");
    let chk_status = ele.checkValidity();
    ele.reportValidity();

    if (chk_status) {
        $.ajax ({
            url: 'php/mail.php',
            type: 'post',
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(){
                swal("Thank you for your message", "We are aiming to respond as soon we can", "success", {button: "Okay"}).then(function() {
                    location.reload(true);
                });
            }
        });
    }
});*/

function initMap() {
    const sande = { lat: 51.23685, lng: -2.45123 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: sande,
    });
    const marker = new google.maps.Marker({
      position: sande,
      map: map,
    });
}
