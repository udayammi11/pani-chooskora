import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp';
import ClsComp from './components/ClsComp';
import SecondComp from './components/SecondComp';

function App() {
  return (
    <div className="App">
      <FirstComp className="FirstComp-header" />
      <ClsComp />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Pani Chooskora</code> 
        </p>
        <a className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer">Google</a>
      </header>
      <SecondComp />
    </div>
  );
}

export default App;
