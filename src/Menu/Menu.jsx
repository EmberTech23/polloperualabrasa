import './Menu.css'
export function Menu() {
    return (

        <>
           
            <nav className="navbar navbar-expand-lg menu navbar-dark">
                <div className="container-fluid  justify-content-center text-center">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item mx-5">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">
                                    Menu
                                </a>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link disabled" aria-disabled="true">
                                    <img src="../../src/assets/pierna-de-pollo.png" alt="" className='img-fluid mx-3' />
                                </a>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Ubicacion
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Ubicacion
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            
            </nav>
          
           
            



        </>
    )
}