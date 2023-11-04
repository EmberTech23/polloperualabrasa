import './Home.css'
import { Menu } from '../Menu/Menu'

export function Home() {

    return (
        <>
            <header>
                <Menu></Menu>
                <div className='banner4'>

                    <div className="w-100"></div>
                    <button className='btn botnmio fw-bold text-white '>NUESTRA CARTA</button>
                </div>
            </header>

            <section>
                <div class="fab-container">
                    <div class="fab shadow">
                        <div class="fab-content">
                            <span class="material-icons">
                                <i class="bi bi-person-circle"></i>
                            </span>
                        </div>
                    </div>

                    <div class="sub-button shadow">
                        <a href="google.com" target="_blank">
                            <span class="material-icons">
                                <i class="bi bi-telephone-fill"></i>
                            </span>
                        </a>
                    </div>
                    <div class="sub-button shadow">
                        <a href="google.com" target="_blank">
                            <span class="material-icons">
                                <i class="bi bi-whatsapp fs-4"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <div className="banner5 text-white fw-bold text-center ">
                 <p style={{ margin: '0 auto', maxWidth: '80%', paddingTop: '180px',fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
                    "En el corazón culinario de Medellín, la vibrante ciudad colombiana que siempre busca la excelencia gastronómica, se alza un verdadero emblema de la exquisitez peruana: 'Pollo Perú a la Brasa'. Este restaurante de renombre es la personificación de la tradición culinaria peruana fusionada con la innovación y creatividad local.

                    En cada bocado de su exquisito pollo asado, se puede saborear la autenticidad de Perú, con sus raíces profundamente arraigadas en la rica tradición culinaria de la nación sudamericana. Un apasionado peruano, inspirado por el deseo de compartir los sabores de su tierra natal, encendió la llama de 'Pollo Perú a la Brasa' en Medellín. Aunque el destino lo llamó de vuelta a Perú, su legado perdura en manos de nuevos dueños que han continuado la misión de celebrar la autenticidad de la cocina peruana.

                    La experiencia culinaria en 'Pollo Perú a la Brasa' es una invitación a un viaje sensorial inigualable. Es el lugar donde el pasado y el presente se encuentran en un banquete de sabores, y donde la tradición y la creatividad danzan en armonía en el corazón de Medellín."</p>
            </div>








            <div className="banner">

            </div>











            <div className="row row-cols-1 row-cols-md-3 my-5">
                <div className="col text-center">
                    <div className="card h-100 p-3 shadow">
                        <img src="../../src/assets/img/tarjeta1.webp" alt="" className='img-fluid w-100' />
                        <h3>SERVICIO 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                        <hr />
                        <h5 className='fw-bold text-success'>$500.000 COP</h5>
                        <button className='btn btn-primary'>
                            Ampliar  <i className="bi bi-shop-window"></i>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="col text-center">
                        <div className="card h-100 p-3 shadow">
                            <img src="../../src/assets/img/tarjeta2.webp" alt="" className='img-fluid w-100' />
                            <h3>SERVICIO 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                            <hr />
                            <h5 className='fw-bold text-success'>$500.000 COP</h5>
                            <button className='btn btn-primary'>
                                Ampliar  <i className="bi bi-shop-window"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="col text-center">
                        <div className="card h-100 p-3 shadow">
                            <img src="../../src/assets/img/tarjeta3.jpg" alt="" className='img-fluid w-100' />
                            <h3>SERVICIO 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                            <hr />
                            <h5 className='fw-bold text-success'>$500.000 COP</h5>
                            <button className='btn btn-primary'>
                                Ampliar  <i className="bi bi-shop-window"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>










            <footer>
                <div className="footer container-fluidtext-white">
                    <div className="row p-5">
                        <div className="col-6 text-end border-end">
                            <h6>Al utilizar nuestro sitio web, usted autoriza a Pollo Peru a la brasa  para recolectar y tratar sus datos personales e información sobre su experiencia en la página para ofrecerle nuestro mejor servicio, de acuerdo con nuestras Políticas de Cookies y de Protección de datos personales; Si no está de acuerdo, le pedimos el favor de abstenerse de navegar en  nuestro sitio web. Recuerde que en cualquier caso, tiene derecho a conocer, actualizar y rectificar sus datos personales y, sólo en los casos en que sea procedente, a suprimirlos o revocar la autorización otorgada para su tratamiento, enviando un correo con su solicitud al email <a href="mailto:polloperualabrasa@gmail.com"></a></h6>
                            <h5>Medellin-Colombia</h5>
                            <h5>Todos los derechos reservados &copy;</h5>
                        </div>
                        <div className="col-6 align-self-center fw-bold">
                            <i className="bi bi-instagram p-2 fs-4"></i>
                            <i className="bi bi-whatsapp p-2 fs-4"></i>
                            <i className="bi bi-tiktok p-2 fs-4"></i>
                            <p>Carrera 43A 1 Sur 150, Medellin</p>
                            <p>Telefono:604 3695632</p>
                            <p>Domicilios: 320 456 32 56</p>
                            <p>Correo: polloperualabrasa@gmail.com</p>

                        </div>

                    </div>
                </div>
            </footer>











        </>
    )
}

<div className=" col-1 align-self-center text-end">
    <p className='fw-bold textcolor-white'>
        "En el corazón culinario de Medellín, la vibrante ciudad colombiana que siempre busca la excelencia gastronómica, se alza un verdadero emblema de la exquisitez peruana: 'Pollo Perú a la Brasa'. Este restaurante de renombre es la personificación de la tradición culinaria peruana fusionada con la innovación y creatividad local.
        En cada bocado de su exquisito pollo asado, se puede saborear la autenticidad de Perú, con sus raíces profundamente arraigadas en la rica tradición culinaria de la nación sudamericana. Un apasionado peruano, inspirado por el deseo de compartir los sabores de su tierra natal, encendió la llama de 'Pollo Perú a la Brasa' en Medellín. Aunque el destino lo llamó de vuelta a Perú, su legado perdura en manos de nuevos dueños que han continuado la misión de celebrar la autenticidad de la cocina peruana.
        La experiencia culinaria en 'Pollo Perú a la Brasa' es una invitación a un viaje sensorial inigualable. Es el lugar donde el pasado y el presente se encuentran en un banquete de sabores, y donde la tradición y la creatividad danzan en armonía en el corazón de Medellín."
    </p>
</div>