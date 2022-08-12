import { Title } from './Contacts.styled';
import { ContactForm, Filter, ContactList } from 'components';

const Contacts = () => {
  return (
    <>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
