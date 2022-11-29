import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Imagem from "./Group262.png";
import './style.css';

function InitalPage() {
  const [isDash, setIsDash] = useState(true);
  return (
    <>
      {isDash ? (
        <div className="Container">
          <div className="Iniciar">
            <div className="NomeEmpresa">
              <p className="Nu">Nu</p> <p className="Kenzie">Kenzie</p>
            </div>
            <p className="Descricao">Centralize o controle das suas finanças</p>
            <small className="SubDescricao">de forma rápida e segura</small>

            <button
              className="ButtonIniciar"
              type="button"
              onClick={() => setIsDash(!isDash)}
            >
              Iniciar
            </button>
          </div>
          <div className="DecorationImg">
            <img src={Imagem} alt="Imagem" />
          </div>
        </div>
      ) : (
         <Dashboard/>
      )}
    </>
  );
}

export default InitalPage;
