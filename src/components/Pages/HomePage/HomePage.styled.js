import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const HomePageContainer = styled.div`

background-image: linear-gradient(43deg, #4158d04d 0%, #c850c04d 34%, #ffcc704d 81%);
text-align: center;
`;
export const WelcomeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const Greeting = styled.h5`
  color: #4158D0; 
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #333; /* Цвет обычного текста */
  font-size: 16px;
  margin-bottom: 20px;
`;

export const GetStartedButton = styled(NavLink)`
  background: #4158D0;
  color: #fff; 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #C850C0; 
  }
`;
export const LinksForStart = styled(NavLink)`
  background: #4158D0;
  color: #fff; 
  padding: 10px 20px;
  border: none;
  width: 100px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #C850C0; 
  }
`;



export const WelcomeText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin: 40px;
  color: #4158D0;
`;
export const LinksContainer = styled.div`

display: flex;
justify-content: space-around;
  padding: 20px;
  text-align: center;

`;