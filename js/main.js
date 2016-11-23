 $(document).ready(function() {
     
    $("html").niceScroll({background:"#020202", cursorcolor:"#ffba02", cursorwidth:"8px", cursorborder:"1px solid #ffba02"});
     
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
    });


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$("#fileRequest").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.location = 'CV.pdf';
});

function LoadingFade(){
    $("#loading-page").fadeOut(600);
}

setTimeout(function(){ 
    LoadingFade();
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('intro').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('cv').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('web-design').style.display = 'block';
    document.getElementById('video-design').style.display = 'block';
}, 3000);

$(window).resize(function(){
 if($(window).width()<1025){
     $('#animation').attr('disabled', 'disabled');
 }
});

setInterval(function(){ 
    if($(window).width()<1025){
     $('#animation').attr('disabled', 'disabled');
 }
}, 100);


lightbox.option({
  'wrapAround': false,
    'showImageNumberLabel': false
})

var iframe = document.getElementById('mtv');
var iframe2 = document.getElementById('prison-break');
var iframe3 = document.getElementById('showreel');
$(".closeButton").click(function(){
    iframe.src = iframe.src;
});

$(".closeButton2").click(function(){
    iframe2.src = iframe2.src;
});

$(".closeButton3").click(function(){
    iframe3.src = iframe3.src;
});