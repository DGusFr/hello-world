import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

//"element" é usada para especificar o componente que deve ser renderizado
//"AppRoutes" é exportada como o valor padrão, o que permite que ela seja importada e usada em outras partes do código.
// rota "sobremim" renderiza o componente "SobreMim", rota index renderiza o componente "Inicio".
function AppRoutes() {
  //o atributo 'index' na rota inicio e a simplificação das rotas aninhadas de 'PaginaPadrão'
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
