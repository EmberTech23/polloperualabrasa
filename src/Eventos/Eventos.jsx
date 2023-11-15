import "./Eventos.css";
import React from "react";
import RappiLogo from '../assets/img/rappi.png';

const Eventos = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="fondoeventos with-text col-12">
                            <p className="texto fs-2 text-uppercase animate__animated animate__zoomInLeft"> Estamos emocionados de compartir contigo el delicioso secreto de la brasa peruana.</p> <br />
                            <p className="texto2 fs-1 text-uppercase animate__animated animate__zoomInLeft"> ¡Esperamos que disfrutes cada momento con nosotros!</p>
                        </div>

                        <div className="separador"> </div>
                        <br /><br />
                        <div className="programaevento text-center">PROGRAMA EL EVENTO ACORDE A TUS NECESIDADES</div>
                    </div>
                </div>
<br />

                <form className="formulario">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nombres" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="input-group mb-3"></div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione la naturaleza de evento...</option>
                        <option value="1">Evento familiar</option>
                        <option value="2">Evento empresarial</option>
                        <option value="3">Evento Social</option>
                    </select>
                    <br />

                    <div className="input-group mb-3"></div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tipo de evento...</option>
                        <option value="1">Almuerzo</option>
                        <option value="2">Media tarde</option>
                        <option value="3">Cena</option>
                    </select>
                    <br />

                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Numero de personas</label>
                        <select id="inputState" class="form-select">
                            <option selected>Elige...</option>
                            <option>    Entre 1-5</option>
                            <option>    Entre 6-10</option>
                            <option>    Entre 11-15</option>
                            <option>    Entre 16-20</option>
                            <option>    Entre 21-25</option>
                            <option>    Entre 26-30</option>
                        </select>
                    </div>
                    <br />
                    <div class="input-group">
                        <span class="input-group-text">Solicitudes adicionales </span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <br />
                    <div class="d-grid gap-2">
                        <button className="btn-enviar" type="button">Enviar</button>
                        <button className="btn-enviar" type="button">Cancelar</button>
                    </div>
                </form>

                <div className="separador"></div>

               
            </header>
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

export default Eventos;
