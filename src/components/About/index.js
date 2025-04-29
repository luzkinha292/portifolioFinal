// import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faJava,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
  faNode
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
const About = () =>{
  const [letterClass , setLetterClass] = useState('text-animate');
  return(
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['S','O','B','R','E',' ','M','I','M']}
          idx={15 }

          />
        </h1>
        <p>
        Sou estudante de Desenvolvimento de Sistemas no SENAI, movido pela paixão por tecnologia e pela vontade constante de aprender e evoluir profissionalmente. Tenho como principal objetivo crescer na carreira, sempre buscando novas oportunidades que me permitam ganhar experiência prática e aprofundar meus conhecimentos na área.
        </p>

        <p align="LEFT">
        Aprendo com rapidez, sou curioso por natureza e estou sempre em busca de soluções criativas e eficientes para os desafios que enfrento. Acredito no poder do trabalho em equipe e valorizo um ambiente colaborativo, onde todos crescem juntos. Estou preparado para contribuir com dedicação, responsabilidade e entusiasmo em cada projeto que eu fizer parte.
        </p>

        <p>
        Para mim, cada experiência é uma chance de evoluir e me tornar um profissional ainda mais completo e preparado para o mercado. Estou pronto para somar e fazer a diferença.
        </p>
      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
             <div className="face1">
               <FontAwesomeIcon icon={faNode} color="#DD0031" />
             </div>
             <div className="face2">
               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
             </div>
             <div className="face3">
               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
             </div>
             <div className="face4">
               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
             </div>
             <div className="face5">
               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
             </div>
             <div className="face6">
               <FontAwesomeIcon icon={faJava} color="#EC4D28" />
             </div>
           </div>
         </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About;