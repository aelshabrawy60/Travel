import './SectionHeader.jsx'
import SectionHeader from './SectionHeader.jsx'
import './TopDestCard.jsx'
import TopDestCard from './TopDestCard.jsx'


function TopDest(){
    return(
        <>
            <SectionHeader title={"Top Destination"} first={true}/>
            <div class="container-xl">
                <div class ="row gap-4 p-2  justify-content-center">
                    <TopDestCard title={"France"} img={"src/assets/countries/France.jpg"} larg={false} note={"France is Europe's most diverse, tasty, and, in many ways, most exciting country to explore. Romantic hill towns and castles, meandering river valleys, and oceans of vineyards carpet this country's landscape."}/>
                    <TopDestCard title={"Thailand"} img={"src/assets/countries/Thailand.jpg"} larg={false} note={"Thailand is an absolute gem of a destination in South-East Asia, with mesmerizing islands, paradise white-sand beaches, and one of the most vibrant capital cities in the world. "}/>
                    <TopDestCard title={"United Kingdom"} img={"src/assets/countries/england.jpg"} larg={true} note = {"United Kingdom contains more heritage, per square mile, than any other nation, tracts of stunningly beautiful countryside, a coastline to die for and some of the most vibrant, multicultural cities on the planet. London is the usual gateway, and there's enough here to keep you busy for weeks."}/>
                    <TopDestCard title={"United States"} img={"src/assets/countries/unitedstates.jpg"} larg={false} note={"United States has a huge number of tourists visiting each year. From pristine and beautiful beaches to a rich and natural landscape of mountains and forests, the USA is one of the most beautiful and fascinating countries to explore."}/>
                    <TopDestCard title={"Australia"} img={"src/assets/countries/australia.jpg"} larg={false} note={"Australia's spectacular natural environment, multicultural communities, excellent food and wine, its weather and lifestyle and the friendliness and openness of its people make it one of the world's most attractive tourist destinations."}/>
                    <TopDestCard title={"Egypt"} img={"src/assets/countries/egypt.jpg"} larg={true} note={"Egypt is not only a country of antiquity, but also of magnificent landscapes offering cities and oases, deserts and beaches, ancient obelisks, and modern hotels. Bordered by the Mediterranean, the Red Sea, and the fabled Nile River, you can experience eras as far back as the dawn of civilization."}/>
                </div>
            </div>
        </>
    )
}

export default TopDest