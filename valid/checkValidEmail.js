const checkEmail = (email) => {
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    console.log(
      "Please enter a valid e-mail address \n atpostion:" +
        atposition +
        "\n dotposition:" +
        dotposition
    );
    return true;
  } else {
    return false;
  }
};
export { checkEmail };
