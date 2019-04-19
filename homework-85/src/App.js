import React, {Component, Fragment} from 'react';
import MainContainer from "./container/MainContainer/MainContainer";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Albums from "./components/Albums/Albums";
import Tracks from "./components/Tracks/Tracks";
import Toolbar from "./components/UI/Toolbar/Toolbar";


class App extends Component {
  render() {
    return (
      <Fragment>
          <header>
              <Toolbar/>
          </header>
        <Container>
            <Switch>
                <Route path="/" exact component={MainContainer}/>
                <Route path="/albums/:id" component={Albums}/>
                <Route path="/tracks/:id" component={Tracks}/>

            </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
