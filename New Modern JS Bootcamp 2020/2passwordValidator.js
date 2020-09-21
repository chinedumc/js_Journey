/*
Write a isValidPassword function
It accepts 2 arguments: password and username
Passwors must:
    be at least 8 characters
    cannot contain spaces
    cannot contain the username
If all requirements are met, return true.
Otherwise: false
*/


function isValidPassword(password, username) {
    if(password.length < 8){
        return false;
    } 
    if(password.indexOf(' ') !== -1) {
        return false;
    }
    if(password.indexOf(username) !== -1) {
        return false;
    } 
    return true;
    
}