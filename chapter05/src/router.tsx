import * as  React from 'react';
import { Route,Switch} from 'react-router-dom'
import pageTodo from "./containers/pageTodo"


const RouterMap = () => {
    return (
      <Switch>
        <Route exact={true} path="/" component={pageTodo} />
        <Route  path="/todo" component={pageTodo} />
      </Switch>
    )
}

export default RouterMap

