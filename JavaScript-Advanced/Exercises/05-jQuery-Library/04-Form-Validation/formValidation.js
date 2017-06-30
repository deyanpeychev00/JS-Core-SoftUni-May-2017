function validate(){
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validDiv = $('#valid');
    let isFormValid = true;
    
    function toggleCompanyInfo() {
        if(companyCheckbox.is(':checked')){
            companyInfo.css('display', 'block');
        }else{
            companyInfo.css('display', 'none');
        }
    }

    function preventRefreshAndValidate(event) {
        event.preventDefault();
        validateForm();
        validDiv.css('display', isFormValid ? 'block' : 'none');
    }

    function validateForm() {
        validateInput(username, /^[a-zA-Z0-9]{3,20}$/g);
        validateInput(email, /^.*?\@.*?\..*$/g);
        if(password.val() === confirmPassword.val()){
            validateInput(password, /^\w{5,15}$/g);
            validateInput(confirmPassword, /^\w{5,15}$/g);
        }else{
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
            isFormValid=false;
        }
        if(companyCheckbox.is(':checked')){
            let number = Number(companyNumber.val());
            if(number >=1000 && number<=9999){
                companyNumber.css('border', 'none');
                isFormValid = true;
            }else{
                companyNumber.css('border', 'solid red');
                isFormValid=false;
            }
        }
    }

    function validateInput(input, pattern) {
        if(pattern.test((input.val()).trim())){
            input.css('border', 'none');
        }else{
            input.css('border', 'solid red');
            isFormValid=false;
        }
    }
    
    companyCheckbox.on('change', toggleCompanyInfo);
    submitBtn.on('click', preventRefreshAndValidate);
}

