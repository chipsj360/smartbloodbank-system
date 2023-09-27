

const Navbar = () => {
    return ( 
        <div>
           <nav className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3" id="mainNav">
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><span>Brand</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="features.html">Features</a></li>
                    <li className="nav-item"><a className="nav-link" href="integrations.html">Integrations</a></li>
                    <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="contacts.html">Contacts</a></li>
                </ul><a className="btn btn-primary shadow" role="button" href="signup.html">Sign up</a>
            </div>
        </div>
    </nav>            

        </div>
     );
}
 
export default Navbar;