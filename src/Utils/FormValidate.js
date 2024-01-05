export  const  loginvalidate=  (email,password)=>{
    let validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    let validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validateEmail) return "InValid Email!";
    if(!validatePassword) return "InValid Password!"
    return '';
} 


export const signUpvalidate = (name,email,password)=>{
    let validateName = name?.length;
    let validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    let validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validateName) return "Input Name";
    if(!validateEmail) return "InValid Email!";
    if(!validatePassword) return "InValid Password!";
    return '';
}