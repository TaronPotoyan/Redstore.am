import { useState , useEffect } from "react";
import { Link } from "react-router-dom";


function Header() {
    const [scrolled, setScrolled] = useState(false);

    const [user, setUser] = useState(() => {
        try {
            const userString = localStorage.getItem('user');
            return userString ? JSON.parse(userString) : null;
        } catch (error) {
            console.error("Failed to parse user data:", error);
            return null;
        }
    });

   useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
  }, []);
    

    return (
        <header className={scrolled ? "scrolled" : ""}>
            <Link to="/">
                <img className="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEUAAABLAA3QACbZACdyABUpAAccAAXbACjjACkQAAM7AAugAB25ACHdACjYACfhACkzAAmQABq8ACItAAiVABtWABCCABffACheABHFACSoAB5rABOaAByeAB0WAARjABKvACCBABd8ABYkAAbDGkhDAAABBElEQVR4Aa2RBXbDQAwFZSuJTPoyh/n+d+x2/awydx4szIKA/ock5cX7ZrmiVDjLqXjryqwiBaxusqp+qRJWaUmC7HoVe/H4YAx2CWQjOd2agXU1ySZDsBuXWwluR1EWNBrAPLu9BXegWca19jTRMnhLLomO6ldPBtgQJSOrKbAG1tOv5zU4jbNDZm2cXATaxNl1DblQZLOnyKjQnc9KesHNz/tNx2/6n86LP1cGWOLCo/U8pX3uDgqW5xVqyDkboIfntbWjhxocSz4v6zUDml5rovtiuwaQncnZZMGymoqt+dE1L7otCkeyG73gdMmUEWDN2oJeU/fbtdk6LRN6n/uSvs0Dq+EScqFlP+MAAAAASUVORK5CYII=" alt="Avatar" />
            </Link>
            
            <nav>
                <ul>
                    <li id="Categori"><Link to="/categories">Կատեգորիաներ</Link></li>
                    <li><Link to="/aboutus">Մեր Մասին</Link></li>
                    <li><Link to="/aparik">Ապառիկ</Link></li>
                    <li><Link to="">Առաքում/Վճարում</Link></li>
                </ul>
            </nav>

            <div style={{ position: 'relative', display: 'inline-block' }}>
                <input type="text" placeholder="Փնտրել..." className="Search" style={{ paddingRight: '32px' }} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', pointerEvents: 'none' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>

            <div className="Log-in">
                {user ? (
                    <>
                        <h3>{user.name}</h3>
                        <button onClick={() => {
                            localStorage.removeItem('user');
                            setUser(null);
                        }}>Log out</button>
                    </>
                ) : (
                    <Link to="/login" id="Log-in">Մուտք գործել</Link>
                )}
            </div>
         
        </header>
    );
}

export default Header;