import {FormEvent, ReactElement} from 'react';

import './css/form.css';

const FormCiudad:React.FC = (  ):ReactElement => {

    const handleDelete = (e:FormEvent):void => {
        e.preventDefault();
        alert('hola');
    }

    return (
        <div
            className="form"
        >
            <section className="info"> 
                <h2>KIEV/UA</h2>
                <h2>CLEAR SKY</h2>
                <h2>-4 °C</h2>  
            </section>

            <form
                onSubmit={ (e) => handleDelete(e) }
            >
            <input 
                type= "text"
                placeholder="escribe el id ciudad"
            />

            <input
                type="text"
                placeholder="escribe el nombre de la ciudad"
            />

            <button
                type="submit"
            >
                Buscar..
            </button>
            </form>
        </div>
    );
}

export default FormCiudad;