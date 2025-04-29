import { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logoscale'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () =>{
    // useEffect(() =>{
    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    const [letterClass, setLetterClass]= useState('text-animate')

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();




    const nameArray = ['','L','u','c','a','s,','', 'u', 'm']
    const jobArray = [
            'd',
             'e',
             's',
             'e',
             'n',
             'v',
             'o',
             'l',
             'v',
             'e',
             'd',
             'o',
             'r',
             '',
             'w',
             'e',
             'b'    
           ]

    return(

        <div className="container home-page">
            <div className="text-zone">
                <h1>OLÁ,<br/> Eu sou o     
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                {/* ashwathan */}
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                {/* Web developer */}
                </h1>
                <h2>Aprendiz de desenvolvimento web</h2>
                <Link to="/contact" className='flat-button'>ENTRE EM CONTATO COMIGO</Link>
                <Link to="https://drive.google.com/file/d/19UpOWW7UME300Zo7Y1CHAv4Cq9JEwxtQ/view?usp=sharing" className='flat-button' target='_blank'>MEU CURRÍCULO</Link>
            </div>
        </div>
    )
}

export default Home;