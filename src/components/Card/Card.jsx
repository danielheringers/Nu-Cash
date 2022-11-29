import './style.css'
import Delete from "./trash.png"


const Card = ({transacoes}) => {
    return(
        <>
        {transacoes.type === "Entrada" ? 
            <div className="Entrada" >
                <div className='CardDesc'>
                    <p>{transacoes.description}</p>
                    <span>{transacoes.type}</span>
                </div>
                <div className='Delete'>
                    <span>{`R$ ${transacoes.value}`}</span>
                    <button onClick={() => Delete(transacoes.id)}><img src={Delete} alt="delte" /></button>
                </div>
            </div>
            :
            <div className="Saida">
                <div className='CardDesc'>
                    <span>{transacoes.description}</span>
                    <span>{transacoes.type}</span>
                </div>
                <div className='Delete'>
                    <span>{`R$ ${transacoes.value}`}</span>
                    <button onClick={() => Delete(transacoes.id)}><img src={Delete} alt="delte" /></button>
                </div>

            </div>
        }
        </>

    )
}
export default Card