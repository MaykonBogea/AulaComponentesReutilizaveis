function Card(prox: { num: number}){
    return(
        <div>
            <h3>Cartão</h3>
            <p>Esse é o cartão {prox.num}</p>
        </div>
    )
}

export default Card