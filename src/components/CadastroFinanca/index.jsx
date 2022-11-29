import { useState } from "react";

import "./style.css";

function CadastroFinanca({setListItems}) {
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("Entrada");

  
  function handleSubmit(event) {
    let valorNovo = parseInt(valor);
    event.preventDefault();
    setListItems((previousList) => [...previousList,{id: previousList.length + 1, description: desc, value: valorNovo, type: tipo }]);
    
  }

  return (
    <>
      <div className="ContainerInserir">
        <div className="SubContainerInserir">
          <form onSubmit={handleSubmit}>
            <div className="Inserir">
              <div className="DescricaoTitle">
                <p>Descrição</p>
                <input
                  type="text"
                  name="Descricao"
                  id="Descricao"
                  placeholder="Digite aqui sua descrição"
                  onChange={(e) => setDesc(e.target.value)}
                />
                <small>Ex: Compra de Roupas</small>
              </div>

              <div className="InserirDetalhes">
                <div>
                  <label htmlFor="Valor">Valor</label>
                  <input
                    type="currency"
                    format="currency"
                    precision="2"
                    name="Valor"
                    id="Valor"
                    onChange={(e) => setValor(e.target.value)}
                    
                  />
                </div>

                <div>
                  <label htmlFor="TipoValor">Tipo de Valor</label>
                  <select
                    type="text"
                    name="TipoValor"
                    id="TipoValor"
                    onChange={(e) => setTipo(e.target.value)}
                    
                  >
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saída</option>
                  </select>
                </div>
              </div>

              <button className="ButtonInserir" type="submit">
                Inserir Valor
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CadastroFinanca;
