import React from "react";
// import { Route, Outlet } from 'react-router-dom';
/// import Layout from '../../../Layout/index';
import { ContactForm } from '../../Forms/FormCreateContact/index'; // Импортируйте компонент Form
import{ ContactsList } from '../ContactsListPage/index'

export const Phonebook = () =>{
    return (
        <div>
            <p>My phonebook</p>
            <ContactForm/>
            <ContactsList/>


            {/* <Outlet /> */}
            {/* //// тут должен быть аддКонтакт ////
            //// тут должен быть список контактов//// */}
                  </div>
    )
}