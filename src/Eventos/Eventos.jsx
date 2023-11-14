import "./Eventos.css";
import React from "react";

const Eventos = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="fondoeventos with-text col-12">
                            <p className="texto fs-2 text-uppercase"> Estamos emocionados de compartir contigo el delicioso secreto de la brasa peruana.</p> <br />
                            <p className="texto2 fs-1 text-uppercase"> ¡Esperamos que disfrutes cada momento con nosotros!</p>
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
                <br />
                falta pegar el footer del HOME.....
                <br />
            </footer>
        </>

    );
};

export default Eventos;
