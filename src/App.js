import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/partials/Header'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import serviceDetails from './data/serviceDetails'

const App = () => (
  <Router>
    <div>           
      <Header />
      <Route exact path="/" component={Home} />
      <Route 
      path="/services" 
      render={() => <Services services={serviceDetails} />} 
      />
      <Route path="/contact" component={Contact} />
    </div>

  </Router>
)

export default App
