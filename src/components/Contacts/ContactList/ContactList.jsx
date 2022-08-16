import { useSelector } from 'react-redux';
import { ContactItem, Spinner } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const filter = useSelector(({ filter }) => filter.toLowerCase());
  const { data: contacts, isLoading, isError, error } = useGetContactsQuery('');

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  if (isError) {
    if (error.status === 401) {
      toast.error(error.data.message);
    }
    if (error.originalStatus === 404) {
      toast.error('Resourses not found');
    }
    if (error.status === 500) {
      toast.error('Server not response');
    }

    return <div>We couldn’t get a list of your contacts</div>;
  }

  if (isLoading) return <Spinner />;

  if (contacts)
    return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    );
};
