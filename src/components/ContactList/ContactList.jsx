import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/operations';
import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log('contacts: ', contacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    // localStorage.setItem('contacts', JSON.stringify(contacts));
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <List>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, phone }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            phone={phone}
          ></ContactListItem>
        ))}
    </List>
  );
};

export default ContactList;
