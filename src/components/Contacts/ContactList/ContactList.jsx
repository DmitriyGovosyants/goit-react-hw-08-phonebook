import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ContactItem, Spinner } from 'components';

export const ContactList = () => {
  const filter = useSelector(({ filter }) => filter.toLowerCase());
  const { data: contacts, isLoading, isError, error } = useGetContactsQuery('');

  if (isLoading) return <Spinner />;

  if (isError) {
    if (error.status === 401) {
      toast.error(error.data.message);
    }
    if (error?.originalStatus === 404 || error?.status === 404) {
      toast.error('Resourses not found');
    }
    if (error.status === 500) {
      toast.error('Server not response');
    }

    return (
      <div style={{ color: 'white' }}>
        We couldn’t get a list of your contacts
      </div>
    );
  }

  if (contacts) {
    const filteredContacts = contacts
      .filter(contact => contact.name.toLowerCase().includes(filter))
      .sort((a, b) => a.name.localeCompare(b.name));

    return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    );
  }
};
