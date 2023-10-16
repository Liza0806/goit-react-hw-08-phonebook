import React from "react";
import { ContactsRender } from "./ContactRender/ContactsRender";
import { Form } from "./Form/Form";
import { SearchContact } from "./SearchContact";
import { LogInForm } from "./AppBar/UserLogInForm";
import { RegistrationForm } from "./AppBar/UserRegForm";
import { HelloForm } from "./AppBar/Hello";
export const App = () => { 

  return (
    
  <div style={{ width: '400px', margin: '0 auto',padding: '10px', border: '1px solid blue' }}>
    <header>
<LogInForm></LogInForm>
<RegistrationForm></RegistrationForm>
<HelloForm></HelloForm>
</header>
      <Form />
      <SearchContact />
     <ContactsRender />
 
    </div>
  );
};
