import './WhyChoose.css'
import './ChooseCard.jsx'
import './SectionHeader.jsx'
import SectionHeader from "./SectionHeader"
import ChooseCard from './ChooseCard.jsx'



function WhyChoose(){
    return(
        <div className='why_choose_back'>
            <div className="why_choose_container container-xl">
                <SectionHeader title={"Why Choose Us"}/>
                <div className='why_choose_card_container d-flex gap-5 justify-content-center justify-content-xl-between pt-3 flex-wrap'>
                    <ChooseCard icon={<i class="fa-solid fa-globe"></i>} title={"Worldwide Coverage"} description={"over 1,32432 hotels over jefmlaskmd nkdasmdlkas sadmalks"}/>
                    <ChooseCard icon={<i class="fa-solid fa-hand-holding-dollar"></i>} title={"Worldwide Coverage"} description={"over 1,32432 hotels over jefmlaskmd nkdasmdlkas sadmalks"}/>
                    <ChooseCard icon={<i class="fa-solid fa-award"></i>} title={"Worldwide Coverage"} description={"over 1,32432 hotels over jefmlaskmd nkdasmdlkas sadmalks"}/>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose