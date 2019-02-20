import React from 'react';
import { WrappedRegistrationForm } from './components/Forms'
import Detail from './components/Detail'
import Buttons from './components/Buttons'
import { Route , Switch} from 'react-router-dom';


const RouterMap = () => {
    return (
        <Switch>
            <Route exact path="/" component={Detail} />
            <Route path="/form" component={WrappedRegistrationForm} />
            <Route path="/detail" component={Detail} />
            <Route path="/buttons" component={Buttons} />
        </Switch>
    )
}
export default RouterMap