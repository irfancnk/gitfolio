// PACKAGES
// MODULES
// STYLES
import './NavigationBar.css';

function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">Navbar</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <span className="nav-link">Home</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Projects</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Hire me!</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link disabled">Demo</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;
