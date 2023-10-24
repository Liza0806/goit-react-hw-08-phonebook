import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authSelector } from '../Store/auth/selector'
import { logOut } from '../Store/auth/slice'
import { deleteToken } from '../../api/auth'
import { HeaderContainer, HeaderBrand,  HeaderButton } from './Header.styled'
import { useLocation } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const isAuth = useSelector(authSelector);
	const dispatch = useDispatch();
	const location = useLocation(); 
  

	const handleClick = () => {
		if (isAuth) {
			dispatch(logOut())
			deleteToken()
		} else navigate('/login')
	}

	return (
		<HeaderContainer>
			
				{location.pathname !== '/' && <HeaderBrand to='/'>
					Home
				</HeaderBrand>}
			
				{location.pathname !== '/phonebook/*' && ( 
          <HeaderBrand to='/phonebook/*'>
            My phonebook
          </HeaderBrand>
        )}
			
				<div className='ms-5'>
					<HeaderButton
						onClick={handleClick}>
						{isAuth ? 'Log Out' : 'Login'}
					</HeaderButton>
				
			</div>
		</HeaderContainer>
	)
}

export default Header