const validateEmail = (value) => {
  const re = /^[\w-_.+]+@[\w]+\.[\w.]+$/;
  // Split the email into local part and domain part
  const localPart = value.split("@")[0];
  // Ensure the local part does not end with a plus sign
  if (localPart.endsWith("+")) return false;

  return re.test(value);
};

// Only a–z, A–Z, and 0–9
// No special characters
// No whitespace
const validatePassword = (password) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(password);
};

export { validateEmail, validatePassword };
