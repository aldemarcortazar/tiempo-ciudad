import {ReactElement, useEffect, useState} from 'react';
import UseFetchData from '../hooks/useFetchData';
// import useForm from '../hooks/useForm';
import Caracteristicas from './Caracteristicas';
import API from './../helpers/api';
import './css/form.css';
import {objectGlobalState} from './../interfaces/interfaces';
import Noticia from './Noticia';
import { title } from 'process';


// interface FormCiudadProps{
//     city:string,
// }

const FormCiudad: React.FunctionComponent = (): ReactElement => {
    // const refval = useRef();
    
    const [valueId, setValueId] = useState<string>('')
    const [valueCiudad, setValueCiudad] = useState<string>('');
    const [globalState , setGlobalState] = useState<objectGlobalState>({
        idCity:0,
        name:'',
        idCiudad:0,
        author:'',
        tittle:'',
        Published:'',
        idClima:0,
        temperatura:0,
        windspeed:0

    });
    const {idCity, name, idCiudad, author, tittle, Published, idClima, temperatura, windspeed} = globalState;
    
  
    

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
              
                const {city, news, clima}  = data;
                const {id , nombre} = city ; 
                const {id:idCiudad , author, title, published} = news ;
                const {id:idClima, temperatura, windSpeed} = clima;
                const datosLocalStorages:objectGlobalState = {
                    idCity:id,
                    name:nombre,
                    idCiudad,
                    author,
                    tittle:title,
                    Published:published,
                    idClima,
                    temperatura,
                    windspeed:windSpeed

                }  
                setGlobalState(datosLocalStorages);
            })
            .catch(err => console.error(err));
        // alert('hola');
        //https://localhost:44332/api/ciudad/10/aruba     endpoint
    };

    return (
        <>
            <div
                className="form"
            >
            <section className="info">
                {
                    (name == '')
                        ? <p> Todavia no has hecho busquedas, introduce tu ciudad</p>
                        :   <Caracteristicas 
                                city={name}
                                temperatura ={temperatura}
                                windspeed = {windspeed}
                            />
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
            {
                (name != '') && <Noticia author ={author} title={title} Published={Published}/>
            }
        </>  
    );
}

export default FormCiudad;

