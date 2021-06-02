import { ReactElement } from "react";

import './css/noticia.css';

interface NoticiasProps {
  author:string,
  title:string,
  Published:string
}
const Noticia:React.FunctionComponent<NoticiasProps>= ({author, title, Published}):ReactElement => {
  

  return (
    <>
      
     
      <table>
        <tr>
          <td>author</td>
          <td>Title</td>
          <td>fecha</td>
        </tr>
        <tr>
          <td> {author} </td>
          <td> {title}</td>
          <td> {Published}</td>
        </tr>
      </table>
    </>
  );
}

export default Noticia;