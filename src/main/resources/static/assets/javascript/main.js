/**
 * Created by Eren Erdogan on 06/05/16.
 */

var urlRoot = "http://localhost:8080";

$(document).ready(function(){    
    
    if (document.cookie.indexOf('panelRol=') > -1) {
            var isSigned = document.cookie.split('panelRol=')[1].split(';')[0];
    }
    
    if (isSigned != "member" && isSigned != "volunteer" && isSigned != "admin") {
        $('.isSignedBtn').hide();
        
    } else{
        $('.isNotSignedBtn').hide();
    }
    
    if(isSigned != "admin") {
        $('.admin-sidebar').hide();
        
        if(isSigned != "volunteer") {
            $('.volunteer-sidebar').hide();
        } else {}
        
    } else {}
})


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
    
    jQuery.ajaxSetup({async:false});
        
    var email = document.getElementById("signin-email").value;
    var password = document.getElementById("signin-password").value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    
    if (document.cookie.length > 0 && document.cookie.indexOf('mail')>-1) {
        var cookieemail = document.cookie.split('mail=')[1].split(';')[0];
        var cookiepassword = document.cookie.split('password=')[1].split(';')[0];
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
    
    if (email == "admin@unikoop.com" && password == "123456")  {
        
        document.cookie="name=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="mail=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="password=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="role=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="panelRol=admin";
        window.location.pathname = "volunteer.html";
        return false;
        
    } else if (email == "gonullu@unikoop.com" && password == "123456"){
        
        document.cookie="name=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="mail=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="password=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="role=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
        document.cookie="panelRol=volunteer";
        window.location.pathname = "volunteer.html";
        return false;
        
    } else if (userMails.indexOf(email) > -1 && userPasswords.indexOf(password)  > -1){
        
        var userId = userMails.indexOf(email) + 1;
        
        $.getJSON( urlRoot + "/users/" + userId, 
            function (data) {
                console.log(data);
                document.cookie="uid=" + data.id + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";
                document.cookie="name=" + data.name + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";
                document.cookie="mail=" + data.email + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";
                document.cookie="password=" + data.password + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";
                document.cookie="role=" + data.userType + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";
                document.cookie="panelRol=" + data.userType + ";";                
            }
        )
        
        window.location.pathname = "volunteer.html";
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
    
    jQuery.ajaxSetup({async:false});
    
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
    
    var userName = $('#signup-name').val();
    var userEmail = $('#signup-email').val();
    var userPassword = $('#signup-password').val();
    
    
    $.ajax({
        headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
        },
        type: "POST",
        url: urlRoot + "/users/add",

        data: JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword,
            userType: "member"
        }),
        dataType:"json",
        success: function (html) {
            console.log('Kullanıcı başarıyla kaydedildi.');
        }
    });    
    
    window.location.pathname = "signin.html";
    return false;
}

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


//Sign Out Button
//---------------------------------------------


$('#sign-out-btn').on('click', function() {
    
    document.cookie="uid=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
    document.cookie="name=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
    document.cookie="mail=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
    document.cookie="password=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
    document.cookie="role=; expires=Thu, 18 Dec 2016 12:00:00 UTC";
    document.cookie= "panelRol=;";
    window.location.pathname = "index.html";

    
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




//--------------------------------------------//
//--------- ADD PROD PRODUCER PLATFORM -------//
//--------------------------------------------//

    var selectedValue = $('#product-ispackaged').val();
    
    
     function getVal(sel) {
       selectedValue = sel.value;
         
         if(selectedValue == "no") {
             $('.product-package-size-container').addClass('noshow');
             $('.product-num-package-container').addClass('noshow');
             $('.product-total-amount-container').removeClass('noshow');
             
         } else if (selectedValue == "yes"){
             $('.product-package-size-container').removeClass('noshow');
             $('.product-num-package-container').removeClass('noshow');
             $('.product-total-amount-container').addClass('noshow');

             
         } else {
             $('.product-package-size-container').addClass('noshow');
             $('.product-num-package-container').addClass('noshow');
             $('.product-total-amount-container').addClass('noshow');

         }
    }

//------- ADD PROD PRODUCER PLATFORM END -----//
//--------------------------------------------//

