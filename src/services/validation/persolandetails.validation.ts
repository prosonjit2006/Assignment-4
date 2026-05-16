import * as yup from "yup";

export const personalDetailsSchema = yup.object({
  fname: yup.string().required("Firts name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  Phone: yup.number().optional(),
  message: yup.string().optional(),
});
