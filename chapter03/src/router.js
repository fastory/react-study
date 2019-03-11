import React from 'react';
import { WrappedRegistrationForm } from './components/Forms'
import Detail from './components/Detail'
import Buttons from './components/Buttons'
import pageChart from './containers/pageChart'
import pageMonitor from './containers/pageMonitor'
import PageLists from './containers/PageLists'
import { Route , Switch} from 'react-router-dom';


const RouterMap = () => {
    return (
        <Switch>
            <Route exact path="/" component={Detail} />
            <Route path="/form" component={WrappedRegistrationForm} />
            <Route path="/detail" component={Detail} />
            <Route path="/lists" component={PageLists} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/charts" component={pageChart} />
            <Route path="/pageMonitor" component={pageMonitor} />
        </Switch>
    )
}
export default RouterMap
