import { ReactElement } from "react";

interface Caracteristicasprops {
   city:string,
   temperatura:number,
   windspeed: number
 }
const Caracteristicas:React.FunctionComponent<Caracteristicasprops> = ({city, temperatura, windspeed}):ReactElement => {

  
  return (

    <>
    <p>ciudad: {city}</p>
    <p>temperatura: °{temperatura}</p>
    <p>viento: {windspeed}</p>
    </>
    
    
  );
}


export default Caracteristicas;