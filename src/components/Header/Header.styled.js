import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


export const HeaderContainer = styled.nav`

top: 0;
left: 0;
width: 100%;
height: 100%;
  background: linear-gradient(43deg, #4158D0 0%, #C850C0 37%, #FFCC70 90%);
  color: #fff; 
  padding: 10px 20px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center; 

`;

export const HeaderBrand = styled(NavLink)`
display: block;

padding: 4px;
border: none;
border-radius: 6px;
color: #fff; 
font-size: 16px;
font-weight: bold;
cursor: pointer;
text-decoration: none;

box-shadow: 0 4px  4px  rgba(0, 0, 0, .1),
0 1px  6px  rgba(0, 0, 0, .05),
0 8px  8px  rgba(0, 0, 0, .1), 
0 16px 16px rgba(0, 0, 0, .1), 
8px 32px 32px rgba(0, 0, 0, .15), 
8px 64px 64px rgba(0, 0, 0, .15);
box-shadow 600ms cubic-bezier(.33,.11,.02,.99),
              transform  600ms cubic-bezier(.33,.11,.02,.99);
&:hover {
  &:hover {
    box-shadow: 0 4px  4px  rgba(0, 0, 0, .1),
                0 1px  6px  rgba(0, 0, 0, .05),
                0 8px  8px  rgba(0, 0, 0, .1), 
                0 16px 16px rgba(0, 0, 0, .1), 
                8px 32px 32px rgba(0, 0, 0, .15), 
                8px 64px 64px rgba(0, 0, 0, .15); 
 
     transform: scale(1.05)
                translateY(-0.05rem);
   }
   
   
   &:active {
    box-shadow: 0 4px  4px  rgba(0, 0, 0, .1),
                0 1px  6px  rgba(0, 0, 0, .05),
                0 8px  8px  rgba(0, 0, 0, .1), 
                0 16px 16px rgba(0, 0, 0, .1), 
                8px 16px 16px rgba(0, 0, 0, .15), 
                8px 32px 32px rgba(0, 0, 0, .15); 
   }
 }
}`;





  


export const HeaderButton = styled.button`
display: block;
background-color: #FFCC70;
padding: 4px;
border: none;
border-radius: 6px;
color: #fff; 
font-size: 16px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;
cursor: pointer;
text-decoration: none;

box-shadow: 0 4px  4px  rgba(0, 0, 0, .1),
0 1px  6px  rgba(0, 0, 0, .05),
0 8px  8px  rgba(0, 0, 0, .1), 
0 16px 16px rgba(0, 0, 0, .1), 
8px 32px 32px rgba(0, 0, 0, .15), 
8px 64px 64px rgba(0, 0, 0, .15);
box-shadow 600ms cubic-bezier(.33,.11,.02,.99),
              transform  600ms cubic-bezier(.33,.11,.02,.99);
&:hover {
  &:hover {
    box-shadow: 0 4px  4px  rgba(0, 0, 0, .1),
                0 1px  6px  rgba(0, 0, 0, .05),
                0 8px  8px  rgba(0, 0, 0, .1), 
                0 16px 16px rgba(0, 0, 0, .1), 
                8px 32px 32px rgba(0, 0, 0, .15), 
                8px 64px 64px rgba(0, 0, 0, .15); 
 
     transform: scale(1.05)
                translateY(-0.05rem);
   }
   
   
   &:active {
    box-shadow: 0 4px  4px  rgba(0, 0, 0, .1),
                0 1px  6px  rgba(0, 0, 0, .05),
                0 8px  8px  rgba(0, 0, 0, .1), 
                0 16px 16px rgba(0, 0, 0, .1), 
                8px 16px 16px rgba(0, 0, 0, .15), 
                8px 32px 32px rgba(0, 0, 0, .15); 
   }
 }
}`;


