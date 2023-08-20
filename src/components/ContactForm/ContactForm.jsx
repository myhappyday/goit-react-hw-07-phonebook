import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const nameInputId = nanoid(5);
  const phoneInputId = nanoid(5);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = event => {
    event.preventDefault();
    const { name, phone } = event.currentTarget.elements;

    const contact = {
      id: nanoid(5),
      name: name.value,
      phone: phone.value,
    };

    if (onDuplicateContact(name.value)) {
      Notiflix.Notify.info(`${name.value} is already in contacts`);
      event.currentTarget.reset();
      name.focus();
      return;
    }

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  const onDuplicateContact = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <Form onSubmit={onFormSubmit} autoComplete="off">
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>
      <Label htmlFor={phoneInputId}>
        Number
        <Input
          type="tel"
          name="phone"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={phoneInputId}
        />
      </Label>
      <Button type="submit" aria-label="Add contact">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
