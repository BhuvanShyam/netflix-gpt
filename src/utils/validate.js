
export const checkValidData = (email,password) =>{

    //if the test passes it return true inside isEmailvalid
    const isEmailVaild  =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailVaild) return "Email id is not valid"
    else if(!isPasswordValid) return "Password is not valid"

    return null;


}