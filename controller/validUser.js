import { checkNameValid } from "../valid/validName.js";
import { validNumber } from "../valid/checkValidNumber.js";
import { checkEmail } from "../valid/checkValidEmail.js";
import { getBloodGroup } from "../valid/checkValidBG.js";
import { ConvertDateToAge } from "../valid/checkAge.js";

const validUser = (Userdb) => {
  const { name, height, weight, bloodGroup, phoneNo, dateOfBirth } = {
    ...Userdb,
  };

  const isNameValid = checkNameValid(name);

  if (!isNameValid) {
    throw Error("Invalid Name");
  }

  const isHeightValid = validNumber(height);
  if (!isHeightValid) {
    throw Error("Invalid height");
  }

  const isWeightValid = validNumber(weight);
  if (!isWeightValid) {
    throw Error("Invalid weight");
  }

  const isBloodGroupValid = getBloodGroup(bloodGroup);
  console.log(isBloodGroupValid);

  const isPhoneNoValid = validNumber(phoneNo);
  if (!isPhoneNoValid) {
    throw Error("Invalid Phone number");
  }

  const Age = ConvertDateToAge(dateOfBirth);
  console.log(Age);

  return true;
};

export { validUser };
