import './App.css'

function App() {
    return(
        <div id= 'container'>
            <header>
                <h1>
                    Filmes
                </h1>
            </header>
            <main>
                <div id='content'>
                    <div id='content-title'>
                        <h2>Destaques</h2>
                    </div>
                    <div id='content-movies'>
                        <div className='movie-content'>     {/*copiar linha 17 à 39 */}
                            <div className='movie-img'>
                                <img src='https://ingresso-a.akamaihd.net/prd/img/movie/toy-story-1995-30-anos/053980e6-50e3-4a54-8ca7-1c33b227b2fa.webp'
                                width='200'/>
                            </div>
                            <article>
                                <section>
                                    <h3>Toy Story (1995) - 30 anos</h3>
                                    <p className='movie-info'>
                                        <span className='rate'>
                                            L
                                        </span>
                                        Animação | 81 min
                                    </p>
                                </section>
                                <section>
                                    <h4>
                                        Sinopse
                                    </h4>
                                    <p className='sinopse'>O aniversário de Andy está chegando e os brinquedos estão nervosos. Afinal de contas, eles temem que um novo brinquedo possa substituí-los. Liderados por Woody, um caubói que é também o brinquedo predileto de Andy, eles montam uma escuta que lhes permite saber dos presentes ganhos. Entre eles está Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Isto aos poucos gera ciúmes em Woody, que tenta fazer com que ele caia atrás da cama. Só que o plano dá errado e Buzz cai pela janela. É o início da aventura de Woody, que precisa resgatar Buzz também para limpar sua barra com os outros brinquedos.</p>
                                </section>
                            </article>
                        </div> <hr/>
                                                <div className='movie-content'>     
                            <div className='movie-img'>
                                <img src='https://ingresso-a.akamaihd.net/prd/img/movie/demon-slayer-kimetsu-no-yaiba-castelo-infinito/9a4af0ff-dcd7-4f26-af34-4aa984cc8d36.webp'
                                width='200'/>
                            </div>
                            <article>
                                <section>
                                    <h3>Demon Slayer: Kimetsu No Yaiba - Castelo Infinito</h3>
                                    <p className='movie-info'>
                                        <span className='rate'>
                                            18
                                        </span>
                                        Animação | 155 min
                                    </p>
                                </section>
                                <section>
                                    <h4>
                                        Sinopse
                                    </h4>
                                    <p className='sinopse'>Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.</p>
                                </section>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App