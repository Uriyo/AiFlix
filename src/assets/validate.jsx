
export const checkValidateData=(email,password)=>{
    const isEmailValid= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPassValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!isEmailValid){
        return "Email is not valid";
    }
    if(!isPassValid){
        return "Enter valid password";
    }
    return null;
};

export const checkValidateName=(name)=>{
    const isName=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    if(!isName){
        return "Enter valid username"
    }
    return null;
}