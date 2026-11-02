export const validateName = (name: string): boolean => {
  const nameTrimmed = name.trim();
  if(nameTrimmed === "") {return false}
  return true;
}

export const validatePhone = (phone: string): boolean => {
  const phoneTrimmed = phone.trim();
  if(phoneTrimmed.length !== 9) return false
  if(phoneTrimmed.charAt(0) !== "6" && phoneTrimmed.charAt(0) !== "7") return false
  return true;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

