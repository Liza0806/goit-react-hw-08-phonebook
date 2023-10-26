import FormRegistration from '../../Forms/FormRegistration/index'
import { useDispatch } from 'react-redux'
import { registrationThunk } from '../../../redux/thunks'


const Registration = () => {
	const dispatch = useDispatch()
	const registration = (body) => {
		dispatch(registrationThunk(body))
	}
	return( <FormRegistration registration={registration} />)
}

export default Registration