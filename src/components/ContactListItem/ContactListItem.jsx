import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/operations';
import { ContactItem, Name, Number, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <p>
        <Name>{name}:</Name>
        <Number>{phone}</Number>
      </p>
      <Button
        type="button"
        aria-label="Delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default ContactListItem;
