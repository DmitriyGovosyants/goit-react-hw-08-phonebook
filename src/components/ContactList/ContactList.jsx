import { useSelector } from 'react-redux';
import { ContactItem, Spinner } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import authSelectors from 'redux/auth/authSelectors';

export const ContactList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); // костыль

  const {
    data: contacts,
    isLoading,
    isError,
  } = useGetContactsQuery('', {
    refetchOnMountOrArgChange: true,
  });

  const filter = useSelector(({ filter }) => filter.toLowerCase());

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error query!</div>;

  if (contacts && isLoggedIn)
    return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    );
};
