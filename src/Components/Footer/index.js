import './index.css';
const Footer = () => (
    <footer>
        <div className="footerDetails">
            <div className="subscribe">
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                <input type="email" placeholder="Enter your email" />
                <button>SUBSCRIBE</button>
            </div>
            <div className="aboutUs">
                <h1>ABOUT US</h1>
                <ul>
                    <li>Our Story</li>
                    <li>Blogs</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Help & Support</li>
                </ul>
            </div>
            <div className="ourServices">
                <h1>OUR SERVICES</h1>
                <ul>
                    <li>Book Maali</li>
                    <li>Plant Day Care</li>
                    <li>Rent Plants</li>
                    <li>Plants & Pots</li>
                    <li>Gardening Tools</li>
                </ul>
            </div>
            <div className="usefulLinks">
                <h1>USEFUL LINKS</h1>
                <ul>
                    <li>My Account</li>
                    <li>Orders & Returns</li>
                    <li>Track Order</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Return, Refund & Replacement Policyy</li>
                </ul>
            </div>
            <div className="getInTouch">
                <h1>GET IN TOUCH</h1>
                <p>
                Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003.
                </p>
                <p>
                Call: +919958287272
                </p>
                <p>
                Email: care@chaperoneplants.com
                </p>
            </div>
        </div>
        <div className='chaperoneAndFollow'>
            <h1>
            CHAPERONE
            </h1>
            <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
            </p>
            <h1>
                Follow us on
            </h1>
            <div>
                <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1729429228/image_84_h5veeu.png' alt = 'instagram' className = 'socialMediaIcon' />
                <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1729429228/image_85_rcjk3t.png' alt = 'facebook' className = 'socialMediaIcon' />
                <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1729429228/image_86_zlu9or.png' alt = 'threads' className = 'socialMediaIcon' />
                <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1729429228/image_87_fxokel.png' alt = 'youtube' className = 'socialMediaIcon' />
                <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1729429227/image_88_tqz2cm.png' alt = 'linkedin' className = 'socialMediaIcon' />
            </div>
        </div>
        <div className='copyright'>
            <h1>
            © 2023, chaperone.com All rights reserved.
            </h1>
        </div>
    </footer>
)

export default Footer