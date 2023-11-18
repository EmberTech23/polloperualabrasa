import './Reservas.css'
import React from "react";
import RappiLogo from '../assets/img/rappi.png';
import arrozchaufa from '../assets/img/arrozchaufa.jpg'


const Reservas = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="fotoReservas with-text col-12">
                        <p className="texto fs-2 text-uppercase animate__animated animate__zoomInLeft">Explora Opciones para Disfrutar de Momentos Especiales. </p> <br /><br /><br />
                        <p className="texto2 fs-1 text-uppercase animate__animated animate__zoomInLeft"> ¡Descubre Nuestro Espacio Único!</p>
                    </div>
                </div>
            </div>

            <body>
                <div className="container">
                    <div className="row hola">
                        <div className="col-6">
                            <div className="card text-center text-bg-dark">
                                <img src={arrozchaufa} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className="card-text-container">
                                        <h5 className="card-title">Mesa Estándar</h5>
                                        <hr className="linea-separadora" />
                                        <p className="card-text fw-bold">
                                            Ideal para encuentros formales y cenas en pareja.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Incluye : Acceso a menú estándar y servicio de atención personalizada.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Capacidad : 4 Personas
                                        </p>
                                        <button className="btn-reservar fw-bold">Reservar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card text-center text-bg-dark">
                                <img src={arrozchaufa} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className="card-text-container">
                                        <h5 className="card-title">Mesa VIP</h5>
                                        <hr className="linea-separadora" />
                                        <p className="card-text fw-bold">
                                            Ideal para celebraciones y eventos especiales.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Incluye : Acceso a menú VIP, servicio exclusivo y postre de cortesía.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Capacidad : 6 Personas
                                        </p>
                                        <button className="btn-reservar fw-bold">Reservar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row hola">
                        <div className="col-6">
                            <div className="card text-center text-bg-dark">
                                <img src={arrozchaufa} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className="card-text-container">
                                        <h5 className="card-title">Rincón Acogedor</h5>
                                        <hr className="linea-separadora" />
                                        <p className="card-text fw-bold">
                                            Ideal para reuniones íntimas y conversaciones relajadas.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Incluye : Café o té de cortesía y ambiente tranquilo.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Capacidad : 2 Personas
                                        </p>
                                        <button className="btn-reservar fw-bold">Reservar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card text-center text-bg-dark">
                                <img src={arrozchaufa} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className="card-text-container">
                                        <h5 className="card-title">Mesa al Aire Libre</h5>
                                        <hr className="linea-separadora" />
                                        <p className="card-text fw-bold">
                                            Ideal para disfrutar de una comida al aire libre con amigos.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Incluye : Acceso a menú al aire libre y servicio de sombrilla si es necesario.
                                        </p>
                                        <p className="card-text fw-bold">
                                            Capacidad : 8 Personas
                                        </p>
                                        <button className="btn-reservar fw-bold">Reservar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </body>













            <footer>
                <div className="container-fluid footer">
                    <div className="row">
                        <div className="logobrasa col-4"></div>

                        <div className="rappi col-4">
                            <div className="fw-bold text-white">APLICACIONES</div><br />
                            <a href="https://www.rappi.com.co/restaurantes/900277898-peru-pollo-a-la-brasa?utm_source=google&utm_medium=organic&utm_campaign=place-action-link" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={RappiLogo}
                                    alt="Logo de Rappi"
                                    style={{ width: '70px', height: '30px', marginLeft: '10px' }}
                                />
                            </a>
                        </div>

                        <div className="iconos col-4">
                            <div className="fw-bold text-white">SÍGUENOS</div><br />
                            <div className="footer-icons">
                                <a href="https://www.facebook.com/alabrasapollo/" className="text-decoration-none"><i className="bi bi-facebook footer-icon"></i></a>
                                <a href="https://www.instagram.com/alabrasaperupollo/" className="text-decoration-none"><i className="bi bi-instagram footer-icon"></i></a>
                                <a href="https://www.threads.net/@alabrasaperupollo" className="text-decoration-none"><i className="bi bi-threads-fill footer-icon"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-white">
                            <div className="copy text-center fw-bold ">
                                © 2023 PerúPolloAlaBrasa. Todos los derechos reservados <br />
                                Created By: InnoCoders
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    );
};

export default Reservas;