import Link from "next/link"

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-4 px-3">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/careers">Careers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header