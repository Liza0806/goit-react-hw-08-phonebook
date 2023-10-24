import styled from 'styled-components';

export const ContactsLists = styled.div`
background-image: linear-gradient(43deg, #4158d04d 0%, #c850c04d 34%, #ffcc704d 81%);
  display: block;
margin-left: 5%;
margin-right: 5%;
margin-top: 20px;
padding: 20px;

  border-radius: 5px;
  width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 3%;
  transition: background 0.3s; 
  cursor: pointer;
  justify-content: space-between;
  
  &:hover {
    background:#c850c04d ; 
  }
`;
export const Greeting = styled.p`
  color: #4158D0;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;
export const ContactName = styled.span`
  color: #333;
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

export const ContactNumber = styled.span`
  color: #333;
  font-size: 18px;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background: #4158D0;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background-color: #C850C0; 
  }
`;
