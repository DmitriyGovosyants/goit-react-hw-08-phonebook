import * as Yup from 'yup';

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const schema = Yup.object({
  name: Yup.string()
    .matches(
      nameRegExp,
      "* Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(2)
    .max(30)
    .required('Required'),
  number: Yup.string()
    .matches(
      phoneRegExp,
      '* Phone number must be digits, contain 6 digits, can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});