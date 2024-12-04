export const signInValidations = {
    username: '',
    password: '',
  };
  
  export const signInValidate = (values:any) => {
    const errors = {};
  
   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.username)) {
      errors.username = 'Please enter a valid email address';
    }
    // else if (!/^[789]\d{9}$/.test(values.username)){
    //   errors.username = 'Please enter a valid phone number';
    // }
   if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors; 
  };
  export const signUpValidations = {
    mobileNumber: '',
  };
  
  export const signUpValidate = (values:any) => {
    const errors = {};
  
    if (!values.mobileNumber) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (!/^[789]\d{9}$/.test(values.mobileNumber)) {
      errors.mobileNumber = 'Mobile number should start with 7, 8, or 9';
    } else if (values.mobileNumber.length !== 10) {
      errors.mobileNumber = 'Mobile number must be 10 characters';
    }
    return errors;
  };