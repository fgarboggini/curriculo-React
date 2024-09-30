import {Link} from 'react-router-dom'
import "./Home.css"
import MinhaFoto from '../Pages/fabio.webp'
function Home(){
    return(
        <>
        <h1>Sou a home</h1>
        <img src={MinhaFoto} alt='Minha foto'/>
        <br></br>
        <Link to={"/habilidades"}>Ir para Habilidades / Experiência</Link>
        <br></br>
        <Link to={"/projetos"}>Ir para Projetos</Link>
        <br></br>
        <Link to={"/sobre"}>Ir para Sobre Mim</Link>
        <br></br>
        <Link to={"/contato"}>Ir para Contato</Link>
        </>
    )
}
export default Home;
