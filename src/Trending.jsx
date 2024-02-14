import { useState } from 'react'
import './SectionHeader.jsx'
import './Trending.css'
import './TrendingGrid.jsx'
import SectionHeader from "./SectionHeader"
import TrendingGrid from './TrendingGrid'

function Trending(){

    const [selected, setSelected] = useState(0)

    function handleClick(id){
        setSelected(id)
        document.getElementById(id + "_t").firstChild.className = "btn_selected_trending"
        for(let i=0; i<3; i++){
            if(i != id){
                document.getElementById(i + "_t").firstChild.className = "btn_unselected_trending"
            }
        }
    }

    return(
        <div className="trending_container">
            <SectionHeader title={"Trending"}/>
            <div className='trending_choose_btns btns_form'>
                    <ul>
                        <li id= "0_t" onClick={() => handleClick(0)}><button className="btn_selected_trending"><div>Flight</div></button> </li>
                        <li id= "1_t" onClick={() => handleClick(1)}><button className="btn_unselected_trending"> <div>hotels</div></button></li>
                        <li id= "2_t" onClick={() => handleClick(2)}><button className="btn_unselected_trending"><div>Holidays</div></button> </li>
                    </ul>
            </div>
            <TrendingGrid/>
        </div>
    )
}

export default Trending