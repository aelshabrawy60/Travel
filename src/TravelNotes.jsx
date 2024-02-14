import './TravelNotes.css'

function TravelNotes(){
    return(
        <div className="travel_notes_container">
            <div className="travel_notes_img">
                <img src="public/notes.jpg"></img>
            </div>
            <div className="travel_notes_text">
                <h1>Travel Tips</h1>
                <p>
                    spend a few hours sitting in a park or on a busy street corner by yourself just watching day
                    to day life happen in front of you. Slow down your train of thought and pay close attention to 
                    the details.
                </p>
                <button>Get Inspired</button>
            </div>
        </div>
    )
}

export default TravelNotes