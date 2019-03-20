import React from 'react';
import { WrappedRegistrationForm } from './components/Forms'
import Detail from './components/Detail'
import Personal from './containers/personal'
import pageChart from './containers/pageChart'
import pageMonitor from './containers/pageMonitor'
import PageLists from './containers/pageLists'
import AddUser from './containers/addUser'
import { Route , Switch} from 'react-router-dom';


const RouterMap = () => {
    return (
        <Switch>
            <Route exact path="/" component={Detail} />
            <Route path="/form" component={WrappedRegistrationForm} />
            <Route path="/detail" component={Detail} />
            <Route path="/lists" component={PageLists} />
            <Route path="/personal" component={Personal} />
            <Route path="/charts" component={pageChart} />
            <Route path="/addUser" component={AddUser} />
            <Route path="/pageMonitor" component={pageMonitor} />
        </Switch>
    )
}
export default RouterMap
