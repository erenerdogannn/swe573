/**
 * Created by Eren Erdogan on 06/11/14.
 */

// Remove Page Load Transition Effect. At the Beggining stop CSS Transactions
$(window).load(function() {
    $("body").removeClass("preload");
});

//Dropdown slider
$(function(){
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().not('.not-slide').stop(true, true).slideDown(180);
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().not('.not-slide').stop(true, true).slideUp(180);
    });

    $('.dropdown-menu.not-close').click(function(e) {
        e.stopPropagation();
    });
});



//--------------------------------------------//
//-------------------- SIDEBAR JS ----------------//
//--------------------------------------------//

//-------------------- SIDEBAR END--------------//
//--------------------------------------------//


//--------------------------------------------//
//----------------- SCREEN ZOOM -------------//
//--------------------------------------------//

$(function() {
    $('#headerup').on('click', function(){
        if ($('.panel-header').hasClass('hided')) {
            $('.panel-header').animate({marginTop: '0px'},600 ).removeClass('hided');
            $('.panel-content-wrapper').animate({paddingTop: '70px'}, 600);

        } else {
            $('.panel-header').animate({marginTop: '-70px'},600 ).addClass('hided');
            $('.panel-content-wrapper').animate({paddingTop: '0px'}, 600);
        }
    });


    $('#sideleft').on('click', function(){
        if ($('.panel-sidebar-hide-wrapper').hasClass('hided')) {
            $('.panel-sidebar-hide-wrapper').animate({marginLeft: '0px'},600 ).removeClass('hided');
            $('.panel-content-wrapper').animate({paddingLeft: '160px'}, 600);
        } else {
            $('.panel-sidebar-hide-wrapper').animate({marginLeft: '-160px'},600 ).addClass('hided');
            $('.panel-content-wrapper').animate({paddingLeft: '0px'}, 600);
        }
    });
});
//--------------- SCREEN ZOOM END ------------//
//--------------------------------------------//


//--------------------------------------------//
//--------------SIGN FORMS--------------------//
//--------------------------------------------//

//Validate Sign In Form
//---------------------------------------------
function validateSignInForm() {

    var email = document.getElementById("signin-email").value;
    var password = document.getElementById("signin-password").value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    
    if (document.cookie.length > 0 && document.cookie.indexOf('ail')>0) {
    var cookieemail = document.cookie.split(';')[0].split('=')[1];
    var cookiepassword = document.cookie.split(';')[1].split('=')[1];
    }

    if (email==null || email=="") {

        $('#signin-form .form-error').parent().css('display', 'block');
        $('#signin-form .form-error').html('Mail alanı doldurulmalıdır');
        $('#signin-email').addClass('error');
        return false;

    };

    if (password==null || password=="") {

        $('#signin-form .form-error').parent().css('display', 'block');
        $('#signin-form .form-error').html('Şifre alanı boş bırakılamaz');
        $('#signin-password').addClass('error');
        return false;

    };

    if (password.length < 6) {

        $('#signin-form .form-error').parent().css('display', 'block');
        $('#signin-form .form-error').html('Şifre min. 6 karakter olabilir');
        $('#signin-password').addClass('error');
        return false;

    };

    if (password.length > 32) {

        $('#signin-form .form-error').parent().css('display', 'block');
        $('#signin-form .form-error').html('Şifre max. 32 karakter olabilir');
        $('#signin-password').addClass('error');
        return false;

    };

    if (atposition< 1 || dotposition<atposition+2 || dotposition+2>=email.length) {
        $('#signin-form .form-error').parent().css('display', 'block');
        $('#signin-form .form-error').html('Geçersiz mail adresi');
        $('#signin-email').addClass('error');
        return false;
    };
    
    if (email == "admin@admin.com" && password == "123456")  {
        window.location.pathname = "/panel/volunteer.html";
        return false;
    } else if (email == cookieemail && password == cookiepassword ){
        window.location.pathname = "/panel/volunteer.html";
        return false;
    } else {
        $('#signin-form .form-error').parent().css('display', 'block');
        $('#signin-form .form-error').html('Kullanıcı kayıtlı bulunmamaktadır');
        return false;
    }

}

