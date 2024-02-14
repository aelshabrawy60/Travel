import './TrendingCard.css'

function TrendingCard({reviews, sale, featured, img, title, location, duration, price}){
    let reviews_stars = []
    let features = []


    function calc_reviews_stars(){
        let star = []
        for(let i=0; i< 5; i++){
            if(i < reviews){
                star.push(<i class="fa-solid fa-star" style={{color: "rgb(146, 210, 44)"}}></i>)
            }else{
                star.push(<i class="fa-solid fa-star" style={{color: "gray"}}></i>)
            }
        }
        reviews_stars = star
    }

    function calc_featues(){
        let featured_n = <div className='featuers_container Featuerd'>Featuerd</div>
        let sale_n = <div className='featuers_container Sale'>{sale}25%</div>

        if(featured){
            features.push(featured_n)
        }   

        if(sale!= null){
            features.push(sale_n)
        }
    }

    calc_featues()
    calc_reviews_stars()

    return(
        <div className="trending_card_container col-lg-3 col-md-6 col-12">
            <div className="trending_card_top">
                <img src={img}></img>
                <i class="fa-regular fa-heart"></i>
                <div className="trending_card_price"> From <h4>${price}.00</h4></div>
                <div className='trending_card_featurs'>
                    {features}
                </div>
            </div>
            <div className="trending_card_bottom">
                <div className="trending_card_destination">
                    <i class="fa-solid fa-location-dot"></i>
                    {location}</div>
                <div className="trending_card_title"> <h5>{title} </h5></div>
                <div className="trending_card_reviews">
                    <div>
                        {reviews_stars}
                    </div>
                    48 reviews
                </div>
                <div className="trending_card_duratoin">
                    <i class="fa-regular fa-clock"></i>
                    {duration}
                </div>
            </div>
        </div>
    )
}

export default TrendingCard