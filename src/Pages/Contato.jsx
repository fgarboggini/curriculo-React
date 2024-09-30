import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Contato.css';

function Contato() {
    return (
        <>
            <h1>Entre em Contato</h1>
            <div className="social-links">
                <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={30} />
                </a>
                <a href="https://github.com/fgarboggini" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
            </div>
            <Link to={"/"}>Ir para Home</Link>
        </>
    )
}

export default Contato;
