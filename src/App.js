import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="title">
        <Header />
      </header>
      <Form></Form>
      <div className="foot">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
