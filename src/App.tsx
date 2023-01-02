import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurannte from './paginas/Administracao/Restaurantes/AdministracaoRestaurante';
import FormularioRestaurante from './paginas/Administracao/Restaurantes/FormularioRestaurante';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import AdministracaoPratos from './paginas/Administracao/Patros/AdministraçaõPratos';
import FormularioPratos from './paginas/Administracao/Patros/FormularioPratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='/admin' element={<PaginaBaseAdmin/>}>
        <Route path="restaurantes" element={<AdministracaoRestaurannte />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />

        <Route path="pratos" element={<AdministracaoPratos />} />
        <Route path="pratos/novo" element={<FormularioPratos />} />
        <Route path="pratos/:id" element={<FormularioPratos />} />
      </Route>

    </Routes>
  );
}

export default App;
