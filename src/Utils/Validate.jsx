export const checkValidateData = (email, password) => {
    const isEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|(?=.*\W+)).{8,}$/.test(password);
  
    if (!isEmail) return "Email is not valid";
    if (!isPassword) return "Password is not valid";
  
    return "Data is valid";
  };
  