const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton() {
	navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)



function handleSubmit () {
    const name = document.getElementById('name').value;
	
    // to set into local storage
    localStorage.setItem("NAME", name);
    
    return;
}

//
function SubmitForm()
{
  showResultDiv();
	document.forms['search'].action='thankyou.html';
    document.forms['search'].target='frame_result1';
    document.forms['search'].submit();

    document.forms['search'].action="https://formsubmit.co/shotwarrior666@email.com";
    document.forms['search'].target='frame_result2';
   	document.forms['search'].submit();
	return false;
}

const form = document.getElementById('form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const company = document.getElementById('company');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
//const text = document.getElementById('form-textarea');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = name.value.trim();
	const lastnameValue = lastname.value.trim();
	const companyValue = company.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
	const textValue = text.value.trim();

    if(firstnameValue === '') {
        setError(name, 'First name is required');
    } else {
        setSuccess(name);
    }

	if(lastnameValue === '') {
        setError(lastname, 'Last name is required');
    } else {
        setSuccess(lastname);
    }

	if(companyValue === '') {
        setError(company, 'Company name is required');
    } else {
        setSuccess(company);
    }

	
	if(phoneNumberValue === '') {
        setError(phoneNumber, 'Phone number is required');
    } else {
        setSuccess(phoneNumber);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

	if(textValue === '') {
        setError(text, 'Text is required');
    } else {
        setSuccess(text);
    }


};
