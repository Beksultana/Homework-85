import React, {Component, Fragment} from 'react';
import MainContainer from "./container/MainContainer/MainContainer";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Albums from "./components/Albums/Albums";

class App extends Component {
  render() {
    return (
      <Fragment>
          <header>

          </header>
        <Container>
            <Switch>
                <Route path="/" exact component={MainContainer}/>
                <Route path="/artists/:id" component={Albums}/>
            </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
