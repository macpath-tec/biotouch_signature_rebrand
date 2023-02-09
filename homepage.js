
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

const phoneElement = document.getElementById('phoneNumber');
phoneElement.addEventListener('keydown',enforceFormat);
phoneElement.addEventListener('keyup',formatToPhone);

const faxElement = document.getElementById('faxNumber');
faxElement.addEventListener('keydown',enforceFormat);
faxElement.addEventListener('keyup',formatToPhone);

const submitDownload = async() => {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phoneNumber');
    const fax = document.getElementById('faxNumber');
    const job = document.getElementById('job');

    const response = await axios.post('/api/create', {firstName: firstName.value, lastName: lastName.value, email: email.value, phone: phone.value, fax: fax.value, job: job.value});
    console.log(response);
    if(response.status === 200){
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'BiotouchSignature.html'); 
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        displayInstructions();
    }
}

const displayInstructions = () => {
    const instructions = document.getElementById('instructions');
    instructions.style.display = 'block';
}
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submitDownload);