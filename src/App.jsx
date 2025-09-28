import './App.css'
import Header from './components/Header'
import MovieContent from './components/MovieContent'

function App() {
    const movies = [
        {
            image:"https://ingresso-a.akamaihd.net/prd/img/movie/toy-story-1995-30-anos/053980e6-50e3-4a54-8ca7-1c33b227b2fa.webp",
            title:"Toy Story (1995) - 30 anos",
            type:"Animação",
            rate:"L",
            time:"81 min",
            sinopse:"O aniversário de Andy está chegando e os brinquedos estão nervosos. Afinal de contas, eles temem que um novo brinquedo possa substituí-los. Liderados por Woody, um caubói que é também o brinquedo predileto de Andy, eles montam uma escuta que lhes permite saber dos presentes ganhos. Entre eles está Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Isto aos poucos gera ciúmes em Woody, que tenta fazer com que ele caia atrás da cama. Só que o plano dá errado e Buzz cai pela janela. É o início da aventura de Woody, que precisa resgatar Buzz também para limpar sua barra com os outros brinquedos.",
        },
        {
            image: "https://ingresso-a.akamaihd.net/prd/img/movie/demon-slayer-kimetsu-no-yaiba-castelo-infinito/9a4af0ff-dcd7-4f26-af34-4aa984cc8d36.webp",
            title: "Demon Slayer: Kimetsu No Yaiba - Castelo Infinito",
            type: "Animação",
            rate: "18",
            time: "155 min",
            sinopse: "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.",
        }
    ]
    return(
        <div id= 'container'>
            <Header/>
            <main>
                <div id='content'>
                    <div id='content-title'>
                        <h2>Destaques</h2>
                    </div>
                    <div id='content-movies'>
                        {movies.map(movie => (
                            <MovieContent
                                image ={movie.image}
                                title ={movie.title}
                                type ={movie.type}
                                rate ={movie.rate}
                                sinopse ={movie.sinopse}
                                time ={movie.time}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App