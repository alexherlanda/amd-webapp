import { MenuMobile, TopBar, NavBar } from "./components";
import { useState } from "react";
import {
  Home,
  NewsViewer,
  Building as WIP,
  PageTest,
  About,
} from "./containers";
import { Education } from "./containers";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  const [isMenuOpen, seIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    seIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Switch>
        {isMenuOpen ? (
          <MenuMobile onClose={toggleMenu} />
        ) : (
          <>
            <TopBar onMenuClick={toggleMenu} />
            <NavBar />
            <Switch>
              <Route exact path="/news/:id" component={NewsViewer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/wip" component={WIP} />
              <Route exact path="/" component={Home} />
              <Route exact path="/test" component={PageTest} />
              <Route exact path="/education" component={Education} />
            </Switch>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
