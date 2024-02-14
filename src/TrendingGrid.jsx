import { useState } from 'react'
import './TrendingCard.jsx'
import TrendingCard from './TrendingCard.jsx'

function TrendingGrid(){
    const [cards, setCards] = useState([])

    return(
        <div class= "container">
            <div class="row justify-content-center gap-0 row-gap-4">
                <TrendingCard img={"src/assets/cards/istanbul.jpg"} reviews={4} price={720} location={"Istanul, Turkey"} title={"Tow hour walking tour of manhaten"} duration={"3h 30min"}/>
                <TrendingCard img={"src/assets/cards/london.jpg"} reviews={4} price={340} location={"London, United Kingdom"} title={"Stonehenge, Wisdor Castle"} duration={"3h 30min"}/>
                <TrendingCard img={"src/assets/cards/istanbul2.jpg"} reviews={5} price={570} location={"Istanul, Turkey"} title={"Giverny and Versailles small group"} duration={"3h 30min"}/>
                <TrendingCard img={"src/assets/cards/istanbul3.jpg"} reviews={3} price={230} location={"Istanul, Turkey"} title={"Giverny and Versailles small group"} duration={"3h 30min"}/>

                <TrendingCard img={"src/assets/cards/istanbul4.jpg"} reviews={3} price={230} location={"Istanul, Turkey"} title={"Giverny and Versailles small group"} duration={"3h 30min"}/>
                <TrendingCard img={"src/assets/cards/istanbul5.jpg"} reviews={3} price={230} location={"Istanul, Turkey"} title={"Giverny and Versailles small group"} duration={"3h 30min"}/>
                <TrendingCard img={"src/assets/cards/egypt.jpg"} reviews={3} price={230} location={"Istanul, Turkey"} title={"Giverny and Versailles small group"} duration={"3h 30min"}/>
                <TrendingCard img={"src/assets/cards/australia.jpg"} reviews={3} price={230} location={"Istanul, Turkey"} title={"Giverny and Versailles small group"} duration={"3h 30min"}/>
            </div>
        </div>
    )
}

export default TrendingGrid