import * as Yup from 'yup';

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const contactSchema = Yup.object({
  name: Yup.string()
    .matches(
      nameRegExp,
      "* Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(2)
    .max(30)
    .required('Name is required'),
  number: Yup.string()
    .matches(
      phoneRegExp,
      '* Phone number must be digits, can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const signInSchema = Yup.object({
  name: Yup.string().min(2).max(30).matches(/[A-Z]/, 'must contain one uppercase').required('Name is required'),
  email: Yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
  password: Yup.string().min(7).required('Password is required'),
});

export const logInSchema = Yup.object({
  email: Yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
  password: Yup.string().required('Password is required'),
});