import {ContactsLists,
    ContactItem,
    ContactName,
    ContactNumber,
    DeleteButton} from "./ContactsList.styled.jsx"
  import { deleteContact } from "../../Store/auth/thunks";
  import { useSelector, useDispatch } from "react-redux";
  import { getAllContacts } from "../../Store/auth/thunks";
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
  // console.log(contacts)
  return (
   <ContactsLists>
     <p>contacts page is here</p>
     { contacts && ( filteredContacts? filteredContacts : contacts).map(contact => (
       <ContactItem key={contact.id}>
       <ContactName> name: {contact.name},</ContactName><ContactNumber>tel: {contact.phone}</ContactNumber>
         <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>X</DeleteButton>
       </ContactItem>
     ))}
   </ContactsLists>
  );
  };