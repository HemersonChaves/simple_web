import { useState } from "react";
import apiAxios from "../infra/http/api"

function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dt_nascimento, setDt] = useState("");
    const [sexo, setSexo] = useState("");

    function cadastrarPessoa() {
        console.log(nome);
        console.log(cpf);
        console.log(dt);
        console.log(sexo);

        const pessoa = { nome, cpf, dt_nascimento, sexo };
        apiAxios.post('/pessoa/criar', pessoa)
            .then((response) => {
                console.log(response);
            })
            .catch(error => {

                console.error('There was an error!', error);
            });
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
                                value={dt_nascimento}
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
                <h1 id="f"></h1>
            </div>
        </div >
    )
}

export default Cadastro
