import { Link } from "react-router-dom";
import './Sobre.css';

function Sobre() {
    return (
        <>
            <h1>Sou a Página Sobre</h1>
            <p>
                Fábio é um programador que, ao longo de sua trajetória, navegou por diversas áreas do conhecimento, incluindo Música, Museologia e História, o que o leva a desenvolver soluções criativas em diferentes contextos. Atualmente, como estudante de programação na Infinity School, ele está aprimorando suas habilidades em HTML, CSS e JavaScript além de outras habilidades específicas da área da programação. Essa experiência multidisciplinar não apenas enriquece sua visão, mas também o capacita a integrar conceitos artísticos e técnicos em projetos inovadores. Sua formação diversificada tem sido fundamental para criar abordagens únicas e eficazes na resolução de problemas, demonstrando que a interseção entre as artes e a tecnologia pode resultar em soluções impactantes e criativas.
            </p>
            <Link to={"/"}>Ir para Home</Link>
        </>
    );
}

export default Sobre;
