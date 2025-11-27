// INDIVIDUAL VALIDATION FUNCTIONS

export const validateName = (value) => {
  if (!value.trim()) return "Name is required";
  return "";
};

export const validateEmail = (value) => {
  const trimmed = value.trim();

  if (!trimmed) return "Email is required";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

  return emailRegex.test(trimmed)
    ? ""
    : "Invalid email format. ex: abc@gmail.com";
};

export const validatePhone = (value) => {
  if (!value.trim()) return "Phone number is required";
  if (!/^[0-9]{10}$/.test(value)) return "Enter a valid phone number";
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

export const validateSubject = (value) => {
  if (!value) return "Enter a Subject";
  return "";
};

export const validateMessage = (value) => {
  if (!value) return "Enter a Message";
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

    case "subject":
      return validateSubject(value);

    case "message":
      return validateMessage(value);

    default:
      return "";
  }
};

// =============================================
// FULL FORM VALIDATION (USED ON SUBMIT)
// =============================================

export const validateForm = (formData) => {
  const errors = {};

  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const stateError = validateState(formData.state);
  if (stateError) errors.state = stateError;

  const programError = validateProgram(formData.program);
  if (programError) errors.program = programError;

  const subjectError = validateSubject(formData.program);
  if (subjectError) errors.subject = subjectError;

  const messageError = validateMessage(formData.message);
  if (messageError) errors.message = messageError;


  return errors;
};
