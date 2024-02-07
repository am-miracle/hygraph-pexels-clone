import "./Navbar.css"
import Searchbar from "./SearchBar";
function Navbar(){
    return(
        <>
        <div className="container">
            <a href="/" className="left">
                <img
                    className="Logo"
                    src={"/assets/logo.svg"}
                    alt="logo"
                />
                <h2>Pexels-Clone</h2>
            </a>
            <Searchbar />
            <div className="Right">
            <div className="dropdown">
            <button className="dropbtn">Explore</button>
                <div className="dropdown-content">
                    <a href="#">Discover Photos</a>
                    <a href="#">Popular Searches</a>
                    <a href="#">Free Videos</a>
                    <a href="#">Free Videos</a>
                </div>
            </div>
            <p>License</p>
            <span className="material-symbols-outlined">notifications</span>
            <img  className="upload" src={""} /></div>
        </div>
        </>
    );
}
export default Navbar;