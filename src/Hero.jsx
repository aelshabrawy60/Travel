import './Hero.css'
import './DForm.jsx'
import './HeroText.jsx'
import DForm from './DForm.jsx'
import HeroText from './HeroText.jsx'

function Hero(){
    return (
        <div className='hero_container'>
            <HeroText/>
            <div className="hero_img">
                <img src="src/assets/react.svg"></img>
            </div>
            <DForm/>
        </div>
    )
}

export default Hero