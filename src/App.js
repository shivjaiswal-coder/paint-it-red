import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
import CartPage from './Components/CartPage/CartPage'
import LoginPage from './Components/LoginPage/LoginPage'
import OrderPage from './Components/OrderPage/OrderPage'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact><HomePage/></Route>
        <Route path="/LoginPage" component={LoginPage} exact><LoginPage/></Route>
        <Route path="/OrderPage" component={OrderPage} exact><OrderPage/></Route>
        <Route path="/CartPage" component={CartPage} exact><CartPage/></Route>
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
