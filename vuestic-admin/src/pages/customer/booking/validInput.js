function checkInput (nameRoom, nameClient, checkin, checkout) {
    if (nameRoom == 'NULL'
    || nameClient == ''
    || checkin == null
    || checkout == null)
        return false;
    else
        return true;
}

export default checkInput;