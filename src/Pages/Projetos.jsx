import { Link } from "react-router-dom";
import './Projetos.css';

function Projetos() {
    return (
        <>
            <h1>Sou a página sobre Projetos</h1>
            <Link to={"/"}>Ir para Home</Link>
        </>
    )
}

export default Projetos;
