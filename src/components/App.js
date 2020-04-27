import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Mainpage from "./pages/Mainpage";
import Exer from "./pages/Excer";
import Api from "./pages/Api";
import E_view from "./pages/Excer_view";
import E_edit from "./pages/Excer_edit";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

export default function App() {
  return (
    <div>
      {/* <Header />
      <Mainpage />      
      <Footer /> */}

      <Router history={history}>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/Exer" component={Exer} />
            <Route exact path="/Api" component={Api} />
            <Route exact path="/E_view" component={E_view} />
            <Route exact path="/E_edit/:id" component={E_edit} />
          </Switch>
          <Footer name={"satheesh_data_probs"} />
        </div>
      </Router>
    </div>
  );
}
