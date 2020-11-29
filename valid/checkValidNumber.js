const validNumber = () => {
  let num = 12123451234565;
  if (num != null && typeof num === "number") {
    return true;
  } else {
    return false;
  }
};

export { validNumber };
