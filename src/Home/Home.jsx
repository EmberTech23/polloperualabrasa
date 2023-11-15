import "./Home.css";
import 'animate.css';
import { Menu } from "../Menu/Menu";


export function Home() {
  return (
    <>
      <header>
        <Menu />
        <div className="container-fluid">
          <div className="row">
            <div className="primerfondo with-text col-12 ">
              <p className=" animate__animated animate__slideInDown">JUNTOS <br />
                SOMOS <br />
                PERUANIDAD</p>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="fab-container">
          <div className="fab shadow">
            <div className="fab-content">
              <span className="material-icons">
                <i className="bi bi-person-circle"></i>
              </span>
            </div>
          </div>

          <div className="sub-button shadow">
            <a href="google.com" target="_blank">
              <span className="material-icons">
                <i className="bi bi-telephone-fill"></i>
              </span>
            </a>
          </div>
          <div className="sub-button shadow">
            <a href="google.com" target="_blank">
              <span className="material-icons">
                <i className="bi bi-whatsapp fs-4"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
      <div className="separadorimagenes"></div>
      <div className="contenedorvideo container-fluid">
        <div className="row">
          <div className="video col-6 text-center" >
            <video autoPlay loop muted className="video-background img-fluid">
              <source src="../../src/assets/videos/WhatsApp Video 2023-11-15 at 16.15.02.mp4" type="video/mp4" />
            </video></div>
          <div className="diezanos col-6 img-fluid bg-black"></div>
          <div className="separadorimagenes"></div>
          <div className="row">
            <div className="col-6"></div>
            <div className="separadorimagenes"></div>
            <div className="container bg-white">
              <div className="row">
                <div className="col-12">
                  <h1 className="polloperu text-center bg">POLLO PERU A LA BRASA</h1>
                  <div className="linea-decorativa"></div>
                  <p className="textocreacion">
                    Hace años, en Lima, Perú, nació "Pollo Peru a la Brasa", un sueño que fusiona tradición e innovación culinaria. Con el pollo como protagonista, marinado en secretas especias y asado a la perfección en la brasa, el restaurante se convirtió en un ícono de la cocina peruana auténtica.

                    Desde su modesto inicio, la fama del lugar creció, manteniendo la esencia y autenticidad en cada nuevo local. "Pollo Peru a la Brasa" no solo ofrece deliciosas comidas, sino que también es un encuentro con la rica cultura peruana.

                    La brasa sigue ardiendo, recordándonos que la pasión por la autenticidad y la calidad es la clave de esta experiencia gastronómica. Hoy, el restaurante sigue siendo un símbolo de la tradición culinaria peruana, donde la magia de la brasa se encuentra con la hospitalidad para crear momentos inolvidables alrededor de la mesa.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="postresuno col-3"></div>
              <div className="postresdos col-3"></div>
              <div className="postrestres col-3"></div>
              <div className="postrescuatro col-3"></div>

            </div>
          </div>

        </div>
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
}

export default Home;



