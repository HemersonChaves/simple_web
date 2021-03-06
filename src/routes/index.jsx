import {BrowserRouter as Router, Link, 
    Routes, Route} from 'react-router-dom'
  
  import Tabela from '../pages/tabela';
  import Cadastro from '../pages/cadastro';
    
  function Rotas() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/">tabela</Link>
            <Link to="cadastro">Cadastros</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Tabela />} />
            <Route path="/cadastro" element={<Cadastro />} />
          
          </Routes>
       </Router>
      </div>
    );
  }
    
  export default Rotas;