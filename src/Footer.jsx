
import './Footer.css'


function Footer(){
    return(
        <div className='footer_container p-5'>
            <div className='footer_left'>
                <div className='help'>
                    <h6>Need Help?</h6>
                    <div className=" d-flex align-items-center mt-3">
                        <i class="fa-solid fa-phone-volume"></i>
                        <div>
                            <p className=' mb-2'>Got Questions?</p>
                            <p>Call US: +2020 3483 3202</p>
                        </div>
                    </div>
                </div>
                <div className='contact_info mt-4'>
                    <h6>Contact Info?</h6>
                    <p>1223 NE 51st Ave, Miami, FL 1245</p>
                    <div className='icons d-flex gap-4 fs-4'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className='footer_mid ms-md-auto me-md-auto'>
                <ul className='footer_mid_main'>
                    <li>
                        <ul className='p-0'>
                            <h6 className='mb-4'>Company</h6>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </li>
                    <li>
                        <ul className='p-0'>
                            <h6 className='mb-4'>Other Servics</h6>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </li>
                    <li>
                        <ul className='p-0'>
                            <h6 className='mb-4'>Support</h6>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='footer_right'>
                <div className='mail mb-4'>
                    <h5> Maling list</h5>
                    <p>Sign Up to get lastest updates</p>
                    <div className='d-flex gap-3 flex-wrap'>
                        <input type='text' placeholder='Your Email' className='p-2'></input>
                        <button className='p-3'>Subscribe</button>
                    </div>
                </div>
                <div className='we_accept'>
                    <h5>We Accept</h5>
                    <icons></icons>
                </div>
            </div>
        </div>
    )
}

export default Footer