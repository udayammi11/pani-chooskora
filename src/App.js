import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp';
import ClsComp from './components/ClsComp';
import SecondComp from './components/SecondComp';
import Hello from './components/Hello';
import CircularProgress from "./CircularProgress";
import { CompanyProvider } from "./CompanyContext";
import HomePage from "./HomePage";
import Settings from "./Settings";


function App() {
  return (
    <div className="App">
      <CompanyProvider>
            <HomePage />
            <Settings />
        </CompanyProvider>
      <FirstComp className="FirstComp-header" name="Ais" >
        <p>Children</p>
        </FirstComp>
      <FirstComp className="FirstComp-header2" >
        <button>Start</button>
      </FirstComp>
      <ClsComp />
      <Hello />
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
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <CircularProgress duration={60} />
      </div>
    </div>
  );
}

export default App;
