import "./Contactanos.css";
import React from "react";
import RappiLogo from '../assets/img/rappi.png';

const Contactanos = () => {
    return (
        <>
            <div className="contacto1">
                <div className="centered-text text-white fw-bold">
                    NUESTRO INGREDIENTE MÁS <br /> IMPORTANTE, ERES TÚ
                </div>
            </div>

            <body>
                <div className="informacion container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="info text-dark fw-bold">
                                INFORMACIÓN
                            </div>
                            <div className="info2 text-start">
                                <div className="detalle fw-bold"><p>SEDE POBLADO</p></div>
                                <div className="detalle">
                                    <p className="detalle-titulo fw-bold">Dirección:</p>
                                    <p className="detalle-info">Cra. 23 # 26 – 57</p>
                                </div>
                                <div className="detalle">
                                    <p className="detalle-titulo fw-bold">Teléfono:</p>
                                    <p className="detalle-info">(606) 884 68 23 – (606) 884 63 31</p>
                                </div>
                                <div className="detalle">
                                    <p className="detalle-titulo fw-bold">HORARIO DE ATENCIÓN</p>
                                    <p className="detalle-info">
                                        Lunes a Sábado de 8:30am – 7:30pm<br />
                                        Domingos y Festivos 10:00am – 6:00pm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="escribenos text-dark fw-bold">
                                ESCRÍBENOS
                            </div>
                            <div className="info3">
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            placeholder="Nombre"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Correo Electrónico"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            placeholder="Número de Contacto"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="mensaje"
                                            rows="4"
                                            placeholder="Mensaje"
                                        ></textarea>
                                    </div>
                                    <button className="btn-enviar" type="button">
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="ubicacion w-100 d-block">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.466577875245!2d-75.57436312623314!3d6.202014326818309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683c932aecc37%3A0xfcaf1415da08a718!2sPer%C3%BA%20Pollo%20a%20la%20Brasa!5e0!3m2!1ses-419!2sco!4v1699988102406!5m2!1ses-419!2sco"
                                    width="100%"
                                    height="450"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
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

export default Contactanos;
