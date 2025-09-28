function MovieContent({image, title, rate, type, time, sinopse}){
    return(
        <>
            <div className='movie-content'>     {/*copiar linha 17 à 39 */}
                <div className='movie-img'>
                    <img src={image}
                    width='200'/>
                </div>
                <article>
                    <section>
                        <h3>{title}</h3>
                        <p className='movie-info'>
                            <span className='rate'>
                                {rate}
                            </span>
                            {type} | {time}
                        </p>
                    </section>
                    <section>
                        <h4>
                            Sinopse
                        </h4>
                        <p className='sinopse'>{sinopse}</p>
                    </section>
                </article>
            </div>
            <hr/>
        </>
    )
}

export default MovieContent