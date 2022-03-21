import { useEffect, useState } from "react";
import apiAxios from "../infra/http/api"

function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dt, setDt] = useState("");
    const [sexo, setSexo] = useState("");

    useEffect(() => {
        apiAxios
            .get("/pessoa")
            .then((response) => setPessoas(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    function cadastrarPessoa(){
        console.log(nome);
        console.log(cpf);
        console.log(dt);
        console.log(sexo);
    }
    return (
        <div className="content">
            <div className="columns is-centered">
                <div className="column is-half ">
                    <h1>Cad de pessoa</h1>
                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            ></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">cpf</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="cpf"
                            onChange={(e) => setCpf(e.target.value)}
                            value={cpf}
                            ></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">dt_nascimento</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="data nascimento"
                            onChange={(e) => setDt(e.target.value)}
                            value={dt}
                            ></input>
                        </div>
                    </div>
                    <div className="select">
                        <select
                        onChange={(e) => setSexo(e.target.value)}
                        value={sexo}
                        >
                            <option value="m">masculino</option>
                            <option value="f">feminino</option>
                        </select>
                    </div>
                    <div className="control">
                        <button className="button is-primary" onClick={cadastrarPessoa}>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cadastro
