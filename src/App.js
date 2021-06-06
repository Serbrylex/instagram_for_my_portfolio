// React
import React from 'react'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// Routes
import Routes from './routes/Routes'

// Providers
import UserProvider from './context/users/Provider'
import ThemeProvider from './context/theme/Provider'
import LanguageProvider from './context/language/Provider'


export const App = () => {

	return(			
		<ThemeProvider>
			<LanguageProvider>
				<UserProvider>
			      <GlobalStyles />	      
			      <Routes />
			    </UserProvider>	
		    </LanguageProvider>
	    </ThemeProvider>	   	
	)
}