//Validate Sign Up Form
//---------------------------------------------
function validateSignUpForm() {
    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confPassword = document.getElementById("signup-confirm-password").value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    var term =  document.getElementById("term-checkbox");
    

    if (name==null || name=="") {

        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html('İsim doldurulmalı');
        $('#signup-name').addClass('error');
        return false;

    };

    if (email==null || email=="") {

        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html('Mail doldurulmalı');
        $('#signup-email').addClass('error');
        return false;

    };

    if (atposition< 1 || dotposition<atposition+2 || dotposition+2>=email.length) {
        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html('Geçersiz mail adresi');
        $('#signup-email').addClass('error');
        return false;
    };

    if (password==null || password=="") {

        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html('şifre doldurulmalı');
        $('#signup-password').addClass('error');
        return false;

    };

    if (confPassword==null || confPassword=="") {

        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html('Şifreyi onayla doldurulmalı');
        $('#signup-password').addClass('error');
        return false;

    };

    if (password.length < 6) {

        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html('Şifre en az 6 karakter olmalıdır');
        $('#signup-password').addClass('error');
        return false;

    };

    if (password.length > 32) {

        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html('Şifre en fazla 32 karakter olmalıdır');
        $('#signup-password').addClass('error');
        return false;

    };


    if (password !== confPassword) {
        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html("Şifre ve Tekrar şifre bölümleri farklıdır");
        $('#signup-confirm-password').addClass('error');
        return false;
    }

    // Term checkbox check
    if (term.checked == false) {
        $('#signup-form .form-error').parent().css('display', 'block');
        $('#signup-form .form-error').html("Üyelik koşullarını onaylamalısınız");
        return false;
    }
    
   
    document.cookie="mail=" + email + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";
    document.cookie="password=" + password + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";
    
    window.location.pathname = "/panel/volunteer.html";
    return false;
}

//Send Recovery mail page
function validateSendReset() {
    var email = document.getElementById("forgot-password-email").value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");


    if (email==null || email=="") {
        $('#forgot-password-form .form-error').parent().css('display', 'block');
        $('#forgot-password-form .form-error').html('Mail must be filled out');
        $('#signup-email').addClass('error');
        return false;

    };

    if (atposition< 1 || dotposition<atposition+2 || dotposition+2>=email.length) {
        $('#forgot-password-form .form-error').parent().css('display', 'block');
        $('#forgot-password-form .form-error').html('Invalid Mail adress');
        $('#signup-email').addClass('error');
        return false;
    };
}

//Forget Change Password
function validateNewPass() {
    var password = document.getElementById("forgot-change-password").value;
    var confPassword = document.getElementById("forgot-change-confirm-password").value;

    if (password==null || password=="") {

        $('#forgot-change-form .form-error').parent().css('display', 'block');
        $('#forgot-change-form .form-error').html('Password must be filled out');
        $('#forgot-change-password').addClass('error');
        return false;

    };

    if (confPassword==null || confPassword=="") {

        $('#forgot-change-form .form-error').parent().css('display', 'block');
        $('#forgot-change-form .form-error').html('Confirm Password must be filled out');
        $('#forgot-change-password').addClass('error');
        return false;

    };

    if (password.length < 6) {

        $('#forgot-change-form .form-error').parent().css('display', 'block');
        $('#forgot-change-form .form-error').html('Password should be min. 6 character');
        $('#forgot-change-password').addClass('error');
        return false;

    };

    if (password.length > 32) {

        $('#forgot-change-form .form-error').parent().css('display', 'block');
        $('#forgot-change-form .form-error').html('Password should be max. 32 character');
        $('#forgot-change-password').addClass('error');
        return false;

    };


    if (password !== confPassword) {
        $('#forgot-change-form .form-error').parent().css('display', 'block');
        $('#forgot-change-form .form-error').html("Password and Confirm Password doesn't match");
        $('#forgot-change-confirm-password').addClass('error');
        return false;
    }
}

$('#sign-out-btn').on('click', function() {
    
    window.location.pathname = "/main/index.html";
    
});

//Sign Up Form Key Up Events For Validation of password length
//---------------------------------------------
$('#signup-password').keyup(function() {

    var signUpPassword = document.getElementById('signup-password').value;

    if (signUpPassword.length >= 6) {

        $(this).siblings('.form-sub-info').addClass('success');

    } else if (signUpPassword.length < 6) {

        $(this).siblings('.form-sub-info').removeClass('success');

    }

});

