import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Footer from './components/Footer';
import AppCard from './components/Card.js';
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cards" component={Cards} />
      </Switch>
    </BrowserRouter>
  );
}
const Home = () => (
  <div className="App">
    <header className="title">
      <Header />
    </header>
    <Form></Form>
    <div className="foot">
      <Footer></Footer>
    </div>
  </div>
  // <div>
  // <AppCard></AppCard>
  // </div>

);

const Cards = () => (
  <div className="c1">
    <header className="title">
      <Header />
    </header>
    <AppCard Titles = {["Stick", "Toothbrush", "Soap", "Bark", "Car", "Pine Cone"]} Strings = {["Protect self from animals", "Brush teeth", "Find water and clean self", "Start a fire", "Drive to safety", "Burn to make fire"]}/>
  </div>
);
export default App;
