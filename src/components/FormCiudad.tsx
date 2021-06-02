import {ReactElement, useEffect, useState} from 'react';
import UseFetchData from '../hooks/useFetchData';
// import useForm from '../hooks/useForm';
import Caracteristicas from './Caracteristicas';
import API from './../helpers/api';
import './css/form.css';

// interface FormCiudadProps{
//     city:string,
// }

const FormCiudad: React.FunctionComponent = (): ReactElement => {
    // const refval = useRef();
    let datalocalStorage;
    const [valueId, setValueId] = useState<string>('')
    const [valueCiudad, setValueCiudad] = useState<string>('');
    console.log(valueId, valueCiudad);
   
  
    

    const enviar:Function = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const endpoint = `${API.CIUDAD}${valueId}/${valueCiudad}`;
        fetch(`${endpoint}`, {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-origin': '*',
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => {

                console.log(data);
                interface objectLocalStorage{
                    idCity:number,
                    name:string,
                    idCiudad:number,
                    author:string,
                    tittle:string,
                    Published:string,
                    idClima:number,
                    temperatura:number,
                    windspeed:number

                }
                const {city, news, clima}  = data;
                const {id , nombre} = city ; 
                const {id:idCiudad , author, tittle, Published} = news ;
                const {id:idClima, temperatura, windSpeed} = clima;
                const datosLocalStorages:objectLocalStorage = {
                    idCity:id,
                    name:nombre,
                    idCiudad,
                    author,
                    tittle,
                    Published,
                    idClima,
                    temperatura,
                    windspeed:windSpeed

                }  
                localStorage.setItem('city',`${JSON.stringify(datosLocalStorages)}`)
            })
            .catch(err => console.error(err));
        // alert('hola');
        //https://localhost:44332/api/ciudad/10/aruba     endpoint
    };

    return (
        <div
            className="form"
        >
            <section className="info">
                {
                    (datalocalStorage == null)
                      ? <p> Todavia no has hecho busquedas introduce tu ciudad</p>
                      : <Caracteristicas /> 
                      
                }
               
            </section>

            <form
                className="formulario"
                onSubmit={ (e) => enviar(e)}
            >
                <input
                    type="number"
                    placeholder="escribe el id ciudad"
                    name="id"
                    onChange={(e) => setValueId(e.target.value)}
                    value={valueId}
                />

                <input
                    type="text"
                    placeholder="escribe el nombre de la ciudad"
                    name="ciudad"
                    onChange={(e) => setValueCiudad(e.target.value)}
                    value={valueCiudad}
                />

                <button type="submit"> Buscar.. </button>
            </form>
        </div>
    );
}

export default FormCiudad;