//Forgot Change Password password length validation
$('#forgot-change-password').keyup(function() {

    var signUpPassword = document.getElementById('forgot-change-password').value;

    if (signUpPassword.length >= 6) {

        $(this).siblings('.form-sub-info').addClass('success');

    } else if (signUpPassword.length < 6) {

        $(this).siblings('.form-sub-info').removeClass('success');

    }

});

//--------------SIGN FORMS JS END--------------//
//--------------------------------------------//

//--------------------------------------------//
//------------------ LOADINGS ----------------//
//--------------------------------------------//

function showLoading() {
    $('.loading-overlay').addClass('active').show();
}

function hideLoading() {
    $('.loading-overlay').removeClass('active').hide();

}
//---------------- END LOADINGS --------------//
//--------------------------------------------//


//Forget Change Password
function validateSubmitContact() {
    var name = document.getElementById("contact-name").value;
    var mail = document.getElementById("contact-mail").value;
    var subject = document.getElementById("contact-subject").value;
    var message = document.getElementById("contact-message").value;



    if (name==null || name=="") {
        $('#contact-modal .modal-body .form-error').parent().css('display', 'block');
        $('#contact-modal .modal-body .form-error').html("Name must be filled out");
        $('#contact-name').addClass('error');
        return false;
    } 

    if (mail==null || mail=="") {
        $('#contact-modal .modal-body .form-error').parent().css('display', 'block');
        $('#contact-modal .modal-body .form-error').html("Email must be filled out");
        $('#contact-mail').addClass('error');
        return false;
    }

    if (subject==null || subject=="") {
        $('#contact-modal .modal-body .form-error').parent().css('display', 'block');
        $('#contact-modal .modal-body .form-error').html("Subject must be filled out");
        $('#contact-subject').addClass('error');
        return false;
    }

    if (message==null || message=="") {
        $('#contact-modal .modal-body .form-error').parent().css('display', 'block');
        $('#contact-modal .modal-body .form-error').html("Contact message must be filled out");
        $('#contact-message').addClass('error');
        return false;
    }

}





/*
//--------------------------------------------//
//-------------- PANEL DATA TABLE ------------//
//--------------------------------------------//
$(document).ready(function() {

    $('.table').each(function() {
        return $(".table #checkAll").click(function() {
            if ($(".table #checkAll").is(":checked")) {
                return $(".table input[type=checkbox]").each(function() {
                    $(this).parents('.clickable-row').addClass('selected');
                    return $(this).prop("checked", true);
                });
            } else {
                return $(".table input[type=checkbox]").each(function() {
                    $(this).parents('.clickable-row').removeClass('selected');
                    return $(this).prop("checked", false);
                });
            }
        });
    });
});

// Clickable Rows
jQuery(document).ready(function($) {
    $(".clickable-row td:not(.check)").click(function() {
        if($(this).parent('.clickable-row').attr("href"))
            window.document.location = $(this).parent('.clickable-row').attr("href");
        else
            return;
    });

});

//  Row Shadowing During Hover
$(function() {
    $(".clickable-row").mouseenter(function(){
        $(this).css('background-color', 'rgba(28, 153, 232, 0.1)');
    });
    $(".clickable-row").mouseleave(function(){
        $(this).css('background-color', '');
    });
});
$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(this).parents(".clickable-row").addClass('selected');
        }
        else if($(this).prop("checked") == false){
            $(this).parents(".clickable-row").removeClass('selected')
        }
    });
});



//----------- PANEL DATA TABLE END -----------//
//--------------------------------------------//


//--------------------------------------------//
//--------------- PANEL SETTINGS -------------//
//--------------------------------------------//
function validateAddMember() {

    var email = document.getElementById("add-member-mail").value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (email==null || email=="") {
        $('#add-member-mail').addClass('error');
        return false;

    };

    if (atposition< 1 || dotposition<atposition+2 || dotposition+2>=email.length) {
        $('#add-member-mail').addClass('error');
        return false;
    };

}

//------------ PANEL SETTINGS  ENDS-----------//
//--------------------------------------------//

*/
//--------------------------------------------//
//--------------- PANEL PROJECT -------------//
//--------------------------------------------//


