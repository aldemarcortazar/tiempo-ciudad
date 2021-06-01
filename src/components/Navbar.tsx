import {ReactElement } from "react";
import { 
        Link 
    } from 'react-router-dom';

import './css/navbar.css';
const NavBar:React.FC = ():ReactElement => {

    return (
        
        <nav>
            <Link to="/formu" > inicio </Link>

            <Link to="/busquedas"> busquedas </Link>
        </nav>
    );
}

export default NavBar;

