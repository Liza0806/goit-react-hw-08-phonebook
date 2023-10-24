import { Link } from 'react-router-dom'
import {PageContainer, FormContainer, Label, Input, SubmitButton, OrText, LinkToRegistration } from './FormLogin.styled'

const FormLogin = ({ login }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const { email, password } = e.target.elements
		login({
			email: email.value,
			password: password.value,
		})
	}
	return (
		<PageContainer>

			<FormContainer onSubmit={handleSubmit}> 
				<div >
					<Label htmlFor='exampleInputEmail1' >
						Email address
					</Label>
					<Input
						type='email'
						name='email'
					
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					
				</div>
				<div >
					<label htmlFor='exampleInputPassword1' >
						Password
					</label>
					<Input
						name='password'
						type='password'
					
						id='exampleInputPassword1'
					/>
				</div>
				<SubmitButton type='submit'>
					Login
				</SubmitButton>
				<OrText>Or</OrText>
			</FormContainer>
			
			<LinkToRegistration to='/registration'>Registration</LinkToRegistration>
		</PageContainer>
	)
}

export default FormLogin