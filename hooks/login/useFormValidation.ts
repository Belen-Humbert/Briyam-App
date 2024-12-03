const useFormValidation = (email: string, password: string): boolean => {
    
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length > 0;

    const isButtonEnabled = isValidEmail && isValidPassword;

    if (isButtonEnabled) {
        
    } else {
        
    }

    return isButtonEnabled;
};

export default useFormValidation;
