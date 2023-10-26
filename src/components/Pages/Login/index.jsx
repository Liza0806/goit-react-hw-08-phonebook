import FormLogin from '../../Forms/FormLogin/index'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../../redux/thunks'
import toast from 'react-hot-toast'

const Login = () => {
	const dispatch = useDispatch()

	const login = async (body) => {
		try {
			await dispatch(loginThunk(body)).unwrap()
			toast.success('Welcome', { duration: 3000, position: 'top-right' })
		} catch (error) {
			toast.error(error.error, { duration: 3000, position: 'top-right' })
		}
	}
	return <FormLogin login={login} />
}

export default Login