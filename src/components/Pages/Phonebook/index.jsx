import React from "react";
import { PageContainer } from "./Phonebook.styled";
import { ContactForm } from '../../Forms/FormCreateContact/index'; 
import { ContactsList } from '../ContactsListPage/index'
import { SearchContactForm } from "../../Forms/FormSearchContact/index";

export const Phonebook = () =>{
    return (
        <PageContainer>
        
            <ContactForm/>
            <SearchContactForm/>
            <ContactsList/>

                  </PageContainer>
    )
}