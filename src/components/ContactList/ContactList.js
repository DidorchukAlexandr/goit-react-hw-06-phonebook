import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/sliceContacts/sliceContacts';
import { ContactsList, ListItem, Button } from './ContactList.styled';

export default function ContactList() {
  const filter = useSelector(store => store.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </ListItem>
        ))}
    </ContactsList>
  );
}
