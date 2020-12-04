const checkNameValid = (name) => {
  if (
    name != null &&
    typeof name === "string" &&
    name.length > 3 &&
    name.length < 20
  ) {
    return true;
  } else {
    return false;
  }
};

export { checkNameValid };
