import { ContactForm, MainTitle, Filter, ContactList } from 'components';

const Contacts = () => {
  return (
    <>
      <MainTitle>Contacts</MainTitle>
      <Filter />
      <ContactForm />
      <ContactList />
    </>
  );
};

export default Contacts;
