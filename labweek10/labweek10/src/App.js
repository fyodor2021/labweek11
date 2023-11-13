import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Form from "./components/Form"
function App() {
  return (
    <div style={{padding: "50px"}}>
      <header>
        <Header text="Data Entry Form" tag="h1"/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
