const Card = (x) => {
    console.log('props', x);
    return(
        <div>
            <h3>{x.title}</h3>
            <p>{x.price}</p>
        </div>
    )
}

module.exports = Card;