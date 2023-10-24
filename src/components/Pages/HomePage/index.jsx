import { profileSelector } from '../../Store/auth/selector'
import { useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { HomePageContainer, Greeting, Description,WelcomeContainer, LinksForStart, GetStartedButton, WelcomeText, LinksContainer } from './HomePage.styled'

const HomePage = () => {
	const profile = useSelector(profileSelector)
	const navigate = useNavigate()
	return ( <HomePageContainer>
		<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div ><WelcomeContainer>
{!profile&& (<div>
<WelcomeText>Welcome to start page! This is a phonebook. To utilize its features, please follow one of the two links:</WelcomeText>
<LinksContainer>
<LinksForStart to='/registration'>
		Registration
	</LinksForStart>

	<LinksForStart to='/login'>
		Login
	</LinksForStart></LinksContainer>
</div>)}
		{profile && (
			<>
				<Greeting >Hello, {profile.name}! </Greeting>
				<Description>You can start working with your phone book</Description>
				<GetStartedButton to='/phonebook/*'>
		Get started
	</GetStartedButton>
				
			</>
		)}</WelcomeContainer>
		</HomePageContainer>

	)
}

export default HomePage
