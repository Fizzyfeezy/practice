import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import AppNinjas from './components/AppNinjas';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import CounterTwo from './components/CounterTwo';
import HoverCountertwo from './components/HoverCountertwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <div className="App">
      {/* <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1> */}
      <UserProvider value = "Fizzyfeezy">
          <ComponentC/>
      </UserProvider>
      
      {/* <CounterTwo render = {(count, IncrementCount) => <ClickCounterTwo count = {count} 
      IncrementCount = {IncrementCount}/>}/>
      <CounterTwo render = {(count, IncrementCount) => <HoverCountertwo count = {count} 
      IncrementCount = {IncrementCount}/>}/> */}
      {/* <ClickCounter name = "Hello"/>
      <HoverCounter name = "Hello"/> */}
      {/* <ErrorBoundary>
        <Hero heroName = 'Davis'/>
      </ErrorBoundary> */}
      {/* <AppNinjas /> */}
      {/* <ParentComp /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <Form /> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary = {true}/> */}
      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Counter /> */}
      {/* <Greet /> */}
      {/* <Greet name = 'Clark' heroName = 'Phrase'>Take note of Every Child</Greet> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
