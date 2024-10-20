import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import './index.css';
const SearchAndSummary = () => {
    const [activeButton, setActiveButton] = useState('Plants');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return(
    <section className="searchAndSummary">
        <div className="searchBar">
            <CiSearch className="searchIcon"/>
            <input type="search" placeholder="Search Plant" className="searchBarInput"/>
            <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1729417818/image_91_ufubbn.png' alt="searchPlant" className="searchPlant" />
        </div>
        <div className="summary">
            <div>
                 <button
                        className={`customButton ${activeButton === 'Plants' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Plants')}
                    >
                        Plants
                    </button>
                    <button
                        className={`customButton ${activeButton === 'Pots' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Pots')}
                    >
                        Pots
                    </button>
            </div>
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>
    </section>
);}

export default SearchAndSummary;