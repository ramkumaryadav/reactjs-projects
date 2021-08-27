import React from 'react';
import Home from './Home';
import { Route, Switch } from "react-router";
import Aboutus from './pages/About';
import Contact from './pages/Contactus';
import Services from './pages/Service';
import Error from './pages/Error';

export const App = () => {
  return (
    <>
   <Switch>
    <Route exact path="/" component={Home} ></Route>
    <Route path="/about" component={Aboutus} ></Route>
    <Route path="/contactus" component={Contact} ></Route>
    <Route path="/service" component={Services} ></Route>
    <Route  component={Error} ></Route>
     </Switch>
    </>
  );
};


export default App;
