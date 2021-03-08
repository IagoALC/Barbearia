import './assets/css/App.css';
import "./assets/css/reset.css";
import "./assets/css/base.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Index from "./components/index/Index";
import Services from "./components/servicos/Services";
import Page404 from "./pages/page404/Page404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
    <section className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
