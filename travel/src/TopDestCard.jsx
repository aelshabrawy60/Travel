import './SectionHeader.css'
import './TopDestCard.css'

function TopDestCard({title, img, larg, note}){
    let col = ""
    if(larg){
        col = "Top_Dest_Card col-lg-6 col-md-5 col-12"
    }else{
        col = "Top_Dest_Card col-lg col-md-5 col-12"
    }
    return(
        <div className={col} style={{backgroundImage:`url(${img})`}}>
            <h4 className="Top_Dest_Card_head">{title}
                <div className='section_header_line card_header_line'></div>
            </h4>

            <div className='top-dest_card_note'>
                <p>
                    {note}
                </p>
            </div>
        </div>
    )
}

export default TopDestCard