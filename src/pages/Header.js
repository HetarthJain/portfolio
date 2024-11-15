
function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="logo1">
                    <h1 className="hj">Hetarth Jain</h1>
                </div>
                <div className="list">
                    <ul>
                        <li><a href="#main">Home</a></li>
                        <li><a href="#exp">Experience</a></li>
                        <li><a href="#proj">Projects</a></li>
                        <li><a href="/article">Articles</a></li>
                        <li><a href="#contactme">Contact</a></li>
                    </ul>
                </div>
            </div>
            <hr />
        </header>
    )
}
function Footer() {
    return (
        <footer>
            <hr className="foot" />
            <p>Hetarth Jain</p>
        </footer>
    )
}
export { Header, Footer };

