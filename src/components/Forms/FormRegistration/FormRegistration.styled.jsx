import { styled } from 'styled-components';
import { Link } from 'react-router-dom'

export const PageContainer = styled.div`
height: 100vh;
background-image: linear-gradient(43deg, #4158d04d 0%, #c850c04d 34%, #ffcc704d 81%);

`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto 0 7% ;
  padding-top: 20px;


`;
export const FormContainerDiv = styled.div`
  max-width: 400px;
  margin: 0;
  
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
  display: block;
  width: 400px;
`;

export const SubmitButton = styled.button`
width: 100%;
display: block;
margin: 15px 0 0 0;
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

export const LinkToLogIn = styled(Link)`
  width: 400px;
  display: block;
  
  padding: 10px 0;
  background-color: #4158D0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  text-align: center; /* Установите текст по центру */

  &:hover {
    background-color: #C850C0; 
  }
`;

export const OrText = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 10px 0;
  color: #4158D0;
`;