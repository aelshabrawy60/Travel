import './ChooseCard.css'

function ChooseCard({icon, title, description}){
    return(
        <div className="Choose_card_container">
            <div className="icon_card">
                {icon}
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ChooseCard