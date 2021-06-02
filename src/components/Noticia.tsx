import { ReactElement } from "react";

import './css/noticia.css';

const Noticia:React.FunctionComponent= ():ReactElement => {
  const data = localStorage.getItem('city');

  return (
    <>
      
      {
        (data == null)
          ? <h2> no hay noticias para mostar </h2>
          : <h2> noticias </h2>
      }
      <table>
        <tr>
          <td>author</td>
          <td>Title</td>
          <td>fecha</td>
        </tr>
        <tr>
          <td> juan </td>
          <td> policias vs ladrones</td>
          <td> 2020-03-10</td>
        </tr>
      </table>
    </>
  );
}

export default Noticia;