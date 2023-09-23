import Link from "next/link"

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark py-4 px-3">
            <div class="container-fluid">
                <Link class="navbar-brand" href="/">LOGO</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" href="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/features">Features</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/careers">Careers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header