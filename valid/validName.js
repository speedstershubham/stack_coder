const checkNameValid = (name) => {
  if (
    name != null &&
    typeof name === "string" &&
    name.length > 6 &&
    name.length < 20
  ) {
    return false;
  } else {
    return true;
  }
};

export { checkNameValid };
