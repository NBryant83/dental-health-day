import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Procedures from './Procedures'

const App = () => (
  <Router>
    <div>
      <h1>Dentist Website</h1>
      <Link to="/home">Home</Link>
      <Link to="/procedures">Procedures</Link>
      <Link to="/contact">Contact</Link>
      <Route path="/home" component={Home} />
      <Route path="/procedures" component={Procedures} />
      <Route path="/contact" component={Contact} />
    </div>

  </Router>
)

export default App
