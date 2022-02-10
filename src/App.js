import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=3a389a56dd3347e5b8df972402d42fe1`;
      const response = await fetch(url);
      const noticias = await response.json()
      guardarNoticias(noticias.articles)
    };
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}


export default App;
