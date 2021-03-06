import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Saved from "./pages/Saved";



import Wrapper from "./components/Wrapper";


const App = () => (
  <Router>
    <div>
     
      <Wrapper>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved}/> 
       </Switch>
       </Wrapper>
     
 
    </div>
  </Router>
);

export default App;
