function insertDashes(phone) {
    let phoneWithDash = '';

    for(let i=0; i<phone.length; i++){
        if (i%3 === 0 && i!==0) {
            phoneWithDash = phoneWithDash.concat("-");
        }
        phoneWithDash = phoneWithDash.concat(phone[i]);
    }
    console.log(phoneWithDash);
}

const number = "+919911369753";

insertDashes(number);