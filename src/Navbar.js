export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Komi Food Truck </a>
        <ul>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}