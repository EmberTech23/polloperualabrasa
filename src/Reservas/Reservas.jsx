import './Reservas.css'
import React from "react";
import RappiLogo from '../assets/img/rappi.png';

const Reservas = () => {
    return (
        <>
            <div>
                <h2>Sección de Reservas</h2>
            </div>

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