import { useSelector } from 'react-redux';
import { ContactItem, Spinner } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const filter = useSelector(({ filter }) => filter.toLowerCase());
  const { data: contacts, isLoading, isError, error } = useGetContactsQuery('');

  console.log(error, isError);

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
  }

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
