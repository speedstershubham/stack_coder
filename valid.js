const Valid = () => {
  if (userDb == null) {
    console.log("please enter the details");
  } else {
    if (name == null && name != "") {
      console.log("PLease enter name");
    }
    if (age == null) {
      console.log("please enter age");
    }
    if (dob == null) {
      console.log("please enter age");
    }
    if (postalCode == null) {
      console.log("please enter age");
    }
    if (weight == null) {
      console.log("please enter age");
    }
    if (height == null) {
      console.log("please enter age");
    }
    if (dob == null) {
      console.log("please enter Date of birth");
    }
    if (phoneNo) {
      console.log("please enter Phone number");
    }
    if (bloodGroup) {
      console.log("please enter Phone number");
    }
  }
};
export { Valid };
