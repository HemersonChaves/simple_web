import { useEffect, useState } from "react";
import apiAxios from "./infra/http/api"
//const apiAxios = require("./api");

function App() {
  const [pessoas, setPessoas] = useState();

  useEffect(() => {
    apiAxios
      .get("/pessoa")
      .then((response) => setPessoas(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div className="content">
      <div className="columns is-centered">
        <div className="column is-half ">
          <h1>Lista de pessoa</h1>
          <table className="table ">
            <thead>
              <tr>
                <th>id</th>
                <th>nome</th>
                <th>cpf</th>
                <th>nascimento</th>
                <th>sexo</th>
                <th>criação</th>
              </tr>
            </thead>
            <tbody>
              {pessoas?.map(pessoa => (
                <tr key={pessoa.id}>
                  <td >{pessoa.id}</td>
                  <td >{pessoa.nome}</td>
                  <td >{pessoa.cpf}</td>
                  <td >{pessoa.dt_nascimento}</td>
                  <td >{pessoa.sexo}</td>
                  <td >{pessoa.dt_criacao}</td>
                </tr>
                 // <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />

              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export default App
