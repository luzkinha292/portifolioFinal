import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Imagem from '../../assets/images/prjGame.png'
import pets from '../../assets/images/audorable.png'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([
        // Example static portfolio items
        {
            name: "Site sobre Realismo",
            description: "Site construído usando HTML, CSS e JS",
            url: "https://github.com/joaoalex4ndr3/Realismo",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Machado-450.jpg"
        },
        {
            name: "Site para um Pet-Shop",
            description: "Site construído utilizando HTML, CSS e JS",
            url: "https://github.com/luzkinha292/prjPetSho",
            image: pets
        },
        {
            name: "Site de cadastro de jogos com banco de dados simples",
            description: "Site simples com conexão com o MySQL",
            url: "https://github.com/luzkinha292/prjGame",
            image: Imagem
        },
        {
            name: "Site informativo sobre os povos originários Guarani",
            description: "Site básico em React",
            url: "https://povo-guarani-brasil.vercel.app/",
            image: "https://www.seculodiario.com.br/wp-content/uploads/2021/03/b2ap3_large_20210324_234135.jpg"
        }
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => (
                        <div className="image-box" key={idx}>
                            <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" 
                            />
                            <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
