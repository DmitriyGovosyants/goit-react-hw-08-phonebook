import { useSelector } from 'react-redux';
import { ContactItem, Spinner } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const ContactList = () => {
  const filter = useSelector(({ filter }) => filter.toLowerCase());

  const { data: contacts, isLoading, isError } = useGetContactsQuery('');

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error query!</div>;

  if (contacts)
    return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    );
};
