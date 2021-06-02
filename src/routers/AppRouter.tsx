import { ReactElement } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import FormCiudad from '../components/FormCiudad';

import NavBar from '../components/Navbar';
import Busquedas from '../components/Busquedas';
import Noticia from '../components/Noticia';
const AppRouter:React.FC = ( ):ReactElement => {
    
    return (
        <Router>
            <NavBar />
            
            <Switch>
                <Route exact path="/formu" component={ FormCiudad } />

                <Route exact path="/busquedas" component={Busquedas} />

                <Redirect to="/formu" />
            </Switch>

            {
                (!localStorage.getItem('city')) && <Noticia />
            }
        </Router>
    );
}


export default AppRouter;