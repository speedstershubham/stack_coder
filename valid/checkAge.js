const ConvertDateToAge = (dateOfBirth) => {
  let now = new Date();
  let birthdate = dateOfBirth.split("/");
  let born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0]);
  let age = get_age(born, now);

  if (age <= 18) {
    alert("Input Error - Age should be greater then or equal to 18");
    return false;
  }
  return age;
};

const get_age = (born, now) => {
  var birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
  if (now >= birthday) return now.getFullYear() - born.getFullYear();
  else return now.getFullYear() - born.getFullYear() - 1;
};

export { ConvertDateToAge };
