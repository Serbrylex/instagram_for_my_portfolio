import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

require('jest-fetch-mock').enableMocks()

Enzyme.configure({
  adapter: new EnzymeAdapter()
})
// Captura las peticiones y las realiza