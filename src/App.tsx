import { ReactElement} from "react";
import AppRouter from './routers/AppRouter';

import './App.css';

const App:React.FC = ():ReactElement => {

    return (
        <AppRouter />
    );
}

export default App;