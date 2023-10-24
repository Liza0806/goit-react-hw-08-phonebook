
import {FormContainer,
	FormContainerDiv,
	Label,	
	Input,
	SubmitButton,
	LinkToLogIn,
	OrText,
	PageContainer
} from './FormRegistration.styled'
const FormRegistration = ({ registration }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const { name, email, password } = e.target.elements
		registration({
			name: name.value,
			email: email.value,
			password: password.value,
		})
	}
	return (
		<PageContainer >
			<FormContainer onSubmit={handleSubmit}>
				<FormContainerDiv >
					<Label htmlFor='exampleInputName'>
						Name
					</Label>
					<Input
						type='text'
						name='name'
					
						id='exampleInputName'
					/>
				</FormContainerDiv>
				<FormContainerDiv>
					<Label htmlFor='exampleInputEmail1' >
						Email address
					</Label>
					<Input
						type='email'
						name='email'
						
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					
				</FormContainerDiv>
				<FormContainerDiv >
					<Label htmlFor='exampleInputPassword1'>
						Password
					</Label>
					<Input
						name='password'
						type='password'
						
						id='exampleInputPassword1'
					/>
				</FormContainerDiv>
				<SubmitButton type='submit'>
					Registration
				</SubmitButton>
				<OrText>Or</OrText>
			<LinkToLogIn to='/login'>Login</LinkToLogIn>
			</FormContainer>
			
		</PageContainer>
	)
}

export default FormRegistration