function validateAddProject() {

    var prjname = document.getElementById("project-name").value;

    if (prjname==null || prjname=="") {
        $('#project-name').addClass('error');
        $('#project-name').parents(".modal-body").children(".modal-message-holder").css('display', 'block');
        $('#project-name').parents(".modal-body").children(".modal-message-holder").children(".form-error").html('Project name cannot be empty');
        return false;

    };

    if (4 > prjname.length || prjname.length > 32) {
        $('#project-name').addClass('error');
        $('#project-name').parents(".modal-body").children(".modal-message-holder").css('display', 'block');
        $('#project-name').parents(".modal-body").children(".modal-message-holder").children(".form-error").html('Project Name should be between 4 and 32 character');
        return false;
    };

}

$('#project-name').keyup(function() {

    var projectname = document.getElementById('project-name').value;

    if (projectname.length >= 4 && projectname.length <= 32) {

        $(this).siblings('.form-sub-info').addClass('success');

    } else if (projectname.length > 32) {

        $(this).siblings('.form-sub-info').removeClass('success');

    } else {
        $(this).siblings('.form-sub-info').removeClass('success');
    }

});

//------------ PANEL PROJECT END ----------//
//--------------------------------------------//

//--------------------------------------------//
//--------------- PANEL DOMAIN -------------//
//--------------------------------------------//


function validateAddDomain() {
    var prjname = document.getElementById("domain-name").value;

    if (prjname==null || prjname=="") {
        $('#domain-name').addClass('error');
        $('#domain-name').parents(".modal-body").children(".modal-message-holder").css('display', 'block');
        $('#domain-name').parents(".modal-body").children(".modal-message-holder").children(".form-error").html('Project name cannot be empty');
        return false;

    };

}


//------------ PANEL PROJECT END ----------//
//--------------------------------------------//




//--------------------------------------------//
//------------ PANEL TABLE FILTERS -----------//
//--------------------------------------------//
$(function(){
    $('#filter-open-button').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('minimized')) {

            $('#filter-drawer').animate({height: '540px'}, 450).css('display' , 'block');
            $(this).removeClass('minimized');
            $('.table-filter-drawer').addClass('active');
            $('.table-filter-drawer-holder').addClass('in-active');
            $('#filter-on-off-situation').addClass('on').removeClass('off');
            document.getElementById('filter-open-button').innerHTML='Deactivate Filters';

        } else {

            $('#filter-drawer').animate({height: '0px'}, 450);
            setTimeout(function(){ $("#filter-drawer").css("display", "none"); },450);
            $(this).addClass('minimized');
            $('.table-filter-drawer').removeClass('active');
            $('.table-filter-drawer-holder').removeClass('in-active');
            $('#filter-on-off-situation').addClass('off').removeClass('on');
            document.getElementById('filter-open-button').innerHTML='Activate Filters';
        }
    })
});

$(function(){
    $('.table-filter-drawer-item').on('click', '.onoffswitch-checkbox', function(){
        console.log(this);
        if(this.checked ) {
            var id = this.id;
            $(this).parents('.table-filter-drawer-item').children('.filter-name-dropdown-holder').addClass('active');

        } else {
            $(this).parents('.table-filter-drawer-item').children('.filter-name-dropdown-holder').removeClass('active');
        }
    })
});


//---------- PANEL TABLE FILTERS END ---------//
//--------------------------------------------//



//--------------------------------------------//
//------- CAMPAIGN ROTATION ON OFF END -------//
//--------------------------------------------//

$(function(){
    $('.rotation-opts-holder').on('click', '.onoffswitch-checkbox', function(){
        if(this.checked ) {
            $(this).parents('.rotation-opts-holder').addClass('active');

        } else {
            $(this).parents('.rotation-opts-holder').removeClass('active');
        }
    })
});


//------- CAMPAIGN ROTATION ON OFF END -------//
//--------------------------------------------//


//--------------------------------------------//
//------------------ TOOLTIP -----------------//
//--------------------------------------------//

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
    $('[data-toggle="popover"]').popover()
});

$('.info-button').on('click', function(e) { e.preventDefault(); return true;});

$('.panel-wrapper').on('click','.info-button', function(e) { e.preventDefault(); return true;});

$(".panel-wrapper").bind("DOMSubtreeModified", function() {
    $('.info-button').popover();
});

//---------------- TOOLTIP END ---------------//
//--------------------------------------------//



/*
//--------------------------------------------//
//---------------- PANEL PLATFORM ------------//
//--------------------------------------------//

$(function() {
    $('.panel-platform-dropdown').multipleSelect();
});

//------------ PANEL PLATFORM ENDS ------------//
//--------------------------------------------//




*/
