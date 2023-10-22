import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { authSelector, profileSelector } from '../Store/auth/selector'
import { logOut } from '../Store/auth/slice'
import { deleteToken } from '../../api/auth'

const Header = () => {
	const navigate = useNavigate()
	const isAuth = useSelector(authSelector)
	const profile = useSelector(profileSelector)
	const dispatch = useDispatch()

	const handleClick = () => {
		if (isAuth) {
			dispatch(logOut())
			deleteToken()
		} else navigate('/login')
	}

	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<p>header</p>
				<NavLink className='navbar-brand mb-0 h1 text-success' to='/'>
					Home
				</NavLink>
			
				<NavLink className=' mb-0 mx-3 h3 text-white' to='/phonebook'>
					phonebook
				</NavLink>
			
				<div className='ms-5'>
					{profile && (
						<>
							<h5 className='text-white'>{profile.firstName}</h5>
							<button
								onClick={() => navigate('/profile')}
								className='btn btn-outline-warning ms-5'
							>
								Profile
							</button>
						</>
					)}
					<button
						onClick={handleClick}
						className='btn btn-outline-success ms-5'
					>
						{isAuth ? 'Log Out' : 'Login'}
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Header