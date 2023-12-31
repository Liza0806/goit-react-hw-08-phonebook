import { styled } from 'styled-components';

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin:0 auto 0 7% ;
  padding-top: 20px;
`;
export const FormContainerDiv = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  gap:10px;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4158D0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #C850C0; 
  }
`;
