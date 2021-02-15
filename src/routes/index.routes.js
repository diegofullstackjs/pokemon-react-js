import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from '../pages/home';
import PokemonPage from '../pages/pokemon/index'
const Routes = () => (
     <BrowserRouter>
        <Switch>
            <Route path='/pokemon/:id/:parameter' component={PokemonPage} exact />
            <Route path='/' component={Home} exact />
        </Switch>
     </BrowserRouter>
)

export default Routes;