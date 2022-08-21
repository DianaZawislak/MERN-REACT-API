import logo from './logo.svg';
import './App.css';
import ClassFetch from './components/ClassFetch'
import FunctionFetch from './components/FunctionFetch'
import SauceFetch from './components/SauceFetch';
import AxiosFetch from './components/AxiosFetch'
import Search from './components/Search'
import { useState } from 'react';


function App() {
  
  const [text, setText] = useState("New York")
  
  //
  return (
    // Adding a Key to the Census component will force a 
    // componentWillUnmount if the value changes.
    // And properly re-fetch the data!
    // In the SauceFetch component, the same thing is accomplished with
    // the dependency array argument of the useEffect function.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>{text}</h1>
          <Search onAddClick={setText} />
          <ClassFetch key={text} name={text}></ClassFetch>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
