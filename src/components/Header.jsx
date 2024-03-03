import Flag from '../assets/flag.png';
import Statue from '../assets/statue.png';

function Header() {
    return(
        <>
            <div className="header-wrapper">
                <img src={Statue} id="statue"/>
                <div className="header">
                    <h1> US CIVICS STUDY AID</h1>
                    <h2> "How much of a U.S. civics enthusiast are you? Test your knowledge and prepare for U.S. citizenship with this study aid." </h2>
                    <h3>Number of cards: 100</h3>
                </div>
                <img src={Flag} id="flag"/>
            </div>
        </>
    )
}

export default Header;