import './Navbar.css'
import { useEffect } from 'react';

function Navbar(){

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            document.getElementById("navbar").style.backgroundColor = "rgb(0, 119, 167)";
            document.documentElement.style.setProperty('--bs-navbar-color', 'white'); 
        } else {
            document.getElementById("navbar").style.background = "none";
        }
    }

    function handle_toggle(){
        if(document.getElementById('nav_btn').getAttribute('aria-expanded') == "true"){
            document.getElementById("navbar").style.background = "rgb(0, 119, 167)";
            console.log("done")
        }else{
            document.getElementById("navbar").style.background = "none";
        }
    }
    

    return(
        <nav id ="navbar"  class="navbar navbar-expand-lg">
            <div class="container-xxl">
                <a class="navbar-brand" href="#">TRAVELR</a>
                <button onClick={handle_toggle} id="nav_btn" class="navbar-toggler t_b" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-angles-down"></i>
                </button>
                <div class="collapse navbar-collapse pt-4 pt-lg-0" id="navbarSupportedContent">
                    <ul class="navbar-nav column-gap-3 ms-auto mb-2 me-5 mb-lg-0 fs-6">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Flights</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Hotels</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Holidays</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Cabs</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Buses</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Cruise</a>
                        </li>
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar