import './style.css'

const Total = ({total}) => {
    return(
        <>
         <div className="CardTotal">
            <div>
                <p>Valor Total:</p>
                <p>{`R$ ${total}`}</p>
            </div>
            <small>O valor se refere ao saldo</small>
         </div>
        </>
    )
}

export default Total