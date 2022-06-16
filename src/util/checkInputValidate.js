export const validator = (inputValue, inputRegex) => {
  const errors = {};
  for (let [name, value] of Object.entries(inputValue)) {
    if (!value.match(inputRegex[name])) errors[name] = false;
  }
  return errors;
};
