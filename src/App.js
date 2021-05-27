import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import UserProvider from './context/users/Provider'
import Routes from './routes/Routes'

export const App = () => {

	return(	
		<UserProvider>
	      <GlobalStyles />	      
	      <Routes />
	    </UserProvider>	
	)
}
