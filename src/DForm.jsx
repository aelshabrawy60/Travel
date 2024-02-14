import './DForm.css'
import { useState } from 'react'

function DForm(){
    const [selected, setSelected] = useState(0)

    function handleClick(id){
        setSelected(id)
        document.getElementById(id).firstChild.className = "btn_selected"
        for(let i=0; i<3; i++){
            if(i != id){
                document.getElementById(i).firstChild.className = "btn_unselected"
            }
        }
    }
    return(
        <>
            <div className="d_form_container">
                <div className="btns_form">
                    <ul>
                        <li id= "0" onClick={() => handleClick(0)}><button className="btn_selected"><i class="fa-solid fa-plane-up"></i></button> <div>Flight</div></li>
                        <li id= "1" onClick={() => handleClick(1)}><button className="btn_unselected"><i class="fa-solid fa-hotel"></i></button> <div>hotels</div></li>
                        <li id= "2" onClick={() => handleClick(2)}><button className="btn_unselected"><i class="fa-solid fa-earth-europe"></i></button> <div>Holidays</div></li>
                    </ul>
                </div>
                <div className="form">
                    <form>
                        <div className='form_section'>
                            <label className='form_section_title'>Destination</label>
                            <div className='form_item_container'>
                                <i class="fa-solid fa-location-dot"></i>
                                <input type='text' placeholder='Where are you going' className='desnation'></input>
                            </div>
                        </div>

                        <div className='form_section'>
                            <label className='form_section_title'>Depature - Return</label>
                            <div className='form_item_container form_date'>
                                <i class="fa-solid fa-calendar-days"></i>
                                <input type='date'></input>
                                <p>-</p>
                                <input type='date'></input>
                            </div>
                        </div>

                        <div className='form_section'>
                            <label className='form_section_title'>Travelrs</label>

                            <div className='form_item_container'>
                                <i class="fa-solid fa-user"></i>
                                <select>
                                    <option>1 Adults - 1Child</option>
                                    <option>2 Adults - 1Child</option>
                                    <option>3 Adults - 1Child</option>
                                    <option>4 Adults - 1Child</option>
                                </select>
                            </div>
                        </div>

                        <input type='submit' value={"Search"}></input>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DForm