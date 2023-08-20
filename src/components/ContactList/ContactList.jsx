import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {contacts &&
          contacts.map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              phone={phone}
            ></ContactListItem>
          ))}
      </List>
    </>
  );
};

export default ContactList;
