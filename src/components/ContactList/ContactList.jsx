import { useSelector } from 'react-redux';
import { ContactItem } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ThreeCircles } from 'react-loader-spinner';
import authSelectors from 'redux/auth/authSelectors';

export const ContactList = () => {
  const isAutorized = useSelector(authSelectors.getIsLoggedIn); // костыль

  const {
    data: contacts,
    isLoading,
    isError,
  } = useGetContactsQuery({
    // refetchOnMountOrArgChange: true,
  });

  const filter = useSelector(({ filter }) => filter.toLowerCase());

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  if (isLoading)
    return (
      <ThreeCircles
        height="30"
        width="30"
        color="#red"
        ariaLabel="three-circles-rotating"
      />
    );

  if (isError) return <div>Error query!</div>;

  if (contacts && isAutorized)
    return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    );
};
