// INDIVIDUAL VALIDATION FUNCTIONS

export const validateName = (value) => {
  if (!value.trim()) return "Name is required";
  return "";
};

export const validateEmail = (value) => {
  if (!value.trim()) return "Email is required";
  if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email";
  return "";
};

export const validatePhone = (value) => {
  if (!value.trim()) return "Phone number is required";
  if (!/^[0-9]{7,12}$/.test(value)) return "Enter a valid phone number";
  return "";
};

export const validateState = (value) => {
  if (!value) return "Select your state";
  return "";
};

export const validateProgram = (value) => {
  if (!value) return "Select a program";
  return "";
};

// =========================================
// GENERIC FIELD VALIDATOR (USED in onBlur)
// =========================================

export const validateField = (name, value) => {
  switch (name) {
    case "name":
      return validateName(value);

    case "email":
      return validateEmail(value);

    case "phone":
      return validatePhone(value);

    case "state":
      return validateState(value);

    case "program":
      return validateProgram(value);

    default:
      return "";
  }
};

// =============================================
// FULL FORM VALIDATION (USED ON SUBMIT)
// =============================================

export const validateForm = (formData) => {
  const errors = {};

  if (validateName(formData.name)) errors.name = validateName(formData.name);

  if (validateEmail(formData.email))
    errors.email = validateEmail(formData.email);

  if (validatePhone(formData.phone))
    errors.phone = validatePhone(formData.phone);

  if (validateState(formData.state))
    errors.state = validateState(formData.state);

  if (validateProgram(formData.program))
    errors.program = validateProgram(formData.program);

  return errors;
};
