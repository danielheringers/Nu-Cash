import { useState } from "react";
import CadastroFinanca from "../CadastroFinanca/index.jsx";
import InitialPage from "../InitialPage/index";
import Card from "../Card/Card.jsx";
import ValorTotal from "../ValorTotal";
import "./style.css";

function Dashboard() {
  const [listItems, setListItems] = useState([]);
  const [listFiltrada, setListFiltrada] = useState([]);
  const [isDash, setIsDash] = useState(false);

  function filtrar(CategoriaFiltro) {
    const CategoriaFiltrada = listItems.filter((Categoria) => Categoria.type === CategoriaFiltro);
    setListItems(CategoriaFiltrada);
    setListFiltrada([]);
  }

  function total(lista) {
    let total = 0;
    lista.map(({ value }) => {
      return (total += value);
    });
    return total;
  }

  return (
    <>
      {!isDash ? (
        <>
          <header>
            <div className="NuCash">
              <p className="Nu">Nu</p> <p className="Cash">Cash</p>
            </div>

            <button className="ButtonInicio" type="button" onClick={() => setIsDash(!isDash)}>
              Inicio
            </button>
          </header>
          <div className="MasterContainer">
            <div className="ContainerComponents">
              <CadastroFinanca setListItems={setListItems} />
              {listItems.length === 0 ? <div></div> : <ValorTotal total={total(listItems)} />}
            </div>

            <div className="ContainerResumo">
              <div className="Filtros">
                <p>Resumo Financeiro</p>
                <nav>
                  <button type="button">Todos</button>
                  <button type="button" onClick={() => filtrar("Entrada")}>
                    Entradas
                  </button>
                  <button type="button" onClick={() => filtrar("Saida")}>
                    Saídas
                  </button>
                </nav>
              </div>

              <ul className="ContainerCards">
                {listItems.length === 0 ? (
                  <p className="AvisoSemTransacoes">Você não possui nenhum lançamento</p>
                ) : (
                  listItems.map((transacoes) => {
                    return (
                      <li key={transacoes.id}>
                        <Card transacoes={transacoes} />
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <InitialPage />
      )}
    </>
  );
}

export default Dashboard;
