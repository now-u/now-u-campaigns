
document.addEventListener('DOMContentLoaded', function () {

    var jQueryScript = document.createElement('script');

    jQueryScript.setAttribute('src','https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js');
    document.head.appendChild(jQueryScript);

    (function($) {
    
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[1]='NAME';
        ftypes[1]='text';
        fnames[0]='EMAIL';
        ftypes[0]='email';
    }
    (jQuery));var $mcj = jQuery.noConflict(true);
});

// CUSTOM FORM INPUTS VALIDATION
var emailInput = document.getElementById("mce-EMAIL");
var requiredText = document.getElementById("required_val");
var paternVal = document.getElementById("patern_val");
var mailPatern = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

function validateInput () {

    if (emailInput.value == "") {
        requiredText.style.display = "block";
        return false;
    }
    if (!emailInput.value.match(mailPatern)) {
        requiredText.style.display = "none";
        paternVal.style.display = "block";
        return false;
    }
    else {
        requiredText.style.display = "none";
        paternVal.style.display = "none";
        return true;
    }
}
// CUSTOM FORM INPUTS VALIDATION