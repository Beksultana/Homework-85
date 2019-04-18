import React, {Component, Fragment} from 'react';
import MainContainer from "./container/MainContainer/MainContainer";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";

class App extends Component {
  render() {
    return (
      <Fragment>
          <header>

          </header>
        <Container>
            <Switch>
                <Route path="/" exact component={MainContainer}/>
            </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
