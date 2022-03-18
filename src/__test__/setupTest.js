import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
require('jest-fetch-mock').enableMocks()

configure({ adapter: new Adapter() })
// Captura las peticiones y las realiza
//global.fetch = require('jest-fetch-mock')