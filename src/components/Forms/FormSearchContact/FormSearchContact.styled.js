import { styled } from 'styled-components';



export const FormContainer = styled.form`
 
  max-width: 400px;
  margin: 0;
`;
export const FormContainerDiv = styled.div`
display: flex;
flex-direction: column;
width:400px;
padding-top: 10px;
margin-left: 7%;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;