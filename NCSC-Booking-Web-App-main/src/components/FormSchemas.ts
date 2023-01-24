import * as yup from "yup";

export const ViewOneSchema = yup.object().shape({
  firstName: yup.string().required("First name is required").min(3).max(40),
  lastName: yup.string().required("Last name is required").min(3).max(40),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Last name is required")
    .min(3, "Your email is too short")
    .max(50, "Your email is too long"),
  phone: yup
    .number()
    .min(10000000, "")
    .max(99999999, "Phone number must be 8 digits")
    .required("Phone number is required"),
});

export const ViewTwoSchema = yup.object().shape({
  address: yup.string().min(4).max(120).required("Address is required"),
  socialLink: yup
    .string()
    .url("Please insert a valid url")
    .required("A social account is required")
    .min(8, "Your link is invalid")
    .max(120),
  CIN: yup
    .string()
    .min(8, "CIN not valid")
    .max(8, "Please insert a valid CIN")
    .required("National Identity Card number is required "),

  birthDate: yup.date().required("Your birthDate is empty"),
});

export const ViewThreeSchema = yup.object().shape({
  university: yup.string().required("Please insert your university"),
  studyField: yup.string().min(2).max(30).required("study field is required"),
});

export const ViewFourSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      `Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character !@#$%^&*`
    ),
  passwordConfirmation: yup
    .string()
    .required("You need to confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const ChangePasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      `Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character !@#$%^&*`
    ),
  newPasswordConfirmation: yup
    .string()
    .required("You need to confirm your password")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("The passed value is not an email"),
  password: yup.string().required("password was left empty"),
});

export const sendRequestSchema = yup.object().shape({
  emailReceiver: yup.string().email("The passed value is not an email"),
});
