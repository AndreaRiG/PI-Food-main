import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home";
import Detail from "./components/DetailPage/Detail";
import Form from "./components/Form/Form"
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/NavBar/NavBar';


function App() {
  const location = useLocation();
  return (

    <div className="App">
      <BrowserRouter>
        {location.pathname !== "/" && <NavBar />}

        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/create"component={Form}/>
      </BrowserRouter>
    </div>

  )
}

export default App;
