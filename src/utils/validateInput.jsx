export function isValidEmailInput(input) {
  const validEmailIRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return validEmailIRegex.test(input);
}

export function isValidStringInput(input) {
  const validNumberStringRegex = /[0-9a-zA-Z]/;

  return validNumberStringRegex.test(input);
}
