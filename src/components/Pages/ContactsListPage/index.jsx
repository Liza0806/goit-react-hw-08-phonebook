import {ContactsLists,
    ContactItem,
    ContactName,
    ContactNumber,
    DeleteButton, 
    Greeting } from "./ContactsList.styled.jsx"
  import { deleteContact } from "../../../redux/thunks";
  import { useSelector, useDispatch } from "react-redux";
  import { getAllContacts } from "../../../redux/thunks";
  import { useEffect } from "react";
  
  export const ContactsList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.filter);
  const filteredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filter))
  useEffect(() => {
  dispatch(getAllContacts()
  );
  }, [dispatch]);
 
  return (
    <ContactsLists>
         { contacts.length === 0? <Greeting>Your contacts will appear here</Greeting> :<Greeting>My contacts:</Greeting>}
     
      {(filteredContacts ? filteredContacts : contacts).map(contact => (
        <ContactItem key={contact.id}>
          <div>
            <ContactName>{contact.name},</ContactName>
            <ContactNumber>tel: {contact.number}</ContactNumber>
          </div>
          <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>X</DeleteButton>
        </ContactItem>
      ))}
   
    </ContactsLists>
  );
      }