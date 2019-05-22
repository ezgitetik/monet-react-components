import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import {ROUTE as HOME_ROUTE} from "./Home";
import Home from "./Home/Home";

type Props = ContextRouter;

class App extends React.PureComponent<Props> {
    render() {
        return (
            <Switch>
                <Route path={`${HOME_ROUTE}`} component={Home}/>
                <Redirect exact from='/' to={`${HOME_ROUTE}`}/>
            </Switch>
        );
    }
}

export default App;
