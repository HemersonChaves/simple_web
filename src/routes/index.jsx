import {BrowserRouter as Router, Link, 
    Routes, Route} from 'react-router-dom'
  
  import Tabela from '../pages/tabela';
    
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
          
          </Routes>
       </Router>
      </div>
    );
  }
    
  export default Rotas;