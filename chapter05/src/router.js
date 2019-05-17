import React from 'react';
import { Route , Switch} from 'react-router-dom';
import pageTodo from "./containers/pageTodo";


const RouterMap = () => {
    return (
      <Switch>
        <Route exact path="/" component={pageTodo} />
        {/* <Route path="/form" component={WrappedRegistrationForm} /> */}
        <Route path="/todo" component={pageTodo} />
        {/* <Route path="/lists" component={PageLists} />
        <Route path="/personal" component={Personal} />
        <Route path="/charts" component={pageChart} />
        <Route path="/addUser" component={AddUser} />
        <Route path="/pageMonitor" component={pageMonitor} /> */}
      </Switch>
    );
}
export default RouterMap
