function validateForm() {
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('addressError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';

    let isValid = true;

    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Name is required.';
        document.getElementById('nameError').style.color = 'red';
        isValid = false;
    }

    if (address === '') {
        document.getElementById('addressError').innerHTML = 'Address is required.';
        document.getElementById('addressError').style.color = 'red';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Email is required.';
        document.getElementById('emailError').style.color = 'red';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').innerHTML = 'Phone is required.';
        document.getElementById('phoneError').style.color = 'red';
        isValid = false;
    }

    if (isValid === false) {
        return false;
    } else {
        return true;
    }
}
