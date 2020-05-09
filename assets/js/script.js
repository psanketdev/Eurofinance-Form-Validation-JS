// var fname = document.querySelector('#fname');
// var lname = document.querySelector('#lname');
// var position = document.querySelector('#position');
// var company = document.querySelector('#company');
// var email = document.querySelector('#email');
// var company_type = document.querySelector('#company_type');
// var country = document.querySelector('#country');
var input = document.querySelectorAll('#myform input');
var submit = document.querySelector('#submit_btn');
var yes = document.querySelector('#yes');
var no = document.querySelector('#no');
var company_type = document.querySelector('#company_type');
var country = document.querySelector('#country');
var form =  document.querySelector('#myform');

var fname_regax = /^[A-Za-z.]{3,20}$/;
var lname_regax = /^[A-Za-z]{3,20}$/;
// var company_regax = /^[A-Za-z]{3,30}$/;
var email_regax = /^[A-za-z_0-9]{2,30}@[A-Za-z]{2,}[.]{1}[A-za-z.]{2,6}$/;

submit.addEventListener('click', vaildation_form);

function vaildation_form(e){
    e.preventDefault();
    if(!fname_regax.test(fname.value) || fname.value == ""){
        document.getElementById('fname_error').style.opacity = 1;
        fname.classList.add('border');
    }else {
        document.getElementById('fname_error').style.opacity = 0;
        fname.classList.remove('border');
    }
    if(!lname_regax.test(lname.value) || lname.value == ""){
        document.getElementById('lname_error').style.opacity = 1;
        lname.classList.add('border');
    }else {
        document.getElementById('lname_error').style.opacity = 0;
        lname.classList.remove('border');
    }
    if(position.value == "" || position.value == "null"){
        document.getElementById('position_error').style.opacity = 1;
        position.classList.add('border');
    }else{
        document.getElementById('position_error').style.opacity = 0;
        position.classList.remove('border');
    }
    if(company.value == "" || company.value == "null"){
        document.getElementById('company_error').style.opacity = 1;
        company.classList.add('border');
    }else{
        document.getElementById('company_error').style.opacity = 0;
        company.classList.remove('border');
    }
    if(!email_regax.test(email.value)|| email.value == ""){
        document.getElementById('email_error').style.opacity = 1;
        email.classList.add('border');
    }else{
        document.getElementById('email_error').style.opacity = 0;
        email.classList.remove('border');
    }
    if(!yes.checked && !no.checked){
        document.getElementById('checkbox_error').style.opacity = 1;
    } else{
        document.getElementById('checkbox_error').style.opacity = 0;
    }
    if(company_type.value == ""){
        document.getElementById('company_type_error').style.opacity = 1;
    }
    else{
        document.getElementById('company_type_error').style.opacity = 0;
    }
    if(country.value == ""){
        document.getElementById('country_error').style.opacity = 1;
    }
    else{
        document.getElementById('country_error').style.opacity = 0;
    }
    form.reset();
}
// debugger;
// function formreset(){
//     if(input.value == true){
//         form.reset();
//     }
// }