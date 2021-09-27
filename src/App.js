import { MenuMobile, TopBar, NavBar } from "./components";
import { useState } from "react";
import { Home, NewsViewer, Building as WIP } from "./containers";
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
              <Route exact path="/wip" component={WIP} />
              <Route exact path="/" component={Home} />
            </Switch>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
