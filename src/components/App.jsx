import FormContacts from "./FormContacts/FormContacts";
import ContactList from "./ContactList/ContactList";
import FilterContacts from "./FilterContacts/FilterContacts";
import { GlobalBox } from "./App.styled";

export default function App() {
  return (
    <GlobalBox>
      <h1>Phoneboock</h1>
      <FormContacts />
      <FilterContacts textTitel="Find contacts by name" />
      <ContactList />
    </GlobalBox>
  );
};