import './Menu.css'
export function Menu() {
    return (

        <>
           
            <nav className="navbar navbar-expand-lg menu navbar-dark menu fixed-top">
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
                                    INICIO
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link active" href="#">
                                    CARTA
                                </a>
                            </li>
                    
                            <li className="nav-item mx-5">
                                <a className="nav-link active " aria-disabled="true">
                                EVENTOS
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link active" aria-disabled="true">
                                RESERVAS
                                </a>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link active" aria-disabled="true">
                                CONTACTANOS
                                </a>
                            </li>
                            <div className="separador w-100"></div>
                        </ul>

                    </div>
                </div>
            
            </nav>
          
           
            



        </>
    )
}